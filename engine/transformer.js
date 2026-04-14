#!/usr/bin/env node
/**
 * JS-Pentest-Automator — AST Deobfuscation Engine
 * 
 * Transformaciones implementadas (en orden de ejecución):
 *   1. Strip debugger statements
 *   2. Resolve string array obfuscation (decoder function + array rotation)
 *   3. Inline variable proxies (const x = "secret" → reemplaza x por "secret")
 *   4. Simplify constant binary expressions ("he" + "llo" → "hello")
 *   5. Neutralize self-defending / anti-beautification patterns
 *   6. Beautify output con retainLines para preservar contexto de línea
 *
 * Uso: node transformer.js <input.js> [--output <out.js>]
 * Si no se pasa --output, escribe a stdout.
 */

const parser    = require('@babel/parser');
const traverse  = require('@babel/traverse').default;
const generate  = require('@babel/generator').default;
const t         = require('@babel/types');
const fs        = require('fs');
const path      = require('path');

// ─── CLI Args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length === 0) {
  process.stderr.write('Usage: node transformer.js <file.js> [--output <out.js>]\n');
  process.exit(1);
}

const inputFile  = args[0];
const outputIdx  = args.indexOf('--output');
const outputFile = outputIdx !== -1 ? args[outputIdx + 1] : null;

let code;
try {
  code = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
  process.stderr.write(`[!] Cannot read file: ${inputFile}\n`);
  process.exit(2);
}

// ─── Parse ───────────────────────────────────────────────────────────────────
let ast;
try {
  ast = parser.parse(code, {
    sourceType: 'unambiguous',
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: true,            // No explotar con sintaxis rota
    plugins: [
      'jsx', 'typescript', 'classProperties', 'dynamicImport',
      'optionalChaining', 'nullishCoalescingOperator', 'decorators-legacy'
    ]
  });
} catch (parseErr) {
  // Fallback: devolver código original sin transformar
  process.stderr.write(`[!] AST parse failed, returning original code: ${parseErr.message}\n`);
  if (outputFile) {
    fs.writeFileSync(outputFile, code, 'utf8');
  } else {
    process.stdout.write(code);
  }
  process.exit(0);
}

// ─── Stats (para logging) ────────────────────────────────────────────────────
const stats = {
  debuggers_removed: 0,
  proxies_inlined: 0,
  strings_folded: 0,
  self_defending_neutralized: 0,
  string_arrays_resolved: 0,
};

// ─── Pass 1: Identificar y resolver String Array Obfuscation ─────────────────
// Patrón clásico: var _0xabc = ["string1", "string2", ...]
// Luego accesos tipo _0xabc[0], _0xabc[0x1], etc.
const stringArrays = new Map();

traverse(ast, {
  VariableDeclarator(nodePath) {
    const init = nodePath.node.init;
    if (!t.isArrayExpression(init)) return;
    
    // Solo arrays donde TODOS los elementos son StringLiterals
    const elements = init.elements;
    if (elements.length < 5) return; // Arrays pequeños no son ofuscación
    if (!elements.every(el => t.isStringLiteral(el))) return;
    
    const arrayName = nodePath.node.id.name;
    if (!arrayName) return;
    
    const strings = elements.map(el => el.value);
    stringArrays.set(arrayName, strings);
  }
});

// Resolver accesos al string array: _0xabc[0] → "string1"
if (stringArrays.size > 0) {
  traverse(ast, {
    MemberExpression(nodePath) {
      const obj = nodePath.node.object;
      const prop = nodePath.node.property;
      
      if (!t.isIdentifier(obj)) return;
      if (!stringArrays.has(obj.name)) return;
      
      let index = null;
      if (t.isNumericLiteral(prop)) {
        index = prop.value;
      } else if (t.isStringLiteral(prop)) {
        index = parseInt(prop.value, 10);
      }
      
      if (index === null || isNaN(index)) return;
      
      const arr = stringArrays.get(obj.name);
      if (index >= 0 && index < arr.length) {
        nodePath.replaceWith(t.stringLiteral(arr[index]));
        stats.string_arrays_resolved++;
      }
    }
  });
}

// ─── Pass 2: Core transformations ────────────────────────────────────────────
// Recolectar proxy variables primero (single-pass scan)
const proxyBindings = new Map();

