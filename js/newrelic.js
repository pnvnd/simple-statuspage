window.NREUM || (NREUM = {});

NREUM.init = { 
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ["bam.nr-data.net"] }
};

NREUM.loader_config = { 
  accountID: "3844837",
  trustKey: "3844837",
  agentID: "1588826492",
  licenseKey: "NRJS-2820f9c1cd712b7099c",
  applicationID: "1588826492"
};

NREUM.info = {
  beacon: "bam.nr-data.net",
  errorBeacon: "bam.nr-data.net",
  licenseKey: "NRJS-2820f9c1cd712b7099c",
  applicationID: "1588826492",
  sa: 1
};

(() => {
  "use strict";
  var e,
    t,
    r = {
      9071: (e, t, r) => {
        r.d(t, { I: () => n });
        var n = 0,
          i = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
        i && (n = +i[1]);
      },
      8768: (e, t, r) => {
        r.d(t, { T: () => n, p: () => i });
        const n = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
          i = n && Boolean("undefined" == typeof SharedWorker);
      },
      880: (e, t, r) => {
        r.d(t, { P_: () => l, Mt: () => g, C5: () => s, DL: () => v, OP: () => T, lF: () => D, Yu: () => y, Dg: () => h, CX: () => c, GE: () => b, sU: () => _ });
        var n = r(6797),
          i = r(4286);
        const o = {
            beacon: n.ce.beacon,
            errorBeacon: n.ce.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0,
          },
          a = {};
        function s(e) {
          if (!e) throw new Error("All info objects require an agent identifier!");
          if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
          return a[e];
        }
        function c(e, t) {
          if (!e) throw new Error("All info objects require an agent identifier!");
          (a[e] = (0, i.D)(t, o)), (0, n.Qy)(e, a[e], "info");
        }
        var u = r(2797);
        const d = () => {
            const e = { blockSelector: "[data-nr-block]", maskInputOptions: { password: !0 } };
            return {
              allow_bfcache: !0,
              privacy: { cookies_enabled: !0 },
              ajax: { deny_list: void 0, enabled: !0, harvestTimeSeconds: 10 },
              distributed_tracing: { enabled: void 0, exclude_newrelic_header: void 0, cors_use_newrelic_header: void 0, cors_use_tracecontext_headers: void 0, allowed_origins: void 0 },
              session: { domain: void 0, expiresMs: u.oD, inactiveMs: u.Hb },
              ssl: void 0,
              obfuscate: void 0,
              jserrors: { enabled: !0, harvestTimeSeconds: 10 },
              metrics: { enabled: !0 },
              page_action: { enabled: !0, harvestTimeSeconds: 30 },
              page_view_event: { enabled: !0 },
              page_view_timing: { enabled: !0, harvestTimeSeconds: 30, long_task: !1 },
              session_trace: { enabled: !0, harvestTimeSeconds: 10 },
              session_replay: {
                enabled: !1,
                harvestTimeSeconds: 60,
                sampleRate: 0.1,
                errorSampleRate: 0.1,
                maskTextSelector: "*",
                maskAllInputs: !0,
                get blockClass() {
                  return "nr-block";
                },
                get ignoreClass() {
                  return "nr-ignore";
                },
                get maskTextClass() {
                  return "nr-mask";
                },
                get blockSelector() {
                  return e.blockSelector;
                },
                set blockSelector(t) {
                  e.blockSelector += ",".concat(t);
                },
                get maskInputOptions() {
                  return e.maskInputOptions;
                },
                set maskInputOptions(t) {
                  e.maskInputOptions = { ...t, password: !0 };
                },
              },
              spa: { enabled: !0, harvestTimeSeconds: 10 },
            };
          },
          f = {};
        function l(e) {
          if (!e) throw new Error("All configuration objects require an agent identifier!");
          if (!f[e]) throw new Error("Configuration for ".concat(e, " was never set"));
          return f[e];
        }
        function h(e, t) {
          if (!e) throw new Error("All configuration objects require an agent identifier!");
          (f[e] = (0, i.D)(t, d())), (0, n.Qy)(e, f[e], "config");
        }
        function g(e, t) {
          if (!e) throw new Error("All configuration objects require an agent identifier!");
          var r = l(e);
          if (r) {
            for (var n = t.split("."), i = 0; i < n.length - 1; i++) if ("object" != typeof (r = r[n[i]])) return;
            r = r[n[n.length - 1]];
          }
          return r;
        }
        const p = { accountID: void 0, trustKey: void 0, agentID: void 0, licenseKey: void 0, applicationID: void 0, xpid: void 0 },
          m = {};
        function v(e) {
          if (!e) throw new Error("All loader-config objects require an agent identifier!");
          if (!m[e]) throw new Error("LoaderConfig for ".concat(e, " was never set"));
          return m[e];
        }
        function b(e, t) {
          if (!e) throw new Error("All loader-config objects require an agent identifier!");
          (m[e] = (0, i.D)(t, p)), (0, n.Qy)(e, m[e], "loader_config");
        }
        const y = (0, n.mF)().o;
        var w = r(2374),
          x = r(1651);
        const E = {
            buildEnv: x.Re,
            bytesSent: {},
            queryBytesSent: {},
            customTransaction: void 0,
            disabled: !1,
            distMethod: x.gF,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            offset: Math.floor(w._A?.performance?.timeOrigin || w._A?.performance?.timing?.navigationStart || Date.now()),
            onerror: void 0,
            origin: "" + w._A.location,
            ptid: void 0,
            releaseIds: {},
            session: void 0,
            xhrWrappable: "function" == typeof w._A.XMLHttpRequest?.prototype?.addEventListener,
            version: x.q4,
          },
          A = {};
        function T(e) {
          if (!e) throw new Error("All runtime objects require an agent identifier!");
          if (!A[e]) throw new Error("Runtime for ".concat(e, " was never set"));
          return A[e];
        }
        function _(e, t) {
          if (!e) throw new Error("All runtime objects require an agent identifier!");
          (A[e] = (0, i.D)(t, E)), (0, n.Qy)(e, A[e], "runtime");
        }
        function D(e) {
          return (function (e) {
            try {
              const t = s(e);
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
            } catch (e) {
              return !1;
            }
          })(e);
        }
      },
      4286: (e, t, r) => {
        r.d(t, { D: () => i });
        var n = r(8610);
        function i(e, t) {
          try {
            if (!e || "object" != typeof e) return (0, n.Z)("Setting a Configurable requires an object as input");
            if (!t || "object" != typeof t) return (0, n.Z)("Setting a Configurable requires a model to set its initial properties");
            const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
              o = 0 === Object.keys(r).length ? e : r;
            for (let a in o)
              if (void 0 !== e[a])
                try {
                  "object" == typeof e[a] && "object" == typeof t[a] ? (r[a] = i(e[a], t[a])) : (r[a] = e[a]);
                } catch (e) {
                  (0, n.Z)("An error occurred while setting a property of a Configurable", e);
                }
            return r;
          } catch (e) {
            (0, n.Z)("An error occured while setting a Configurable", e);
          }
        }
      },
      1651: (e, t, r) => {
        r.d(t, { Re: () => i, gF: () => o, q4: () => n });
        const n = "1.234.0",
          i = "PROD",
          o = "CDN";
      },
      9557: (e, t, r) => {
        r.d(t, { w: () => o });
        var n = r(8610);
        const i = { agentIdentifier: "", ee: void 0 };
        class o {
          constructor(e) {
            try {
              if ("object" != typeof e) return (0, n.Z)("shared context requires an object as input");
              (this.sharedContext = {}),
                Object.assign(this.sharedContext, i),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  Object.keys(i).includes(t) && (this.sharedContext[t] = r);
                });
            } catch (e) {
              (0, n.Z)("An error occured while setting SharedContext", e);
            }
          }
        }
      },
      4329: (e, t, r) => {
        r.d(t, { L: () => d, R: () => c });
        var n = r(3752),
          i = r(7022),
          o = r(4045),
          a = r(2325);
        const s = {};
        function c(e, t) {
          const r = { staged: !1, priority: a.p[t] || 0 };
          u(e), s[e].get(t) || s[e].set(t, r);
        }
        function u(e) {
          e && (s[e] || (s[e] = new Map()));
        }
        function d() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature";
          if ((u(e), !e || !s[e].get(t))) return a(t);
          s[e].get(t).staged = !0;
          const r = [...s[e]];
          function a(t) {
            const r = e ? n.ee.get(e) : n.ee,
              a = o.X.handlers;
            if (r.backlog && a) {
              var s = r.backlog[t],
                c = a[t];
              if (c) {
                for (var u = 0; s && u < s.length; ++u) f(s[u], c);
                (0, i.D)(c, function (e, t) {
                  (0, i.D)(t, function (t, r) {
                    r[0].on(e, r[1]);
                  });
                });
              }
              delete a[t], (r.backlog[t] = null), r.emit("drain-" + t, []);
            }
          }
          r.every((e) => {
            let [t, r] = e;
            return r.staged;
          }) &&
            (r.sort((e, t) => e[1].priority - t[1].priority),
            r.forEach((e) => {
              let [t] = e;
              a(t);
            }));
        }
        function f(e, t) {
          var r = e[1];
          (0, i.D)(t[r], function (t, r) {
            var n = e[0];
            if (r[0] === n) {
              var i = r[1],
                o = e[3],
                a = e[2];
              i.apply(o, a);
            }
          });
        }
      },
      3752: (e, t, r) => {
        r.d(t, { c: () => f, ee: () => u });
        var n = r(6797),
          i = r(3916),
          o = r(7022),
          a = r(880),
          s = "nr@context";
        let c = (0, n.fP)();
        var u;
        function d() {}
        function f(e) {
          return (0, i.X)(e, s, l);
        }
        function l() {
          return new d();
        }
        function h() {
          (u.aborted = !0), (u.backlog = {});
        }
        c.ee
          ? (u = c.ee)
          : ((u = (function e(t, r) {
              var n = {},
                c = {},
                f = {},
                g = !1;
              try {
                g = 16 === r.length && (0, a.OP)(r).isolatedBacklog;
              } catch (e) {}
              var p = {
                on: b,
                addEventListener: b,
                removeEventListener: y,
                emit: v,
                get: x,
                listeners: w,
                context: m,
                buffer: E,
                abort: h,
                aborted: !1,
                isBuffering: A,
                debugId: r,
                backlog: g ? {} : t && "object" == typeof t.backlog ? t.backlog : {},
              };
              return p;
              function m(e) {
                return e && e instanceof d ? e : e ? (0, i.X)(e, s, l) : l();
              }
              function v(e, r, n, i, o) {
                if ((!1 !== o && (o = !0), !u.aborted || i)) {
                  t && o && t.emit(e, r, n);
                  for (var a = m(n), s = w(e), d = s.length, f = 0; f < d; f++) s[f].apply(a, r);
                  var l = T()[c[e]];
                  return l && l.push([p, e, r, a]), a;
                }
              }
              function b(e, t) {
                n[e] = w(e).concat(t);
              }
              function y(e, t) {
                var r = n[e];
                if (r) for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1);
              }
              function w(e) {
                return n[e] || [];
              }
              function x(t) {
                return (f[t] = f[t] || e(p, t));
              }
              function E(e, t) {
                var r = T();
                p.aborted ||
                  (0, o.D)(e, function (e, n) {
                    (t = t || "feature"), (c[n] = t), t in r || (r[t] = []);
                  });
              }
              function A(e) {
                return !!T()[c[e]];
              }
              function T() {
                return p.backlog;
              }
            })(void 0, "globalEE")),
            (c.ee = u));
      },
      9252: (e, t, r) => {
        r.d(t, { E: () => n, p: () => i });
        var n = r(3752).ee.get("handle");
        function i(e, t, r, i, o) {
          o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r));
        }
      },
      4045: (e, t, r) => {
        r.d(t, { X: () => o });
        var n = r(9252);
        o.on = a;
        var i = (o.handlers = {});
        function o(e, t, r, o) {
          a(o || n.E, i, e, t, r);
        }
        function a(e, t, r, i, o) {
          o || (o = "feature"), e || (e = n.E);
          var a = (t[o] = t[o] || {});
          (a[r] = a[r] || []).push([e, i]);
        }
      },
      8544: (e, t, r) => {
        r.d(t, { bP: () => s, iz: () => c, m$: () => a });
        var n = r(2374);
        let i = !1,
          o = !1;
        try {
          const e = {
            get passive() {
              return (i = !0), !1;
            },
            get signal() {
              return (o = !0), !1;
            },
          };
          n._A.addEventListener("test", null, e), n._A.removeEventListener("test", null, e);
        } catch (e) {}
        function a(e, t) {
          return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
        }
        function s(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          window.addEventListener(e, t, a(r, n));
        }
        function c(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          document.addEventListener(e, t, a(r, n));
        }
      },
      5526: (e, t, r) => {
        r.d(t, { Ht: () => u, M: () => c, Rl: () => a, ky: () => s });
        var n = r(2374);
        const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        function o(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0;
        }
        function a() {
          const e = n._A?.crypto || n._A?.msCrypto;
          let t,
            r = 0;
          return (
            e && e.getRandomValues && (t = e.getRandomValues(new Uint8Array(31))),
            i
              .split("")
              .map((e) => ("x" === e ? o(t, ++r).toString(16) : "y" === e ? ((3 & o()) | 8).toString(16) : e))
              .join("")
          );
        }
        function s(e) {
          const t = n._A?.crypto || n._A?.msCrypto;
          let r,
            i = 0;
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(31)));
          const a = [];
          for (var s = 0; s < e; s++) a.push(o(r, ++i).toString(16));
          return a.join("");
        }
        function c() {
          return s(16);
        }
        function u() {
          return s(32);
        }
      },
      2797: (e, t, r) => {
        r.d(t, { Bq: () => n, Hb: () => o, oD: () => i });
        const n = "NRBA",
          i = 144e5,
          o = 18e5;
      },
      2053: (e, t, r) => {
        function n() {
          return Math.round(performance.now());
        }
        r.d(t, { z: () => n });
      },
      6368: (e, t, r) => {
        r.d(t, { e: () => o });
        var n = r(2374),
          i = {};
        function o(e) {
          if (e in i) return i[e];
          if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
          let t;
          var r = n._A?.location,
            o = {};
          if (n.il) (t = document.createElement("a")), (t.href = e);
          else
            try {
              t = new URL(e, r.href);
            } catch (e) {
              return o;
            }
          o.port = t.port;
          var a = t.href.split("://");
          !o.port && a[1] && (o.port = a[1].split("/")[0].split("@").pop().split(":")[1]),
            (o.port && "0" !== o.port) || (o.port = "https" === a[0] ? "443" : "80"),
            (o.hostname = t.hostname || r.hostname),
            (o.pathname = t.pathname),
            (o.protocol = a[0]),
            "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
          var s = !t.protocol || ":" === t.protocol || t.protocol === r.protocol,
            c = t.hostname === r.hostname && t.port === r.port;
          return (o.sameOrigin = s && (!t.hostname || c)), "/" === o.pathname && (i[e] = o), o;
        }
      },
      8610: (e, t, r) => {
        function n(e, t) {
          "function" == typeof console.warn && (console.warn("New Relic: ".concat(e)), t && console.warn(t));
        }
        r.d(t, { Z: () => n });
      },
      7269: (e, t, r) => {
        r.d(t, { N: () => u, T: () => d });
        var n = r(7022),
          i = r(3752),
          o = r(9252),
          a = r(4329),
          s = r(2325);
        const c = { stn: [s.D.sessionTrace], err: [s.D.jserrors, s.D.metrics], ins: [s.D.pageAction], spa: [s.D.spa], sr: [s.D.sessionReplay] };
        function u(e, t) {
          var r = i.ee.get(t);
          e &&
            "object" == typeof e &&
            ((0, n.D)(e, function (e, t) {
              if (!t)
                return (c[e] || []).forEach((t) => {
                  (0, o.p)("block-" + e, [], void 0, t, r);
                });
              d[e] || ((0, o.p)("feat-" + e, [], void 0, c[e], r), (d[e] = !0));
            }),
            (0, a.L)(t, s.D.pageViewEvent));
        }
        const d = {};
      },
      3916: (e, t, r) => {
        r.d(t, { X: () => i });
        var n = Object.prototype.hasOwnProperty;
        function i(e, t, r) {
          if (n.call(e, t)) return e[t];
          var i = r();
          if (Object.defineProperty && Object.keys)
            try {
              return Object.defineProperty(e, t, { value: i, writable: !0, enumerable: !1 }), i;
            } catch (e) {}
          return (e[t] = i), i;
        }
      },
      2374: (e, t, r) => {
        r.d(t, { FN: () => a, _A: () => o, il: () => n, v6: () => i });
        const n = Boolean("undefined" != typeof window && window.document),
          i = Boolean("undefined" != typeof WorkerGlobalScope && self.navigator instanceof WorkerNavigator);
        let o = (() => {
          if (n) return window;
          if (i) {
            if ("undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope) return globalThis;
            if (self instanceof WorkerGlobalScope) return self;
          }
          throw new Error('New Relic browser agent shutting down due to error: Unable to locate global scope. This is possibly due to code redefining browser global variables like "self" and "window".');
        })();
        const a = "" + o.location;
      },
      7022: (e, t, r) => {
        r.d(t, { D: () => n });
        const n = (e, t) =>
          Object.entries(e || {}).map((e) => {
            let [r, n] = e;
            return t(r, n);
          });
      },
      2438: (e, t, r) => {
        r.d(t, { P: () => o });
        var n = r(3752);
        const i = () => {
          const e = new WeakSet();
          return (t, r) => {
            if ("object" == typeof r && null !== r) {
              if (e.has(r)) return;
              e.add(r);
            }
            return r;
          };
        };
        function o(e) {
          try {
            return JSON.stringify(e, i());
          } catch (e) {
            try {
              n.ee.emit("internal-error", [e]);
            } catch (e) {}
          }
        }
      },
      2650: (e, t, r) => {
        r.d(t, { K: () => a, b: () => o });
        var n = r(8544);
        function i() {
          return "undefined" == typeof document || "complete" === document.readyState;
        }
        function o(e, t) {
          if (i()) return e();
          (0, n.bP)("load", e, t);
        }
        function a(e) {
          if (i()) return e();
          (0, n.iz)("DOMContentLoaded", e);
        }
      },
      6797: (e, t, r) => {
        r.d(t, { EZ: () => u, Qy: () => c, ce: () => o, fP: () => a, gG: () => d, mF: () => s });
        var n = r(2053),
          i = r(2374);
        const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
        function a() {
          return i._A.NREUM || (i._A.NREUM = {}), void 0 === i._A.newrelic && (i._A.newrelic = i._A.NREUM), i._A.NREUM;
        }
        function s() {
          let e = a();
          return e.o || (e.o = { ST: i._A.setTimeout, SI: i._A.setImmediate, CT: i._A.clearTimeout, XHR: i._A.XMLHttpRequest, REQ: i._A.Request, EV: i._A.Event, PR: i._A.Promise, MO: i._A.MutationObserver, FETCH: i._A.fetch }), e;
        }
        function c(e, t, r) {
          let i = a();
          const o = i.initializedAgents || {},
            s = o[e] || {};
          return Object.keys(s).length || (s.initializedAt = { ms: (0, n.z)(), date: new Date() }), (i.initializedAgents = { ...o, [e]: { ...s, [r]: t } }), i;
        }
        function u(e, t) {
          a()[e] = t;
        }
        function d() {
          return (
            (function () {
              let e = a();
              const t = e.info || {};
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
            })(),
            (function () {
              let e = a();
              const t = e.init || {};
              e.init = { ...t };
            })(),
            s(),
            (function () {
              let e = a();
              const t = e.loader_config || {};
              e.loader_config = { ...t };
            })(),
            a()
          );
        }
      },
      6998: (e, t, r) => {
        r.d(t, { N: () => i });
        var n = r(8544);
        function i(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
          return void (0, n.iz)(
            "visibilitychange",
            function () {
              if (t) return void ("hidden" == document.visibilityState && e());
              e(document.visibilityState);
            },
            r,
            i
          );
        }
      },
      7264: (e, t, r) => {
        r.d(t, { em: () => v, u5: () => N, QU: () => j, _L: () => I, Gm: () => z, Lg: () => M, gy: () => U, BV: () => Q, Kf: () => ee });
        var n = r(3752);
        const i = "nr@original";
        var o = Object.prototype.hasOwnProperty,
          a = !1;
        function s(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, i, o) {
              n || (n = "");
              var a,
                s,
                c,
                u = "-" === n.charAt(0);
              for (c = 0; c < t.length; c++) d((a = e[(s = t[c])])) || (e[s] = r(a, u ? s + n : n, i, s, o));
            }),
            (r.flag = i),
            r
          );
          function r(t, r, n, a, s) {
            return d(t) ? t : (r || (r = ""), (nrWrapper[i] = t), u(t, nrWrapper, e), nrWrapper);
            function nrWrapper() {
              var i, u, d, f;
              try {
                (u = this), (i = [...arguments]), (d = "function" == typeof n ? n(i, u) : n || {});
              } catch (t) {
                c([t, "", [i, u, a], d], e);
              }
              o(r + "start", [i, u, a], d, s);
              try {
                return (f = t.apply(u, i));
              } catch (e) {
                throw (o(r + "err", [i, u, e], d, s), e);
              } finally {
                o(r + "end", [i, u, f], d, s);
              }
            }
          }
          function o(r, n, i, o) {
            if (!a || t) {
              var s = a;
              a = !0;
              try {
                e.emit(r, n, i, t, o);
              } catch (t) {
                c([t, r, n, i], e);
              }
              a = s;
            }
          }
        }
        function c(e, t) {
          t || (t = n.ee);
          try {
            t.emit("internal-error", e);
          } catch (e) {}
        }
        function u(e, t, r) {
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.keys(e).forEach(function (r) {
                  Object.defineProperty(t, r, {
                    get: function () {
                      return e[r];
                    },
                    set: function (t) {
                      return (e[r] = t), t;
                    },
                  });
                }),
                t
              );
            } catch (e) {
              c([e], r);
            }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return t;
        }
        function d(e) {
          return !(e && e instanceof Function && e.apply && !e[i]);
        }
        var f = r(3916),
          l = r(2374);
        const h = {},
          g = XMLHttpRequest,
          p = "addEventListener",
          m = "removeEventListener";
        function v(e) {
          var t = (function (e) {
            return (e || n.ee).get("events");
          })(e);
          if (h[t.debugId]++) return t;
          h[t.debugId] = 1;
          var r = s(t, !0);
          function i(e) {
            r.inPlace(e, [p, m], "-", o);
          }
          function o(e, t) {
            return e[1];
          }
          return (
            "getPrototypeOf" in Object && (l.il && b(document, i), b(l._A, i), b(g.prototype, i)),
            t.on(p + "-start", function (e, t) {
              var n = e[1];
              if (null !== n && ("function" == typeof n || "object" == typeof n)) {
                var i = (0, f.X)(n, "nr@wrapped", function () {
                  var e = {
                    object: function () {
                      if ("function" != typeof n.handleEvent) return;
                      return n.handleEvent.apply(n, arguments);
                    },
                    function: n,
                  }[typeof n];
                  return e ? r(e, "fn-", null, e.name || "anonymous") : n;
                });
                this.wrapped = e[1] = i;
              }
            }),
            t.on(m + "-start", function (e) {
              e[1] = this.wrapped || e[1];
            }),
            t
          );
        }
        function b(e, t) {
          let r = e;
          for (; "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, p); ) r = Object.getPrototypeOf(r);
          for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
          r && t(r, ...i);
        }
        var y = "fetch-",
          w = y + "body-",
          x = ["arrayBuffer", "blob", "json", "text", "formData"],
          E = l._A.Request,
          A = l._A.Response,
          T = "prototype",
          _ = "nr@context";
        const D = {};
        function N(e) {
          const t = (function (e) {
            return (e || n.ee).get("fetch");
          })(e);
          if (!(E && A && l._A.fetch)) return t;
          if (D[t.debugId]++) return t;
          function r(e, r, n) {
            var i = e[r];
            "function" == typeof i &&
              (e[r] = function () {
                var e,
                  r = [...arguments],
                  o = {};
                t.emit(n + "before-start", [r], o), o[_] && o[_].dt && (e = o[_].dt);
                var a = i.apply(this, r);
                return (
                  t.emit(n + "start", [r, e], a),
                  a.then(
                    function (e) {
                      return t.emit(n + "end", [null, e], a), e;
                    },
                    function (e) {
                      throw (t.emit(n + "end", [e], a), e);
                    }
                  )
                );
              });
          }
          return (
            (D[t.debugId] = 1),
            x.forEach((e) => {
              r(E[T], e, w), r(A[T], e, w);
            }),
            r(l._A, "fetch", y),
            t.on(y + "end", function (e, r) {
              var n = this;
              if (r) {
                var i = r.headers.get("content-length");
                null !== i && (n.rxSize = i), t.emit(y + "done", [null, r], n);
              } else t.emit(y + "done", [e], n);
            }),
            t
          );
        }
        const O = {},
          S = ["pushState", "replaceState"];
        function j(e) {
          const t = (function (e) {
            return (e || n.ee).get("history");
          })(e);
          return !l.il || O[t.debugId]++ || ((O[t.debugId] = 1), s(t).inPlace(window.history, S, "-")), t;
        }
        var P = r(8544);
        const C = {},
          R = ["appendChild", "insertBefore", "replaceChild"];
        function I(e) {
          const t = (function (e) {
            return (e || n.ee).get("jsonp");
          })(e);
          if (!l.il || C[t.debugId]) return t;
          C[t.debugId] = !0;
          var r = s(t),
            i = /[?&](?:callback|cb)=([^&#]+)/,
            o = /(.*)\.([^.]+)/,
            a = /^(\w+)(\.|$)(.*)$/;
          function c(e, t) {
            var r = e.match(a),
              n = r[1],
              i = r[3];
            return i ? c(i, t[n]) : t[n];
          }
          return (
            r.inPlace(Node.prototype, R, "dom-"),
            t.on("dom-start", function (e) {
              !(function (e) {
                if (!e || "string" != typeof e.nodeName || "script" !== e.nodeName.toLowerCase()) return;
                if ("function" != typeof e.addEventListener) return;
                var n = ((a = e.src), (s = a.match(i)), s ? s[1] : null);
                var a, s;
                if (!n) return;
                var u = (function (e) {
                  var t = e.match(o);
                  if (t && t.length >= 3) return { key: t[2], parent: c(t[1], window) };
                  return { key: e, parent: window };
                })(n);
                if ("function" != typeof u.parent[u.key]) return;
                var d = {};
                function f() {
                  t.emit("jsonp-end", [], d), e.removeEventListener("load", f, (0, P.m$)(!1)), e.removeEventListener("error", l, (0, P.m$)(!1));
                }
                function l() {
                  t.emit("jsonp-error", [], d), t.emit("jsonp-end", [], d), e.removeEventListener("load", f, (0, P.m$)(!1)), e.removeEventListener("error", l, (0, P.m$)(!1));
                }
                r.inPlace(u.parent, [u.key], "cb-", d), e.addEventListener("load", f, (0, P.m$)(!1)), e.addEventListener("error", l, (0, P.m$)(!1)), t.emit("new-jsonp", [e.src], d);
              })(e[0]);
            }),
            t
          );
        }
        var k = r(880);
        const H = {};
        function z(e) {
          const t = (function (e) {
            return (e || n.ee).get("mutation");
          })(e);
          if (!l.il || H[t.debugId]) return t;
          H[t.debugId] = !0;
          var r = s(t),
            i = k.Yu.MO;
          return (
            i &&
              ((window.MutationObserver = function (e) {
                return this instanceof i ? new i(r(e, "fn-")) : i.apply(this, arguments);
              }),
              (MutationObserver.prototype = i.prototype)),
            t
          );
        }
        const L = {};
        function M(e) {
          const t = (function (e) {
            return (e || n.ee).get("promise");
          })(e);
          if (L[t.debugId]) return t;
          L[t.debugId] = !0;
          var r = n.c,
            o = s(t),
            a = k.Yu.PR;
          return (
            a &&
              (function () {
                function e(r) {
                  var n = t.context(),
                    i = o(r, "executor-", n, null, !1);
                  const s = Reflect.construct(a, [i], e);
                  return (
                    (t.context(s).getCtx = function () {
                      return n;
                    }),
                    s
                  );
                }
                (l._A.Promise = e),
                  Object.defineProperty(e, "name", { value: "Promise" }),
                  (e.toString = function () {
                    return a.toString();
                  }),
                  Object.setPrototypeOf(e, a),
                  ["all", "race"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      let i = !1;
                      [...(e || [])].forEach((e) => {
                        this.resolve(e).then(a("all" === r), a(!1));
                      });
                      const o = n.apply(this, arguments);
                      return o;
                      function a(e) {
                        return function () {
                          t.emit("propagate", [null, !i], o, !1, !1), (i = i || !e);
                        };
                      }
                    };
                  }),
                  ["resolve", "reject"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      const r = n.apply(this, arguments);
                      return e !== r && t.emit("propagate", [e, !0], r, !1, !1), r;
                    };
                  }),
                  (e.prototype = a.prototype);
                const n = a.prototype.then;
                (a.prototype.then = function () {
                  var e = this,
                    i = r(e);
                  i.promise = e;
                  for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                  (s[0] = o(s[0], "cb-", i, null, !1)), (s[1] = o(s[1], "cb-", i, null, !1));
                  const u = n.apply(this, s);
                  return (i.nextPromise = u), t.emit("propagate", [e, !0], u, !1, !1), u;
                }),
                  (a.prototype.then[i] = n),
                  t.on("executor-start", function (e) {
                    (e[0] = o(e[0], "resolve-", this, null, !1)), (e[1] = o(e[1], "resolve-", this, null, !1));
                  }),
                  t.on("executor-err", function (e, t, r) {
                    e[1](r);
                  }),
                  t.on("cb-end", function (e, r, n) {
                    t.emit("propagate", [n, !0], this.nextPromise, !1, !1);
                  }),
                  t.on("propagate", function (e, r, n) {
                    (this.getCtx && !r) ||
                      (this.getCtx = function () {
                        if (e instanceof Promise) var r = t.context(e);
                        return r && r.getCtx ? r.getCtx() : this;
                      });
                  });
              })(),
            t
          );
        }
        const B = {},
          F = "requestAnimationFrame";
        function U(e) {
          const t = (function (e) {
            return (e || n.ee).get("raf");
          })(e);
          if (!l.il || B[t.debugId]++) return t;
          B[t.debugId] = 1;
          var r = s(t);
          return (
            r.inPlace(window, [F], "raf-"),
            t.on("raf-start", function (e) {
              e[0] = r(e[0], "fn-");
            }),
            t
          );
        }
        const q = {},
          G = "setTimeout",
          V = "setInterval",
          X = "clearTimeout",
          Z = "-start",
          W = "-",
          $ = [G, "setImmediate", V, X, "clearImmediate"];
        function Q(e) {
          const t = (function (e) {
            return (e || n.ee).get("timer");
          })(e);
          if (q[t.debugId]++) return t;
          q[t.debugId] = 1;
          var r = s(t);
          return (
            r.inPlace(l._A, $.slice(0, 2), G + W),
            r.inPlace(l._A, $.slice(2, 3), V + W),
            r.inPlace(l._A, $.slice(3), X + W),
            t.on(V + Z, function (e, t, n) {
              e[0] = r(e[0], "fn-", null, n);
            }),
            t.on(G + Z, function (e, t, n) {
              (this.method = n), (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]), (e[0] = r(e[0], "fn-", this, n));
            }),
            t
          );
        }
        var Y = r(8610);
        const K = {},
          J = ["open", "send"];
        function ee(e) {
          var t = e || n.ee;
          const r = (function (e) {
            return (e || n.ee).get("xhr");
          })(t);
          if (K[r.debugId]++) return r;
          (K[r.debugId] = 1), v(t);
          var i = s(r),
            o = k.Yu.XHR,
            a = k.Yu.MO,
            c = k.Yu.PR,
            u = k.Yu.SI,
            d = "readystatechange",
            f = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
            h = [],
            g = l._A.XMLHttpRequest.listeners,
            p = (l._A.XMLHttpRequest = function (e) {
              var t = new o(e);
              function n() {
                try {
                  r.emit("new-xhr", [t], t), t.addEventListener(d, b, (0, P.m$)(!1));
                } catch (e) {
                  (0, Y.Z)("An error occured while intercepting XHR", e);
                  try {
                    r.emit("internal-error", [e]);
                  } catch (e) {}
                }
              }
              return (this.listeners = g ? [...g, n] : [n]), this.listeners.forEach((e) => e()), t;
            });
          function m(e, t) {
            i.inPlace(t, ["onreadystatechange"], "fn-", A);
          }
          function b() {
            var e = this,
              t = r.context(e);
            e.readyState > 3 && !t.resolved && ((t.resolved = !0), r.emit("xhr-resolved", [], e)), i.inPlace(e, f, "fn-", A);
          }
          if (
            ((function (e, t) {
              for (var r in e) t[r] = e[r];
            })(o, p),
            (p.prototype = o.prototype),
            i.inPlace(p.prototype, J, "-xhr-", A),
            r.on("send-xhr-start", function (e, t) {
              m(e, t),
                (function (e) {
                  h.push(e), a && (y ? y.then(E) : u ? u(E) : ((w = -w), (x.data = w)));
                })(t);
            }),
            r.on("open-xhr-start", m),
            a)
          ) {
            var y = c && c.resolve();
            if (!u && !c) {
              var w = 1,
                x = document.createTextNode(w);
              new a(E).observe(x, { characterData: !0 });
            }
          } else
            t.on("fn-end", function (e) {
              (e[0] && e[0].type === d) || E();
            });
          function E() {
            for (var e = 0; e < h.length; e++) m(0, h[e]);
            h.length && (h = []);
          }
          function A(e, t) {
            return t;
          }
          return r;
        }
      },
      8675: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(2325).D.ajax;
      },
      8322: (e, t, r) => {
        r.d(t, { A: () => i, t: () => n });
        const n = r(2325).D.jserrors,
          i = "nr@seenError";
      },
      6034: (e, t, r) => {
        r.d(t, { gF: () => o, mY: () => i, t9: () => n, vz: () => s, xS: () => a });
        const n = r(2325).D.metrics,
          i = "sm",
          o = "cm",
          a = "storeSupportabilityMetrics",
          s = "storeEventMetrics";
      },
      6486: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(2325).D.pageAction;
      },
      2484: (e, t, r) => {
        r.d(t, { Dz: () => i, OJ: () => a, qw: () => o, t9: () => n });
        const n = r(2325).D.pageViewEvent,
          i = "firstbyte",
          o = "domcontent",
          a = "windowload";
      },
      6382: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(2325).D.pageViewTiming;
      },
      2628: (e, t, r) => {
        r.d(t, { BST_RESOURCE: () => i, BST_TIMER: () => d, END: () => s, FEATURE_NAME: () => n, FN_END: () => u, FN_START: () => c, PUSH_STATE: () => f, RESOURCE: () => o, START: () => a });
        const n = r(2325).D.sessionTrace,
          i = "bstResource",
          o = "resource",
          a = "-start",
          s = "-end",
          c = "fn" + a,
          u = "fn" + s,
          d = "bstTimer",
          f = "pushState";
      },
      755: (e, t, r) => {
        r.d(t, {
          BODY: () => E,
          CB_END: () => A,
          CB_START: () => u,
          END: () => x,
          FEATURE_NAME: () => i,
          FETCH: () => _,
          FETCH_BODY: () => v,
          FETCH_DONE: () => m,
          FETCH_START: () => p,
          FN_END: () => c,
          FN_START: () => s,
          INTERACTION: () => l,
          INTERACTION_API: () => d,
          INTERACTION_EVENTS: () => o,
          JSONP_END: () => b,
          JSONP_NODE: () => g,
          JS_TIME: () => T,
          MAX_TIMER_BUDGET: () => a,
          REMAINING: () => f,
          SPA_NODE: () => h,
          START: () => w,
          originalSetTimeout: () => y,
        });
        var n = r(880);
        r(2374);
        const i = r(2325).D.spa,
          o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
          a = 999,
          s = "fn-start",
          c = "fn-end",
          u = "cb-start",
          d = "api-ixn-",
          f = "remaining",
          l = "interaction",
          h = "spaNode",
          g = "jsonpNode",
          p = "fetch-start",
          m = "fetch-done",
          v = "fetch-body-",
          b = "jsonp-end",
          y = n.Yu.ST,
          w = "-start",
          x = "-end",
          E = "-body",
          A = "cb" + x,
          T = "jsTime",
          _ = "fetch";
      },
      1509: (e, t, r) => {
        r.d(t, { W: () => o });
        var n = r(880),
          i = r(3752);
        class o {
          constructor(e, t, r) {
            (this.agentIdentifier = e), (this.aggregator = t), (this.ee = i.ee.get(e, (0, n.OP)(this.agentIdentifier).isolatedBacklog)), (this.featureName = r), (this.blocked = !1);
          }
        }
      },
      3975: (e, t, r) => {
        r.d(t, { j: () => m });
        var n = r(2325),
          i = r(880),
          o = r(9252),
          a = r(3752),
          s = r(2053),
          c = r(4329),
          u = r(2650),
          d = r(2374),
          f = r(8610),
          l = r(6034),
          h = r(6797);
        function g() {
          const e = (0, h.gG)();
          ["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease", "addPageAction", "setCurrentRouteName", "setPageViewName", "setCustomAttribute", "interaction", "noticeError", "setUserId"].forEach((t) => {
            e[t] = function () {
              for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
              return (function (t) {
                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                let o = [];
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e.exposed && e.api[t] && o.push(e.api[t](...n));
                  }),
                  o.length > 1 ? o : o[0]
                );
              })(t, ...n);
            };
          });
        }
        var p = r(7269);
        function m(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            m = arguments.length > 2 ? arguments[2] : void 0,
            v = arguments.length > 3 ? arguments[3] : void 0,
            { init: b, info: y, loader_config: w, runtime: x = { loaderType: m }, exposed: E = !0 } = t;
          const A = (0, h.gG)();
          y || ((b = A.init), (y = A.info), (w = A.loader_config)), (0, i.Dg)(e, b || {}), (0, i.GE)(e, w || {}), (0, i.sU)(e, x), (y.jsAttributes ??= {}), d.v6 && (y.jsAttributes.isWorker = !0), (0, i.CX)(e, y), g();
          const T = (function (e, t) {
            t || (0, c.R)(e, "api");
            const h = {};
            var g = a.ee.get(e),
              p = g.get("tracer"),
              m = "api-",
              v = m + "ixn-";
            function b(t, r, n, o) {
              const a = (0, i.C5)(e);
              return null === r ? delete a.jsAttributes[t] : (0, i.CX)(e, { ...a, jsAttributes: { ...a.jsAttributes, [t]: r } }), x(m, n, !0, o || null === r ? "session" : void 0)(t, r);
            }
            function y() {}
            ["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"].forEach((e) => (h[e] = x(m, e, !0, "api"))),
              (h.addPageAction = x(m, "addPageAction", !0, n.D.pageAction)),
              (h.setCurrentRouteName = x(m, "routeName", !0, n.D.spa)),
              (h.setPageViewName = function (t, r) {
                if ("string" == typeof t) return "/" !== t.charAt(0) && (t = "/" + t), ((0, i.OP)(e).customTransaction = (r || "http://custom.transaction") + t), x(m, "setPageViewName", !0)();
              }),
              (h.setCustomAttribute = function (e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("string" == typeof e) {
                  if (["string", "number"].includes(typeof t) || null === t) return b(e, t, "setCustomAttribute", r);
                  (0, f.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string or number type, but a type of <".concat(typeof t, "> was provided."));
                } else (0, f.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e, "> was provided."));
              }),
              (h.setUserId = function (e) {
                if ("string" == typeof e || null === e) return b("enduser.id", e, "setUserId", !0);
                (0, f.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e, "> was provided."));
              }),
              (h.interaction = function () {
                return new y().get();
              });
            var w = (y.prototype = {
              createTracer: function (e, t) {
                var r = {},
                  i = this,
                  a = "function" == typeof t;
                return (
                  (0, o.p)(v + "tracer", [(0, s.z)(), e, r], i, n.D.spa, g),
                  function () {
                    if ((p.emit((a ? "" : "no-") + "fn-start", [(0, s.z)(), i, a], r), a))
                      try {
                        return t.apply(this, arguments);
                      } catch (e) {
                        throw (p.emit("fn-err", [arguments, this, "string" == typeof e ? new Error(e) : e], r), e);
                      } finally {
                        p.emit("fn-end", [(0, s.z)()], r);
                      }
                  }
                );
              },
            });
            function x(e, t, r, i) {
              return function () {
                return (0, o.p)(l.xS, ["API/" + t + "/called"], void 0, n.D.metrics, g), i && (0, o.p)(e + t, [(0, s.z)(), ...arguments], r ? null : this, i, g), r ? void 0 : this;
              };
            }
            function E() {
              r.e(439)
                .then(r.bind(r, 5692))
                .then((t) => {
                  let { setAPI: r } = t;
                  r(e), (0, c.L)(e, "api");
                })
                .catch(() => (0, f.Z)("Downloading runtime APIs failed..."));
            }
            return (
              ["actionText", "setName", "setAttribute", "save", "ignore", "onEnd", "getContext", "end", "get"].forEach((e) => {
                w[e] = x(v, e, void 0, n.D.spa);
              }),
              (h.noticeError = function (e, t) {
                "string" == typeof e && (e = new Error(e)), (0, o.p)(l.xS, ["API/noticeError/called"], void 0, n.D.metrics, g), (0, o.p)("err", [e, (0, s.z)(), !1, t], void 0, n.D.jserrors, g);
              }),
              d.v6 ? E() : (0, u.b)(() => E(), !0),
              h
            );
          })(e, v);
          return (0, h.Qy)(e, T, "api"), (0, h.Qy)(e, E, "exposed"), (0, h.EZ)("activatedFeatures", p.T), T;
        }
      },
      2325: (e, t, r) => {
        r.d(t, { D: () => n, p: () => i });
        const n = {
            ajax: "ajax",
            jserrors: "jserrors",
            metrics: "metrics",
            pageAction: "page_action",
            pageViewEvent: "page_view_event",
            pageViewTiming: "page_view_timing",
            sessionReplay: "session_replay",
            sessionTrace: "session_trace",
            spa: "spa",
          },
          i = { [n.pageViewEvent]: 1, [n.pageViewTiming]: 2, [n.metrics]: 3, [n.jserrors]: 4, [n.ajax]: 5, [n.sessionTrace]: 6, [n.pageAction]: 7, [n.spa]: 8, [n.sessionReplay]: 9 };
      },
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e](o, o.exports, i), o.exports;
  }
  (i.m = r),
    (i.d = (e, t) => {
      for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) => Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      (({
        78: "page_action-aggregate",
        147: "metrics-aggregate",
        193: "session_trace-aggregate",
        242: "session-manager",
        317: "jserrors-aggregate",
        348: "page_view_timing-aggregate",
        412: "lazy-feature-loader",
        439: "async-api",
        538: "recorder",
        590: "session_replay-aggregate",
        675: "compressor",
        786: "page_view_event-aggregate",
        873: "spa-aggregate",
        898: "ajax-aggregate",
      }[e] || e) +
      "." +
      {
        78: "e03e2220",
        147: "75d6a08d",
        193: "715c3096",
        242: "9219a813",
        286: "d701d70f",
        317: "8c74e315",
        348: "ad791b05",
        412: "fe5af5d1",
        439: "bbe52263",
        538: "1b18459f",
        590: "36b41a12",
        646: "c6971123",
        675: "ae9f91a8",
        786: "e157f7ce",
        873: "e1bcad73",
        898: "716f46cf",
      }[e] +
      "-1.234.0.min.js")),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "NRBA:"),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n);
      else {
        var s, c;
        if (void 0 !== o)
          for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
            var f = u[d];
            if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
              s = f;
              break;
            }
          }
        s || ((c = !0), ((s = document.createElement("script")).charset = "utf-8"), (s.timeout = 120), i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", t + o), (s.src = r)), (e[r] = [n]);
        var l = (t, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = e[r];
            if ((delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e) => e(n)), t)) return t(n);
          },
          h = setTimeout(l.bind(null, void 0, { type: "timeout", target: s }), 12e4);
        (s.onerror = l.bind(null, s.onerror)), (s.onload = l.bind(null, s.onload)), c && document.head.appendChild(s);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.j = 20),
    (i.p = "https://js-agent.newrelic.com/"),
    (() => {
      var e = { 20: 0, 73: 0 };
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              s = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"), (s.name = "ChunkLoadError"), (s.type = o), (s.request = a), n[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (c) c(i);
          }
          for (t && t(r); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (window.webpackChunkNRBA = window.webpackChunkNRBA || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = {};
  (() => {
    i.r(o);
    var e = i(2325),
      t = i(880);
    const r = Object.values(e.D);
    function n(e) {
      const n = {};
      return (
        r.forEach((r) => {
          n[r] = (function (e, r) {
            return !1 !== (0, t.Mt)(r, "".concat(e, ".enabled"));
          })(r, e);
        }),
        n
      );
    }
    var a = i(3975);
    var s = i(9252),
      c = i(8768),
      u = i(4329),
      d = i(1509),
      f = i(2650),
      l = i(2374),
      h = i(8610);
    class g extends d.W {
      constructor(e, t, r) {
        let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        super(e, t, r), (this.hasAggregator = !1), (this.auto = n), this.abortHandler, n && (0, u.R)(e, r);
      }
      importAggregator(r) {
        if (this.hasAggregator || !this.auto) return;
        let n, o;
        (this.hasAggregator = !0),
          !0 !== (0, t.Mt)(this.agentIdentifier, "privacy.cookies_enabled") ||
            l.v6 ||
            (o = Promise.all([i.e(286), i.e(242)])
              .then(i.bind(i, 3289))
              .catch((e) => {
                (0, h.Z)("failed to import the session manager", e);
              }));
        const a = async () => {
          try {
            if (o && !n) {
              const { setupAgentSession: e } = await o;
              n = e(this.agentIdentifier);
            }
            if (
              !(function (t, r) {
                return t !== e.D.sessionReplay || !!r?.isNew || !!r?.state.sessionReplayActive;
              })(this.featureName, n)
            )
              return void (0, u.L)(this.agentIdentifier, this.featureName);
            const { lazyFeatureLoader: t } = await i.e(412).then(i.bind(i, 3160)),
              { Aggregate: a } = await t(this.featureName, "aggregate");
            new a(this.agentIdentifier, this.aggregator, r);
          } catch (e) {
            (0, h.Z)("Downloading ".concat(this.featureName, " failed..."), e), this.abortHandler?.();
          }
        };
        l.v6 ? a() : (0, f.b)(() => a(), !0);
      }
    }
    var p = i(2484),
      m = i(2053);
    class v extends g {
      static featureName = p.t9;
      constructor(r, n) {
        let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if ((super(r, n, p.t9, i), ("undefined" == typeof PerformanceNavigationTiming || c.T) && "undefined" != typeof PerformanceTiming)) {
          const n = (0, t.OP)(r);
          (n[p.Dz] = Math.max(Date.now() - n.offset, 0)),
            (0, f.K)(() => (n[p.qw] = Math.max((0, m.z)() - n[p.Dz], 0))),
            (0, f.b)(() => {
              const t = (0, m.z)();
              (n[p.OJ] = Math.max(t - n[p.Dz], 0)), (0, s.p)("timing", ["load", t], void 0, e.D.pageViewTiming, this.ee);
            });
        }
        this.importAggregator();
      }
    }
    var b = i(9557),
      y = i(7022);
    class w extends b.w {
      constructor(e) {
        super(e), (this.aggregatedData = {});
      }
      store(e, t, r, n, i) {
        var o = this.getBucket(e, t, r, i);
        return (
          (o.metrics = (function (e, t) {
            t || (t = { count: 0 });
            return (
              (t.count += 1),
              (0, y.D)(e, function (e, r) {
                t[e] = x(r, t[e]);
              }),
              t
            );
          })(n, o.metrics)),
          o
        );
      }
      merge(e, t, r, n, i) {
        var o = this.getBucket(e, t, n, i);
        if (o.metrics) {
          var a = o.metrics;
          (a.count += r.count),
            (0, y.D)(r, function (e, t) {
              if ("count" !== e) {
                var n = a[e],
                  i = r[e];
                i && !i.c
                  ? (a[e] = x(i.t, n))
                  : (a[e] = (function (e, t) {
                      if (!t) return e;
                      t.c || (t = E(t.t));
                      return (t.min = Math.min(e.min, t.min)), (t.max = Math.max(e.max, t.max)), (t.t += e.t), (t.sos += e.sos), (t.c += e.c), t;
                    })(i, a[e]));
              }
            });
        } else o.metrics = r;
      }
      storeMetric(e, t, r, n) {
        var i = this.getBucket(e, t, r);
        return (i.stats = x(n, i.stats)), i;
      }
      getBucket(e, t, r, n) {
        this.aggregatedData[e] || (this.aggregatedData[e] = {});
        var i = this.aggregatedData[e][t];
        return i || ((i = this.aggregatedData[e][t] = { params: r || {} }), n && (i.custom = n)), i;
      }
      get(e, t) {
        return t ? this.aggregatedData[e] && this.aggregatedData[e][t] : this.aggregatedData[e];
      }
      take(e) {
        for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++) (t[(r = e[i])] = A(this.aggregatedData[r])), t[r].length && (n = !0), delete this.aggregatedData[r];
        return n ? t : null;
      }
    }
    function x(e, t) {
      return null == e
        ? (function (e) {
            e ? e.c++ : (e = { c: 1 });
            return e;
          })(t)
        : t
        ? (t.c || (t = E(t.t)), (t.c += 1), (t.t += e), (t.sos += e * e), e > t.max && (t.max = e), e < t.min && (t.min = e), t)
        : { t: e };
    }
    function E(e) {
      return { t: e, min: e, max: e, sos: e * e, c: 1 };
    }
    function A(e) {
      return "object" != typeof e ? [] : (0, y.D)(e, T);
    }
    function T(e, t) {
      return t;
    }
    var _ = i(6797),
      D = i(5526),
      N = i(2438);
    var O = i(6998),
      S = i(8544),
      j = i(6382);
    class P extends g {
      static featureName = j.t;
      constructor(e, r) {
        let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, r, j.t, n),
          l.il &&
            (((0, t.OP)(e).initHidden = Boolean("hidden" === document.visibilityState)),
            (0, O.N)(() => (0, s.p)("docHidden", [(0, m.z)()], void 0, j.t, this.ee), !0),
            (0, S.bP)("pagehide", () => (0, s.p)("winPagehide", [(0, m.z)()], void 0, j.t, this.ee)),
            this.importAggregator());
      }
    }
    var C = i(6034);
    class R extends g {
      static featureName = C.t9;
      constructor(e, t) {
        let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, C.t9, r), this.importAggregator();
      }
    }
    var I,
      k = i(3916),
      H = i(7264),
      z = i(3752),
      L = {};
    try {
      (I = localStorage.getItem("__nr_flags").split(",")), console && "function" == typeof console.log && ((L.console = !0), -1 !== I.indexOf("dev") && (L.dev = !0), -1 !== I.indexOf("nr_dev") && (L.nrDev = !0));
    } catch (e) {}
    function M(e) {
      try {
        L.console && M(e);
      } catch (e) {}
    }
    L.nrDev &&
      z.ee.on("internal-error", function (e) {
        M(e.stack);
      }),
      L.dev &&
        z.ee.on("fn-err", function (e, t, r) {
          M(r.stack);
        }),
      L.dev &&
        (M("NR AGENT IN DEVELOPMENT MODE"),
        M(
          "flags: " +
            (0, y.D)(L, function (e, t) {
              return e;
            }).join(", ")
        ));
    var B = i(8322);
    class F extends g {
      static featureName = B.t;
      constructor(r, n) {
        let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(r, n, B.t, i), (this.skipNext = 0);
        try {
          this.removeOnAbort = new AbortController();
        } catch (e) {}
        const o = this;
        o.ee.on("fn-start", function (e, t, r) {
          o.abortHandler && (o.skipNext += 1);
        }),
          o.ee.on("fn-err", function (e, t, r) {
            o.abortHandler &&
              !r[B.A] &&
              ((0, k.X)(r, B.A, function () {
                return !0;
              }),
              (this.thrown = !0),
              q(r, void 0, o.ee));
          }),
          o.ee.on("fn-end", function () {
            o.abortHandler && !this.thrown && o.skipNext > 0 && (o.skipNext -= 1);
          }),
          o.ee.on("internal-error", function (t) {
            (0, s.p)("ierr", [t, (0, m.z)(), !0], void 0, e.D.jserrors, o.ee);
          }),
          (this.origOnerror = l._A.onerror),
          (l._A.onerror = this.onerrorHandler.bind(this)),
          l._A.addEventListener(
            "unhandledrejection",
            (t) => {
              const r = (function (e) {
                let t = "Unhandled Promise Rejection: ";
                if (e instanceof Error)
                  try {
                    return (e.message = t + e.message), e;
                  } catch (t) {
                    return e;
                  }
                if (void 0 === e) return new Error(t);
                try {
                  return new Error(t + (0, N.P)(e));
                } catch (e) {
                  return new Error(t);
                }
              })(t.reason);
              (0, s.p)("err", [r, (0, m.z)(), !1, { unhandledPromiseRejection: 1 }], void 0, e.D.jserrors, this.ee);
            },
            (0, S.m$)(!1, this.removeOnAbort?.signal)
          ),
          (0, H.gy)(this.ee),
          (0, H.BV)(this.ee),
          (0, H.em)(this.ee),
          (0, t.OP)(r).xhrWrappable && (0, H.Kf)(this.ee),
          (this.abortHandler = this.#e),
          this.importAggregator();
      }
      #e() {
        this.removeOnAbort?.abort(), (this.abortHandler = void 0);
      }
      onerrorHandler(t, r, n, i, o) {
        "function" == typeof this.origOnerror && this.origOnerror(...arguments);
        try {
          this.skipNext ? (this.skipNext -= 1) : q(o || new U(t, r, n), !0, this.ee);
        } catch (t) {
          try {
            (0, s.p)("ierr", [t, (0, m.z)(), !0], void 0, e.D.jserrors, this.ee);
          } catch (e) {}
        }
        return !1;
      }
    }
    function U(e, t, r) {
      (this.message = e || "Uncaught error with no additional information"), (this.sourceURL = t), (this.line = r);
    }
    function q(t, r, n) {
      var i = r ? null : (0, m.z)();
      (0, s.p)("err", [t, i], void 0, e.D.jserrors, n);
    }
    let G = 1;
    const V = "nr@id";
    function X(e) {
      const t = typeof e;
      return !e || ("object" !== t && "function" !== t)
        ? -1
        : e === l._A
        ? 0
        : (0, k.X)(e, V, function () {
            return G++;
          });
    }
    var Z = i(9071);
    function W(e) {
      if ("string" == typeof e && e.length) return e.length;
      if ("object" == typeof e) {
        if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength) return e.byteLength;
        if ("undefined" != typeof Blob && e instanceof Blob && e.size) return e.size;
        if (!("undefined" != typeof FormData && e instanceof FormData))
          try {
            return (0, N.P)(e).length;
          } catch (e) {
            return;
          }
      }
    }
    var $ = i(6368);
    class Q {
      constructor(e) {
        (this.agentIdentifier = e), (this.generateTracePayload = this.generateTracePayload.bind(this)), (this.shouldGenerateTrace = this.shouldGenerateTrace.bind(this));
      }
      generateTracePayload(e) {
        if (!this.shouldGenerateTrace(e)) return null;
        var r = (0, t.DL)(this.agentIdentifier);
        if (!r) return null;
        var n = (r.accountID || "").toString() || null,
          i = (r.agentID || "").toString() || null,
          o = (r.trustKey || "").toString() || null;
        if (!n || !i) return null;
        var a = (0, D.M)(),
          s = (0, D.Ht)(),
          c = Date.now(),
          u = { spanId: a, traceId: s, timestamp: c };
        return (
          (e.sameOrigin || (this.isAllowedOrigin(e) && this.useTraceContextHeadersForCors())) &&
            ((u.traceContextParentHeader = this.generateTraceContextParentHeader(a, s)), (u.traceContextStateHeader = this.generateTraceContextStateHeader(a, c, n, i, o))),
          ((e.sameOrigin && !this.excludeNewrelicHeader()) || (!e.sameOrigin && this.isAllowedOrigin(e) && this.useNewrelicHeaderForCors())) && (u.newrelicHeader = this.generateTraceHeader(a, s, c, n, i, o)),
          u
        );
      }
      generateTraceContextParentHeader(e, t) {
        return "00-" + t + "-" + e + "-01";
      }
      generateTraceContextStateHeader(e, t, r, n, i) {
        return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t;
      }
      generateTraceHeader(e, t, r, n, i, o) {
        if (!("function" == typeof l._A?.btoa)) return null;
        var a = { v: [0, 1], d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r } };
        return o && n !== o && (a.d.tk = o), btoa((0, N.P)(a));
      }
      shouldGenerateTrace(e) {
        return this.isDtEnabled() && this.isAllowedOrigin(e);
      }
      isAllowedOrigin(e) {
        var r = !1,
          n = {};
        if (((0, t.Mt)(this.agentIdentifier, "distributed_tracing") && (n = (0, t.P_)(this.agentIdentifier).distributed_tracing), e.sameOrigin)) r = !0;
        else if (n.allowed_origins instanceof Array)
          for (var i = 0; i < n.allowed_origins.length; i++) {
            var o = (0, $.e)(n.allowed_origins[i]);
            if (e.hostname === o.hostname && e.protocol === o.protocol && e.port === o.port) {
              r = !0;
              break;
            }
          }
        return r;
      }
      isDtEnabled() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.enabled;
      }
      excludeNewrelicHeader() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.exclude_newrelic_header;
      }
      useNewrelicHeaderForCors() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !1 !== e.cors_use_newrelic_header;
      }
      useTraceContextHeadersForCors() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.cors_use_tracecontext_headers;
      }
    }
    var Y = i(8675),
      K = ["load", "error", "abort", "timeout"],
      J = K.length,
      ee = t.Yu.REQ,
      te = l._A.XMLHttpRequest;
    class re extends g {
      static featureName = Y.t;
      constructor(r, n) {
        let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(r, n, Y.t, i),
          (0, t.OP)(r).xhrWrappable &&
            ((this.dt = new Q(r)),
            (this.handler = (e, t, r, n) => (0, s.p)(e, t, r, n, this.ee)),
            (0, H.u5)(this.ee),
            (0, H.Kf)(this.ee),
            (function (r, n, i, o) {
              function a(e) {
                var t = this;
                (t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = A),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    "load",
                    function (r) {
                      _(t, e);
                    },
                    (0, S.m$)(!1)
                  ),
                  Z.I ||
                    e.addEventListener(
                      "progress",
                      function (e) {
                        t.lastSize = e.loaded;
                      },
                      (0, S.m$)(!1)
                    );
              }
              function s(e) {
                (this.params = { method: e[0] }), T(this, e[1]), (this.metrics = {});
              }
              function c(e, n) {
                var i = (0, t.DL)(r);
                i.xpid && this.sameOrigin && n.setRequestHeader("X-NewRelic-ID", i.xpid);
                var a = o.generateTracePayload(this.parsedOrigin);
                if (a) {
                  var s = !1;
                  a.newrelicHeader && (n.setRequestHeader("newrelic", a.newrelicHeader), (s = !0)),
                    a.traceContextParentHeader && (n.setRequestHeader("traceparent", a.traceContextParentHeader), a.traceContextStateHeader && n.setRequestHeader("tracestate", a.traceContextStateHeader), (s = !0)),
                    s && (this.dt = a);
                }
              }
              function u(e, t) {
                var r = this.metrics,
                  i = e[0],
                  o = this;
                if (r && i) {
                  var a = W(i);
                  a && (r.txSize = a);
                }
                (this.startTime = (0, m.z)()),
                  (this.listener = function (e) {
                    try {
                      "abort" !== e.type || o.loadCaptureCalled || (o.params.aborted = !0), ("load" !== e.type || (o.called === o.totalCbs && (o.onloadCalled || "function" != typeof t.onload) && "function" == typeof o.end)) && o.end(t);
                    } catch (e) {
                      try {
                        n.emit("internal-error", [e]);
                      } catch (e) {}
                    }
                  });
                for (var s = 0; s < J; s++) t.addEventListener(K[s], this.listener, (0, S.m$)(!1));
              }
              function d(e, t, r) {
                (this.cbTime += e), t ? (this.onloadCalled = !0) : (this.called += 1), this.called !== this.totalCbs || (!this.onloadCalled && "function" == typeof r.onload) || "function" != typeof this.end || this.end(r);
              }
              function f(e, t) {
                var r = "" + X(e) + !!t;
                this.xhrGuids && !this.xhrGuids[r] && ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
              }
              function h(e, t) {
                var r = "" + X(e) + !!t;
                this.xhrGuids && this.xhrGuids[r] && (delete this.xhrGuids[r], (this.totalCbs -= 1));
              }
              function g() {
                this.endTime = (0, m.z)();
              }
              function p(e, t) {
                t instanceof te && "load" === e[0] && n.emit("xhr-load-added", [e[1], e[2]], t);
              }
              function v(e, t) {
                t instanceof te && "load" === e[0] && n.emit("xhr-load-removed", [e[1], e[2]], t);
              }
              function b(e, t, r) {
                t instanceof te && ("onload" === r && (this.onload = !0), ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (0, m.z)()));
              }
              function y(e, t) {
                this.xhrCbStart && n.emit("xhr-cb-time", [(0, m.z)() - this.xhrCbStart, this.onload, t], t);
              }
              function w(e) {
                var t,
                  r = e[1] || {};
                "string" == typeof e[0] ? (t = e[0]) : e[0] && e[0].url ? (t = e[0].url) : l._A?.URL && e[0] && e[0] instanceof URL && (t = e[0].href),
                  t && ((this.parsedOrigin = (0, $.e)(t)), (this.sameOrigin = this.parsedOrigin.sameOrigin));
                var n = o.generateTracePayload(this.parsedOrigin);
                if (n && (n.newrelicHeader || n.traceContextParentHeader))
                  if ("string" == typeof e[0] || (l._A?.URL && e[0] && e[0] instanceof URL)) {
                    var i = {};
                    for (var a in r) i[a] = r[a];
                    (i.headers = new Headers(r.headers || {})), s(i.headers, n) && (this.dt = n), e.length > 1 ? (e[1] = i) : e.push(i);
                  } else e[0] && e[0].headers && s(e[0].headers, n) && (this.dt = n);
                function s(e, t) {
                  var r = !1;
                  return (
                    t.newrelicHeader && (e.set("newrelic", t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader && (e.set("traceparent", t.traceContextParentHeader), t.traceContextStateHeader && e.set("tracestate", t.traceContextStateHeader), (r = !0)),
                    r
                  );
                }
              }
              function x(e, t) {
                (this.params = {}), (this.metrics = {}), (this.startTime = (0, m.z)()), (this.dt = t), e.length >= 1 && (this.target = e[0]), e.length >= 2 && (this.opts = e[1]);
                var r,
                  n = this.opts || {},
                  i = this.target;
                "string" == typeof i ? (r = i) : "object" == typeof i && i instanceof ee ? (r = i.url) : l._A?.URL && "object" == typeof i && i instanceof URL && (r = i.href), T(this, r);
                var o = ("" + ((i && i instanceof ee && i.method) || n.method || "GET")).toUpperCase();
                (this.params.method = o), (this.txSize = W(n.body) || 0);
              }
              function E(t, r) {
                var n;
                (this.endTime = (0, m.z)()), this.params || (this.params = {}), (this.params.status = r ? r.status : 0), "string" == typeof this.rxSize && this.rxSize.length > 0 && (n = +this.rxSize);
                var o = { txSize: this.txSize, rxSize: n, duration: (0, m.z)() - this.startTime };
                i("xhr", [this.params, o, this.startTime, this.endTime, "fetch"], this, e.D.ajax);
              }
              function A(t) {
                var r = this.params,
                  n = this.metrics;
                if (!this.ended) {
                  this.ended = !0;
                  for (var o = 0; o < J; o++) t.removeEventListener(K[o], this.listener, !1);
                  r.aborted ||
                    ((n.duration = (0, m.z)() - this.startTime),
                    this.loadCaptureCalled || 4 !== t.readyState ? null == r.status && (r.status = 0) : _(this, t),
                    (n.cbTime = this.cbTime),
                    i("xhr", [r, n, this.startTime, this.endTime, "xhr"], this, e.D.ajax));
                }
              }
              function T(e, t) {
                var r = (0, $.e)(t),
                  n = e.params;
                (n.hostname = r.hostname), (n.port = r.port), (n.protocol = r.protocol), (n.host = r.hostname + ":" + r.port), (n.pathname = r.pathname), (e.parsedOrigin = r), (e.sameOrigin = r.sameOrigin);
              }
              function _(e, t) {
                e.params.status = t.status;
                var r = (function (e, t) {
                  var r = e.responseType;
                  return "json" === r && null !== t ? t : "arraybuffer" === r || "blob" === r || "json" === r ? W(e.response) : "text" === r || "" === r || void 0 === r ? W(e.responseText) : void 0;
                })(t, e.lastSize);
                if ((r && (e.metrics.rxSize = r), e.sameOrigin)) {
                  var n = t.getResponseHeader("X-NewRelic-App-Data");
                  n && (e.params.cat = n.split(", ").pop());
                }
                e.loadCaptureCalled = !0;
              }
              n.on("new-xhr", a),
                n.on("open-xhr-start", s),
                n.on("open-xhr-end", c),
                n.on("send-xhr-start", u),
                n.on("xhr-cb-time", d),
                n.on("xhr-load-added", f),
                n.on("xhr-load-removed", h),
                n.on("xhr-resolved", g),
                n.on("addEventListener-end", p),
                n.on("removeEventListener-end", v),
                n.on("fn-end", y),
                n.on("fetch-before-start", w),
                n.on("fetch-start", x),
                n.on("fn-start", b),
                n.on("fetch-done", E);
            })(r, this.ee, this.handler, this.dt),
            this.importAggregator());
      }
    }
    var ne = i(2628);
    const { BST_RESOURCE: ie, RESOURCE: oe, BST_TIMER: ae, START: se, END: ce, FEATURE_NAME: ue, FN_END: de, FN_START: fe, PUSH_STATE: le } = ne;
    var he = i(755);
    const { FEATURE_NAME: ge, START: pe, END: me, BODY: ve, CB_END: be, JS_TIME: ye, FETCH: we, FN_START: xe, CB_START: Ee, FN_END: Ae } = he;
    var Te = i(6486);
    class _e extends g {
      static featureName = Te.t;
      constructor(e, t) {
        let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, Te.t, r), this.importAggregator();
      }
    }
    new (class {
      constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, D.ky)(16);
        (this.agentIdentifier = t),
          (this.sharedAggregator = new w({ agentIdentifier: this.agentIdentifier })),
          (this.features = {}),
          (this.desiredFeatures = new Set(e.features || [])),
          this.desiredFeatures.add(v),
          Object.assign(this, (0, a.j)(this.agentIdentifier, e, e.loaderType || "agent")),
          this.start();
      }
      get config() {
        return { info: (0, t.C5)(this.agentIdentifier), init: (0, t.P_)(this.agentIdentifier), loader_config: (0, t.DL)(this.agentIdentifier), runtime: (0, t.OP)(this.agentIdentifier) };
      }
      start() {
        const t = "features";
        try {
          const r = n(this.agentIdentifier),
            i = [...this.desiredFeatures];
          i.sort((t, r) => e.p[t.featureName] - e.p[r.featureName]),
            i.forEach((t) => {
              if (r[t.featureName] || t.featureName === e.D.pageViewEvent) {
                const n = (function (t) {
                  switch (t) {
                    case e.D.ajax:
                      return [e.D.jserrors];
                    case e.D.sessionTrace:
                      return [e.D.ajax, e.D.pageViewEvent];
                    case e.D.pageViewTiming:
                      return [e.D.pageViewEvent];
                    default:
                      return [];
                  }
                })(t.featureName);
                n.every((e) => r[e]) || (0, h.Z)("".concat(t.featureName, " is enabled but one or more dependent features has been disabled (").concat((0, N.P)(n), "). This may cause unintended consequences or missing data...")),
                  (this.features[t.featureName] = new t(this.agentIdentifier, this.sharedAggregator));
              }
            }),
            (0, _.Qy)(this.agentIdentifier, this.features, t);
        } catch (e) {
          (0, h.Z)("Failed to initialize all enabled instrument classes (agent aborted) -", e);
          for (const e in this.features) this.features[e].abortHandler?.();
          const r = (0, _.fP)();
          return delete r.initializedAgents[this.agentIdentifier]?.api, delete r.initializedAgents[this.agentIdentifier]?.[t], delete this.sharedAggregator, r.ee?.abort(), delete r.ee?.get(this.agentIdentifier), !1;
        }
      }
    })({
      features: [
        re,
        v,
        P,
        class extends g {
          static featureName = ue;
          constructor(t, r) {
            if ((super(t, r, ue, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]), !l.il)) return;
            const n = this.ee;
            let i;
            (this.timerEE = (0, H.BV)(n)),
              (this.rafEE = (0, H.gy)(n)),
              (0, H.QU)(n),
              (this.eventsEE = (0, H.em)(n)),
              this.eventsEE.on(fe, function (e, t) {
                this.bstStart = (0, m.z)();
              }),
              this.eventsEE.on(de, function (t, r) {
                (0, s.p)("bst", [t[0], r, this.bstStart, (0, m.z)()], void 0, e.D.sessionTrace, n);
              }),
              this.timerEE.on(fe, function (e, t, r) {
                (this.bstStart = (0, m.z)()), (this.bstType = r);
              }),
              this.timerEE.on(de, function (t, r) {
                (0, s.p)(ae, [r, this.bstStart, (0, m.z)(), this.bstType], void 0, e.D.sessionTrace, n);
              }),
              this.rafEE.on(fe, function () {
                this.bstStart = (0, m.z)();
              }),
              this.rafEE.on(de, function (t, r) {
                (0, s.p)(ae, [r, this.bstStart, (0, m.z)(), "requestAnimationFrame"], void 0, e.D.sessionTrace, n);
              }),
              n.on(le + se, function (e) {
                (this.time = (0, m.z)()), (this.startPath = location.pathname + location.hash);
              }),
              n.on(le + ce, function (t) {
                (0, s.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, e.D.sessionTrace, n);
              });
            try {
              (i = new PerformanceObserver((t) => {
                const r = t.getEntries();
                (0, s.p)(ie, [r], void 0, e.D.sessionTrace, n);
              })),
                i.observe({ type: oe, buffered: !0 });
            } catch (e) {}
            this.importAggregator({ resourceObserver: i });
          }
        },
        R,
        _e,
        F,
        class extends g {
          static featureName = ge;
          constructor(e, r) {
            if ((super(e, r, ge, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]), !l.il)) return;
            if (!(0, t.OP)(e).xhrWrappable) return;
            try {
              this.removeOnAbort = new AbortController();
            } catch (e) {}
            let n,
              i = 0;
            const o = this.ee.get("tracer"),
              a = (0, H._L)(this.ee),
              s = (0, H.Lg)(this.ee),
              c = (0, H.BV)(this.ee),
              u = (0, H.Kf)(this.ee),
              d = this.ee.get("events"),
              f = (0, H.u5)(this.ee),
              h = (0, H.QU)(this.ee),
              g = (0, H.Gm)(this.ee);
            function p(e, t) {
              h.emit("newURL", ["" + window.location, t]);
            }
            function v() {
              i++, (n = window.location.hash), (this[xe] = (0, m.z)());
            }
            function b() {
              i--, window.location.hash !== n && p(0, !0);
              var e = (0, m.z)();
              (this[ye] = ~~this[ye] + e - this[xe]), (this[Ae] = e);
            }
            function y(e, t) {
              e.on(t, function () {
                this[t] = (0, m.z)();
              });
            }
            this.ee.on(xe, v),
              s.on(Ee, v),
              a.on(Ee, v),
              this.ee.on(Ae, b),
              s.on(be, b),
              a.on(be, b),
              this.ee.buffer([xe, Ae, "xhr-resolved"], this.featureName),
              d.buffer([xe], this.featureName),
              c.buffer(["setTimeout" + me, "clearTimeout" + pe, xe], this.featureName),
              u.buffer([xe, "new-xhr", "send-xhr" + pe], this.featureName),
              f.buffer([we + pe, we + "-done", we + ve + pe, we + ve + me], this.featureName),
              h.buffer(["newURL"], this.featureName),
              g.buffer([xe], this.featureName),
              s.buffer(["propagate", Ee, be, "executor-err", "resolve" + pe], this.featureName),
              o.buffer([xe, "no-" + xe], this.featureName),
              a.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"], this.featureName),
              y(f, we + pe),
              y(f, we + "-done"),
              y(a, "new-jsonp"),
              y(a, "jsonp-end"),
              y(a, "cb-start"),
              h.on("pushState-end", p),
              h.on("replaceState-end", p),
              window.addEventListener("hashchange", p, (0, S.m$)(!0, this.removeOnAbort?.signal)),
              window.addEventListener("load", p, (0, S.m$)(!0, this.removeOnAbort?.signal)),
              window.addEventListener(
                "popstate",
                function () {
                  p(0, i > 1);
                },
                (0, S.m$)(!0, this.removeOnAbort?.signal)
              ),
              (this.abortHandler = this.#e),
              this.importAggregator();
          }
          #e() {
            this.removeOnAbort?.abort(), (this.abortHandler = void 0);
          }
        },
      ],
      loaderType: "spa",
    });
  })(),
    (window.NRBA = o);
})();
