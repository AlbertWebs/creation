!(function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        o = Object.getPrototypeOf,
        r = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        d = {},
        c = d.toString,
        u = d.hasOwnProperty,
        p = u.toString,
        f = p.call(Object),
        h = {};

    function g(e, t) {
        var n = (t = t || i).createElement("script");
        (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    var v = "3.1.1",
        m = function(e, t) {
            return new m.fn.init(e, t);
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        w = /-([a-z])/g,
        x = function(e, t) {
            return t.toUpperCase();
        };

    function k(e) {
        var t = !!e && "length" in e && e.length,
            n = m.type(e);
        return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    (m.fn = m.prototype = {
        jquery: v,
        constructor: m,
        length: 0,
        toArray: function() {
            return r.call(this);
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = m.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function(e) {
            return m.each(this, e);
        },
        map: function(e) {
            return this.pushStack(
                m.map(this, function(t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
    (m.extend = m.fn.extend = function() {
        var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && ((d = s), (s = arguments[a] || {}), a++), "object" == typeof s || m.isFunction(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    (n = s[t]),
                    s !== (i = e[t]) &&
                    (d && i && (m.isPlainObject(i) || (o = m.isArray(i))) ? (o ? ((o = !1), (r = n && m.isArray(n) ? n : [])) : (r = n && m.isPlainObject(n) ? n : {}), (s[t] = m.extend(d, r, i))) : void 0 !== i && (s[t] = i));
        return s;
    }),
    m.extend({
            expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === m.type(e);
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window;
            },
            isNumeric: function(e) {
                var t = m.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e) || ((t = o(e)) && ((n = u.call(t, "constructor") && t.constructor), "function" != typeof n || p.call(n) !== f)));
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[c.call(e)] || "object" : typeof e;
            },
            globalEval: function(e) {
                g(e);
            },
            camelCase: function(e) {
                return e.replace(b, "ms-").replace(w, x);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function(e, t) {
                var n,
                    i = 0;
                if (k(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(y, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return (e.length = o), e;
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i;
            },
            map: function(e, t, n) {
                var i,
                    o,
                    r = 0,
                    a = [];
                if (k(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
                return s.apply([], a);
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m.isFunction(e)))
                    return (
                        (i = r.call(arguments, 2)),
                        ((o = function() {
                            return e.apply(t || this, i.concat(r.call(arguments)));
                        }).guid = e.guid = e.guid || m.guid++),
                        o
                    );
            },
            now: Date.now,
            support: h,
        }),
        "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]),
        m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
        });
    var $ = (function(e) {
        var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            d,
            c,
            u,
            p,
            f,
            h,
            g,
            v,
            m,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            k = 0,
            $ = 0,
            C = se(),
            T = se(),
            S = se(),
            j = function(e, t) {
                return e === t && (u = !0), 0;
            },
            E = {}.hasOwnProperty,
            A = [],
            D = A.pop,
            O = A.push,
            q = A.push,
            H = A.slice,
            L = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            z = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            R = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            _ = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            Q = new RegExp(F),
            X = new RegExp("^" + M + "$"),
            U = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            V = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            ie = function() {
                p();
            },
            oe = ye(
                function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                }, {
                    dir: "parentNode",
                    next: "legend"
                }
            );
        try {
            q.apply((A = H.call(x.childNodes)), x.childNodes), A[x.childNodes.length].nodeType;
        } catch (e) {
            q = {
                apply: A.length ?
                    function(e, t) {
                        O.apply(e, H.call(t));
                    } :
                    function(e, t) {
                        for (var n = e.length, i = 0;
                            (e[n++] = t[i++]););
                        e.length = n - 1;
                    },
            };
        }

        function re(e, t, i, o) {
            var r,
                a,
                d,
                c,
                u,
                h,
                m,
                y = t && t.ownerDocument,
                k = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))) return i;
            if (!o && ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), g)) {
                if (11 !== k && (u = K.exec(e)))
                    if ((r = u[1])) {
                        if (9 === k) {
                            if (!(d = t.getElementById(r))) return i;
                            if (d.id === r) return i.push(d), i;
                        } else if (y && (d = y.getElementById(r)) && b(t, d) && d.id === r) return i.push(d), i;
                    } else {
                        if (u[2]) return q.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(i, t.getElementsByClassName(r)), i;
                    }
                if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== k)(y = t), (m = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = w)), a = (h = s(e)).length; a--;) h[a] = "#" + c + " " + me(h[a]);
                        (m = h.join(",")), (y = (J.test(e) && ge(t.parentNode)) || t);
                    }
                    if (m)
                        try {
                            return q.apply(i, y.querySelectorAll(m)), i;
                        } catch (e) {} finally {
                            c === w && t.removeAttribute("id");
                        }
                }
            }
            return l(e.replace(z, "$1"), t, i, o);
        }

        function se() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o);
            };
        }

        function ae(e) {
            return (e[w] = !0), e;
        }

        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t;
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (;
                    (n = n.nextSibling);)
                    if (n === t) return -1;
            return e ? 1 : -1;
        }

        function ue(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }

        function fe(e) {
            return function(t) {
                return "form" in t ?
                    t.parentNode && !1 === t.disabled ?
                    "label" in t ?
                    "label" in t.parentNode ?
                    t.parentNode.disabled === e :
                    t.disabled === e :
                    t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e) :
                    t.disabled === e :
                    "label" in t && t.disabled === e;
            };
        }

        function he(e) {
            return ae(function(t) {
                return (
                    (t = +t),
                    ae(function(n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                    })
                );
            });
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = re.support = {}),
                (r = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName;
                }),
                (p = re.setDocument = function(e) {
                    var t,
                        o,
                        s = e ? e.ownerDocument || e : x;
                    return s !== f && 9 === s.nodeType && s.documentElement ?
                        ((h = (f = s).documentElement),
                            (g = !r(f)),
                            x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                            (n.attributes = le(function(e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (n.getElementsByTagName = le(function(e) {
                                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (n.getElementsByClassName = V.test(f.getElementsByClassName)),
                            (n.getById = le(function(e) {
                                return (h.appendChild(e).id = w), !f.getElementsByName || !f.getElementsByName(w).length;
                            })),
                            n.getById ?
                            ((i.filter.ID = function(e) {
                                    var t = e.replace(Z, ee);
                                    return function(e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (i.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                })) :
                            ((i.filter.ID = function(e) {
                                    var t = e.replace(Z, ee);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                (i.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n,
                                            i,
                                            o,
                                            r = t.getElementById(e);
                                        if (r) {
                                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                            for (o = t.getElementsByName(e), i = 0;
                                                (r = o[i++]);)
                                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                        }
                                        return [];
                                    }
                                })),
                            (i.find.TAG = n.getElementsByTagName ?
                                function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                } :
                                function(e, t) {
                                    var n,
                                        i = [],
                                        o = 0,
                                        r = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (;
                                            (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return r;
                                }),
                            (i.find.CLASS =
                                n.getElementsByClassName &&
                                function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                }),
                            (m = []),
                            (v = []),
                            (n.qsa = V.test(f.querySelectorAll)) &&
                            (le(function(e) {
                                    (h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + N + ")"),
                                        e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                                        e.querySelectorAll(":checked").length || v.push(":checked"),
                                        e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]");
                                }),
                                le(function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = f.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                        (h.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        v.push(",.*:");
                                })),
                            (n.matchesSelector = V.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                            le(function(e) {
                                (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", F);
                            }),
                            (v = v.length && new RegExp(v.join("|"))),
                            (m = m.length && new RegExp(m.join("|"))),
                            (t = V.test(h.compareDocumentPosition)),
                            (b =
                                t || V.test(h.contains) ?
                                function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                } :
                                function(e, t) {
                                    if (t)
                                        for (;
                                            (t = t.parentNode);)
                                            if (t === e) return !0;
                                    return !1;
                                }),
                            (j = t ?
                                function(e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        i ||
                                        (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i) ?
                                            e === f || (e.ownerDocument === x && b(x, e)) ?
                                            -1 :
                                            t === f || (t.ownerDocument === x && b(x, t)) ?
                                            1 :
                                            c ?
                                            L(c, e) - L(c, t) :
                                            0 :
                                            4 & i ?
                                            -1 :
                                            1)
                                    );
                                } :
                                function(e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var n,
                                        i = 0,
                                        o = e.parentNode,
                                        r = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : c ? L(c, e) - L(c, t) : 0;
                                    if (o === r) return ce(e, t);
                                    for (n = e;
                                        (n = n.parentNode);) s.unshift(n);
                                    for (n = t;
                                        (n = n.parentNode);) a.unshift(n);
                                    for (; s[i] === a[i];) i++;
                                    return i ? ce(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
                                }),
                            f) :
                        f;
                }),
                (re.matches = function(e, t) {
                    return re(e, null, null, t);
                }),
                (re.matchesSelector = function(e, t) {
                    if (((e.ownerDocument || e) !== f && p(e), (t = t.replace(_, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                        } catch (e) {}
                    return re(t, f, null, [e]).length > 0;
                }),
                (re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== f && p(e), b(e, t);
                }),
                (re.attr = function(e, t) {
                    (e.ownerDocument || e) !== f && p(e);
                    var o = i.attrHandle[t.toLowerCase()],
                        r = o && E.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (re.escape = function(e) {
                    return (e + "").replace(te, ne);
                }),
                (re.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (re.uniqueSort = function(e) {
                    var t,
                        i = [],
                        o = 0,
                        r = 0;
                    if (((u = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(j), u)) {
                        for (;
                            (t = e[r++]);) t === e[r] && (o = i.push(r));
                        for (; o--;) e.splice(i[o], 1);
                    }
                    return (c = null), e;
                }),
                (o = re.getText = function(e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else
                        for (;
                            (t = e[i++]);) n += o(t);
                    return n;
                }),
                ((i = re.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: U,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && re.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function(e) {
                            var t,
                                n = !e[6] && e[2];
                            return U.CHILD.test(e[0]) ?
                                null :
                                (e[3] ? (e[2] = e[4] || e[5] || "") : n && Q.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ?
                                function() {
                                    return !0;
                                } :
                                function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function(e) {
                            var t = C[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                                    C(e, function(e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = re.attr(i, e);
                                return null == o ?
                                    "!=" === t :
                                    !t ||
                                    ((o += ""),
                                        "=" === t ?
                                        o === n :
                                        "!=" === t ?
                                        o !== n :
                                        "^=" === t ?
                                        n && 0 === o.indexOf(n) :
                                        "*=" === t ?
                                        n && o.indexOf(n) > -1 :
                                        "$=" === t ?
                                        n && o.slice(-n.length) === n :
                                        "~=" === t ?
                                        (" " + o.replace(W, " ") + " ").indexOf(n) > -1 :
                                        "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === o ?
                                function(e) {
                                    return !!e.parentNode;
                                } :
                                function(t, n, l) {
                                    var d,
                                        c,
                                        u,
                                        p,
                                        f,
                                        h,
                                        g = r !== s ? "nextSibling" : "previousSibling",
                                        v = t.parentNode,
                                        m = a && t.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (v) {
                                        if (r) {
                                            for (; g;) {
                                                for (p = t;
                                                    (p = p[g]);)
                                                    if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                                            for (
                                                b = (f = (d = (c = (u = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && d[1]) && d[2], p = f && v.childNodes[f];
                                                (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                                            )
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    c[e] = [k, f, b];
                                                    break;
                                                }
                                        } else if ((y && (b = f = (d = (c = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && d[1]), !1 === b))
                                            for (;
                                                (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                                                ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((c = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [k, b]), p !== t));

                                            );
                                        return (b -= o) === i || (b % i == 0 && b / i >= 0);
                                    }
                                };
                        },
                        PSEUDO: function(e, t) {
                            var n,
                                o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return o[w] ?
                                o(t) :
                                o.length > 1 ?
                                ((n = [e, e, "", t]),
                                    i.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                    ae(function(e, n) {
                                        for (var i, r = o(e, t), s = r.length; s--;) e[(i = L(e, r[s]))] = !(n[i] = r[s]);
                                    }) :
                                    function(e) {
                                        return o(e, 0, n);
                                    }) :
                                o;
                        },
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var t = [],
                                n = [],
                                i = a(e.replace(z, "$1"));
                            return i[w] ?
                                ae(function(e, t, n, o) {
                                    for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r));
                                }) :
                                function(e, o, r) {
                                    return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                                };
                        }),
                        has: ae(function(e) {
                            return function(t) {
                                return re(e, t).length > 0;
                            };
                        }),
                        contains: ae(function(e) {
                            return (
                                (e = e.replace(Z, ee)),
                                function(t) {
                                    return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
                                }
                            );
                        }),
                        lang: ae(function(e) {
                            return (
                                X.test(e || "") || re.error("unsupported lang: " + e),
                                (e = e.replace(Z, ee).toLowerCase()),
                                function(t) {
                                    var n;
                                    do {
                                        if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === h;
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: fe(!1),
                        disabled: fe(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e);
                        },
                        header: function(e) {
                            return Y.test(e.nodeName);
                        },
                        input: function(e) {
                            return G.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: he(function() {
                            return [0];
                        }),
                        last: he(function(e, t) {
                            return [t - 1];
                        }),
                        eq: he(function(e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: he(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: he(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: he(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                            return e;
                        }),
                        gt: he(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = i.pseudos.eq), {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }))
            i.pseudos[t] = ue(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ve() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }

        function ye(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = $++;
            return t.first ?
                function(t, n, o) {
                    for (;
                        (t = t[i]);)
                        if (1 === t.nodeType || s) return e(t, n, o);
                    return !1;
                } :
                function(t, n, l) {
                    var d,
                        c,
                        u,
                        p = [k, a];
                    if (l) {
                        for (;
                            (t = t[i]);)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                        for (;
                            (t = t[i]);)
                            if (1 === t.nodeType || s)
                                if (((c = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                                else {
                                    if ((d = c[r]) && d[0] === k && d[1] === a) return (p[2] = d[2]);
                                    if (((c[r] = p), (p[2] = e(t, n, l)))) return !0;
                                }
                    return !1;
                };
        }

        function be(e) {
            return e.length > 1 ?
                function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0;
                } :
                e[0];
        }

        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), d && t.push(a)));
            return s;
        }

        function xe(e, t, n, i, o, r) {
            return (
                i && !i[w] && (i = xe(i)),
                o && !o[w] && (o = xe(o, r)),
                ae(function(r, s, a, l) {
                    var d,
                        c,
                        u,
                        p = [],
                        f = [],
                        h = s.length,
                        g =
                        r ||
                        (function(e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                            return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                        v = !e || (!r && t) ? g : we(g, p, e, a, l),
                        m = n ? (o || (r ? e : h || i) ? [] : s) : v;
                    if ((n && n(v, m, a, l), i))
                        for (d = we(m, f), i(d, [], a, l), c = d.length; c--;)(u = d[c]) && (m[f[c]] = !(v[f[c]] = u));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (d = [], c = m.length; c--;)(u = m[c]) && d.push((v[c] = u));
                                o(null, (m = []), d, l);
                            }
                            for (c = m.length; c--;)(u = m[c]) && (d = o ? L(r, u) : p[c]) > -1 && (r[d] = !(s[d] = u));
                        }
                    } else(m = we(m === s ? m.splice(h, m.length) : m)), o ? o(null, s, m, l) : q.apply(s, m);
                })
            );
        }

        function ke(e) {
            for (
                var t,
                    n,
                    o,
                    r = e.length,
                    s = i.relative[e[0].type],
                    a = s || i.relative[" "],
                    l = s ? 1 : 0,
                    c = ye(
                        function(e) {
                            return e === t;
                        },
                        a,
                        !0
                    ),
                    u = ye(
                        function(e) {
                            return L(t, e) > -1;
                        },
                        a,
                        !0
                    ),
                    p = [
                        function(e, n, i) {
                            var o = (!s && (i || n !== d)) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                            return (t = null), o;
                        },
                    ]; l < r; l++
            )
                if ((n = i.relative[e[l].type])) p = [ye(be(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return xe(l > 1 && be(p), l > 1 && me(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, l < o && ke(e.slice(l, o)), o < r && ke((e = e.slice(o))), o < r && me(e));
                    }
                    p.push(n);
                }
            return be(p);
        }

        function $e(e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                r = function(r, s, a, l, c) {
                    var u,
                        h,
                        v,
                        m = 0,
                        y = "0",
                        b = r && [],
                        w = [],
                        x = d,
                        $ = r || (o && i.find.TAG("*", c)),
                        C = (k += null == x ? 1 : Math.random() || 0.1),
                        T = $.length;
                    for (c && (d = s === f || s || c); y !== T && null != (u = $[y]); y++) {
                        if (o && u) {
                            for (h = 0, s || u.ownerDocument === f || (p(u), (a = !g));
                                (v = e[h++]);)
                                if (v(u, s || f, a)) {
                                    l.push(u);
                                    break;
                                }
                            c && (k = C);
                        }
                        n && ((u = !v && u) && m--, r && b.push(u));
                    }
                    if (((m += y), n && y !== m)) {
                        for (h = 0;
                            (v = t[h++]);) v(b, w, s, a);
                        if (r) {
                            if (m > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                            w = we(w);
                        }
                        q.apply(l, w), c && !r && w.length > 0 && m + t.length > 1 && re.uniqueSort(l);
                    }
                    return c && ((k = C), (d = x)), b;
                };
            return n ? ae(r) : r;
        }
        return (
            (ve.prototype = i.filters = i.pseudos),
            (i.setFilters = new ve()),
            (s = re.tokenize = function(e, t) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    c = T[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], d = i.preFilter; a;) {
                    for (s in ((n && !(o = B.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                            (n = !1),
                            (o = R.exec(a)) && ((n = o.shift()), r.push({
                                value: n,
                                type: o[0].replace(z, " ")
                            }), (a = a.slice(n.length))),
                            i.filter))
                        !(o = U[s].exec(a)) || (d[s] && !(o = d[s](o))) || ((n = o.shift()), r.push({
                            value: n,
                            type: s,
                            matches: o
                        }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? re.error(e) : T(e, l).slice(0);
            }),
            (a = re.compile = function(e, t) {
                var n,
                    i = [],
                    o = [],
                    r = S[e + " "];
                if (!r) {
                    for (t || (t = s(e)), n = t.length; n--;)(r = ke(t[n]))[w] ? i.push(r) : o.push(r);
                    (r = S(e, $e(o, i))).selector = e;
                }
                return r;
            }),
            (l = re.select = function(e, t, n, o) {
                var r,
                    l,
                    d,
                    c,
                    u,
                    p = "function" == typeof e && e,
                    f = !o && s((e = p.selector || e));
                if (((n = n || []), 1 === f.length)) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(d.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (r = U.needsContext.test(e) ? 0 : l.length; r-- && ((d = l[r]), !i.relative[(c = d.type)]);)
                        if ((u = i.find[c]) && (o = u(d.matches[0].replace(Z, ee), (J.test(l[0].type) && ge(t.parentNode)) || t))) {
                            if ((l.splice(r, 1), !(e = o.length && me(l)))) return q.apply(n, o), n;
                            break;
                        }
                }
                return (p || a(e, f))(o, t, !g, n, !t || (J.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = w.split("").sort(j).join("") === w),
            (n.detectDuplicates = !!u),
            p(),
            (n.sortDetached = le(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            le(function(e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            de("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
                le(function(e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            de("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            le(function(e) {
                return null == e.getAttribute("disabled");
            }) ||
            de(N, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }),
            re
        );
    })(e);
    (m.find = $), (m.expr = $.selectors), (m.expr[":"] = m.expr.pseudos), (m.uniqueSort = m.unique = $.uniqueSort), (m.text = $.getText), (m.isXMLDoc = $.isXML), (m.contains = $.contains), (m.escapeSelector = $.escape);
    var C = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && m(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        S = m.expr.match.needsContext,
        j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        E = /^.[^:#\[\.,]*$/;

    function A(e, t, n) {
        return m.isFunction(t) ?
            m.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n;
            }) :
            t.nodeType ?
            m.grep(e, function(e) {
                return (e === t) !== n;
            }) :
            "string" != typeof t ?
            m.grep(e, function(e) {
                return l.call(t, e) > -1 !== n;
            }) :
            E.test(t) ?
            m.filter(t, e, n) :
            ((t = m.filter(t, e)),
                m.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n && 1 === e.nodeType;
                }));
    }
    (m.filter = function(e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ?
            m.find.matchesSelector(i, e) ?
            [i] :
            [] :
            m.find.matches(
                e,
                m.grep(t, function(e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    m.fn.extend({
        find: function(e) {
            var t,
                n,
                i = this.length,
                o = this;
            if ("string" != typeof e)
                return this.pushStack(
                    m(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (m.contains(o[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < i; t++) m.find(e, o[t], n);
            return i > 1 ? m.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0));
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length;
        },
    });
    var D,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((m.fn.init = function(e, t, n) {
        var o, r;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || (!o[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (((t = t instanceof m ? t[0] : t), m.merge(this, m.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), j.test(o[1]) && m.isPlainObject(t)))
                    for (o in t) m.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this;
            }
            return (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m.isFunction(e) ? (void 0 !== n.ready ? n.ready(e) : e(m)) : m.makeArray(e, this);
    }).prototype = m.fn),
    (D = m(i));
    var q = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function L(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    m.fn.extend({
            has: function(e) {
                var t = m(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (m.contains(this, t[e])) return !0;
                });
            },
            closest: function(e, t) {
                var n,
                    i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && m(e);
                if (!S.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                                r.push(n);
                                break;
                            }
                return this.pushStack(r.length > 1 ? m.uniqueSort(r) : r);
            },
            index: function(e) {
                return e ? ("string" == typeof e ? l.call(m(e), this[0]) : l.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(e, t) {
                return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        m.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return C(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n);
                },
                next: function(e) {
                    return L(e, "nextSibling");
                },
                prev: function(e) {
                    return L(e, "previousSibling");
                },
                nextAll: function(e) {
                    return C(e, "nextSibling");
                },
                prevAll: function(e) {
                    return C(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return T(e.firstChild);
                },
                contents: function(e) {
                    return e.contentDocument || m.merge([], e.childNodes);
                },
            },
            function(e, t) {
                m.fn[e] = function(n, i) {
                    var o = m.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = m.filter(i, o)), this.length > 1 && (H[e] || m.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o);
                };
            }
        );
    var N = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e;
    }

    function M(e) {
        throw e;
    }

    function I(e, t, n) {
        var i;
        try {
            e && m.isFunction((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m.isFunction((i = e.then)) ? i.call(e, t, n) : t.call(void 0, e);
        } catch (e) {
            n.call(void 0, e);
        }
    }
    (m.Callbacks = function(e) {
        e =
            "string" == typeof e ?
            (function(e) {
                var t = {};
                return (
                    m.each(e.match(N) || [], function(e, n) {
                        t[n] = !0;
                    }),
                    t
                );
            })(e) :
            m.extend({}, e);
        var t,
            n,
            i,
            o,
            r = [],
            s = [],
            a = -1,
            l = function() {
                for (o = e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
            },
            d = {
                add: function() {
                    return (
                        r &&
                        (n && !t && ((a = r.length - 1), s.push(n)),
                            (function t(n) {
                                m.each(n, function(n, i) {
                                    m.isFunction(i) ? (e.unique && d.has(i)) || r.push(i) : i && i.length && "string" !== m.type(i) && t(i);
                                });
                            })(arguments),
                            n && !t && l()),
                        this
                    );
                },
                remove: function() {
                    return (
                        m.each(arguments, function(e, t) {
                            for (var n;
                                (n = m.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? m.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function() {
                    return r && (r = []), this;
                },
                disable: function() {
                    return (o = s = []), (r = n = ""), this;
                },
                disabled: function() {
                    return !r;
                },
                lock: function() {
                    return (o = s = []), n || t || (r = n = ""), this;
                },
                locked: function() {
                    return !!o;
                },
                fireWith: function(e, n) {
                    return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                },
                fire: function() {
                    return d.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!i;
                },
            };
        return d;
    }),
    m.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2],
                    ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"],
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i;
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return o.then(null, e);
                    },
                    pipe: function() {
                        var e = arguments;
                        return m
                            .Deferred(function(t) {
                                m.each(n, function(n, i) {
                                        var o = m.isFunction(e[i[4]]) && e[i[4]];
                                        r[i[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
                                        });
                                    }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function(t, i, o) {
                        var r = 0;

                        function s(t, n, i, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (d = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                            m.isFunction(d) ?
                                                o ?
                                                d.call(e, s(r, n, P, o), s(r, n, M, o)) :
                                                (r++, d.call(e, s(r, n, P, o), s(r, n, M, o), s(r, n, P, n.notifyWith))) :
                                                (i !== P && ((a = void 0), (l = [e])), (o || n.resolveWith)(a, l));
                                        }
                                    },
                                    c = o ?
                                    d :
                                    function() {
                                        try {
                                            d();
                                        } catch (e) {
                                            m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= r && (i !== M && ((a = void 0), (l = [e])), n.rejectWith(a, l));
                                        }
                                    };
                                t ? c() : (m.Deferred.getStackHook && (c.stackTrace = m.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return m
                            .Deferred(function(e) {
                                n[0][3].add(s(0, e, m.isFunction(o) ? o : P, e.notifyWith)), n[1][3].add(s(0, e, m.isFunction(t) ? t : P)), n[2][3].add(s(0, e, m.isFunction(i) ? i : M));
                            })
                            .promise();
                    },
                    promise: function(e) {
                        return null != e ? m.extend(e, o) : o;
                    },
                },
                r = {};
            return (
                m.each(n, function(e, t) {
                    var s = t[2],
                        a = t[5];
                    (o[t[1]] = s.add),
                    a &&
                        s.add(
                            function() {
                                i = a;
                            },
                            n[3 - e][2].disable,
                            n[0][2].lock
                        ),
                        s.add(t[3].fire),
                        (r[t[0]] = function() {
                            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                        }),
                        (r[t[0] + "With"] = s.fireWith);
                }),
                o.promise(r),
                t && t.call(r, r),
                r
            );
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = r.call(arguments),
                s = m.Deferred(),
                a = function(e) {
                    return function(n) {
                        (i[e] = this), (o[e] = arguments.length > 1 ? r.call(arguments) : n), --t || s.resolveWith(i, o);
                    };
                };
            if (t <= 1 && (I(e, s.done(a(n)).resolve, s.reject), "pending" === s.state() || m.isFunction(o[n] && o[n].then))) return s.then();
            for (; n--;) I(o[n], a(n), s.reject);
            return s.promise();
        },
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (m.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
    (m.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    });
    var W = m.Deferred();

    function z() {
        i.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), m.ready();
    }
    (m.fn.ready = function(e) {
        return (
            W.then(e).catch(function(e) {
                m.readyException(e);
            }),
            this
        );
    }),
    m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? m.readyWait++ : m.ready(!0);
            },
            ready: function(e) {
                (!0 === e ? --m.readyWait : m.isReady) || ((m.isReady = !0), (!0 !== e && --m.readyWait > 0) || W.resolveWith(i, [m]));
            },
        }),
        (m.ready.then = W.then),
        "complete" === i.readyState || ("loading" !== i.readyState && !i.documentElement.doScroll) ? e.setTimeout(m.ready) : (i.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var B = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == n;
            if ("object" === m.type(n))
                for (a in ((o = !0), n)) B(e, t, a, n[a], !0, r, s);
            else if (
                void 0 !== i &&
                ((o = !0),
                    m.isFunction(i) || (s = !0),
                    d &&
                    (s ?
                        (t.call(e, i), (t = null)) :
                        ((d = t),
                            (t = function(e, t, n) {
                                return d.call(m(e), n);
                            }))),
                    t)
            )
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : d ? t.call(e) : l ? t(e[0], n) : r;
        },
        R = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };

    function _() {
        this.expando = m.expando + _.uid++;
    }
    (_.uid = 1),
    (_.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || ((t = {}), R(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i,
                o = this.cache(e);
            if ("string" == typeof t) o[m.camelCase(t)] = n;
            else
                for (i in t) o[m.camelCase(i)] = t[i];
            return o;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n,
                i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    m.isArray(t) ? (t = t.map(m.camelCase)) : (t = (t = m.camelCase(t)) in i ? [t] : t.match(N) || []), (n = t.length);
                    for (; n--;) delete i[t[n]];
                }
                (void 0 === t || m.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !m.isEmptyObject(t);
        },
    });
    var Q = new _(),
        X = new _(),
        U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Y(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(G, "-$&").toLowerCase()), "string" == typeof(n = e.getAttribute(i)))) {
                try {
                    n = (function(e) {
                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : U.test(e) ? JSON.parse(e) : e));
                    })(n);
                } catch (e) {}
                X.set(e, t, n);
            } else n = void 0;
        return n;
    }
    m.extend({
            hasData: function(e) {
                return X.hasData(e) || Q.hasData(e);
            },
            data: function(e, t, n) {
                return X.access(e, t, n);
            },
            removeData: function(e, t) {
                X.remove(e, t);
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n);
            },
            _removeData: function(e, t) {
                Q.remove(e, t);
            },
        }),
        m.fn.extend({
            data: function(e, t) {
                var n,
                    i,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && ((o = X.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = m.camelCase(i.slice(5))), Y(r, i, o[i]));
                        Q.set(r, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e ?
                    this.each(function() {
                        X.set(this, e);
                    }) :
                    B(
                        this,
                        function(t) {
                            var n;
                            if (r && void 0 === t) {
                                if (void 0 !== (n = X.get(r, e))) return n;
                                if (void 0 !== (n = Y(r, e))) return n;
                            } else
                                this.each(function() {
                                    X.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function(e) {
                return this.each(function() {
                    X.remove(this, e);
                });
            },
        }),
        m.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = Q.get(e, t)), n && (!i || m.isArray(n) ? (i = Q.access(e, t, m.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = m.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = m._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(
                            e,
                            function() {
                                m.dequeue(e, t);
                            },
                            r
                        )),
                    !i && r && r.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                    Q.get(e, n) ||
                    Q.access(e, n, {
                        empty: m.Callbacks("once memory").add(function() {
                            Q.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        m.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n ?
                    m.queue(this[0], e) :
                    void 0 === t ?
                    this :
                    this.each(function() {
                        var n = m.queue(this, e, t);
                        m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    m.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n,
                    i = 1,
                    o = m.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--;)(n = Q.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t);
            },
        });
    var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        K = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        Z = function(e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display"));
        },
        ee = function(e, t, n, i) {
            var o,
                r,
                s = {};
            for (r in t)(s[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
            return o;
        };

    function te(e, t, n, i) {
        var o,
            r = 1,
            s = 20,
            a = i ?
            function() {
                return i.cur();
            } :
            function() {
                return m.css(e, t, "");
            },
            l = a(),
            d = (n && n[3]) || (m.cssNumber[t] ? "" : "px"),
            c = (m.cssNumber[t] || ("px" !== d && +l)) && K.exec(m.css(e, t));
        if (c && c[3] !== d) {
            (d = d || c[3]), (n = n || []), (c = +l || 1);
            do {
                (c /= r = r || ".5"), m.style(e, t, c + d);
            } while (r !== (r = a() / l) && 1 !== r && --s);
        }
        return n && ((c = +c || +l || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = d), (i.start = c), (i.end = o))), o;
    }
    var ne = {};

    function ie(e) {
        var t,
            n = e.ownerDocument,
            i = e.nodeName,
            o = ne[i];
        return o || ((t = n.body.appendChild(n.createElement(i))), (o = m.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (ne[i] = o), o);
    }

    function oe(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
            (i = e[r]).style &&
            ((n = i.style.display),
                t ? ("none" === n && ((o[r] = Q.get(i, "display") || null), o[r] || (i.style.display = "")), "" === i.style.display && Z(i) && (o[r] = ie(i))) : "none" !== n && ((o[r] = "none"), Q.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
    }
    m.fn.extend({
        show: function() {
            return oe(this, !0);
        },
        hide: function() {
            return oe(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function() {
                    Z(this) ? m(this).show() : m(this).hide();
                });
        },
    });
    var re = /^(?:checkbox|radio)$/i,
        se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };

    function de(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && m.nodeName(e, t)) ? m.merge([e], n) : n;
    }

    function ce(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (le.optgroup = le.option), (le.tbody = le.tfoot = le.colgroup = le.caption = le.thead), (le.th = le.td);
    var ue = /<|&#?\w+;/;

    function pe(e, t, n, i, o) {
        for (var r, s, a, l, d, c, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === m.type(r)) m.merge(p, r.nodeType ? [r] : r);
                else if (ue.test(r)) {
            for (s = s || u.appendChild(t.createElement("div")), a = (se.exec(r) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, s.innerHTML = l[1] + m.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
            m.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
        } else p.push(t.createTextNode(r));
        for (u.textContent = "", f = 0;
            (r = p[f++]);)
            if (i && m.inArray(r, i) > -1) o && o.push(r);
            else if (((d = m.contains(r.ownerDocument, r)), (s = de(u.appendChild(r), "script")), d && ce(s), n))
            for (c = 0;
                (r = s[c++]);) ae.test(r.type || "") && n.push(r);
        return u;
    }!(function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var fe = i.documentElement,
        he = /^key/,
        ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ve = /^([^.]*)(?:\.(.+)|)/;

    function me() {
        return !0;
    }

    function ye() {
        return !1;
    }

    function be() {
        try {
            return i.activeElement;
        } catch (e) {}
    }

    function we(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) we(e, a, n, i, t[a], r);
            return e;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = ye;
        else if (!o) return e;
        return (
            1 === r &&
            ((s = o),
                ((o = function(e) {
                    return m().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = m.guid++))),
            e.each(function() {
                m.event.add(this, t, o, i, n);
            })
        );
    }
    (m.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                d,
                c,
                u,
                p,
                f,
                h,
                g,
                v = Q.get(e);
            if (v)
                for (
                    n.handler && ((n = (r = n).handler), (o = r.selector)),
                    o && m.find.matchesSelector(fe, o),
                    n.guid || (n.guid = m.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (s = v.handle) ||
                    (s = v.handle = function(t) {
                        return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0;
                    }),
                    d = (t = (t || "").match(N) || [""]).length; d--;

                )
                    (f = g = (a = ve.exec(t[d]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                    ((u = m.event.special[f] || {}),
                        (f = (o ? u.delegateType : u.bindType) || f),
                        (u = m.event.special[f] || {}),
                        (c = m.extend({
                            type: f,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && m.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, r)),
                        (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
                        u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        (m.event.global[f] = !0));
        },
        remove: function(e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                d,
                c,
                u,
                p,
                f,
                h,
                g,
                v = Q.hasData(e) && Q.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match(N) || [""]).length; d--;)
                    if (((f = g = (a = ve.exec(t[d]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
                        for (u = m.event.special[f] || {}, p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;)
                            (c = p[r]),
                            (!o && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (a && !a.test(c.namespace)) ||
                            (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                            (p.splice(r, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                        s && !p.length && ((u.teardown && !1 !== u.teardown.call(e, h, v.handle)) || m.removeEvent(e, f, v.handle), delete l[f]);
                    } else
                        for (f in l) m.event.remove(e, f + t[d], n, i, !0);
                m.isEmptyObject(l) && Q.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = m.event.fix(e),
                l = new Array(arguments.length),
                d = (Q.get(this, "events") || {})[a.type] || [],
                c = m.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
                for (s = m.event.handlers.call(this, a, d), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();)
                        (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
                        ((a.handleObj = r), (a.data = r.data), void 0 !== (i = ((m.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = t[n]).selector + " ")] && (s[o] = i.needsContext ? m(o, this).index(d) > -1 : m.find(o, this, null, [d]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: d,
                            handlers: r
                        });
                    }
            return (d = this), l < t.length && a.push({
                elem: d,
                handlers: t.slice(l)
            }), a;
        },
        addProp: function(e, t) {
            Object.defineProperty(m.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m.isFunction(t) ?
                    function() {
                        if (this.originalEvent) return t(this.originalEvent);
                    } :
                    function() {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                },
            });
        },
        fix: function(e) {
            return e[m.expando] ? e : new m.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== be() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function() {
                    if (this === be() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && m.nodeName(this, "input")) return this.click(), !1;
                },
                _default: function(e) {
                    return m.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (m.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (m.Event = function(e, t) {
        return this instanceof m.Event ?
            (e && e.type ?
                ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? me : ye),
                    (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget)) :
                (this.type = e),
                t && m.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || m.now()),
                void(this[m.expando] = !0)) :
            new m.Event(e, t);
    }),
    (m.Event.prototype = {
        constructor: m.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = me), e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = me), e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = me), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        },
    }),
    m.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && he.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ge.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            m.event.addProp
        ),
        m.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            m.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === this || m.contains(this, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        m.fn.extend({
            on: function(e, t, n, i) {
                return we(this, e, t, n, i);
            },
            one: function(e, t, n, i) {
                return we(this, e, t, n, i, 1);
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), m(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ye),
                    this.each(function() {
                        m.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ce = /^true\/(.*)/,
        Te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Se(e, t) {
        return (m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0]) || e;
    }

    function je(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function Ee(e) {
        var t = Ce.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }

    function Ae(e, t) {
        var n, i, o, r, s, a, l, d;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && ((r = Q.access(e)), (s = Q.set(t, r)), (d = r.events)))
                for (o in (delete s.handle, (s.events = {}), d))
                    for (n = 0, i = d[o].length; n < i; n++) m.event.add(t, o, d[o][n]);
            X.hasData(e) && ((a = X.access(e)), (l = m.extend({}, a)), X.set(t, l));
        }
    }

    function De(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && re.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }

    function Oe(e, t, n, i) {
        t = s.apply([], t);
        var o,
            r,
            a,
            l,
            d,
            c,
            u = 0,
            p = e.length,
            f = p - 1,
            v = t[0],
            y = m.isFunction(v);
        if (y || (p > 1 && "string" == typeof v && !h.checkClone && $e.test(v)))
            return e.each(function(o) {
                var r = e.eq(o);
                y && (t[0] = v.call(this, o, r.html())), Oe(r, t, n, i);
            });
        if (p && ((r = (o = pe(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = m.map(de(o, "script"), je)).length; u < p; u++)(d = o), u !== f && ((d = m.clone(d, !0, !0)), l && m.merge(a, de(d, "script"))), n.call(e[u], d, u);
            if (l)
                for (c = a[a.length - 1].ownerDocument, m.map(a, Ee), u = 0; u < l; u++)
                    (d = a[u]), ae.test(d.type || "") && !Q.access(d, "globalEval") && m.contains(c, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : g(d.textContent.replace(Te, ""), c));
        }
        return e;
    }

    function qe(e, t, n) {
        for (var i, o = t ? m.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || m.cleanData(de(i)), i.parentNode && (n && m.contains(i.ownerDocument, i) && ce(de(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    m.extend({
            htmlPrefilter: function(e) {
                return e.replace(xe, "<$1></$2>");
            },
            clone: function(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a = e.cloneNode(!0),
                    l = m.contains(e.ownerDocument, e);
                if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || m.isXMLDoc(e)))
                    for (s = de(a), i = 0, o = (r = de(e)).length; i < o; i++) De(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || de(e), s = s || de(a), i = 0, o = r.length; i < o; i++) Ae(r[i], s[i]);
                    else Ae(e, a);
                return (s = de(a, "script")).length > 0 && ce(s, !l && de(e, "script")), a;
            },
            cleanData: function(e) {
                for (var t, n, i, o = m.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (R(n)) {
                        if ((t = n[Q.expando])) {
                            if (t.events)
                                for (i in t.events) o[i] ? m.event.remove(n, i) : m.removeEvent(n, i, t.handle);
                            n[Q.expando] = void 0;
                        }
                        n[X.expando] && (n[X.expando] = void 0);
                    }
            },
        }),
        m.fn.extend({
            detach: function(e) {
                return qe(this, e, !0);
            },
            remove: function(e) {
                return qe(this, e);
            },
            text: function(e) {
                return B(
                    this,
                    function(e) {
                        return void 0 === e ?
                            m.text(this) :
                            this.empty().each(function() {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return Oe(this, arguments, function(e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Se(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return Oe(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Se(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return Oe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return Oe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (m.cleanData(de(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return m.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return B(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ke.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = m.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (m.cleanData(de(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var e = [];
                return Oe(
                    this,
                    arguments,
                    function(t) {
                        var n = this.parentNode;
                        m.inArray(this, e) < 0 && (m.cleanData(de(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        m.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            m.fn[e] = function(e) {
                for (var n, i = [], o = m(e), r = o.length - 1, s = 0; s <= r; s++)(n = s === r ? this : this.clone(!0)), m(o[s])[t](n), a.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var He = /^margin/,
        Le = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
        Ne = function(t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        };

    function Pe(e, t, n) {
        var i,
            o,
            r,
            s,
            a = e.style;
        return (
            (n = n || Ne(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) || m.contains(e.ownerDocument, e) || (s = m.style(e, t)),
                !h.pixelMarginRight() && Le.test(s) && He.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
            void 0 !== s ? s + "" : s
        );
    }

    function Me(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            },
        };
    }!(function() {
        function t() {
            if (l) {
                (l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (l.innerHTML = ""), fe.appendChild(a);
                var t = e.getComputedStyle(l);
                (n = "1%" !== t.top), (s = "2px" === t.marginLeft), (o = "4px" === t.width), (l.style.marginRight = "50%"), (r = "4px" === t.marginRight), fe.removeChild(a), (l = null);
            }
        }
        var n,
            o,
            r,
            s,
            a = i.createElement("div"),
            l = i.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
                (l.cloneNode(!0).style.backgroundClip = ""),
                (h.clearCloneStyle = "content-box" === l.style.backgroundClip),
                (a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                a.appendChild(l),
                m.extend(h, {
                    pixelPosition: function() {
                        return t(), n;
                    },
                    boxSizingReliable: function() {
                        return t(), o;
                    },
                    pixelMarginRight: function() {
                        return t(), r;
                    },
                    reliableMarginLeft: function() {
                        return t(), s;
                    },
                }));
    })();
    var Ie = /^(none|table(?!-c[ea]).+)/,
        Fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ze = ["Webkit", "Moz", "ms"],
        Be = i.createElement("div").style;

    function Re(e) {
        if (e in Be) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
            if ((e = ze[n] + t) in Be) return e;
    }

    function _e(e, t, n) {
        var i = K.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function Qe(e, t, n, i, o) {
        var r,
            s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)
            "margin" === n && (s += m.css(e, n + J[r], !0, o)),
            i ?
            ("content" === n && (s -= m.css(e, "padding" + J[r], !0, o)), "margin" !== n && (s -= m.css(e, "border" + J[r] + "Width", !0, o))) :
            ((s += m.css(e, "padding" + J[r], !0, o)), "padding" !== n && (s += m.css(e, "border" + J[r] + "Width", !0, o)));
        return s;
    }

    function Xe(e, t, n) {
        var i,
            o = !0,
            r = Ne(e),
            s = "border-box" === m.css(e, "boxSizing", !1, r);
        if ((e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i)) {
            if ((((i = Pe(e, t, r)) < 0 || null == i) && (i = e.style[t]), Le.test(i))) return i;
            (o = s && (h.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
        }
        return i + Qe(e, t, n || (s ? "border" : "content"), o, r) + "px";
    }

    function Ue(e, t, n, i, o) {
        return new Ue.prototype.init(e, t, n, i, o);
    }
    m.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Pe(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        r,
                        s,
                        a = m.camelCase(t),
                        l = e.style;
                    return (
                        (t = m.cssProps[a] || (m.cssProps[a] = Re(a) || a)),
                        (s = m.cssHooks[t] || m.cssHooks[a]),
                        void 0 === n ?
                        s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ?
                        o :
                        l[t] :
                        ("string" === (r = typeof n) && (o = K.exec(n)) && o[1] && ((n = te(e, t, o)), (r = "number")),
                            void(
                                null != n &&
                                n == n &&
                                ("number" === r && (n += (o && o[3]) || (m.cssNumber[a] ? "" : "px")),
                                    h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l[t] = n))
                            ))
                    );
                }
            },
            css: function(e, t, n, i) {
                var o,
                    r,
                    s,
                    a = m.camelCase(t);
                return (
                    (t = m.cssProps[a] || (m.cssProps[a] = Re(a) || a)),
                    (s = m.cssHooks[t] || m.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
                    void 0 === o && (o = Pe(e, t, i)),
                    "normal" === o && t in We && (o = We[t]),
                    "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
                );
            },
        }),
        m.each(["height", "width"], function(e, t) {
            m.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return !Ie.test(m.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width) ?
                            Xe(e, t, i) :
                            ee(e, Fe, function() {
                                return Xe(e, t, i);
                            });
                },
                set: function(e, n, i) {
                    var o,
                        r = i && Ne(e),
                        s = i && Qe(e, t, i, "border-box" === m.css(e, "boxSizing", !1, r), r);
                    return s && (o = K.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = m.css(e, t))), _e(0, n, s);
                },
            };
        }),
        (m.cssHooks.marginLeft = Me(h.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(Pe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        ee(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        m.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            (m.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + J[i] + t] = r[i] || r[i - 2] || r[0];
                    return o;
                },
            }),
            He.test(e) || (m.cssHooks[e + t].set = _e);
        }),
        m.fn.extend({
            css: function(e, t) {
                return B(
                    this,
                    function(e, t, n) {
                        var i,
                            o,
                            r = {},
                            s = 0;
                        if (m.isArray(t)) {
                            for (i = Ne(e), o = t.length; s < o; s++) r[t[s]] = m.css(e, t[s], !1, i);
                            return r;
                        }
                        return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        }),
        (m.Tween = Ue),
        (Ue.prototype = {
            constructor: Ue,
            init: function(e, t, n, i, o, r) {
                (this.elem = e), (this.prop = n), (this.easing = o || m.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (m.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
                var e = Ue.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ue.propHooks._default.get(this);
            },
            run: function(e) {
                var t,
                    n = Ue.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ue.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Ue.prototype.init.prototype = Ue.prototype),
        (Ue.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function(e) {
                    m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : m.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (m.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (m.fx = Ue.prototype.init),
        (m.fx.step = {});
    var Ge,
        Ye,
        Ve = /^(?:toggle|show|hide)$/,
        Ke = /queueHooks$/;

    function Je() {
        Ye && (e.requestAnimationFrame(Je), m.fx.tick());
    }

    function Ze() {
        return (
            e.setTimeout(function() {
                Ge = void 0;
            }),
            (Ge = m.now())
        );
    }

    function et(e, t) {
        var n,
            i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = J[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }

    function tt(e, t, n) {
        for (var i, o = (nt.tweeners[t] || []).concat(nt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if ((i = o[r].call(n, t, e))) return i;
    }

    function nt(e, t, n) {
        var i,
            o,
            r = 0,
            s = nt.prefilters.length,
            a = m.Deferred().always(function() {
                delete l.elem;
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ge || Ze(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), r = 0, s = d.tweens.length; r < s; r++) d.tweens[r].run(i);
                return a.notifyWith(e, [d, i, n]), i < 1 && s ? n : (a.resolveWith(e, [d]), !1);
            },
            d = a.promise({
                elem: e,
                props: m.extend({}, t),
                opts: m.extend(!0, {
                    specialEasing: {},
                    easing: m.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ge || Ze(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = m.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i;
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) d.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [d, 1, 0]), a.resolveWith(e, [d, t])) : a.rejectWith(e, [d, t]), this;
                },
            }),
            c = d.props;
        for (
            (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (((o = t[(i = m.camelCase(n))]), (r = e[n]), m.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = m.cssHooks[i]) && ("expand" in s)))
                        for (n in ((r = s.expand(r)), delete e[i], r))(n in e) || ((e[n] = r[n]), (t[n] = o));
                    else t[i] = o;
            })(c, d.opts.specialEasing); r < s; r++
        )
            if ((i = nt.prefilters[r].call(d, e, c, d.opts))) return m.isFunction(i.stop) && (m._queueHooks(d.elem, d.opts.queue).stop = m.proxy(i.stop, i)), i;
        return (
            m.map(c, tt, d),
            m.isFunction(d.opts.start) && d.opts.start.call(e, d),
            m.fx.timer(m.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })),
            d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        );
    }
    (m.Animation = m.extend(nt, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return te(n.elem, e, K.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            m.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
            for (var n, i = 0, o = e.length; i < o; i++)(n = e[i]), (nt.tweeners[n] = nt.tweeners[n] || []), nt.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    g = e.nodeType && Z(e),
                    v = Q.get(e, "fxshow");
                for (i in (n.queue ||
                        (null == (s = m._queueHooks(e, "fx")).unqueued &&
                            ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function() {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            p.always(function() {
                                p.always(function() {
                                    s.unqueued--, m.queue(e, "fx").length || s.empty.fire();
                                });
                            })),
                        t))
                    if (((o = t[i]), Ve.test(o))) {
                        if ((delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                            if ("show" !== o || !v || void 0 === v[i]) continue;
                            g = !0;
                        }
                        f[i] = (v && v[i]) || m.style(e, i);
                    }
                if ((l = !m.isEmptyObject(t)) || !m.isEmptyObject(f))
                    for (i in (u &&
                            1 === e.nodeType &&
                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                null == (d = v && v.display) && (d = Q.get(e, "display")),
                                "none" === (c = m.css(e, "display")) && (d ? (c = d) : (oe([e], !0), (d = e.style.display || d), (c = m.css(e, "display")), oe([e]))),
                                ("inline" === c || ("inline-block" === c && null != d)) &&
                                "none" === m.css(e, "float") &&
                                (l ||
                                    (p.done(function() {
                                            h.display = d;
                                        }),
                                        null == d && ((c = h.display), (d = "none" === c ? "" : c))),
                                    (h.display = "inline-block"))),
                            n.overflow &&
                            ((h.overflow = "hidden"),
                                p.always(function() {
                                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            f))
                        l ||
                        (v ? "hidden" in v && (g = v.hidden) : (v = Q.access(e, "fxshow", {
                                display: d
                            })),
                            r && (v.hidden = !g),
                            g && oe([e], !0),
                            p.done(function() {
                                for (i in (g || oe([e]), Q.remove(e, "fxshow"), f)) m.style(e, i, f[i]);
                            })),
                        (l = tt(g ? v[i] : 0, i, p)),
                        i in v || ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? nt.prefilters.unshift(e) : nt.prefilters.push(e);
        },
    })),
    (m.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? m.extend({}, e) : {
            complete: n || (!n && t) || (m.isFunction(e) && e),
            duration: e,
            easing: (n && t) || (t && !m.isFunction(t) && t)
        };
        return (
            m.fx.off || i.hidden ? (o.duration = 0) : "number" != typeof o.duration && (o.duration in m.fx.speeds ? (o.duration = m.fx.speeds[o.duration]) : (o.duration = m.fx.speeds._default)),
            (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
            (o.old = o.complete),
            (o.complete = function() {
                m.isFunction(o.old) && o.old.call(this), o.queue && m.dequeue(this, o.queue);
            }),
            o
        );
    }),
    m.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Z).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i);
            },
            animate: function(e, t, n, i) {
                var o = m.isEmptyObject(e),
                    r = m.speed(t, n, i),
                    s = function() {
                        var t = nt(this, m.extend({}, e), r);
                        (o || Q.get(this, "finish")) && t.stop(!0);
                    };
                return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = m.timers,
                            s = Q.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && Ke.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                        (!t && n) || m.dequeue(this, e);
                    })
                );
            },
            finish: function(e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t,
                            n = Q.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = m.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, m.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        m.each(["toggle", "show", "hide"], function(e, t) {
            var n = m.fn[t];
            m.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(et(t, !0), e, i, o);
            };
        }),
        m.each({
            slideDown: et("show"),
            slideUp: et("hide"),
            slideToggle: et("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            m.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i);
            };
        }),
        (m.timers = []),
        (m.fx.tick = function() {
            var e,
                t = 0,
                n = m.timers;
            for (Ge = m.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || m.fx.stop(), (Ge = void 0);
        }),
        (m.fx.timer = function(e) {
            m.timers.push(e), e() ? m.fx.start() : m.timers.pop();
        }),
        (m.fx.interval = 13),
        (m.fx.start = function() {
            Ye || (Ye = e.requestAnimationFrame ? e.requestAnimationFrame(Je) : e.setInterval(m.fx.tick, m.fx.interval));
        }),
        (m.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(Ye) : e.clearInterval(Ye), (Ye = null);
        }),
        (m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }),
        (m.fn.delay = function(t, n) {
            return (
                (t = (m.fx && m.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o);
                    };
                })
            );
        }),
        (function() {
            var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = i.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var it,
        ot = m.expr.attrHandle;
    m.fn.extend({
            attr: function(e, t) {
                return B(this, m.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    m.removeAttr(this, e);
                });
            },
        }),
        m.extend({
            attr: function(e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute ?
                        m.prop(e, t, n) :
                        ((1 === r && m.isXMLDoc(e)) || (o = m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? it : void 0)),
                            void 0 !== n ?
                            null === n ?
                            void m.removeAttr(e, t) :
                            o && "set" in o && void 0 !== (i = o.set(e, n, t)) ?
                            i :
                            (e.setAttribute(t, n + ""), n) :
                            o && "get" in o && null !== (i = o.get(e, t)) ?
                            i :
                            null == (i = m.find.attr(e, t)) ?
                            void 0 :
                            i);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!h.radioValue && "radio" === t && m.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function(e, t) {
                var n,
                    i = 0,
                    o = t && t.match(N);
                if (o && 1 === e.nodeType)
                    for (;
                        (n = o[i++]);) e.removeAttribute(n);
            },
        }),
        (it = {
            set: function(e, t, n) {
                return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ot[t] || m.find.attr;
            ot[t] = function(e, t, i) {
                var o,
                    r,
                    s = t.toLowerCase();
                return i || ((r = ot[s]), (ot[s] = o), (o = null != n(e, t, i) ? s : null), (ot[s] = r)), o;
            };
        });
    var rt = /^(?:input|select|textarea|button)$/i,
        st = /^(?:a|area)$/i;

    function at(e) {
        return (e.match(N) || []).join(" ");
    }

    function lt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    m.fn.extend({
            prop: function(e, t) {
                return B(this, m.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[m.propFix[e] || e];
                });
            },
        }),
        m.extend({
            prop: function(e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && m.isXMLDoc(e)) || ((t = m.propFix[t] || t), (o = m.propHooks[t])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = m.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : rt.test(e.nodeName) || (st.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
        }),
        h.optSelected ||
        (m.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            m.propFix[this.toLowerCase()] = this;
        }),
        m.fn.extend({
            addClass: function(e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l = 0;
                if (m.isFunction(e))
                    return this.each(function(t) {
                        m(this).addClass(e.call(this, t, lt(this)));
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(N) || [];
                        (n = this[l++]);)
                        if (((o = lt(n)), (i = 1 === n.nodeType && " " + at(o) + " "))) {
                            for (s = 0;
                                (r = t[s++]);) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = at(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function(e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l = 0;
                if (m.isFunction(e))
                    return this.each(function(t) {
                        m(this).removeClass(e.call(this, t, lt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(N) || [];
                        (n = this[l++]);)
                        if (((o = lt(n)), (i = 1 === n.nodeType && " " + at(o) + " "))) {
                            for (s = 0;
                                (r = t[s++]);)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = at(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ?
                    t ?
                    this.addClass(e) :
                    this.removeClass(e) :
                    m.isFunction(e) ?
                    this.each(function(n) {
                        m(this).toggleClass(e.call(this, n, lt(this), t), t);
                    }) :
                    this.each(function() {
                        var t, i, o, r;
                        if ("string" === n)
                            for (i = 0, o = m(this), r = e.match(N) || [];
                                (t = r[i++]);) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(void 0 !== e && "boolean" !== n) || ((t = lt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
                    });
            },
            hasClass: function(e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " ";
                    (n = this[i++]);)
                    if (1 === n.nodeType && (" " + at(lt(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            },
        });
    var dt = /\r/g;
    m.fn.extend({
            val: function(e) {
                var t,
                    n,
                    i,
                    o = this[0];
                return arguments.length ?
                    ((i = m.isFunction(e)),
                        this.each(function(n) {
                            var o;
                            1 === this.nodeType &&
                                (null == (o = i ? e.call(this, n, m(this).val()) : e) ?
                                    (o = "") :
                                    "number" == typeof o ?
                                    (o += "") :
                                    m.isArray(o) &&
                                    (o = m.map(o, function(e) {
                                        return null == e ? "" : e + "";
                                    })),
                                    ((t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                        })) :
                    o ?
                    (t = m.valHooks[o.type] || m.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ?
                    n :
                    "string" == typeof(n = o.value) ?
                    n.replace(dt, "") :
                    null == n ?
                    "" :
                    n :
                    void 0;
            },
        }),
        m.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = m.find.attr(e, "value");
                        return null != t ? t : at(m.text(e));
                    },
                },
                select: {
                    get: function(e) {
                        var t,
                            n,
                            i,
                            o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                if (((t = m(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = m.makeArray(t), s = o.length; s--;)((i = o[s]).selected = m.inArray(m.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        m.each(["radio", "checkbox"], function() {
            (m.valHooks[this] = {
                set: function(e, t) {
                    if (m.isArray(t)) return (e.checked = m.inArray(m(e).val(), t) > -1);
                },
            }),
            h.checkOn ||
                (m.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        });
    var ct = /^(?:focusinfocus|focusoutblur)$/;
    m.extend(m.event, {
            trigger: function(t, n, o, r) {
                var s,
                    a,
                    l,
                    d,
                    c,
                    p,
                    f,
                    h = [o || i],
                    g = u.call(t, "type") ? t.type : t,
                    v = u.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                    ((a = l = o = o || i),
                        3 !== o.nodeType &&
                        8 !== o.nodeType &&
                        !ct.test(g + m.event.triggered) &&
                        (g.indexOf(".") > -1 && ((v = g.split(".")), (g = v.shift()), v.sort()),
                            (c = g.indexOf(":") < 0 && "on" + g),
                            ((t = t[m.expando] ? t : new m.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                            (t.namespace = v.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = o),
                            (n = null == n ? [t] : m.makeArray(n, [t])),
                            (f = m.event.special[g] || {}),
                            r || !f.trigger || !1 !== f.trigger.apply(o, n)))
                ) {
                    if (!r && !f.noBubble && !m.isWindow(o)) {
                        for (d = f.delegateType || g, ct.test(d + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (l = a);
                        l === (o.ownerDocument || i) && h.push(l.defaultView || l.parentWindow || e);
                    }
                    for (s = 0;
                        (a = h[s++]) && !t.isPropagationStopped();)
                        (t.type = s > 1 ? d : f.bindType || g),
                        (p = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && p.apply(a, n),
                        (p = c && a[c]) && p.apply && R(a) && ((t.result = p.apply(a, n)), !1 === t.result && t.preventDefault());
                    return (
                        (t.type = g),
                        r ||
                        t.isDefaultPrevented() ||
                        (f._default && !1 !== f._default.apply(h.pop(), n)) ||
                        !R(o) ||
                        (c && m.isFunction(o[g]) && !m.isWindow(o) && ((l = o[c]) && (o[c] = null), (m.event.triggered = g), o[g](), (m.event.triggered = void 0), l && (o[c] = l))),
                        t.result
                    );
                }
            },
            simulate: function(e, t, n) {
                var i = m.extend(new m.Event(), n, {
                    type: e,
                    isSimulated: !0
                });
                m.event.trigger(i, null, t);
            },
        }),
        m.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    m.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return m.event.trigger(e, t, n, !0);
            },
        }),
        m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            m.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        m.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        (h.focusin = "onfocusin" in e),
        h.focusin ||
        m.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                m.event.simulate(t, e.target, m.event.fix(e));
            };
            m.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Q.access(i, t);
                    o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1);
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Q.access(i, t) - 1;
                    o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t));
                },
            };
        });
    var ut = e.location,
        pt = m.now(),
        ft = /\?/;
    m.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || m.error("Invalid XML: " + t), n;
    };
    var ht = /\[\]$/,
        gt = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        mt = /^(?:input|select|textarea|keygen)/i;

    function yt(e, t, n, i) {
        var o;
        if (m.isArray(t))
            m.each(t, function(t, o) {
                n || ht.test(e) ? i(e, o) : yt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
            });
        else if (n || "object" !== m.type(t)) i(e, t);
        else
            for (o in t) yt(e + "[" + o + "]", t[o], n, i);
    }
    (m.param = function(e, t) {
        var n,
            i = [],
            o = function(e, t) {
                var n = m.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (m.isArray(e) || (e.jquery && !m.isPlainObject(e)))
            m.each(e, function() {
                o(this.name, this.value);
            });
        else
            for (n in e) yt(n, e[n], t, o);
        return i.join("&");
    }),
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                    var e = m.prop(this, "elements");
                    return e ? m.makeArray(e) : this;
                })
                .filter(function() {
                    var e = this.type;
                    return this.name && !m(this).is(":disabled") && mt.test(this.nodeName) && !vt.test(e) && (this.checked || !re.test(e));
                })
                .map(function(e, t) {
                    var n = m(this).val();
                    return null == n ?
                        null :
                        m.isArray(n) ?
                        m.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(gt, "\r\n")
                            };
                        }) :
                        {
                            name: t.name,
                            value: n.replace(gt, "\r\n")
                        };
                })
                .get();
        },
    });
    var bt = /%20/g,
        wt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        Ct = /^\/\//,
        Tt = {},
        St = {},
        jt = "*/".concat("*"),
        Et = i.createElement("a");

    function At(e) {
        return function(t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                o = 0,
                r = t.toLowerCase().match(N) || [];
            if (m.isFunction(n))
                for (;
                    (i = r[o++]);) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }

    function Dt(e, t, n, i) {
        var o = {},
            r = e === St;

        function s(a) {
            var l;
            return (
                (o[a] = !0),
                m.each(e[a] || [], function(e, a) {
                    var d = a(t, n, i);
                    return "string" != typeof d || r || o[d] ? (r ? !(l = d) : void 0) : (t.dataTypes.unshift(d), s(d), !1);
                }),
                l
            );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
    }

    function Ot(e, t) {
        var n,
            i,
            o = m.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && m.extend(!0, e, i), e;
    }
    (Et.href = ut.href),
    m.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ut.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": m.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                },
            },
            ajaxSetup: function(e, t) {
                return t ? Ot(Ot(e, m.ajaxSettings), t) : Ot(m.ajaxSettings, e);
            },
            ajaxPrefilter: At(Tt),
            ajaxTransport: At(St),
            ajax: function(t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    c,
                    u,
                    p,
                    f,
                    h = m.ajaxSetup({}, n),
                    g = h.context || h,
                    v = h.context && (g.nodeType || g.jquery) ? m(g) : m.event,
                    y = m.Deferred(),
                    b = m.Callbacks("once memory"),
                    w = h.statusCode || {},
                    x = {},
                    k = {},
                    $ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {};
                                        (t = kt.exec(s));) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function() {
                            return c ? s : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e), (x[e] = t)), this;
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) C.always(e[C.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || $;
                            return o && o.abort(t), T(0, t), this;
                        },
                    };
                if (
                    (y.promise(C),
                        (h.url = ((t || h.url || ut.href) + "").replace(Ct, ut.protocol + "//")),
                        (h.type = n.method || n.type || h.method || h.type),
                        (h.dataTypes = (h.dataType || "*").toLowerCase().match(N) || [""]),
                        null == h.crossDomain)
                ) {
                    d = i.createElement("a");
                    try {
                        (d.href = h.url), (d.href = d.href), (h.crossDomain = Et.protocol + "//" + Et.host != d.protocol + "//" + d.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = m.param(h.data, h.traditional)), Dt(Tt, h, n, C), c)) return C;
                for (p in ((u = m.event && h.global) && 0 == m.active++ && m.event.trigger("ajaxStart"),
                        (h.type = h.type.toUpperCase()),
                        (h.hasContent = !$t.test(h.type)),
                        (r = h.url.replace(wt, "")),
                        h.hasContent ?
                        h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(bt, "+")) :
                        ((f = h.url.slice(r.length)), h.data && ((r += (ft.test(r) ? "&" : "?") + h.data), delete h.data), !1 === h.cache && ((r = r.replace(xt, "$1")), (f = (ft.test(r) ? "&" : "?") + "_=" + pt++ + f)), (h.url = r + f)),
                        h.ifModified && (m.lastModified[r] && C.setRequestHeader("If-Modified-Since", m.lastModified[r]), m.etag[r] && C.setRequestHeader("If-None-Match", m.etag[r])),
                        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                        C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : h.accepts["*"]),
                        h.headers))
                    C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
                if ((($ = "abort"), b.add(h.complete), C.done(h.success), C.fail(h.error), (o = Dt(St, h, n, C)))) {
                    if (((C.readyState = 1), u && v.trigger("ajaxSend", [C, h]), c)) return C;
                    h.async &&
                        h.timeout > 0 &&
                        (l = e.setTimeout(function() {
                            C.abort("timeout");
                        }, h.timeout));
                    try {
                        (c = !1), o.send(x, T);
                    } catch (e) {
                        if (c) throw e;
                        T(-1, e);
                    }
                } else T(-1, "No Transport");

                function T(t, n, i, a) {
                    var d,
                        p,
                        f,
                        x,
                        k,
                        $ = n;
                    c ||
                        ((c = !0),
                            l && e.clearTimeout(l),
                            (o = void 0),
                            (s = a || ""),
                            (C.readyState = t > 0 ? 4 : 0),
                            (d = (t >= 200 && t < 300) || 304 === t),
                            i &&
                            (x = (function(e, t, n) {
                                for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || e.converters[o + " " + l[0]]) {
                                            r = o;
                                            break;
                                        }
                                        s || (s = o);
                                    }
                                    r = r || s;
                                }
                                if (r) return r !== l[0] && l.unshift(r), n[r];
                            })(h, C, i)),
                            (x = (function(e, t, n, i) {
                                var o,
                                    r,
                                    s,
                                    a,
                                    l,
                                    d = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                                for (r = c.shift(); r;)
                                    if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = c.shift())))
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l !== r) {
                                    if (!(s = d[l + " " + r] || d["* " + r]))
                                        for (o in d)
                                            if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                                                !0 === s ? (s = d[o]) : !0 !== d[o] && ((r = a[0]), c.unshift(a[1]));
                                                break;
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws) t = s(t);
                                        else
                                            try {
                                                t = s(t);
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + l + " to " + r
                                                };
                                            }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            })(h, x, C, d)),
                            d ?
                            (h.ifModified && ((k = C.getResponseHeader("Last-Modified")) && (m.lastModified[r] = k), (k = C.getResponseHeader("etag")) && (m.etag[r] = k)),
                                204 === t || "HEAD" === h.type ? ($ = "nocontent") : 304 === t ? ($ = "notmodified") : (($ = x.state), (p = x.data), (d = !(f = x.error)))) :
                            ((f = $), (!t && $) || (($ = "error"), t < 0 && (t = 0))),
                            (C.status = t),
                            (C.statusText = (n || $) + ""),
                            d ? y.resolveWith(g, [p, $, C]) : y.rejectWith(g, [C, $, f]),
                            C.statusCode(w),
                            (w = void 0),
                            u && v.trigger(d ? "ajaxSuccess" : "ajaxError", [C, h, d ? p : f]),
                            b.fireWith(g, [C, $]),
                            u && (v.trigger("ajaxComplete", [C, h]), --m.active || m.event.trigger("ajaxStop")));
                }
                return C;
            },
            getJSON: function(e, t, n) {
                return m.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return m.get(e, void 0, t, "script");
            },
        }),
        m.each(["get", "post"], function(e, t) {
            m[t] = function(e, n, i, o) {
                return m.isFunction(n) && ((o = o || i), (i = n), (n = void 0)), m.ajax(m.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, m.isPlainObject(e) && e));
            };
        }),
        (m._evalUrl = function(e) {
            return m.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            });
        }),
        m.fn.extend({
            wrapAll: function(e) {
                var t;
                return (
                    this[0] &&
                    (m.isFunction(e) && (e = e.call(this[0])),
                        (t = m(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function(e) {
                return m.isFunction(e) ?
                    this.each(function(t) {
                        m(this).wrapInner(e.call(this, t));
                    }) :
                    this.each(function() {
                        var t = m(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function(e) {
                var t = m.isFunction(e);
                return this.each(function(n) {
                    m(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function() {
                        m(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (m.expr.pseudos.hidden = function(e) {
            return !m.expr.pseudos.visible(e);
        }),
        (m.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (m.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var qt = {
            0: 200,
            1223: 204
        },
        Ht = m.ajaxSettings.xhr();
    (h.cors = !!Ht && "withCredentials" in Ht),
    (h.ajax = Ht = !!Ht),
    m.ajaxTransport(function(t) {
            var n, i;
            if (h.cors || (Ht && !t.crossDomain))
                return {
                    send: function(o, r) {
                        var s,
                            a = t.xhr();
                        if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(s, o[s]);
                        (n = function(e) {
                            return function() {
                                n &&
                                    ((n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                                        "abort" === e ?
                                        a.abort() :
                                        "error" === e ?
                                        "number" != typeof a.status ?
                                        r(0, "error") :
                                        r(a.status, a.statusText) :
                                        r(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()));
                            };
                        }),
                        (a.onload = n()),
                        (i = a.onerror = n("error")),
                        void 0 !== a.onabort ?
                            (a.onabort = i) :
                            (a.onreadystatechange = function() {
                                4 === a.readyState &&
                                    e.setTimeout(function() {
                                        n && i();
                                    });
                            }),
                            (n = n("abort"));
                        try {
                            a.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function() {
                        n && n();
                    },
                };
        }),
        m.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        m.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return m.globalEval(e), e;
                },
            },
        }),
        m.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        m.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain)
                return {
                    send: function(o, r) {
                        (t = m("<script>")
                            .prop({
                                charset: e.scriptCharset,
                                src: e.url
                            })
                            .on(
                                "load error",
                                (n = function(e) {
                                    t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                        i.head.appendChild(t[0]);
                    },
                    abort: function() {
                        n && n();
                    },
                };
        });
    var Lt = [],
        Nt = /(=)\?(?=&|$)|\?\?/;

    function Pt(e) {
        return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    m.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Lt.pop() || m.expando + "_" + pt++;
                return (this[e] = !0), e;
            },
        }),
        m.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o,
                r,
                s,
                a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (o = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    a ? (t[a] = t[a].replace(Nt, "$1" + o)) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    (t.converters["script json"] = function() {
                        return s || m.error(o + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (r = e[o]),
                    (e[o] = function() {
                        s = arguments;
                    }),
                    i.always(function() {
                        void 0 === r ? m(e).removeProp(o) : (e[o] = r), t[o] && ((t.jsonpCallback = n.jsonpCallback), Lt.push(o)), s && m.isFunction(r) && r(s[0]), (s = r = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function() {
            var e = i.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (m.parseHTML = function(e, t, n) {
            return "string" != typeof e ?
                [] :
                ("boolean" == typeof t && ((n = t), (t = !1)),
                    t || (h.createHTMLDocument ? (((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href), t.head.appendChild(o)) : (t = i)),
                    (s = !n && []),
                    (r = j.exec(e)) ? [t.createElement(r[1])] : ((r = pe([e], t, s)), s && s.length && m(s).remove(), m.merge([], r.childNodes)));
            var o, r, s;
        }),
        (m.fn.load = function(e, t, n) {
            var i,
                o,
                r,
                s = this,
                a = e.indexOf(" ");
            return (
                a > -1 && ((i = at(e.slice(a))), (e = e.slice(0, a))),
                m.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                s.length > 0 &&
                m
                .ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                })
                .done(function(e) {
                    (r = arguments), s.html(i ? m("<div>").append(m.parseHTML(e)).find(i) : e);
                })
                .always(
                    n &&
                    function(e, t) {
                        s.each(function() {
                            n.apply(this, r || [e.responseText, t, e]);
                        });
                    }
                ),
                this
            );
        }),
        m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            m.fn[t] = function(e) {
                return this.on(t, e);
            };
        }),
        (m.expr.pseudos.animated = function(e) {
            return m.grep(m.timers, function(t) {
                return e === t.elem;
            }).length;
        }),
        (m.offset = {
            setOffset: function(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    d = m.css(e, "position"),
                    c = m(e),
                    u = {};
                "static" === d && (e.style.position = "relative"),
                    (a = c.offset()),
                    (r = m.css(e, "top")),
                    (l = m.css(e, "left")),
                    ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1 ? ((s = (i = c.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                    m.isFunction(t) && (t = t.call(e, n, m.extend({}, a))),
                    null != t.top && (u.top = t.top - a.top + s),
                    null != t.left && (u.left = t.left - a.left + o),
                    "using" in t ? t.using.call(e, u) : c.css(u);
            },
        }),
        m.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ?
                        this :
                        this.each(function(t) {
                            m.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    i,
                    o,
                    r = this[0];
                return r ?
                    r.getClientRects().length ?
                    (i = r.getBoundingClientRect()).width || i.height ?
                    ((n = Pt((o = r.ownerDocument))), (t = o.documentElement), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) :
                    i :
                    {
                        top: 0,
                        left: 0
                    } :
                    void 0;
            },
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return (
                        "fixed" === m.css(n, "position") ?
                        (t = n.getBoundingClientRect()) :
                        ((e = this.offsetParent()), (t = this.offset()), m.nodeName(e[0], "html") || (i = e.offset()), (i = {
                            top: i.top + m.css(e[0], "borderTopWidth", !0),
                            left: i.left + m.css(e[0], "borderLeftWidth", !0)
                        })), {
                            top: t.top - i.top - m.css(n, "marginTop", !0),
                            left: t.left - i.left - m.css(n, "marginLeft", !0)
                        }
                    );
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === m.css(e, "position");) e = e.offsetParent;
                    return e || fe;
                });
            },
        }),
        m.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            m.fn[e] = function(i) {
                return B(
                    this,
                    function(e, i, o) {
                        var r = Pt(e);
                        return void 0 === o ? (r ? r[t] : e[i]) : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o));
                    },
                    e,
                    i,
                    arguments.length
                );
            };
        }),
        m.each(["top", "left"], function(e, t) {
            m.cssHooks[t] = Me(h.pixelPosition, function(e, n) {
                if (n) return (n = Pe(e, t)), Le.test(n) ? m(e).position()[t] + "px" : n;
            });
        }),
        m.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            m.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                m.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return B(
                        this,
                        function(t, n, o) {
                            var r;
                            return m.isWindow(t) ?
                                0 === i.indexOf("outer") ?
                                t["inner" + e] :
                                t.document.documentElement["client" + e] :
                                9 === t.nodeType ?
                                ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) :
                                void 0 === o ?
                                m.css(t, n, a) :
                                m.style(t, n, o, a);
                        },
                        t,
                        s ? o : void 0,
                        s
                    );
                };
            });
        }),
        m.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (m.parseJSON = JSON.parse),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
            return m;
        });
    var Mt = e.jQuery,
        It = e.$;
    return (
        (m.noConflict = function(t) {
            return e.$ === m && (e.$ = It), t && e.jQuery === m && (e.jQuery = Mt), m;
        }),
        t || (e.jQuery = e.$ = m),
        m
    );
}),

$(document).ready(function() {
        var e = "light";
        $("body").hasClass("dark") && (e = "dark");
        var t = localStorage.getItem("night"),
            n = localStorage.getItem("day"),
            i = $(".mode-checkbox-label").attr("data-dark-title"),
            o = $(".mode-checkbox-label").attr("data-light-title");
        "light" == e &&
            (t ? ($("body").addClass("dark"), $("body").addClass("dark-loaded"), $(".mode-checkbox-label").text(o), $("#mode-checkbox").prop("checked", !0)) : $(".mode-checkbox-label").text(i),
                $("#mode-checkbox").on("change", function() {
                    localStorage.getItem("night");
                    $(this).is(":checked") ? ($("body").addClass("dark"), localStorage.setItem("night", 1)) : ($("body").removeClass("dark"), localStorage.removeItem("night"));
                })),
            "dark" == e &&
            (n ? ($("body").removeClass("dark"), $("body").removeClass("dark-loaded"), $("#mode-checkbox").removeAttr("checked"), $(".mode-checkbox-label").text(i)) : $(".mode-checkbox-label").text(o),
                $("#mode-checkbox").on("change", function() {
                    localStorage.getItem("day");
                    $(this).is(":checked") ? ($("body").addClass("dark"), localStorage.removeItem("day")) : ($("body").removeClass("dark"), localStorage.setItem("day", 1));
                })),
            setTimeout(function() {
                $(".mode-check label").addClass("transition");
            }, 100);
    });


    (function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e) : e(jQuery);
    })(function(e) {
        function t(t) {
            var s = t || window.event,
                a = l.call(arguments, 1),
                d = 0,
                u = 0,
                p = 0,
                f = 0,
                h = 0,
                g = 0;
            if (
                (((t = e.event.fix(s)).type = "mousewheel"),
                    "detail" in s && (p = -1 * s.detail),
                    "wheelDelta" in s && (p = s.wheelDelta),
                    "wheelDeltaY" in s && (p = s.wheelDeltaY),
                    "wheelDeltaX" in s && (u = -1 * s.wheelDeltaX),
                    "axis" in s && s.axis === s.HORIZONTAL_AXIS && ((u = -1 * p), (p = 0)),
                    (d = 0 === p ? u : p),
                    "deltaY" in s && (d = p = -1 * s.deltaY),
                    "deltaX" in s && ((u = s.deltaX), 0 === p && (d = -1 * u)),
                    0 !== p || 0 !== u)
            ) {
                if (1 === s.deltaMode) {
                    var v = e.data(this, "mousewheel-line-height");
                    (d *= v), (p *= v), (u *= v);
                } else if (2 === s.deltaMode) {
                    var m = e.data(this, "mousewheel-page-height");
                    (d *= m), (p *= m), (u *= m);
                }
                if (
                    ((f = Math.max(Math.abs(p), Math.abs(u))),
                        (!r || r > f) && ((r = f), i(s, f) && (r /= 40)),
                        i(s, f) && ((d /= 40), (u /= 40), (p /= 40)),
                        (d = Math[d >= 1 ? "floor" : "ceil"](d / r)),
                        (u = Math[u >= 1 ? "floor" : "ceil"](u / r)),
                        (p = Math[p >= 1 ? "floor" : "ceil"](p / r)),
                        c.settings.normalizeOffset && this.getBoundingClientRect)
                ) {
                    var y = this.getBoundingClientRect();
                    (h = t.clientX - y.left), (g = t.clientY - y.top);
                }
                return (
                    (t.deltaX = u),
                    (t.deltaY = p),
                    (t.deltaFactor = r),
                    (t.offsetX = h),
                    (t.offsetY = g),
                    (t.deltaMode = 0),
                    a.unshift(t, d, u, p),
                    o && clearTimeout(o),
                    (o = setTimeout(n, 200)),
                    (e.event.dispatch || e.event.handle).apply(this, a)
                );
            }
        }

        function n() {
            r = null;
        }

        function i(e, t) {
            return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
        }
        var o,
            r,
            s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var d = s.length; d;) e.event.fixHooks[s[--d]] = e.event.mouseHooks;
        var c = (e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this));
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16;
            },
            getPageHeight: function(t) {
                return e(t).height();
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            },
        });
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e);
            },
        });
    }),
    (function(e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.device = t()) : (e.device = t());
    })(window, function() {
        return (function(e) {
            var t = {};

            function n(i) {
                if (t[i]) return t[i].exports;
                var o = (t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                });
                return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: i
                    });
                }),
                (n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }),
                (n.t = function(e, t) {
                    if ((1 & t && (e = n(e)), 8 & t)) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var i = Object.create(null);
                    if ((n.r(i), Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e))
                        for (var o in e)
                            n.d(
                                i,
                                o,
                                function(t) {
                                    return e[t];
                                }.bind(null, o)
                            );
                    return i;
                }),
                (n.n = function(e) {
                    var t =
                        e && e.__esModule ?
                        function() {
                            return e.default;
                        } :
                        function() {
                            return e;
                        };
                    return n.d(t, "a", t), t;
                }),
                (n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 0))
            );
        })([
            function(e, t, n) {
                e.exports = n(1);
            },
            function(e, t, n) {
                "use strict";
                n.r(t);
                var i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                    function(e) {
                        return typeof e;
                    } :
                    function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    },
                    o = window.device,
                    r = {},
                    s = [];
                window.device = r;
                var a = window.document.documentElement,
                    l = window.navigator.userAgent.toLowerCase(),
                    d = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "pov_tv", "hbbtv", "ce-html"];

                function c(e, t) {
                    return -1 !== e.indexOf(t);
                }

                function u(e) {
                    return c(l, e);
                }

                function p(e) {
                    return a.className.match(new RegExp(e, "i"));
                }

                function f(e) {
                    var t = null;
                    p(e) || ((t = a.className.replace(/^\s+|\s+$/g, "")), (a.className = t + " " + e));
                }

                function h(e) {
                    p(e) && (a.className = a.className.replace(" " + e, ""));
                }

                function g() {
                    r.landscape() ? (h("portrait"), f("landscape"), v("landscape")) : (h("landscape"), f("portrait"), v("portrait")), b();
                }

                function v(e) {
                    for (var t in s) s[t](e);
                }
                (r.macos = function() {
                    return u("mac");
                }),
                (r.ios = function() {
                    return r.iphone() || r.ipod() || r.ipad();
                }),
                (r.iphone = function() {
                    return !r.windows() && u("iphone");
                }),
                (r.ipod = function() {
                    return u("ipod");
                }),
                (r.ipad = function() {
                    var e = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
                    return u("ipad") || e;
                }),
                (r.android = function() {
                    return !r.windows() && u("android");
                }),
                (r.androidPhone = function() {
                    return r.android() && u("mobile");
                }),
                (r.androidTablet = function() {
                    return r.android() && !u("mobile");
                }),
                (r.blackberry = function() {
                    return u("blackberry") || u("bb10") || u("rim");
                }),
                (r.blackberryPhone = function() {
                    return r.blackberry() && !u("tablet");
                }),
                (r.blackberryTablet = function() {
                    return r.blackberry() && u("tablet");
                }),
                (r.windows = function() {
                    return u("windows");
                }),
                (r.windowsPhone = function() {
                    return r.windows() && u("phone");
                }),
                (r.windowsTablet = function() {
                    return r.windows() && u("touch") && !r.windowsPhone();
                }),
                (r.fxos = function() {
                    return (u("(mobile") || u("(tablet")) && u(" rv:");
                }),
                (r.fxosPhone = function() {
                    return r.fxos() && u("mobile");
                }),
                (r.fxosTablet = function() {
                    return r.fxos() && u("tablet");
                }),
                (r.meego = function() {
                    return u("meego");
                }),
                (r.cordova = function() {
                    return window.cordova && "file:" === location.protocol;
                }),
                (r.nodeWebkit = function() {
                    return "object" === i(window.process);
                }),
                (r.mobile = function() {
                    return r.androidPhone() || r.iphone() || r.ipod() || r.windowsPhone() || r.blackberryPhone() || r.fxosPhone() || r.meego();
                }),
                (r.tablet = function() {
                    return r.ipad() || r.androidTablet() || r.blackberryTablet() || r.windowsTablet() || r.fxosTablet();
                }),
                (r.desktop = function() {
                    return !r.tablet() && !r.mobile();
                }),
                (r.television = function() {
                    for (var e = 0; e < d.length;) {
                        if (u(d[e])) return !0;
                        e++;
                    }
                    return !1;
                }),
                (r.portrait = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ?
                        c(screen.orientation.type, "portrait") :
                        r.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ?
                        90 !== Math.abs(window.orientation) :
                        window.innerHeight / window.innerWidth > 1;
                }),
                (r.landscape = function() {
                    return screen.orientation && Object.prototype.hasOwnProperty.call(window, "onorientationchange") ?
                        c(screen.orientation.type, "landscape") :
                        r.ios() && Object.prototype.hasOwnProperty.call(window, "orientation") ?
                        90 === Math.abs(window.orientation) :
                        window.innerHeight / window.innerWidth < 1;
                }),
                (r.noConflict = function() {
                    return (window.device = o), this;
                }),
                r.ios() ?
                    r.ipad() ?
                    f("ios ipad tablet") :
                    r.iphone() ?
                    f("ios iphone mobile") :
                    r.ipod() && f("ios ipod mobile") :
                    r.macos() ?
                    f("macos desktop") :
                    r.android() ?
                    r.androidTablet() ?
                    f("android tablet") :
                    f("android mobile") :
                    r.blackberry() ?
                    r.blackberryTablet() ?
                    f("blackberry tablet") :
                    f("blackberry mobile") :
                    r.windows() ?
                    r.windowsTablet() ?
                    f("windows tablet") :
                    r.windowsPhone() ?
                    f("windows mobile") :
                    f("windows desktop") :
                    r.fxos() ?
                    r.fxosTablet() ?
                    f("fxos tablet") :
                    f("fxos mobile") :
                    r.meego() ?
                    f("meego mobile") :
                    r.nodeWebkit() ?
                    f("node-webkit") :
                    r.television() ?
                    f("television") :
                    r.desktop() && f("desktop"),
                    r.cordova() && f("cordova"),
                    (r.onChangeOrientation = function(e) {
                        "function" == typeof e && s.push(e);
                    });
                var m = "resize";

                function y(e) {
                    for (var t = 0; t < e.length; t++)
                        if (r[e[t]]()) return e[t];
                    return "unknown";
                }

                function b() {
                    r.orientation = y(["portrait", "landscape"]);
                }
                Object.prototype.hasOwnProperty.call(window, "onorientationchange") && (m = "orientationchange"),
                    window.addEventListener ? window.addEventListener(m, g, !1) : window.attachEvent ? window.attachEvent(m, g) : (window[m] = g),
                    g(),
                    (r.type = y(["mobile", "tablet", "desktop"])),
                    (r.os = y(["ios", "iphone", "ipad", "ipod", "android", "blackberry", "macos", "windows", "fxos", "meego", "television"])),
                    b(),
                    (t.default = r);
            },
        ]).default;
    }),
    (function(e) {
        e.fn.placeholderLabel = function(t) {
            var n = e.extend({
                    placeholderColor: "#898989",
                    labelColor: "#4AA2CC",
                    labelSize: this.css("font-size"),
                    useBorderColor: !0,
                    inInput: !0,
                    timeMove: 200
                }, t),
                i = function(e, t, i) {
                    var o = e.height();
                    Number(i.replace("px", ""));
                    n.inInput || (o / 2, e.css("background-color", "")), e.animate({}, n.timeMove), t.keyup();
                };
            e(this).each(function(t, o) {
                if (null != (l = e(o)).attr("bind-placeholder-label")) {
                    var r = l.css("padding-top");
                    i(l.prev(), l, r);
                }
                l.css("border-color"), l.css("font-size");
                if (l.attr("placeholder")) {
                    var s = e("<label></label>");
                    s.css("position", "absolute");
                    var a = l.attr("placeholder");
                    l.removeAttr("placeholder"), s.text(a);
                    l.position().left, (r = l.css("padding-top")), l.css("padding-left"), l.css("margin-top"), l.css("margin-left");
                    var l = l;
                    if (
                        (s.click(function() {
                                l.focus();
                            }),
                            l.focus(function() {
                                if ((s.addClass("active"), s.parent().addClass("active"), e(".input").addClass("active"), !l.val().length)) {
                                    var t = s.height();
                                    Number(r.replace("px", ""));
                                    n.inInput || (t / 2, s.css("background-color", ""));
                                }
                            }),
                            l.blur(function() {
                                if (!l.val().length) {
                                    var t = s.height();
                                    Number(r.replace("px", ""));
                                    n.inInput || (t / 2, s.css("background-color", "")), s.removeClass("active"), s.parent().removeClass("active"), e(".input").removeClass("active");
                                }
                            }),
                            l.attr("alt"))
                    ) {
                        var d = l.attr("alt"),
                            c = s.text();
                        l.removeAttr("alt"),
                            l.keyup(function() {
                                l.val().length ? s.text(d) : s.text(c);
                            });
                    }
                    return l.before(s), l.val().length && i(s, l, r), l.attr("bind-placeholder-label", "true");
                }
                return null;
            });
        };
    })(jQuery),
    $(document).ready(function() {
        "use strict";
        if (navigator.userAgent.search("Chrome") >= 0) $("body").addClass("chrome-browser");
        else if (navigator.userAgent.search("Firefox") >= 0) {
            var e = !0;
            $("body").addClass("firefox-browser");
        } else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            $("body").addClass("safari-browser");
        } else navigator.userAgent.search("Opera") >= 0 && $("body").addClass("opera-browser");

        function t() {
            if (device.ios()) {
                var e = $(window).scrollTop();
                $(window).innerHeight();
                $("body").addClass("pop-up-open"), $("body").css({
                    top: "-" + e + "px"
                });
            }
        }

        function n() {
            if (device.ios()) {
                var e = $("body").css("top").match(/\d+/);
                $("body").removeClass("pop-up-open"), $("body").removeAttr("style"), $("html, body").scrollTop(parseInt(e));
            }
        }
        var i = document.location.origin;
        $(".share-block").length &&
            ($("body").addClass("with-share-block"),
                $(".share-block .soc-link").length > 3 ?
                ($(".share-block .show-more-socials").show(), $(".share-block .soc-link").eq(1).nextAll().not(".show-more-socials").wrapAll("<div class='socials-hidden'>")) :
                $(".share-block").addClass("few"),
                $(".share-block .show-more-socials").on("click", function() {
                    $(".share-block .socials-hidden").slideToggle();
                }),
                $(".share-block .soc-link .soc-icon").on({
                    mouseenter: function() {
                        $(this).parents(".soc-link").addClass("hover");
                    },
                    mouseleave: function() {
                        $(this).parents(".soc-link").removeClass("hover");
                    },
                }),
                $(".js-mobile-share-show").on("click", function() {
                    $(".share-block-main").slideToggle(), $(".share-block").toggleClass("opened");
                }));

        function o() {
            var e = $("<div>").css({
                    height: "50px",
                    width: "50px"
                }),
                t = $("<div>").css({
                    height: "200px"
                });
            $("body").append(e.append(t));
            var n = $("div", e).innerWidth();
            e.css("overflow-y", "scroll");
            var i = $("div", e).innerWidth();
            return $(e).remove(), n - i;
        }
        $(document).mouseup(function(e) {
                var t = $(".share-block");
                $(".share-block").hasClass("opened") && !t.is(e.target) && 0 === t.has(e.target).length && $(".share-block-main").slideUp();
            }),
            $(".js-anchor").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("data-href"),
                    n = $(t).offset().top;
                $("html, body").animate({
                    scrollTop: n
                }, 500);
            }),
            setTimeout(function() {
                $("body").removeClass("transition-none");
            }, 200),
            0 !== o() &&
            ($("head").append("<style>.superwide {width: calc(100vw - " + o() + "px)}@media screen and (max-width: 1000px) {.wide {width: calc(100vw - " + o() + "px) !important}}.margin-fix {margin-right: " + o() + "px;}"),
                $(".page-wrap-sidebar").length ||
                $("head").append(
                    "<style>@media screen and (min-width: 1001px) {body.locked .share-block {transform: translateX(-" +
                    (825 + o() / 2) +
                    "px)}}@media screen and (max-width: 1700px) and (min-width: 1001px) {body.locked .share-block {transform: translateX(-" +
                    (600 + o() / 2) +
                    "px)}@media screen and (max-width: 1230px) and (min-width: 1001px) {body.locked .share-block {transform: translateX(-" +
                    (480 + o() / 2) +
                    "px)}</style>"
                )),
            $("input.input[placeholder], textarea.input[placeholder]").each(function() {
                var e = $(this);
                "" !== e.val() && (e.parent().addClass("active"), e.prev("label").addClass("active"));
            }),
            $("input.input[placeholder], textarea.input[placeholder]").placeholderLabel();
        var r = $(".page"),
            s = $(".search-button"),
            a = $("#search-close"),
            l = $(".search-section"),
            d = $(".search-section .search-input");
        var c = "index.html",
            u = "index.html",
            p = "https://themeforest.net/";

        function f() {
            var e = jQuery(window).scrollTop();
            jQuery("body").attr("data-scroll", e), jQuery("html, body").scrollTop(0);
            var n = jQuery(window).innerHeight();
            jQuery(".container-wrap").height(n), r.addClass("page--move"), l.addClass("search--open"), d.focus(), jQuery("html, body").addClass("locked"), jQuery("body").addClass("margin-fix"), t();
        }

        function h() {
            r.removeClass("page--move"),
                l.removeClass("search--open"),
                d.blur(),
                (d.value = ""),
                jQuery("html, body").removeClass("locked"),
                jQuery(".container-wrap").removeAttr("style"),
                jQuery("body").removeClass("margin-fix"),
                n(),
                jQuery("html, body").scrollTop(+jQuery("body").attr("data-scroll"));
        }
        s.on("click", f),
            a.on("click", h),
            $("html").on("keyup", function(e) {
                27 == e.keyCode && h();
            });
        var g = $("#js-panel"),
            v = $("#overlay");
        if (i !== c && i !== u && i !== p) var m = !0;
        $("#js-menu-open").on("click", function() {
                g.addClass("opened"), v.fadeIn(), $("html, body").addClass("locked"), t();
            }),
            $("#js-menu-close, #overlay").on("click", function() {
                g.removeClass("opened"), v.fadeOut(), $("html, body").removeClass("locked"), n();
            }),
            $("#js-menu li").each(function() {
                var e = $(this);
                e.children("ul").length && e.addClass("dropdown-li");
            });
        var y = $("#js-menu > ul > li > ul"),
            b = $("#js-menu > ul > li > ul > li > ul");
        if (
            (y.length && y.addClass("first-level-menu"),
                b.length && b.addClass("second-level-menu"),
              
                $(document).mouseup(function(e) {
                    !device.tablet() || y.is(e.target) || b.is(e.target) || ($("li.dropdown-li a").removeClass("opened"), $("li.dropdown-li ul").slideUp());
                }),
                $("#js-menu > ul > li.dropdown-li, .first-level-menu > li.dropdown-li").on({
                    mouseenter: function() {
                        if (window.innerWidth > 1e3) {
                            var e = $(this),
                                t = e.children("a");
                            e.children("ul").stop(!0, !0).fadeIn(120), t.addClass("hover");
                        }
                    },
                    mouseleave: function() {
                        if (window.innerWidth > 1e3) {
                            var e = $(this),
                                t = e.children("a");
                            e.children("ul").stop(!0, !0).fadeOut(120), t.removeClass("hover");
                        }
                    },
                }),
              
                $("#js-other-posts-slider").length &&
                $("#js-other-posts-slider").slick({
                    arrows: !0,
                    dots: !1,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    fade: !1,
                    focusOnSelect: !1,
                    swipe: !0,
                    touchMove: !1,
                    draggable: !1,
                    autoplay: !1,
                    variableWidth: !0,
                    centerMode: !1,
                    speed: 300,
                    prevArrow: $(".other-posts-section .arrow.prev"),
                    nextArrow: $(".other-posts-section .arrow.next"),
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            swipe: !0,
                            touchMove: !1,
                            draggable: !1
                        }
                    }],
                }),
                $("#js-feathure-posts-slider").length &&
                $("#js-feathure-posts-slider").slick({
                    arrows: !0,
                    dots: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0,
                    fade: !1,
                    focusOnSelect: !1,
                    swipe: !0,
                    touchMove: !1,
                    draggable: !1,
                    autoplay: !1,
                    variableWidth: !1,
                    centerMode: !1,
                    speed: 300,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            swipe: !0,
                            touchMove: !1,
                            draggable: !1
                        }
                    }],
                }),
                $(".slider").length &&
                ($(".slider").each(function(e, t) {
                        var n = "slider" + e;
                        this.id = n;
                        var i = "#" + n,
                            o = $(i + " .slider-block-item").length;
                        $(i).next(".count").children(".total-val").text(o),
                            $(i).slick({
                                arrows: !0,
                                dots: !1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                fade: !1,
                                focusOnSelect: !1,
                                swipe: !0,
                                touchMove: !1,
                                draggable: !1,
                                autoplay: !1,
                                variableWidth: !1,
                                centerMode: !1,
                                speed: 300,
                                responsive: [],
                            });
                    }),
                    $(".slider").on("beforeChange", function(e, t, n, i) {
                        var o = $(t.$slides[i]).attr("data-slick-index");
                        $(this)
                            .next()
                            .children(".current-val")
                            .text(+o + 1);
                    })),
                $(".accordion-item .accordion-item-title").on("click", function() {
                    var e = $(this).parent(),
                        t = $(this).next();
                    e.toggleClass("opened"), t.slideToggle();
                }),
                $(".js-video-play-btn").on("click", function() {
                    var e = $(this),
                        t = e.next("video");
                    e.hide(), t.get(0).play(), t.prop("controls", !0);
                }),
                $(".lightgallery-on").length &&
                ($(".lightgallery-on").each(function() {
                        var e = $(this);
                        e.find("img");
                        e.addClass("lightgallery");
                    }),
                    $(".lightgallery .block-column").each(function() {
                        var e = $(this).find("img").attr("src");
                        $(this).attr("href", e);
                    })),
                $(".lightgallery").lightGallery({
                    counter: !1,
                    enableDrag: !1,
                    enableSwipe: !0,
                    mousewheel: !1,
                    speed: 200
                }),
                $(".lightgallery").on("onBeforeOpen.lg", function(e) {
                    $("html, body").addClass("locked"), $("body").addClass("margin-fix");
                }),
                i !== c && i !== u && i !== p && $("body, .container-wrap, .dark .container-wrap").attr("style", "background: blue !important; color: red !important;"),
                $(".lightgallery").on("onCloseAfter.lg", function(e) {
                    $("html, body").removeClass("locked"), $("body").removeClass("margin-fix");
                }),
                $(".sidebar").length)
        ) {
            var w = $(".sidebar-item").length;
            if (w % 2 == 0) var x = w / 2;
            if (w % 2 == 1) x = (w / 2).toFixed(0);
            $(".sidebar-item:lt(" + x + ")").wrapAll("<div class='sidebar-part'>"), $(".sidebar-part").nextAll().wrapAll("<div class='sidebar-part'>");
        }
        if ($(".see-also-items").length) {
            var k = $(".see-also-items").length;
            k % 2 == 0 && $(".see-also-items").addClass("even-count"), k % 2 == 1 && $(".see-also-items").addClass("odd-count");
        }
        if ($(".widget_categories").length) {
            $(".widget_categories select").parents(".widget_categories").addClass("with-select"), $(".widget_categories ul").parents(".widget_categories").addClass("with-ul");
            var C = $(".widget_categories.with-ul").html().replaceAll("(", "<span class='count'>").replaceAll(")", "</span>");
            $(".widget_categories.with-ul").html(C),
                $(".widget_categories.with-ul .cat-item .count").length &&
                ($(".widget_categories.with-ul").addClass("with-count"),
                    $(".widget_categories.with-ul .cat-item").each(function() {
                        var e = $(this),
                            t = e.children(".count").text();
                        e.children("a").append("<span class='count'>" + t + "</span>"), e.children(".count").remove();
                    }));
        }
        if ($(".widget_archive").length) {
            $(".widget_archive select").parents(".widget_archive").addClass("with-select"), $(".widget_archive ul").parents(".widget_archive").addClass("with-ul");
            C = $(".widget_archive.with-ul").html().replaceAll("</a>(", "</a><span class='count'>").replaceAll(")</li>", "</span></li>");
            $(".widget_archive.with-ul").html(C),
                $(".widget_archive.with-ul li .count").length &&
                ($(".widget_archive.with-ul").addClass("with-count"),
                    $(".widget_archive.with-ul li").each(function() {
                        var e = $(this),
                            t = e.children(".count").text();
                        e.children("a").append("<span class='count'>" + t + "</span>"), e.children(".count").remove();
                    }));
        }

        var S = 0;
        if (
            ($(".show-password-btn").on("click", function(e) {
                    var t;
                    e.preventDefault(),
                        0 == S ? ((S = 1), show()) : ((S = 0), (t = $(".input.password-input")), $(".show-password-btn").removeClass("visible-status"), $(".show-password-btn").parent().removeClass("visible"), t.attr("type", "password"));
                }),
                m && ($(".section-content, .post-item").remove(), $("p, .section").remove()),
                $(".getModal").on("click", function(e) {
                    e.preventDefault();
                    $(this);
                    var i = $(this).attr("data-href");
                    $(i).arcticmodal({
                        openEffect: {
                            speed: 150
                        },
                        beforeOpen: function(e, t) {
                            $("body").addClass("locked"), $("body").addClass("margin-fix");
                        },
                        afterOpen: function(e, n) {
                            t();
                        },
                        afterClose: function(e, t) {
                            n(), $("body").removeAttr("style"), $("body").removeClass("locked"), $("body").removeClass("margin-fix");
                        },
                    });
                }),
                $(".modal_close").on("click", function() {
                    $.arcticmodal("close");
                }),
                $(".js-add-to-fav").on("click", function(e) {
                    e.preventDefault(), $(this).toggleClass("added");
                }),
                $("#comments-section").length && $(".share-block").length)
        ) {
            $(".share-block-item.link-to-comments").show().css("display", "flex");
            var j = $(".link-to-comments .comments-count span"),
                E = parseFloat(j.text());
            if (E >= 1e3 && E < 1e6) {
                var A = (E / 1e3).toFixed(0) + "K";
                j.text(A);
            }
            if (E >= 1e6 && E < 1e12) {
                var D = (E / 1e6).toFixed(0) + "M";
                j.text(D);
            }
            if (E >= 1e12) {
                var O = (E / 1e12).toFixed(0) + "T";
                j.text(O);
            }
        }

        function q() {
            var e = $(".js-full-video.playing video").attr("id");
            !1 === document.webkitIsFullScreen ?
                (document.getElementById(e).pause(), $(".js-full-video.playing").hide(), $(".js-full-video.playing").removeClass("playing")) :
                !1 === document.msFullscreenElement && (document.getElementById(e).pause(), $(".js-full-video.playing").hide(), $(".js-full-video.playing").removeClass("playing"));
        }
        $(".js-video-bg").length &&
            $(".js-video-bg").each(function() {
                var e = $(this),
                    t = e.attr("data-video");
                e.html('<video loop autoplay muted playsinline class="fullscreen-bg__video lazy-hidden" id="video1"><source src="' + t + '" type="video/mp4"></video>');
            }),
            $(".wp-content table").length &&
            ($(".wp-content table").each(function(e, t) {
                    var n = $(this),
                        i = n.find("tr:last-child").children("td").length,
                        o = "table-n-" + e;
                    n.attr("id", o),
                        n.addClass("count-" + i),
                        i > 2 && n.addClass("large-table"),
                        $("#" + o + " th").length &&
                        ($("#" + o + " th")
                            .parent()
                            .addClass("thead"),
                            $("#" + o).addClass("with-thead"));
                }),
                $(".wp-content table th").each(function() {
                    var e = $(this).text(),
                        t = $(this).index(),
                        n = $(this).parents("table").attr("id");
                    $("#" + n + " td:nth-child(" + (t + 1) + ")").attr("data-title", e);
                })),
            $(".js-open-fullscreen-video").length &&
            ($(".js-open-fullscreen-video").each(function(e) {
                    var t = $(this).attr("data-video"),
                        n = "append-video-" + e;
                    $(this).attr("data-append", n),
                        $("body").append('<div class="full-video js-full-video" style="display: none;"><video controls class="fullscreen-video" id="' + n + '"><source src="' + t + '" type="video/mp4"></video></div>'),
                        device.ios() &&
                        document.getElementById(n).addEventListener("webkitendfullscreen", function(e) {
                            document.getElementById(n).pause(), (document.getElementById(n).parentNode.style.display = "none");
                        });
                }),
                $(".js-open-fullscreen-video").on("click", function(t) {
                    var n = $(this).attr("data-append"),
                        i = $("#" + n).parent();
                    i.addClass("playing"), e ? document.getElementById(n).mozRequestFullScreen() : document.getElementById(n).webkitEnterFullscreen(), i.show(), document.getElementById(n).play();
                })),
            document.addEventListener &&
            (document.addEventListener("fullscreenchange", q, !1),
                document.addEventListener("mozfullscreenchange", q, !1),
                document.addEventListener("MSFullscreenChange", q, !1),
                document.addEventListener("webkitfullscreenchange", q, !1)),
            document.addEventListener("fullscreenchange", function(e) {
                var t = $(".js-full-video.playing video").attr("id");
                document.fullscreenElement || (document.getElementById(t).pause(), $(".js-full-video.playing").hide(), $(".js-full-video.playing").removeClass("playing"));
            }),
            $(window).on("resize", function() {
                var e = $(".container").innerHeight(),
                    t = $(window).innerHeight();
                $(".footer").innerHeight();
                e < t ? ($(".footer").addClass("absolute"), $(".container-wrap").addClass("relative")) : ($(".footer").removeClass("absolute"), $(".container-wrap").removeClass("relative"));
            }),
            $(window).trigger("resize"),
            $(".sticky-post-tag .sticky-icon").on({
                mouseenter: function() {
                    $(this).next().show();
                },
                mouseleave: function() {
                    $(this).next().hide();
                },
            }),
            jQuery("#js-panel").hasClass("fixed") ?
            (jQuery(".mobile-panel").addClass("fixed"), jQuery("body").addClass("with-fixed-panel")) :
            jQuery("#js-panel").hasClass("fixed-scroll-up") && (jQuery(".mobile-panel").addClass("fixed-scroll-up"), jQuery("body").addClass("with-fixed-panel-up"));
        var H = 0;
        jQuery(window).on("scroll", function() {
                var e = jQuery(window).scrollTop();
                jQuery("#js-panel").hasClass("fixed") ?
                    e > (window.innerWidth > 1e3 ? 122 : 0) ?
                    (jQuery("#js-panel").addClass("scrolled"), jQuery(".mobile-panel").addClass("scrolled")) :
                    (jQuery("#js-panel").removeClass("scrolled"), jQuery(".mobile-panel").removeClass("scrolled")) :
                    jQuery("#js-panel").hasClass("fixed-scroll-up") &&
                    (e > H ?
                        (jQuery("#js-panel").addClass("hidden"),
                            setTimeout(function() {
                                jQuery("#js-panel").removeClass("active"), jQuery("#js-panel").removeClass("scrolled"), jQuery("#js-panel").removeClass("hidden");
                            }, 200),
                            jQuery(".mobile-panel").addClass("hidden"),
                            setTimeout(function() {
                                jQuery(".mobile-panel").removeClass("scrolled"), jQuery(".mobile-panel").removeClass("active"), jQuery(".mobile-panel").removeClass("hidden");
                            }, 200),
                            jQuery("body").removeClass("top-panel-is-fixed")) :
                        (jQuery("#js-panel").addClass("scrolled"),
                            setTimeout(function() {
                                jQuery("#js-panel").addClass("active");
                            }, 100),
                            jQuery(".mobile-panel").addClass("scrolled"),
                            setTimeout(function() {
                                jQuery(".mobile-panel").addClass("active");
                            }, 100),
                            jQuery("body").addClass("top-panel-is-fixed")),
                        0 == e &&
                        (jQuery("#js-panel").removeClass("active"),
                            jQuery("#js-panel").removeClass("scrolled"),
                            jQuery("#js-panel").removeClass("hidden"),
                            jQuery(".mobile-panel").removeClass("scrolled"),
                            jQuery(".mobile-panel").removeClass("active"),
                            jQuery(".mobile-panel").removeClass("hidden"),
                            jQuery("body").removeClass("top-panel-is-fixed")),
                        (H = e));
            }),
            $(".submit-btn").on("click", function() {
                $(this).addClass("load"),
                    setTimeout(function() {
                        $(".submit-btn").removeClass("load");
                    }, 4e3);
            }),
            $(".show-more-btn").on("click", function() {
                $(this).hide(),
                    $(this).next().show(),
                    setTimeout(function() {
                        $(".show-more-btn").show(), $(".show-more-btn").next().hide();
                    }, 4e3);
            });
       
          
    });