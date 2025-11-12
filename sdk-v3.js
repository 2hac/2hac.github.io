( () => {
    var e = {
        2: (e, t, r) => {
            var n = r(2199)
              , s = r(4664)
              , o = r(5950);
            e.exports = function(e) {
                return n(e, o, s)
            }
        }
        ,
        14: (e, t, r) => {
            var n = r(5389)
              , s = r(5765);
            e.exports = function(e, t) {
                return e && e.length ? s(e, n(t, 2)) : []
            }
        }
        ,
        79: (e, t, r) => {
            var n = r(3702)
              , s = r(80)
              , o = r(4739)
              , i = r(8655)
              , a = r(1175);
            function l(e) {
                var t = -1
                  , r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            l.prototype.clear = n,
            l.prototype.delete = s,
            l.prototype.get = o,
            l.prototype.has = i,
            l.prototype.set = a,
            e.exports = l
        }
        ,
        80: (e, t, r) => {
            var n = r(6025)
              , s = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__
                  , r = n(t, e);
                return !(r < 0 || (r == t.length - 1 ? t.pop() : s.call(t, r, 1),
                --this.size,
                0))
            }
        }
        ,
        104: (e, t, r) => {
            var n = r(3661);
            function s(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t)
                    throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments
                      , s = t ? t.apply(this, n) : n[0]
                      , o = r.cache;
                    if (o.has(s))
                        return o.get(s);
                    var i = e.apply(this, n);
                    return r.cache = o.set(s, i) || o,
                    i
                };
                return r.cache = new (s.Cache || n),
                r
            }
            s.Cache = n,
            e.exports = s
        }
        ,
        124: (e, t, r) => {
            var n = r(9325);
            e.exports = function() {
                return n.Date.now()
            }
        }
        ,
        270: (e, t, r) => {
            var n = r(7068)
              , s = r(346);
            e.exports = function e(t, r, o, i, a) {
                return t === r || (null == t || null == r || !s(t) && !s(r) ? t != t && r != r : n(t, r, o, i, e, a))
            }
        }
        ,
        289: (e, t, r) => {
            var n = r(2651);
            e.exports = function(e) {
                return n(this, e).get(e)
            }
        }
        ,
        294: e => {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        }
        ,
        317: e => {
            e.exports = function(e) {
                var t = -1
                  , r = Array(e.size);
                return e.forEach(function(e, n) {
                    r[++t] = [n, e]
                }),
                r
            }
        }
        ,
        346: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        }
        ,
        361: e => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, r) {
                var n = typeof e;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r
            }
        }
        ,
        392: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        }
        ,
        433: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PAYMENT_PROVIDERS = void 0,
            t.isInGameBannerSize = function(e) {
                return r.some(t => t === e)
            }
            ;
            const r = ["728x90", "300x250", "320x50", "468x60", "320x100"];
            t.PAYMENT_PROVIDERS = ["xsolla"]
        }
        ,
        514: (e, t, r) => {
            var n = r(4932);
            e.exports = function(e, t) {
                return n(t, function(t) {
                    return e[t]
                })
            }
        }
        ,
        583: (e, t, r) => {
            var n = r(7237)
              , s = r(7255)
              , o = r(8586)
              , i = r(7797);
            e.exports = function(e) {
                return o(e) ? n(i(e)) : s(e)
            }
        }
        ,
        631: (e, t, r) => {
            var n = r(8077)
              , s = r(9326);
            e.exports = function(e, t) {
                return null != e && s(e, t, n)
            }
        }
        ,
        659: (e, t, r) => {
            var n = r(1873)
              , s = Object.prototype
              , o = s.hasOwnProperty
              , i = s.toString
              , a = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, a)
                  , r = e[a];
                try {
                    e[a] = void 0;
                    var n = !0
                } catch (e) {}
                var s = i.call(e);
                return n && (t ? e[a] = r : delete e[a]),
                s
            }
        }
        ,
        689: (e, t, r) => {
            var n = r(2)
              , s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, o, i, a) {
                var l = 1 & r
                  , d = n(e)
                  , c = d.length;
                if (c != n(t).length && !l)
                    return !1;
                for (var u = c; u--; ) {
                    var h = d[u];
                    if (!(l ? h in t : s.call(t, h)))
                        return !1
                }
                var g = a.get(e)
                  , p = a.get(t);
                if (g && p)
                    return g == t && p == e;
                var f = !0;
                a.set(e, t),
                a.set(t, e);
                for (var v = l; ++u < c; ) {
                    var y = e[h = d[u]]
                      , m = t[h];
                    if (o)
                        var w = l ? o(m, y, h, t, e, a) : o(y, m, h, e, t, a);
                    if (!(void 0 === w ? y === m || i(y, m, r, o, a) : w)) {
                        f = !1;
                        break
                    }
                    v || (v = "constructor" == h)
                }
                if (f && !v) {
                    var b = e.constructor
                      , _ = t.constructor;
                    b == _ || !("constructor"in e) || !("constructor"in t) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (f = !1)
                }
                return a.delete(e),
                a.delete(t),
                f
            }
        }
        ,
        695: (e, t, r) => {
            var n = r(8096)
              , s = r(2428)
              , o = r(6449)
              , i = r(3656)
              , a = r(361)
              , l = r(7167)
              , d = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = o(e)
                  , c = !r && s(e)
                  , u = !r && !c && i(e)
                  , h = !r && !c && !u && l(e)
                  , g = r || c || u || h
                  , p = g ? n(e.length, String) : []
                  , f = p.length;
                for (var v in e)
                    !t && !d.call(e, v) || g && ("length" == v || u && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || a(v, f)) || p.push(v);
                return p
            }
        }
        ,
        756: (e, t, r) => {
            var n = r(3805);
            e.exports = function(e) {
                return e == e && !n(e)
            }
        }
        ,
        771: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getQueryStringValue = function(e) {
                return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$","i"), "$1"))
            }
            ,
            t.addStyle = function(e) {
                const t = document.createElement("style");
                t.textContent = e,
                document.head.append(t)
            }
            ,
            t.loadScript = function(e) {
                return new Promise( (t, r) => {
                    const s = document.createElement("script");
                    s.onload = () => t(),
                    s.onerror = (e, t, s, o, i) => {
                        try {
                            let a = "";
                            a = "string" == typeof e ? e : `type: ${e.type} - target: ${e.currentTarget}`,
                            r(new Error(`LoadScript error. Event [${a}]- source [${t}] - line/column [${s}/${o}] - error [${(0,
                            n.stringifyError)(i)}]`))
                        } catch (e) {
                            r(e)
                        }
                    }
                    ,
                    s.src = e,
                    s.async = !0,
                    document.head.appendChild(s)
                }
                )
            }
            ,
            t.wrapUserFn = function(e) {
                return t => {
                    try {
                        e(t)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
            ,
            t.isXsollaOrderArgumentValid = function(e) {
                return !("object" != typeof e || null === e || Array.isArray(e))
            }
            ,
            t.sendErrorToGf = function(e, t, r) {
                if (!s.GF_WINDOW)
                    return;
                const n = {
                    type: "sdkError",
                    data: {
                        errorName: e,
                        module: t,
                        specificValues: r || {}
                    }
                };
                s.GF_WINDOW.postMessage(n, "*")
            }
            ;
            const n = r(6100)
              , s = r(2925)
        }
        ,
        776: (e, t, r) => {
            var n = r(756)
              , s = r(5950);
            e.exports = function(e) {
                for (var t = s(e), r = t.length; r--; ) {
                    var o = t[r]
                      , i = e[o];
                    t[r] = [o, i, n(i)]
                }
                return t
            }
        }
        ,
        938: e => {
            e.exports = function(e) {
                var t = this.__data__
                  , r = t.delete(e);
                return this.size = t.size,
                r
            }
        }
        ,
        945: (e, t, r) => {
            var n = r(79)
              , s = r(8223)
              , o = r(3661);
            e.exports = function(e, t) {
                var r = this.__data__;
                if (r instanceof n) {
                    var i = r.__data__;
                    if (!s || i.length < 199)
                        return i.push([e, t]),
                        this.size = ++r.size,
                        this;
                    r = this.__data__ = new o(i)
                }
                return r.set(e, t),
                this.size = r.size,
                this
            }
        }
        ,
        1025: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadGameDataFromLs = g,
            t.loadCachedCloudGameDataFromLs = p,
            t.checkDataLimits = function(e) {
                const t = (new TextEncoder).encode(e);
                if (t.length > s.MAX_DATA_LENGTH)
                    throw (0,
                    i.sendErrorToGf)("size-exceeded", "data", {
                        maxSize: s.MAX_DATA_LENGTH,
                        dataSize: t.length
                    }),
                    new s.DataError("dataLimitExcedeed",`Game data when converted to a JSON string cannot exceed ${s.MAX_DATA_LENGTH} bytes. Data was not saved`);
                t.length > .9 * s.MAX_DATA_LENGTH && h.warn(`You are approaching ${s.MAX_DATA_LENGTH} bytes data limit.`)
            }
            ,
            t.prepareInitialGameData = async function(e, t) {
                return t.isQaTool ? (h.verbose("Running in QA tool, always using local data here"),
                {
                    data: g(t.gameId),
                    handler: "local"
                }) : t.dataModule.isEnabled ? e ? new Promise(e => {
                    let r;
                    const n = async s => {
                        if ("sdkGameDataResponseNew" === s.data.type) {
                            h.verbose("Received game data from GF", s.data),
                            window.removeEventListener("message", n, !1),
                            void 0 !== r && window.clearTimeout(r);
                            const o = s.data.data;
                            if ("loaded" === o.status)
                                o.hasData ? e({
                                    data: o.data,
                                    handler: "cloud"
                                }) : ( () => {
                                    const r = (0,
                                    c.generateLsGameDataKey)(t.gameId);
                                    if (l.SafeLocalStorage.Instance.getItem(r)) {
                                        h.verbose("Cloud data missing but has local data, initialize with local data");
                                        const r = g(t.gameId);
                                        a.GF_WINDOW.postMessage({
                                            type: "saveSdkGameData",
                                            data: {
                                                jsonData: JSON.stringify(r)
                                            }
                                        }, "*"),
                                        e({
                                            data: r,
                                            handler: "cloud"
                                        })
                                    } else
                                        h.verbose("Cloud data and local data missing, initialize with empty data"),
                                        e({
                                            data: {},
                                            handler: "cloud"
                                        })
                                }
                                )();
                            else {
                                h.error("GF failed to load cloud game data, will load cached cloud data."),
                                (0,
                                i.sendErrorToGf)("gf-data-load-fail", "data");
                                const r = p(t.gameId);
                                h.verbose("Loaded cached cloud data, data will not be synced in this session", r),
                                e({
                                    data: r,
                                    handler: "cloud",
                                    doNotSync: !0
                                })
                            }
                        }
                    }
                    ;
                    h.verbose("Requesting game data from GF"),
                    window.addEventListener("message", n, !1),
                    a.GF_WINDOW.postMessage({
                        type: "requestSdkGameDataNew"
                    }, "*"),
                    r = window.setTimeout( () => {
                        h.error(`Did not get game data reply from GF in ${u}ms. Using cached cloud data if present. Disable data sync for this session.`),
                        (0,
                        i.sendErrorToGf)("gf-response-timeout", "data", {
                            timeoutMs: u
                        }),
                        window.removeEventListener("message", n, !1);
                        const r = p(t.gameId);
                        e({
                            data: r,
                            handler: "cloud",
                            doNotSync: !0
                        })
                    }
                    , u)
                }
                ) : (h.verbose("User signed out, loading data from LocalStorage"),
                {
                    data: g(t.gameId),
                    handler: "local"
                }) : {
                    handler: "disabled"
                }
            }
            ;
            const s = r(4915)
              , o = n(r(1916))
              , i = r(771)
              , a = r(2925)
              , l = r(3265)
              , d = r(8457)
              , c = r(7063)
              , u = 1e4
              , h = new o.default("data");
            function g(e) {
                const t = (0,
                c.generateLsGameDataKey)(e);
                try {
                    const e = l.SafeLocalStorage.Instance.getItem(t);
                    return e && JSON.parse(e).data || {}
                } catch (e) {
                    return h.error(`Failed to retrieve local game data (${t}), initializing empty data. Error ${e}`),
                    (0,
                    i.sendErrorToGf)("load-ls-fail", "data"),
                    {}
                }
            }
            function p(e) {
                const t = (0,
                d.generateCloudCacheLsGameDataKey)(e);
                try {
                    const e = l.SafeLocalStorage.Instance.getItem(t);
                    return e && JSON.parse(e).data || {}
                } catch (e) {
                    return h.error(`Failed to retrieve cached cloud game data from localStorage (${t}), initializing empty data. Error ${e}`),
                    (0,
                    i.sendErrorToGf)("load-cached-cloud-fail", "data"),
                    {}
                }
            }
        },
        1042: (e, t, r) => {
            var n = r(6110)(Object, "create");
            e.exports = n
        }
        ,
        1175: (e, t, r) => {
            var n = r(6025);
            e.exports = function(e, t) {
                var r = this.__data__
                  , s = n(r, e);
                return s < 0 ? (++this.size,
                r.push([e, t])) : r[s][1] = t,
                this
            }
        }
        ,
        1366: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.renderFakeBanner = function(e) {
                a.log("Rendering fake banner", e);
                const t = document.getElementById(e.id);
                if (!t)
                    return void console.error(`Didn't find container #${e.id} for rendering fake banner`);
                let r = e.width
                  , n = e.height;
                if (e.isResponsive) {
                    const e = (0,
                    i.default)(d).find(e => r >= e.width && n >= e.height);
                    if (!e)
                        throw new o.BannerError("noAvailableSizes","No available banner size has been found",t.id);
                    r = e.width,
                    n = e.height
                }
                t.innerHTML = "";
                const s = document.createElement("img");
                s.setAttribute("src", `${l}${r}x${n}.png`),
                s.setAttribute("width", `${r}px`),
                s.setAttribute("height", `${n}px`),
                t.appendChild(s),
                t.style.backgroundColor = "rgb(191, 173, 255, 0.25)"
            }
            ;
            const s = n(r(1916))
              , o = r(2637)
              , i = n(r(6049))
              , a = new s.default("banner")
              , l = "https://images.crazygames.com/crazygames-sdk/"
              , d = [{
                width: 970,
                height: 90
            }, {
                width: 320,
                height: 50
            }, {
                width: 160,
                height: 600
            }, {
                width: 336,
                height: 280
            }, {
                width: 728,
                height: 90
            }, {
                width: 300,
                height: 600
            }, {
                width: 468,
                height: 60
            }, {
                width: 970,
                height: 250
            }, {
                width: 300,
                height: 250
            }, {
                width: 250,
                height: 250
            }, {
                width: 120,
                height: 600
            }]
        },
        1380: e => {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"),
                this
            }
        }
        ,
        1420: (e, t, r) => {
            var n = r(79);
            e.exports = function() {
                this.__data__ = new n,
                this.size = 0
            }
        }
        ,
        1459: e => {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        }
        ,
        1549: (e, t, r) => {
            var n = r(2032)
              , s = r(3862)
              , o = r(6721)
              , i = r(2749)
              , a = r(5749);
            function l(e) {
                var t = -1
                  , r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            l.prototype.clear = n,
            l.prototype.delete = s,
            l.prototype.get = o,
            l.prototype.has = i,
            l.prototype.set = a,
            e.exports = l
        }
        ,
        1769: (e, t, r) => {
            var n = r(6449)
              , s = r(8586)
              , o = r(1802)
              , i = r(3222);
            e.exports = function(e, t) {
                return n(e) ? e : s(e, t) ? [e] : o(i(e))
            }
        }
        ,
        1799: (e, t, r) => {
            var n = r(7217)
              , s = r(270);
            e.exports = function(e, t, r, o) {
                var i = r.length
                  , a = i
                  , l = !o;
                if (null == e)
                    return !a;
                for (e = Object(e); i--; ) {
                    var d = r[i];
                    if (l && d[2] ? d[1] !== e[d[0]] : !(d[0]in e))
                        return !1
                }
                for (; ++i < a; ) {
                    var c = (d = r[i])[0]
                      , u = e[c]
                      , h = d[1];
                    if (l && d[2]) {
                        if (void 0 === u && !(c in e))
                            return !1
                    } else {
                        var g = new n;
                        if (o)
                            var p = o(u, h, c, e, t, g);
                        if (!(void 0 === p ? s(h, u, 3, o, g) : p))
                            return !1
                    }
                }
                return !0
            }
        }
        ,
        1800: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)); )
                    ;
                return r
            }
        }
        ,
        1802: (e, t, r) => {
            var n = r(2224)
              , s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
              , o = /\\(\\)?/g
              , i = n(function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""),
                e.replace(s, function(e, r, n, s) {
                    t.push(n ? s.replace(o, "$1") : r || e)
                }),
                t
            });
            e.exports = i
        }
        ,
        1833: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GeneralError = t.INIT_STATE = t.SDKError = t.DOCS_URL = void 0,
            t.DOCS_URL = "docs.crazygames.com";
            class r extends Error {
            }
            var n;
            t.SDKError = r,
            function(e) {
                e[e.UNINITIALIZED = 0] = "UNINITIALIZED",
                e[e.REQUESTED = 1] = "REQUESTED",
                e[e.INITIALIZED = 2] = "INITIALIZED"
            }(n || (t.INIT_STATE = n = {})),
            t.GeneralError = class {
                constructor(e, t) {
                    this.code = e,
                    this.message = t
                }
            }
        }
        ,
        1873: (e, t, r) => {
            var n = r(9325).Symbol;
            e.exports = n
        }
        ,
        1882: (e, t, r) => {
            var n = r(2552)
              , s = r(3805);
            e.exports = function(e) {
                if (!s(e))
                    return !1;
                var t = n(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        }
        ,
        1916: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MAIN_BADGE = void 0;
            const r = "border-radius: 3px; padding: 0px 4px; color: white;";
            t.MAIN_BADGE = ["%cHTML5 SDK", `background-color: #6842FF; ${r}`];
            class n {
                constructor(e) {
                    this.badge = e,
                    this.debugFlagPresent = window.location.href.includes("sdk_debug=true")
                }
                isEnabled() {
                    return this.debugFlagPresent || n.forceEnable
                }
                log(e, ...n) {
                    if (!this.isEnabled())
                        return;
                    if ("none" === this.badge)
                        return console.log(...t.MAIN_BADGE, e, ...n.length > 0 ? n : []);
                    let s = [];
                    switch (this.badge) {
                    case "game":
                        s = ["%cGAME", `background-color: #d48f06; ${r}`];
                        break;
                    case "user":
                        s = ["%cUSER", `background-color: #3498DB; ${r}`];
                        break;
                    case "ad":
                        s = ["%cAD", `background-color: #008A00; ${r}`];
                        break;
                    case "banner":
                        s = ["%cBANNER", `background-color: #00ABA9; ${r}`];
                        break;
                    case "data":
                        s = ["%cDATA", `background-color: #A21CAF; ${r}`];
                        break;
                    case "analytics":
                        s = ["%cANALYTICS", `background-color: #5c5c5c; ${r}`]
                    }
                    console.log(`${t.MAIN_BADGE[0]}%c ${s[0]}`, t.MAIN_BADGE[1], "", s[1], e, ...n.length > 0 ? n : [])
                }
                verbose(e, ...r) {
                    this.isEnabled() && console.debug(`${t.MAIN_BADGE[0]}%c %c${e}`, t.MAIN_BADGE[1], "", "color: #3d7fff", ...r.length > 0 ? r : [])
                }
                warn(e, ...r) {
                    this.isEnabled() && console.warn(...t.MAIN_BADGE, e, ...r.length > 0 ? r : [])
                }
                error(e, ...r) {
                    console.error(...t.MAIN_BADGE, e, ...r.length > 0 ? r : [])
                }
            }
            n.forceEnable = !1,
            t.default = n
        }
        ,
        1924: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(4080)
              , i = r(2529)
              , a = r(2896);
            t.default = class {
                constructor(e, t, r, n) {
                    this.sdk = e,
                    this._systemInfo = t,
                    this._userAccountAvailable = r,
                    this.user = null,
                    this.authDeferredPromise = null,
                    this.accountLinkDeferredPromise = null,
                    this.authListeners = [],
                    this.userTokenResolvers = [],
                    this.userTokenRequestInProgress = !1,
                    this.xsollaUserTokenRequestInProgress = !1,
                    this.xsollaUserTokenResolvers = [],
                    this.logger = new s.default("user"),
                    this.user = n
                }
                get isUserAccountAvailable() {
                    return this.sdk.postMessage({
                        type: "isUserAccountAvailable"
                    }),
                    !!this._userAccountAvailable
                }
                get systemInfo() {
                    return this.sdk.postMessage({
                        type: "getSystemInfo"
                    }),
                    this._systemInfo
                }
                async showAuthPrompt() {
                    if (this.logger.log("Requesting auth prompt"),
                    this.authDeferredPromise)
                        throw new o.UserError("showAuthPromptInProgress","The auth prompt is already opened");
                    if (this.user)
                        throw new o.UserError("userAlreadySignedIn","The user is already signed in");
                    return new Promise( (e, t) => {
                        this.authDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "showAuthPrompt"
                        })
                    }
                    )
                }
                handleAuthPromptResponse(e) {
                    this.logger.log("Received auth prompt response", e);
                    const {error: t, user: r} = e;
                    t ? this.authDeferredPromise && this.authDeferredPromise.reject(new o.UserError(t.code,t.message)) : (this.user = null != r ? r : null,
                    this.authDeferredPromise && this.authDeferredPromise.resolve(this.user)),
                    this.authDeferredPromise = null
                }
                async showAccountLinkPrompt() {
                    if (this.logger.log("Requesting link account prompt"),
                    this.accountLinkDeferredPromise)
                        throw new o.UserError("showAccountLinkPromptInProgress","The account link prompt is already displayed");
                    if (!this.user)
                        throw new o.UserError("userNotAuthenticated","The user is not signed in");
                    return new Promise(async (e, t) => {
                        this.accountLinkDeferredPromise = {
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "showAccountLinkPrompt"
                        })
                    }
                    )
                }
                handleAccountLinkPromptResponse(e) {
                    this.logger.log("Received account link prompt response", e);
                    const {response: t} = e.data;
                    this.accountLinkDeferredPromise && this.accountLinkDeferredPromise.resolve({
                        response: t
                    }),
                    this.accountLinkDeferredPromise = null
                }
                async getUser() {
                    return this.logger.log("Requesting user object"),
                    this.sdk.postMessage({
                        type: "getUser"
                    }),
                    this.user
                }
                async getUserToken() {
                    this.logger.log("Requesting user token"),
                    this.tokenExpiresAtMs && this.tokenExpiresAtMs < Date.now() && (this.logger.log("User token expired, clean it so it is requested again"),
                    this.userToken = null,
                    this.tokenExpiresAtMs = null),
                    this.tokenExpiresAtMs && !this.userTokenRequestInProgress && this.tokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("User token expires soon, request new one in background"),
                    this.requestNewUserToken());
                    let e = this.userToken;
                    if ((0,
                    a.isDefined)(e) && (0,
                    i.isJsSdkRequestUserTokenSuccessResponse)(e))
                        return this.logger.log("Returning cached user token"),
                        e.token;
                    if (this.userTokenRequestInProgress ? this.logger.log("User token request to portal in progress") : (this.logger.log("No user token present in the SDK, request one"),
                    this.requestNewUserToken()),
                    await new Promise(e => {
                        this.userTokenResolvers.push(async () => {
                            e()
                        }
                        )
                    }
                    ),
                    e = this.userToken,
                    !(0,
                    a.isDefined)(e))
                        throw this.logger.error("User token missing after portal request finished"),
                        new o.UserError("unexpectedError","User token missing after portal request finished");
                    if ((0,
                    i.isJsSdkRequestUserTokenErrorResponse)(e))
                        throw new o.UserError(e.error.code,e.error.message);
                    if (!e.token)
                        throw this.logger.error("User token missing, even though there isn't any error"),
                        new o.UserError("unexpectedError","User token missing, even though there isn't any error");
                    return e.token
                }
                handleUserTokenResponse(e) {
                    this.logger.log("Received token response from portal", e),
                    this.userToken = e,
                    this.userTokenRequestInProgress = !1,
                    (0,
                    i.isJsSdkRequestUserTokenSuccessResponse)(e) && (this.tokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.userTokenResolvers.forEach(e => e()),
                    this.userTokenResolvers = []
                }
                requestNewUserToken() {
                    this.logger.log("Requesting user token from portal"),
                    this.sdk.postMessage({
                        type: "requestUserToken"
                    }),
                    this.userTokenRequestInProgress = !0
                }
                async getXsollaUserToken() {
                    this.logger.log("Requesting Xsolla user token"),
                    this.xsollaUserTokenExpiresAtMs && this.xsollaUserTokenExpiresAtMs < Date.now() && (this.logger.log("Xsolla user token expired, clean it so it is requested again"),
                    this.xsollaUserToken = null,
                    this.xsollaUserTokenExpiresAtMs = null),
                    this.xsollaUserTokenExpiresAtMs && !this.xsollaUserTokenRequestInProgress && this.xsollaUserTokenExpiresAtMs - 3e4 < Date.now() && (this.logger.log("Xsolla user token expires soon, request new one in background"),
                    this.requestNewXsollaUserToken());
                    let e = this.xsollaUserToken;
                    if ((0,
                    a.isDefined)(e) && (0,
                    i.isJsSdkRequestXsollaUserTokenSuccessResponse)(e))
                        return this.logger.log("Returning cached Xsolla user token"),
                        e.token;
                    if (this.xsollaUserTokenRequestInProgress ? this.logger.log("Xsolla user token request to portal in progress") : (this.logger.log("No Xsolla user token present in the SDK, request one"),
                    this.requestNewXsollaUserToken()),
                    await new Promise(e => {
                        this.xsollaUserTokenResolvers.push(async () => {
                            e()
                        }
                        )
                    }
                    ),
                    e = this.xsollaUserToken,
                    !(0,
                    a.isDefined)(e))
                        throw this.logger.error("Xsolla user token response missing after portal request finished"),
                        new o.UserError("unexpectedError","Xsolla user token missing after portal request finished");
                    if ((0,
                    i.isJsSdkRequestXsollaUserTokenErrorResponse)(e))
                        throw new o.UserError(e.error.code,e.error.message);
                    if (!e.token)
                        throw this.logger.error("Xsolla user token missing, even though there isn't any error"),
                        new o.UserError("unexpectedError","Xsolla user token missing, even though there isn't any error");
                    return e.token
                }
                handleXsollaUserTokenResponse(e) {
                    this.logger.log("Received Xsolla user token response from portal", e),
                    this.xsollaUserToken = e,
                    this.xsollaUserTokenRequestInProgress = !1,
                    (0,
                    i.isJsSdkRequestXsollaUserTokenSuccessResponse)(e) && (this.xsollaUserTokenExpiresAtMs = Date.now() + 1e3 * e.expiresIn),
                    this.xsollaUserTokenResolvers.forEach(e => e()),
                    this.xsollaUserTokenResolvers = []
                }
                requestNewXsollaUserToken() {
                    this.logger.log("Requesting Xsolla user token from portal"),
                    this.sdk.postMessage({
                        type: "requestXsollaUserToken"
                    }),
                    this.xsollaUserTokenRequestInProgress = !0
                }
                addScore(e) {
                    this.logger.warn("addScore is no longer supported.")
                }
                addScoreEncrypted(e, t) {
                    this.logger.warn("addScoreEncrypted is no longer supported.")
                }
                submitScore(e) {
                    this.logger.log("Submitting score.", e.encryptedScore),
                    this.sdk.postMessage({
                        type: "submitScore",
                        data: {
                            encryptedScore: e.encryptedScore,
                            requestId: this.generateRequestId()
                        }
                    })
                }
                generateRequestId() {
                    return "undefined" != typeof crypto && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2)
                }
                handleEvent(e) {
                    switch (e.type) {
                    case "showAuthPromptResponse":
                        this.handleAuthPromptResponse(e);
                        break;
                    case "linkAccountResponse":
                        this.handleAccountLinkPromptResponse(e);
                        break;
                    case "userLoggedIn":
                        this.handleUserLoggedIn(e);
                        break;
                    case "requestUserTokenResponse":
                        this.handleUserTokenResponse(e);
                        break;
                    case "requestXsollaUserTokenResponse":
                        this.handleXsollaUserTokenResponse(e)
                    }
                }
                addAuthListener(e) {
                    this.sdk.postMessage({
                        type: "addAuthListener"
                    }),
                    this.authListeners.push(e)
                }
                removeAuthListener(e) {
                    this.sdk.postMessage({
                        type: "removeAuthListener"
                    }),
                    this.authListeners = this.authListeners.filter(t => t !== e)
                }
                handleUserLoggedIn(e) {
                    var t;
                    this.user = null !== (t = e.data.user) && void 0 !== t ? t : null,
                    this.callAuthChangeListeners()
                }
                callAuthChangeListeners() {
                    this.authListeners.forEach(e => this.callAuthChangeListener(e))
                }
                callAuthChangeListener(e) {
                    try {
                        e(this.user)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        },
        1930: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.InnerIdToContainerId = t.ContainerIdToInnerId = void 0,
            t.getBannerContainer = async function(e, r) {
                var o;
                if (!e)
                    throw new n.BannerError("missingId","Container id not specified",e);
                const i = await (0,
                s.getContainerInfo)(e)
                  , {visibleState: a} = i;
                if (r) {
                    if ("notCreated" === a)
                        throw new n.BannerError("notCreated","Container is not present on the page",e);
                    if ("notVisible" === a)
                        throw new n.BannerError("notVisible","Container is not entirely visible on the page",e)
                }
                const l = (0,
                t.ContainerIdToInnerId)(e);
                if (!document.getElementById(l)) {
                    const t = document.createElement("div");
                    t.id = l,
                    t.classList.add("crazygames-banner-container"),
                    null === (o = document.getElementById(e)) || void 0 === o || o.append(t)
                }
                return {
                    mainContainerId: e,
                    innerContainerId: l,
                    containerInfo: i
                }
            }
            ,
            t.getBannerSizeAsText = function(e) {
                return `${e.width}x${e.height}`
            }
            ;
            const n = r(2637)
              , s = r(2825);
            t.ContainerIdToInnerId = e => `${e}-crazygames-inner`,
            t.InnerIdToContainerId = e => `${e}`.replace("-crazygames-inner", "")
        }
        ,
        1945: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1833);
            t.default = class {
                constructor() {
                    this.message = `CrazySDK is disabled on this domain. Check ${n.DOCS_URL} for more info.`,
                    this.code = "sdkDisabled"
                }
                get ad() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get banner() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get game() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get user() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get data() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get analytics() {
                    throw new n.GeneralError(this.code,this.message)
                }
                get environment() {
                    return "disabled"
                }
                get isQaTool() {
                    return !1
                }
            }
        }
        ,
        1984: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(8629)
              , s = "https://cza.crazygames.com/event";
            class o {
                constructor() {
                    this.eventQueue = [],
                    this.initTimedOut = !1
                }
                static getInstance() {
                    return o.instance || (o.instance = new o),
                    o.instance
                }
                init(e, t) {
                    this.initInfo = t,
                    this.sdk = e,
                    this.sdk.postMessage({
                        type: "requestAnalyticsInfoFromSDK"
                    }),
                    this.initTimeoutId = window.setTimeout( () => {
                        this.instanceId || (this.initTimedOut = !0,
                        this.eventQueue = [])
                    }
                    , 1e4)
                }
                sendDebugEvent(e, t, r) {
                    if (this.initTimedOut)
                        return;
                    const n = {
                        type: "debug",
                        name: e,
                        data: JSON.stringify(t)
                    };
                    this.sendEvent(n, r)
                }
                handleEvent(e) {
                    "analyticsInfoResponseFromGF" === e.type && (this.initTimeoutId && window.clearTimeout(this.initTimeoutId),
                    this.instanceId = e.instanceId,
                    this.eventQueue.forEach(e => this.sendEvent(e.event, e.filter)),
                    this.eventQueue = [])
                }
                sendEvent(e, t) {
                    this.initInfo ? this.safeIdleCallback( () => {
                        var r, s;
                        if (this.initInfo.isQaTool)
                            return;
                        if (t && !t(this.initInfo))
                            return;
                        const o = {
                            ...e,
                            time: Date.now(),
                            version: "3.6.0",
                            source: "sdk",
                            type: "debug",
                            sampling: 1,
                            userId: "",
                            page: "",
                            instanceId: this.instanceId,
                            gameId: null === (r = this.initInfo) || void 0 === r ? void 0 : r.gameId,
                            buildId: null === (s = this.initInfo) || void 0 === s ? void 0 : s.buildId
                        }
                          , i = (0,
                        n.ch)(o);
                        o.__i = i,
                        this.sendData(o)
                    }
                    ) : this.eventQueue.push({
                        event: e,
                        filter: t
                    })
                }
                async sendData(e) {
                    const t = e
                      , r = async () => {
                        await window.fetch(s, {
                            method: "post",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "text/plain"
                            }
                        })
                    }
                    ;
                    if (window.navigator) {
                        const e = {
                            type: "text/plain"
                        }
                          , n = new Blob([JSON.stringify(t)],e);
                        if (window.navigator.sendBeacon(s, n))
                            return Promise.resolve();
                        await r()
                    } else
                        await r()
                }
                safeIdleCallback(e) {
                    window.requestIdleCallback ? window.requestIdleCallback(e, {
                        timeout: 2e3
                    }) : window.setTimeout(e, 0)
                }
            }
            t.default = o
        }
        ,
        1986: (e, t, r) => {
            var n = r(1873)
              , s = r(7828)
              , o = r(5288)
              , i = r(5911)
              , a = r(317)
              , l = r(4247)
              , d = n ? n.prototype : void 0
              , c = d ? d.valueOf : void 0;
            e.exports = function(e, t, r, n, d, u, h) {
                switch (r) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                        return !1;
                    e = e.buffer,
                    t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !u(new s(e), new s(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return o(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var g = a;
                case "[object Set]":
                    var p = 1 & n;
                    if (g || (g = l),
                    e.size != t.size && !p)
                        return !1;
                    var f = h.get(e);
                    if (f)
                        return f == t;
                    n |= 2,
                    h.set(e, t);
                    var v = i(g(e), g(t), n, d, u, h);
                    return h.delete(e),
                    v;
                case "[object Symbol]":
                    if (c)
                        return c.call(e) == c.call(t)
                }
                return !1
            }
        }
        ,
        2032: (e, t, r) => {
            var n = r(1042);
            e.exports = function() {
                this.__data__ = n ? n(null) : {},
                this.size = 0
            }
        }
        ,
        2091: function(e, t, r) {
            "use strict";
            var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var s = Object.getOwnPropertyDescriptor(t, r);
                s && !("get"in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }),
                Object.defineProperty(e, n, s)
            }
            : function(e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            }
            ), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            ), i = this && this.__importStar || (n = function(e) {
                return n = Object.getOwnPropertyNames || function(e) {
                    var t = [];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t
                }
                ,
                n(e)
            }
            ,
            function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r = n(e), i = 0; i < r.length; i++)
                        "default" !== r[i] && s(t, e, r[i]);
                return o(t, e),
                t
            }
            ), a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const l = r(6100)
              , d = r(7067)
              , c = r(1833)
              , u = i(r(1916))
              , h = r(1025)
              , g = r(771)
              , p = r(2925)
              , f = r(5672)
              , v = a(r(5691))
              , y = a(r(1945))
              , m = a(r(8591))
              , w = a(r(2351))
              , b = r(7643);
            t.default = class {
                constructor() {
                    this.logger = new u.default("none"),
                    this.sdk = new w.default
                }
                async init(e) {
                    return this.initializingPromise || (this.initializingPromise = new Promise(async (t, r) => {
                        if (this.logger.log("Request init, options: ", e),
                        (0,
                        p.shouldInitLocalMode)())
                            u.default.forceEnable = !0,
                            this.sdk = new m.default,
                            await (0,
                            b.wait)(200);
                        else if ((await (0,
                        p.checkIsCrazyGames)()).isOnCrazyGames) {
                            if (!p.GF_WINDOW)
                                return r(new c.GeneralError("unexpectedError","Missing GF_WINDOW, even though running on CrazyGames"));
                            const [t,n] = await Promise.all([(0,
                            p.initSdk)(e), (0,
                            p.fetchSdkUser)()]);
                            if (null === t)
                                throw new c.GeneralError("initFailed","The SDK failed to initialize");
                            this.logger.log("Init response received from GF", t);
                            const s = await (0,
                            h.prepareInitialGameData)(n, t);
                            this.sdk = new v.default(t,s,n);
                            try {
                                await (0,
                                d.loadAdsIfNeeded)(t.rafvertizingUrl, this.sdk, t.clientInfo)
                            } catch (e) {
                                (0,
                                g.sendErrorToGf)("ads-script-load-fail", "ad", {
                                    error: (0,
                                    l.stringifyError)(e)
                                }),
                                this.logger.error("Failed to load ads", e)
                            }
                        } else
                            this.sdk = new y.default;
                        console.log(...u.MAIN_BADGE, "CrazyGames HTML SDK initialized", {
                            version: f.SDK_VERSION,
                            environment: this.sdk.environment,
                            initOptions: e
                        }),
                        t()
                    }
                    )),
                    this.initializingPromise
                }
                get ad() {
                    return this.sdk.ad
                }
                get banner() {
                    return this.sdk.banner
                }
                get game() {
                    return this.sdk.game
                }
                get user() {
                    return this.sdk.user
                }
                get data() {
                    return this.sdk.data
                }
                get analytics() {
                    return this.sdk.analytics
                }
                get environment() {
                    return this.sdk.environment
                }
                get isQaTool() {
                    return this.sdk.isQaTool
                }
            }
        },
        2199: (e, t, r) => {
            var n = r(4528)
              , s = r(6449);
            e.exports = function(e, t, r) {
                var o = t(e);
                return s(e) ? o : n(o, r(e))
            }
        }
        ,
        2224: (e, t, r) => {
            var n = r(104);
            e.exports = function(e) {
                var t = n(e, function(e) {
                    return 500 === r.size && r.clear(),
                    e
                })
                  , r = t.cache;
                return t
            }
        }
        ,
        2351: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(1833)
              , o = n(r(1916));
            t.default = class {
                constructor() {
                    this.logger = new o.default("none"),
                    this.code = "sdkNotInitialized",
                    this.message = `CrazySDK is not initialized yet. Check ${s.DOCS_URL} for more info.`
                }
                get ad() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get banner() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get game() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get user() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get data() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get analytics() {
                    throw console.error(this.message),
                    new s.GeneralError(this.code,this.message)
                }
                get environment() {
                    return "uninitialized"
                }
                get isQaTool() {
                    return !1
                }
            }
        },
        2428: (e, t, r) => {
            var n = r(7534)
              , s = r(346)
              , o = Object.prototype
              , i = o.hasOwnProperty
              , a = o.propertyIsEnumerable
              , l = n(function() {
                return arguments
            }()) ? n : function(e) {
                return s(e) && i.call(e, "callee") && !a.call(e, "callee")
            }
            ;
            e.exports = l
        }
        ,
        2523: e => {
            e.exports = function(e, t, r, n) {
                for (var s = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < s; )
                    if (t(e[o], o, e))
                        return o;
                return -1
            }
        }
        ,
        2529: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isJsSdkRequestUserTokenSuccessResponse = function(e) {
                return Object.hasOwn(e, "token")
            }
            ,
            t.isJsSdkRequestUserTokenErrorResponse = function(e) {
                return Object.hasOwn(e, "error")
            }
            ,
            t.isJsSdkRequestXsollaUserTokenSuccessResponse = function(e) {
                return Object.hasOwn(e, "token")
            }
            ,
            t.isJsSdkRequestXsollaUserTokenErrorResponse = function(e) {
                return Object.hasOwn(e, "error")
            }
        }
        ,
        2552: (e, t, r) => {
            var n = r(1873)
              , s = r(659)
              , o = r(9350)
              , i = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? s(e) : o(e)
            }
        }
        ,
        2599: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(1025)
              , i = r(7063);
            t.default = class {
                constructor(e) {
                    this.logger = new s.default("data");
                    const t = (0,
                    o.loadGameDataFromLs)(e.game.id);
                    this.localDataHandler = new i.LocalDataHandler(t,e.game.id)
                }
                clear() {
                    this.logger.log("Clear data"),
                    this.localDataHandler.clear()
                }
                getItem(e) {
                    const t = this.localDataHandler.getItem(e);
                    return this.logger.log(`Get "${e}", returning ${t}`),
                    t
                }
                removeItem(e) {
                    this.logger.log(`Remove "${e}"`),
                    this.localDataHandler.removeItem(e)
                }
                setItem(e, t) {
                    this.logger.log(`Set "${e}" = ${t}`),
                    this.localDataHandler.setItem(e, t)
                }
                syncUnityGameData() {
                    this.logger.log("Requesting to sync unity PlayerPrefs (local)")
                }
            }
        },
        2637: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.BannerError = void 0,
            t.isInGameBannerSize = o,
            t.matchesInGameBannerSize = function(e, t) {
                return o(`${e}x${t}`)
            }
            ;
            const n = r(1833)
              , s = r(433);
            function o(e) {
                return (0,
                s.isInGameBannerSize)(e)
            }
            class i extends n.GeneralError {
                constructor(e, t, r) {
                    super(e, t),
                    this.code = e,
                    this.message = t,
                    this.containerId = r
                }
            }
            t.BannerError = i
        }
        ,
        2651: (e, t, r) => {
            var n = r(4218);
            e.exports = function(e, t) {
                var r = e.__data__;
                return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }
        }
        ,
        2742: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.AnalyticsError = t.PAYMENT_PROVIDERS = void 0;
            const n = r(1833)
              , s = r(433);
            t.PAYMENT_PROVIDERS = s.PAYMENT_PROVIDERS;
            class o extends n.GeneralError {
                constructor(e, t) {
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.AnalyticsError = o
        }
        ,
        2749: (e, t, r) => {
            var n = r(1042)
              , s = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return n ? void 0 !== t[e] : s.call(t, e)
            }
        }
        ,
        2804: (e, t, r) => {
            var n = r(6110)(r(9325), "Promise");
            e.exports = n
        }
        ,
        2825: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getContainerInfo = async function(e) {
                const t = document.getElementById(e);
                return t ? async function(e) {
                    return new Promise(t => {
                        const n = new IntersectionObserver( ([s]) => {
                            const o = window.getComputedStyle(e)
                              , i = s.intersectionRatio > r;
                            t({
                                visibleState: i ? "visible" : "notVisible",
                                size: {
                                    width: Math.ceil("auto" !== o.width ? parseFloat(o.width) : s.boundingClientRect.width),
                                    height: Math.ceil("auto" !== o.height ? parseFloat(o.height) : s.boundingClientRect.height)
                                }
                            }),
                            n.disconnect()
                        }
                        );
                        n.observe(e)
                    }
                    )
                }(t) : {
                    visibleState: "notCreated",
                    size: {
                        width: 0,
                        height: 0
                    }
                }
            }
            ;
            const r = .95
        }
        ,
        2896: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isDefined = function(e) {
                return null != e
            }
            ,
            t.nonEmptyString = function(e) {
                return !!e && "" !== e.trim()
            }
            ,
            t.isEmptyString = function(e) {
                return null == e || "" === e.trim()
            }
        }
        ,
        2925: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GF_WINDOW = void 0,
            t.initSdk = function(e) {
                return new Promise(r => {
                    const n = window.setTimeout( () => {
                        window.removeEventListener("message", s, !1),
                        (0,
                        a.sendErrorToGf)("gf-init-response-timeout", null, {
                            timeoutMs: u
                        }),
                        c.error(`Gf Init response timeout ${u}ms`),
                        r(null)
                    }
                    , u)
                      , s = async e => {
                        if ("initialized" === e.data.type) {
                            c.verbose("Received init from GF", e.data),
                            window.clearTimeout(n),
                            window.removeEventListener("message", s, !1);
                            const t = e.data.data;
                            r(t)
                        }
                    }
                    ;
                    window.addEventListener("message", s, !1),
                    t.GF_WINDOW.postMessage({
                        type: "init-js-sdk",
                        data: {
                            version: o.SDK_VERSION,
                            sdkType: "js",
                            ...e
                        }
                    }, "*")
                }
                )
            }
            ,
            t.fetchSdkUser = function() {
                return new Promise(e => {
                    const t = window.setTimeout( () => {
                        window.removeEventListener("message", r, !1),
                        (0,
                        a.sendErrorToGf)("gf-user-response-timeout", null, {
                            timeoutMs: h
                        }),
                        c.error(`Gf user response timeout ${h}ms, continuing with "null" (signed out) user`),
                        e(null)
                    }
                    , h)
                      , r = async n => {
                        var o;
                        if (!(0,
                        s.isGfToSdkEvent)(n.data))
                            return;
                        const i = n.data;
                        if ("initialUserSet" === i.type) {
                            d.verbose("Received initial user from GF", i),
                            window.clearTimeout(t),
                            window.removeEventListener("message", r, !1);
                            const n = null !== (o = i.data.user) && void 0 !== o ? o : null;
                            e(n)
                        }
                    }
                    ;
                    window.addEventListener("message", r, !1)
                }
                )
            }
            ,
            t.shouldInitLocalMode = function() {
                const qaOverride = localStorage.getItem("QaModeOveride");
                if (qaOverride === "true") return true;
                if (qaOverride === "false") return false;

                return [
                    "localhost",
                    "127.0.0.1",
                    "preview.construct.net",
                    "2hac.github.io"
                ].includes(window.location.hostname) ||
                    (0, a.getQueryStringValue)("useLocalSdk") === "true";
            }
            ,
            t.checkIsCrazyGames = async function() {
                let e, r = !1;
                const n = new Promise(t => {
                    e = t
                }
                )
                  , s = n => {
                    var s;
                    "crazyGamesGFConfirmation" === (null === (s = null == n ? void 0 : n.data) || void 0 === s ? void 0 : s.type) && (t.GF_WINDOW = n.source,
                    r = !0,
                    e())
                }
                  , o = new Promise(async e => {
                    await (0,
                    l.wait)(g),
                    e()
                }
                );
                window.addEventListener("message", s, !1);
                const i = {
                    type: "checkCrazyGamesGF"
                };
                return window.postMessage(i, "*"),
                window.parent.postMessage(i, "*"),
                window.parent.parent.postMessage(i, "*"),
                window.parent.parent.parent.postMessage(i, "*"),
                await Promise.race([n, o]),
                window.removeEventListener("message", s),
                {
                    isOnCrazyGames: r
                }
            }
            ;
            const s = r(4220)
              , o = r(5672)
              , i = n(r(1916))
              , a = r(771)
              , l = r(7643)
              , d = new i.default("user")
              , c = new i.default("none");
            t.GF_WINDOW = null;
            const u = 5e3
              , h = 5e3
              , g = 7e3
        },
        2949: (e, t, r) => {
            var n = r(2651);
            e.exports = function(e, t) {
                var r = n(this, e)
                  , s = r.size;
                return r.set(e, t),
                this.size += r.size == s ? 0 : 1,
                this
            }
        }
        ,
        3007: e => {
            e.exports = function(e, t) {
                var r = -1
                  , n = e.length;
                for (t || (t = Array(n)); ++r < n; )
                    t[r] = e[r];
                return t
            }
        }
        ,
        3012: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.throttledMethod = void 0;
            const s = new (n(r(1916)).default)("none");
            t.throttledMethod = (e, t, r) => {
                let n = 0;
                return (...o) => {
                    const i = (new Date).getTime();
                    return i - n > t ? (n = i,
                    e(...o)) : void (r && s.error(`${r}() call throttled, delay ${t}`))
                }
            }
        },
        3040: (e, t, r) => {
            var n = r(1549)
              , s = r(79)
              , o = r(8223);
            e.exports = function() {
                this.size = 0,
                this.__data__ = {
                    hash: new n,
                    map: new (o || s),
                    string: new n
                }
            }
        }
        ,
        3195: e => {
            var t = Math.floor
              , r = Math.random;
            e.exports = function(e, n) {
                return e + t(r() * (n - e + 1))
            }
        }
        ,
        3201: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.MISSING_APPLICATION_TYPE_ERROR = t.NO_BANNERS_ON_APP = void 0;
            const s = r(9491)
              , o = r(1366)
              , i = n(r(1916))
              , a = r(1930)
              , l = r(2637)
              , d = r(5366)
              , c = r(3710);
            t.NO_BANNERS_ON_APP = "Banner Ads are disabled on the mobile apps",
            t.MISSING_APPLICATION_TYPE_ERROR = "Application type is not available in systemInfo",
            t.default = class {
                constructor(e, t) {
                    this.sdk = e,
                    this.initInfo = t,
                    this.bannerQueue = {},
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new i.default("banner"),
                    this.useTestAds = t.useTestAds || !1,
                    this.disableBannerCheck = t.disableBannerCheck || !1
                }
                checkBannerAdsEnabled() {
                    if ("basic" === this.initInfo.launchFlow)
                        throw new c.AdError("other",d.BASIC_LAUNCH_AD_DISABLED_ERROR);
                    if (!this.initInfo.systemInfo.applicationType)
                        throw new c.AdError("other",t.MISSING_APPLICATION_TYPE_ERROR);
                    if (function(e) {
                        switch (e) {
                        case "pwa":
                        case "web":
                            return !1;
                        case "apple_store":
                        case "google_play_store":
                            return !0
                        }
                    }(this.initInfo.systemInfo.applicationType))
                        throw new c.AdError("other",t.NO_BANNERS_ON_APP)
                }
                isBannerAdsEnabled() {
                    try {
                        return this.checkBannerAdsEnabled(),
                        !0
                    } catch {
                        return !1
                    }
                }
                async requestBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log("Requesting banner with automatic rendering", e),
                    this.ensureVideoAdNotPlaying(e.id);
                    const t = await this.prefetchBanner(e);
                    return this.renderPrefetchedBanner(t)
                }
                async requestResponsiveBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log(`Requesting responsive banner with automatic rendering #${e}`),
                    this.ensureVideoAdNotPlaying(e);
                    const t = await (0,
                    a.getBannerContainer)(e, !this.disableBannerCheck)
                      , {width: r, height: n} = t.containerInfo.size
                      , s = await this.prefetchResponsiveBanner({
                        id: e,
                        width: r,
                        height: n
                    });
                    return this.renderPrefetchedBanner(s)
                }
                async prefetchBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log("Prefetch banner", e);
                    const t = (0,
                    a.ContainerIdToInnerId)(e.id)
                      , r = {
                        ...e,
                        id: t
                    };
                    return new Promise( (e, t) => {
                        this.bannerQueue[r.id] = {
                            banner: r,
                            resolve: e,
                            reject: t
                        },
                        this.sdk.postMessage({
                            type: "requestBanner",
                            data: [{
                                containerId: r.id,
                                size: (0,
                                a.getBannerSizeAsText)(r)
                            }]
                        })
                    }
                    )
                }
                async prefetchResponsiveBanner(e) {
                    this.checkBannerAdsEnabled(),
                    this.logger.log(`Prefetch responsive banner #${e.id}`);
                    const {width: t, height: r} = e
                      , n = {
                        id: (0,
                        a.ContainerIdToInnerId)(e.id),
                        width: t,
                        height: r,
                        isResponsive: !0
                    };
                    return new Promise( (e, s) => {
                        this.bannerQueue[n.id] = {
                            banner: n,
                            resolve: e,
                            reject: s
                        },
                        this.sdk.postMessage({
                            type: "requestResponsiveBanner",
                            data: [{
                                id: n.id,
                                width: t,
                                height: r
                            }]
                        })
                    }
                    )
                }
                async renderPrefetchedBanner(e) {
                    this.logger.log("Rendering prefetched banner", e);
                    const t = (0,
                    a.InnerIdToContainerId)(e.id);
                    return this.ensureVideoAdNotPlaying(t),
                    await (0,
                    a.getBannerContainer)(t, !this.disableBannerCheck),
                    this.renderedBannerIds.add(t),
                    new Promise( (t, r) => {
                        const {CrazygamesAds: n} = window
                          , {id: s, banner: i} = e;
                        n.render([s], {
                            ...e.options,
                            banner: {
                                callback: e => {
                                    if (delete this.bannerQueue[e.code],
                                    !e.empty)
                                        return this.logger.log("Banner rendered", i, "with options", e),
                                        this.sdk.postMessage({
                                            type: "bannerProcessed",
                                            data: {
                                                containerId: i.id,
                                                width: i.width,
                                                height: i.height,
                                                minPrice: e.minPrice,
                                                houseAd: e.houseAd,
                                                empty: e.empty
                                            }
                                        }),
                                        void t();
                                    if (this.useTestAds)
                                        (0,
                                        o.renderFakeBanner)(i),
                                        this.logger.log("Fake banner rendered", i),
                                        t();
                                    else {
                                        this.logger.log("No banner available", i);
                                        const t = "Sorry, no banner is available for the moment, please retry";
                                        this.sdk.postMessage({
                                            type: "bannerProcessed",
                                            data: {
                                                containerId: i.id,
                                                width: i.width,
                                                height: i.height,
                                                error: "UnitNotRendered" === e.type ? "Unit ignored for rendering" : t,
                                                minPrice: e.minPrice,
                                                houseAd: e.houseAd,
                                                empty: e.empty
                                            }
                                        }),
                                        r(new l.BannerError("other",t,i.id))
                                    }
                                }
                            }
                        })
                    }
                    )
                }
                requestOverlayBanners(e, t) {
                    this.logger.log("Requesting overlay banners", e);
                    const r = e.map(e => e.id);
                    Object.keys(this.overlayBanners).forEach(e => {
                        r.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    ),
                    e.forEach(e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const r = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = r
                    }
                    )
                }
                handleEvent(e) {
                    switch (e.type) {
                    case "bannerError":
                        return void this.handleBannerErrorEvent(e);
                    case "requestBanner":
                        return void this.handleRequestBannerEvent(e)
                    }
                }
                handleBannerErrorEvent(e) {
                    const {error: t, containerId: r} = e;
                    this.logger.log("Banner error happened", {
                        error: t,
                        containerId: r
                    });
                    const n = this.popFromBannerQueue(r);
                    if (!n)
                        return;
                    const {reject: s} = n;
                    s(new l.BannerError("other",`${t}`,r))
                }
                async handleRequestBannerEvent(e) {
                    const {request: t} = e;
                    this.logger.verbose("Received banner data from GF, will prefetch it now", t);
                    const r = t.request.units[0].adUnit.code
                      , n = this.popFromBannerQueue(r);
                    if (n)
                        try {
                            const {CrazygamesAds: e} = window;
                            await e.requestOnly(t.request, t.options),
                            this.logger.verbose(`Banner ${r} prefetched`),
                            n.resolve({
                                id: r,
                                banner: n.banner,
                                options: t.options
                            })
                        } catch {
                            n.reject(new l.BannerError("other","Failed to prefetch the banner",r))
                        }
                    else
                        this.logger.verbose(`Banner ${r} missing in queue, not prefetching.`)
                }
                popFromBannerQueue(e) {
                    const t = this.bannerQueue[e];
                    return t ? (delete this.bannerQueue[e],
                    t) : (this.logger.log(`Cannot retrieve element for id ${e} from the banner queue`),
                    null)
                }
                clearBanner(e) {
                    this.sdk.postMessage({
                        type: "clearBanner"
                    });
                    const t = document.getElementById((0,
                    a.ContainerIdToInnerId)(e));
                    if (!t)
                        return void this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`);
                    t.remove(),
                    this.renderedBannerIds.delete(e);
                    const r = Object.values(this.overlayBanners).find(t => t.containerId === e);
                    r && (r.destroy(),
                    delete this.overlayBanners[r.bannerRequest.id]),
                    this.logger.log(`Cleared the banner from container #${e} ${r ? "(also overlay banner)" : ""}`)
                }
                clearAllBanners() {
                    this.sdk.postMessage({
                        type: "clearAllBanners"
                    });
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map(e => `#${e}`).join(", ")),
                    e.forEach(e => {
                        this.clearBanner(e)
                    }
                    )
                }
                ensureVideoAdNotPlaying(e) {
                    if (this.sdk.ad.isAdPlaying)
                        throw new l.BannerError("videoAdPlaying","Banners cannot be rendered while a video ad is playing",e)
                }
                get activeBannersCount() {
                    return this.renderedBannerIds.size
                }
            }
        },
        3222: (e, t, r) => {
            var n = r(7556);
            e.exports = function(e) {
                return null == e ? "" : n(e)
            }
        }
        ,
        3265: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SafeLocalStorage = t.InMemoryStorage = void 0;
            const s = n(r(1916));
            class o {
                constructor() {
                    this.data = {},
                    this.clear()
                }
                setItem(e, t) {
                    this.data[e] = String(t)
                }
                getItem(e) {
                    return this.data.hasOwnProperty(e) ? this.data[e] : void 0
                }
                removeItem(e) {
                    delete this.data[e]
                }
                clear() {
                    this.data = {}
                }
            }
            t.InMemoryStorage = o,
            t.SafeLocalStorage = class {
                constructor() {
                    this.logger = new s.default("none"),
                    this.storage = this.getAvailableStorage()
                }
                static get Instance() {
                    return this._instance ? this._instance : this._instance = new this
                }
                getItem(e) {
                    return this.storage.getItem(e)
                }
                setItem(e, t) {
                    this.storage.setItem(e, t)
                }
                removeItem(e) {
                    this.storage.removeItem(e)
                }
                clear() {
                    return this.storage.clear()
                }
                isFunctioningStorage(e) {
                    try {
                        const t = `__SafeLocalStorage__${Date.now()}`
                          , r = "test";
                        return e.setItem(t, r),
                        e.getItem(t) === r && (window.localStorage.removeItem(t),
                        !0)
                    } catch {
                        return !1
                    }
                }
                getAvailableStorage() {
                    try {
                        return this.hasWorkingLocalStorage() ? (this.logger.verbose("[SafeLocalStorage] using localStorage"),
                        window.localStorage) : this.hasWorkingSessionStorage() ? (this.logger.verbose("[SafeLocalStorage] fallback to sessionStorage"),
                        window.sessionStorage) : (this.logger.verbose("[SafeLocalStorage] fallback to InMemoryStorage"),
                        new o)
                    } catch {
                        return this.logger.verbose("[SafeLocalStorage] fallback to InMemoryStorage"),
                        new o
                    }
                }
                hasWorkingLocalStorage() {
                    try {
                        if (!window.hasOwnProperty("localStorage"))
                            return !1;
                        const {localStorage: e} = window;
                        return this.isFunctioningStorage(e)
                    } catch {
                        return !1
                    }
                }
                hasWorkingSessionStorage() {
                    try {
                        if (!window.hasOwnProperty("sessionStorage"))
                            return !1;
                        const {sessionStorage: e} = window;
                        return this.isFunctioningStorage(e)
                    } catch {
                        return !1
                    }
                }
            }
        },
        3345: e => {
            e.exports = function() {
                return []
            }
        }
        ,
        3488: e => {
            e.exports = function(e) {
                return e
            }
        }
        ,
        3605: e => {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        }
        ,
        3650: (e, t, r) => {
            var n = r(4335)(Object.keys, Object);
            e.exports = n
        }
        ,
        3656: (e, t, r) => {
            e = r.nmd(e);
            var n = r(9325)
              , s = r(9935)
              , o = t && !t.nodeType && t
              , i = o && e && !e.nodeType && e
              , a = i && i.exports === o ? n.Buffer : void 0
              , l = (a ? a.isBuffer : void 0) || s;
            e.exports = l
        }
        ,
        3661: (e, t, r) => {
            var n = r(3040)
              , s = r(7670)
              , o = r(289)
              , i = r(4509)
              , a = r(2949);
            function l(e) {
                var t = -1
                  , r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }
            l.prototype.clear = n,
            l.prototype.delete = s,
            l.prototype.get = o,
            l.prototype.has = i,
            l.prototype.set = a,
            e.exports = l
        }
        ,
        3663: (e, t, r) => {
            var n = r(1799)
              , s = r(776)
              , o = r(7197);
            e.exports = function(e) {
                var t = s(e);
                return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(r) {
                    return r === e || n(r, e, t)
                }
            }
        }
        ,
        3702: e => {
            e.exports = function() {
                this.__data__ = [],
                this.size = 0
            }
        }
        ,
        3710: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.AdError = void 0;
            const n = r(1833);
            class s extends n.GeneralError {
                constructor(e, t) {
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.AdError = s
        }
        ,
        3805: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        }
        ,
        3862: e => {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        3950: e => {
            e.exports = function() {}
        }
        ,
        4080: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.UserError = t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = void 0;
            const n = r(1833);
            t.DEFAULT_MIN_TIME_BETWEEN_MIDROLL_MS = 18e4,
            t.DEFAULT_MIN_TIME_BETWEEN_REWARDED_MS = 5e3;
            class s extends n.GeneralError {
                constructor(e, t) {
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.UserError = s
        }
        ,
        4128: (e, t, r) => {
            var n = r(1800)
              , s = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(s, "") : e
            }
        }
        ,
        4171: (e, t, r) => {
            var n = r(7410)
              , s = r(5880);
            e.exports = function(e) {
                return n(s(e))
            }
        }
        ,
        4218: e => {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        }
        ,
        4220: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isGfToSdkEvent = function(e) {
                return "sdk" === e.messageTarget
            }
        }
        ,
        4247: e => {
            e.exports = function(e) {
                var t = -1
                  , r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }),
                r
            }
        }
        ,
        4248: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                    if (t(e[r], r, e))
                        return !0;
                return !1
            }
        }
        ,
        4335: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        }
        ,
        4394: (e, t, r) => {
            var n = r(2552)
              , s = r(346);
            e.exports = function(e) {
                return "symbol" == typeof e || s(e) && "[object Symbol]" == n(e)
            }
        }
        ,
        4488: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(4080)
              , o = r(771)
              , i = n(r(1916));
            function a() {
                const e = navigator.userAgent.toLowerCase()
                  , t = /mobile/i.test(e)
                  , r = /tablet/i.test(e) || t && /ipad/i.test(e);
                return t ? "mobile" : r ? "tablet" : "desktop"
            }
            t.default = class {
                constructor() {
                    this.systemInfo = {
                        browser: {
                            name: "demo",
                            version: "demo"
                        },
                        countryCode: "US",
                        locale: "en-US",
                        os: {
                            name: "demo",
                            version: "demo"
                        },
                        device: {
                            type: a()
                        },
                        applicationType: "web"
                    },
                    this.isUserAccountAvailable = !0,
                    this.demoUser1 = {
                        username: "User1",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/1.png"
                    },
                    this.demoUser2 = {
                        username: "User2",
                        profilePictureUrl: "https://images.crazygames.com/userportal/avatars/2.png"
                    },
                    this.user1Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.u4N2DzCC6Vmo6Gys-XSl8rHQR0NUJAcWQWr29eLd54qMDPbCopPG0kye8TAidOU6dWAqNWO_kERbl75nTxNcJjbW4yqBS_bIPingIhuCCJsjvnQPkalfmVotmoZGQP21Q9MyZPfpjZNogioA3a0vm6APXAqzudTA9lTioztnT4YvgndISngOMQVNoDCJ_DgCbKy8GFQDcCN-AHFFb0WIVWiTYszv-9JZohUzULt-ueYL31pXVGHQ5C4rHESEg7LYzx1IaLKw1zcoYGxul0RxR35nm3yD_bGa6fQVzCfnKnhEBRifUZsIN1LfIHfNB23ZOh1llG7PEOdvtCSfIxP9ZK6t4gRkGn1VsqZFAMhq1LgJebO8hcm_Iqx0wF3WkdMysoQuWThTNKnwmphv9pguuALILYJluUP8UQll3qiF6gzoLPy1MfD_9l4TPZeP9Bv50B-Tm6Lk3OW248jyuFRKP_VgwZutTb5pJ7LggFcqWFXsBv5ZG3V2zsfVwpAPDhpmb4ykjoB2xLSuxjrvs1dzMhl02QAQjqTUgHj4fstgX-2jYowDyyPjj6JbT2ZC7vrrdmPvc8AcNvyCszamfRYjexElGaeJDDt6vtRuJw_JVwsCLaYHGif4UaKCoe6BECg3mRVUkH08Nm-qQPQw9slpYZmxckFEQQPCGkkPhgOBFkE",
                    this.user2Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIyIiwidXNlcm5hbWUiOiJVc2VyMiIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8yLnBuZyIsImlhdCI6MTY2ODU5MzMxNCwiZXhwIjo0ODI0Mjg4NTE0fQ.kh60HYKR8txKvLoCB6dQ9hQG8Mu1UgtneTGs3Y15HvBWrZoLKp3x3pTf_Vhq8xzs7fQYJKr94zYAxxFRztHey7Tv7PBBmPESUFo8Le-_s2xDy982sFhpM6XDt84ohhvEuJEsOW8wIcCaCK6wzm6UWY6n1bpw1cO1KNASyZRSkDRhfyzDVJ5e167OLgGe3euodTHgClJPDv0ZYhle9KH86PepWamCm0429VrzyOu6QdbtFcRlRNZVnTtgNrCpyvss4AyDhnY5qV9yng7xHVt4zlocP_Z7btBL_kxrzYskhJi6KYuQAYmqLxqHSDnehlIvgO4cdEpJA_FOTeACTohhEu8zjXRrfdAFvEe0W6qqUo5HNFoElRoxYWf11WGSdrJCjpF4Qei9BPgprFaVH2Xi-ITAjKyElQxeKs5p6VmvaMAGwdqZgM4fm7OSex8QQGK0HFJ7wFoCTV5PLl-MBVvTSTfemJMWEwc8od124gwT_uGdDKrASovT2pijgBsAi3jxwgfEr1RPq8uCgZtksrTqaAM9TMv9Z6Zv35pdgTrWzTrOn-G-uc4EPZq7iQaEnglWEFj8Qsm_nMQMgtIM7MYG8KwPC4if3-Yc8KwaAL_taVvkqyMaV3W5j4MX9b1bbf_fw3jrGt74MACb7FtgzKudxoz2CXKZqTppadxS_IOnlMk",
                    this.expiredToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpZFVzZXIxIiwidXNlcm5hbWUiOiJVc2VyMSIsImdhbWVJZCI6InlvdXJHYW1lSWQiLCJwcm9maWxlUGljdHVyZVVybCI6Imh0dHBzOi8vaW1hZ2VzLmNyYXp5Z2FtZXMuY29tL3VzZXJwb3J0YWwvYXZhdGFycy8xLnBuZyIsImlhdCI6MTY2ODU5MzQ5MSwiZXhwIjoxNjY4NTkzNDkyfQ.l_0cyeD-suEM7n9l-Vb2nP5vTJi-e3HwZQWLUESJMdVTX1zPDuQhwnSgHhcGVGFnhG5Wvtni-ElpM8HnVNvY7hRthbeP23n2ScAJBvAX10vrzPuLJRn_Nj_5GcRQpK4fH813Ij8ZWuOaS2hD4gKaEUessZs5n5hNBTQN9T5j4wkNvfhuw9vqtVOha2aPveqeVy1eA5XAWI7IirHi31-Dw60MSVgsp3r4tpYEHTlUPktzLsQvO9Sk9IE7iybg9ycoFoS6L1eAvxGWVF1BMHRerPwdOV9CN0rtrqrTM3pyb1fpmFfgQpoA8AgPuVrU58mwyeTpUQ4WSrPrltGjxxfiGQOATBDBrJk5V173BfUgBEgAEP0TifWAQt02iijJa9G6q-V8p0GWto1EYSdvEDmG0YhoRBVxnOQH3U1Fu0yxMWGMm9VmZVVhVN8PpLjitEhP4Gn33IafpS05d1-Q0NFMb9-FvQCdtXjTaGbaBVIeBN-aO0r4ERvoBE9R0AUrywd9Z2zK_qKRvp35NyryLjnedsYt5Xrc9TA2uDMR77TjByyqsdQ_qv4zhLfhuiMiweXyPfYzltAiNJmEUohxlP7OvH33B6xpT7Qz2ZyEeMHBrQRQGGlT6MowcMYx_2LFNSK8PwZJNlMs0Uw_uCIu-4TvqleVleIg7sLhWiijw1cxtmM",
                    this.logger = new i.default("user")
                }
                async showAuthPrompt() {
                    switch (this.logger.log("Requesting auth prompt (local)"),
                    (0,
                    o.getQueryStringValue)("show_auth_prompt_response")) {
                    case "user1":
                    default:
                        return this.demoUser1;
                    case "user2":
                        return this.demoUser2;
                    case "user_cancelled":
                        throw new s.UserError("userCancelled","User cancelled the auth prompt")
                    }
                }
                async showAccountLinkPrompt() {
                    switch (this.logger.log("Requesting link account prompt (local)"),
                    (0,
                    o.getQueryStringValue)("link_account_response")) {
                    case "yes":
                    default:
                        return {
                            response: "yes"
                        };
                    case "no":
                        return {
                            response: "no"
                        };
                    case "logged_out":
                        throw new s.UserError("userNotAuthenticated","The user is not authenticated")
                    }
                }
                async getUser() {
                    switch (this.logger.log("Requesting user object (local)"),
                    (0,
                    o.getQueryStringValue)("user_response")) {
                    case "user1":
                    default:
                        return this.demoUser1;
                    case "user2":
                        return this.demoUser2;
                    case "logged_out":
                        return null
                    }
                }
                async getUserToken() {
                    switch (this.logger.log("Requesting user token (local)"),
                    (0,
                    o.getQueryStringValue)("token_response")) {
                    case "user1":
                    default:
                        return this.user1Token;
                    case "user2":
                        return this.user2Token;
                    case "expired_token":
                        return this.expiredToken;
                    case "logged_out":
                        throw new s.UserError("userNotAuthenticated","The user is not authenticated")
                    }
                }
                async getXsollaUserToken() {
                    return this.logger.log("Requesting Xsolla user token (local). Xsolla token not supported locally."),
                    "Xsolla token not supported locally"
                }
                addScore(e) {
                    this.logger.warn("addScore is no longer supported.")
                }
                addScoreEncrypted(e, t) {
                    this.logger.warn("addScoreEncrypted is no longer supported.")
                }
                submitScore(e) {
                    this.logger.log("Submitting score (local).", e.encryptedScore)
                }
                addAuthListener() {}
                removeAuthListener() {}
            }
        },
        4509: (e, t, r) => {
            var n = r(2651);
            e.exports = function(e) {
                return n(this, e).has(e)
            }
        }
        ,
        4517: (e, t, r) => {
            var n = r(6545)
              , s = r(3950)
              , o = r(4247)
              , i = n && 1 / o(new n([, -0]))[1] == 1 / 0 ? function(e) {
                return new n(e)
            }
            : s;
            e.exports = i
        }
        ,
        4528: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = t.length, s = e.length; ++r < n; )
                    e[s + r] = t[r];
                return e
            }
        }
        ,
        4664: (e, t, r) => {
            var n = r(9770)
              , s = r(3345)
              , o = Object.prototype.propertyIsEnumerable
              , i = Object.getOwnPropertySymbols
              , a = i ? function(e) {
                return null == e ? [] : (e = Object(e),
                n(i(e), function(t) {
                    return o.call(e, t)
                }))
            }
            : s;
            e.exports = a
        }
        ,
        4739: (e, t, r) => {
            var n = r(6025);
            e.exports = function(e) {
                var t = this.__data__
                  , r = n(t, e);
                return r < 0 ? void 0 : t[r][1]
            }
        }
        ,
        4840: (e, t, r) => {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = n
        }
        ,
        4888: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DisabledDataHandler = void 0;
            const n = r(1833);
            t.DisabledDataHandler = class {
                constructor() {
                    this.errorCode = "dataModuleDisabled",
                    this.errorMessage = "The data module is disabled. To enable it, please indicate on the Developer Portal that your game is using it."
                }
                clear() {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                getItem(e) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                removeItem(e) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
                setItem(e, t) {
                    throw new n.GeneralError(this.errorCode,this.errorMessage)
                }
            }
        }
        ,
        4894: (e, t, r) => {
            var n = r(1882)
              , s = r(294);
            e.exports = function(e) {
                return null != e && s(e.length) && !n(e)
            }
        }
        ,
        4901: (e, t, r) => {
            var n = r(2552)
              , s = r(294)
              , o = r(346)
              , i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0,
            i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1,
            e.exports = function(e) {
                return o(e) && s(e.length) && !!i[n(e)]
            }
        }
        ,
        4915: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.DEFAULT_SAVE_INTERVAL_MS = t.MAX_DATA_LENGTH = t.DataError = void 0;
            const n = r(1833);
            class s extends n.GeneralError {
                constructor(e, t) {
                    super(e, t),
                    this.code = e,
                    this.message = t
                }
            }
            t.DataError = s,
            t.MAX_DATA_LENGTH = 1048576,
            t.DEFAULT_SAVE_INTERVAL_MS = 1e3
        }
        ,
        4932: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, s = Array(n); ++r < n; )
                    s[r] = t(e[r], r, e);
                return s
            }
        }
        ,
        5083: (e, t, r) => {
            var n = r(1882)
              , s = r(7296)
              , o = r(3805)
              , i = r(7473)
              , a = /^\[object .+?Constructor\]$/
              , l = Function.prototype
              , d = Object.prototype
              , c = l.toString
              , u = d.hasOwnProperty
              , h = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!o(e) || s(e)) && (n(e) ? h : a).test(i(e))
            }
        }
        ,
        5288: e => {
            e.exports = function(e, t) {
                return e === t || e != e && t != t
            }
        }
        ,
        5325: (e, t, r) => {
            var n = r(6131);
            e.exports = function(e, t) {
                return !(null == e || !e.length) && n(e, t, 0) > -1
            }
        }
        ,
        5366: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.BASIC_LAUNCH_AD_DISABLED_ERROR = void 0;
            const s = r(771)
              , o = n(r(1916))
              , i = r(3710)
              , a = {
                adFinished: () => {}
                ,
                adError: () => {}
                ,
                adStarted: () => {}
            };
            t.BASIC_LAUNCH_AD_DISABLED_ERROR = "Ads are disabled during basic launch",
            t.default = class {
                constructor(e, t) {
                    this.sdk = e,
                    this.initInfo = t,
                    this.adCallbacks = a,
                    this.requestInProgress = !1,
                    this.adblockDetectionResolvers = [],
                    this.logger = new o.default("ad"),
                    this.adPlaying = !1,
                    this.adblockPopupListeners = [],
                    this.adblockDetectionTimeout = window.setTimeout( () => {
                        this.logger.log("Adblock timeout executed since there wasn't an adblock event in 5000ms"),
                        this.setAdblockDetectionResult(!1)
                    }
                    , 5e3)
                }
                prefetchAd(e) {
                    if ("basic" === this.initInfo.launchFlow)
                        throw new i.AdError("other",t.BASIC_LAUNCH_AD_DISABLED_ERROR);
                    this.logger.log(`Prefetching ${e} ad`),
                    this.sdk.postMessage({
                        type: "prefetchAd",
                        data: {
                            adType: e
                        }
                    })
                }
                async requestAd(e, r) {
                    if (this.adCallbacks = {
                        adFinished: (null == r ? void 0 : r.adFinished) || a.adFinished,
                        adError: (null == r ? void 0 : r.adError) || (null == r ? void 0 : r.adFinished) || a.adFinished,
                        adStarted: (null == r ? void 0 : r.adStarted) || a.adStarted
                    },
                    "basic" === this.initInfo.launchFlow)
                        return (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(new i.AdError("other",t.BASIC_LAUNCH_AD_DISABLED_ERROR));
                    if (this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress) {
                        this.logger.log("Ad already requested");
                        const e = new i.AdError("other","An ad request is already in progress");
                        return (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(e)
                    }
                    this.requestInProgress = !0,
                    this.sdk.postMessage({
                        type: "requestAd",
                        data: {
                            adType: e
                        }
                    })
                }
                async hasAdblock() {
                    return void 0 !== this.adblockDetectionResult ? this.adblockDetectionResult : (this.sdk.postMessage({
                        type: "hasAdblock"
                    }),
                    this.logger.log("Requesting adblock status"),
                    new Promise(e => {
                        this.adblockDetectionResolvers.push(e)
                    }
                    ))
                }
                handleEvent(e) {
                    var t, r;
                    switch (e.type) {
                    case "adblockDetectionExecuted":
                        return this.handleAdBlockDetectionExecutedEvent(e);
                    case "adError":
                        this.requestInProgress = !1;
                        const n = new i.AdError((null === (t = e.errorData) || void 0 === t ? void 0 : t.reason) || "other",(null === (r = e.errorData) || void 0 === r ? void 0 : r.message) || "Unknown message");
                        return this.adPlaying = !1,
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adError)(n);
                    case "adFinished":
                        return this.adPlaying = !1,
                        this.requestInProgress = !1,
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adFinished)();
                    case "adStarted":
                        return this.adPlaying = !0,
                        this.sdk.banner.activeBannersCount > 0 && this.sdk.banner.clearAllBanners(),
                        (0,
                        s.wrapUserFn)(this.adCallbacks.adStarted)();
                    case "adblockPopupShowed":
                        return void this.callAdblockPopupListeners("open")
                    }
                }
                handleAdBlockDetectionExecutedEvent(e) {
                    const {hasAdblock: t} = e
                      , r = !!t;
                    if (void 0 !== this.adblockDetectionResult)
                        return this.logger.log(`Received update for adblock state: (${r}).`),
                        void (this.adblockDetectionResult = r);
                    this.setAdblockDetectionResult(r),
                    clearTimeout(this.adblockDetectionTimeout)
                }
                setAdblockDetectionResult(e) {
                    this.adblockDetectionResult = e,
                    this.adblockDetectionResolvers.forEach(t => t(e)),
                    this.adblockDetectionResolvers = []
                }
                get isAdPlaying() {
                    return this.adPlaying
                }
                addAdblockPopupListener(e) {
                    this.adblockPopupListeners.push(e)
                }
                removeAdblockPopupListener(e) {
                    this.adblockPopupListeners = this.adblockPopupListeners.filter(t => t !== e)
                }
                callAdblockPopupListeners(e) {
                    this.adblockPopupListeners.forEach(t => {
                        try {
                            t(e)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    )
                }
            }
        },
        5389: (e, t, r) => {
            var n = r(3663)
              , s = r(7978)
              , o = r(3488)
              , i = r(6449)
              , a = r(583);
            e.exports = function(e) {
                return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? i(e) ? s(e[0], e[1]) : n(e) : a(e)
            }
        }
        ,
        5463: e => {
            e.exports = function(e) {
                return e != e
            }
        }
        ,
        5481: (e, t, r) => {
            var n = r(9325)["__core-js_shared__"];
            e.exports = n
        }
        ,
        5527: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t)
            }
        }
        ,
        5580: (e, t, r) => {
            var n = r(6110)(r(9325), "DataView");
            e.exports = n
        }
        ,
        5672: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SDK_VERSION = void 0,
            t.SDK_VERSION = "3.3.1"
        }
        ,
        5691: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(3201))
              , o = n(r(8617))
              , i = n(r(5366))
              , a = n(r(1924))
              , l = r(4220)
              , d = n(r(1916))
              , c = n(r(5897))
              , u = n(r(1984))
              , h = r(2925)
              , g = n(r(8199));
            t.default = class {
                constructor(e, t, r) {
                    this.logger = new d.default("none"),
                    this.receiveMessage = async e => {
                        const t = e.data;
                        (0,
                        l.isGfToSdkEvent)(t) && t.type && (this.logger.verbose("Received message from GF", t),
                        this.bannerModule.handleEvent(t),
                        this.adModule.handleEvent(t),
                        this.userModule.handleEvent(t),
                        this.gameModule.handleEvent(t),
                        u.default.getInstance().handleEvent(t))
                    }
                    ,
                    !0 === e.debug && (d.default.forceEnable = !0),
                    this._isQaTool = e.isQaTool,
                    this.adModule = new i.default(this,e),
                    this.bannerModule = new s.default(this,e),
                    this.gameModule = new o.default(this,e),
                    this.userModule = new a.default(this,e.systemInfo,!!e.userAccountAvailable,r),
                    this.dataModule = new c.default(this,t),
                    this.analyticsModule = new g.default(this),
                    window.addEventListener("message", this.receiveMessage, !1),
                    u.default.getInstance().init(this, e),
                    this.propagateErrors()
                }
                get environment() {
                    return this.postMessage({
                        type: "getEnvironment"
                    }),
                    "crazygames"
                }
                get isQaTool() {
                    return this.postMessage({
                        type: "isQATool"
                    }),
                    this._isQaTool
                }
                get banner() {
                    return this.bannerModule
                }
                get game() {
                    return this.gameModule
                }
                get user() {
                    return this.userModule
                }
                get ad() {
                    return this.adModule
                }
                get data() {
                    return this.dataModule
                }
                get analytics() {
                    return this.analyticsModule
                }
                propagateErrors() {
                    window.addEventListener("error", e => {
                        var t;
                        this.postMessage({
                            type: "error",
                            data: {
                                name: e.error.name || "Error",
                                message: e.message || "Unknown error",
                                filename: e.filename || "Unknown file",
                                lineno: e.lineno || 0,
                                colno: e.colno || 0,
                                stack: (null === (t = e.error) || void 0 === t ? void 0 : t.stack) || "No stack trace available",
                                url: window.location.href
                            }
                        })
                    }
                    ),
                    window.addEventListener("unhandledrejection", e => {
                        var t;
                        this.postMessage({
                            type: "error",
                            data: {
                                name: "UnhandledRejection",
                                message: e.reason,
                                stack: null === (t = e.reason) || void 0 === t ? void 0 : t.stack,
                                url: window.location.href
                            }
                        })
                    }
                    )
                }
                postMessage(e) {
                    this.logger.verbose("Message to GF", e),
                    h.GF_WINDOW ? h.GF_WINDOW.postMessage(e, "*") : this.logger.log("Missing GF_WINDOW, message won't be sent")
                }
            }
        },
        5749: (e, t, r) => {
            var n = r(1042);
            e.exports = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t,
                this
            }
        }
        ,
        5765: (e, t, r) => {
            var n = r(8859)
              , s = r(5325)
              , o = r(9905)
              , i = r(9219)
              , a = r(4517)
              , l = r(4247);
            e.exports = function(e, t, r) {
                var d = -1
                  , c = s
                  , u = e.length
                  , h = !0
                  , g = []
                  , p = g;
                if (r)
                    h = !1,
                    c = o;
                else if (u >= 200) {
                    var f = t ? null : a(e);
                    if (f)
                        return l(f);
                    h = !1,
                    c = i,
                    p = new n
                } else
                    p = t ? [] : g;
                e: for (; ++d < u; ) {
                    var v = e[d]
                      , y = t ? t(v) : v;
                    if (v = r || 0 !== v ? v : 0,
                    h && y == y) {
                        for (var m = p.length; m--; )
                            if (p[m] === y)
                                continue e;
                        t && p.push(y),
                        g.push(v)
                    } else
                        c(p, y, r) || (p !== g && p.push(y),
                        g.push(v))
                }
                return g
            }
        }
        ,
        5775: (e, t, r) => {
            var n = r(7422);
            e.exports = function(e, t, r) {
                var s = null == e ? void 0 : n(e, t);
                return void 0 === s ? r : s
            }
        }
        ,
        5861: (e, t, r) => {
            var n = r(5580)
              , s = r(8223)
              , o = r(2804)
              , i = r(6545)
              , a = r(8303)
              , l = r(2552)
              , d = r(7473)
              , c = "[object Map]"
              , u = "[object Promise]"
              , h = "[object Set]"
              , g = "[object WeakMap]"
              , p = "[object DataView]"
              , f = d(n)
              , v = d(s)
              , y = d(o)
              , m = d(i)
              , w = d(a)
              , b = l;
            (n && b(new n(new ArrayBuffer(1))) != p || s && b(new s) != c || o && b(o.resolve()) != u || i && b(new i) != h || a && b(new a) != g) && (b = function(e) {
                var t = l(e)
                  , r = "[object Object]" == t ? e.constructor : void 0
                  , n = r ? d(r) : "";
                if (n)
                    switch (n) {
                    case f:
                        return p;
                    case v:
                        return c;
                    case y:
                        return u;
                    case m:
                        return h;
                    case w:
                        return g
                    }
                return t
            }
            ),
            e.exports = b
        }
        ,
        5880: (e, t, r) => {
            var n = r(514)
              , s = r(5950);
            e.exports = function(e) {
                return null == e ? [] : n(e, s(e))
            }
        }
        ,
        5897: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(1833)
              , o = n(r(1916))
              , i = r(8457)
              , a = n(r(1984))
              , l = r(4888)
              , d = r(7063);
            t.default = class {
                constructor(e, t) {
                    if (this.sdk = e,
                    this.logger = new o.default("data"),
                    this.alreadySent = [],
                    "local" === t.handler)
                        this.dataHandler = new d.LocalDataHandler(t.data,e.game.id);
                    else if ("cloud" === t.handler)
                        this.dataHandler = new i.CloudDataHandler(e,!!t.doNotSync,t.data);
                    else {
                        if ("disabled" !== t.handler)
                            throw new s.GeneralError("unexpectedError",`Unknown data handler ${t.handler}`);
                        this.dataHandler = new l.DisabledDataHandler
                    }
                }
                clear() {
                    this.dataHandler.clear(),
                    this.logger.log("Clear data"),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "clear"
                        }
                    })
                }
                getItem(e) {
                    const t = this.dataHandler.getItem(e);
                    return this.logger.log(`Get "${e}", returning ${t}`),
                    this.debugEvent("getItem", e),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "getItem"
                        }
                    }),
                    t
                }
                removeItem(e) {
                    this.dataHandler.removeItem(e),
                    this.logger.log(`Remove "${e}"`),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "removeItem"
                        }
                    }),
                    this.debugEvent("removeItem", e)
                }
                setItem(e, t) {
                    this.dataHandler.setItem(e, t),
                    this.logger.log(`Set "${e}" = ${t}`),
                    this.sdk.postMessage({
                        type: "useDataModule",
                        data: {
                            action: "setItem"
                        }
                    }),
                    this.debugEvent("setItem", e, t)
                }
                syncUnityGameData() {
                    this.logger.log("Requesting to sync unity game data"),
                    this.sdk.postMessage({
                        type: "syncUnityGameData"
                    })
                }
                debugEvent(e, t, r) {
                    const n = `${e}-${t}`;
                    this.alreadySent.includes(n) || (this.alreadySent.push(n),
                    a.default.getInstance().sendDebugEvent("dataEventWithoutSDKPS", {
                        method: e,
                        key: t,
                        value: r
                    }, e => !!e.dataModule && "sdk" !== e.dataModule.apsStorageType))
                }
            }
        },
        5911: (e, t, r) => {
            var n = r(8859)
              , s = r(4248)
              , o = r(9219);
            e.exports = function(e, t, r, i, a, l) {
                var d = 1 & r
                  , c = e.length
                  , u = t.length;
                if (c != u && !(d && u > c))
                    return !1;
                var h = l.get(e)
                  , g = l.get(t);
                if (h && g)
                    return h == t && g == e;
                var p = -1
                  , f = !0
                  , v = 2 & r ? new n : void 0;
                for (l.set(e, t),
                l.set(t, e); ++p < c; ) {
                    var y = e[p]
                      , m = t[p];
                    if (i)
                        var w = d ? i(m, y, p, t, e, l) : i(y, m, p, e, t, l);
                    if (void 0 !== w) {
                        if (w)
                            continue;
                        f = !1;
                        break
                    }
                    if (v) {
                        if (!s(t, function(e, t) {
                            if (!o(v, t) && (y === e || a(y, e, r, i, l)))
                                return v.push(t)
                        })) {
                            f = !1;
                            break
                        }
                    } else if (y !== m && !a(y, m, r, i, l)) {
                        f = !1;
                        break
                    }
                }
                return l.delete(e),
                l.delete(t),
                f
            }
        }
        ,
        5950: (e, t, r) => {
            var n = r(695)
              , s = r(8984)
              , o = r(4894);
            e.exports = function(e) {
                return o(e) ? n(e) : s(e)
            }
        }
        ,
        6009: (e, t, r) => {
            e = r.nmd(e);
            var n = r(4840)
              , s = t && !t.nodeType && t
              , o = s && e && !e.nodeType && e
              , i = o && o.exports === s && n.process
              , a = function() {
                try {
                    return o && o.require && o.require("util").types || i && i.binding && i.binding("util")
                } catch (e) {}
            }();
            e.exports = a
        }
        ,
        6025: (e, t, r) => {
            var n = r(5288);
            e.exports = function(e, t) {
                for (var r = e.length; r--; )
                    if (n(e[r][0], t))
                        return r;
                return -1
            }
        }
        ,
        6049: (e, t, r) => {
            var n = r(8567)
              , s = r(4171)
              , o = r(6449);
            e.exports = function(e) {
                return (o(e) ? n : s)(e)
            }
        }
        ,
        6100: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.stringifyError = function(e, t={}) {
                if (!e)
                    return r;
                let n = "";
                const {includeStack: s=!1} = t;
                if (e instanceof Error)
                    n = s && e.stack || e.message;
                else
                    try {
                        n = e.toString()
                    } catch {
                        try {
                            n = JSON.stringify(e)
                        } catch {
                            n = r
                        }
                    }
                if ("string" != typeof n)
                    try {
                        n = JSON.stringify(n)
                    } catch {
                        n = r
                    }
                return n
            }
            ;
            const r = "An error occurred"
        }
        ,
        6110: (e, t, r) => {
            var n = r(5083)
              , s = r(392);
            e.exports = function(e, t) {
                var r = s(e, t);
                return n(r) ? r : void 0
            }
        }
        ,
        6131: (e, t, r) => {
            var n = r(2523)
              , s = r(5463)
              , o = r(6959);
            e.exports = function(e, t, r) {
                return t == t ? o(e, t, r) : n(e, s, r)
            }
        }
        ,
        6449: e => {
            var t = Array.isArray;
            e.exports = t
        }
        ,
        6545: (e, t, r) => {
            var n = r(6110)(r(9325), "Set");
            e.exports = n
        }
        ,
        6721: (e, t, r) => {
            var n = r(1042)
              , s = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (n) {
                    var r = t[e];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return s.call(t, e) ? t[e] : void 0
            }
        }
        ,
        6868: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.GamePerformanceTracker = void 0;
            const n = r(2896);
            t.GamePerformanceTracker = class {
                constructor(e, t) {
                    var r;
                    if (this.logger = e,
                    this.sdk = t,
                    this.fpsList = [],
                    this.trackingInterval = null,
                    this.sendEventTimeout = null,
                    this.trackingInitializedOn = Date.now(),
                    this.isTabVisible = !0,
                    this.isInGameplay = !1,
                    this.onTabVisibilityChange = e => {
                        this.isTabVisible = e,
                        this.isTabVisible ? this.startTracking("tabVisible") : this.stopTracking("tabHidden")
                    }
                    ,
                    this.onGameplayStateChange = e => {
                        this.isInGameplay = e,
                        this.isInGameplay ? this.startTracking("gameplayStarted") : this.stopTracking("gameplayStopped")
                    }
                    ,
                    this.metricsInfo = null === (r = window.unityGameInstance) || void 0 === r ? void 0 : r.GetMetricsInfo,
                    "function" != typeof this.metricsInfo)
                        return e.verbose("No window.unityGameInstance.GetMetricsInfo function found, performance tracker will not run."),
                        void (this.isTrackingSupported = !1);
                    this.isTrackingSupported = !0,
                    document.addEventListener("visibilitychange", () => {
                        const e = "visible" === document.visibilityState;
                        this.onTabVisibilityChange(e)
                    }
                    )
                }
                get canStartTracking() {
                    return this.isTabVisible && this.isInGameplay && this.isTrackingSupported && !(0,
                    n.isDefined)(this.trackingInterval)
                }
                startTracking(e) {
                    this.canStartTracking && (this.logger.verbose(`Starting performance tracking, reason: ${e}`),
                    this.registerSendEventTimeout(),
                    this.trackingInterval = window.setInterval( () => {
                        this.track()
                    }
                    , 250))
                }
                stopTracking(e) {
                    (0,
                    n.isDefined)(this.trackingInterval) && (this.logger.verbose(`Stopping performance tracking, reason: ${e}`),
                    this.sendEvent("stopTracking"),
                    this.trackingInterval && (clearInterval(this.trackingInterval),
                    this.trackingInterval = null),
                    this.sendEventTimeout && (clearTimeout(this.sendEventTimeout),
                    this.sendEventTimeout = null))
                }
                track() {
                    const e = this.metricsInfo();
                    this.fpsList.push(Math.round(e.fps))
                }
                registerSendEventTimeout() {
                    this.sendEventTimeout = window.setTimeout( () => {
                        this.sendEvent("timeout"),
                        this.registerSendEventTimeout()
                    }
                    , this.sendEventDelay)
                }
                sendEvent(e) {
                    if (this.logger.verbose(`Sending performance event, reason: ${e}`),
                    0 === this.fpsList.length)
                        return void this.logger.verbose("No FPS data collected, skipping event");
                    const t = [[0, 9], [10, 19], [20, 29], [30, 39], [40, 49], [50, 59], [60, 69], [70, 79], [80, 89], [90, null]]
                      , r = {};
                    for (const [e,n] of t)
                        r[null === n ? `${e}+` : `${e}-${n}`] = 0;
                    for (const e of this.fpsList)
                        for (const [n,s] of t) {
                            if (null === s && e >= n) {
                                r[`${n}+`] += 250;
                                break
                            }
                            if (null !== s && e >= n && e <= s) {
                                r[`${n}-${s}`] += 250;
                                break
                            }
                        }
                    const n = this.metricsInfo()
                      , {totalWASMHeapSize: s, usedWASMHeapSize: o, totalJSHeapSize: i, usedJSHeapSize: a} = n
                      , l = {
                        fpsHistogram: r,
                        memory: {
                            totalWASMHeapSize: s,
                            usedWASMHeapSize: o,
                            totalJSHeapSize: i,
                            usedJSHeapSize: a
                        }
                    };
                    this.logger.verbose("Send performance event with data: ", l),
                    this.sdk.postMessage({
                        type: "analyticsTrackGamePerformance",
                        data: l
                    }),
                    this.fpsList = []
                }
                get sendEventDelay() {
                    const e = Date.now() - this.trackingInitializedOn;
                    return e < 6e4 ? 1e4 : e < 36e5 ? 6e4 : 12e4
                }
            }
        }
        ,
        6959: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, s = e.length; ++n < s; )
                    if (e[n] === t)
                        return n;
                return -1
            }
        }
        ,
        7063: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.LocalDataHandler = void 0,
            t.generateLsGameDataKey = a;
            const s = n(r(1916))
              , o = r(3265)
              , i = r(1025);
            function a(e) {
                return `SDK_DATA_${e}`
            }
            t.LocalDataHandler = class {
                constructor(e, t) {
                    this.logger = new s.default("data"),
                    this.data = e,
                    this.lsKey = a(t),
                    this.logger.log("Local data handler initialized"),
                    this.logger.verbose("With this initial data: ", e)
                }
                clear() {
                    this.data = {},
                    this.saveData()
                }
                getItem(e) {
                    return this.data[e] || null
                }
                removeItem(e) {
                    delete this.data[e],
                    this.saveData()
                }
                setItem(e, t) {
                    this.data[e] = `${t}`,
                    this.saveData()
                }
                saveData() {
                    (0,
                    i.checkDataLimits)(JSON.stringify(this.data));
                    const e = {
                        data: this.data,
                        metadata: {
                            date: new Date
                        }
                    };
                    o.SafeLocalStorage.Instance.setItem(this.lsKey, JSON.stringify(e))
                }
            }
        },
        7067: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadAdsIfNeeded = function(e, t, r) {
                return window.CrazygamesAds || !t.banner.isBannerAdsEnabled() ? Promise.resolve() : function(e, t, r) {
                    return o || (o = (0,
                    n.loadScript)(e).catch(t => {
                        throw new Error(`Error while loading script ${e}. Reason: ${(0,
                        s.stringifyError)(t)}`)
                    }
                    ).then( () => {
                        const e = window
                          , n = e => {
                            t.postMessage({
                                type: "adsAnalyticsEvent",
                                data: {
                                    event: e
                                }
                            })
                        }
                        ;
                        try {
                            e.CrazygamesAds.initAds({
                                analyticsEventHandler: n,
                                clientInfo: r
                            })
                        } catch (e) {
                            throw new Error(`Error in initAds. Reason: ${(0,
                            s.stringifyError)(e)}`)
                        }
                    }
                    ),
                    o)
                }(e, t, r)
            }
            ;
            const n = r(771)
              , s = r(6100);
            let o
        }
        ,
        7068: (e, t, r) => {
            var n = r(7217)
              , s = r(5911)
              , o = r(1986)
              , i = r(689)
              , a = r(5861)
              , l = r(6449)
              , d = r(3656)
              , c = r(7167)
              , u = "[object Arguments]"
              , h = "[object Array]"
              , g = "[object Object]"
              , p = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, f, v, y) {
                var m = l(e)
                  , w = l(t)
                  , b = m ? h : a(e)
                  , _ = w ? h : a(t)
                  , k = (b = b == u ? g : b) == g
                  , I = (_ = _ == u ? g : _) == g
                  , E = b == _;
                if (E && d(e)) {
                    if (!d(t))
                        return !1;
                    m = !0,
                    k = !1
                }
                if (E && !k)
                    return y || (y = new n),
                    m || c(e) ? s(e, t, r, f, v, y) : o(e, t, b, r, f, v, y);
                if (!(1 & r)) {
                    var S = k && p.call(e, "__wrapped__")
                      , A = I && p.call(t, "__wrapped__");
                    if (S || A) {
                        var T = S ? e.value() : e
                          , M = A ? t.value() : t;
                        return y || (y = new n),
                        v(T, M, r, f, y)
                    }
                }
                return !!E && (y || (y = new n),
                i(e, t, r, f, v, y))
            }
        }
        ,
        7167: (e, t, r) => {
            var n = r(4901)
              , s = r(7301)
              , o = r(6009)
              , i = o && o.isTypedArray
              , a = i ? s(i) : n;
            e.exports = a
        }
        ,
        7197: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return null != r && r[e] === t && (void 0 !== t || e in Object(r))
                }
            }
        }
        ,
        7217: (e, t, r) => {
            var n = r(79)
              , s = r(1420)
              , o = r(938)
              , i = r(3605)
              , a = r(9817)
              , l = r(945);
            function d(e) {
                var t = this.__data__ = new n(e);
                this.size = t.size
            }
            d.prototype.clear = s,
            d.prototype.delete = o,
            d.prototype.get = i,
            d.prototype.has = a,
            d.prototype.set = l,
            e.exports = d
        }
        ,
        7237: e => {
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
        }
        ,
        7255: (e, t, r) => {
            var n = r(7422);
            e.exports = function(e) {
                return function(t) {
                    return n(t, e)
                }
            }
        }
        ,
        7296: (e, t, r) => {
            var n, s = r(5481), o = (n = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            e.exports = function(e) {
                return !!o && o in e
            }
        }
        ,
        7301: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        }
        ,
        7410: (e, t, r) => {
            var n = r(3195);
            e.exports = function(e, t) {
                var r = -1
                  , s = e.length
                  , o = s - 1;
                for (t = void 0 === t ? s : t; ++r < t; ) {
                    var i = n(r, o)
                      , a = e[i];
                    e[i] = e[r],
                    e[r] = a
                }
                return e.length = t,
                e
            }
        }
        ,
        7422: (e, t, r) => {
            var n = r(1769)
              , s = r(7797);
            e.exports = function(e, t) {
                for (var r = 0, o = (t = n(t, e)).length; null != e && r < o; )
                    e = e[s(t[r++])];
                return r && r == o ? e : void 0
            }
        }
        ,
        7473: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        }
        ,
        7534: (e, t, r) => {
            var n = r(2552)
              , s = r(346);
            e.exports = function(e) {
                return s(e) && "[object Arguments]" == n(e)
            }
        }
        ,
        7556: (e, t, r) => {
            var n = r(1873)
              , s = r(4932)
              , o = r(6449)
              , i = r(4394)
              , a = n ? n.prototype : void 0
              , l = a ? a.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t)
                    return t;
                if (o(t))
                    return s(t, e) + "";
                if (i(t))
                    return l ? l.call(t) : "";
                var r = t + "";
                return "0" == r && 1 / t == -1 / 0 ? "-0" : r
            }
        }
        ,
        7643: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.wait = function(e) {
                return new Promise(t => setTimeout(t, e))
            }
        }
        ,
        7670: (e, t, r) => {
            var n = r(2651);
            e.exports = function(e) {
                var t = n(this, e).delete(e);
                return this.size -= t ? 1 : 0,
                t
            }
        }
        ,
        7681: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.generateInviteLink = function(e, t) {
                if (!t)
                    return "An error happened when generating invite link";
                const r = new URL(t)
                  , n = r.searchParams;
                return n.set("czy_invite", "true"),
                n.set("utm_source", "invite"),
                Object.keys(e).forEach(t => {
                    n.set(t, e[t])
                }
                ),
                r.toString()
            }
        }
        ,
        7797: (e, t, r) => {
            var n = r(4394);
            e.exports = function(e) {
                if ("string" == typeof e || n(e))
                    return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }
        }
        ,
        7828: (e, t, r) => {
            var n = r(9325).Uint8Array;
            e.exports = n
        }
        ,
        7978: (e, t, r) => {
            var n = r(270)
              , s = r(5775)
              , o = r(631)
              , i = r(8586)
              , a = r(756)
              , l = r(7197)
              , d = r(7797);
            e.exports = function(e, t) {
                return i(e) && a(t) ? l(d(e), t) : function(r) {
                    var i = s(r, e);
                    return void 0 === i && i === t ? o(r, e) : n(t, i, 3)
                }
            }
        }
        ,
        8077: e => {
            e.exports = function(e, t) {
                return null != e && t in Object(e)
            }
        }
        ,
        8096: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = Array(e); ++r < e; )
                    n[r] = t(r);
                return n
            }
        }
        ,
        8156: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(771)
              , o = n(r(2091));
            window.CrazyGames = {
                SDK: new o.default
            },
            (0,
            s.addStyle)("\n.crazygames-banner-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n")
        },
        8199: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(1916))
              , o = r(771)
              , i = r(2742);
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.logger = new s.default("analytics")
                }
                trackOrder(e, t) {
                    if (!(0,
                    o.isXsollaOrderArgumentValid)(t))
                        throw new i.AnalyticsError("invalidArgument","Order must be a JSON object.");
                    if (!i.PAYMENT_PROVIDERS.includes(e))
                        throw new i.AnalyticsError("invalidArgument",`Unsupported payment provider. Supported providers: ${i.PAYMENT_PROVIDERS.join(",")}`);
                    this.logger.log(`Track "${e}" order`, t),
                    this.sdk.postMessage({
                        type: "analyticsTrackIAPOrder",
                        data: {
                            paymentProvider: e,
                            orderJson: JSON.stringify(t)
                        }
                    })
                }
            }
        },
        8221: (e, t, r) => {
            var n = r(3805)
              , s = r(124)
              , o = r(9374)
              , i = Math.max
              , a = Math.min;
            e.exports = function(e, t, r) {
                var l, d, c, u, h, g, p = 0, f = !1, v = !1, y = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                function m(t) {
                    var r = l
                      , n = d;
                    return l = d = void 0,
                    p = t,
                    u = e.apply(n, r)
                }
                function w(e) {
                    var r = e - g;
                    return void 0 === g || r >= t || r < 0 || v && e - p >= c
                }
                function b() {
                    var e = s();
                    if (w(e))
                        return _(e);
                    h = setTimeout(b, function(e) {
                        var r = t - (e - g);
                        return v ? a(r, c - (e - p)) : r
                    }(e))
                }
                function _(e) {
                    return h = void 0,
                    y && l ? m(e) : (l = d = void 0,
                    u)
                }
                function k() {
                    var e = s()
                      , r = w(e);
                    if (l = arguments,
                    d = this,
                    g = e,
                    r) {
                        if (void 0 === h)
                            return function(e) {
                                return p = e,
                                h = setTimeout(b, t),
                                f ? m(e) : u
                            }(g);
                        if (v)
                            return clearTimeout(h),
                            h = setTimeout(b, t),
                            m(g)
                    }
                    return void 0 === h && (h = setTimeout(b, t)),
                    u
                }
                return t = o(t) || 0,
                n(r) && (f = !!r.leading,
                c = (v = "maxWait"in r) ? i(o(r.maxWait) || 0, t) : c,
                y = "trailing"in r ? !!r.trailing : y),
                k.cancel = function() {
                    void 0 !== h && clearTimeout(h),
                    p = 0,
                    l = g = d = h = void 0
                }
                ,
                k.flush = function() {
                    return void 0 === h ? u : _(s())
                }
                ,
                k
            }
        }
        ,
        8223: (e, t, r) => {
            var n = r(6110)(r(9325), "Map");
            e.exports = n
        }
        ,
        8303: (e, t, r) => {
            var n = r(6110)(r(9325), "WeakMap");
            e.exports = n
        }
        ,
        8457: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CloudDataHandler = void 0,
            t.generateCloudCacheLsGameDataKey = a;
            const s = n(r(1916))
              , o = r(1025)
              , i = r(3265);
            function a(e) {
                return `SDK_DATA_CLOUD_CACHE_${e}`
            }
            t.CloudDataHandler = class {
                constructor(e, t, r) {
                    this.sdk = e,
                    this.doNotSync = t,
                    this.data = r,
                    this.logger = new s.default("data"),
                    this.cacheLsKey = a(e.game.id),
                    this.logger.log("Cloud data handler initialized. " + (this.doNotSync ? "Data will not be synced due to failed cloud load." : "")),
                    this.logger.verbose("With this initial data: ", r)
                }
                clear() {
                    this.data = {},
                    this.saveData()
                }
                getItem(e) {
                    return this.data[e] || null
                }
                removeItem(e) {
                    delete this.data[e],
                    this.saveData()
                }
                setItem(e, t) {
                    this.data[e] = `${t}`,
                    this.saveData()
                }
                saveData() {
                    const e = JSON.stringify(this.data);
                    (0,
                    o.checkDataLimits)(e),
                    this.doNotSync || this.sdk.postMessage({
                        type: "saveSdkGameData",
                        data: {
                            jsonData: e
                        }
                    });
                    const t = {
                        data: this.data,
                        metadata: {
                            date: new Date
                        }
                    };
                    i.SafeLocalStorage.Instance.setItem(this.cacheLsKey, JSON.stringify(t))
                }
            }
        },
        8567: (e, t, r) => {
            var n = r(3007)
              , s = r(7410);
            e.exports = function(e) {
                return s(n(e))
            }
        }
        ,
        8586: (e, t, r) => {
            var n = r(6449)
              , s = r(4394)
              , o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
              , i = /^\w*$/;
            e.exports = function(e, t) {
                if (n(e))
                    return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !s(e)) || i.test(e) || !o.test(e) || null != t && e in Object(t)
            }
        }
        ,
        8589: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(9491)
              , o = r(1366)
              , i = n(r(1916))
              , a = r(1930)
              , l = r(2637);
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.disableBannerCheck = !1,
                    this.overlayBanners = {},
                    this.renderedBannerIds = new Set,
                    this.logger = new i.default("banner")
                }
                async requestBanner(e) {
                    this.logger.log("Requesting banner with automatic rendering", e),
                    this.ensureVideoAdNotPlaying(e.id);
                    const t = await this.prefetchBanner(e);
                    return this.renderPrefetchedBanner(t)
                }
                async requestResponsiveBanner(e) {
                    this.logger.log(`Requesting responsive banner with automatic rendering #${e}`),
                    this.ensureVideoAdNotPlaying(e);
                    const t = await (0,
                    a.getBannerContainer)(e, !this.disableBannerCheck)
                      , {width: r, height: n} = t.containerInfo.size
                      , s = await this.prefetchResponsiveBanner({
                        id: e,
                        width: r,
                        height: n
                    });
                    return this.renderPrefetchedBanner(s)
                }
                async prefetchBanner(e) {
                    if (this.logger.log("Prefetch banner", e),
                    !(0,
                    l.matchesInGameBannerSize)(e.width, e.height))
                        return Promise.reject("Invalid banner size");
                    const t = (0,
                    a.ContainerIdToInnerId)(e.id)
                      , r = {
                        ...e,
                        id: t
                    };
                    return {
                        id: r.id,
                        banner: r,
                        options: {}
                    }
                }
                async prefetchResponsiveBanner(e) {
                    this.logger.log(`Prefetch responsive banner #${e.id}`);
                    const {width: t, height: r} = e
                      , n = {
                        id: (0,
                        a.ContainerIdToInnerId)(e.id),
                        width: t,
                        height: r,
                        isResponsive: !0
                    };
                    return {
                        id: n.id,
                        banner: n,
                        options: {}
                    }
                }
                async renderPrefetchedBanner(e) {
                    this.logger.log("Rendering prefetched banner", e);
                    const t = (0,
                    a.InnerIdToContainerId)(e.id);
                    this.ensureVideoAdNotPlaying(t),
                    await (0,
                    a.getBannerContainer)(t, !0),
                    this.renderedBannerIds.add(t),
                    (0,
                    o.renderFakeBanner)(e.banner)
                }
                ensureVideoAdNotPlaying(e) {
                    if (this.sdk.ad.isAdPlaying)
                        throw new l.BannerError("videoAdPlaying","Banners cannot be rendered while a video ad is playing",e)
                }
                requestOverlayBanners(e, t) {
                    const r = e.map(e => e.id);
                    Object.keys(this.overlayBanners).forEach(e => {
                        r.includes(e) || (this.logger.log("Remove overlay banner " + e),
                        this.overlayBanners[e].destroy(),
                        delete this.overlayBanners[e])
                    }
                    ),
                    e.forEach(e => {
                        if (this.overlayBanners[e.id])
                            return void this.logger.log("Skip overlay banner update " + e.id);
                        this.logger.log("Create overlay banner " + e.id);
                        const r = new s.OverlayBanner(e,this.disableBannerCheck,this,t);
                        this.overlayBanners[e.id] = r
                    }
                    )
                }
                clearBanner(e) {
                    const t = document.getElementById((0,
                    a.ContainerIdToInnerId)(e));
                    t ? (t.remove(),
                    this.renderedBannerIds.delete(e),
                    this.logger.log(`Cleared the banner from container #${e}`)) : this.logger.log(`There isn't a banner in container #${e}, not clearing anything.`)
                }
                clearAllBanners() {
                    const e = Array.from(this.renderedBannerIds.values());
                    this.logger.log("Clearing all banners, ids: ", e.map(e => `#${e}`).join(", ")),
                    e.forEach(e => {
                        this.clearBanner(e)
                    }
                    )
                }
                get activeBannersCount() {
                    return this.renderedBannerIds.size
                }
            }
        },
        8591: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(9202))
              , o = n(r(8589))
              , i = n(r(4488))
              , a = r(771)
              , l = r(7681)
              , d = n(r(1916))
              , c = r(3012)
              , u = n(r(2599))
              , h = r(2742);
            t.default = class {
                constructor() {
                    this.adModule = new s.default(this),
                    this.bannerModule = new o.default(this),
                    this.userModule = new i.default,
                    this.dataModule = new u.default(this),
                    this.gameLogger = new d.default("game"),
                    this.analyticsLogger = new d.default("analytics"),
                    this.throttledHappyTime = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting happytime (local)"), 1e3, "happytime"),
                    this.throttledGameplayStart = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting gameplay start (local)"), 1e3, "gameplayStart"),
                    this.throttledGameplayStop = (0,
                    c.throttledMethod)( () => this.gameLogger.log("Requesting gameplay stop (local)"), 1e3, "gameplayStop"),
                    this.showInviteButton = e => {
                        this.gameLogger.log("Show invite button (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.game.link);
                        return this.gameLogger.log(`Invite button link ${t}`),
                        t
                    }
                    ,
                    this.inviteLink = e => {
                        this.gameLogger.log("Requesting invite link (local)");
                        const t = (0,
                        l.generateInviteLink)(e, this.game.link);
                        return this.gameLogger.log(`Invite link is ${t}`),
                        t
                    }
                    ,
                    this.adModule.init(),
                    this.bannerModule.disableBannerCheck = "true" === (0,
                    a.getQueryStringValue)("disable_banner_check")
                }
                get ad() {
                    return this.adModule
                }
                get banner() {
                    return this.bannerModule
                }
                get user() {
                    return this.userModule
                }
                get data() {
                    return this.dataModule
                }
                get environment() {
                    return "local"
                }
                get isQaTool() {
                    return !1
                }
                get game() {
                    return {
                        link: "https://www.crazygames.com/game/your-game-will-appear-here",
                        id: "local",
                        isInstantJoin: window.location.search.includes("instantJoin=true"),
                        isInstantMultiplayer: window.location.search.includes("instantJoin=true"),
                        happytime: () => this.throttledHappyTime(),
                        gameplayStart: () => this.throttledGameplayStart(),
                        gameplayStop: () => this.throttledGameplayStop(),
                        loadingStart: () => this.gameLogger.log("Requesting game loading start (local)"),
                        loadingStop: () => this.gameLogger.log("Requesting game loading stop (local)"),
                        inviteLink: this.inviteLink,
                        showInviteButton: this.showInviteButton,
                        hideInviteButton: () => this.gameLogger.log("Hide invite button (local)"),
                        getInviteParam: e => new URLSearchParams(window.location.search).get(e),
                        settings: {
                            disableChat: !1
                        }
                    }
                }
                get analytics() {
                    return {
                        trackOrder: (e, t) => {
                            if (!(0,
                            a.isXsollaOrderArgumentValid)(t))
                                throw new h.AnalyticsError("invalidArgument","Order must be a JSON object.");
                            if (!h.PAYMENT_PROVIDERS.includes(e))
                                throw new h.AnalyticsError("invalidArgument",`Unsupported payment provider. Supported providers: ${h.PAYMENT_PROVIDERS.join(",")}`);
                            this.analyticsLogger.log(`Track "${e}" order`, t)
                        }
                    }
                }
            }
        },
        8617: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(7681)
              , o = n(r(1916))
              , i = r(3012)
              , a = n(r(14))
              , l = r(6868);
            t.default = class {
                constructor(e, t) {
                    var r;
                    this.sdk = e,
                    this.logger = new o.default("game"),
                    this.settings = {
                        disableChat: !1
                    },
                    this.isInstantJoin = window.location.search.includes("instantJoin=true"),
                    this.isInstantMultiplayer = window.location.search.includes("instantJoin=true"),
                    this.loadStatsSent = !1,
                    this.throttledHappyTime = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting happytime"),
                        this.sdk.postMessage({
                            type: "happytime"
                        })
                    }
                    , 1e3, "happytime"),
                    this.throttledGameplayStart = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting gameplay start"),
                        this.sdk.postMessage({
                            type: "gameplayStart"
                        })
                    }
                    , 1e3, "gameplayStart"),
                    this.throttledGameplayStop = (0,
                    i.throttledMethod)( () => {
                        this.logger.log("Requesting gameplay stop"),
                        this.sdk.postMessage({
                            type: "gameplayStop"
                        })
                    }
                    , 1e3, "gameplayStop"),
                    this.link = t.gameLink,
                    this.id = t.gameId,
                    this.settings.disableChat = null !== (r = t.disableChat) && void 0 !== r && r,
                    this.performanceTracker = new l.GamePerformanceTracker(this.logger,e)
                }
                happytime() {
                    this.throttledHappyTime()
                }
                gameplayStart() {
                    if (this.throttledGameplayStart(),
                    this.performanceTracker.onGameplayStateChange(!0),
                    !this.loadStatsSent) {
                        this.loadStatsSent = !0;
                        let e = window.performance.getEntriesByType("resource").map(e => JSON.parse(JSON.stringify(e)));
                        e = (0,
                        a.default)(e, "name"),
                        this.sdk.postMessage({
                            type: "sdkGameLoadStats",
                            data: {
                                resources: e
                            }
                        })
                    }
                }
                gameplayStop() {
                    this.throttledGameplayStop(),
                    this.performanceTracker.onGameplayStateChange(!1)
                }
                loadingStart() {
                    this.logger.log("Requesting game loading start"),
                    this.sdk.postMessage({
                        type: "sdkGameLoadingStart"
                    })
                }
                loadingStop() {
                    this.logger.log("Requesting game loading stop"),
                    this.sdk.postMessage({
                        type: "sdkGameLoadingStop"
                    })
                }
                inviteLink(e) {
                    this.logger.log("Requesting invite link");
                    const t = (0,
                    s.generateInviteLink)(e, this.link);
                    return this.logger.log(`Invite link is ${t}`),
                    this.sdk.postMessage({
                        type: "inviteUrl",
                        data: {
                            inviteUrl: t
                        }
                    }),
                    t
                }
                showInviteButton(e) {
                    this.logger.log("Show invite button");
                    const t = (0,
                    s.generateInviteLink)(e, this.link);
                    return this.logger.log(`Invite button link ${t}`),
                    this.sdk.postMessage({
                        type: "showInviteButton",
                        data: {
                            inviteUrl: t
                        }
                    }),
                    t
                }
                hideInviteButton() {
                    this.logger.log("Hide invite button"),
                    this.sdk.postMessage({
                        type: "hideInviteButton"
                    })
                }
                getInviteParam(e) {
                    return new URLSearchParams(window.location.search).get(e)
                }
                handleEvent(e) {
                    "focusStealAttempt" === e.type && this.restoreCanvasFocus()
                }
                restoreCanvasFocus() {
                    try {
                        const e = document.getElementsByTagName("canvas");
                        1 !== e.length ? this.logger.log(`There are ${e.length} canvases, don't restore focus`) : (this.logger.log("Restore focus to canvas"),
                        e[0].tabIndex = 1,
                        e[0].focus())
                    } catch {
                        this.logger.error("Failed to restore canvas focus")
                    }
                }
            }
        },
        8629: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ch = function(e) {
                const t = JSON.parse(JSON.stringify(e))
                  , r = Object.keys(t).filter(e => void 0 !== t[e] && null !== t[e]).sort();
                let n = "";
                for (const e of r)
                    n += e + "_" + JSON.stringify(t[e]) + "_";
                return function(e) {
                    let t = 0;
                    if (0 === e.length)
                        return t;
                    for (let r = 0; r < e.length; r++)
                        t = (t << 5) - t + e.charCodeAt(r),
                        t |= 0;
                    return t
                }(n)
            }
        }
        ,
        8655: (e, t, r) => {
            var n = r(6025);
            e.exports = function(e) {
                return n(this.__data__, e) > -1
            }
        }
        ,
        8859: (e, t, r) => {
            var n = r(3661)
              , s = r(1380)
              , o = r(1459);
            function i(e) {
                var t = -1
                  , r = null == e ? 0 : e.length;
                for (this.__data__ = new n; ++t < r; )
                    this.add(e[t])
            }
            i.prototype.add = i.prototype.push = s,
            i.prototype.has = o,
            e.exports = i
        }
        ,
        8984: (e, t, r) => {
            var n = r(5527)
              , s = r(3650)
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e))
                    return s(e);
                var t = [];
                for (var r in Object(e))
                    o.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        }
        ,
        9202: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(3710)
              , o = r(771)
              , i = n(r(1916));
            t.default = class {
                constructor(e) {
                    this.sdk = e,
                    this.requestInProgress = !1,
                    this.overlay = null,
                    this.logger = new i.default("ad"),
                    this.adPlaying = !1
                }
                init() {
                    this.overlay = document.createElement("div"),
                    this.overlay.id = "local-overlay",
                    this.createOverlayStyle(),
                    document.body.appendChild(this.overlay)
                }
                prefetchAd(e) {
                    this.logger.log(`Prefetching ${e} ad`)
                }
                async requestAd(e, t) {
                    if (this.requestInProgress)
                        if (null == t ? void 0 : t.adError) {
                            const e = "An ad request is already in progress";
                            (0,
                            o.wrapUserFn)(t.adError)(new s.AdError("other",e))
                        } else
                            (null == t ? void 0 : t.adFinished) && (0,
                            o.wrapUserFn)(t.adFinished)();
                    else
                        this.adPlaying = !0,
                        (null == t ? void 0 : t.adStarted) && (0,
                        o.wrapUserFn)(t.adStarted)(),
                        this.sdk.banner.activeBannersCount > 0 && this.sdk.banner.clearAllBanners(),
                        await this.renderFakeAd(e),
                        this.adPlaying = !1,
                        (null == t ? void 0 : t.adFinished) && (0,
                        o.wrapUserFn)(t.adFinished)()
                }
                async hasAdblock() {
                    return this.logger.log("Requesting adblock status (always false) (local)"),
                    !1
                }
                async renderFakeAd(e) {
                    return this.logger.log(`Requesting ${e} ad`),
                    this.requestInProgress = !0,
                    this.showOverlay(),
                    this.overlay.innerHTML = `<h1>A ${e} ad would appear here</h1>`,
                    new Promise(e => {
                        window.setTimeout( () => {
                            this.requestInProgress = !1,
                            this.hideOverlay(),
                            e()
                        }
                        , 5e3)
                    }
                    )
                }
                showOverlay() {
                    this.overlay.style.display = "flex"
                }
                hideOverlay() {
                    this.overlay.style.display = "none",
                    this.overlay.innerHTML = ""
                }
                createOverlayStyle() {
                    const e = {
                        position: "fixed",
                        display: "none",
                        inset: 0,
                        "font-family": "Arial, Helvetica, sans-serif",
                        color: "white",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "rgba(0,0,0,0.75)",
                        "z-index": "10000"
                    };
                    for (const t in e)
                        this.overlay.style[t] = e[t]
                }
                get isAdPlaying() {
                    return this.adPlaying
                }
            }
        },
        9219: e => {
            e.exports = function(e, t) {
                return e.has(t)
            }
        }
        ,
        9325: (e, t, r) => {
            var n = r(4840)
              , s = "object" == typeof self && self && self.Object === Object && self
              , o = n || s || Function("return this")();
            e.exports = o
        }
        ,
        9326: (e, t, r) => {
            var n = r(1769)
              , s = r(2428)
              , o = r(6449)
              , i = r(361)
              , a = r(294)
              , l = r(7797);
            e.exports = function(e, t, r) {
                for (var d = -1, c = (t = n(t, e)).length, u = !1; ++d < c; ) {
                    var h = l(t[d]);
                    if (!(u = null != e && r(e, h)))
                        break;
                    e = e[h]
                }
                return u || ++d != c ? u : !!(c = null == e ? 0 : e.length) && a(c) && i(h, c) && (o(e) || s(e))
            }
        }
        ,
        9350: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        }
        ,
        9374: (e, t, r) => {
            var n = r(4128)
              , s = r(3805)
              , o = r(4394)
              , i = /^[-+]0x[0-9a-f]+$/i
              , a = /^0b[01]+$/i
              , l = /^0o[0-7]+$/i
              , d = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e)
                    return e;
                if (o(e))
                    return NaN;
                if (s(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = s(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = n(e);
                var r = a.test(e);
                return r || l.test(e) ? d(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
            }
        }
        ,
        9491: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.OverlayBanner = void 0;
            const s = n(r(8221));
            t.OverlayBanner = class {
                constructor(e, t, r, n) {
                    this.bannerRequest = e,
                    this.onWindowResize = () => {
                        this.setContainerPosition()
                    }
                    ,
                    this.containerElement = document.createElement("div"),
                    this.containerId = "overlay-banner-" + e.id,
                    this.containerElement.id = this.containerId,
                    this.bannerRequest = e,
                    this.containerElement.style.position = "absolute",
                    this.containerElement.style.transformOrigin = "top left",
                    this.containerElement.style.userSelect = "none";
                    const o = document.getElementById("gfMainContainer");
                    o ? o.appendChild(this.containerElement) : document.body.appendChild(this.containerElement);
                    const i = e.size.split("x");
                    this.onScreenSize = {
                        width: parseInt(i[0]),
                        height: parseInt(i[1])
                    },
                    this.bannerModule = r,
                    this.callback = n,
                    this.disableBannerCheck = t,
                    this.debouncedWindowResize = (0,
                    s.default)(this.onWindowResize, 200),
                    window.addEventListener("resize", this.debouncedWindowResize),
                    this.renderBanner()
                }
                isVisible() {
                    const e = this.computeOverlay();
                    if (this.disableBannerCheck)
                        return !0;
                    const t = e.left + e.width * e.scale
                      , r = e.top + e.height * e.scale
                      , n = this.getGameContainerDimensions();
                    return !(e.top < -4 || e.left < -4 || t > window.innerWidth + 4 || r > n.height + 4)
                }
                computeOverlay() {
                    const e = this.getScale()
                      , t = this.getOnScreenPosition();
                    return {
                        width: this.onScreenSize.width,
                        height: this.onScreenSize.height,
                        top: t.y,
                        left: t.x,
                        scale: e
                    }
                }
                getGameContainerDimensions() {
                    const e = document.getElementById("game-container");
                    return e ? {
                        width: e.clientWidth,
                        height: e.clientHeight
                    } : {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                getScale() {
                    return this.getGameContainerDimensions().width / 922
                }
                getOnScreenPosition() {
                    const e = this.getGameContainerDimensions()
                      , t = this.bannerRequest.anchor.x * e.width
                      , r = (1 - this.bannerRequest.anchor.y) * e.height
                      , n = this.getScale()
                      , s = this.onScreenSize
                      , o = s.width * n
                      , i = s.height * n
                      , a = this.bannerRequest.pivot || {
                        x: .5,
                        y: .5
                    };
                    return {
                        x: t + this.bannerRequest.position.x * n - o * a.x,
                        y: r - this.bannerRequest.position.y * n - i * (1 - a.y)
                    }
                }
                setContainerPosition() {
                    const e = this.computeOverlay();
                    this.containerElement.style.width = `${e.width}px`,
                    this.containerElement.style.height = `${e.height}px`,
                    this.containerElement.style.top = `${e.top}px`,
                    this.containerElement.style.left = `${e.left}px`,
                    this.containerElement.style.transform = `scale(${e.scale})`,
                    this.containerElement.style.display = "block"
                }
                async renderBanner() {
                    if (this.setContainerPosition(),
                    !this.isVisible())
                        return this.callback(this.bannerRequest.id, "bannerError", "bannerNotEntirelyVisible"),
                        void (this.containerElement.style.display = "none");
                    try {
                        await this.bannerModule.requestBanner({
                            id: this.containerId,
                            ...this.onScreenSize
                        }),
                        this.callback(this.bannerRequest.id, "bannerRendered")
                    } catch (e) {
                        this.callback(this.bannerRequest.id, "bannerError", `${e}`)
                    }
                }
                destroy() {
                    this.containerElement && this.containerElement.remove(),
                    window.removeEventListener("resize", this.debouncedWindowResize)
                }
            }
        },
        9770: e => {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, s = 0, o = []; ++r < n; ) {
                    var i = e[r];
                    t(i, r, e) && (o[s++] = i)
                }
                return o
            }
        }
        ,
        9817: e => {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        }
        ,
        9905: e => {
            e.exports = function(e, t, r) {
                for (var n = -1, s = null == e ? 0 : e.length; ++n < s; )
                    if (r(t, e[n]))
                        return !0;
                return !1
            }
        }
        ,
        9935: e => {
            e.exports = function() {
                return !1
            }
        }
    }
      , t = {};
    function r(n) {
        var s = t[n];
        if (void 0 !== s)
            return s.exports;
        var o = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.loaded = !0,
        o.exports
    }
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    r(8156)
}
)();
