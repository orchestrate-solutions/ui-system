import * as vt from "react";
import Rr, { useState as sn } from "react";
import { Box as bt, Skeleton as yr, TextField as Me, FormControl as Cr, InputLabel as un, Select as cn, MenuItem as fn, FormHelperText as tr, FormControlLabel as xt, Checkbox as ln, Button as Pr, InputAdornment as dn, IconButton as pn, FormLabel as Et, RadioGroup as hn, Radio as mn, useTheme as gn, CircularProgress as yn } from "@mui/material";
import { VisibilityOff as vn, Visibility as bn, Brightness7 as xn, Brightness4 as En } from "@mui/icons-material";
function Ge(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" }));
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Z.apply(null, arguments);
}
function De(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) !== -1)
        continue;
      t[n] = e[n];
    }
  return t;
}
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ot(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Sr = { exports: {} }, Qe = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function _n() {
  if (Jr)
    return W;
  Jr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function Y(b) {
    if (typeof b == "object" && b !== null) {
      var pe = b.$$typeof;
      switch (pe) {
        case r:
          switch (b = b.type, b) {
            case f:
            case u:
            case n:
            case a:
            case i:
            case m:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case p:
                case T:
                case E:
                case s:
                  return b;
                default:
                  return pe;
              }
          }
        case t:
          return pe;
      }
    }
  }
  function V(b) {
    return Y(b) === u;
  }
  return W.AsyncMode = f, W.ConcurrentMode = u, W.ContextConsumer = l, W.ContextProvider = s, W.Element = r, W.ForwardRef = p, W.Fragment = n, W.Lazy = T, W.Memo = E, W.Portal = t, W.Profiler = a, W.StrictMode = i, W.Suspense = m, W.isAsyncMode = function(b) {
    return V(b) || Y(b) === f;
  }, W.isConcurrentMode = V, W.isContextConsumer = function(b) {
    return Y(b) === l;
  }, W.isContextProvider = function(b) {
    return Y(b) === s;
  }, W.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }, W.isForwardRef = function(b) {
    return Y(b) === p;
  }, W.isFragment = function(b) {
    return Y(b) === n;
  }, W.isLazy = function(b) {
    return Y(b) === T;
  }, W.isMemo = function(b) {
    return Y(b) === E;
  }, W.isPortal = function(b) {
    return Y(b) === t;
  }, W.isProfiler = function(b) {
    return Y(b) === a;
  }, W.isStrictMode = function(b) {
    return Y(b) === i;
  }, W.isSuspense = function(b) {
    return Y(b) === m;
  }, W.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === a || b === i || b === m || b === h || typeof b == "object" && b !== null && (b.$$typeof === T || b.$$typeof === E || b.$$typeof === s || b.$$typeof === l || b.$$typeof === p || b.$$typeof === C || b.$$typeof === D || b.$$typeof === L || b.$$typeof === g);
  }, W.typeOf = Y, W;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Sn() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function Y(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === u || v === a || v === i || v === m || v === h || typeof v == "object" && v !== null && (v.$$typeof === T || v.$$typeof === E || v.$$typeof === s || v.$$typeof === l || v.$$typeof === p || v.$$typeof === C || v.$$typeof === D || v.$$typeof === L || v.$$typeof === g);
    }
    function V(v) {
      if (typeof v == "object" && v !== null) {
        var ae = v.$$typeof;
        switch (ae) {
          case r:
            var Se = v.type;
            switch (Se) {
              case f:
              case u:
              case n:
              case a:
              case i:
              case m:
                return Se;
              default:
                var be = Se && Se.$$typeof;
                switch (be) {
                  case l:
                  case p:
                  case T:
                  case E:
                  case s:
                    return be;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var b = f, pe = u, Fe = l, We = s, Ee = r, Be = p, Oe = n, Te = T, re = E, te = t, he = a, oe = i, de = m, ve = !1;
    function _e(v) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(v) || V(v) === f;
    }
    function d(v) {
      return V(v) === u;
    }
    function x(v) {
      return V(v) === l;
    }
    function j(v) {
      return V(v) === s;
    }
    function P(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function S(v) {
      return V(v) === p;
    }
    function I(v) {
      return V(v) === n;
    }
    function w(v) {
      return V(v) === T;
    }
    function R(v) {
      return V(v) === E;
    }
    function $(v) {
      return V(v) === t;
    }
    function N(v) {
      return V(v) === a;
    }
    function k(v) {
      return V(v) === i;
    }
    function Q(v) {
      return V(v) === m;
    }
    B.AsyncMode = b, B.ConcurrentMode = pe, B.ContextConsumer = Fe, B.ContextProvider = We, B.Element = Ee, B.ForwardRef = Be, B.Fragment = Oe, B.Lazy = Te, B.Memo = re, B.Portal = te, B.Profiler = he, B.StrictMode = oe, B.Suspense = de, B.isAsyncMode = _e, B.isConcurrentMode = d, B.isContextConsumer = x, B.isContextProvider = j, B.isElement = P, B.isForwardRef = S, B.isFragment = I, B.isLazy = w, B.isMemo = R, B.isPortal = $, B.isProfiler = N, B.isStrictMode = k, B.isSuspense = Q, B.isValidElementType = Y, B.typeOf = V;
  }()), B;
}
var Zr;
function Tt() {
  return Zr || (Zr = 1, process.env.NODE_ENV === "production" ? Qe.exports = _n() : Qe.exports = Sn()), Qe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vr, Qr;
function wn() {
  if (Qr)
    return vr;
  Qr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vr = i() ? Object.assign : function(a, s) {
    for (var l, f = n(a), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        r.call(l, m) && (f[m] = l[m]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          t.call(l, u[h]) && (f[u[h]] = l[u[h]]);
      }
    }
    return f;
  }, vr;
}
var br, et;
function jr() {
  if (et)
    return br;
  et = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var xr, rt;
function _t() {
  return rt || (rt = 1, xr = Function.call.bind(Object.prototype.hasOwnProperty)), xr;
}
var Er, tt;
function Rn() {
  if (tt)
    return Er;
  tt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = jr(), t = {}, n = _t();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, l, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var m;
          try {
            if (typeof a[p] != "function") {
              var h = Error(
                (f || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = a[p](s, p, f, l, null, r);
          } catch (T) {
            m = T;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Er = i, Er;
}
var Or, nt;
function Cn() {
  if (nt)
    return Or;
  nt = 1;
  var e = Tt(), r = wn(), t = jr(), n = _t(), i = Rn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Or = function(l, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(d) {
      var x = d && (u && d[u] || d[p]);
      if (typeof x == "function")
        return x;
    }
    var h = "<<anonymous>>", E = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: L(),
      arrayOf: Y,
      element: V(),
      elementType: b(),
      instanceOf: pe,
      node: Be(),
      objectOf: We,
      oneOf: Fe,
      oneOfType: Ee,
      shape: Te,
      exact: re
    };
    function T(d, x) {
      return d === x ? d !== 0 || 1 / d === 1 / x : d !== d && x !== x;
    }
    function g(d, x) {
      this.message = d, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function C(d) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, j = 0;
      function P(I, w, R, $, N, k, Q) {
        if ($ = $ || h, k = k || R, Q !== t) {
          if (f) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = $ + ":" + R;
            !x[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[ae] = !0, j++);
          }
        }
        return w[R] == null ? I ? w[R] === null ? new g("The " + N + " `" + k + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new g("The " + N + " `" + k + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : d(w, R, $, N, k);
      }
      var S = P.bind(null, !1);
      return S.isRequired = P.bind(null, !0), S;
    }
    function D(d) {
      function x(j, P, S, I, w, R) {
        var $ = j[P], N = oe($);
        if (N !== d) {
          var k = de($);
          return new g(
            "Invalid " + I + " `" + w + "` of type " + ("`" + k + "` supplied to `" + S + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return C(x);
    }
    function L() {
      return C(s);
    }
    function Y(d) {
      function x(j, P, S, I, w) {
        if (typeof d != "function")
          return new g("Property `" + w + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var R = j[P];
        if (!Array.isArray(R)) {
          var $ = oe(R);
          return new g("Invalid " + I + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected an array."));
        }
        for (var N = 0; N < R.length; N++) {
          var k = d(R, N, S, I, w + "[" + N + "]", t);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return C(x);
    }
    function V() {
      function d(x, j, P, S, I) {
        var w = x[j];
        if (!l(w)) {
          var R = oe(w);
          return new g("Invalid " + S + " `" + I + "` of type " + ("`" + R + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(d);
    }
    function b() {
      function d(x, j, P, S, I) {
        var w = x[j];
        if (!e.isValidElementType(w)) {
          var R = oe(w);
          return new g("Invalid " + S + " `" + I + "` of type " + ("`" + R + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(d);
    }
    function pe(d) {
      function x(j, P, S, I, w) {
        if (!(j[P] instanceof d)) {
          var R = d.name || h, $ = _e(j[P]);
          return new g("Invalid " + I + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return C(x);
    }
    function Fe(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function x(j, P, S, I, w) {
        for (var R = j[P], $ = 0; $ < d.length; $++)
          if (T(R, d[$]))
            return null;
        var N = JSON.stringify(d, function(Q, v) {
          var ae = de(v);
          return ae === "symbol" ? String(v) : v;
        });
        return new g("Invalid " + I + " `" + w + "` of value `" + String(R) + "` " + ("supplied to `" + S + "`, expected one of " + N + "."));
      }
      return C(x);
    }
    function We(d) {
      function x(j, P, S, I, w) {
        if (typeof d != "function")
          return new g("Property `" + w + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var R = j[P], $ = oe(R);
        if ($ !== "object")
          return new g("Invalid " + I + " `" + w + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected an object."));
        for (var N in R)
          if (n(R, N)) {
            var k = d(R, N, S, I, w + "." + N, t);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return C(x);
    }
    function Ee(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var x = 0; x < d.length; x++) {
        var j = d[x];
        if (typeof j != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(j) + " at index " + x + "."
          ), s;
      }
      function P(S, I, w, R, $) {
        for (var N = [], k = 0; k < d.length; k++) {
          var Q = d[k], v = Q(S, I, w, R, $, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && N.push(v.data.expectedType);
        }
        var ae = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new g("Invalid " + R + " `" + $ + "` supplied to " + ("`" + w + "`" + ae + "."));
      }
      return C(P);
    }
    function Be() {
      function d(x, j, P, S, I) {
        return te(x[j]) ? null : new g("Invalid " + S + " `" + I + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return C(d);
    }
    function Oe(d, x, j, P, S) {
      return new g(
        (d || "React class") + ": " + x + " type `" + j + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function Te(d) {
      function x(j, P, S, I, w) {
        var R = j[P], $ = oe(R);
        if ($ !== "object")
          return new g("Invalid " + I + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var N in d) {
          var k = d[N];
          if (typeof k != "function")
            return Oe(S, I, w, N, de(k));
          var Q = k(R, N, S, I, w + "." + N, t);
          if (Q)
            return Q;
        }
        return null;
      }
      return C(x);
    }
    function re(d) {
      function x(j, P, S, I, w) {
        var R = j[P], $ = oe(R);
        if ($ !== "object")
          return new g("Invalid " + I + " `" + w + "` of type `" + $ + "` " + ("supplied to `" + S + "`, expected `object`."));
        var N = r({}, j[P], d);
        for (var k in N) {
          var Q = d[k];
          if (n(d, k) && typeof Q != "function")
            return Oe(S, I, w, k, de(Q));
          if (!Q)
            return new g(
              "Invalid " + I + " `" + w + "` key `" + k + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(j[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var v = Q(R, k, S, I, w + "." + k, t);
          if (v)
            return v;
        }
        return null;
      }
      return C(x);
    }
    function te(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(te);
          if (d === null || l(d))
            return !0;
          var x = m(d);
          if (x) {
            var j = x.call(d), P;
            if (x !== d.entries) {
              for (; !(P = j.next()).done; )
                if (!te(P.value))
                  return !1;
            } else
              for (; !(P = j.next()).done; ) {
                var S = P.value;
                if (S && !te(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function he(d, x) {
      return d === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function oe(d) {
      var x = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : he(x, d) ? "symbol" : x;
    }
    function de(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var x = oe(d);
      if (x === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function ve(d) {
      var x = de(d);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function _e(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return E.checkPropTypes = i, E.resetWarningCache = i.resetWarningCache, E.PropTypes = E, E;
  }, Or;
}
var Tr, ot;
function Pn() {
  if (ot)
    return Tr;
  ot = 1;
  var e = jr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Tr = function() {
    function n(s, l, f, u, p, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Tr;
}
if (process.env.NODE_ENV !== "production") {
  var jn = Tt(), $n = !0;
  Sr.exports = Cn()(jn.isElement, $n);
} else
  Sr.exports = Pn()();
var kn = Sr.exports;
const Ue = /* @__PURE__ */ Tn(kn);
var wr = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function An() {
  if (it)
    return Ye;
  it = 1;
  var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, f, u) {
    var p, m = {}, h = null, E = null;
    u !== void 0 && (h = "" + u), f.key !== void 0 && (h = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (p in f)
      n.call(f, p) && !a.hasOwnProperty(p) && (m[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: r, type: l, key: h, ref: E, props: m, _owner: i.current };
  }
  return Ye.Fragment = t, Ye.jsx = s, Ye.jsxs = s, Ye;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function In() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), T = Symbol.iterator, g = "@@iterator";
    function C(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = T && o[T] || o[g];
      return typeof c == "function" ? c : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(o) {
      {
        for (var c = arguments.length, y = new Array(c > 1 ? c - 1 : 0), _ = 1; _ < c; _++)
          y[_ - 1] = arguments[_];
        Y("error", o, y);
      }
    }
    function Y(o, c, y) {
      {
        var _ = D.ReactDebugCurrentFrame, F = _.getStackAddendum();
        F !== "" && (c += "%s", y = y.concat([F]));
        var z = y.map(function(M) {
          return String(M);
        });
        z.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, z);
      }
    }
    var V = !1, b = !1, pe = !1, Fe = !1, We = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function Be(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || We || o === i || o === u || o === p || Fe || o === E || V || b || pe || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === m || o.$$typeof === s || o.$$typeof === l || o.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Ee || o.getModuleId !== void 0));
    }
    function Oe(o, c, y) {
      var _ = o.displayName;
      if (_)
        return _;
      var F = c.displayName || c.name || "";
      return F !== "" ? y + "(" + F + ")" : y;
    }
    function Te(o) {
      return o.displayName || "Context";
    }
    function re(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var c = o;
            return Te(c) + ".Consumer";
          case s:
            var y = o;
            return Te(y._context) + ".Provider";
          case f:
            return Oe(o, o.render, "ForwardRef");
          case m:
            var _ = o.displayName || null;
            return _ !== null ? _ : re(o.type) || "Memo";
          case h: {
            var F = o, z = F._payload, M = F._init;
            try {
              return re(M(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, he = 0, oe, de, ve, _e, d, x, j;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function S() {
      {
        if (he === 0) {
          oe = console.log, de = console.info, ve = console.warn, _e = console.error, d = console.group, x = console.groupCollapsed, j = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        he++;
      }
    }
    function I() {
      {
        if (he--, he === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, o, {
              value: oe
            }),
            info: te({}, o, {
              value: de
            }),
            warn: te({}, o, {
              value: ve
            }),
            error: te({}, o, {
              value: _e
            }),
            group: te({}, o, {
              value: d
            }),
            groupCollapsed: te({}, o, {
              value: x
            }),
            groupEnd: te({}, o, {
              value: j
            })
          });
        }
        he < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = D.ReactCurrentDispatcher, R;
    function $(o, c, y) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (F) {
            var _ = F.stack.trim().match(/\n( *(at )?)/);
            R = _ && _[1] || "";
          }
        return `
` + R + o;
      }
    }
    var N = !1, k;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      k = new Q();
    }
    function v(o, c) {
      if (!o || N)
        return "";
      {
        var y = k.get(o);
        if (y !== void 0)
          return y;
      }
      var _;
      N = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = w.current, w.current = null, S();
      try {
        if (c) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (ne) {
              _ = ne;
            }
            Reflect.construct(o, [], M);
          } else {
            try {
              M.call();
            } catch (ne) {
              _ = ne;
            }
            o.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            _ = ne;
          }
          o();
        }
      } catch (ne) {
        if (ne && _ && typeof ne.stack == "string") {
          for (var A = ne.stack.split(`
`), ee = _.stack.split(`
`), G = A.length - 1, X = ee.length - 1; G >= 1 && X >= 0 && A[G] !== ee[X]; )
            X--;
          for (; G >= 1 && X >= 0; G--, X--)
            if (A[G] !== ee[X]) {
              if (G !== 1 || X !== 1)
                do
                  if (G--, X--, X < 0 || A[G] !== ee[X]) {
                    var se = `
` + A[G].replace(" at new ", " at ");
                    return o.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", o.displayName)), typeof o == "function" && k.set(o, se), se;
                  }
                while (G >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        N = !1, w.current = z, I(), Error.prepareStackTrace = F;
      }
      var Re = o ? o.displayName || o.name : "", xe = Re ? $(Re) : "";
      return typeof o == "function" && k.set(o, xe), xe;
    }
    function ae(o, c, y) {
      return v(o, !1);
    }
    function Se(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function be(o, c, y) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return v(o, Se(o));
      if (typeof o == "string")
        return $(o);
      switch (o) {
        case u:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            return ae(o.render);
          case m:
            return be(o.type, c, y);
          case h: {
            var _ = o, F = _._payload, z = _._init;
            try {
              return be(z(F), c, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Nr = {}, Fr = D.ReactDebugCurrentFrame;
    function Ze(o) {
      if (o) {
        var c = o._owner, y = be(o.type, o._source, c ? c.type : null);
        Fr.setExtraStackFrame(y);
      } else
        Fr.setExtraStackFrame(null);
    }
    function Ft(o, c, y, _, F) {
      {
        var z = Function.call.bind(Le);
        for (var M in o)
          if (z(o, M)) {
            var A = void 0;
            try {
              if (typeof o[M] != "function") {
                var ee = Error((_ || "React class") + ": " + y + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              A = o[M](c, M, _, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              A = G;
            }
            A && !(A instanceof Error) && (Ze(F), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", y, M, typeof A), Ze(null)), A instanceof Error && !(A.message in Nr) && (Nr[A.message] = !0, Ze(F), L("Failed %s type: %s", y, A.message), Ze(null));
          }
      }
    }
    var Wt = Array.isArray;
    function lr(o) {
      return Wt(o);
    }
    function Bt(o) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, y = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return y;
      }
    }
    function Lt(o) {
      try {
        return Wr(o), !1;
      } catch {
        return !0;
      }
    }
    function Wr(o) {
      return "" + o;
    }
    function Br(o) {
      if (Lt(o))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bt(o)), Wr(o);
    }
    var ze = D.ReactCurrentOwner, zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lr, zr, dr;
    dr = {};
    function Ut(o) {
      if (Le.call(o, "ref")) {
        var c = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Yt(o) {
      if (Le.call(o, "key")) {
        var c = Object.getOwnPropertyDescriptor(o, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Vt(o, c) {
      if (typeof o.ref == "string" && ze.current && c && ze.current.stateNode !== c) {
        var y = re(ze.current.type);
        dr[y] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(ze.current.type), o.ref), dr[y] = !0);
      }
    }
    function qt(o, c) {
      {
        var y = function() {
          Lr || (Lr = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Kt(o, c) {
      {
        var y = function() {
          zr || (zr = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Gt = function(o, c, y, _, F, z, M) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: c,
        ref: y,
        props: M,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Ht(o, c, y, _, F) {
      {
        var z, M = {}, A = null, ee = null;
        y !== void 0 && (Br(y), A = "" + y), Yt(c) && (Br(c.key), A = "" + c.key), Ut(c) && (ee = c.ref, Vt(c, F));
        for (z in c)
          Le.call(c, z) && !zt.hasOwnProperty(z) && (M[z] = c[z]);
        if (o && o.defaultProps) {
          var G = o.defaultProps;
          for (z in G)
            M[z] === void 0 && (M[z] = G[z]);
        }
        if (A || ee) {
          var X = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && qt(M, X), ee && Kt(M, X);
        }
        return Gt(o, A, ee, F, _, ze.current, M);
      }
    }
    var pr = D.ReactCurrentOwner, Ur = D.ReactDebugCurrentFrame;
    function we(o) {
      if (o) {
        var c = o._owner, y = be(o.type, o._source, c ? c.type : null);
        Ur.setExtraStackFrame(y);
      } else
        Ur.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function mr(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Yr() {
      {
        if (pr.current) {
          var o = re(pr.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Jt(o) {
      {
        if (o !== void 0) {
          var c = o.fileName.replace(/^.*[\\\/]/, ""), y = o.lineNumber;
          return `

Check your code at ` + c + ":" + y + ".";
        }
        return "";
      }
    }
    var Vr = {};
    function Xt(o) {
      {
        var c = Yr();
        if (!c) {
          var y = typeof o == "string" ? o : o.displayName || o.name;
          y && (c = `

Check the top-level render call using <` + y + ">.");
        }
        return c;
      }
    }
    function qr(o, c) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var y = Xt(c);
        if (Vr[y])
          return;
        Vr[y] = !0;
        var _ = "";
        o && o._owner && o._owner !== pr.current && (_ = " It was passed a child from " + re(o._owner.type) + "."), we(o), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, _), we(null);
      }
    }
    function Kr(o, c) {
      {
        if (typeof o != "object")
          return;
        if (lr(o))
          for (var y = 0; y < o.length; y++) {
            var _ = o[y];
            mr(_) && qr(_, c);
          }
        else if (mr(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = C(o);
          if (typeof F == "function" && F !== o.entries)
            for (var z = F.call(o), M; !(M = z.next()).done; )
              mr(M.value) && qr(M.value, c);
        }
      }
    }
    function Zt(o) {
      {
        var c = o.type;
        if (c == null || typeof c == "string")
          return;
        var y;
        if (typeof c == "function")
          y = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === m))
          y = c.propTypes;
        else
          return;
        if (y) {
          var _ = re(c);
          Ft(y, o.props, "prop", _, o);
        } else if (c.PropTypes !== void 0 && !hr) {
          hr = !0;
          var F = re(c);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(o) {
      {
        for (var c = Object.keys(o.props), y = 0; y < c.length; y++) {
          var _ = c[y];
          if (_ !== "children" && _ !== "key") {
            we(o), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), we(null);
            break;
          }
        }
        o.ref !== null && (we(o), L("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Gr = {};
    function Hr(o, c, y, _, F, z) {
      {
        var M = Be(o);
        if (!M) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Jt(F);
          ee ? A += ee : A += Yr();
          var G;
          o === null ? G = "null" : lr(o) ? G = "array" : o !== void 0 && o.$$typeof === r ? (G = "<" + (re(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : G = typeof o, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, A);
        }
        var X = Ht(o, c, y, F, z);
        if (X == null)
          return X;
        if (M) {
          var se = c.children;
          if (se !== void 0)
            if (_)
              if (lr(se)) {
                for (var Re = 0; Re < se.length; Re++)
                  Kr(se[Re], o);
                Object.freeze && Object.freeze(se);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kr(se, o);
        }
        if (Le.call(c, "key")) {
          var xe = re(o), ne = Object.keys(c).filter(function(an) {
            return an !== "key";
          }), gr = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gr[xe + gr]) {
            var on = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gr, xe, on, xe), Gr[xe + gr] = !0;
          }
        }
        return o === n ? Qt(X) : Zt(X), X;
      }
    }
    function en(o, c, y) {
      return Hr(o, c, y, !0);
    }
    function rn(o, c, y) {
      return Hr(o, c, y, !1);
    }
    var tn = rn, nn = en;
    Ve.Fragment = n, Ve.jsx = tn, Ve.jsxs = nn;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? wr.exports = An() : wr.exports = In();
var O = wr.exports;
function Ae(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function St(e) {
  if (/* @__PURE__ */ vt.isValidElement(e) || !Ae(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = St(e[t]);
  }), r;
}
function me(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? Z({}, e) : e;
  return Ae(e) && Ae(r) && Object.keys(r).forEach((i) => {
    /* @__PURE__ */ vt.isValidElement(r[i]) ? n[i] = r[i] : Ae(r[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Ae(e[i]) ? n[i] = me(e[i], r[i], t) : t.clone ? n[i] = Ae(r[i]) ? St(r[i]) : r[i] : n[i] = r[i];
  }), n;
}
const Mn = ["values", "unit", "step"], Dn = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => Z({}, t, {
    [n.key]: n.val
  }), {});
};
function Nn(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, i = De(e, Mn), a = Dn(r), s = Object.keys(a);
  function l(h) {
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t})`;
  }
  function f(h) {
    return `@media (max-width:${(typeof r[h] == "number" ? r[h] : h) - n / 100}${t})`;
  }
  function u(h, E) {
    const T = s.indexOf(E);
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t}) and (max-width:${(T !== -1 && typeof r[s[T]] == "number" ? r[s[T]] : E) - n / 100}${t})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function m(h) {
    const E = s.indexOf(h);
    return E === 0 ? l(s[1]) : E === s.length - 1 ? f(s[E]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return Z({
    keys: s,
    values: a,
    up: l,
    down: f,
    between: u,
    only: p,
    not: m,
    unit: t
  }, i);
}
const Fn = {
  borderRadius: 4
}, Wn = Fn, Bn = process.env.NODE_ENV !== "production" ? Ue.oneOfType([Ue.number, Ue.string, Ue.object, Ue.array]) : {}, ye = Bn;
function Ke(e, r) {
  return r ? me(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const $r = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, st = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${$r[e]}px)`
};
function ge(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const a = n.breakpoints || st;
    return r.reduce((s, l, f) => (s[a.up(a.keys[f])] = t(r[f]), s), {});
  }
  if (typeof r == "object") {
    const a = n.breakpoints || st;
    return Object.keys(r).reduce((s, l) => {
      if (Object.keys(a.values || $r).indexOf(l) !== -1) {
        const f = a.up(l);
        s[f] = t(r[l], l);
      } else {
        const f = l;
        s[f] = r[f];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Ln(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, i) => {
    const a = e.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function ut(e, r) {
  return e.reduce((t, n) => {
    const i = t[n];
    return (!i || Object.keys(i).length === 0) && delete t[n], t;
  }, r);
}
function wt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ge(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function nr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function er(e, r, t, n = t) {
  let i;
  return typeof e == "function" ? i = e(t) : Array.isArray(e) ? i = e[t] || n : i = nr(e, t) || n, r && (i = r(i, n, e)), i;
}
function H(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: i
  } = e, a = (s) => {
    if (s[r] == null)
      return null;
    const l = s[r], f = s.theme, u = nr(f, n) || {};
    return ge(s, l, (m) => {
      let h = er(u, i, m);
      return m === h && typeof m == "string" && (h = er(u, i, `${r}${m === "default" ? "" : wt(m)}`, m)), t === !1 ? h : {
        [t]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: ye
  } : {}, a.filterProps = [r], a;
}
function zn(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Un = {
  m: "margin",
  p: "padding"
}, Yn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ct = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Vn = zn((e) => {
  if (e.length > 2)
    if (ct[e])
      e = ct[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Un[r], i = Yn[t] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), or = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ir = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], qn = [...or, ...ir];
function Je(e, r, t, n) {
  var i;
  const a = (i = nr(e, r, !1)) != null ? i : t;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Rt(e) {
  return Je(e, "spacing", 8, "spacing");
}
function Xe(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Kn(e, r) {
  return (t) => e.reduce((n, i) => (n[i] = Xe(r, t), n), {});
}
function Gn(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const i = Vn(t), a = Kn(i, n), s = e[t];
  return ge(e, s, a);
}
function Ct(e, r) {
  const t = Rt(e.theme);
  return Object.keys(e).map((n) => Gn(e, r, n, t)).reduce(Ke, {});
}
function q(e) {
  return Ct(e, or);
}
q.propTypes = process.env.NODE_ENV !== "production" ? or.reduce((e, r) => (e[r] = ye, e), {}) : {};
q.filterProps = or;
function K(e) {
  return Ct(e, ir);
}
K.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, r) => (e[r] = ye, e), {}) : {};
K.filterProps = ir;
process.env.NODE_ENV !== "production" && qn.reduce((e, r) => (e[r] = ye, e), {});
function Hn(e = 8) {
  if (e.mui)
    return e;
  const r = Rt({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = r(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function ar(...e) {
  const r = e.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), t = (n) => Object.keys(n).reduce((i, a) => r[a] ? Ke(i, r[a](n)) : i, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, t.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), t;
}
function ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function fe(e, r) {
  return H({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Jn = fe("border", ue), Xn = fe("borderTop", ue), Zn = fe("borderRight", ue), Qn = fe("borderBottom", ue), eo = fe("borderLeft", ue), ro = fe("borderColor"), to = fe("borderTopColor"), no = fe("borderRightColor"), oo = fe("borderBottomColor"), io = fe("borderLeftColor"), ao = fe("outline", ue), so = fe("outlineColor"), sr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Je(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Xe(r, n)
    });
    return ge(e, e.borderRadius, t);
  }
  return null;
};
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ye
} : {};
sr.filterProps = ["borderRadius"];
ar(Jn, Xn, Zn, Qn, eo, ro, to, no, oo, io, sr, ao, so);
const ur = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Je(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Xe(r, n)
    });
    return ge(e, e.gap, t);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ye
} : {};
ur.filterProps = ["gap"];
const cr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Je(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Xe(r, n)
    });
    return ge(e, e.columnGap, t);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ye
} : {};
cr.filterProps = ["columnGap"];
const fr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Je(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Xe(r, n)
    });
    return ge(e, e.rowGap, t);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ye
} : {};
fr.filterProps = ["rowGap"];
const uo = H({
  prop: "gridColumn"
}), co = H({
  prop: "gridRow"
}), fo = H({
  prop: "gridAutoFlow"
}), lo = H({
  prop: "gridAutoColumns"
}), po = H({
  prop: "gridAutoRows"
}), ho = H({
  prop: "gridTemplateColumns"
}), mo = H({
  prop: "gridTemplateRows"
}), go = H({
  prop: "gridTemplateAreas"
}), yo = H({
  prop: "gridArea"
});
ar(ur, cr, fr, uo, co, fo, lo, po, ho, mo, go, yo);
function Ie(e, r) {
  return r === "grey" ? r : e;
}
const vo = H({
  prop: "color",
  themeKey: "palette",
  transform: Ie
}), bo = H({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ie
}), xo = H({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ie
});
ar(vo, bo, xo);
function ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Eo = H({
  prop: "width",
  transform: ie
}), kr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, i;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || $r[t];
      return a ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: ie(t)
      };
    };
    return ge(e, e.maxWidth, r);
  }
  return null;
};
kr.filterProps = ["maxWidth"];
const Oo = H({
  prop: "minWidth",
  transform: ie
}), To = H({
  prop: "height",
  transform: ie
}), _o = H({
  prop: "maxHeight",
  transform: ie
}), So = H({
  prop: "minHeight",
  transform: ie
});
H({
  prop: "size",
  cssProperty: "width",
  transform: ie
});
H({
  prop: "size",
  cssProperty: "height",
  transform: ie
});
const wo = H({
  prop: "boxSizing"
});
ar(Eo, kr, Oo, To, _o, So, wo);
const Ro = {
  // borders
  border: {
    themeKey: "borders",
    transform: ue
  },
  borderTop: {
    themeKey: "borders",
    transform: ue
  },
  borderRight: {
    themeKey: "borders",
    transform: ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: sr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ie
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ie
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ie
  },
  // spacing
  p: {
    style: K
  },
  pt: {
    style: K
  },
  pr: {
    style: K
  },
  pb: {
    style: K
  },
  pl: {
    style: K
  },
  px: {
    style: K
  },
  py: {
    style: K
  },
  padding: {
    style: K
  },
  paddingTop: {
    style: K
  },
  paddingRight: {
    style: K
  },
  paddingBottom: {
    style: K
  },
  paddingLeft: {
    style: K
  },
  paddingX: {
    style: K
  },
  paddingY: {
    style: K
  },
  paddingInline: {
    style: K
  },
  paddingInlineStart: {
    style: K
  },
  paddingInlineEnd: {
    style: K
  },
  paddingBlock: {
    style: K
  },
  paddingBlockStart: {
    style: K
  },
  paddingBlockEnd: {
    style: K
  },
  m: {
    style: q
  },
  mt: {
    style: q
  },
  mr: {
    style: q
  },
  mb: {
    style: q
  },
  ml: {
    style: q
  },
  mx: {
    style: q
  },
  my: {
    style: q
  },
  margin: {
    style: q
  },
  marginTop: {
    style: q
  },
  marginRight: {
    style: q
  },
  marginBottom: {
    style: q
  },
  marginLeft: {
    style: q
  },
  marginX: {
    style: q
  },
  marginY: {
    style: q
  },
  marginInline: {
    style: q
  },
  marginInlineStart: {
    style: q
  },
  marginInlineEnd: {
    style: q
  },
  marginBlock: {
    style: q
  },
  marginBlockStart: {
    style: q
  },
  marginBlockEnd: {
    style: q
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ur
  },
  rowGap: {
    style: fr
  },
  columnGap: {
    style: cr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ie
  },
  maxWidth: {
    style: kr
  },
  minWidth: {
    transform: ie
  },
  height: {
    transform: ie
  },
  maxHeight: {
    transform: ie
  },
  minHeight: {
    transform: ie
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Ar = Ro;
function Co(...e) {
  const r = e.reduce((n, i) => n.concat(Object.keys(i)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Po(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function jo() {
  function e(t, n, i, a) {
    const s = {
      [t]: n,
      theme: i
    }, l = a[t];
    if (!l)
      return {
        [t]: n
      };
    const {
      cssProperty: f = t,
      themeKey: u,
      transform: p,
      style: m
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const h = nr(i, u) || {};
    return m ? m(s) : ge(s, n, (T) => {
      let g = er(h, p, T);
      return T === g && typeof T == "string" && (g = er(h, p, `${t}${T === "default" ? "" : wt(T)}`, T)), f === !1 ? g : {
        [f]: g
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: i,
      theme: a = {},
      nested: s
    } = t || {};
    if (!i)
      return null;
    const l = (n = a.unstable_sxConfig) != null ? n : Ar;
    function f(u) {
      let p = u;
      if (typeof u == "function")
        p = u(a);
      else if (typeof u != "object")
        return u;
      if (!p)
        return null;
      const m = Ln(a.breakpoints), h = Object.keys(m);
      let E = m;
      return Object.keys(p).forEach((T) => {
        const g = Po(p[T], a);
        if (g != null)
          if (typeof g == "object")
            if (l[T])
              E = Ke(E, e(T, g, a, l));
            else {
              const C = ge({
                theme: a
              }, g, (D) => ({
                [T]: D
              }));
              Co(C, g) ? E[T] = r({
                sx: g,
                theme: a,
                nested: !0
              }) : E = Ke(E, C);
            }
          else
            E = Ke(E, e(T, g, a, l));
      }), !s && a.modularCssLayers ? {
        "@layer sx": ut(h, E)
      } : ut(h, E);
    }
    return Array.isArray(i) ? i.map(f) : f(i);
  }
  return r;
}
const Pt = jo();
Pt.filterProps = ["sx"];
const jt = Pt;
function $o(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const ko = ["breakpoints", "palette", "spacing", "shape"];
function Ao(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: i,
    shape: a = {}
  } = e, s = De(e, ko), l = Nn(t), f = Hn(i);
  let u = me({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Z({
      mode: "light"
    }, n),
    spacing: f,
    shape: Z({}, Wn, a)
  }, s);
  return u.applyStyles = $o, u = r.reduce((p, m) => me(p, m), u), u.unstable_sxConfig = Z({}, Ar, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return jt({
      sx: m,
      theme: this
    });
  }, u;
}
const ft = (e) => e, Io = () => {
  let e = ft;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ft;
    }
  };
}, Mo = Io(), Do = Mo, No = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Fo(e, r, t = "Mui") {
  const n = No[r];
  return n ? `${t}-${n}` : `${Do.generate(e)}-${r}`;
}
function Wo(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wo
}, Symbol.toStringTag, { value: "Module" }));
function Lo(e, r) {
  return Z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var J = {}, $t = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})($t);
var zo = $t.exports;
const Uo = /* @__PURE__ */ Ot(On), Yo = /* @__PURE__ */ Ot(Bo);
var kt = zo;
Object.defineProperty(J, "__esModule", {
  value: !0
});
J.alpha = Dt;
J.blend = ti;
J.colorChannel = void 0;
var Vo = J.darken = Mr;
J.decomposeColor = ce;
J.emphasize = Nt;
var lt = J.getContrastRatio = Xo;
J.getLuminance = rr;
J.hexToRgb = At;
J.hslToRgb = Mt;
var qo = J.lighten = Dr;
J.private_safeAlpha = Zo;
J.private_safeColorChannel = void 0;
J.private_safeDarken = Qo;
J.private_safeEmphasize = ri;
J.private_safeLighten = ei;
J.recomposeColor = Ne;
J.rgbToHex = Jo;
var dt = kt(Uo), Ko = kt(Yo);
function Ir(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Ko.default)(e, r, t);
}
function At(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Go(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function ce(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ce(At(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, dt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), i;
  if (t === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, dt.default)(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: t,
    values: n,
    colorSpace: i
  };
}
const It = (e) => {
  const r = ce(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
J.colorChannel = It;
const Ho = (e, r) => {
  try {
    return It(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
J.private_safeColorChannel = Ho;
function Ne(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Jo(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = ce(e);
  return `#${r.map((t, n) => Go(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function Mt(e) {
  e = ce(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, i = r[2] / 100, a = n * Math.min(i, 1 - i), s = (u, p = (u + t / 30) % 12) => i - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", f.push(r[3])), Ne({
    type: l,
    values: f
  });
}
function rr(e) {
  e = ce(e);
  let r = e.type === "hsl" || e.type === "hsla" ? ce(Mt(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Xo(e, r) {
  const t = rr(e), n = rr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Dt(e, r) {
  return e = ce(e), r = Ir(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ne(e);
}
function Zo(e, r, t) {
  try {
    return Dt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Mr(e, r) {
  if (e = ce(e), r = Ir(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ne(e);
}
function Qo(e, r, t) {
  try {
    return Mr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Dr(e, r) {
  if (e = ce(e), r = Ir(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ne(e);
}
function ei(e, r, t) {
  try {
    return Dr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Nt(e, r = 0.15) {
  return rr(e) > 0.5 ? Mr(e, r) : Dr(e, r);
}
function ri(e, r, t) {
  try {
    return Nt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function ti(e, r, t, n = 1) {
  const i = (f, u) => Math.round((f ** (1 / n) * (1 - t) + u ** (1 / n) * t) ** n), a = ce(e), s = ce(r), l = [i(a.values[0], s.values[0]), i(a.values[1], s.values[1]), i(a.values[2], s.values[2])];
  return Ne({
    type: "rgb",
    values: l
  });
}
const ni = {
  black: "#000",
  white: "#fff"
}, He = ni, oi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ii = oi, ai = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ce = ai, si = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Pe = si, ui = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, qe = ui, ci = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, je = ci, fi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, $e = fi, li = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ke = li, di = ["mode", "contrastThreshold", "tonalOffset"], pt = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: He.white,
    default: He.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, _r = {
  text: {
    primary: He.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: He.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ht(e, r, t, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = qo(e.main, i) : r === "dark" && (e.dark = Vo(e.main, a)));
}
function pi(e = "light") {
  return e === "dark" ? {
    main: je[200],
    light: je[50],
    dark: je[400]
  } : {
    main: je[700],
    light: je[400],
    dark: je[800]
  };
}
function hi(e = "light") {
  return e === "dark" ? {
    main: Ce[200],
    light: Ce[50],
    dark: Ce[400]
  } : {
    main: Ce[500],
    light: Ce[300],
    dark: Ce[700]
  };
}
function mi(e = "light") {
  return e === "dark" ? {
    main: Pe[500],
    light: Pe[300],
    dark: Pe[700]
  } : {
    main: Pe[700],
    light: Pe[400],
    dark: Pe[800]
  };
}
function gi(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[700],
    light: $e[500],
    dark: $e[900]
  };
}
function yi(e = "light") {
  return e === "dark" ? {
    main: ke[400],
    light: ke[300],
    dark: ke[700]
  } : {
    main: ke[800],
    light: ke[500],
    dark: ke[900]
  };
}
function vi(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qe[500],
    dark: qe[900]
  };
}
function bi(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, i = De(e, di), a = e.primary || pi(r), s = e.secondary || hi(r), l = e.error || mi(r), f = e.info || gi(r), u = e.success || yi(r), p = e.warning || vi(r);
  function m(g) {
    const C = lt(g, _r.text.primary) >= t ? _r.text.primary : pt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const D = lt(g, C);
      D < 3 && console.error([`MUI: The contrast ratio of ${D}:1 for ${C} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: g,
    name: C,
    mainShade: D = 500,
    lightShade: L = 300,
    darkShade: Y = 700
  }) => {
    if (g = Z({}, g), !g.main && g[D] && (g.main = g[D]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${D}\` property.` : Ge(11, C ? ` (${C})` : "", D));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ge(12, C ? ` (${C})` : "", JSON.stringify(g.main)));
    return ht(g, "light", L, n), ht(g, "dark", Y, n), g.contrastText || (g.contrastText = m(g.main)), g;
  }, E = {
    dark: _r,
    light: pt
  };
  return process.env.NODE_ENV !== "production" && (E[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), me(Z({
    // A collection of common colors.
    common: Z({}, He),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ii,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[r]), i);
}
const xi = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ei(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mt = {
  textTransform: "uppercase"
}, gt = '"Roboto", "Helvetica", "Arial", sans-serif';
function Oi(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = gt,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: f = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: m
  } = t, h = De(t, xi);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = i / 14, T = m || ((D) => `${D / u * E}rem`), g = (D, L, Y, V, b) => Z({
    fontFamily: n,
    fontWeight: D,
    fontSize: T(L),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Y
  }, n === gt ? {
    letterSpacing: `${Ei(V / L)}em`
  } : {}, b, p), C = {
    h1: g(a, 96, 1.167, -1.5),
    h2: g(a, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(l, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(l, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(l, 14, 1.75, 0.4, mt),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, mt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me(Z({
    htmlFontSize: u,
    pxToRem: T,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: f
  }, C), h, {
    clone: !1
    // No need to clone deep
  });
}
const Ti = 0.2, _i = 0.14, Si = 0.12;
function U(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ti})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_i})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Si})`].join(",");
}
const wi = ["none", U(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), U(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), U(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), U(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), U(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), U(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), U(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), U(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), U(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), U(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), U(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), U(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), U(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), U(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), U(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), U(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), U(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), U(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), U(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), U(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), U(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), U(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), U(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), U(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ri = wi, Ci = ["duration", "easing", "delay"], Pi = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ji = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function yt(e) {
  return `${Math.round(e)}ms`;
}
function $i(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function ki(e) {
  const r = Z({}, Pi, e.easing), t = Z({}, ji, e.duration);
  return Z({
    getAutoHeightDuration: $i,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = t.standard,
        easing: l = r.easeInOut,
        delay: f = 0
      } = a, u = De(a, Ci);
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", m = (h) => !isNaN(parseFloat(h));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !m(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof s == "string" ? s : yt(s)} ${l} ${typeof f == "string" ? f : yt(f)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Ai = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ii = Ai, Mi = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Di(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = De(e, Mi);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ge(18));
  const l = bi(n), f = Ao(e);
  let u = me(f, {
    mixins: Lo(f.breakpoints, t),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ri.slice(),
    typography: Oi(l, a),
    transitions: ki(i),
    zIndex: Z({}, Ii)
  });
  if (u = me(u, s), u = r.reduce((p, m) => me(p, m), u), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (h, E) => {
      let T;
      for (T in h) {
        const g = h[T];
        if (p.indexOf(T) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = Fo("", T);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[T] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const E = u.components[h].styleOverrides;
      E && h.indexOf("Mui") === 0 && m(E, h);
    });
  }
  return u.unstable_sxConfig = Z({}, Ar, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return jt({
      sx: m,
      theme: this
    });
  }, u;
}
const Bi = Di({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0"
    },
    secondary: {
      main: "#dc004e",
      light: "#f73378",
      dark: "#9a0036"
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c"
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00"
    },
    error: {
      main: "#f44336",
      light: "#ef5350",
      dark: "#d32f2f"
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2"
    },
    background: {
      default: "#0d1117",
      paper: "#161b22"
    },
    text: {
      primary: "#e6edf3",
      secondary: "#8b949e"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.6
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43
    },
    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.375rem",
          textTransform: "none",
          fontWeight: 600,
          padding: "0.5rem 1rem"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          backgroundImage: "none"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    }
  }
});
function le({ height: e = 56, width: r = "100%", showLabel: t = !1, showHelperText: n = !1, labelWidth: i = "40%", helperTextWidth: a = "60%" }) {
  return O.jsxs(bt, { sx: { width: r }, children: [t && O.jsx(yr, { "data-testid": "skeleton", variant: "text", width: i, height: 20, sx: { mb: 1 } }), O.jsx(yr, { "data-testid": "skeleton", variant: "rectangular", width: "100%", height: e, sx: { borderRadius: 1 } }), n && O.jsx(yr, { "data-testid": "skeleton", variant: "text", width: a, height: 16, sx: { mt: 0.5 } })] });
}
function Li({ label: e, loading: r = !1, ...t }) {
  return r ? O.jsx(le, { height: 56, width: "100%", showLabel: !0 }) : O.jsx(Me, { label: e, variant: "outlined", size: "medium", fullWidth: !0, ...t });
}
function zi({ label: e, options: r, helperText: t, error: n, required: i, disabled: a, fullWidth: s = !0, loading: l = !1, size: f = "medium", value: u, onChange: p, ...m }) {
  return l ? O.jsx(le, { height: 56, width: "100%", showLabel: !0 }) : O.jsxs(Cr, { fullWidth: s, error: n, disabled: a, required: i, size: f, children: [O.jsx(un, { children: e }), O.jsx(cn, { value: u, onChange: p, label: e, ...m, children: r.map((h) => O.jsx(fn, { value: h.value, children: h.label }, h.value)) }), t && O.jsx(tr, { children: t })] });
}
function Ui({ label: e, loading: r = !1, ...t }) {
  return r ? O.jsx(le, { height: 56, width: "100%", showLabel: !0 }) : O.jsx(Me, { label: e, type: "date", variant: "outlined", fullWidth: !0, InputLabelProps: {
    shrink: !0
  }, ...t });
}
function Yi({ label: e, checked: r, onChange: t, helperText: n, error: i, required: a, disabled: s, loading: l = !1, ...f }) {
  return l ? O.jsx(le, { height: 24, width: "100%", showLabel: !1 }) : O.jsxs(O.Fragment, { children: [O.jsx(xt, { control: O.jsx(ln, { checked: r, onChange: t, required: a, disabled: s, color: i ? "error" : "primary" }), label: e, disabled: s, ...f }), n && O.jsx(tr, { error: i, children: n })] });
}
function Vi({ label: e, rows: r = 4, loading: t = !1, ...n }) {
  return t ? O.jsx(le, { height: r * 24 + 16, width: "100%", showLabel: !0 }) : O.jsx(Me, { label: e, multiline: !0, rows: r, variant: "outlined", fullWidth: !0, ...n });
}
function qi({ label: e, accept: r, loading: t = !1, onChange: n, ...i }) {
  const a = Rr.useRef(null);
  if (t)
    return O.jsx(le, { height: 56, width: "100%", showLabel: !0 });
  const s = (f) => {
    var p;
    const u = ((p = f.target.files) == null ? void 0 : p[0]) || null;
    n == null || n(u);
  }, l = () => {
    var f;
    (f = a.current) == null || f.click();
  };
  return O.jsxs(O.Fragment, { children: [O.jsx("input", { ref: a, type: "file", accept: r, onChange: s, style: { display: "none" }, "data-testid": "file-input" }), O.jsx(Me, { label: e, variant: "outlined", fullWidth: !0, InputProps: {
    readOnly: !0,
    endAdornment: O.jsx(Pr, { variant: "contained", onClick: l, size: "small", sx: { ml: 1 }, children: "Browse" })
  }, ...i })] });
}
function Ki({ label: e, loading: r = !1, showPassword: t, onShowPasswordChange: n, strength: i, ...a }) {
  const [s, l] = sn(!1);
  if (r)
    return O.jsx(le, { height: 56, width: "100%", showLabel: !0 });
  const f = t ?? s, u = n ?? l, p = () => {
    u(!f);
  }, m = () => {
    switch (i) {
      case "weak":
        return "error.main";
      case "medium":
        return "warning.main";
      case "strong":
        return "success.main";
      default:
        return "text.secondary";
    }
  };
  return O.jsx(Me, { label: e, type: f ? "text" : "password", variant: "outlined", fullWidth: !0, InputProps: {
    endAdornment: O.jsx(dn, { position: "end", children: O.jsx(pn, { "aria-label": "toggle password visibility", onClick: p, edge: "end", children: f ? O.jsx(vn, {}) : O.jsx(bn, {}) }) })
  }, sx: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: i ? m() : void 0
      }
    }
  }, ...a });
}
function Gi({ label: e, min: r, max: t, step: n = 1, loading: i = !1, ...a }) {
  return i ? O.jsx(le, { height: 56, width: "100%", showLabel: !0 }) : O.jsx(Me, { label: e, type: "number", variant: "outlined", fullWidth: !0, inputProps: {
    ...r !== void 0 && { min: r },
    ...t !== void 0 && { max: t },
    ...n !== void 0 && { step: n }
  }, ...a });
}
function Hi({ label: e, options: r, helperText: t, error: n, required: i, disabled: a, loading: s = !1, row: l = !1, ...f }) {
  return s ? O.jsx(le, { height: r.length * 32 + 24, width: "100%", showLabel: !0 }) : O.jsxs(Cr, { error: n, required: i, disabled: a, children: [O.jsx(Et, { children: e }), O.jsx(hn, { row: l, ...f, children: r.map((u) => O.jsx(xt, { value: u.value, control: O.jsx(mn, {}), label: u.label, disabled: a }, u.value)) }), t && O.jsx(tr, { children: t })] });
}
function Ji({ label: e = "Theme", value: r = "dark", onChange: t, helperText: n, error: i, required: a, disabled: s, loading: l = !1, showIcons: f = !0, size: u = "medium", ...p }) {
  const m = gn();
  if (l)
    return O.jsx(le, { height: 40, width: "100%", showLabel: !!e });
  const h = () => {
    if (s || !t)
      return;
    t(r === "dark" ? "light" : "dark");
  }, T = (() => {
    switch (u) {
      case "small":
        return { height: 32, fontSize: "0.75rem" };
      case "large":
        return { height: 48, fontSize: "1rem" };
      default:
        return { height: 40, fontSize: "0.875rem" };
    }
  })();
  return O.jsxs(Cr, { error: i, disabled: s, ...p, children: [e && O.jsx(Et, { required: a, sx: {
    marginBottom: 1,
    color: "text.primary",
    fontSize: "0.875rem",
    fontWeight: 500
  }, children: e }), O.jsx(bt, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: O.jsxs(Pr, { onClick: h, disabled: s, variant: "outlined", size: u, sx: {
    minWidth: 120,
    justifyContent: "flex-start",
    textTransform: "none",
    borderColor: i ? "error.main" : "divider",
    color: "text.primary",
    "&:hover": {
      borderColor: i ? "error.main" : "primary.main",
      backgroundColor: m.palette.action.hover
    },
    "&.Mui-disabled": {
      borderColor: "action.disabled",
      color: "action.disabled"
    },
    height: T.height,
    fontSize: T.fontSize
  }, startIcon: f ? r === "dark" ? O.jsx(xn, { sx: { fontSize: u === "small" ? 16 : u === "large" ? 24 : 20 } }) : O.jsx(En, { sx: { fontSize: u === "small" ? 16 : u === "large" ? 24 : 20 } }) : void 0, children: ["Switch to ", r === "dark" ? "Light" : "Dark", " Mode"] }) }), n && O.jsx(tr, { error: i, sx: { marginTop: 0.5 }, children: n })] });
}
function Xi({
  children: e,
  loading: r = !1,
  loadingText: t,
  variant: n = "contained",
  size: i = "medium",
  color: a = "primary",
  fullWidth: s = !1,
  disabled: l = !1,
  startIcon: f,
  endIcon: u,
  onClick: p,
  ...m
}) {
  return r && !t ? /* @__PURE__ */ O.jsx(le, { height: i === "small" ? 32 : i === "large" ? 48 : 40, width: s ? "100%" : 120 }) : /* @__PURE__ */ O.jsx(
    Pr,
    {
      variant: n,
      size: i,
      color: a,
      fullWidth: s,
      disabled: l || r,
      startIcon: r && t ? /* @__PURE__ */ O.jsx(yn, { size: 16, color: "inherit" }) : f,
      endIcon: u,
      onClick: p,
      ...m,
      children: r && t ? t : e
    }
  );
}
export {
  Xi as Button,
  Yi as CheckboxField,
  Ui as DateField,
  le as FieldSkeleton,
  qi as FileField,
  Gi as NumberField,
  Ki as PasswordField,
  Hi as RadioGroup,
  zi as SelectField,
  Li as TextField,
  Vi as TextareaField,
  Ji as ThemeToggle,
  Bi as hybridTheme
};
