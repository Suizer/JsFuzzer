'undefined' === typeof Aura && (Aura = {});
(function() {
  function initAccessResources() {
    $A.componentService.addModule('markup://force:customPerms', 'force/customPerms', ['exports'], null, {});
    $A.componentService.addModule('markup://force:userPerms', 'force/userPerms', ['exports'], null, {})
  };
  if (Aura.frameworkJsReady) initAccessResources();
  else {
    Aura.beforeFrameworkInit = Aura.beforeFrameworkInit || [], Aura.beforeFrameworkInit.push(initAccessResources)
  }
})();
(function() {
  function initResourceGVP() {
    $A.addValueProvider('$Resource', null)
  }
  if (Aura.frameworkJsReady) initResourceGVP();
  else {
    Aura.beforeFrameworkInit = Aura.beforeFrameworkInit || [], Aura.beforeFrameworkInit.push(initResourceGVP)
  }
})();
Aura.resourcesReady = !0