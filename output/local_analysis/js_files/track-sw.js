(() => {
  "use strict";
  var e, t, r, n, s, a = {
      431: (e, t, r) => {
        r.a(e, async (e, t) => {
          try {
            const e = "/t/p/webhook",
              r = 3,
              n = [1e3, 5e3, 15e3],
              s = "TrackingEventsDB",
              a = 1,
              i = "events";
            class o {
              constructor() {
                this.db = null, this.setupEventListeners()
              }
              static async build() {
                const e = new o;
                return await e.initIndexedDB(), e
              }
              async initIndexedDB() {
                return new Promise((e, t) => {
                  const r = indexedDB.open(s, a);
                  r.onerror = () => t(r.error), r.onsuccess = () => {
                    this.db = r.result, e()
                  }, r.onupgradeneeded = e => {
                    const t = e.target.result;
                    t.objectStoreNames.contains(i) || t.createObjectStore(i, {
                        keyPath: "id"
                      })
                      .createIndex("timestamp", "timestamp", {
                        unique: !1
                      })
                  }
                })
              }
              setupEventListeners() {
                self.addEventListener("message", e => {
                  this.handleMessage(e)
                }), self.addEventListener("sync", e => {
                  "background-sync-tracking" === e.tag && e.waitUntil(this.processFailedEvents())
                }), self.addEventListener("activate", e => {
                  e.waitUntil(this.processFailedEvents())
                })
              }
              async handleMessage(e) {
                var t;
                const {
                  type: r,
                  payload: n
                } = e.data;
                switch (r) {
                  case "TRACK_EVENT":
                    await this.queueEvent(n);
                    break;
                  case "CRITEO_BEACON":
                    await this.queueEvent(n.data, n.url, n.method || "GET");
                    break;
                  case "GET_PENDING_COUNT": {
                    const r = await this.getPendingEventsCount();
                    null === (t = e.ports[0]) || void 0 === t || t.postMessage({
                      count: r
                    });
                    break
                  }
                }
              }
              async queueEvent(e, t, r) {
                this.db || await this.initIndexedDB();
                const n = new Uint32Array(1);
                crypto.getRandomValues(n);
                const s = n[0],
                  a = {
                    id: `${Date.now()}-${s.toString(36).substring(0,9)}`,
                    timestamp: Date.now(),
                    dsaEvent: e,
                    retryCount: 0,
                    url: t,
                    method: r
                  };
                await this.storeEvent(a), await this.sendEvent(a)
              }
              async storeEvent(e) {
                return new Promise((t, r) => {
                  if (!this.db) return void r(new Error("Database not initialized"));
                  const n = this.db.transaction([i], "readwrite")
                    .objectStore(i)
                    .add(e);
                  n.onsuccess = () => t(), n.onerror = () => r(n.error)
                })
              }
              async sendEvent(t) {
                try {
                  const n = t.url || e,
                    s = t.method || "POST",
                    a = {
                      method: s
                    };
                  "POST" === s && (a.body = JSON.stringify(t.dsaEvent), a.headers = {
                    "Content-Type": "application/json"
                  });
                  const i = await fetch(n, a);
                  return i.ok ? (await this.removeEvent(t.id), !0) : (r = i.status) >= 500 && r < 600 || 429 === r || 408 === r ? (await this.handleFailedEvent(t), !1) : (await this.removeEvent(t.id), !1)
                } catch (e) {
                  return await this.handleFailedEvent(t), !1
                }
                var r
              }
              async handleFailedEvent(e) {
                if (e.retryCount >= r) return void await this.removeEvent(e.id);
                e.retryCount++, await this.updateEvent(e);
                const t = n[e.retryCount - 1] || n[n.length - 1];
                setTimeout(() => this.sendEvent(e), t)
              }
              async updateEvent(e) {
                return new Promise((t, r) => {
                  if (!this.db) return void r(new Error("Database not initialized"));
                  const n = this.db.transaction([i], "readwrite")
                    .objectStore(i)
                    .put(e);
                  n.onsuccess = () => t(), n.onerror = () => r(n.error)
                })
              }
              async removeEvent(e) {
                return new Promise((t, r) => {
                  if (!this.db) return void r(new Error("Database not initialized"));
                  const n = this.db.transaction([i], "readwrite")
                    .objectStore(i)
                    .delete(e);
                  n.onsuccess = () => t(), n.onerror = () => r(n.error)
                })
              }
              async processFailedEvents() {
                if (!this.db) return;
                const e = (await this.getAllEvents())
                  .map(e => this.sendEvent(e));
                await Promise.allSettled(e)
              }
              async getAllEvents() {
                return new Promise((e, t) => {
                  if (!this.db) return void e([]);
                  const r = this.db.transaction([i], "readonly")
                    .objectStore(i)
                    .getAll();
                  r.onsuccess = () => e(r.result || []), r.onerror = () => t(r.error)
                })
              }
              async getPendingEventsCount() {
                return new Promise((e, t) => {
                  if (!this.db) return void e(0);
                  const r = this.db.transaction([i], "readonly")
                    .objectStore(i)
                    .count();
                  r.onsuccess = () => e(r.result), r.onerror = () => t(r.error)
                })
              }
            }
            await o.build(), t()
          } catch (e) {
            t(e)
          }
        }, 1)
      }
    },
    i = {};

  function o(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var r = i[e] = {
      exports: {}
    };
    return a[e](r, r.exports, o), r.exports
  }
  e = "function" == typeof Symbol, t = e ? Symbol("webpack queues") : "__webpack_queues__", r = e ? Symbol("webpack exports") : "__webpack_exports__", n = e ? Symbol("webpack error") : "__webpack_error__", s = e => {
    e && e.d < 1 && (e.d = 1, e.forEach(e => e.r--), e.forEach(e => e.r-- ? e.r++ : e()))
  }, o.a = (e, a, i) => {
    var o;
    i && ((o = [])
      .d = -1);
    var d, c, u, v = new Set,
      h = e.exports,
      l = new Promise((e, t) => {
        u = t, c = e
      });
    l[r] = h, l[t] = e => (o && e(o), v.forEach(e), l.catch(e => {})), e.exports = l, a(e => {
      var a;
      d = (e => e.map(e => {
        if (null !== e && "object" == typeof e) {
          if (e[t]) return e;
          if (e.then) {
            var a = [];
            a.d = 0, e.then(e => {
              i[r] = e, s(a)
            }, e => {
              i[n] = e, s(a)
            });
            var i = {};
            return i[t] = e => e(a), i
          }
        }
        var o = {};
        return o[t] = e => {}, o[r] = e, o
      }))(e);
      var i = () => d.map(e => {
          if (e[n]) throw e[n];
          return e[r]
        }),
        c = new Promise(e => {
          (a = () => e(i))
          .r = 0;
          var r = e => e !== o && !v.has(e) && (v.add(e), e && !e.d && (a.r++, e.push(a)));
          d.map(e => e[t](r))
        });
      return a.r ? c : i()
    }, e => (e ? u(l[n] = e) : c(h), s(o))), o && o.d < 0 && (o.d = 0)
  }, o(431)
})();