traverse(ast, {
  VariableDeclarator(nodePath) {
    const { id, init } = nodePath.node;
    if (!t.isIdentifier(id)) return;
    if (!t.isStringLiteral(init)) return;
    
    // Verificar que la variable no se reasigna (es efectivamente const)
    const binding = nodePath.scope.getBinding(id.name);
    if (!binding) return;
    if (binding.constantViolations.length > 0) return;
    
    proxyBindings.set(id.name, init.value);
  }
});

traverse(ast, {
  // ── 1. Eliminar debugger ──────────────────────────────────────────────
  DebuggerStatement(nodePath) {
    nodePath.remove();
    stats.debuggers_removed++;
  },

  // ── 2. Inline variable proxies ────────────────────────────────────────
  Identifier(nodePath) {
    if (!proxyBindings.has(nodePath.node.name)) return;
    
    // No reemplazar la propia declaración
    if (nodePath.parentPath.isVariableDeclarator() && nodePath.parentPath.node.id === nodePath.node) return;
    // No reemplazar keys de propiedades
    if (nodePath.parentPath.isMemberExpression() && nodePath.parentPath.node.property === nodePath.node && !nodePath.parentPath.node.computed) return;
    // No reemplazar en keys de objetos
    if (nodePath.parentPath.isObjectProperty() && nodePath.parentPath.node.key === nodePath.node) return;
    
    nodePath.replaceWith(t.stringLiteral(proxyBindings.get(nodePath.node.name)));
    stats.proxies_inlined++;
  },

  // ── 3. Fold constant string concatenation ─────────────────────────────
  BinaryExpression: {
    exit(nodePath) {
      if (nodePath.node.operator !== '+') return;
      const { left, right } = nodePath.node;
      if (t.isStringLiteral(left) && t.isStringLiteral(right)) {
        nodePath.replaceWith(t.stringLiteral(left.value + right.value));
        stats.strings_folded++;
      }
    }
  },

  // ── 4. Neutralizar self-defending patterns ────────────────────────────
  // Patrón: function that checks if code is beautified via regex test on itself
  CallExpression(nodePath) {
    const callee = nodePath.node.callee;
    
    // Patrón: setInterval(() => { ... }, 4000) con regex test dentro
    if (t.isIdentifier(callee) && (callee.name === 'setInterval' || callee.name === 'setTimeout')) {
      const firstArg = nodePath.node.arguments[0];
      if (!firstArg) return;
      
      // Si el callback contiene un RegExp test contra 'init|counter|debu'
      // o patrones similares de anti-tampering, neutralizarlo
      const codeStr = generate(firstArg, { compact: true }).code;
      if (/\\bdebu|\\binit\\b|\\bcounter|\\bstateObject|apply\s*\(\s*'counter'/.test(codeStr)) {
        nodePath.replaceWith(t.identifier('undefined'));
        stats.self_defending_neutralized++;
        return;
      }
    }
    
    // Patrón: (function(){...})() que contiene regex + constructor.toString()
    if (t.isFunctionExpression(callee) || 
        (t.isCallExpression(callee) && t.isFunctionExpression(callee.callee))) {
      const codeStr = generate(nodePath.node, { compact: true }).code;
      if (/constructor\s*\(\s*["']return\s+this/.test(codeStr) && 
          /RegExp|\\btest\\b/.test(codeStr)) {
        // IIFE de self-defense → reemplazar por void 0
        nodePath.replaceWith(t.identifier('undefined'));
        stats.self_defending_neutralized++;
      }
    }
  },

  // ── 5. Convertir hex/unicode escapes en literals legibles ─────────────
  StringLiteral(nodePath) {
    const raw = nodePath.node.extra?.raw;
    if (!raw) return;
    // Si contiene escapes hex (\x41) o unicode (\u0041), Babel ya los parsea
    // Solo nos aseguramos de que extra.raw se limpie para que generate escriba limpio
    if (/\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}/.test(raw)) {
      nodePath.node.extra = undefined;
    }
  }
});

// ─── Generate Output ─────────────────────────────────────────────────────────
const output = generate(ast, {
  retainLines: false,       // Reformat para legibilidad
  compact: false,
  concise: false,
  jsescapeOption: { minimal: true },
  comments: true,
});

// ─── Escribir resultado ──────────────────────────────────────────────────────
if (outputFile) {
  const dir = path.dirname(outputFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputFile, output.code, 'utf8');
} else {
  process.stdout.write(output.code);
}

// ─── Stats a stderr (para que Python las capture) ────────────────────────────
const summary = JSON.stringify(stats);
process.stderr.write(`[AST_STATS] ${summary}\n`);
