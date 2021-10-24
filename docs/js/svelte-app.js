/* eslint-disable */
var app = function () {
  "use strict";
  function t() { }
  function e(t) {
    return t()
  }
  function n() {
    return Object.create(null)
  }
  function o(t) {
    t.forEach(e)
  }
  function r(t) {
    return "function" == typeof t
  }
  function s(t, e) {
    return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
  }
  function c(t, e) {
    t.appendChild(e)
  }
  function l(t, e, n) {
    t.insertBefore(e, n || null)
  }
  function u(t) {
    t.parentNode.removeChild(t)
  }
  function a(t, e) {
    for (let n = 0; n < t.length; n += 1)
      t[n] && t[n].d(e)
  }
  function i(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
  }
  function f() {
    return t = "",
      document.createTextNode(t);
    var t
  }
  function d(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
  }
  let m;
  function $(t) {
    m = t
  }
  function p(t) {
    (function () {
      if (!m)
        throw new Error("Function called outside component initialization");
      return m
    }
    )().$$.on_mount.push(t)
  }
  const h = []
    , g = []
    , y = []
    , x = []
    , b = Promise.resolve();
  let v = !1;
  function _(t) {
    y.push(t)
  }
  let k = !1;
  const w = new Set;
  function E() {
    if (!k) {
      k = !0;
      do {
        for (let t = 0; t < h.length; t += 1) {
          const e = h[t];
          $(e),
            j(e.$$)
        }
        for ($(null),
          h.length = 0; g.length;)
          g.pop()();
        for (let t = 0; t < y.length; t += 1) {
          const e = y[t];
          w.has(e) || (w.add(e),
            e())
        }
        y.length = 0
      } while (h.length);
      for (; x.length;)
        x.pop()();
      v = !1,
        k = !1,
        w.clear()
    }
  }
  function j(t) {
    if (null !== t.fragment) {
      t.update(),
        o(t.before_update);
      const e = t.dirty;
      t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(_)
    }
  }
  const A = new Set;
  function N(t, e) {
    -1 === t.$$.dirty[0] && (h.push(t),
      v || (v = !0,
        b.then(E)),
      t.$$.dirty.fill(0)),
      t.$$.dirty[e / 31 | 0] |= 1 << e % 31
  }
  function S(s, c, l, a, i, f, d, p = [-1]) {
    const h = m;
    $(s);
    const g = s.$$ = {
      fragment: null,
      ctx: null,
      props: f,
      update: t,
      not_equal: i,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(c.context || (h ? h.$$.context : [])),
      callbacks: n(),
      dirty: p,
      skip_bound: !1,
      root: c.target || h.$$.root
    };
    d && d(g.root);
    let y = !1;
    if (g.ctx = l ? l(s, c.props || {}, ((t, e, ...n) => {
      const o = n.length ? n[0] : e;
      return g.ctx && i(g.ctx[t], g.ctx[t] = o) && (!g.skip_bound && g.bound[t] && g.bound[t](o),
        y && N(s, t)),
        e
    }
    )) : [],
      g.update(),
      y = !0,
      o(g.before_update),
      g.fragment = !!a && a(g.ctx),
      c.target) {
      if (c.hydrate) {
        const t = (v = c.target,
          Array.from(v.childNodes));
        g.fragment && g.fragment.l(t),
          t.forEach(u)
      } else
        g.fragment && g.fragment.c();
      c.intro && ((x = s.$$.fragment) && x.i && (A.delete(x),
        x.i(b))),
        function (t, n, s, c) {
          const { fragment: l, on_mount: u, on_destroy: a, after_update: i } = t.$$;
          l && l.m(n, s),
            c || _((() => {
              const n = u.map(e).filter(r);
              a ? a.push(...n) : o(n),
                t.$$.on_mount = []
            }
            )),
            i.forEach(_)
        }(s, c.target, c.anchor, c.customElement),
        E()
    }
    var x, b, v;
    $(h)
  }
  function O(t, e, n) {
    const o = t.slice();
    return o[4] = e[n],
      o
  }
  function B(t, e, n) {
    const o = t.slice();
    return o[7] = e[n],
      o
  }
  function C(t) {
    let e, n;
    return {
      c() {
        e = i("line"),
          d(e, "class", "minor svelte-1xs85ek"),
          d(e, "y1", "42"),
          d(e, "y2", "45"),
          d(e, "transform", n = "rotate(" + 6 * (t[4] + t[7]) + ")")
      },
      m(t, n) {
        l(t, e, n)
      },
      d(t) {
        t && u(e)
      }
    }
  }
  function D(e) {
    let n, o, r, s = [1, 2, 3, 4], c = [];
    for (let t = 0; t < 4; t += 1)
      c[t] = C(B(e, s, t));
    return {
      c() {
        n = i("line");
        for (let t = 0; t < 4; t += 1)
          c[t].c();
        r = f(),
          d(n, "class", "major svelte-1xs85ek"),
          d(n, "y1", "35"),
          d(n, "y2", "45"),
          d(n, "transform", o = "rotate(" + 30 * e[4] + ")")
      },
      m(t, e) {
        l(t, n, e);
        for (let n = 0; n < 4; n += 1)
          c[n].m(t, e);
        l(t, r, e)
      },
      p: t,
      d(t) {
        t && u(n),
          a(c, t),
          t && u(r)
      }
    }
  }
  function I(e) {
    let n, o, r, s, f, m, $, p, h, g, y = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], x = [];
    for (let t = 0; t < 12; t += 1)
      x[t] = D(O(e, y, t));
    return {
      c() {
        n = i("svg"),
          o = i("circle");
        for (let t = 0; t < 12; t += 1)
          x[t].c();
        r = i("line"),
          f = i("line"),
          $ = i("g"),
          p = i("line"),
          h = i("line"),
          d(o, "class", "clock-face svelte-1xs85ek"),
          d(o, "r", "48"),
          d(r, "class", "hour svelte-1xs85ek"),
          d(r, "y1", "2"),
          d(r, "y2", "-20"),
          d(r, "transform", s = "rotate(" + (30 * e[2] + e[1] / 2) + ")"),
          d(f, "class", "minute svelte-1xs85ek"),
          d(f, "y1", "4"),
          d(f, "y2", "-30"),
          d(f, "transform", m = "rotate(" + (6 * e[1] + e[0] / 10) + ")"),
          d(p, "class", "second svelte-1xs85ek"),
          d(p, "y1", "10"),
          d(p, "y2", "-38"),
          d(h, "class", "second-counterweight svelte-1xs85ek"),
          d(h, "y1", "10"),
          d(h, "y2", "2"),
          d($, "transform", g = "rotate(" + 6 * e[0] + ")"),
          d(n, "viewBox", "-50 -50 100 100"),
          d(n, "class", "svelte-1xs85ek")
      },
      m(t, e) {
        l(t, n, e),
          c(n, o);
        for (let t = 0; t < 12; t += 1)
          x[t].m(n, null);
        c(n, r),
          c(n, f),
          c(n, $),
          c($, p),
          c($, h)
      },
      p(t, [e]) {
        6 & e && s !== (s = "rotate(" + (30 * t[2] + t[1] / 2) + ")") && d(r, "transform", s),
          3 & e && m !== (m = "rotate(" + (6 * t[1] + t[0] / 10) + ")") && d(f, "transform", m),
          1 & e && g !== (g = "rotate(" + 6 * t[0] + ")") && d($, "transform", g)
      },
      i: t,
      o: t,
      d(t) {
        t && u(n),
          a(x, t)
      }
    }
  }
  function M(t, e, n) {
    let o, r, s, c = new Date;
    return p((() => {
      const t = setInterval((() => {
        n(3, c = new Date)
      }
      ), 1e3);
      return () => {
        clearInterval(t)
      }
    }
    )),
      t.$$.update = () => {
        8 & t.$$.dirty && n(2, o = c.getHours()),
          8 & t.$$.dirty && n(1, r = c.getMinutes()),
          8 & t.$$.dirty && n(0, s = c.getSeconds())
      }
      ,
      [s, r, o, c]
  }
  return new class extends class {
    $destroy() {
      !function (t, e) {
        const n = t.$$;
        null !== n.fragment && (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          n.on_destroy = n.fragment = null,
          n.ctx = [])
      }(this, 1),
        this.$destroy = t
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1)
        }
    }
    $set(t) {
      var e;
      this.$$set && (e = t,
        0 !== Object.keys(e).length) && (this.$$.skip_bound = !0,
          this.$$set(t),
          this.$$.skip_bound = !1)
    }
  }
  {
    constructor(t) {
      super(),
        S(this, t, M, I, s, {})
    }
  }
    ({
      target: document.querySelector('#svelte-app'),
      props: {
        name: "world"
      }
    })
}();
//# sourceMappingURL=bundle.js.map
