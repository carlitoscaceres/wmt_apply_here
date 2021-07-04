'use strict';
var n;
Object.freeze(["shared", "exclusive", "unlock"]);
function ba(a, b, c) {
    this.h = a;
    this.v = c;
    this.C = [104, 111, 115, 116, 57, 112];
    this.F = this.C.length;
    this.D = "9P2000.L";
    this.j = this.o = 8192;
    this.i = new Uint8Array(2 * this.j);
    this.B = 0;
    this.g = [];
    this.ab = new ca(b,{
        name: "virtio-9p",
        Ga: 48,
        Be: 4169,
        Ag: 9,
        Ae: {
            Uc: 43008,
            Ya: [{
                Jc: 32,
                ge: 0
            }],
            Nf: [0, 32, 29, 28],
            ak: ()=>{}
        },
        notification: {
            Uc: 43264,
            ej: !1,
            hh: [d=>{
                if (0 === d) {
                    for (; ea(this.l); ) {
                        d = this.l;
                        ea(d);
                        var e = d.s.La(d.h + 4 + 2 * d.j);
                        e = new fa(d,e);
                        d.j = d.j + 1 & d.o;
                        d = e;
                        ia(this, d)
                    }
                    d = this.l;
                    e = d.s.La(d.h + 2) + 0 & 65535;
                    d.s.we(d.g + 4 + 8 * d.size, e)
                }
            }
            ]
        },
        $b: {
            Uc: 42752
        },
        If: {
            Uc: 42496,
            od: [{
                bytes: 2,
                name: "mount tag length",
                read: ()=>this.F,
                write: ()=>{}
            }].concat(Array.from(Array(254).keys()).map(d=>({
                bytes: 1,
                name: "mount tag name " + d,
                read: ()=>this.C[d] || 0,
                write: ()=>{}
            })))
        }
    });
    this.l = this.ab.Ya[0]
}
ba.prototype.X = function() {
    var a = [];
    a[0] = this.C;
    a[1] = this.F;
    a[2] = this.ab;
    a[3] = this.D;
    a[4] = this.o;
    a[5] = this.j;
    a[6] = this.i;
    a[7] = this.B;
    a[8] = this.g.map(function(b) {
        return [b.V, b.type, b.uid, b.Vb]
    });
    a[9] = this.h;
    return a
}
;
ba.prototype.G = function(a) {
    this.C = a[0];
    this.F = a[1];
    this.ab.G(a[2]);
    this.l = this.ab.Ya[0];
    this.D = a[3];
    this.o = a[4];
    this.j = a[5];
    this.i = a[6];
    this.B = a[7];
    this.g = a[8].map(function(b) {
        return {
            V: b[0],
            type: b[1],
            uid: b[2],
            Vb: b[3]
        }
    });
    this.h.G(a[9])
}
;
function u(a, b, c, d) {
    v(["w", "b", "h"], [d + 7, b + 1, c], a.i, 0);
    a.B = d + 7
}
function ja(a, b, c) {
    c = v(["w"], [c], a.i, 7);
    u(a, 6, b, c)
}
function B(a, b) {
    for (var c = a.i.subarray(0, a.B), d = 0, e = c.length; e && b.zf !== b.Af.length; ) {
        var f = b.Af[b.zf];
        const k = f.Ye + b.xe;
        f = f.He - b.xe;
        f > e ? (f = e,
        b.xe += e) : (b.zf++,
        b.xe = 0);
        ka(b.s, c.subarray(d, d + f), k);
        d += f;
        e -= f
    }
    b.ff += d;
    c = a.l;
    d = c.s.La(c.g + 2) + c.i & c.o;
    e = b.ff;
    c.s.Kc(c.g + 4 + 8 * d, b.ih);
    c.s.Kc(c.g + 8 + 8 * d, e);
    c.i++;
    a = a.l;
    0 !== a.i && (b = a.s.La(a.g + 2) + a.i & 65535,
    a.s.we(a.g + 2, b),
    a.i = 0,
    0 < (a.ab.h[0] & 536870912) ? (a.s.La(a.h + 4 + 2 * a.size),
    a.ab.Ba(1)) : ~a.s.La(a.h) & 1 && a.ab.Ba(1))
}
async function ia(a, b) {
    var c = new Uint8Array(b.ef);
    la(b, c);
    var d = {
        offset: 0
    }
      , e = C(["w", "b", "h"], c, d)
      , f = e[0]
      , k = e[1]
      , g = e[2];
    switch (k) {
    case 8:
        f = ma(a.h);
        var h = na(a.h);
        e = [16914839];
        e[1] = a.o;
        e[2] = Math.floor(h / e[1]);
        e[3] = e[2] - Math.floor(f / e[1]);
        e[4] = e[2] - Math.floor(f / e[1]);
        e[5] = pa(a.h);
        e[6] = qa(a.h);
        e[7] = 0;
        e[8] = 256;
        f = v("wwddddddw".split(""), e, a.i, 7);
        u(a, k, g, f);
        B(a, b);
        break;
    case 112:
    case 12:
        e = C(["w", "w"], c, d);
        f = e[0];
        d = e[1];
        c = a.g[f].V;
        var l = G(a.h, c);
        h = ra(a.h, c, d);
        sa(a.h, a.g[f].V, function() {
            var p = [];
            p[0] = l.wa;
            p[1] = this.j - 24;
            v(["Q", "w"], p, this.i, 7);
            u(this, k, g, 17);
            B(this, b)
        }
        .bind(a));
        break;
    case 70:
        e = C(["w", "w", "s"], c, d);
        c = e[0];
        f = e[1];
        h = e[2];
        h = ta(a.h, a.g[c].V, a.g[f].V, h);
        if (0 > h) {
            ja(a, g, -h);
            B(a, b);
            break
        }
        u(a, k, g, 0);
        B(a, b);
        break;
    case 16:
        e = C(["w", "s", "s", "w"], c, d);
        f = e[0];
        h = e[1];
        var m = e[3];
        c = ua(a.h, h, a.g[f].V, e[2]);
        l = G(a.h, c);
        l.uid = a.g[f].uid;
        l.Ea = m;
        v(["Q"], [l.wa], a.i, 7);
        u(a, k, g, 13);
        B(a, b);
        break;
    case 18:
        e = C("wswwww".split(""), c, d);
        f = e[0];
        h = e[1];
        d = e[2];
        c = e[3];
        var r = e[4];
        m = e[5];
        c = va(a.h, h, a.g[f].V, c, r);
        l = G(a.h, c);
        l.mode = d;
        l.uid = a.g[f].uid;
        l.Ea = m;
        v(["Q"], [l.wa], a.i, 7);
        u(a, k, g, 13);
        B(a, b);
        break;
    case 22:
        e = C(["w"], c, d);
        f = e[0];
        l = G(a.h, a.g[f].V);
        f = v(["s"], [l.qe], a.i, 7);
        u(a, k, g, f);
        B(a, b);
        break;
    case 72:
        e = C(["w", "s", "w", "w"], c, d);
        f = e[0];
        h = e[1];
        d = e[2];
        m = e[3];
        c = wa(a.h, h, a.g[f].V);
        l = G(a.h, c);
        l.mode = d | xa;
        l.uid = a.g[f].uid;
        l.Ea = m;
        v(["Q"], [l.wa], a.i, 7);
        u(a, k, g, 13);
        B(a, b);
        break;
    case 14:
        e = C(["w", "s", "w", "w", "w"], c, d);
        f = e[0];
        h = e[1];
        c = e[2];
        d = e[3];
        m = e[4];
        a.v.send("9p-create", [h, a.g[f].V]);
        c = ya(a.h, h, a.g[f].V);
        a.g[f].V = c;
        a.g[f].type = 1;
        a.g[f].Vb = h;
        l = G(a.h, c);
        l.uid = a.g[f].uid;
        l.Ea = m;
        l.mode = d;
        v(["Q", "w"], [l.wa, a.j - 24], a.i, 7);
        u(a, k, g, 17);
        B(a, b);
        break;
    case 52:
        e = C("wbwddws".split(""), c, d);
        f = e[0];
        c = e[2];
        h = 0 === e[4] ? Infinity : e[4];
        e = za(e[1], e[3], h, e[5], e[6]);
        h = Aa(a.h, a.g[f].V, e, c);
        v(["b"], [h], a.i, 7);
        u(a, k, g, 1);
        B(a, b);
        break;
    case 54:
        e = C("wbddws".split(""), c, d);
        f = e[0];
        h = 0 === e[3] ? Infinity : e[3];
        e = za(e[1], e[2], h, e[4], e[5]);
        h = Ba(a.h, a.g[f].V, e);
        h || (h = e,
        h.type = 2);
        f = v(["b", "d", "d", "w", "s"], [h.type, h.start, Infinity === h.length ? 0 : h.length, h.h, h.g], a.i, 7);
        u(a, k, g, f);
        B(a, b);
        break;
    case 24:
        e = C(["w", "d"], c, d);
        f = e[0];
        l = G(a.h, a.g[f].V);
        if (!l || l.status === Da) {
            ja(a, g, 2);
            B(a, b);
            break
        }
        e[0] |= 4096;
        e[0] = e[1];
        e[1] = l.wa;
        e[2] = l.mode;
        e[3] = l.uid;
        e[4] = l.Ea;
        e[5] = l.Sa;
        e[6] = l.Ie << 8 | l.Je;
        e[7] = l.size;
        e[8] = a.o;
        e[9] = Math.floor(l.size / 512 + 1);
        e[10] = l.Nc;
        e[11] = 0;
        e[12] = l.bc;
        e[13] = 0;
        e[14] = l.zd;
        e[15] = 0;
        e[16] = 0;
        e[17] = 0;
        e[18] = 0;
        e[19] = 0;
        v("dQwwwddddddddddddddd".split(""), e, a.i, 7);
        u(a, k, g, 153);
        B(a, b);
        break;
    case 26:
        e = C("wwwwwddddd".split(""), c, d);
        f = e[0];
        l = G(a.h, a.g[f].V);
        e[1] & 1 && (l.mode = e[2]);
        e[1] & 2 && (l.uid = e[3]);
        e[1] & 4 && (l.Ea = e[4]);
        e[1] & 16 && (l.Nc = Math.floor((new Date).getTime() / 1E3));
        e[1] & 32 && (l.bc = Math.floor((new Date).getTime() / 1E3));
        e[1] & 64 && (l.zd = Math.floor((new Date).getTime() / 1E3));
        e[1] & 128 && (l.Nc = e[6]);
        e[1] & 256 && (l.bc = e[8]);
        e[1] & 8 && await Ea(a.h, a.g[f].V, e[5]);
        u(a, k, g, 0);
        B(a, b);
        break;
    case 50:
        e = C(["w", "d"], c, d);
        f = e[0];
        u(a, k, g, 0);
        B(a, b);
        break;
    case 40:
    case 116:
        e = C(["w", "d", "w"], c, d);
        f = e[0];
        h = e[1];
        m = e[2];
        l = G(a.h, a.g[f].V);
        if (!l || l.status === Da) {
            ja(a, g, 2);
            B(a, b);
            break
        }
        if (2 == a.g[f].type)
            for ((void 0).length < h + m && (m = (void 0).length - h),
            e = 0; e < m; e++)
                a.i[11 + e] = (void 0)[h + e];
        else
            ra(a.h, a.g[f].V, void 0),
            e = a.g[f].V,
            l.size < h + m ? m = l.size - h : 40 == k && (m = Fa(a.h, e, h + m) - h),
            h > l.size && (m = 0),
            a.v.send("9p-read-start", [a.g[f].Vb]),
            e = await Ga(a.h, e, h, m),
            a.v.send("9p-read-end", [a.g[f].Vb, m]),
            e && a.i.set(e, 11);
        v(["w"], [m], a.i, 7);
        u(a, k, g, 4 + m);
        B(a, b);
        break;
    case 118:
        e = C(["w", "d", "w"], c, d);
        f = e[0];
        h = e[1];
        m = e[2];
        e = a.g[f].Vb;
        if (2 === a.g[f].type) {
            ja(a, g, 95);
            B(a, b);
            break
        } else
            await Ha(a.h, a.g[f].V, h, m, c.subarray(d.offset));
        a.v.send("9p-write-end", [e, m]);
        v(["w"], [m], a.i, 7);
        u(a, k, g, 4);
        B(a, b);
        break;
    case 74:
        e = C(["w", "s", "w", "s"], c, d);
        h = await Ia(a.h, a.g[e[0]].V, e[1], a.g[e[2]].V, e[3]);
        if (0 > h) {
            ja(a, g, -h);
            B(a, b);
            break
        }
        u(a, k, g, 0);
        B(a, b);
        break;
    case 76:
        e = C(["w", "s", "w"], c, d);
        d = e[0];
        h = e[1];
        c = e[2];
        f = Ja(a.h, a.g[d].V, h);
        if (-1 == f) {
            ja(a, g, 2);
            B(a, b);
            break
        }
        h = Ka(a.h, a.g[d].V, h);
        if (0 > h) {
            ja(a, g, -h);
            B(a, b);
            break
        }
        u(a, k, g, 0);
        B(a, b);
        break;
    case 100:
        f = C(["w", "s"], c, d);
        a.j = f[0];
        f = v(["w", "s"], [a.j, a.D], a.i, 7);
        u(a, k, g, f);
        B(a, b);
        break;
    case 104:
        e = C(["w", "w", "s", "s", "w"], c, d);
        f = e[0];
        a.g[f] = {
            V: 0,
            type: 1,
            uid: e[4],
            Vb: ""
        };
        l = G(a.h, a.g[f].V);
        v(["Q"], [l.wa], a.i, 7);
        u(a, k, g, 13);
        B(a, b);
        break;
    case 108:
        e = C(["h"], c, d);
        u(a, k, g, 0);
        B(a, b);
        break;
    case 110:
        e = C(["w", "w", "h"], c, d);
        f = e[0];
        m = e[1];
        r = e[2];
        if (0 == r) {
            a.g[m] = {
                V: a.g[f].V,
                type: 1,
                uid: a.g[f].uid,
                Vb: a.g[f].Vb
            };
            v(["h"], [0], a.i, 7);
            u(a, k, g, 2);
            B(a, b);
            break
        }
        h = [];
        for (e = 0; e < r; e++)
            h.push("s");
        d = C(h, c, d);
        c = a.g[f].V;
        h = 9;
        var t = 0;
        for (e = 0; e < r; e++) {
            c = Ja(a.h, c, d[e]);
            if (-1 == c)
                break;
            h += v(["Q"], [G(a.h, c).wa], a.i, h);
            t++;
            a.g[m] = {
                V: c,
                type: 1,
                uid: a.g[f].uid,
                Vb: d[e]
            }
        }
        v(["h"], [t], a.i, 7);
        u(a, k, g, h - 7);
        B(a, b);
        break;
    case 120:
        e = C(["w"], c, d);
        a.g[e[0]] && 0 <= a.g[e[0]].V && (await Ma(a.h, a.g[e[0]].V),
        a.g[e[0]].V = -1,
        a.g[e[0]].type = -1);
        u(a, k, g, 0);
        B(a, b);
        break;
    case 32:
        e = C(["w", "s", "d", "w"], c, d);
        f = e[0];
        h = e[1];
        c = e[3];
        a.g[f].type = 2;
        u(a, k, g, 0);
        B(a, b);
        break;
    case 30:
        e = C(["w", "w", "s"], c, d),
        f = e[0],
        h = e[2],
        ja(a, g, 95),
        B(a, b)
    }
}
;function Na(a, b) {
    function c(y) {
        y = y.toString(16);
        return "#" + Array(7 - y.length).join("0") + y
    }
    function d(y, D, W, Z) {
        y.style.width = "";
        y.style.height = "";
        Z && (y.style.transform = "");
        var ha = y.getBoundingClientRect();
        Z ? y.style.transform = (1 === D ? "" : " scaleX(" + D + ")") + (1 === W ? "" : " scaleY(" + W + ")") : (0 === D % 1 && 0 === W % 1 ? (e.style.imageRendering = "crisp-edges",
        e.style.imageRendering = "pixelated",
        e.style["-ms-interpolation-mode"] = "nearest-neighbor") : (e.style.Wj = "",
        e.style["-ms-interpolation-mode"] = ""),
        Z = window.devicePixelRatio || 1,
        0 !== Z % 1 && (D /= Z,
        W /= Z));
        1 !== D && (y.style.width = ha.width * D + "px");
        1 !== W && (y.style.height = ha.height * W + "px")
    }
    console.assert(a, "1st argument must be a DOM container");
    var e = a.getElementsByTagName("canvas")[0], f = e.getContext("2d", {
        alpha: !1
    }), k = a.getElementsByTagName("div")[0], g = document.createElement("div"), h, l, m, r, t = 1, p = 1, q = 1, w, x, E = !1, F, I, aa, A = !1, T = this;
    a = new Uint16Array([199, 252, 233, 226, 228, 224, 229, 231, 234, 235, 232, 239, 238, 236, 196, 197, 201, 230, 198, 244, 246, 242, 251, 249, 255, 214, 220, 162, 163, 165, 8359, 402, 225, 237, 243, 250, 241, 209, 170, 186, 191, 8976, 172, 189, 188, 161, 171, 187, 9617, 9618, 9619, 9474, 9508, 9569, 9570, 9558, 9557, 9571, 9553, 9559, 9565, 9564, 9563, 9488, 9492, 9524, 9516, 9500, 9472, 9532, 9566, 9567, 9562, 9556, 9577, 9574, 9568, 9552, 9580, 9575, 9576, 9572, 9573, 9561, 9560, 9554, 9555, 9579, 9578, 9496, 9484, 9608, 9604, 9612, 9616, 9600, 945, 223, 915, 960, 931, 963, 181, 964, 934, 920, 937, 948, 8734, 966, 949, 8745, 8801, 177, 8805, 8804, 8992, 8993, 247, 8776, 176, 8729, 183, 8730, 8319, 178, 9632, 160]);
    for (var U = new Uint16Array([32, 9786, 9787, 9829, 9830, 9827, 9824, 8226, 9688, 9675, 9689, 9794, 9792, 9834, 9835, 9788, 9658, 9668, 8597, 8252, 182, 167, 9644, 8616, 8593, 8595, 8594, 8592, 8735, 8596, 9650, 9660]), H = [], da, M = 0; 256 > M; M++)
        da = 127 < M ? a[M - 128] : 32 > M ? U[M] : M,
        H[M] = String.fromCharCode(da);
    f.imageSmoothingEnabled = !1;
    g.style.position = "absolute";
    g.style.backgroundColor = "#ccc";
    g.style.width = "7px";
    g.style.display = "inline-block";
    k.style.display = "block";
    e.style.display = "none";
    this.v = b;
    b.register("screen-set-mode", function(y) {
        this.rf(y)
    }, this);
    b.register("screen-fill-buffer-end", function(y) {
        this.xf(y)
    }, this);
    b.register("screen-put-char", function(y) {
        this.mf(y[0], y[1], y[2], y[3], y[4])
    }, this);
    b.register("screen-update-cursor", function(y) {
        this.qd(y[0], y[1])
    }, this);
    b.register("screen-update-cursor-scanline", function(y) {
        this.rd(y[0], y[1])
    }, this);
    b.register("screen-clear", function() {
        this.Ff()
    }, this);
    b.register("screen-set-size-text", function(y) {
        this.md(y[0], y[1])
    }, this);
    b.register("screen-set-size-graphical", function(y) {
        this.ld(y[0], y[1], y[2], y[3])
    }, this);
    this.hb = function() {
        this.md(80, 25);
        this.rb()
    }
    ;
    this.ph = function() {
        try {
            const y = new Image;
            y.src = e.toDataURL("image/png");
            window.open("").document.write(y.outerHTML)
        } catch (y) {}
    }
    ;
    this.mf = function(y, D, W, Z, ha) {
        y < aa && D < I && (D = 3 * (y * I + D),
        F[D] = W,
        F[D + 1] = Z,
        F[D + 2] = ha,
        x[y] = 1)
    }
    ;
    this.rb = function() {
        A || requestAnimationFrame(E ? wb : Ca)
    }
    ;
    var Ca = function() {
        for (var y = 0; y < aa; y++)
            x[y] && (T.g(y),
            x[y] = 0);
        this.rb()
    }
    .bind(this)
      , wb = function() {
        this.v.send("screen-fill-buffer");
        this.rb()
    }
    .bind(this);
    this.za = function() {
        A = !0
    }
    ;
    this.rf = function(y) {
        (E = y) ? (k.style.display = "none",
        e.style.display = "block") : (k.style.display = "block",
        e.style.display = "none")
    }
    ;
    this.Ff = function() {
        f.fillStyle = "#000";
        f.fillRect(0, 0, e.width, e.height)
    }
    ;
    this.md = function(y, D) {
        if (y !== I || D !== aa) {
            x = new Int8Array(D);
            F = new Int32Array(y * D * 3);
            I = y;
            for (aa = D; k.childNodes.length > D; )
                k.removeChild(k.firstChild);
            for (; k.childNodes.length < D; )
                k.appendChild(document.createElement("div"));
            for (y = 0; y < D; y++)
                this.g(y);
            d(k, t, p, !0)
        }
    }
    ;
    this.ld = function(y, D, W, Z) {
        e.style.display = "block";
        e.width = y;
        e.height = D;
        h = f.createImageData(W, Z);
        new Uint8Array(h.data.buffer);
        l = new Int32Array(h.data.buffer);
        w = y;
        q = 640 >= w ? 2 : 1;
        this.v.send("screen-tell-buffer", [l], [l.buffer]);
        d(e, t * q, p * q, !1)
    }
    ;
    this.sf = function(y, D) {
        t = y;
        p = D;
        d(k, t, p, !0);
        d(e, t * q, p * q, !1)
    }
    ;
    this.sf(t, p);
    this.rd = function(y, D) {
        y & 32 ? g.style.display = "none" : (g.style.display = "inline",
        g.style.height = Math.min(15, D - y) + "px",
        g.style.marginTop = Math.min(15, y) + "px")
    }
    ;
    this.qd = function(y, D) {
        if (y !== m || D !== r)
            x[y] = 1,
            x[m] = 1,
            m = y,
            r = D
    }
    ;
    this.g = function(y) {
        var D = 3 * y * I, W;
        var Z = k.childNodes[y];
        var ha = document.createElement("div");
        for (var z = 0; z < I; ) {
            var N = document.createElement("span");
            var Q = F[D + 1];
            var oa = F[D + 2];
            N.style.backgroundColor = c(Q);
            N.style.color = c(oa);
            for (W = ""; z < I && F[D + 1] === Q && F[D + 2] === oa; )
                if (W += H[F[D]],
                z++,
                D += 3,
                y === m)
                    if (z === r)
                        break;
                    else if (z === r + 1) {
                        ha.appendChild(g);
                        break
                    }
            N.textContent = W;
            ha.appendChild(N)
        }
        Z.parentNode.replaceChild(ha, Z)
    }
    ;
    this.xf = function(y) {
        y.forEach(D=>{
            f.putImageData(h, D.oe - D.wd, D.pe - D.xd, D.wd, D.xd, D.Td, D.Sd)
        }
        )
    }
    ;
    this.hb()
}
;(function() {
    function a() {
        for (var t = location.search.substr(1).split("&"), p = {}, q = 0; q < t.length; q++) {
            var w = t[q].split("=");
            p[w[0]] = decodeURIComponent(w.slice(1).join("="))
        }
        return p
    }
    function b(t) {
        document.title = t + " - Virtual x86";
        const p = document.querySelector("meta[name=description]");
        p && (p.content = "Running " + t)
    }
    function c(t, p) {
        for (var q = ""; 0 < p--; )
            q += t;
        return q
    }
    function d(t) {
        return document.getElementById(t)
    }
    function e() {
        function t(A) {
            d("boot_options").style.display = "none";
            b(A.name);
            w.filesystem = A.filesystem;
            A.state && (d("reset").style.display = "none",
            w.Vc = A.state);
            w.pa = A.pa;
            w.ra = A.ra;
            w.U = A.U;
            w.Hd = A.Hd;
            w.lc = A.lc;
            w.Fd = A.Fd;
            w.Vd = A.Vd;
            w.Ef = A.Ef;
            w.ec = A.ec;
            w.eb = A.eb;
            w.L = A.L;
            w.na = A.na;
            w.id = A.id;
            void 0 !== A.Oc && (w.Oc = A.Oc);
            if (A.Wa) {
                d("description").style.display = "block";
                const T = document.createElement("a");
                T.href = A.Wa;
                T.textContent = A.name;
                T.target = "_blank";
                d("description").appendChild(document.createTextNode("Running "));
                d("description").appendChild(T)
            }
            f(w, p)
        }
        function p(A) {
            x.c && setTimeout(function() {
                Oa(A, x.c + "\n")
            }, 25)
        }
        if (window.WebAssembly) {
            var q = document.createElement("script");
            q.src = "xterm.js";
            q.async = !0;
            document.body.appendChild(q);
            var w = {};

            var x = a();
            q = x.cdn || (m ? "images/" : "//k.copy.sh/");
            q = [{
                id: "archlinux",
                name: "Arch Linux",
                L: 536870912,
                na: 8388608,
                state: {
                    url: q + "arch_state.bin.zst"
                },
                filesystem: {
                    baseurl: q + "arch/"
                }
            }, {
                id: "haiku",
                L: 536870912,
                U: {
                    url: q + "haiku.img",
                    async: !0,
                    ta: !m,
                    size: 1073741824
                },
                state: {
                    url: q + "haiku_state.bin.zst"
                },
                name: "Haiku"
            }, {
                id: "msdos",
                U: {
                    url: q + "msdos.img",
                    size: 8388608,
                    async: !1
                },
                Oc: 306,
                name: "MS-DOS"
            }, {
                id: "freedos",
                pa: {
                    url: q + "freedos722.img",
                    size: 737280,
                    async: !1
                },
                name: "FreeDOS"
            }, {
                id: "oberon",
                U: {
                    url: q + "oberon.img",
                    size: 25165824,
                    async: !1
                },
                name: "Oberon"
            }, {
                id: "windows1",
                pa: {
                    url: q + "windows101.img",
                    size: 1474560,
                    async: !1
                },
                name: "Windows"
            }, {
                id: "linux26",
                ra: {
                    url: q + "linux.iso",
                    size: 6547456,
                    async: !1
                },
                name: "Linux"
            }, {
                id: "linux3",
                ra: {
                    url: q + "linux3.iso",
                    size: 8624128,
                    async: !1
                },
                name: "Linux"
            }, {
                id: "linux4",
                ra: {
                    url: q + "linux4.iso",
                    size: 7731200,
                    async: !1
                },
                name: "Linux",
                filesystem: {}
            }, {
                id: "buildroot",
                lc: {
                    url: q + "buildroot-bzimage.bin",
                    size: 5166352,
                    async: !1
                },
                name: "Buildroot Linux",
                filesystem: {},
                Vd: "tsc=reliable mitigations=off random.trust_cpu=on"
            }, {
                id: "dsl",
                L: 268435456,
                ra: {
                    url: q + "dsl-4.11.rc2.iso",
                    size: 52824064,
                    async: !1
                },
                name: "Damn Small Linux",
                Wa: "http://www.damnsmalllinux.org/"
            }, {
                id: "minix",
                name: "Minix",
                L: 268435456,
                ra: {
                    url: q + "minix-3.3.0.iso",
                    size: 605581312,
                    async: !0,
                    ta: !m
                }
            }, {
                id: "kolibrios",
                pa: {
                    url: m ? q + "kolibri.img" : "//builds.kolibrios.org/eng/data/data/kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS",
                Wa: "https://kolibrios.org/en/"
            }, {
                id: "kolibrios-fallback",
                pa: {
                    url: q + "kolibri.img",
                    size: 1474560,
                    async: !1
                },
                name: "KolibriOS"
            }, {
                id: "openbsd",
                U: {
                    url: q + "openbsd.img",
                    async: !0,
                    ta: !m,
                    size: 1073741824
                },
                state: {
                    url: q + "openbsd_state.bin.zst"
                },
                L: 268435456,
                name: "OpenBSD"
            }, {
                id: "openbsd-boot",
                U: {
                    url: q + "openbsd.img",
                    async: !0,
                    ta: !m,
                    size: 1073741824
                },
                L: 268435456,
                name: "OpenBSD"
            }, {
                id: "netbsd",
                U: {
                    url: q + "netbsd.img",
                    async: !0,
                    ta: !m,
                    size: 511000064
                },
                L: 268435456,
                name: "NetBSD"
            }, {
                id: "solos",
                pa: {
                    url: q + "os8.img",
                    async: !1,
                    size: 1474560
                },
                name: "Sol OS",
                Wa: "http://oby.ro/os/"
            }, {
                id: "bootchess",
                pa: {
                    url: q + "bootchess.img",
                    async: !1,
                    size: 1474560
                },
                name: "BootChess",
                Wa: "http://www.pouet.net/prod.php?which=64962"
            }, {
                id: "bootbasic",
                pa: {
                    url: q + "bootbasic.img",
                    async: !1,
                    size: 1474560
                },
                name: "bootBASIC",
                Wa: "https://github.com/nanochess/bootBASIC"
            }, {
                id: "floppybird",
                pa: {
                    url: q + "floppybird.img",
                    async: !1,
                    size: 1474560
                },
                name: "Floppy Bird",
                Wa: "http://mihail.co/floppybird"
            }, {
                id: "windows2000",
                L: 536870912,
                U: {
                    url: q + "windows2k.img",
                    size: 2147483648,
                    async: !0,
                    ta: !m
                },
                name: "Windows 2000",
                state: {
                    url: q + "windows2k_state.bin.zst"
                },
                ec: !0
            }, {
                id: "windows2000-boot",
                L: 536870912,
                U: {
                    url: q + "windows2k.img",
                    size: 2147483648,
                    async: !0,
                    ta: !m
                },
                Oc: 306,
                name: "Windows 2000"
            }, {
                id: "windows98",
                L: 134217728,
                U: {
                    url: q + "windows98.img",
                    async: !0,
                    ta: !m,
                    size: 314572800
                },
                name: "Windows 98",
                state: {
                    url: q + "windows98_state.bin.zst"
                },
                ec: !0
            }, {
                id: "windows98-boot",
                L: 134217728,
                U: {
                    url: q + "windows98.img",
                    async: !0,
                    ta: !m,
                    size: 314572800
                },
                name: "Windows 98"
            }, {
                id: "windows95",
                L: 33554432,
                U: {
                    url: q + "w95.img",
                    size: 242049024,
                    async: !0,
                    ta: !m
                },
                name: "Windows 95",
                state: {
                    url: q + "windows95_state.bin.zst"
                }
            }, {
                id: "windows95-boot",
                L: 33554432,
                U: {
                    url: q + "w95.img",
                    size: 242049024,
                    async: !0,
                    ta: !m
                },
                name: "Windows 95"
            }, {
                id: "windows30",
                L: 67108864,
                ra: {
                    url: q + "Win30.iso",
                    async: !1
                },
                name: "Windows 3.0"
            }, {
                id: "windows31",
                L: 67108864,
                U: {
                    url: q + "win31.img",
                    async: !1,
                    size: 34463744
                },
                name: "Windows 3.1"
            }, {
                id: "freebsd",
                L: 268435456,
                U: {
                    url: q + "freebsd.img",
                    size: 2147483648,
                    async: !0,
                    ta: !m
                },
                state: {
                    url: q + "freebsd_state.bin.zst"
                },
                name: "FreeBSD"
            }, {
                id: "freebsd-boot",
                L: 268435456,
                U: {
                    url: q + "freebsd.img",
                    size: 2147483648,
                    async: !0,
                    ta: !m
                },
                name: "FreeBSD"
            }, {
                id: "reactos-livecd",
                L: 268435456,
                U: {
                    url: q + "reactos-livecd-0.4.15-dev-73-g03c09c9-x86-gcc-lin-dbg.iso",
                    size: 250609664,
                    async: !0,
                    ta: !m
                },
                name: "ReactOS",
                Wa: "https://reactos.org/"
            }, {
                id: "reactos",
                L: 536870912,
                U: {
                    url: q + "reactos.img",
                    size: 524288E3,
                    async: !0,
                    ta: !m
                },
                state: {
                    url: q + "reactos_state.bin.zst"
                },
                ec: !0,
                name: "ReactOS",
                Wa: "https://reactos.org/"
            }, {
                id: "reactos-boot",
                L: 536870912,
                U: {
                    url: q + "reactos.img",
                    size: 524288E3,
                    async: !0,
                    ta: !m
                },
                name: "ReactOS",
                Wa: "https://reactos.org/"
            }, {
                id: "skift",
                ra: {
                    url: q + "skift-20200910.iso",
                    size: 64452608,
                    async: !1
                },
                name: "Skift",
                Wa: "https://skiftos.org/"
            }, {
                id: "snowdrop",
                pa: {
                    url: q + "snowdrop.img",
                    size: 1474560,
                    async: !1
                },
                name: "Snowdrop",
                Wa: "http://www.sebastianmihai.com/snowdrop/"
            }, {
                id: "openwrt",
                U: {
                    url: q + "openwrt-18.06.1-x86-legacy-combined-squashfs.img",
                    size: 19846474,
                    async: !1
                },
                name: "OpenWrt"
            }, {
                id: "qnx",
                pa: {
                    url: q + "qnx-demo-network-4.05.img",
                    size: 1474560,
                    async: !1
                },
                name: "QNX 4.05"
            }, {
                id: "9front",
                L: 134217728,
                U: {
                    url: q + "9front-7781.38dcaeaa222c.386.iso",
                    size: 496388096,
                    async: !0,
                    ta: !m
                },
                state: {
                    url: q + "9front_state.bin.zst"
                },
                eb: !0,
                name: "9front"
            }, {
                id: "9front-boot",
                L: 134217728,
                U: {
                    url: q + "9front-7781.38dcaeaa222c.386.iso",
                    size: 496388096,
                    async: !0,
                    ta: !m
                },
                eb: !0,
                name: "9front"
            }, {
                id: "mobius",
                pa: {
                    url: q + "mobius-fd-release5.img",
                    size: 1474560,
                    async: !1
                },
                name: "Mobius"
            }, {
                id: "android",
                L: 536870912,
                ra: {
                    url: q + "android-x86-1.6-r2.iso",
                    size: 54661120,
                    async: !0,
                    ta: !m
                },
                name: "Android"
            }, {
                id: "tinycore",
                L: 268435456,
                U: {
                    url: q + "TinyCore-11.0.iso",
                    async: !1
                },
                name: "Tinycore",
                Wa: "http://www.tinycorelinux.net/"
            }];
            var E = x.profile;
            if (!E) {
                var F = document.createElement("link");
                F.rel = "prefetch";
                F.href = "v86.wasm";
                document.head.appendChild(F)
            }
            x.use_bochs_bios && (w.kj = !0);
            for (F = 0; F < q.length; F++) {
                var I = q[F];
                if (E === I.id) {
                    t(I);
                    return
                }
                var aa = d("start_" + I.id);
                aa && (aa.onclick = function(A, T, U) {
                    U.preventDefault();
                    l(A.id);
                    T.blur();
                    t(A)
                }
                .bind(this, I, aa))
            }
            "custom" === E && (x["hda.url"] && (w.U = {
                size: parseInt(x["hda.size"], 10) || void 0,
                url: x["hda.url"],
                async: !0
            }),
            x["cdrom.url"] && (w.ra = {
                size: parseInt(x["cdrom.size"], 10) || void 0,
                url: x["cdrom.url"],
                async: !0
            }),
            x["fda.url"] && (w.pa = {
                size: parseInt(x["fda.size"], 10) || void 0,
                url: x["fda.url"],
                async: !1
            }),
            w.pa || w.ra || w.U) && (d("boot_options").style.display = "none",
            f(w, p))
        } else
            alert("Your browser is not supported because it doesn't support WebAssembly")
    }
    function f(t, p) {
        var q = t.L;
        q || (q = 1048576 * parseInt(d("memory_size").value, 10),
        q || (alert("Invalid memory size - reset to 128MB"),
        q = 134217728));
        var w = t.na;
        w || (w = 1048576 * parseInt(d("video_memory_size").value, 10),
        w || (alert("Invalid video memory size - reset to 8MB"),
        w = 8388608));
        if (!t.pa) {
            var x = d("floppy_image").files[0];
            x && (t.pa = {
                buffer: x
            })
        }
        x = d("networking_proxy").value;
        const E = d("disable_audio").checked
          , F = void 0 === t.eb ? d("enable_acpi").checked : t.eb;
        if (t.kj)
            var I = "bochs-bios.bin"
              , aa = "bochs-vgabios.bin";
        else
            I = "seabios.bin",
            aa = "vgabios.bin";
        if (!t.Vc) {
            var A = {
                url: "bios/" + I
            };
            var T = {
                url: "bios/" + aa
            }
        }
        var U = new Pa({
            memory_size: q,
            vga_memory_size: w,
            screen_container: d("screen_container"),
            serial_container_xtermjs: d("terminal"),
            boot_order: t.Oc || parseInt(d("boot_order").value, 16) || 0,
            network_relay_url: m ? "ws://localhost:8080/" : x,
            bios: A,
            vga_bios: T,
            fda: t.pa,
            hda: t.U,
            hdb: t.Ee,
            cdrom: t.ra,
            multiboot: t.Hd,
            bzimage: t.lc,
            initrd: t.Fd,
            cmdline: t.Vd,
            bzimage_initrd_from_filesystem: t.Ef,
            acpi: F,
            initial_state: t.Vc,
            filesystem: t.filesystem || {},
            disable_speaker: E,
            preserve_mac_from_state_image: t.ec,
            autostart: !0
        });
        Qa(U, "emulator-ready", function() {
            if (U.g.s.va.exports.profiler_is_enabled()) {
                var H = document.createElement("pre");
                document.body.appendChild(H);
                setInterval(function() {
                    if (U.Wd) {
                        var da = Ra.fj(U.g.s);
                        H.textContent = da
                    }
                }, 1E3)
            }
            "dsl" === t.id ? setTimeout(()=>{
                Oa(U, "\n")
            }
            , 3E3) : "android" == t.id && setTimeout(()=>{
                Sa(U, [57424, 57552]);
                Oa(U, "\n")
            }
            , 3E3);
            k(t, U);
            p && p(U)
        });
        Qa(U, "download-progress", function(H) {
            var da = d("loading");
            da.style.display = "block";
            if (H.de.endsWith(".wasm")) {
                var M = H.de.split("/");
                da.textContent = "Fetching " + M[M.length - 1] + " ..."
            } else if (H.ce === H.be - 1 && H.loaded >= H.total - 2048)
                da.textContent = "Done downloading. Starting now ...";
            else {
                M = "Downloading images ";
                "number" === typeof H.ce && H.be && (M += "[" + (H.ce + 1) + "/" + H.be + "] ");
                if (H.total && "number" === typeof H.loaded) {
                    H = Math.floor(H.loaded / H.total * 100);
                    H = Math.min(100, Math.max(0, H));
                    var Ca = Math.floor(H / 2);
                    M = M + (H + "% [") + c("#", Ca);
                    M += c(" ", 50 - Ca) + "]"
                } else
                    M += c(".", r++ % 50);
                da.textContent = M
            }
        });
        Qa(U, "download-error", function(H) {
            var da = d("loading");
            da.style.display = "block";
            da.textContent = "Loading " + H.de + " failed. Check your connection and reload the page to try again."
        })
    }
    function k(t, p) {
        function q() {
            var z = Date.now()
              , N = p.g ? p.g.s.kh[0] >>> 0 : 0;
            N < aa && (aa -= 4294967296);
            var Q = N - aa;
            aa = N;
            U += Q;
            N = z - F;
            I += N;
            F = z;
            d("speed").textContent = (Q / 1E3 / N).toFixed(1);
            d("avg_speed").textContent = (U / 1E3 / I).toFixed(1);
            z = d("running_time");
            Q = I / 1E3 | 0;
            z.textContent = 60 > Q ? Q + "s" : 3600 > Q ? (Q / 60 | 0) + "m " + Ta(Q % 60, 2) + "s" : (Q / 3600 | 0) + "h " + Ta((Q / 60 | 0) % 60, 2) + "m " + Ta(Q % 60, 2) + "s"
        }
        function w(z, N) {
            var Q = d("get_" + N + "_image");
            !z || 104857600 < z.size ? Q.style.display = "none" : Q.onclick = function() {
                var oa = p.Wb[N];
                let La = t.id + ("cdrom" === N ? ".iso" : ".img");
                oa.Uf ? (oa = oa.Uf(La),
                Ua(oa, La)) : oa.Db(function(ed) {
                    ed ? Va(ed, La) : alert("The file could not be loaded. Maybe it's too big?")
                });
                Q.blur()
            }
        }
        function x(z) {
            z.ctrlKey ? window.onbeforeunload = function() {
                window.onbeforeunload = null;
                return "CTRL-W cannot be sent to the emulator."
            }
            : window.onbeforeunload = null
        }
        d("boot_options").style.display = "none";
        d("loading").style.display = "none";
        d("runtime_options").style.display = "block";
        d("runtime_infos").style.display = "block";
        d("screen_container").style.display = "block";
        t.filesystem && g(p);
        d("run").onclick = function() {
            p.Wd ? (d("run").value = "Run",
            p.stop()) : (d("run").value = "Pause",
            p.Te());
            d("run").blur()
        }
        ;
        d("exit").onclick = function() {
            p.stop();
            location.href = location.pathname
        }
        ;
        d("lock_mouse").onclick = function() {
            if (!E)
                d("toggle_mouse").onclick();
            Wa();
            d("lock_mouse").blur()
        }
        ;
        var E = !0;
        d("toggle_mouse").onclick = function() {
            E = !E;
            p.i && (p.i.Ce = E);
            d("toggle_mouse").value = (E ? "Dis" : "En") + "able mouse";
            d("toggle_mouse").blur()
        }
        ;
        var F = 0
          , I = 0
          , aa = 0
          , A = null
          , T = !1
          , U = 0;
        Qa(p, "emulator-started", function() {
            F = Date.now();
            A = setInterval(q, 1E3)
        });
        Qa(p, "emulator-stopped", function() {
            q();
            null !== A && clearInterval(A)
        });
        var H = 0
          , da = 0
          , M = [];
        Qa(p, "9p-read-start", function(z) {
            z = z[0];
            M.push(z);
            d("info_filesystem").style.display = "block";
            d("info_filesystem_status").textContent = "Loading ...";
            d("info_filesystem_last_file").textContent = z
        });
        Qa(p, "9p-read-end", function(z) {
            H += z[1];
            d("info_filesystem_bytes_read").textContent = H;
            const N = z[0];
            M = M.filter(Q=>Q !== N);
            M[0] ? d("info_filesystem_last_file").textContent = M[0] : d("info_filesystem_status").textContent = "Idle"
        });
        Qa(p, "9p-write-end", function(z) {
            da += z[1];
            d("info_filesystem_bytes_written").textContent = da;
            M[0] || (d("info_filesystem_last_file").textContent = z[0])
        });
        var Ca = 0
          , wb = 0
          , y = 0
          , D = 0;
        Qa(p, "ide-read-start", function() {
            d("info_storage").style.display = "block";
            d("info_storage_status").textContent = "Loading ..."
        });
        Qa(p, "ide-read-end", function(z) {
            Ca += z[1];
            wb += z[2];
            d("info_storage_status").textContent = "Idle";
            d("info_storage_bytes_read").textContent = Ca;
            d("info_storage_sectors_read").textContent = wb
        });
        Qa(p, "ide-write-end", function(z) {
            y += z[1];
            D += z[2];
            d("info_storage_bytes_written").textContent = y;
            d("info_storage_sectors_written").textContent = D
        });
        var W = 0
          , Z = 0;
        Qa(p, "eth-receive-end", function(z) {
            Z += z[0];
            d("info_network").style.display = "block";
            d("info_network_bytes_received").textContent = Z
        });
        Qa(p, "eth-transmit-end", function(z) {
            W += z[0];
            d("info_network").style.display = "block";
            d("info_network_bytes_transmitted").textContent = W
        });
        Qa(p, "mouse-enable", function(z) {
            T = z;
            d("info_mouse_enabled").textContent = z ? "Yes" : "No"
        });
        Qa(p, "screen-set-mode", function(z) {
            z ? d("info_vga_mode").textContent = "Graphical" : (d("info_vga_mode").textContent = "Text",
            d("info_res").textContent = "-",
            d("info_bpp").textContent = "-")
        });
        Qa(p, "screen-set-size-graphical", function(z) {
            d("info_res").textContent = z[0] + "x" + z[1];
            d("info_bpp").textContent = z[4]
        });
        d("reset").onclick = function() {
            p.pf();
            d("reset").blur()
        }
        ;
        w(t.U, "hda");
        w(t.Ee, "hdb");
        w(t.pa, "fda");
        w(t.Mf, "fdb");
        w(t.ra, "cdrom");
        d("memory_dump").onclick = function() {
            const z = p.g.s.Ka;
            Va(new Uint8Array(z.buffer,z.byteOffset,z.length), "v86memory.bin");
            d("memory_dump").blur()
        }
        ;
        d("save_state").onclick = function() {
            p.ne(function(z, N) {
                z ? (console.log(z.stack),
                console.log("Couldn't save state: ", z)) : Va(N, "v86state.bin")
            });
            d("save_state").blur()
        }
        ;
        d("load_state").onclick = function() {
            d("load_state_input").click();
            d("load_state").blur()
        }
        ;
        d("load_state_input").onchange = function() {
            var z = this.files[0];
            if (z) {
                var N = p.Wd;
                N && p.stop();
                var Q = new FileReader;
                Q.onload = function(oa) {
                    try {
                        p.Md(oa.target.result)
                    } catch (La) {
                        throw alert("Something bad happened while restoring the state:\n" + La + "\n\nNote that the current configuration must be the same as the original"),
                        La;
                    }
                    N && p.Te()
                }
                ;
                Q.readAsArrayBuffer(z);
                this.value = ""
            }
        }
        ;
        d("ctrlaltdel").onclick = function() {
            Sa(p, [29, 56, 83, 157, 184, 211]);
            d("ctrlaltdel").blur()
        }
        ;
        d("alttab").onclick = function() {
            Sa(p, [56, 15]);
            setTimeout(function() {
                Sa(p, [184, 143])
            }, 100);
            d("alttab").blur()
        }
        ;
        d("scale").onchange = function() {
            var z = parseFloat(this.value);
            (z || 0 < z) && p.h && p.h.sf(z, z)
        }
        ;
        d("fullscreen").onclick = function() {
            if (p.h) {
                var z = document.getElementById("screen_container");
                if (z) {
                    var N = z.requestFullScreen || z.webkitRequestFullscreen || z.mozRequestFullScreen || z.msRequestFullScreen;
                    N && (N.call(z),
                    (z = document.getElementsByClassName("phone_keyboard")[0]) && z.focus());
                    Wa()
                }
            }
        }
        ;
        d("screen_container").onclick = function() {
            if (E && T)
                Wa(),
                d("lock_mouse").blur();
            else if (window.getSelection().isCollapsed) {
                let z = document.getElementsByClassName("phone_keyboard")[0];
                z.style.top = document.body.scrollTop + 100 + "px";
                z.style.left = document.body.scrollLeft + 100 + "px";
                z.focus()
            }
        }
        ;
        const ha = document.getElementsByClassName("phone_keyboard")[0];
        ha.setAttribute("autocorrect", "off");
        ha.setAttribute("autocapitalize", "off");
        ha.setAttribute("spellcheck", "false");
        ha.tabIndex = 0;
        d("screen_container").addEventListener("mousedown", z=>{
            z.preventDefault();
            ha.focus()
        }
        , !1);
        d("take_screenshot").onclick = function() {
            p.h && p.h.ph();
            d("take_screenshot").blur()
        }
        ;
        window.addEventListener("keydown", x, !1);
        window.addEventListener("keyup", x, !1);
        window.addEventListener("blur", x, !1)
    }
    function g(t) {
        d("filesystem_panel").style.display = "block";
        d("filesystem_send_file").onchange = function() {
            Array.prototype.forEach.call(this.files, function(p) {
                var q = new Xa(p);
                q.onload = function() {
                    q.Db(function(w) {
                        Ya(t, "/" + p.name, new Uint8Array(w))
                    })
                }
                ;
                q.load()
            }, this);
            this.value = "";
            this.blur()
        }
        ;
        d("filesystem_get_file").onkeypress = function(p) {
            13 === p.which && (this.disabled = !0,
            t.me(this.value, function(q, w) {
                this.disabled = !1;
                w ? (q = this.value.replace(/\/$/, "").split("/"),
                q = q[q.length - 1] || "root",
                Va(w, q),
                this.value = "") : alert("Can't read file")
            }
            .bind(this)))
        }
    }
    function h() {
        location.reload()
    }
    function l(t) {
        window.history.pushState && window.history.pushState({
            profile: t
        }, "", "?profile=" + t)
    }
    var m = !location.hostname.endsWith("copy.sh")
      , r = 0;
    window.addEventListener("load", e, !1);
    window.addEventListener("load", function() {
        setTimeout(function() {
            window.addEventListener("popstate", h)
        }, 0)
    });
    "complete" === document.readyState && e()
}
)();
function Za(a) {
    this.ports = [];
    this.s = a;
    for (var b = 0; 65536 > b; b++)
        this.ports[b] = $a(this);
    var c = a.L[0];
    for (b = 0; b << 17 < c; b++)
        a.l[b] = a.C[b] = void 0,
        a.Oa[b] = a.o[b] = void 0;
    ab(this, c, 4294967296 - c, function() {
        return 255
    }, function() {}, function() {
        return -1
    }, function() {})
}
function $a(a) {
    return {
        Kd: a.Xg,
        La: a.Vg,
        le: a.Wg,
        Cg: a.Ze,
        we: a.Ze,
        Kc: a.Ze,
        ja: void 0
    }
}
n = Za.prototype;
n.Xg = function() {
    return 255
}
;
n.Vg = function() {
    return 65535
}
;
n.Wg = function() {
    return -1
}
;
n.Ze = function() {}
;
function J(a, b, c, d, e, f) {
    d && (a.ports[b].Kd = d);
    e && (a.ports[b].La = e);
    f && (a.ports[b].le = f);
    a.ports[b].ja = c
}
function K(a, b, c, d, e, f) {
    d && (a.ports[b].Cg = d);
    e && (a.ports[b].we = e);
    f && (a.ports[b].Kc = f);
    a.ports[b].ja = c
}
n.kd = function(a, b, c, d, e, f) {
    function k() {
        return c.call(this) | d.call(this) << 8
    }
    function g() {
        return e.call(this) | f.call(this) << 8
    }
    function h() {
        return c.call(this) | d.call(this) << 8 | e.call(this) << 16 | f.call(this) << 24
    }
    e && f ? (J(this, a, b, c, k, h),
    J(this, a + 1, b, d),
    J(this, a + 2, b, e, g),
    J(this, a + 3, b, f)) : (J(this, a, b, c, k),
    J(this, a + 1, b, d))
}
;
n.Ib = function(a, b, c, d, e, f) {
    function k(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255)
    }
    function g(l) {
        e.call(this, l & 255);
        f.call(this, l >> 8 & 255)
    }
    function h(l) {
        c.call(this, l & 255);
        d.call(this, l >> 8 & 255);
        e.call(this, l >> 16 & 255);
        f.call(this, l >>> 24)
    }
    e && f ? (K(this, a, b, c, k, h),
    K(this, a + 1, b, d),
    K(this, a + 2, b, e, g),
    K(this, a + 3, b, f)) : (K(this, a, b, c, k),
    K(this, a + 1, b, d))
}
;
n.rh = function(a) {
    var b = this.s.l[a >>> 17];
    return b(a) | b(a + 1) << 8 | b(a + 2) << 16 | b(a + 3) << 24
}
;
n.sh = function(a, b) {
    var c = this.s.C[a >>> 17];
    c(a, b & 255);
    c(a + 1, b >> 8 & 255);
    c(a + 2, b >> 16 & 255);
    c(a + 3, b >>> 24)
}
;
function ab(a, b, c, d, e, f, k) {
    f || (f = a.rh.bind(a));
    k || (k = a.sh.bind(a));
    for (b >>>= 17; 0 < c; b++)
        a.s.l[b] = d,
        a.s.C[b] = e,
        a.s.Oa[b] = f,
        a.s.o[b] = k,
        c -= 131072
}
;function bb(a, b) {
    this.h = this.g = !1;
    this.s = new cb(a,b);
    this.v = a;
    a.register("cpu-init", this.hb, this);
    a.register("cpu-run", this.Te, this);
    a.register("cpu-stop", this.stop, this);
    a.register("cpu-restart", this.pf, this);
    this.Yi()
}
n = bb.prototype;
n.Te = function() {
    this.h = !1;
    this.g || (this.v.send("emulator-started"),
    this.$e())
}
;
function db(a) {
    if (a.h)
        a.h = a.g = !1,
        a.v.send("emulator-stopped");
    else {
        a.g = !0;
        a: {
            var b = a.s;
            if (b.h[0]) {
                var c = eb(b);
                if (b.h[0]) {
                    b = c;
                    break a
                }
            }
            for (var d = c = fb(); 1 > d - c; ) {
                gb(b, d);
                hb(b);
                b.hj();
                if (b.h[0])
                    break;
                d = fb()
            }
            b = 0
        }
        0 >= b ? a.$e() : a.lj(b)
    }
}
n.stop = function() {
    this.g && (this.h = !0)
}
;
n.za = function() {
    this.jj()
}
;
n.pf = function() {
    this.s.Qa();
    ib(this.s)
}
;
n.hb = function(a) {
    this.s.hb(a, this.v);
    this.v.send("emulator-ready")
}
;
if ("undefined" !== typeof setImmediate)
    var jb = function() {
        setImmediate(()=>{
            db(this)
        }
        )
    }
      , kb = function() {}
      , lb = function() {};
else if ("undefined" !== typeof window && "undefined" !== typeof postMessage) {
    jb = function() {
        window.postMessage(43605, "*")
    }
    ;
    let a;
    kb = function() {
        a = b=>{
            b.source === window && 43605 === b.data && db(this)
        }
        ;
        window.addEventListener("message", a, !1)
    }
    ;
    lb = function() {
        window.removeEventListener("message", a);
        a = null
    }
} else
    jb = function() {
        setTimeout(()=>{
            db(this)
        }
        , 0)
    }
    ,
    kb = function() {}
    ,
    lb = function() {}
    ;
n = bb.prototype;
n.$e = jb;
n.Yi = kb;
n.jj = lb;
n.lj = "undefined" !== typeof document && "boolean" === typeof document.hidden ? function(a) {
    4 > a || document.hidden ? this.$e() : setTimeout(()=>{
        db(this)
    }
    , a)
}
: function(a) {
    setTimeout(()=>{
        db(this)
    }
    , a)
}
;
n.ne = function() {
    return this.s.ne()
}
;
n.Md = function(a) {
    return this.s.Md(a)
}
;
n.restore_state = function(a) {
    return this.s.Md(a)
}
;

if ("object" === typeof performance && performance.now)
    var fb = performance.now.bind(performance);
else if ("function" === typeof require) {
    const {performance: a} = require("perf_hooks");
    fb = a.now.bind(a)
} else
    "object" === typeof process && process.hrtime ? fb = function() {
        var a = process.hrtime();
        return 1E3 * a[0] + a[1] / 1E6
    }
    : fb = Date.now;
var Xa, mb, nb, ob, pb, qb, rb, sb;
function tb(a, b) {
    return (a || 0 === a ? a + "" : "").padEnd(b, " ")
}
function Ta(a, b) {
    return (a || 0 === a ? a + "" : "").padStart(b, "0")
}
function L(a, b, c, d) {
    return new Proxy({},{
        get: function(e, f) {
            e = new a(b.buffer,c,d);
            f = e[f];
            return "function" === typeof f ? f.bind(e) : f
        },
        set: function(e, f, k) {
            (new a(b.buffer,c,d))[f] = k;
            return !0
        }
    })
}
function ub(a, b) {
    return "0x" + Ta((a ? a.toString(16) : "").toUpperCase(), b || 1)
}
if ("undefined" !== typeof crypto && crypto.getRandomValues) {
    let a = new Int32Array(1);
    var vb = function() {
        crypto.getRandomValues(a);
        return a[0]
    }
} else if ("undefined" !== typeof require) {
    const a = require("crypto");
    vb = function() {
        return a.ek(4).readInt32LE(0)
    }
}
function xb(a) {
    this.buffer = a;
    this.byteLength = a.byteLength;
    this.onload = void 0
}
n = xb.prototype;
n.load = function() {
    this.onload && this.onload({
        buffer: this.buffer
    })
}
;
n.get = function(a, b, c) {
    c(new Uint8Array(this.buffer,a,b))
}
;
n.set = function(a, b, c) {
    (new Uint8Array(this.buffer,a,b.byteLength)).set(b);
    c()
}
;
n.Db = function(a) {
    a(this.buffer)
}
;
n.X = function() {
    const a = [];
    a[0] = this.byteLength;
    a[1] = new Uint8Array(this.buffer);
    return a
}
;
n.G = function(a) {
    this.byteLength = a[0];
    this.buffer = a[1].slice().buffer
}
;
(function() {
    if ("function" === typeof Math.clz32)
        mb = function(d) {
            return 31 - Math.clz32(d)
        }
        ,
        nb = function(d) {
            return 31 - Math.clz32(d)
        }
        ;
    else {
        for (var a = new Int8Array(256), b = 0, c = -2; 256 > b; b++)
            b & b - 1 || c++,
            a[b] = c;
        mb = function(d) {
            return a[d]
        }
        ;
        nb = function(d) {
            d >>>= 0;
            var e = d >>> 16;
            if (e) {
                var f = e >>> 8;
                return f ? 24 + a[f] : 16 + a[e]
            }
            return (f = d >>> 8) ? 8 + a[f] : a[d]
        }
    }
}
)();
function yb(a) {
    var b = new Uint8Array(a), c, d;
    this.length = 0;
    this.push = function(e) {
        this.length !== a && this.length++;
        b[d] = e;
        d = d + 1 & a - 1
    }
    ;
    this.shift = function() {
        if (this.length) {
            var e = b[c];
            c = c + 1 & a - 1;
            this.length--;
            return e
        }
        return -1
    }
    ;
    this.clear = function() {
        this.length = d = c = 0
    }
    ;
    this.clear()
}
function zb() {
    this.size = 65536;
    this.data = new Float32Array(65536);
    this.length = this.g = this.start = 0
}
zb.prototype.push = function(a) {
    this.length === this.size ? this.start = this.start + 1 & this.size - 1 : this.length++;
    this.data[this.g] = a;
    this.g = this.g + 1 & this.size - 1
}
;
zb.prototype.shift = function() {
    if (this.length) {
        var a = this.data[this.start];
        this.start = this.start + 1 & this.size - 1;
        this.length--;
        return a
    }
}
;
function Ab(a, b) {
    var c = new Float32Array(b);
    b > a.length && (b = a.length);
    var d = a.start + b
      , e = a.data.subarray(a.start, d);
    c.set(e);
    d >= a.size && (d -= a.size,
    c.set(a.data.subarray(0, d), e.length));
    a.start = d;
    a.length -= b;
    return c
}
zb.prototype.clear = function() {
    this.length = this.g = this.start = 0
}
;
function Va(a, b) {
    a instanceof Array || (a = [a]);
    Ua(new Blob(a), b)
}
function Ua(a, b) {
    var c = document.createElement("a");
    c.download = b;
    c.href = window.URL.createObjectURL(a);
    c.dataset.downloadurl = ["application/octet-stream", c.download, c.href].join(":");
    document.createEvent ? (a = document.createEvent("MouseEvent"),
    a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
    c.dispatchEvent(a)) : c.click();
    window.URL.revokeObjectURL(c.href)
}
function Bb(a) {
    "number" === typeof a ? this.view = new Uint8Array(a + 7 >> 3) : a instanceof ArrayBuffer ? this.view = new Uint8Array(a) : console.assert(!1)
}
Bb.prototype.set = function(a, b) {
    const c = a >> 3;
    a = 1 << (a & 7);
    this.view[c] = b ? this.view[c] | a : this.view[c] & ~a
}
;
Bb.prototype.get = function(a) {
    return this.view[a >> 3] >> (a & 7) & 1
}
;
Bb.prototype.Db = function() {
    return this.view.buffer
}
;
function Cb(a, b, c, d, e, f) {
    this.fa = new Db(this,a,b,d,e,f);
    this.ga = new Db(this,a,c,!1,e,f);
    this.oa = this.fa;
    this.s = a;
    0 === e ? (this.g = 496,
    this.Z = 14,
    this.Ga = 240) : 1 === e && (this.g = 368,
    this.Z = 15,
    this.Ga = 248);
    this.j = this.g | 516;
    this.h = 46080;
    this.I = [134, 128, 16, 112, 5, 0, 160, 2, 0, 128, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.h & 255 | 1, this.h >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 16, 212, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.Z, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ib = [{
        size: 8
    }, {
        size: 4
    }, void 0, void 0, {
        size: 16
    }];
    this.name = "ide" + e;
    this.l = 2;
    J(a.A, this.g | 7, this, function() {
        O(this.s, this.Z);
        return this.ug()
    });
    J(a.A, this.j | 2, this, this.ug);
    K(a.A, this.j | 2, this, this.rj);
    J(a.A, this.g | 0, this, function() {
        return Eb(this.oa, 1)
    }, function() {
        return Eb(this.oa, 2)
    }, function() {
        return Eb(this.oa, 4)
    });
    J(a.A, this.g | 1, this, function() {
        return this.oa.error & 255
    });
    J(a.A, this.g | 2, this, function() {
        return this.oa.$ & 255
    });
    J(a.A, this.g | 3, this, function() {
        return this.oa.ua & 255
    });
    J(a.A, this.g | 4, this, function() {
        return this.oa.ia & 255
    });
    J(a.A, this.g | 5, this, function() {
        return this.oa.la & 255
    });
    J(a.A, this.g | 6, this, function() {
        return this.oa.mc & 255
    });
    K(a.A, this.g | 0, this, function(k) {
        Fb(this.oa, k, 1)
    }, function(k) {
        Fb(this.oa, k, 2)
    }, function(k) {
        Fb(this.oa, k, 4)
    });
    K(a.A, this.g | 1, this, function(k) {
        this.fa.Xc = (this.fa.Xc << 8 | k) & 65535;
        this.ga.Xc = (this.ga.Xc << 8 | k) & 65535
    });
    K(a.A, this.g | 2, this, function(k) {
        this.fa.$ = (this.fa.$ << 8 | k) & 65535;
        this.ga.$ = (this.ga.$ << 8 | k) & 65535
    });
    K(a.A, this.g | 3, this, function(k) {
        this.fa.ua = (this.fa.ua << 8 | k) & 65535;
        this.ga.ua = (this.ga.ua << 8 | k) & 65535
    });
    K(a.A, this.g | 4, this, function(k) {
        this.fa.ia = (this.fa.ia << 8 | k) & 65535;
        this.ga.ia = (this.ga.ia << 8 | k) & 65535
    });
    K(a.A, this.g | 5, this, function(k) {
        this.fa.la = (this.fa.la << 8 | k) & 65535;
        this.ga.la = (this.ga.la << 8 | k) & 65535
    });
    K(a.A, this.g | 6, this, function(k) {
        this.oa = k & 16 ? this.ga : this.fa;
        this.fa.mc = k;
        this.ga.mc = k;
        this.fa.Gd = this.ga.Gd = k >> 6 & 1;
        this.fa.head = this.ga.head = k & 15
    });
    this.i = this.ma = this.jd = 0;
    K(a.A, this.g | 7, this, function(k) {
        O(this.s, this.Z);
        var g = this.oa;
        if (g.buffer)
            switch (g.o = k,
            g.error = 0,
            k) {
            case 8:
                g.i = 0;
                g.g = 0;
                g.h = 0;
                Gb(g);
                g.P();
                break;
            case 16:
                g.status = 80;
                g.ia = 0;
                g.P();
                break;
            case 248:
                g.status = 80;
                var h = g.j - 1;
                g.ua = h & 255;
                g.ia = h >> 8 & 255;
                g.la = h >> 16 & 255;
                g.mc = g.mc & 240 | h >> 24 & 15;
                g.P();
                break;
            case 39:
                g.status = 80;
                h = g.j - 1;
                g.ua = h & 255;
                g.ia = h >> 8 & 255;
                g.la = h >> 16 & 255;
                g.ua |= h >> 24 << 8 & 65280;
                g.P();
                break;
            case 32:
            case 36:
            case 41:
            case 196:
                Hb(g, k);
                break;
            case 48:
            case 52:
            case 57:
            case 197:
                var l = 52 === k || 57 === k;
                h = Ib(g, l);
                l = Jb(g, l);
                k = 48 === k || 52 === k;
                h *= g.l;
                l *= g.l;
                l + h > g.buffer.byteLength ? (g.status = 255,
                g.P()) : (g.status = 88,
                Kb(g, h),
                g.g = k ? 512 : Math.min(h, 512 * g.J),
                g.Y = l);
                break;
            case 144:
                g.P();
                g.error = 257;
                g.status = 80;
                break;
            case 145:
                g.status = 80;
                g.P();
                break;
            case 160:
                g.H && (g.status = 88,
                Lb(g, 12),
                g.g = 12,
                g.$ = 1,
                g.P());
                break;
            case 161:
                g.H ? (Mb(g),
                g.status = 88,
                g.ia = 20,
                g.la = 235) : g.status = 65;
                g.P();
                break;
            case 198:
                g.J = g.$ & 255;
                g.status = 80;
                g.P();
                break;
            case 37:
            case 200:
                h = 37 === k;
                l = Ib(g, h);
                Jb(g, h) * g.l + l * g.l > g.buffer.byteLength ? (g.status = 255,
                g.P()) : (g.status = 88,
                g.ja.ma |= 1);
                break;
            case 53:
            case 202:
                h = 53 === k;
                l = Ib(g, h);
                Jb(g, h) * g.l + l * g.l > g.buffer.byteLength ? (g.status = 255,
                g.P()) : (g.status = 88,
                g.ja.ma |= 1);
                break;
            case 64:
                g.status = 80;
                g.P();
                break;
            case 218:
                g.status = 65;
                g.error = 4;
                g.P();
                break;
            case 224:
                g.status = 80;
                g.P();
                break;
            case 225:
                g.status = 80;
                g.P();
                break;
            case 231:
                g.status = 80;
                g.P();
                break;
            case 236:
                if (g.H) {
                    g.status = 65;
                    g.error = 4;
                    g.P();
                    break
                }
                Mb(g);
                g.status = 88;
                g.P();
                break;
            case 234:
                g.status = 80;
                g.P();
                break;
            case 239:
                g.status = 80;
                g.P();
                break;
            case 222:
                g.status = 80;
                g.P();
                break;
            case 245:
                g.status = 80;
                g.P();
                break;
            case 249:
                g.status = 65;
                g.error = 4;
                break;
            default:
                g.status = 65,
                g.error = 4
            }
        else
            g.error = 4,
            g.status = 65,
            g.P()
    });
    J(a.A, this.h | 4, this, void 0, void 0, this.Og);
    K(a.A, this.h | 4, this, void 0, void 0, this.Sg);
    J(a.A, this.h, this, this.Qg, void 0, this.Pg);
    K(a.A, this.h, this, this.Jf, void 0, this.Tg);
    J(a.A, this.h | 2, this, this.Rg);
    K(a.A, this.h | 2, this, this.Kf);
    J(a.A, this.h | 8, this, function() {
        return 0
    });
    J(a.A, this.h | 10, this, function() {
        return 0
    });
    Nb(a.u.Fa, this)
}
n = Cb.prototype;
n.ug = function() {
    return this.oa.buffer ? this.oa.status : 0
}
;
n.rj = function(a) {
    a & 4 && (O(this.s, this.Z),
    Gb(this.fa),
    Gb(this.ga));
    this.l = a
}
;
n.Og = function() {
    return this.jd
}
;
n.Sg = function(a) {
    this.jd = a
}
;
n.Rg = function() {
    return this.ma
}
;
n.Kf = function(a) {
    this.ma &= ~(a & 6)
}
;
n.Pg = function() {
    return this.i | this.ma << 16
}
;
n.Qg = function() {
    return this.i
}
;
n.Tg = function(a) {
    this.Jf(a & 255);
    this.Kf(a >> 16 & 255)
}
;
n.Jf = function(a) {
    let b = this.i;
    this.i = a & 9;
    if ((b & 1) !== (a & 1))
        if (0 === (a & 1))
            this.ma &= -2;
        else
            switch (this.ma |= 1,
            this.oa.o) {
            case 37:
            case 200:
                Ob(this.oa);
                break;
            case 202:
            case 53:
                Pb(this.oa);
                break;
            case 160:
                Qb(this.oa)
            }
}
;
n.P = function() {
    0 === (this.l & 2) && (this.ma |= 4,
    this.s.Ja(this.Z))
}
;
n.X = function() {
    var a = [];
    a[0] = this.fa;
    a[1] = this.ga;
    a[2] = this.g;
    a[3] = this.Z;
    a[4] = this.Ga;
    a[5] = this.j;
    a[6] = this.h;
    a[7] = this.name;
    a[8] = this.l;
    a[9] = this.jd;
    a[10] = this.ma;
    a[11] = this.oa === this.fa;
    a[12] = this.i;
    return a
}
;
n.G = function(a) {
    this.fa.G(a[0]);
    this.ga.G(a[1]);
    this.g = a[2];
    this.Z = a[3];
    this.Ga = a[4];
    this.j = a[5];
    this.h = a[6];
    this.name = a[7];
    this.l = a[8];
    this.jd = a[9];
    this.ma = a[10];
    this.oa = a[11] ? this.fa : this.ga;
    this.i = a[12]
}
;
function Db(a, b, c, d, e, f) {
    this.ja = a;
    this.v = f;
    this.ba = e;
    this.s = b;
    this.buffer = c;
    this.l = d ? 2048 : 512;
    this.H = d;
    this.F = this.B = this.D = this.j = 0;
    this.buffer && (this.j = this.buffer.byteLength / this.l,
    this.j !== (this.j | 0) && (this.j = Math.ceil(this.j)),
    d ? (this.D = 1,
    this.B = 0) : (this.D = 16,
    this.B = 63),
    this.F = this.j / this.D / this.B,
    this.F !== (this.F | 0) && (this.F = Math.floor(this.F)),
    a = b.u.Hc,
    a.R[57] |= 1 << 4 * this.ba,
    a.R[18] = a.R[18] & 15 | 240,
    a.R[27] = this.F & 255,
    a.R[28] = this.F >> 8 & 255,
    a.R[29] = this.D & 255,
    a.R[30] = 255,
    a.R[31] = 255,
    a.R[32] = 200,
    a.R[33] = this.F & 255,
    a.R[34] = this.F >> 8 & 255,
    a.R[35] = this.B & 255);
    this.C = {
        vg: 0,
        wg: 0,
        Cf: 0,
        Df: 0,
        Yf: !1
    };
    this.buffer = c;
    this.mc = this.head = this.la = this.ia = this.Xc = this.ua = this.$ = this.Gd = 0;
    this.status = 80;
    this.J = 128;
    this.i = this.error = 0;
    this.data = new Uint8Array(65536);
    this.W = new Uint16Array(this.data.buffer);
    this.M = new Int32Array(this.data.buffer);
    this.g = this.h = 0;
    this.T = this.o = -1;
    this.ka = this.Y = 0;
    this.N = new Set;
    this.ca = new Set;
    Object.seal(this)
}
function Gb(a) {
    a.H ? (a.status = 0,
    a.$ = 1,
    a.error = 1,
    a.ua = 1,
    a.ia = 20,
    a.la = 235) : (a.status = 81,
    a.$ = 1,
    a.error = 1,
    a.ua = 1,
    a.ia = 0,
    a.la = 0);
    for (const b of a.N)
        a.ca.add(b);
    a.N.clear()
}
n = Db.prototype;
n.P = function() {
    this.ja.P()
}
;
n.Zd = function() {
    this.status = 80;
    var a = this.data.subarray(0, this.h);
    Rb(this, this.o, this.h / 512);
    this.P();
    this.buffer.set(this.Y, a, function() {});
    Sb(this, this.h)
}
;
function Tb(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    a.h = 0;
    var d = a.la << 8 & 65280 | a.ia & 255;
    a.ia = a.la = 0;
    65535 === d && d--;
    d > c && (d = c);
    b >= a.buffer.byteLength ? (a.status = 255,
    a.P()) : 0 === c ? (a.status = 80,
    a.i = 0) : (c = Math.min(c, a.buffer.byteLength - b),
    a.status = 208,
    Ub(a),
    a.aa(b, c, e=>{
        Vb(a, e);
        a.status = 88;
        a.$ = a.$ & -8 | 2;
        a.P();
        d &= -4;
        a.g = d;
        a.g > a.h && (a.g = a.h);
        a.ia = a.g & 255;
        a.la = a.g >> 8 & 255;
        Wb(a, c)
    }
    ))
}
function Xb(a, b) {
    var c = (b[7] << 8 | b[8]) * a.l;
    b = (b[2] << 24 | b[3] << 16 | b[4] << 8 | b[5]) * a.l;
    b >= a.buffer.byteLength ? (a.status = 255,
    a.P()) : (a.status = 208,
    Ub(a),
    a.aa(b, c, d=>{
        Wb(a, c);
        a.status = 88;
        a.$ = a.$ & -8 | 2;
        Vb(a, d);
        Qb(a)
    }
    ))
}
function Qb(a) {
    if (0 !== (a.ja.ma & 1) && 0 !== (a.status & 8)) {
        var b = a.ja.jd
          , c = 0
          , d = a.data;
        do {
            var e = a.s.i(b)
              , f = a.s.La(b + 4)
              , k = a.s.Kd(b + 7) & 128;
            f || (f = 65536);
            ka(a.s, d.subarray(c, Math.min(c + f, a.h)), e);
            c += f;
            b += 8;
            if (c >= a.h && !k)
                break
        } while (!k);
        a.status = 80;
        a.ja.ma &= -2;
        a.$ = a.$ & -8 | 3;
        a.P()
    }
}
function Eb(a, b) {
    if (a.i < a.g) {
        var c = 1 === b ? a.data[a.i] : 2 === b ? a.W[a.i >>> 1] : a.M[a.i >>> 2];
        a.i += b;
        a.i >= a.g && (160 === a.o ? a.g === a.h ? (a.status = 80,
        a.$ = a.$ & -8 | 3,
        a.P()) : (a.status = 88,
        a.$ = a.$ & -8 | 2,
        a.P(),
        b = a.la << 8 & 65280 | a.ia & 255,
        a.g + b > a.h ? (a.ia = a.h - a.g & 255,
        a.la = a.h - a.g >> 8 & 255,
        a.g = a.h) : a.g += b) : (a.error = 0,
        a.i >= a.h ? a.status = 80 : (b = 196 === a.o || 41 === a.o ? Math.min(a.J, (a.h - a.g) / 512) : 1,
        Rb(a, a.o, b),
        a.g += 512 * b,
        a.status = 88),
        a.P()));
        return c
    }
    a.i += b;
    return 0
}
function Fb(a, b, c) {
    if (!(a.i >= a.g) && (1 === c ? a.data[a.i++] = b : 2 === c ? (a.W[a.i >>> 1] = b,
    a.i += 2) : (a.M[a.i >>> 2] = b,
    a.i += 4),
    a.i === a.g))
        if (160 === a.o) {
            a.i = 0;
            a.T = a.data[0];
            switch (a.T) {
            case 0:
                Lb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 3:
                Lb(a, a.data[4]);
                a.g = a.h;
                a.status = 88;
                a.data[0] = 240;
                a.data[2] = 5;
                a.data[7] = 8;
                break;
            case 18:
                b = a.data[4];
                a.status = 88;
                a.data.set([5, 128, 1, 49, 31, 0, 0, 0, 83, 79, 78, 89, 32, 32, 32, 32, 67, 68, 45, 82, 79, 77, 32, 67, 68, 85, 45, 49, 48, 48, 48, 32, 49, 46, 49, 97]);
                a.g = a.h = Math.min(36, b);
                break;
            case 26:
                Lb(a, a.data[4]);
                a.g = a.h;
                a.status = 88;
                break;
            case 30:
                Lb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 37:
                b = a.j - 1;
                Vb(a, new Uint8Array([b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255, 0, 0, a.l >> 8 & 255, a.l & 255]));
                a.g = a.h;
                a.status = 88;
                break;
            case 40:
                a.Xc & 1 ? Xb(a, a.data) : Tb(a, a.data);
                break;
            case 66:
                b = a.data[8];
                Lb(a, Math.min(8, b));
                a.g = a.h;
                a.status = 88;
                break;
            case 67:
                b = a.data[8] | a.data[7] << 8;
                c = a.data[9] >> 6;
                Lb(a, b);
                a.g = a.h;
                0 === c ? (b = a.j,
                a.data.set(new Uint8Array([0, 18, 1, 1, 0, 20, 1, 0, 0, 0, 0, 0, 0, 22, 170, 0, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255]))) : 1 === c && a.data.set(new Uint8Array([0, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
                a.status = 88;
                break;
            case 70:
                b = a.data[8] | a.data[7] << 8;
                b = Math.min(b, 32);
                Lb(a, b);
                a.g = a.h;
                a.data[0] = b - 4 >> 24 & 255;
                a.data[1] = b - 4 >> 16 & 255;
                a.data[2] = b - 4 >> 8 & 255;
                a.data[3] = b - 4 & 255;
                a.data[6] = 8;
                a.data[10] = 3;
                a.status = 88;
                break;
            case 81:
                Lb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            case 82:
                a.status = 81;
                a.h = 0;
                a.error = 80;
                break;
            case 90:
                b = a.data[8] | a.data[7] << 8;
                42 === a.data[2] && Lb(a, Math.min(30, b));
                a.g = a.h;
                a.status = 88;
                break;
            case 189:
                Lb(a, a.data[9] | a.data[8] << 8);
                a.g = a.h;
                a.data[5] = 1;
                a.status = 88;
                break;
            case 74:
                a.status = 81;
                a.h = 0;
                a.error = 80;
                break;
            case 190:
                Lb(a, 0);
                a.g = a.h;
                a.status = 80;
                break;
            default:
                a.status = 81,
                a.h = 0,
                a.error = 80
            }
            a.$ = a.$ & -8 | 2;
            0 === (a.status & 128) && a.P();
            0 === (a.status & 128) && 0 === a.h && (a.$ |= 1,
            a.status &= -9)
        } else
            a.i >= a.h ? a.Zd() : (a.status = 88,
            a.g += 512,
            a.P())
}
function Rb(a, b, c) {
    a.$ -= c;
    36 === b || 41 === b || 52 === b || 57 === b || 37 === b || 53 === b ? (b = c + Yb(a),
    a.ua = b & 255 | b >> 16 & 65280,
    a.ia = b >> 8 & 255,
    a.la = b >> 16 & 255) : a.Gd ? (b = c + Zb(a),
    a.ua = b & 255,
    a.ia = b >> 8 & 255,
    a.la = b >> 16 & 255,
    a.head = a.head & -16 | b & 15) : (b = c + $b(a),
    c = b / (a.D * a.B) | 0,
    a.ia = c & 255,
    a.la = c >> 8 & 255,
    a.head = (b / a.B | 0) % a.D & 15,
    a.ua = b % a.B + 1 & 255,
    $b(a))
}
function Hb(a, b) {
    var c = 36 === b || 41 === b
      , d = Ib(a, c);
    c = Jb(a, c);
    var e = 32 === b || 36 === b
      , f = d * a.l;
    c *= a.l;
    c + f > a.buffer.byteLength ? (a.status = 255,
    a.P()) : (a.status = 192,
    Ub(a),
    a.aa(c, f, k=>{
        Vb(a, k);
        a.status = 88;
        a.g = e ? 512 : Math.min(f, 512 * a.J);
        Rb(a, b, e ? 1 : Math.min(d, a.B));
        a.P();
        Wb(a, f)
    }
    ))
}
function Ob(a) {
    var b = 37 === a.o
      , c = Ib(a, b);
    b = Jb(a, b);
    var d = c * a.l;
    b *= a.l;
    Ub(a);
    a.aa(b, d, e=>{
        var f = a.ja.jd
          , k = 0;
        do {
            var g = a.s.i(f)
              , h = a.s.La(f + 4)
              , l = a.s.Kd(f + 7) & 128;
            h || (h = 65536);
            ka(a.s, e.subarray(k, k + h), g);
            k += h;
            f += 8
        } while (!l);
        Rb(a, a.o, c);
        a.status = 80;
        a.ja.ma &= -2;
        a.o = -1;
        a.P();
        Wb(a, d)
    }
    )
}
function Pb(a) {
    var b = 53 === a.o
      , c = Ib(a, b)
      , d = Jb(a, b);
    b = c * a.l;
    d *= a.l;
    var e = a.ja.jd
      , f = 0;
    const k = new Uint8Array(b);
    do {
        var g = a.s.i(e)
          , h = a.s.La(e + 4)
          , l = a.s.Kd(e + 7) & 128;
        h || (h = 65536);
        k.set(a.s.Ka.subarray(g, g + h), f);
        f += h;
        e += 8
    } while (!l);
    a.buffer.set(d, k, ()=>{
        Rb(a, a.o, c);
        a.status = 80;
        a.P();
        a.ja.ma &= -2;
        a.o = -1
    }
    );
    Sb(a, b)
}
function $b(a) {
    return ((a.ia & 255 | a.la << 8 & 65280) * a.D + a.head) * a.B + (a.ua & 255) - 1
}
function Zb(a) {
    return a.ua & 255 | a.ia << 8 & 65280 | a.la << 16 & 16711680 | (a.head & 15) << 24
}
function Yb(a) {
    return (a.ua & 255 | a.ia << 8 & 65280 | a.la << 16 & 16711680 | a.ua >> 8 << 24 & 4278190080) >>> 0
}
function Jb(a, b) {
    return b ? Yb(a) : a.Gd ? Zb(a) : $b(a)
}
function Ib(a, b) {
    b ? (a = a.$,
    0 === a && (a = 65536)) : (a = a.$ & 255,
    0 === a && (a = 256));
    return a
}
function Mb(a) {
    if (a.mc & 16)
        Lb(a, 0);
    else {
        for (var b = 0; 512 > b; b++)
            a.data[b] = 0;
        b = Math.min(16383, a.F);
        Vb(a, [64, a.H ? 133 : 0, b, b >> 8, 0, 0, a.D, a.D >> 8, a.B / 512, a.B / 512 >> 8, 0, 2, a.B, a.B >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 118, 32, 54, 68, 72, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 128, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 2, 7, 0, b, b >> 8, a.D, a.D >> 8, a.B, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255, 0, 0, 160 === a.o ? 0 : 7, 160 === a.o ? 0 : 4, 0, 0, 30, 0, 30, 0, 30, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 116, 0, 64, 0, 64, 0, 116, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a.j & 255, a.j >> 8 & 255, a.j >> 16 & 255, a.j >> 24 & 255]);
        a.h = 512;
        a.g = 512
    }
}
function Lb(a, b) {
    Kb(a, b);
    for (var c = 0; c < b + 3 >> 2; c++)
        a.M[c] = 0
}
function Kb(a, b) {
    a.data.length < b && (a.data = new Uint8Array(b + 3 & -4),
    a.W = new Uint16Array(a.data.buffer),
    a.M = new Int32Array(a.data.buffer));
    a.h = b;
    a.i = 0
}
function Vb(a, b) {
    Kb(a, b.length);
    a.data.set(b)
}
function Ub(a) {
    a.C.Yf = !0;
    a.v.send("ide-read-start")
}
function Wb(a, b) {
    a.C.Yf = !1;
    var c = b / a.l | 0;
    a.C.vg += c;
    a.C.Cf += b;
    a.v.send("ide-read-end", [a.ba, b, c])
}
function Sb(a, b) {
    var c = b / a.l | 0;
    a.C.wg += c;
    a.C.Df += b;
    a.v.send("ide-write-end", [a.ba, b, c])
}
n.aa = function(a, b, c) {
    const d = this.ka++;
    this.N.add(d);
    this.buffer.get(a, b, e=>{
        this.ca.delete(d) ? this.N.has(d) : (this.N.delete(d),
        c(e))
    }
    )
}
;
n.X = function() {
    var a = [];
    a[0] = this.$;
    a[1] = this.F;
    a[2] = this.la;
    a[3] = this.ia;
    a[4] = this.i;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = this.mc;
    a[10] = this.error;
    a[11] = this.head;
    a[12] = this.D;
    a[13] = this.H;
    a[14] = this.Gd;
    a[15] = this.Xc;
    a[16] = this.data;
    a[17] = this.h;
    a[18] = this.ua;
    a[19] = this.j;
    a[20] = this.l;
    a[21] = this.J;
    a[22] = this.B;
    a[23] = this.status;
    a[24] = this.Y;
    a[25] = this.o;
    a[26] = this.g;
    a[27] = this.T;
    a[28] = this.buffer;
    return a
}
;
n.G = function(a) {
    this.$ = a[0];
    this.F = a[1];
    this.la = a[2];
    this.ia = a[3];
    this.i = a[4];
    this.mc = a[9];
    this.error = a[10];
    this.head = a[11];
    this.D = a[12];
    this.H = a[13];
    this.Gd = a[14];
    this.Xc = a[15];
    this.data = a[16];
    this.h = a[17];
    this.ua = a[18];
    this.j = a[19];
    this.l = a[20];
    this.J = a[21];
    this.B = a[22];
    this.status = a[23];
    this.Y = a[24];
    this.o = a[25];
    this.g = a[26];
    this.T = a[27];
    this.W = new Uint16Array(this.data.buffer);
    this.M = new Int32Array(this.data.buffer);
    this.buffer && this.buffer.G(a[28])
}
;
function ac(a) {
    this.nb = new Uint8Array(4);
    this.g = new Uint8Array(4);
    this.dd = new Uint8Array(4);
    this.ed = new Uint8Array(4);
    this.cd = new Int32Array(this.nb.buffer);
    new Int32Array(this.g.buffer);
    this.cg = new Int32Array(this.dd.buffer);
    this.eg = new Int32Array(this.ed.buffer);
    this.xb = [];
    this.u = [];
    this.s = a;
    for (var b = 0; 256 > b; b++)
        this.xb[b] = void 0,
        this.u[b] = void 0;
    this.A = a.A;
    K(a.A, 3324, this, function(c) {
        bc(this, this.cd[0], c)
    }, function(c) {
        cc(this, this.cd[0], c)
    }, function(c) {
        var d = this.cd[0]
          , e = d >> 8 & 65535
          , f = d & 255;
        d = this.xb[e];
        e = this.u[e];
        if (d)
            if (16 <= f && 40 > f)
                if (e = e.ib[f - 16 >> 2]) {
                    f >>= 2;
                    var k = d[f] & 1;
                    -1 === (c | 3 | e.size - 1) ? (c = ~(e.size - 1) | k,
                    0 === k && (d[f] = c)) : 0 === k && (d[f] = e.$f);
                    1 === k && (dc(this, e, d[f] & 65534, c & 65534),
                    d[f] = c | 1)
                } else
                    d[f >> 2] = 0;
            else
                48 === f ? d[f >> 2] = e.dg ? -1 === (c | 2047) ? -e.dg | 0 : e.vh | 0 : 0 : 4 !== f && (d[f >>> 2] = c)
    });
    K(a.A, 3325, this, function(c) {
        bc(this, this.cd[0] + 1 | 0, c)
    });
    K(a.A, 3326, this, function(c) {
        bc(this, this.cd[0] + 2 | 0, c)
    }, function(c) {
        cc(this, this.cd[0] + 2 | 0, c)
    });
    K(a.A, 3327, this, function(c) {
        bc(this, this.cd[0] + 3 | 0, c)
    });
    a.A.kd(3324, this, function() {
        return this.dd[0]
    }, function() {
        return this.dd[1]
    }, function() {
        return this.dd[2]
    }, function() {
        return this.dd[3]
    });
    a.A.kd(3320, this, function() {
        return this.ed[0]
    }, function() {
        return this.ed[1]
    }, function() {
        return this.ed[2]
    }, function() {
        return this.ed[3]
    });
    a.A.Ib(3320, this, function(c) {
        this.nb[0] = c & 252
    }, function(c) {
        2 === (this.nb[1] & 6) && 6 === (c & 6) ? ec(a) : this.nb[1] = c
    }, function(c) {
        this.nb[2] = c
    }, function(c) {
        this.nb[3] = c;
        c = this.nb[0] & 252;
        var d = this.xb[this.nb[2] << 8 | this.nb[1]];
        void 0 !== d ? (this.eg[0] = -2147483648,
        this.cg[0] = c < d.byteLength ? d[c >> 2] : 0) : (this.cg[0] = -1,
        this.eg[0] = 0)
    });
    Nb(this, {
        Ga: 0,
        I: [134, 128, 55, 18, 0, 0, 0, 0, 2, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0],
        ib: [],
        name: "82441FX PMC"
    });
    this.i = {
        Ga: 8,
        I: [134, 128, 0, 112, 7, 0, 0, 2, 0, 0, 1, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ib: [],
        name: "82371SB PIIX3 ISA"
    };
    this.j = Nb(this, this.i);
    this.h = new Uint8Array(this.j.buffer)
}
ac.prototype.X = function() {
    for (var a = [], b = 0; 256 > b; b++)
        a[b] = this.xb[b];
    a[256] = this.nb;
    a[257] = this.g;
    a[258] = this.dd;
    a[259] = this.ed;
    return a
}
;
ac.prototype.G = function(a) {
    for (var b = 0; 256 > b; b++) {
        var c = this.u[b]
          , d = a[b];
        if (c && d) {
            for (var e = 0; e < c.ib.length; e++) {
                var f = d[4 + e];
                if (f & 1) {
                    var k = c.ib[e];
                    dc(this, k, k.$f & 65534, f & 65534)
                }
            }
            this.xb[b].set(d)
        }
    }
    this.nb.set(a[256]);
    this.g.set(a[257]);
    this.dd.set(a[258]);
    this.ed.set(a[259])
}
;
function bc(a, b, c) {
    var d = b & 255;
    (new Uint8Array(a.xb[b >> 8 & 65535].buffer))[d] = c
}
function cc(a, b, c) {
    var d = b & 255;
    a = new Uint16Array(a.xb[b >> 8 & 65535].buffer);
    !a || 16 <= d && 44 > d || (a[d >>> 1] = c)
}
function Nb(a, b) {
    var c = b.Ga
      , d = new Int32Array(64);
    d.set(new Int32Array((new Uint8Array(b.I)).buffer));
    a.xb[c] = d;
    a.u[c] = b;
    c = d.slice(4, 10);
    for (var e = 0; e < b.ib.length; e++) {
        var f = b.ib[e];
        if (f) {
            var k = c[e]
              , g = k & 1;
            f.$f = k;
            f.entries = [];
            if (0 !== g)
                for (k &= -2,
                g = 0; g < f.size; g++)
                    f.entries[g] = a.A.ports[k + g]
        }
    }
    return d
}
function dc(a, b, c, d) {
    for (var e = b.size, f = a.A.ports, k = 0; k < e; k++)
        f[c + k] = $a(a.A),
        f[d + k] = b.entries[k]
}
ac.prototype.Ba = function(a) {
    this.s.Ja(this.h[96 + ((this.xb[a][15] >> 8 & 255) - 1 + ((a >> 3) - 1 & 255) & 3)])
}
;
function fc(a, b) {
    O(a.s, a.h[96 + ((a.xb[b][15] >> 8 & 255) + (b >> 3 & 255) - 2 & 3)])
}
;function gc(a, b) {
    this.A = a.A;
    this.s = a;
    this.fb = a.u.fb;
    this.h = 0;
    this.M = new Uint8Array(10);
    this.N = 0;
    this.j = null;
    this.g = new Uint8Array(10);
    this.C = this.l = this.i = 0;
    this.H = b;
    this.J = this.D = this.Y = this.ka = this.ca = this.ba = 0;
    this.T = 1;
    this.o = 0;
    if (b) {
        this.C = b.byteLength;
        var c;
        if ((c = {
            160: {
                type: 1,
                sb: 40,
                pb: 8,
                mb: 1
            },
            180: {
                type: 1,
                sb: 40,
                pb: 9,
                mb: 1
            },
            200: {
                type: 1,
                sb: 40,
                pb: 10,
                mb: 1
            },
            320: {
                type: 1,
                sb: 40,
                pb: 8,
                mb: 2
            },
            360: {
                type: 1,
                sb: 40,
                pb: 9,
                mb: 2
            },
            400: {
                type: 1,
                sb: 40,
                pb: 10,
                mb: 2
            },
            720: {
                type: 3,
                sb: 80,
                pb: 9,
                mb: 2
            },
            1200: {
                type: 2,
                sb: 80,
                pb: 15,
                mb: 2
            },
            1440: {
                type: 4,
                sb: 80,
                pb: 18,
                mb: 2
            },
            1722: {
                type: 5,
                sb: 82,
                pb: 21,
                mb: 2
            },
            2880: {
                type: 5,
                sb: 80,
                pb: 36,
                mb: 2
            }
        }[this.C >> 10]) && 0 === (this.C & 1023))
            a.u.Hc.R[16] = c.type << 4,
            a = c.pb,
            b = c.mb,
            c = c.sb;
        else
            throw "Unknown floppy size: " + ub(b.byteLength);
        this.B = a;
        this.F = b;
        this.W = c
    } else
        a.u.Hc.R[16] = 64,
        this.C = this.W = this.F = this.B = 0;
    J(this.A, 1008, this, this.Bi);
    J(this.A, 1010, this, this.Ci);
    J(this.A, 1012, this, this.Ei);
    J(this.A, 1013, this, this.Fi);
    J(this.A, 1015, this, this.Hi);
    K(this.A, 1010, this, this.Di);
    K(this.A, 1013, this, this.Gi)
}
n = gc.prototype;
n.X = function() {
    var a = [];
    a[0] = this.h;
    a[1] = this.M;
    a[2] = this.N;
    a[4] = this.g;
    a[5] = this.i;
    a[6] = this.l;
    a[7] = this.C;
    a[8] = this.ba;
    a[9] = this.ca;
    a[10] = this.ka;
    a[11] = this.Y;
    a[12] = this.D;
    a[13] = this.J;
    a[14] = this.T;
    a[15] = this.o;
    a[16] = this.B;
    a[17] = this.F;
    a[18] = this.W;
    return a
}
;
n.G = function(a) {
    this.h = a[0];
    this.M = a[1];
    this.N = a[2];
    this.j = a[3];
    this.g = a[4];
    this.i = a[5];
    this.l = a[6];
    this.C = a[7];
    this.ba = a[8];
    this.ca = a[9];
    this.ka = a[10];
    this.Y = a[11];
    this.D = a[12];
    this.J = a[13];
    this.T = a[14];
    this.o = a[15];
    this.B = a[16];
    this.F = a[17];
    this.W = a[18]
}
;
n.Bi = function() {
    return 0
}
;
n.Ei = function() {
    var a = 128;
    this.i < this.l && (a |= 80);
    0 === (this.o & 8) && (a |= 32);
    return a
}
;
n.Hi = function() {
    return 0
}
;
n.Fi = function() {
    return this.i < this.l ? (O(this.s, 6),
    this.g[this.i++]) : 255
}
;
n.Gi = function(a) {
    if (this.H)
        if (0 < this.h)
            this.M[this.N++] = a,
            this.h--,
            0 === this.h && this.j.call(this, this.M);
        else {
            switch (a) {
            case 3:
                this.j = this.ah;
                this.h = 2;
                break;
            case 4:
                this.j = this.Hg;
                this.h = 1;
                break;
            case 5:
            case 197:
                this.j = function(b) {
                    hc(this, !0, b)
                }
                ;
                this.h = 8;
                break;
            case 230:
                this.j = function(b) {
                    hc(this, !1, b)
                }
                ;
                this.h = 8;
                break;
            case 7:
                this.j = this.Gg;
                this.h = 1;
                break;
            case 8:
                this.i = 0;
                this.l = 2;
                this.g[0] = 32;
                this.g[1] = this.D;
                break;
            case 74:
                this.j = this.Xi;
                this.h = 1;
                break;
            case 15:
                this.h = 2;
                this.j = this.Eg;
                break;
            case 14:
                this.g[0] = 128,
                this.i = 0,
                this.l = 1,
                this.h = 0
            }
            this.N = 0
        }
}
;
n.Ci = function() {
    return this.o
}
;
n.Di = function(a) {
    4 === (a & 4) && 0 === (this.o & 4) && this.s.Ja(6);
    this.o = a
}
;
n.Hg = function() {
    this.i = 0;
    this.l = 1;
    this.g[0] = 32
}
;
n.Eg = function(a) {
    this.D = a[1];
    this.J = a[0] >> 2 & 1;
    this.Ba()
}
;
n.Gg = function() {
    this.Ba()
}
;
function hc(a, b, c) {
    var d = c[2]
      , e = c[1]
      , f = c[3]
      , k = 128 << c[4]
      , g = c[5] - c[3] + 1
      , h = ((d + a.F * e) * a.B + f - 1) * k;
    a.H && (b ? a.fb.Zd(a.H, h, g * k, 2, a.done.bind(a, c, e, d, f)) : ic(a.fb, a.H, h, a.done.bind(a, c, e, d, f)))
}
n.done = function(a, b, c, d, e) {
    e || (d++,
    d > this.B && (d = 1,
    c++,
    c >= this.F && (c = 0,
    b++)),
    this.D = b,
    this.J = c,
    this.T = d,
    this.i = 0,
    this.l = 7,
    this.g[0] = c << 2 | 32,
    this.g[1] = 0,
    this.g[2] = 0,
    this.g[3] = b,
    this.g[4] = c,
    this.g[5] = d,
    this.g[6] = a[4],
    this.Ba())
}
;
n.ah = function() {}
;
n.Xi = function() {
    this.i = 0;
    this.l = 7;
    this.g[0] = 0;
    this.g[1] = 0;
    this.g[2] = 0;
    this.g[3] = 0;
    this.g[4] = 0;
    this.g[5] = 0;
    this.g[6] = 0;
    this.Ba()
}
;
n.Ba = function() {
    this.o & 8 && this.s.Ja(6)
}
;
function ka(a, b, c) {
    b.length && (a.Ge(c),
    a.Ge(c + b.length - 1),
    a.lh(c, c + b.length),
    a.Ka.set(b, c))
}
;function jc(a) {
    this.s = a;
    this.o = new Uint8Array(8);
    this.C = new Uint8Array(8);
    this.g = new Uint16Array(8);
    this.j = new Uint16Array(8);
    this.h = new Uint16Array(8);
    this.l = new Uint16Array(8);
    this.Tb = new Uint8Array(8);
    this.B = new Uint8Array(8);
    this.We = [];
    this.i = 0;
    a = a.A;
    K(a, 0, this, this.Cc.bind(this, 0));
    K(a, 2, this, this.Cc.bind(this, 1));
    K(a, 4, this, this.Cc.bind(this, 2));
    K(a, 6, this, this.Cc.bind(this, 3));
    K(a, 1, this, this.Ec.bind(this, 0));
    K(a, 3, this, this.Ec.bind(this, 1));
    K(a, 5, this, this.Ec.bind(this, 2));
    K(a, 7, this, this.Ec.bind(this, 3));
    J(a, 0, this, this.Bc.bind(this, 0));
    J(a, 2, this, this.Bc.bind(this, 1));
    J(a, 4, this, this.Bc.bind(this, 2));
    J(a, 6, this, this.Bc.bind(this, 3));
    J(a, 1, this, this.Dc.bind(this, 0));
    J(a, 3, this, this.Dc.bind(this, 1));
    J(a, 5, this, this.Dc.bind(this, 2));
    J(a, 7, this, this.Dc.bind(this, 3));
    K(a, 192, this, this.Cc.bind(this, 4));
    K(a, 196, this, this.Cc.bind(this, 5));
    K(a, 200, this, this.Cc.bind(this, 6));
    K(a, 204, this, this.Cc.bind(this, 7));
    K(a, 194, this, this.Ec.bind(this, 4));
    K(a, 198, this, this.Ec.bind(this, 5));
    K(a, 202, this, this.Ec.bind(this, 6));
    K(a, 206, this, this.Ec.bind(this, 7));
    J(a, 192, this, this.Bc.bind(this, 4));
    J(a, 196, this, this.Bc.bind(this, 5));
    J(a, 200, this, this.Bc.bind(this, 6));
    J(a, 204, this, this.Bc.bind(this, 7));
    J(a, 194, this, this.Dc.bind(this, 4));
    J(a, 198, this, this.Dc.bind(this, 5));
    J(a, 202, this, this.Dc.bind(this, 6));
    J(a, 206, this, this.Dc.bind(this, 7));
    K(a, 135, this, this.Gc.bind(this, 0));
    K(a, 131, this, this.Gc.bind(this, 1));
    K(a, 129, this, this.Gc.bind(this, 2));
    K(a, 130, this, this.Gc.bind(this, 3));
    K(a, 143, this, this.Gc.bind(this, 4));
    K(a, 139, this, this.Gc.bind(this, 5));
    K(a, 137, this, this.Gc.bind(this, 6));
    K(a, 138, this, this.Gc.bind(this, 7));
    J(a, 135, this, this.Fc.bind(this, 0));
    J(a, 131, this, this.Fc.bind(this, 1));
    J(a, 129, this, this.Fc.bind(this, 2));
    J(a, 130, this, this.Fc.bind(this, 3));
    J(a, 143, this, this.Fc.bind(this, 4));
    J(a, 139, this, this.Fc.bind(this, 5));
    J(a, 137, this, this.Fc.bind(this, 6));
    J(a, 138, this, this.Fc.bind(this, 7));
    K(a, 1159, this, this.hd.bind(this, 0));
    K(a, 1155, this, this.hd.bind(this, 1));
    K(a, 1153, this, this.hd.bind(this, 2));
    K(a, 1154, this, this.hd.bind(this, 3));
    K(a, 1163, this, this.hd.bind(this, 5));
    K(a, 1161, this, this.hd.bind(this, 6));
    K(a, 1162, this, this.hd.bind(this, 7));
    J(a, 1159, this, this.gd.bind(this, 0));
    J(a, 1155, this, this.gd.bind(this, 1));
    J(a, 1153, this, this.gd.bind(this, 2));
    J(a, 1154, this, this.gd.bind(this, 3));
    J(a, 1163, this, this.gd.bind(this, 5));
    J(a, 1161, this, this.gd.bind(this, 6));
    J(a, 1162, this, this.gd.bind(this, 7));
    K(a, 10, this, this.tg.bind(this, 0));
    K(a, 212, this, this.tg.bind(this, 4));
    K(a, 15, this, this.sg.bind(this, 0));
    K(a, 222, this, this.sg.bind(this, 4));
    J(a, 15, this, this.rg.bind(this, 0));
    J(a, 222, this, this.rg.bind(this, 4));
    K(a, 11, this, this.qg.bind(this, 0));
    K(a, 214, this, this.qg.bind(this, 4));
    K(a, 12, this, this.pg);
    K(a, 216, this, this.pg)
}
n = jc.prototype;
n.X = function() {
    return [this.o, this.C, this.g, this.j, this.h, this.l, this.Tb, this.B, this.i]
}
;
n.G = function(a) {
    this.o = a[0];
    this.C = a[1];
    this.g = a[2];
    this.j = a[3];
    this.h = a[4];
    this.l = a[5];
    this.Tb = a[6];
    this.B = a[7];
    this.i = a[8]
}
;
n.Ec = function(a, b) {
    this.h[a] = kc(this, this.h[a], b, !1);
    this.l[a] = kc(this, this.l[a], b, !0)
}
;
n.Dc = function(a) {
    return lc(this, this.h[a])
}
;
n.Cc = function(a, b) {
    this.g[a] = kc(this, this.g[a], b, !1);
    this.j[a] = kc(this, this.j[a], b, !0)
}
;
n.Bc = function(a) {
    return lc(this, this.g[a])
}
;
n.hd = function(a, b) {
    this.C[a] = b
}
;
n.gd = function(a) {
    return this.C[a]
}
;
n.Gc = function(a, b) {
    this.o[a] = b
}
;
n.Fc = function(a) {
    return this.o[a]
}
;
n.tg = function(a, b) {
    mc(this, (b & 3) + a, b & 4 ? 1 : 0)
}
;
n.sg = function(a, b) {
    for (var c = 0; 4 > c; c++)
        mc(this, a + c, b & 1 << c)
}
;
n.rg = function(a) {
    var b = 0 | this.Tb[a + 0];
    b |= this.Tb[a + 1] << 1;
    b |= this.Tb[a + 2] << 2;
    return b |= this.Tb[a + 3] << 3
}
;
n.qg = function(a, b) {
    this.B[(b & 3) + a] = b
}
;
n.pg = function() {
    this.i = 0
}
;
function mc(a, b, c) {
    if (a.Tb[b] !== c && (a.Tb[b] = c,
    !c))
        for (c = 0; c < a.We.length; c++)
            a.We[c].De.call(a.We[c].tf, b)
}
function ic(a, b, c, d) {
    var e = a.h[2] + 1
      , f = nc(a, 2);
    if (c + e > b.byteLength)
        d(!0);
    else {
        var k = a.s;
        a.g[2] += e;
        b.get(c, e, function(g) {
            ka(k, g, f);
            d(!1)
        })
    }
}
n.Zd = function(a, b, c, d, e) {
    var f = this.h[d] + 1 & 65535
      , k = 5 <= d ? 2 : 1
      , g = f * k
      , h = nc(this, d)
      , l = !1
      , m = !1
      , r = this.B[d] & 16;
    c < g ? (f = Math.floor(c / k),
    g = f * k,
    l = !0) : c > g && (m = !0);
    b + g > a.byteLength ? e(!0) : (this.g[d] += f,
    this.h[d] -= f,
    !l && r && (this.g[d] = this.j[d],
    this.h[d] = this.l[d]),
    a.set(b, this.s.Ka.subarray(h, h + g), ()=>{
        m && r ? this.Zd(a, b + g, c - g, d, e) : e(!1)
    }
    ))
}
;
function nc(a, b) {
    var c = a.g[b];
    5 <= b && (c <<= 1);
    c = c & 65535 | a.o[b] << 16;
    return c |= a.C[b] << 24
}
function kc(a, b, c, d) {
    d || (a.i ^= 1);
    return a.i ? b & -256 | c : b & -65281 | c << 8
}
function lc(a, b) {
    a.i ^= 1;
    return a.i ? b & 255 : b >> 8 & 255
}
;function oc(a, b) {
    this.s = a;
    this.v = b;
    this.l = new Float64Array(3);
    this.o = new Uint16Array(3);
    this.h = new Uint8Array(4);
    this.j = new Uint8Array(4);
    this.i = new Uint8Array(4);
    this.D = new Uint8Array(4);
    this.C = new Uint8Array(4);
    this.B = new Uint16Array(3);
    this.g = new Uint16Array(3);
    J(a.A, 97, this, function() {
        var c = fb()
          , d = 66.66666666666667 * c & 1;
        c = pc(this, 2, c);
        return d << 4 | c << 5
    });
    K(a.A, 97, this, function(c) {
        c & 1 ? this.v.send("pcspeaker-enable") : this.v.send("pcspeaker-disable")
    });
    J(a.A, 64, this, function() {
        return qc(this, 0)
    });
    J(a.A, 65, this, function() {
        return qc(this, 1)
    });
    J(a.A, 66, this, function() {
        return qc(this, 2)
    });
    K(a.A, 64, this, function(c) {
        rc(this, 0, c)
    });
    K(a.A, 65, this, function(c) {
        rc(this, 1, c)
    });
    K(a.A, 66, this, function(c) {
        rc(this, 2, c)
    });
    K(a.A, 67, this, this.F)
}
oc.prototype.X = function() {
    var a = [];
    a[0] = this.h;
    a[1] = this.j;
    a[2] = this.i;
    a[3] = this.D;
    a[4] = this.C;
    a[5] = this.B;
    a[6] = this.g;
    a[7] = this.l;
    a[8] = this.o;
    return a
}
;
oc.prototype.G = function(a) {
    this.h = a[0];
    this.j = a[1];
    this.i = a[2];
    this.D = a[3];
    this.C = a[4];
    this.B = a[5];
    this.g = a[6];
    this.l = a[7];
    this.o = a[8]
}
;
oc.prototype.rb = function(a, b) {
    b || (this.j[0] && pc(this, 0, a) ? (this.o[0] = sc(this, 0, a),
    this.l[0] = a,
    O(this.s, 0),
    this.s.Ja(0),
    0 === this.i[0] && (this.j[0] = 0)) : O(this.s, 0))
}
;
function sc(a, b, c) {
    if (!a.j[b])
        return 0;
    c = a.o[b] - Math.floor(1193.1816666 * (c - a.l[b]));
    a = a.g[b];
    c >= a ? c %= a : 0 > c && (c = c % a + a);
    return c
}
function pc(a, b, c) {
    c -= a.l[b];
    return 0 > c ? !0 : a.o[b] < Math.floor(1193.1816666 * c)
}
function qc(a, b) {
    var c = a.C[b];
    if (c)
        return a.C[b]--,
        2 === c ? a.B[b] & 255 : a.B[b] >> 8;
    c = a.h[b];
    3 === a.i[b] && (a.h[b] ^= 1);
    a = sc(a, b, fb());
    return c ? a & 255 : a >> 8
}
function rc(a, b, c) {
    a.g[b] = a.h[b] ? a.g[b] & -256 | c : a.g[b] & 255 | c << 8;
    3 === a.D[b] && a.h[b] || (a.g[b] || (a.g[b] = 65535),
    a.o[b] = a.g[b],
    a.j[b] = !0,
    a.l[b] = fb());
    3 === a.D[b] && (a.h[b] ^= 1);
    a.v.send("pcspeaker-update", [a.i[2], a.g[2]])
}
oc.prototype.F = function(a) {
    var b = a >> 1 & 7
      , c = a >> 6 & 3;
    a = a >> 4 & 3;
    3 !== c && (0 === a ? (this.C[c] = 2,
    b = sc(this, c, fb()),
    this.B[c] = b ? b - 1 : 0) : (6 <= b && (b &= -5),
    this.h[c] = 1 === a ? 0 : 1,
    0 === c && O(this.s, 0),
    this.i[c] = b,
    this.D[c] = a,
    this.v.send("pcspeaker-update", [this.i[2], this.g[2]])))
}
;
var tc = Uint32Array.from([655360, 655360, 720896, 753664])
  , uc = Uint32Array.from([131072, 65536, 32768, 32768]);
function vc(a, b, c) {
    this.v = b;
    this.na = c;
    this.D = 0;
    this.pc = 14;
    this.nc = 15;
    this.H = 80;
    this.Ob = 25;
    this.he = this.Na = this.xc = this.Y = 0;
    this.ac = [];
    this.zc = this.xa = 0;
    this.cb = new Uint8Array(25);
    this.o = this.J = this.wc = this.M = this.g = this.i = this.Lb = this.Mb = this.Ca = 0;
    this.qc = !0;
    this.Aa = !1;
    setTimeout(()=>{
        b.send("screen-set-mode", this.Aa)
    }
    , 0);
    this.$a = new Int32Array(256);
    this.B = this.Ma = this.h = 0;
    this.Ia = !1;
    this.hc = 32;
    this.qb = this.Qa = 0;
    this.I = [52, 18, 17, 17, 3, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 8, 14680064, 57344, 224, 0, 0, 0, 0, 0, 0, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 190, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Ga = 144;
    this.ib = [{
        size: c
    }];
    this.dg = 65536;
    this.vh = 4272947200;
    this.name = "vga";
    this.C = {
        Wf: !1,
        Zi: 0,
        $i: 0,
        Bf: 0
    };
    this.ca = this.tb = this.ba = this.F = 0;
    this.Xd = new Uint8Array(16);
    this.l = -1;
    this.Pb = 32;
    this.Qc = this.Nb = this.yd = this.Ra = 0;
    this.Rb = -1;
    this.Qb = 15;
    this.bb = this.Sb = 0;
    this.Kb = -1;
    this.Pa = this.dc = this.vc = 0;
    this.rc = 255;
    this.W = this.T = this.N = this.Oa = this.sc = this.Jb = 0;
    this.j = this.ad = 255;
    c = a.A;
    K(c, 960, this, this.gi);
    J(c, 960, this, this.lg, this.fi);
    J(c, 961, this, this.mg);
    K(c, 962, this, this.hi);
    c.Ib(964, this, this.ji, this.li);
    J(c, 964, this, this.ii);
    J(c, 965, this, this.ki);
    c.Ib(974, this, this.vi, this.xi);
    J(c, 974, this, this.ui);
    J(c, 975, this, this.wi);
    K(c, 967, this, this.ni);
    J(c, 967, this, this.mi);
    K(c, 968, this, this.pi);
    J(c, 968, this, this.oi);
    K(c, 969, this, this.si);
    J(c, 969, this, this.ri);
    J(c, 972, this, this.ti);
    c.Ib(980, this, this.zi, this.Ai);
    J(c, 980, this, this.yi);
    J(c, 981, this, this.ng, ()=>this.ng());
    J(c, 970, this, function() {
        return 0
    });
    J(c, 986, this, this.og);
    J(c, 954, this, this.og);
    this.ub = -1;
    this.ka = 0;
    K(c, 462, this, void 0, this.xh);
    K(c, 463, this, void 0, this.zh);
    J(c, 463, this, void 0, this.yh);
    void 0 === this.na || 786432 > this.na ? this.na = 786432 : this.na & 65535 && (this.na |= 65535,
    this.na++);
    this.ha = new Uint8Array(this.na);
    this.Ha = this.na;
    this.Da = 0;
    this.Cd = this.na;
    this.Bd = 0;
    this.Ad = void 0;
    b.register("screen-tell-buffer", function(e) {
        this.Ad && e[0] && e[0].set(this.Ad.subarray(0, e[0].length));
        this.Ad = e[0]
    }, this);
    b.register("screen-fill-buffer", function() {
        if (this.Aa && this.Ad)
            if (this.Da < this.Ha && this.Bd < this.Cd)
                this.v.send("screen-fill-buffer-end", this.ac);
            else {
                if (this.Ia) {
                    var e = this.Ad
                      , f = this.Ha
                      , k = this.Da;
                    switch (this.hc) {
                    case 32:
                        var g = f - this.qb >> 2
                          , h = (k - this.qb >> 2) + 1
                          , l = f >> 2;
                        for (f = g; f < h; f++)
                            k = this.Bg[l++],
                            e[f] = k << 16 | k >> 16 & 255 | k & 65280 | 4278190080;
                        break;
                    case 24:
                        f -= f % 3;
                        k += 3 - k % 3;
                        g = (f - this.qb) / 3 | 0;
                        h = ((k - this.qb) / 3 | 0) + 1;
                        l = f;
                        for (f = g; l < k; f++) {
                            var m = this.ha[l++]
                              , r = this.ha[l++]
                              , t = this.ha[l++];
                            e[f] = m << 16 | r << 8 | t | 4278190080
                        }
                        break;
                    case 16:
                        g = f - this.qb >> 1;
                        h = (k - this.qb >> 1) + 1;
                        l = f >> 1;
                        for (f = g; f < h; f++)
                            k = this.gj[l++],
                            t = 255 * (k >> 11) / 31 | 0,
                            r = 255 * (k >> 5 & 63) / 63 | 0,
                            m = 255 * (k & 31) / 31 | 0,
                            e[f] = m << 16 | r << 8 | t | 4278190080;
                        break;
                    case 8:
                        for (g = f - this.qb,
                        h = k - this.qb + 1,
                        l = f; f <= k; f++)
                            r = this.$a[this.ha[l++]],
                            e[f] = r & 65280 | r << 16 | r >> 16 | 4278190080
                    }
                    e = g / this.Ma | 0;
                    this.v.send("screen-fill-buffer-end", [{
                        oe: 0,
                        pe: e,
                        wd: 0,
                        xd: e,
                        Td: this.Ma,
                        Sd: (h / this.Ma | 0) - e + 1
                    }])
                } else {
                    h = Math.min(this.Bd | 15, 524287);
                    e = wc(this);
                    g = ~this.Ca & 3;
                    l = this.dc & 96;
                    f = this.Ra & 64;
                    for (k = this.Cd & -16; k <= h; ) {
                        var p = k >>> e;
                        if (g) {
                            r = k / this.Na | 0;
                            t = k - this.Na * r;
                            switch (g) {
                            case 1:
                                p = (r & 1) << 13;
                                r >>>= 1;
                                break;
                            case 2:
                                p = (r & 1) << 14;
                                r >>>= 1;
                                break;
                            case 3:
                                p = (r & 3) << 13,
                                r >>>= 2
                            }
                            p |= (r * this.Na + t >>> e) + this.xa
                        }
                        r = this.Pe[p];
                        t = this.Qe[p];
                        m = this.Re[p];
                        var q = this.Se[p];
                        p = new Uint8Array(8);
                        switch (l) {
                        case 0:
                            r <<= 0;
                            t <<= 1;
                            m <<= 2;
                            q <<= 3;
                            for (var w = 7; 0 <= w; w--)
                                p[7 - w] = r >> w & 1 | t >> w & 2 | m >> w & 4 | q >> w & 8;
                            break;
                        case 32:
                            p[0] = r >> 6 & 3 | m >> 4 & 12;
                            p[1] = r >> 4 & 3 | m >> 2 & 12;
                            p[2] = r >> 2 & 3 | m >> 0 & 12;
                            p[3] = r >> 0 & 3 | m << 2 & 12;
                            p[4] = t >> 6 & 3 | q >> 4 & 12;
                            p[5] = t >> 4 & 3 | q >> 2 & 12;
                            p[6] = t >> 2 & 3 | q >> 0 & 12;
                            p[7] = t >> 0 & 3 | q << 2 & 12;
                            break;
                        case 64:
                        case 96:
                            p[0] = r >> 4 & 15,
                            p[1] = r >> 0 & 15,
                            p[2] = t >> 4 & 15,
                            p[3] = t >> 0 & 15,
                            p[4] = m >> 4 & 15,
                            p[5] = m >> 0 & 15,
                            p[6] = q >> 4 & 15,
                            p[7] = q >> 0 & 15
                        }
                        if (f)
                            for (r = w = 0; 4 > w; w++,
                            k++,
                            r += 2)
                                this.Oe[k] = p[r] << 4 | p[r + 1];
                        else
                            for (w = 0; 8 > w; w++,
                            k++)
                                this.Oe[k] = p[w]
                    }
                    f = this.Ha;
                    h = Math.min(this.Da, 524287);
                    if (e = this.Ad)
                        if (g = 255,
                        l = 0,
                        this.Ra & 128 && (g &= 207,
                        l |= this.Qc << 4 & 48),
                        this.Ra & 64)
                            for (; f <= h; f++)
                                k = this.Oe[f] & g | l,
                                k = this.$a[k],
                                e[f] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                        else
                            for (g &= 63,
                            l |= this.Qc << 4 & 192; f <= h; f++)
                                k = this.Xd[this.Oe[f] & this.yd] & g | l,
                                k = this.$a[k],
                                e[f] = k & 65280 | k << 16 | k >> 16 | 4278190080;
                    this.v.send("screen-fill-buffer-end", this.ac)
                }
                this.Ha = this.na;
                this.Da = 0;
                this.Cd = this.na;
                this.Bd = 0
            }
        xc(this)
    }, this);
    this.gj = new Uint16Array(this.ha.buffer);
    this.Bg = new Int32Array(this.ha.buffer);
    this.Ub = new Uint8Array(this.ha.buffer,0,262144);
    this.Pe = new Uint8Array(this.ha.buffer,0,65536);
    this.Qe = new Uint8Array(this.ha.buffer,65536,65536);
    this.Re = new Uint8Array(this.ha.buffer,131072,65536);
    this.Se = new Uint8Array(this.ha.buffer,196608,65536);
    this.Oe = new Uint8Array(this.ha.buffer,262144,524288);
    var d = this;
    ab(c, 655360, 131072, function(e) {
        return yc(d, e)
    }, function(e, f) {
        if (d.Ia && d.Aa && d.qc) {
            var k = e - 655360 | d.Qa;
            d.Ha = k < d.Ha ? k : d.Ha;
            d.Da = k > d.Da ? k : d.Da;
            d.ha[k] = f
        } else {
            var g = d.Oa >> 2 & 3;
            e -= tc[g];
            if (!(0 > e || e >= uc[g]))
                if (d.Aa) {
                    var h = f;
                    f = zc(d.rc);
                    var l = Ac(d.Jb);
                    g = Ac(d.sc);
                    switch (d.dc & 3) {
                    case 0:
                        h = (h | h << 8) >>> (d.Pa & 7) & 255;
                        k = zc(h);
                        h = Ac(d.Jb);
                        k = Bc(d, (k | g & h) & (~g | h), d.h);
                        k = f & k | ~f & d.h;
                        break;
                    case 1:
                        k = d.h;
                        break;
                    case 2:
                        k = Ac(h);
                        k = Bc(d, k, d.h);
                        k = f & k | ~f & d.h;
                        break;
                    case 3:
                        h = (h | h << 8) >>> (d.Pa & 7) & 255,
                        f &= zc(h),
                        k = f & l | ~f & d.h
                    }
                    f = 15;
                    switch (d.Sb & 12) {
                    case 0:
                        f = 5 << (e & 1);
                        e &= -2;
                        break;
                    case 8:
                    case 12:
                        f = 1 << (e & 3),
                        e &= -4
                    }
                    f &= d.Qb;
                    f & 1 && (d.Pe[e] = k >> 0 & 255);
                    f & 2 && (d.Qe[e] = k >> 8 & 255);
                    f & 4 && (d.Re[e] = k >> 16 & 255);
                    f & 8 && (d.Se[e] = k >> 24 & 255);
                    f = Cc(d, e);
                    k = f + 7;
                    f < d.Cd && (d.Cd = f);
                    k > d.Bd && (d.Bd = k);
                    f < d.Ha && (d.Ha = f);
                    k > d.Da && (d.Da = k)
                } else
                    d.Qb & 3 && (k = e,
                    g = (k >> 1) - d.xa,
                    e = g / d.H | 0,
                    g %= d.H,
                    k & 1 ? (l = f,
                    h = d.Ub[k & -2]) : (h = f,
                    l = d.Ub[k | 1]),
                    d.v.send("screen-put-char", [e, g, h, d.$a[l >> 4 & 15], d.$a[l & 15]]),
                    d.Ub[k] = f)
        }
    });
    ab(c, 3758096384, this.na, function(e) {
        return d.ha[e & 268435455]
    }, function(e, f) {
        e &= 268435455;
        d.ha[e] = f;
        d.Ha = e < d.Ha ? e : d.Ha;
        d.Da = e > d.Da ? e : d.Da
    }, function(e) {
        e &= 268435455;
        return e & 3 ? d.ha[e] | d.ha[e + 1] << 8 | d.ha[e + 2] << 16 | d.ha[e + 3] << 24 : d.Bg[e >> 2]
    }, function(e, f) {
        e &= 268435455;
        d.Ha = e < d.Ha ? e : d.Ha;
        d.Da = e + 3 > d.Da ? e + 3 : d.Da;
        d.ha[e] = f;
        d.ha[e + 1] = f >> 8;
        d.ha[e + 2] = f >> 16;
        d.ha[e + 3] = f >> 24
    });
    Nb(a.u.Fa, this)
}
n = vc.prototype;
n.X = function() {
    var a = [];
    a[0] = this.na;
    a[1] = this.D;
    a[2] = this.pc;
    a[3] = this.nc;
    a[4] = this.H;
    a[5] = this.Ob;
    a[6] = this.ac.map(b=>[b.oe, b.pe, b.wd, b.xd, b.Td, b.Sd]);
    a[7] = this.ca;
    a[8] = this.xa;
    a[9] = this.Aa;
    a[10] = this.$a;
    a[11] = this.h;
    a[12] = this.N;
    a[13] = this.T;
    a[14] = this.Oa;
    a[15] = this.Ma;
    a[16] = this.B;
    a[17] = this.Ca;
    a[18] = this.Ia;
    a[19] = this.hc;
    a[20] = this.Qa;
    a[21] = this.qb;
    a[22] = this.F;
    a[23] = this.ba;
    a[24] = this.tb;
    a[25] = this.Xd;
    a[26] = this.Rb;
    a[27] = this.Qb;
    a[28] = this.Sb;
    a[29] = this.Kb;
    a[30] = this.vc;
    a[31] = this.dc;
    a[32] = this.Pa;
    a[33] = this.rc;
    a[34] = this.W;
    a[35] = this.ad;
    a[36] = this.j;
    a[37] = this.ub;
    a[38] = this.ka;
    a[39] = this.ha;
    a[40] = this.qc;
    a[41] = this.l;
    a[42] = this.J;
    a[43] = this.Jb;
    a[44] = this.sc;
    a[45] = this.zc;
    a[46] = this.cb;
    a[47] = this.Mb;
    a[48] = this.Lb;
    a[49] = this.i;
    a[50] = this.g;
    a[51] = this.M;
    a[52] = this.wc;
    a[53] = this.J;
    a[54] = this.Pb;
    a[55] = this.Ra;
    a[56] = this.yd;
    a[57] = this.Nb;
    a[58] = this.Qc;
    a[59] = this.bb;
    a[60] = this.o;
    return a
}
;
n.G = function(a) {
    this.na = a[0];
    this.D = a[1];
    this.pc = a[2];
    this.nc = a[3];
    this.H = a[4];
    this.Ob = a[5];
    this.ac = a[6].map(b=>({
        oe: b[0],
        pe: b[1],
        wd: b[2],
        xd: b[3],
        Td: b[4],
        Sd: b[5]
    }));
    this.ca = a[7];
    this.xa = a[8];
    this.Aa = a[9];
    this.$a = a[10];
    this.h = a[11];
    this.N = a[12];
    this.T = a[13];
    this.Oa = a[14];
    this.Ma = a[15];
    this.B = a[16];
    this.Ca = a[17];
    this.Ia = a[18];
    this.hc = a[19];
    this.Qa = a[20];
    this.qb = a[21];
    this.F = a[22];
    this.ba = a[23];
    this.tb = a[24];
    this.Xd = a[25];
    this.Rb = a[26];
    this.Qb = a[27];
    this.Sb = a[28];
    this.Kb = a[29];
    this.vc = a[30];
    this.dc = a[31];
    this.Pa = a[32];
    this.rc = a[33];
    this.W = a[34];
    this.ad = a[35];
    this.j = a[36];
    this.ub = a[37];
    this.ka = a[38];
    this.ha.set(a[39]);
    this.qc = a[40];
    this.l = a[41];
    this.J = a[42];
    this.Jb = a[43];
    this.sc = a[44];
    this.zc = a[45];
    this.cb.set(a[46]);
    this.Mb = a[47];
    this.Lb = a[48];
    this.i = a[49];
    this.g = a[50];
    this.M = a[51];
    this.wc = a[52];
    this.J = a[53];
    this.Pb = a[54];
    this.Ra = a[55];
    this.yd = a[56];
    this.Nb = a[57];
    this.Qc = a[58];
    this.bb = a[59];
    this.o = a[60];
    this.v.send("screen-set-mode", this.Aa);
    this.Aa ? (this.xc = this.Y = 0,
    this.Ia ? (this.ld(this.Ma, this.B, this.hc, this.Ma, this.B),
    Dc(this)) : (Ec(this),
    Fc(this))) : (this.md(this.H, this.Ob),
    this.rd(),
    this.qd());
    Gc(this)
}
;
function yc(a, b) {
    if (a.Ia && a.qc)
        return b = b - 655360 | a.Qa,
        a.ha[b];
    var c = a.Oa >> 2 & 3;
    b -= tc[c];
    if (0 > b || b >= uc[c])
        return 0;
    a.h = a.Pe[b];
    a.h |= a.Qe[b] << 8;
    a.h |= a.Re[b] << 16;
    a.h |= a.Se[b] << 24;
    if (a.dc & 8)
        return c = 255,
        a.T & 1 && (c &= a.Pe[b] ^ ~(a.N & 1 ? 255 : 0)),
        a.T & 2 && (c &= a.Qe[b] ^ ~(a.N & 2 ? 255 : 0)),
        a.T & 4 && (c &= a.Re[b] ^ ~(a.N & 4 ? 255 : 0)),
        a.T & 8 && (c &= a.Se[b] ^ ~(a.N & 8 ? 255 : 0)),
        c;
    c = a.vc;
    a.Aa ? a.Sb & 8 ? (c = b & 3,
    b &= -4) : a.dc & 16 && (c = b & 1,
    b &= -2) : c = 0;
    return a.Ub[c << 16 | b]
}
function zc(a) {
    return a | a << 8 | a << 16 | a << 24
}
function Ac(a) {
    return (a & 1 ? 255 : 0) | (a & 2 ? 255 : 0) << 8 | (a & 4 ? 255 : 0) << 16 | (a & 8 ? 255 : 0) << 24
}
function Bc(a, b, c) {
    switch (a.Pa & 24) {
    case 8:
        return b & c;
    case 16:
        return b | c;
    case 24:
        return b ^ c
    }
    return b
}
function Hc(a) {
    for (var b = a.xa << 1, c, d, e = 0; e < a.Ob; e++)
        for (var f = 0; f < a.H; f++)
            c = a.Ub[b],
            d = a.Ub[b | 1],
            a.v.send("screen-put-char", [e, f, c, a.$a[d >> 4 & 15], a.$a[d & 15]]),
            b += 2
}
n.qd = function() {
    var a = (this.D - this.xa) / this.H | 0
      , b = (this.D - this.xa) % this.H;
    a = Math.min(this.Ob - 1, a);
    this.v.send("screen-update-cursor", [a, b])
}
;
function Gc(a) {
    a.Aa ? (a.Ha = 0,
    a.Ia ? a.Da = a.na : a.Da = 524288) : Hc(a)
}
function Fc(a) {
    a.Aa && !a.Ia && (a.Cd = 0,
    a.Bd = 524288,
    Gc(a))
}
n.za = function() {}
;
function wc(a) {
    var b = 128 + (~a.M & a.Ca & 64);
    b -= a.M & 64;
    b -= a.Ra & 64;
    return b >>> 6
}
function Cc(a, b) {
    var c = wc(a);
    if (~a.Ca & 3) {
        var d = b - a.xa;
        d &= a.Ca << 13 | -24577;
        d <<= c;
        var e = d / a.Na | 0;
        d %= a.Na;
        switch (a.Ca & 3) {
        case 2:
            e = e << 1 | b >> 13 & 1;
            break;
        case 1:
            e = e << 1 | b >> 14 & 1;
            break;
        case 0:
            e = e << 2 | b >> 13 & 3
        }
        return e * a.Na + d + (a.xa << c)
    }
    return b << c
}
function Ic(a, b) {
    a.W & 128 && (b >>>= 1);
    b = Math.ceil(b / (1 + (a.W & 31)));
    a.Ca & 1 || (b <<= 1);
    a.Ca & 2 || (b <<= 1);
    return b
}
n.md = function(a, b) {
    this.H = a;
    this.Ob = b;
    this.v.send("screen-set-size-text", [a, b])
}
;
n.ld = function(a, b, c, d, e) {
    this.C.Wf && this.C.Bf === c && this.Y === a && this.xc === b && this.Na === d && this.he === e || (this.Y = a,
    this.xc = b,
    this.Na = d,
    this.he = e,
    this.C.Bf = c,
    this.C.Wf = !0,
    this.C.Zi = a,
    this.C.$i = b,
    this.v.send("screen-set-size-graphical", [a, b, d, e, c]))
}
;
function Ec(a) {
    if (!a.Ia) {
        var b = Math.min(1 + a.Mb, a.Lb)
          , c = Math.min(1 + a.i, a.g);
        if (b && c)
            if (a.Aa) {
                b <<= 3;
                var d = a.J << 4;
                a.Ra & 64 && (b >>>= 1,
                d >>>= 1);
                var e = a.J << 2;
                a.M & 64 ? e <<= 1 : a.Ca & 64 && (e >>>= 1);
                a.ld(b, Ic(a, c), 8, d, Math.ceil(uc[0] / e));
                xc(a);
                Dc(a)
            } else
                a.W & 128 && (c >>>= 1),
                c = c / (1 + (a.W & 31)) | 0,
                b && c && a.md(b, c)
    }
}
function Dc(a) {
    a.Aa || Hc(a);
    if (a.Ia)
        a.ac = [];
    else if (a.Na && a.Y)
        if (!a.Pb || a.bb & 32)
            a.ac = [],
            a.v.send("screen-clear");
        else {
            var b = a.zc
              , c = a.Nb;
            a.Ra & 64 && (c >>>= 1);
            var d = a.wc >> 5 & 3
              , e = Cc(a, b + d);
            b = e / a.Na | 0;
            var f = e % a.Na + c;
            e = Ic(a, 1 + a.o);
            e = Math.min(e, a.xc);
            var k = a.xc - e;
            a.ac = [];
            f = -f;
            for (var g = 0; f < a.Y; f += a.Na,
            g++)
                a.ac.push({
                    oe: f,
                    pe: 0,
                    wd: 0,
                    xd: b + g,
                    Td: a.Na,
                    Sd: e
                });
            b = 0;
            a.Ra & 32 || (b = Cc(a, d) + c);
            f = -b;
            for (g = 0; f < a.Y; f += a.Na,
            g++)
                a.ac.push({
                    oe: f,
                    pe: e,
                    wd: 0,
                    xd: g,
                    Td: a.Na,
                    Sd: k
                })
        }
}
function xc(a) {
    a.j |= 8;
    a.zc !== a.xa && (a.zc = a.xa,
    Dc(a))
}
n.rd = function() {
    this.v.send("screen-update-cursor-scanline", [this.pc, this.nc])
}
;
n.gi = function(a) {
    if (-1 === this.l)
        this.l = a & 31,
        this.Pb !== (a & 32) && (this.Pb = a & 32,
        Dc(this));
    else {
        if (16 > this.l)
            this.Xd[this.l] = a,
            this.Ra & 64 || Gc(this);
        else
            switch (this.l) {
            case 16:
                if (this.Ra !== a) {
                    var b = this.Ra;
                    this.Ra = a;
                    var c = 0 < (a & 1);
                    this.Ia || this.Aa === c || (this.Aa = c,
                    this.v.send("screen-set-mode", this.Aa));
                    (b ^ a) & 64 && Fc(this);
                    Ec(this);
                    Gc(this)
                }
                break;
            case 18:
                this.yd !== a && (this.yd = a,
                Gc(this));
                break;
            case 19:
                this.Nb !== a && (this.Nb = a & 15,
                Dc(this));
                break;
            case 20:
                this.Qc !== a && (this.Qc = a,
                Gc(this))
            }
        this.l = -1
    }
}
;
n.lg = function() {
    return this.l | this.Pb
}
;
n.fi = function() {
    return this.lg() & 255 | this.mg() << 8 & 65280
}
;
n.mg = function() {
    if (16 > this.l)
        return this.Xd[this.l] & 255;
    switch (this.l) {
    case 16:
        return this.Ra;
    case 18:
        return this.yd;
    case 19:
        return this.Nb;
    case 20:
        return this.Qc
    }
    return 255
}
;
n.hi = function(a) {
    this.ad = a
}
;
n.ji = function(a) {
    this.Rb = a
}
;
n.ii = function() {
    return this.Rb
}
;
n.li = function(a) {
    switch (this.Rb) {
    case 1:
        var b = this.bb;
        this.bb = a;
        (b ^ a) & 32 && Dc(this);
        break;
    case 2:
        this.Qb = a;
        break;
    case 4:
        this.Sb = a
    }
}
;
n.ki = function() {
    switch (this.Rb) {
    case 1:
        return this.bb;
    case 2:
        return this.Qb;
    case 4:
        return this.Sb;
    case 6:
        return 18
    }
    return 0
}
;
n.ni = function(a) {
    this.tb = 3 * a;
    this.ca &= 0
}
;
n.mi = function() {
    return this.ca
}
;
n.pi = function(a) {
    this.ba = 3 * a;
    this.ca |= 3
}
;
n.oi = function() {
    return this.ba / 3 & 255
}
;
n.si = function(a) {
    var b = this.ba / 3 | 0
      , c = this.ba % 3
      , d = this.$a[b];
    a = 255 * (a & 63) / 63 | 0;
    d = 0 === c ? d & -16711681 | a << 16 : 1 === c ? d & -65281 | a << 8 : d & -256 | a;
    this.$a[b] !== d && (this.$a[b] = d,
    Gc(this));
    this.ba++
}
;
n.ri = function() {
    var a = this.tb % 3
      , b = this.$a[this.tb / 3 | 0];
    this.tb++;
    return (b >> 8 * (2 - a) & 255) / 255 * 63 | 0
}
;
n.ti = function() {
    return this.ad
}
;
n.vi = function(a) {
    this.Kb = a
}
;
n.ui = function() {
    return this.Kb
}
;
n.xi = function(a) {
    switch (this.Kb) {
    case 0:
        this.Jb = a;
        break;
    case 1:
        this.sc = a;
        break;
    case 2:
        this.N = a;
        break;
    case 3:
        this.Pa = a;
        break;
    case 4:
        this.vc = a;
        break;
    case 5:
        var b = this.dc;
        this.dc = a;
        (b ^ a) & 96 && Fc(this);
        break;
    case 6:
        this.Oa !== a && (this.Oa = a,
        Ec(this));
        break;
    case 7:
        this.T = a;
        break;
    case 8:
        this.rc = a
    }
}
;
n.wi = function() {
    switch (this.Kb) {
    case 0:
        return this.Jb;
    case 1:
        return this.sc;
    case 2:
        return this.N;
    case 3:
        return this.Pa;
    case 4:
        return this.vc;
    case 5:
        return this.dc;
    case 6:
        return this.Oa;
    case 7:
        return this.T;
    case 8:
        return this.rc
    }
    return 0
}
;
n.zi = function(a) {
    this.F = a
}
;
n.yi = function() {
    return this.F
}
;
n.Ai = function(a) {
    switch (this.F) {
    case 1:
        this.Mb !== a && (this.Mb = a,
        Ec(this));
        break;
    case 2:
        this.Lb !== a && (this.Lb = a,
        Ec(this));
        break;
    case 7:
        var b = this.i;
        this.i &= 255;
        this.i = this.i | a << 3 & 512 | a << 7 & 256;
        b != this.i && Ec(this);
        this.o = this.o & 767 | a << 4 & 256;
        b = this.g;
        this.g = this.g & 767 | a << 5 & 256;
        b !== this.g && Ec(this);
        Dc(this);
        break;
    case 8:
        this.wc = a;
        Dc(this);
        break;
    case 9:
        this.W = a;
        this.o = this.o & 511 | a << 3 & 512;
        b = this.g;
        this.g = this.g & 511 | a << 4 & 512;
        b !== this.g && Ec(this);
        Dc(this);
        break;
    case 10:
        this.pc = a;
        this.rd();
        break;
    case 11:
        this.nc = a;
        this.rd();
        break;
    case 12:
        (this.xa >> 8 & 255) !== a && (this.xa = this.xa & 255 | a << 8,
        Dc(this),
        ~this.Ca & 3 && Fc(this));
        break;
    case 13:
        (this.xa & 255) !== a && (this.xa = this.xa & 65280 | a,
        Dc(this),
        ~this.Ca & 3 && Fc(this));
        break;
    case 14:
        this.D = this.D & 255 | a << 8;
        this.qd();
        break;
    case 15:
        this.D = this.D & 65280 | a;
        this.qd();
        break;
    case 18:
        (this.i & 255) !== a && (this.i = this.i & 768 | a,
        Ec(this));
        break;
    case 19:
        this.J !== a && (this.J = a,
        Ec(this),
        ~this.Ca & 3 && Fc(this));
        break;
    case 20:
        this.M !== a && (b = this.M,
        this.M = a,
        Ec(this),
        (b ^ a) & 64 && Fc(this));
        break;
    case 21:
        (this.g & 255) !== a && (this.g = this.g & 768 | a,
        Ec(this));
        break;
    case 23:
        this.Ca !== a && (b = this.Ca,
        this.Ca = a,
        Ec(this),
        (b ^ a) & 67 && Fc(this));
        break;
    case 24:
        this.o = this.o & 768 | a;
        Dc(this);
        break;
    default:
        this.F < this.cb.length && (this.cb[this.F] = a)
    }
}
;
n.ng = function() {
    switch (this.F) {
    case 1:
        return this.Mb;
    case 2:
        return this.Lb;
    case 7:
        return this.i >> 7 & 2 | this.g >> 5 & 8 | this.o >> 4 & 16 | this.i >> 3 & 64;
    case 8:
        return this.wc;
    case 9:
        return this.W;
    case 10:
        return this.pc;
    case 11:
        return this.nc;
    case 12:
        return this.xa & 255;
    case 13:
        return this.xa >> 8;
    case 14:
        return this.D >> 8;
    case 15:
        return this.D & 255;
    case 18:
        return this.i & 255;
    case 19:
        return this.J;
    case 20:
        return this.M;
    case 21:
        return this.g & 255;
    case 23:
        return this.Ca;
    case 24:
        return this.o & 255
    }
    return this.F < this.cb.length ? this.cb[this.F] : 0
}
;
n.og = function() {
    var a = this.j;
    this.Aa ? (this.j ^= 1,
    this.j &= 1) : (this.j & 1 && (this.j ^= 8),
    this.j ^= 1);
    this.l = -1;
    return a
}
;
n.xh = function(a) {
    this.ub = a
}
;
n.zh = function(a) {
    switch (this.ub) {
    case 1:
        this.Ma = a;
        2560 < this.Ma && (this.Ma = 2560);
        break;
    case 2:
        this.B = a;
        1600 < this.B && (this.B = 1600);
        break;
    case 3:
        this.hc = a;
        break;
    case 4:
        this.Ia = 1 === (a & 1);
        this.ka = a;
        break;
    case 5:
        this.Qa = a << 16;
        break;
    case 9:
        this.qb = this.Ma * (15 === this.hc ? 16 : this.hc) / 8 * a,
        Gc(this)
    }
    !this.Ia || this.Ma && this.B || (this.Ia = !1);
    this.Ia && 4 === this.ub && (this.ld(this.Ma, this.B, this.hc, this.Ma, this.B),
    this.v.send("screen-set-mode", !0),
    this.qc = this.Aa = !0);
    this.Ia || (this.Qa = 0);
    Dc(this)
}
;
n.yh = function() {
    return Jc(this, this.ub)
}
;
function Jc(a, b) {
    switch (b) {
    case 0:
        return 45248;
    case 1:
        return a.ka & 2 ? 2560 : a.Ma;
    case 2:
        return a.ka & 2 ? 1600 : a.B;
    case 3:
        return a.ka & 2 ? 32 : a.hc;
    case 4:
        return a.ka;
    case 5:
        return a.Qa >>> 16;
    case 6:
        return a.Y ? a.Y : 1;
    case 8:
        return 0;
    case 10:
        return a.na / 65536 | 0
    }
    return 255
}
;function Kc(a, b) {
    this.s = a;
    this.v = b;
    this.sd = this.oc = !1;
    this.ee = !0;
    this.$c = this.Gb = this.Fb = 0;
    this.T = !0;
    this.H = this.F = this.C = this.D = this.J = this.B = this.$d = !1;
    this.ea = new yb(1024);
    this.i = 0;
    this.Ic = 100;
    this.Ld = 4;
    this.l = !1;
    this.g = new yb(1024);
    this.o = this.j = !1;
    this.v.register("keyboard-code", function(c) {
        this.$d && (this.ea.push(c),
        this.Ba())
    }, this);
    this.v.register("mouse-click", function(c) {
        this.ee && this.sd && (this.$c = c[0] | c[2] << 1 | c[1] << 2,
        this.oc && Lc(this, 0, 0))
    }, this);
    this.v.register("mouse-delta", function(c) {
        var d = c[1];
        if (this.ee && this.sd) {
            var e = this.Ld * this.Ic / 80;
            this.Fb += c[0] * e;
            this.Gb += d * e;
            this.oc && (c = this.Fb | 0,
            d = this.Gb | 0,
            c || d) && (this.Fb -= c,
            this.Gb -= d,
            Lc(this, c, d))
        }
    }, this);
    this.v.register("mouse-wheel", function() {}, this);
    this.h = 5;
    this.M = this.N = !1;
    J(a.A, 96, this, this.Oi);
    J(a.A, 100, this, this.Qi);
    K(a.A, 96, this, this.Pi);
    K(a.A, 100, this, this.Ri)
}
n = Kc.prototype;
n.X = function() {
    var a = [];
    a[0] = this.oc;
    a[1] = this.sd;
    a[2] = this.ee;
    a[3] = this.Fb;
    a[4] = this.Gb;
    a[5] = this.$c;
    a[6] = this.T;
    a[7] = this.$d;
    a[8] = this.B;
    a[9] = this.J;
    a[10] = this.D;
    a[11] = this.C;
    a[12] = this.F;
    a[13] = this.H;
    a[15] = this.i;
    a[16] = this.Ic;
    a[17] = this.Ld;
    a[18] = this.l;
    a[20] = this.h;
    a[21] = this.N;
    a[22] = this.M;
    return a
}
;
n.G = function(a) {
    this.oc = a[0];
    this.sd = a[1];
    this.ee = a[2];
    this.Fb = a[3];
    this.Gb = a[4];
    this.$c = a[5];
    this.T = a[6];
    this.$d = a[7];
    this.B = a[8];
    this.J = a[9];
    this.D = a[10];
    this.C = a[11];
    this.F = a[12];
    this.H = a[13];
    this.i = a[15];
    this.Ic = a[16];
    this.Ld = a[17];
    this.l = a[18];
    this.h = a[20];
    this.N = a[21];
    this.M = a[22];
    this.o = this.j = !1;
    this.ea.clear();
    this.g.clear();
    this.v.send("mouse-enable", this.sd)
}
;
n.Ba = function() {
    this.j || (this.ea.length ? Mc(this) : this.g.length && Nc(this))
}
;
function Nc(a) {
    a.j = !0;
    a.o = !0;
    a.h & 2 && (O(a.s, 12),
    a.s.Ja(12))
}
function Mc(a) {
    a.j = !0;
    a.o = !1;
    a.h & 1 && (O(a.s, 1),
    a.s.Ja(1))
}
function Lc(a, b, c) {
    a.g.push((0 > c) << 5 | (0 > b) << 4 | 8 | a.$c);
    a.g.push(b);
    a.g.push(c);
    a.Ba()
}
n.Oi = function() {
    this.j = !1;
    if (!this.ea.length && !this.g.length)
        return this.i;
    this.o ? (O(this.s, 12),
    this.i = this.g.shift()) : (O(this.s, 1),
    this.i = this.ea.shift());
    (this.ea.length || this.g.length) && this.Ba();
    return this.i
}
;
n.Qi = function() {
    var a = 16;
    this.j && (a |= 1);
    this.o && (a |= 32);
    return a
}
;
n.Pi = function(a) {
    if (this.M)
        this.h = a,
        this.M = !1;
    else if (this.N)
        this.N = !1,
        this.g.clear(),
        this.g.push(a),
        Nc(this);
    else if (this.J)
        this.J = !1,
        this.g.clear(),
        this.g.push(250),
        this.Ic = a,
        this.Ic || (this.Ic = 100),
        Nc(this);
    else if (this.H)
        this.H = !1,
        this.g.clear(),
        this.g.push(250),
        this.Ld = 3 < a ? 4 : 1 << a,
        Nc(this);
    else if (this.D)
        this.D = !1,
        this.ea.push(250),
        Mc(this);
    else if (this.C)
        this.C = !1,
        this.ea.push(250),
        Mc(this),
        a || this.ea.push(2);
    else if (this.F)
        this.F = !1,
        this.ea.push(250),
        Mc(this);
    else if (this.B) {
        if (this.B = !1,
        this.ee) {
            this.ea.clear();
            this.g.clear();
            this.g.push(250);
            switch (a) {
            case 230:
                this.l = !1;
                break;
            case 231:
                this.l = !0;
                break;
            case 232:
                this.H = !0;
                break;
            case 233:
                Lc(this, 0, 0);
                break;
            case 235:
                Lc(this, 0, 0);
                break;
            case 242:
                this.g.push(0);
                this.g.push(0);
                this.$c = this.Fb = this.Gb = 0;
                break;
            case 243:
                this.J = !0;
                break;
            case 244:
                this.sd = this.oc = !0;
                this.v.send("mouse-enable", !0);
                this.$c = this.Fb = this.Gb = 0;
                break;
            case 245:
                this.oc = !1;
                break;
            case 246:
                this.oc = !1;
                this.Ic = 100;
                this.l = !1;
                this.Ld = 4;
                break;
            case 255:
                this.g.push(170),
                this.g.push(0),
                this.sd = !0,
                this.v.send("mouse-enable", !0),
                this.oc = !1,
                this.Ic = 100,
                this.l = !1,
                this.Ld = 4,
                this.$c = this.Fb = this.Gb = 0
            }
            Nc(this)
        }
    } else {
        this.g.clear();
        this.ea.clear();
        this.ea.push(250);
        switch (a) {
        case 237:
            this.D = !0;
            break;
        case 240:
            this.C = !0;
            break;
        case 242:
            this.ea.push(171);
            this.ea.push(83);
            break;
        case 243:
            this.F = !0;
            break;
        case 244:
            this.$d = !0;
            break;
        case 245:
            this.$d = !1;
            break;
        case 255:
            this.ea.clear(),
            this.ea.push(250),
            this.ea.push(170),
            this.ea.push(0)
        }
        Mc(this)
    }
}
;
n.Ri = function(a) {
    switch (a) {
    case 32:
        this.ea.clear();
        this.g.clear();
        this.ea.push(this.h);
        Mc(this);
        break;
    case 96:
        this.M = !0;
        break;
    case 211:
        this.N = !0;
        break;
    case 212:
        this.B = !0;
        break;
    case 167:
        this.h |= 32;
        break;
    case 168:
        this.h &= -33;
        break;
    case 169:
        this.ea.clear();
        this.g.clear();
        this.ea.push(0);
        Mc(this);
        break;
    case 170:
        this.ea.clear();
        this.g.clear();
        this.ea.push(85);
        Mc(this);
        break;
    case 171:
        this.ea.clear();
        this.g.clear();
        this.ea.push(0);
        Mc(this);
        break;
    case 173:
        this.h |= 16;
        break;
    case 174:
        this.h &= -17;
        break;
    case 254:
        ec(this.s)
    }
}
;
function Oc(a, b) {
    this.h = this.g = this.O = this.B = this.l = 0;
    this.i = -1;
    this.fa = b;
    this.D = void 0 === this.fa;
    this.ga = void 0;
    this.name = this.D ? "master" : "slave ";
    this.F = !1;
    this.H = this.state = 0;
    this.o = 1;
    this.C = this.J = 0;
    this.s = a;
    this.D ? (this.ga = new Oc(this.s,this),
    this.j = function() {
        if (0 <= this.i)
            hb(this.s);
        else {
            var c = this.g & this.l;
            if (c) {
                c &= -c;
                var d = this.J ? this.l : -1;
                this.O && (this.O & -this.O & d) <= c || (this.i = mb(c),
                hb(this.s))
            }
        }
    }
    ,
    this.Rd = function() {
        if (-1 !== this.i)
            if (0 === this.g)
                this.i = -1;
            else {
                var c = 1 << this.i;
                0 === (this.C & c) && (this.g &= ~c);
                this.o || (this.O |= c);
                2 === this.i ? this.ga.Rd() : this.s.F(this.B | this.i);
                this.i = -1;
                this.j()
            }
    }
    ) : (this.j = function() {
        if (0 <= this.i)
            hb(this.s);
        else {
            var c = this.g & this.l;
            if (c) {
                c &= -c;
                var d = this.J ? this.l : -1;
                this.O && (this.O & -this.O & d) <= c || (this.i = mb(c),
                this.fa.Pd(2))
            }
        }
    }
    ,
    this.Rd = function() {
        if (-1 !== this.i)
            if (0 === this.g)
                this.i = -1,
                this.fa.h &= -5,
                this.s.F(this.B | 7);
            else {
                var c = 1 << this.i;
                0 === (this.C & c) && (this.g &= ~c);
                this.o || (this.O |= c);
                this.fa.h &= -5;
                this.s.F(this.B | this.i);
                this.i = -1;
                this.j()
            }
    }
    );
    this.D ? (a = 32,
    b = 1232) : (a = 160,
    b = 1233);
    K(this.s.A, a, this, this.Bh);
    J(this.s.A, a, this, this.Ah);
    K(this.s.A, a | 1, this, this.Dh);
    J(this.s.A, a | 1, this, this.Ch);
    K(this.s.A, b, this, this.Ni);
    J(this.s.A, b, this, this.Mi);
    this.D ? (this.Pd = function(c) {
        8 <= c ? this.ga.Pd(c - 8) : (c = 1 << c,
        0 === (this.h & c) && (this.g |= c,
        this.h |= c,
        this.j()))
    }
    ,
    this.Ud = function(c) {
        8 <= c ? this.ga.Ud(c - 8) : (c = 1 << c,
        this.h & c && (this.h &= ~c,
        this.g &= ~c,
        this.j()))
    }
    ) : (this.Pd = function(c) {
        c = 1 << c;
        0 === (this.h & c) && (this.g |= c,
        this.h |= c,
        this.j())
    }
    ,
    this.Ud = function(c) {
        c = 1 << c;
        this.h & c && (this.h &= ~c,
        this.g &= ~c,
        this.j())
    }
    )
}
n = Oc.prototype;
n.X = function() {
    var a = [];
    a[0] = this.l;
    a[1] = this.B;
    a[2] = this.O;
    a[3] = this.g;
    a[4] = this.D;
    a[5] = this.ga;
    a[6] = this.F;
    a[7] = this.state;
    a[8] = this.H;
    a[9] = this.o;
    a[10] = this.C;
    return a
}
;
n.G = function(a) {
    this.l = a[0];
    this.B = a[1];
    this.O = a[2];
    this.g = a[3];
    this.D = a[4];
    this.ga && this.ga.G(a[5]);
    this.F = a[6];
    this.state = a[7];
    this.H = a[8];
    this.o = a[9];
    this.C = a[10]
}
;
n.Bh = function(a) {
    if (a & 16)
        this.h = this.l = this.g = this.O = 0,
        this.o = 1,
        this.i = -1,
        this.F = a & 1,
        this.state = 1;
    else if (a & 8)
        a & 2 && (this.H = a & 1),
        a & 64 && (this.J = 32 === (a & 32));
    else {
        var b = a >> 5;
        1 === b ? this.O &= this.O - 1 : 3 === b ? this.O &= ~(1 << (a & 7)) : 192 !== (a & 200) && (this.O &= this.O - 1);
        this.j()
    }
}
;
n.Ah = function() {
    return this.H ? this.O : this.g
}
;
n.Dh = function(a) {
    0 === this.state ? this.F ? (this.F = !1,
    this.o = a & 2) : (this.l = ~a,
    this.j()) : 1 === this.state ? (this.B = a,
    this.state++) : 2 === this.state && (this.state = 0)
}
;
n.Ch = function() {
    return ~this.l & 255
}
;
n.Mi = function() {
    return this.C
}
;
n.Ni = function(a) {
    this.C = a
}
;
function Pc(a) {
    this.s = a;
    this.Pc = 0;
    this.R = new Uint8Array(128);
    this.B = this.g = Date.now();
    this.o = this.j = 0;
    this.D = !1;
    this.C = .9765625;
    this.l = 38;
    this.h = 2;
    this.jf = this.i = 0;
    K(a.A, 112, this, function(b) {
        this.Pc = b & 127;
        this.jf = b >> 7
    });
    K(a.A, 113, this, this.Kg);
    J(a.A, 113, this, this.Jg)
}
n = Pc.prototype;
n.X = function() {
    var a = [];
    a[0] = this.Pc;
    a[1] = this.R;
    a[2] = this.g;
    a[3] = this.B;
    a[4] = this.j;
    a[5] = this.o;
    a[6] = this.D;
    a[7] = this.C;
    a[8] = this.l;
    a[9] = this.h;
    a[10] = this.i;
    a[11] = this.jf;
    return a
}
;
n.G = function(a) {
    this.Pc = a[0];
    this.R = a[1];
    this.g = a[2];
    this.B = a[3];
    this.j = a[4];
    this.o = a[5];
    this.D = a[6];
    this.C = a[7];
    this.l = a[8];
    this.h = a[9];
    this.i = a[10];
    this.jf = a[11]
}
;
n.rb = function(a) {
    a = Date.now();
    this.g += a - this.B;
    this.B = a;
    this.D && this.j < a ? (this.s.Ja(8),
    this.i |= 192,
    this.j += this.C * Math.ceil((a - this.j) / this.C)) : this.o && this.o < a && (this.s.Ja(8),
    this.i |= 160,
    this.o = 0)
}
;
function Qc(a, b) {
    if (a.h & 4)
        a = b;
    else {
        a = b;
        for (var c = b = 0, d; a; )
            d = a % 10,
            c |= d << 4 * b,
            b++,
            a = (a - d) / 10;
        a = c
    }
    return a
}
function Rc(a, b) {
    var c;
    a.h & 4 ? c = b : c = (b & 15) + 10 * (b >> 4 & 15);
    return c
}
n.Jg = function() {
    switch (this.Pc) {
    case 0:
        return Qc(this, (new Date(this.g)).getUTCSeconds());
    case 2:
        return Qc(this, (new Date(this.g)).getUTCMinutes());
    case 4:
        return Qc(this, (new Date(this.g)).getUTCHours());
    case 7:
        return Qc(this, (new Date(this.g)).getUTCDate());
    case 8:
        return Qc(this, (new Date(this.g)).getUTCMonth() + 1);
    case 9:
        return Qc(this, (new Date(this.g)).getUTCFullYear() % 100);
    case 10:
        return this.l;
    case 11:
        return this.h;
    case 12:
        O(this.s, 8);
        var a = this.i;
        this.i &= -241;
        return a;
    case 13:
        return 255;
    case 50:
        return Qc(this, (new Date(this.g)).getUTCFullYear() / 100 | 0);
    default:
        return this.R[this.Pc]
    }
}
;
n.Kg = function(a) {
    switch (this.Pc) {
    case 10:
        this.l = a & 127;
        this.C = 1E3 / (32768 >> (this.l & 15) - 1);
        break;
    case 11:
        this.h = a;
        this.h & 64 && (this.j = Date.now());
        if (this.h & 32) {
            a = new Date;
            const b = Rc(this, this.R[1])
              , c = Rc(this, this.R[3])
              , d = Rc(this, this.R[5]);
            this.o = +new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), d, c, b))
        }
        break;
    case 1:
    case 3:
    case 5:
        this.R[this.Pc] = a
    }
    this.D = 64 === (this.h & 64) && 0 < (this.l & 15)
}
;
function Sc(a, b, c) {
    this.v = c;
    this.s = a;
    this.Xa = 4;
    this.yc = this.jc = 0;
    this.Zc = 96;
    this.Tc = this.bf = 0;
    this.tc = 1;
    this.Z = this.Ue = this.gf = this.Ke = 0;
    this.input = new yb(4096);
    this.h = [];
    switch (b) {
    case 1016:
        this.g = 0;
        this.Z = 4;
        break;
    case 760:
        this.g = 1;
        this.Z = 3;
        break;
    case 1E3:
        this.g = 2;
        this.Z = 4;
        break;
    case 744:
        this.Z = this.g = 3;
        break;
    default:
        this.g = 0,
        this.Z = 4
    }
    this.v.register("serial" + this.g + "-input", function(d) {
        this.input.push(d);
        this.Zc |= 1;
        this.Xa |= 4096;
        Tc(this)
    }, this);
    a = a.A;
    K(a, b, this, function(d) {
        Uc(this, d)
    }, function(d) {
        Uc(this, d & 255);
        Uc(this, d >> 8)
    });
    K(a, b | 1, this, function(d) {
        this.yc & 128 ? this.jc = this.jc & 255 | d << 8 : (this.Tc = d & 15,
        Tc(this))
    });
    J(a, b, this, function() {
        if (this.yc & 128)
            return this.jc & 255;
        var d = this.input.shift();
        0 === this.input.length && (this.Zc &= -2,
        this.Xa &= -4097,
        Tc(this));
        return d
    });
    J(a, b | 1, this, function() {
        return this.yc & 128 ? this.jc >> 8 : this.Tc & 15
    });
    J(a, b | 2, this, function() {
        var d = this.tc & 15 | 192;
        2 == this.tc && (this.Xa &= -5,
        Tc(this));
        return d
    });
    K(a, b | 2, this, function(d) {
        this.bf = d
    });
    J(a, b | 3, this, function() {
        return this.yc
    });
    K(a, b | 3, this, function(d) {
        this.yc = d
    });
    J(a, b | 4, this, function() {
        return this.Ke
    });
    K(a, b | 4, this, function(d) {
        this.Ke = d
    });
    J(a, b | 5, this, function() {
        return this.Zc
    });
    K(a, b | 5, this, function() {});
    J(a, b | 6, this, function() {
        return this.gf
    });
    K(a, b | 6, this, function() {});
    J(a, b | 7, this, function() {
        return this.Ue
    });
    K(a, b | 7, this, function(d) {
        this.Ue = d
    })
}
Sc.prototype.X = function() {
    var a = [];
    a[0] = this.Xa;
    a[1] = this.jc;
    a[2] = this.yc;
    a[3] = this.Zc;
    a[4] = this.bf;
    a[5] = this.Tc;
    a[6] = this.tc;
    a[7] = this.Ke;
    a[8] = this.gf;
    a[9] = this.Ue;
    a[10] = this.Z;
    return a
}
;
Sc.prototype.G = function(a) {
    this.Xa = a[0];
    this.jc = a[1];
    this.yc = a[2];
    this.Zc = a[3];
    this.bf = a[4];
    this.Tc = a[5];
    this.tc = a[6];
    this.Ke = a[7];
    this.gf = a[8];
    this.Ue = a[9];
    this.Z = a[10]
}
;
function Tc(a) {
    a.Xa & 4096 && a.Tc & 1 ? (a.tc = 12,
    a.s.Ja(a.Z)) : a.Xa & 4 && a.Tc & 2 ? (a.tc = 2,
    a.s.Ja(a.Z)) : a.Xa & 1 && a.Tc & 8 ? (a.tc = 0,
    a.s.Ja(a.Z)) : (a.tc = 1,
    O(a.s, a.Z))
}
function Uc(a, b) {
    if (a.yc & 128)
        a.jc = a.jc & -256 | b;
    else if (a.Xa |= 4,
    Tc(a),
    255 !== b) {
        var c = String.fromCharCode(b);
        a.v.send("serial" + a.g + "-output-char", c);
        a.h.push(b);
        "\n" === c && (a.v.send("serial" + a.g + "-output-line", String.fromCharCode.apply("", a.h)),
        a.h = [])
    }
}
;function Vc(a) {
    this.s = a;
    var b = a.A;
    Nb(a.u.Fa, {
        Ga: 56,
        I: [134, 128, 19, 113, 7, 0, 128, 2, 8, 0, 128, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0],
        ib: [],
        name: "acpi"
    });
    this.g = this.h = 0;
    this.status = 1;
    this.ie = this.fd = 0;
    this.i = Wc(this, fb());
    this.Eb = new Uint8Array(4);
    J(b, 45056, this, void 0, function() {
        return this.fd
    });
    K(b, 45056, this, void 0, function(c) {
        this.fd &= ~c
    });
    J(b, 45058, this, void 0, function() {
        return this.ie
    });
    K(b, 45058, this, void 0, function(c) {
        this.ie = c
    });
    J(b, 45060, this, void 0, function() {
        return this.status
    });
    K(b, 45060, this, void 0, function(c) {
        this.status = c
    });
    J(b, 45064, this, void 0, void 0, function() {
        return Wc(this, fb()) & 16777215
    });
    J(b, 45024, this, function() {
        return this.Eb[0]
    });
    J(b, 45025, this, function() {
        return this.Eb[1]
    });
    J(b, 45026, this, function() {
        return this.Eb[2]
    });
    J(b, 45027, this, function() {
        return this.Eb[3]
    });
    K(b, 45024, this, function(c) {
        this.Eb[0] = c
    });
    K(b, 45025, this, function(c) {
        this.Eb[1] = c
    });
    K(b, 45026, this, function(c) {
        this.Eb[2] = c
    });
    K(b, 45027, this, function(c) {
        this.Eb[3] = c
    })
}
Vc.prototype.rb = function(a) {
    a = Wc(this, a);
    var b = 0 !== ((a ^ this.i) & 8388608);
    this.ie & 1 && b ? (this.fd |= 1,
    this.s.Ja(9)) : O(this.s, 9);
    this.i = a
}
;
function Wc(a, b) {
    b = Math.round(3579.545 * b);
    b === a.h ? 3579.545 > a.g && a.g++ : a.h + a.g <= b && (a.g = 0,
    a.h = b);
    return a.h + a.g
}
Vc.prototype.X = function() {
    var a = [];
    a[0] = this.status;
    a[1] = this.fd;
    a[2] = this.ie;
    a[3] = this.Eb;
    return a
}
;
Vc.prototype.G = function(a) {
    this.status = a[0];
    this.fd = a[1];
    this.ie = a[2];
    this.Eb = a[3]
}
;
function Xc(a) {
    this.s = a;
    this.ca = this.ka = 0;
    this.B = 1;
    this.g = this.l = 0;
    this.j = fb();
    this.M = this.T = this.N = this.W = this.h = 65536;
    this.H = this.F = this.C = 0;
    this.i = new Int32Array(8);
    this.O = new Int32Array(8);
    this.o = new Int32Array(8);
    this.ba = 254;
    this.D = -1;
    this.Y = this.error = this.J = 0;
    ab(a.A, 4276092928, 1048576, b=>{
        var c = b & 3;
        return this.le(b & -4) >> 8 * c & 255
    }
    , ()=>{}
    , b=>this.le(b), (b,c)=>this.Kc(b, c))
}
n = Xc.prototype;
n.le = function(a) {
    a = a - 4276092928 | 0;
    switch (a) {
    case 32:
        return this.ka;
    case 48:
        return 327700;
    case 128:
        return this.C;
    case 208:
        return this.J;
    case 224:
        return this.D;
    case 240:
        return this.ba;
    case 256:
    case 272:
    case 288:
    case 304:
    case 320:
    case 336:
    case 352:
    case 368:
        return this.O[a - 256 >> 4];
    case 384:
    case 400:
    case 416:
    case 432:
    case 448:
    case 464:
    case 480:
    case 496:
        return this.o[a - 384 >> 4];
    case 512:
    case 528:
    case 544:
    case 560:
    case 576:
    case 592:
    case 608:
    case 624:
        return this.i[a - 512 >> 4];
    case 640:
        return this.Y;
    case 768:
        return this.F;
    case 784:
        return this.H;
    case 800:
        return this.h;
    case 832:
        return this.W;
    case 848:
        return this.N;
    case 864:
        return this.T;
    case 880:
        return this.M;
    case 992:
        return this.ca;
    case 896:
        return this.l;
    case 912:
        return this.g;
    default:
        return 0
    }
}
;
n.Kc = function(a, b) {
    switch (a - 4276092928 | 0) {
    case 128:
        this.C = b & 255;
        Yc(this);
        break;
    case 176:
        b = Zc(this.O);
        if (-1 !== b) {
            $c(this.O, b);
            if (this.o[b >> 5] >> (b & 31) & 1) {
                a = this.s.u.uc;
                for (var c = 0; 24 > c; c++) {
                    var d = a.g[c];
                    (d & 255) === b && d & 16384 && (a.g[c] &= -16385,
                    ad(a, c))
                }
            }
            Yc(this)
        }
        break;
    case 208:
        this.J = b & 4278190080;
        break;
    case 224:
        this.D = b | 16777215;
        break;
    case 240:
        this.ba = b;
        break;
    case 640:
        this.Y = this.error;
        this.error = 0;
        break;
    case 768:
        a = b & 255;
        c = b >> 8 & 7;
        d = b >> 15 & 1;
        var e = b >> 18 & 3;
        this.F = b & -4097;
        0 === e ? bd(this, a, c, d) : 1 === e ? bd(this, a, 0, d) : 2 === e && bd(this, a, c, d);
        break;
    case 784:
        this.H = b;
        break;
    case 800:
        this.h = b;
        break;
    case 832:
        this.W = b;
        break;
    case 848:
        this.N = b;
        break;
    case 864:
        this.T = b;
        break;
    case 880:
        this.M = b;
        break;
    case 992:
        this.ca = b;
        b = b & 3 | (b & 8) >> 1;
        this.B = 7 === b ? 0 : b + 1;
        break;
    case 896:
        this.l = b >>> 0,
        this.g = b >>> 0,
        this.j = fb()
    }
}
;
n.rb = function(a) {
    0 !== this.g && (a = 1E6 * (a - this.j) / (1 << this.B) >>> 0,
    0 !== a && (this.j += a / 1E6 * (1 << this.B),
    this.g -= a,
    0 >= this.g && (a = this.h & 393216,
    131072 === a ? (this.g %= this.l,
    0 >= this.g && (this.g += this.l),
    0 === (this.h & 65536) && bd(this, this.h & 255, 0, !1)) : 0 === a && (this.g = 0,
    0 === (this.h & 65536) && bd(this, this.h & 255, 0, !1)))))
}
;
function bd(a, b, c, d) {
    5 === c || 4 === c || a.i[b >> 5] >> (b & 31) & 1 || (cd(a.i, b),
    d ? cd(a.o, b) : $c(a.o, b),
    Yc(a))
}
function Yc(a) {
    var b = Zc(a.i);
    -1 !== b && (Zc(a.O) >= b || (b & 240) <= (a.C & 240) || hb(a.s))
}
n.Rd = function() {
    var a = Zc(this.i);
    -1 === a || Zc(this.O) >= a || (a & 240) <= (this.C & 240) || ($c(this.i, a),
    cd(this.O, a),
    this.s.F(a),
    Yc(this))
}
;
n.X = function() {
    var a = [];
    a[0] = this.ka;
    a[1] = this.ca;
    a[2] = this.B;
    a[3] = this.l;
    a[4] = this.g;
    a[5] = this.j;
    a[6] = this.h;
    a[7] = this.W;
    a[8] = this.N;
    a[9] = this.T;
    a[10] = this.M;
    a[11] = this.C;
    a[12] = this.F;
    a[13] = this.H;
    a[14] = this.i;
    a[15] = this.O;
    a[16] = this.o;
    a[17] = this.ba;
    a[18] = this.D;
    a[19] = this.J;
    a[20] = this.error;
    a[21] = this.Y;
    return a
}
;
n.G = function(a) {
    this.ka = a[0];
    this.ca = a[1];
    this.B = a[2];
    this.l = a[3];
    this.g = a[4];
    this.j = a[5];
    this.h = a[6];
    this.W = a[7];
    this.N = a[8];
    this.T = a[9];
    this.M = a[10];
    this.C = a[11];
    this.F = a[12];
    this.H = a[13];
    this.i = a[14];
    this.O = a[15];
    this.o = a[16];
    this.ba = a[17];
    this.D = a[18];
    this.J = a[19];
    this.error = a[20];
    this.Y = a[21]
}
;
function cd(a, b) {
    a[b >> 5] |= 1 << (b & 31)
}
function $c(a, b) {
    a[b >> 5] &= ~(1 << (b & 31))
}
function Zc(a) {
    for (var b = 7; 0 <= b; b--) {
        var c = a[b];
        if (c)
            return nb(c >>> 0) | b << 5
    }
    return -1
}
;function dd(a) {
    this.s = a;
    this.g = new Int32Array(24);
    this.o = new Int32Array(24);
    for (var b = 0; b < this.g.length; b++)
        this.g[b] = 65536;
    this.i = this.h = this.l = this.j = 0;
    ab(a.A, 4273995776, 131072, c=>{
        c = c - 4273995776 | 0;
        return 16 <= c && 20 > c ? (c -= 16,
        this.read(this.j) >> 8 * c & 255) : 0
    }
    , ()=>{}
    , c=>{
        c = c - 4273995776 | 0;
        return 0 === c ? this.j : 16 === c ? this.read(this.j) : 0
    }
    , (c,d)=>{
        c = c - 4273995776 | 0;
        0 === c ? this.j = d : 16 === c && this.write(this.j, d)
    }
    )
}
function ad(a, b) {
    var c = 1 << b;
    if (0 !== (a.h & c)) {
        var d = a.g[b];
        if (0 === (d & 65536)) {
            var e = d >> 8 & 7;
            if (0 === (d & 32768))
                a.h &= ~c;
            else if (a.g[b] |= 16384,
            d & 16384)
                return;
            0 !== e && 1 !== e || bd(a.s.u.Lc, d & 255, e, 32768 === (d & 32768));
            a.g[b] &= -4097
        }
    }
}
n = dd.prototype;
n.Pd = function(a) {
    if (!(24 <= a)) {
        var b = 1 << a;
        0 === (this.i & b) && (this.i |= b,
        65536 !== (this.g[a] & 98304) && (this.h |= b,
        ad(this, a)))
    }
}
;
n.Ud = function(a) {
    if (!(24 <= a)) {
        var b = 1 << a;
        (this.i & b) === b && (this.i &= ~b,
        this.g[a] & 32768 && (this.h &= ~b))
    }
}
;
n.read = function(a) {
    if (0 === a)
        return this.l << 24;
    if (1 === a)
        return 1507345;
    if (2 === a)
        return this.l << 24;
    if (16 <= a && 64 > a) {
        var b = a - 16 >> 1;
        return a & 1 ? this.o[b] : this.g[b]
    }
    return 0
}
;
n.write = function(a, b) {
    if (0 === a)
        this.l = b >>> 24 & 15;
    else if (1 !== a && 2 !== a && 16 <= a && 64 > a) {
        var c = a - 16 >> 1;
        a & 1 ? this.o[c] = b & 4278190080 : (this.g[c] = b & 110591 | this.g[c] & -110592,
        ad(this, c))
    }
}
;
n.X = function() {
    var a = [];
    a[0] = this.g;
    a[1] = this.o;
    a[2] = this.j;
    a[3] = this.l;
    a[4] = this.h;
    a[5] = this.i;
    return a
}
;
n.G = function(a) {
    this.g = a[0];
    this.o = a[1];
    this.j = a[2];
    this.l = a[3];
    this.h = a[4];
    this.i = a[5]
}
;
function fd(a) {
    this.message = a
}
fd.prototype = Error();
const gd = {
    Uint8Array,
    Int8Array,
    Uint16Array,
    Int16Array,
    Uint32Array,
    Int32Array,
    Float32Array,
    Float64Array
};
function hd(a, b) {
    if ("object" !== typeof a || null === a)
        return a;
    if (a instanceof Array)
        return a.map(e=>hd(e, b));
    a.constructor === Object && console.log(a);
    if (a.BYTES_PER_ELEMENT) {
        var c = new Uint8Array(a.buffer,a.byteOffset,a.length * a.BYTES_PER_ELEMENT);
        return {
            __state_type__: a.constructor.name.replace("bound ", ""),
            buffer_id: b.push(c) - 1
        }
    }
    a = a.X();
    c = [];
    for (var d = 0; d < a.length; d++)
        c[d] = hd(a[d], b);
    return c
}
function id(a, b) {
    if ("object" !== typeof a || null === a)
        return a;
    if (a instanceof Array) {
        for (let c = 0; c < a.length; c++)
            a[c] = id(a[c], b);
        return a
    }
    return new gd[a.__state_type__](b[a.buffer_id])
}
cb.prototype.ne = function() {
    for (var a = [], b = hd(this, a), c = [], d = 0, e = 0; e < a.length; e++) {
        var f = a[e].byteLength;
        c[e] = {
            offset: d,
            length: f
        };
        d += f;
        d = d + 3 & -4
    }
    e = JSON.stringify({
        buffer_infos: c,
        state: b
    });
    e = (new TextEncoder).encode(e);
    b = 16 + e.length;
    b = b + 3 & -4;
    f = b + d;
    d = new ArrayBuffer(f);
    var k = new Int32Array(d,0,4);
    (new Uint8Array(d,16,e.length)).set(e);
    b = new Uint8Array(d,b);
    k[0] = -2039052682;
    k[1] = 6;
    k[2] = f;
    k[3] = e.length;
    for (e = 0; e < a.length; e++)
        b.set(a[e], c[e].offset);
    return d
}
;
cb.prototype.Md = function(a) {
    function b(r, t) {
        const p = r.length;
        if (16 > p)
            throw new fd("Invalid length: " + p);
        r = new Int32Array(r.buffer,r.byteOffset,4);
        if (-2039052682 !== r[0])
            throw new fd("Invalid header: " + ub(r[0] >>> 0));
        if (6 !== r[1])
            throw new fd("Version mismatch: dump=" + r[1] + " we=6");
        if (t && r[2] !== p)
            throw new fd("Length doesn't match header: real=" + p + " header=" + r[2]);
        return r[3]
    }
    function c(r) {
        r = (new TextDecoder).decode(r);
        return JSON.parse(r)
    }
    a = new Uint8Array(a);
    if (4247762216 === (new Uint32Array(a.buffer,0,1))[0]) {
        var d = this.vj(a.length);
        (new Uint8Array(this.ic.buffer,this.xj(d),a.length)).set(a);
        var e = this.ye(d, 16)
          , f = new Uint8Array(this.ic.buffer,e,16)
          , k = b(f, !1);
        this.ze(e, 16);
        e = this.ye(d, k);
        f = new Uint8Array(this.ic.buffer,e,k);
        f = c(f);
        this.ze(e, k);
        e = f.state;
        var g = f.buffer_infos;
        f = [];
        k = 16 + k;
        for (var h of g) {
            g = (k + 3 & -4) - k;
            if (1048576 < h.length) {
                var l = this.ye(d, g);
                this.ze(l, g);
                l = new Uint8Array(h.length);
                f.push(l.buffer);
                for (var m = 0; m < h.length; ) {
                    const r = Math.min(h.length - m, 1048576)
                      , t = this.ye(d, r);
                    l.set(new Uint8Array(this.ic.buffer,t,r), m);
                    this.ze(t, r);
                    m += r
                }
            } else
                l = this.ye(d, g + h.length),
                m = l + g,
                f.push(this.ic.buffer.slice(m, m + h.length)),
                this.ze(l, g + h.length);
            k += g + h.length
        }
        e = id(e, f);
        this.G(e);
        this.wj(d)
    } else {
        h = b(a, !0);
        if (0 > h || h + 12 >= a.length)
            throw new fd("Invalid info block length: " + h);
        e = c(a.subarray(16, 16 + h));
        d = e.state;
        e = e.buffer_infos;
        let r = 16 + h;
        r = r + 3 & -4;
        h = e.map(t=>{
            const p = r + t.offset;
            return a.buffer.slice(p, p + t.length)
        }
        );
        d = id(d, h);
        this.G(d)
    }
}
;
function jd(a, b, c) {
    this.s = a;
    this.Fa = a.u.Fa;
    this.ec = c;
    this.v = b;
    this.v.register("net0-receive", function(d) {
        if (!(this.Ua & 1) && (this.v.send("eth-receive-end", [d.length]),
        this.Nd & 16 || this.Nd & 4 && 255 === d[0] && 255 === d[1] && 255 === d[2] && 255 === d[3] && 255 === d[4] && 255 === d[5] || !(this.Nd & 8 && 1 === (d[0] & 1) || d[0] !== this.sa[0] || d[1] !== this.sa[1] || d[2] !== this.sa[2] || d[3] !== this.sa[3] || d[4] !== this.sa[4] || d[5] !== this.sa[5]))) {
            var e = this.vb << 8
              , f = Math.max(60, d.length) + 4
              , k = e + 4
              , g = this.vb + 1 + (f >> 8);
            if (!((this.kc > this.vb ? this.kc - this.vb : this.Ta - this.vb + this.kc - this.Hb) < 1 + (f >> 8) && 0 !== this.kc)) {
                if (e + f > this.Ta << 8) {
                    var h = (this.Ta << 8) - k;
                    this.memory.set(d.subarray(0, h), k);
                    this.memory.set(d.subarray(h), this.Hb << 8)
                } else
                    this.memory.set(d, k),
                    60 > d.length && this.memory.fill(0, k + d.length, k + 60);
                g >= this.Ta && (g += this.Hb - this.Ta);
                this.memory[e] = 1;
                this.memory[e + 1] = g;
                this.memory[e + 2] = f;
                this.memory[e + 3] = f >> 8;
                this.vb = g;
                kd(this, 1)
            }
        }
    }, this);
    this.port = 768;
    this.name = "ne2k";
    this.I = [236, 16, 41, 128, 3, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, this.port & 255 | 1, this.port >> 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, 0, 17, 0, 0, 184, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.Ga = 40;
    this.ib = [{
        size: 32
    }];
    this.Fe = this.O = 0;
    this.Ua = 1;
    this.Ve = this.pd = this.ob = this.Yd = 0;
    this.memory = new Uint8Array(32768);
    this.vf = this.Nd = 0;
    this.uf = 1;
    this.sa = new Uint8Array([0, 34, 21, 255 * Math.random() | 0, 255 * Math.random() | 0, 255 * Math.random() | 0]);
    for (b = 0; 6 > b; b++)
        this.memory[b << 1] = this.memory[b << 1 | 1] = this.sa[b];
    this.memory[28] = this.memory[29] = 87;
    this.memory[30] = this.memory[31] = 87;
    this.qa = 0;
    this.Hb = 64;
    this.Ta = 128;
    this.kc = this.vb = 76;
    b = a.A;
    J(b, this.port | 0, this, function() {
        return this.Ua
    });
    K(b, this.port | 0, this, function(d) {
        this.Ua = d;
        this.Ua & 1 || (d & 24 && 0 === this.ob && kd(this, 64),
        d & 4 && (d = this.Ve << 8,
        d = this.memory.subarray(d, d + this.pd),
        this.v.send("net0-send", d),
        this.v.send("eth-transmit-end", [d.length]),
        this.Ua &= -5,
        kd(this, 2)))
    });
    J(b, this.port | 13, this, function() {
        return 0
    });
    J(b, this.port | 14, this, function() {
        return 0
    });
    J(b, this.port | 15, this, function() {
        return 0
    });
    J(b, this.port | 31, this, function() {
        0 === P(this) && kd(this, 128);
        return 0
    });
    K(b, this.port | 31, this, function() {});
    J(b, this.port | 1, this, function() {
        var d = P(this);
        return 0 === d ? this.Hb : 1 === d ? this.sa[0] : 2 === d ? this.Hb : 0
    });
    K(b, this.port | 1, this, function(d) {
        var e = P(this);
        0 === e ? this.Hb = d : 1 === e && (this.sa[0] = d)
    });
    J(b, this.port | 2, this, function() {
        var d = P(this);
        return 0 === d ? this.Ta : 1 === d ? this.sa[1] : 2 === d ? this.Ta : 0
    });
    K(b, this.port | 2, this, function(d) {
        var e = P(this);
        0 === e ? (d > this.memory.length >> 8 && (d = this.memory.length >> 8),
        this.Ta = d) : 1 === e && (this.sa[1] = d)
    });
    J(b, this.port | 7, this, function() {
        var d = P(this);
        if (0 === d)
            return this.O;
        if (1 === d)
            return this.vb
    });
    K(b, this.port | 7, this, function(d) {
        var e = P(this);
        0 === e ? (this.O &= ~d,
        ld(this)) : 1 === e && (this.vb = d)
    });
    K(b, this.port | 13, this, function(d) {
        0 === P(this) && (this.vf = d)
    });
    K(b, this.port | 14, this, function(d) {
        0 === P(this) && (this.Yd = d)
    });
    J(b, this.port | 10, this, function() {
        return 0 === P(this) ? 80 : 0
    });
    K(b, this.port | 10, this, function(d) {
        0 === P(this) && (this.ob = this.ob & 65280 | d & 255)
    });
    J(b, this.port | 11, this, function() {
        return 0 === P(this) ? 67 : 0
    });
    K(b, this.port | 11, this, function(d) {
        0 === P(this) && (this.ob = this.ob & 255 | d << 8 & 65280)
    });
    J(b, this.port | 8, this, function() {
        if (0 === P(this))
            return this.qa & 255
    });
    K(b, this.port | 8, this, function(d) {
        0 === P(this) && (this.qa = this.qa & 65280 | d & 255)
    });
    J(b, this.port | 9, this, function() {
        if (0 === P(this))
            return this.qa >> 8 & 255
    });
    K(b, this.port | 9, this, function(d) {
        0 === P(this) && (this.qa = this.qa & 255 | d << 8 & 65280)
    });
    K(b, this.port | 15, this, function(d) {
        0 === P(this) && (this.Fe = d,
        ld(this))
    });
    J(b, this.port | 3, this, function() {
        var d = P(this);
        return 0 === d ? this.kc : 1 === d ? this.sa[2] : 0
    });
    K(b, this.port | 3, this, function(d) {
        var e = P(this);
        0 === e ? this.kc = d : 1 === e && (this.sa[2] = d)
    });
    J(b, this.port | 4, this, function() {
        var d = P(this);
        return 0 === d ? this.uf : 1 === d ? this.sa[3] : 0
    });
    K(b, this.port | 4, this, function(d) {
        var e = P(this);
        0 === e ? this.Ve = d : 1 === e && (this.sa[3] = d)
    });
    J(b, this.port | 5, this, function() {
        var d = P(this);
        return 0 === d ? 0 : 1 === d ? this.sa[4] : 0
    });
    K(b, this.port | 5, this, function(d) {
        var e = P(this);
        0 === e ? this.pd = this.pd & -256 | d : 1 === e && (this.sa[4] = d)
    });
    J(b, this.port | 6, this, function() {
        var d = P(this);
        return 0 === d ? 0 : 1 === d ? this.sa[5] : 0
    });
    K(b, this.port | 6, this, function(d) {
        var e = P(this);
        0 === e ? this.pd = this.pd & 255 | d << 8 : 1 === e && (this.sa[5] = d)
    });
    J(b, this.port | 12, this, function() {
        return 0 === P(this) ? 9 : 0
    });
    K(b, this.port | 12, this, function(d) {
        0 === P(this) && (this.Nd = d)
    });
    J(b, this.port | 16, this, this.Mg, this.Gf, this.Lg);
    K(b, this.port | 16, this, this.Hf, this.Hf, this.Ng);
    Nb(a.u.Fa, this)
}
n = jd.prototype;
n.X = function() {
    var a = [];
    a[0] = this.O;
    a[1] = this.Fe;
    a[2] = this.Ua;
    a[3] = this.Yd;
    a[4] = this.ob;
    a[5] = this.pd;
    a[6] = this.Ve;
    a[7] = this.qa;
    a[8] = this.Hb;
    a[9] = this.vb;
    a[10] = this.kc;
    a[11] = this.Ta;
    a[12] = this.Nd;
    a[13] = this.vf;
    a[14] = this.uf;
    a[15] = this.sa;
    a[16] = this.memory;
    return a
}
;
n.G = function(a) {
    this.O = a[0];
    this.Fe = a[1];
    this.Ua = a[2];
    this.Yd = a[3];
    this.ob = a[4];
    this.pd = a[5];
    this.Ve = a[6];
    this.qa = a[7];
    this.Hb = a[8];
    this.vb = a[9];
    this.kc = a[10];
    this.Ta = a[11];
    this.Nd = a[12];
    this.vf = a[13];
    this.uf = a[14];
    this.ec && (this.sa = a[15],
    this.memory = a[16])
}
;
function kd(a, b) {
    a.O |= b;
    ld(a)
}
function ld(a) {
    a.Fe & a.O ? a.Fa.Ba(a.Ga) : fc(a.Fa, a.Ga)
}
function md(a, b) {
    if (16 >= a.qa || 16384 <= a.qa && 32768 > a.qa)
        a.memory[a.qa] = b;
    a.qa++;
    a.ob--;
    a.qa >= a.Ta << 8 && (a.qa += a.Hb - a.Ta << 8);
    0 === a.ob && kd(a, 64)
}
n.Hf = function(a) {
    md(this, a);
    this.Yd & 1 && md(this, a >> 8)
}
;
n.Ng = function(a) {
    md(this, a);
    md(this, a >> 8);
    md(this, a >> 16);
    md(this, a >> 24)
}
;
function nd(a) {
    let b = 0;
    32768 > a.qa && (b = a.memory[a.qa]);
    a.qa++;
    a.ob--;
    a.qa >= a.Ta << 8 && (a.qa += a.Hb - a.Ta << 8);
    0 === a.ob && kd(a, 64);
    return b
}
n.Mg = function() {
    return this.Gf() & 255
}
;
n.Gf = function() {
    return this.Yd & 1 ? nd(this) | nd(this) << 8 : nd(this)
}
;
n.Lg = function() {
    return nd(this) | nd(this) << 8 | nd(this) << 16 | nd(this) << 24
}
;
function P(a) {
    return a.Ua >> 6 & 3
}
;var od = new Uint8Array(256)
  , pd = []
  , qd = []
  , rd = []
  , sd = new Uint8Array(256)
  , td = [];
function ud(a, b) {
    this.s = a;
    this.v = b;
    this.ya = new yb(64);
    this.aa = new yb(64);
    this.i = this.o = this.jb = this.H = 0;
    this.K = new Uint8Array(256);
    vd(this);
    this.Dd = !1;
    this.re = 0;
    this.lb = this.kb = this.Sc = this.Yb = !1;
    this.wb = [new zb, new zb];
    this.fb = a.u.fb;
    this.gb = this.Xb = this.j = this.zb = this.l = this.D = 0;
    this.Ab = 1;
    this.Rc = 5;
    this.yb = !1;
    this.g = new ArrayBuffer(65536);
    this.ba = new Int8Array(this.g);
    this.B = new Uint8Array(this.g);
    this.Y = new Int16Array(this.g);
    this.ca = new Uint16Array(this.g);
    this.Oa = new xb(this.g);
    this.Bb = this.C = !1;
    this.Za = 22050;
    b.send("dac-tell-sampling-rate", this.Za);
    this.h = 1;
    this.M = 170;
    this.J = 0;
    this.Mc = new Uint8Array(256);
    this.F = new yb(64);
    this.T = this.N = this.Qa = 0;
    this.bh = !1;
    this.Z = 5;
    this.Wc = new Uint8Array(16);
    a.A.kd(544, this, this.hg, this.jg, this.Eh, this.Gh);
    a.A.kd(904, this, this.hg, this.jg);
    a.A.kd(548, this, this.Ih, this.Kh);
    J(a.A, 550, this, this.Mh);
    J(a.A, 551, this, this.Oh);
    J(a.A, 552, this, this.Qh);
    J(a.A, 553, this, this.Sh);
    J(a.A, 554, this, this.Uh);
    J(a.A, 555, this, this.Wh);
    J(a.A, 556, this, this.Yh);
    J(a.A, 557, this, this.$h);
    a.A.kd(558, this, this.bi, this.di);
    a.A.Ib(544, this, this.ig, this.kg, this.Fh, this.Hh);
    a.A.Ib(904, this, this.ig, this.kg);
    a.A.Ib(548, this, this.Jh, this.Lh);
    K(a.A, 550, this, this.Nh);
    K(a.A, 551, this, this.Ph);
    a.A.Ib(552, this, this.Rh, this.Th);
    K(a.A, 554, this, this.Vh);
    K(a.A, 555, this, this.Xh);
    K(a.A, 556, this, this.Zh);
    K(a.A, 557, this, this.ai);
    K(a.A, 558, this, this.ci);
    K(a.A, 559, this, this.ei);
    a.A.kd(816, this, this.Ii, this.Ki);
    a.A.Ib(816, this, this.Ji, this.Li);
    this.fb.We.push({
        De: this.ka,
        tf: this
    });
    b.register("dac-request-data", function() {
        !this.zb || this.Bb ? wd(this) : xd(this)
    }, this);
    b.register("speaker-has-initialized", function() {
        vd(this)
    }, this);
    b.send("speaker-confirm-initialized");
    yd(this)
}
function yd(a) {
    a.ya.clear();
    a.aa.clear();
    a.jb = 0;
    a.o = 0;
    a.Dd = !1;
    a.re = 0;
    a.Yb = !1;
    a.Sc = !1;
    a.kb = !1;
    a.lb = !1;
    a.wb[0].clear();
    a.wb[1].clear();
    a.D = 0;
    a.l = 0;
    a.zb = 0;
    a.j = 0;
    a.Xb = 0;
    a.gb = 0;
    a.yb = !1;
    a.B.fill(0);
    a.C = !1;
    a.Bb = !1;
    a.M = 170;
    a.J = 0;
    a.Za = 22050;
    a.h = 1;
    zd(a, 1);
    a.Wc.fill(0);
    a.Mc.fill(0);
    a.Mc[5] = 1;
    a.Mc[9] = 248
}
n = ud.prototype;
n.X = function() {
    var a = [];
    a[2] = this.H;
    a[3] = this.jb;
    a[4] = this.o;
    a[5] = this.i;
    a[6] = this.K;
    a[7] = this.Dd;
    a[8] = this.re;
    a[9] = this.Yb;
    a[10] = this.Sc;
    a[11] = this.kb;
    a[12] = this.lb;
    a[15] = this.D;
    a[16] = this.l;
    a[17] = this.zb;
    a[18] = this.j;
    a[19] = this.Xb;
    a[20] = this.gb;
    a[21] = this.Ab;
    a[22] = this.Rc;
    a[23] = this.yb;
    a[24] = this.B;
    a[25] = this.C;
    a[26] = this.Bb;
    a[27] = this.Za;
    a[28] = this.h;
    a[29] = this.M;
    a[30] = this.J;
    a[31] = this.Mc;
    a[33] = this.cb;
    a[34] = this.Z;
    a[35] = this.Wc;
    return a
}
;
n.G = function(a) {
    this.H = a[2];
    this.jb = a[3];
    this.o = a[4];
    this.i = a[5];
    this.K = a[6];
    Ad(this);
    this.Dd = a[7];
    this.re = a[8];
    this.Yb = a[9];
    this.Sc = a[10];
    this.kb = a[11];
    this.lb = a[12];
    this.D = a[15];
    this.l = a[16];
    this.zb = a[17];
    this.j = a[18];
    this.Xb = a[19];
    this.gb = a[20];
    this.Ab = a[21];
    this.Rc = a[22];
    this.yb = a[23];
    this.B = a[24];
    this.C = a[25];
    this.Bb = a[26];
    this.Za = a[27];
    this.h = a[28];
    this.M = a[29];
    this.J = a[30];
    this.Mc = a[31];
    this.cb = a[33];
    this.Z = a[34];
    this.Wc = a[35];
    this.g = this.B.buffer;
    this.ba = new Int8Array(this.g);
    this.Y = new Int16Array(this.g);
    this.ca = new Uint16Array(this.g);
    this.Oa = new xb(this.g);
    this.Bb ? this.v.send("dac-disable") : this.v.send("dac-enable")
}
;
n.hg = function() {
    return 255
}
;
n.jg = function() {
    return 255
}
;
n.Eh = function() {
    return 255
}
;
n.Gh = function() {
    return 255
}
;
n.Ih = function() {
    return this.i
}
;
n.Kh = function() {
    var a = this.i
      , b = qd[a];
    return b ? b.call(this) : this.K[a]
}
;
n.Mh = function() {
    return 255
}
;
n.Oh = function() {
    return 255
}
;
n.Qh = function() {
    return 255
}
;
n.Sh = function() {
    return 255
}
;
n.Uh = function() {
    this.aa.length && (this.H = this.aa.shift());
    return this.H
}
;
n.Wh = function() {
    return 255
}
;
n.Yh = function() {
    return 127
}
;
n.$h = function() {
    return 255
}
;
n.bi = function() {
    this.Wc[1] && zd(this, 1);
    return (this.aa.length && !this.Yb) << 7 | 127
}
;
n.di = function() {
    zd(this, 2);
    return 0
}
;
n.ig = function() {
    this.N = 0
}
;
n.kg = function(a) {
    var b = td[this.N];
    b || (b = this.W);
    b.call(this, a, 0, this.N)
}
;
n.Fh = function() {
    this.T = 0
}
;
n.Hh = function(a) {
    var b = td[this.T];
    b || (b = this.W);
    b.call(this, a, 1, this.T)
}
;
n.Jh = function(a) {
    this.i = a
}
;
n.Lh = function(a) {
    Bd(this, this.i, a)
}
;
n.Nh = function(a) {
    this.Yb ? this.Yb = !1 : a && yd(this);
    this.aa.clear();
    this.aa.push(170)
}
;
n.Ph = function() {}
;
n.Rh = function() {}
;
n.Th = function() {}
;
n.Vh = function() {}
;
n.Xh = function() {}
;
n.Zh = function(a) {
    0 === this.jb ? (this.jb = a,
    this.ya.clear(),
    this.o = od[a]) : this.ya.push(a);
    this.ya.length >= this.o && (a = pd[this.jb],
    a || (a = this.Lf),
    a.call(this),
    this.o = this.jb = 0,
    this.ya.clear())
}
;
n.ai = function() {}
;
n.ci = function() {}
;
n.ei = function() {}
;
n.Ii = function() {
    this.F.length && (this.Qa = this.F.shift());
    return this.Qa
}
;
n.Ji = function() {}
;
n.Ki = function() {
    return 0 | 128 * !this.F.length
}
;
n.Li = function(a) {
    255 == a && (this.F.clear(),
    this.F.push(254))
}
;
n.Lf = function() {}
;
function R(a, b, c) {
    c || (c = ud.prototype.Lf);
    for (var d = 0; d < a.length; d++)
        od[a[d]] = b,
        pd[a[d]] = c
}
function Cd(a) {
    for (var b = [], c = 0; 16 > c; c++)
        b.push(a + c);
    return b
}
R([14], 2, function() {
    this.Mc[this.ya.shift()] = this.ya.shift()
});
R([15], 1, function() {
    this.aa.clear();
    this.aa.push(this.Mc[this.ya.shift()])
});
R([16], 1, function() {
    var a = this.ya.shift();
    a = Dd(a / 127.5 + -1);
    this.wb[0].push(a);
    this.wb[1].push(a);
    this.v.send("dac-enable")
});
R([20, 21], 2, function() {
    this.Xb = 1;
    this.gb = this.Ab;
    this.Yb = this.kb = this.lb = this.yb = !1;
    Ed(this);
    Fd(this)
});
R([22], 2);
R([23], 2);
R([28], 0, function() {
    this.Xb = 1;
    this.gb = this.Ab;
    this.yb = !0;
    this.Yb = this.kb = this.lb = !1;
    Fd(this)
});
R([31], 0);
R([32], 0, function() {
    this.aa.clear();
    this.aa.push(127)
});
R([36], 2);
R([44], 0);
R([48], 0);
R([49], 0);
R([52], 0);
R([53], 0);
R([54], 0);
R([55], 0);
R([56], 0);
R([64], 1, function() {
    Gd(this, 1E6 / (256 - this.ya.shift()) / (this.Sc ? 2 : 1))
});
R([65, 66], 2, function() {
    Gd(this, this.ya.shift() << 8 | this.ya.shift())
});
R([72], 2, function() {
    Ed(this)
});
R([116], 2);
R([117], 2);
R([118], 2);
R([119], 2);
R([125], 0);
R([127], 0);
R([128], 2);
R([144], 0, function() {
    this.Xb = 1;
    this.gb = this.Ab;
    this.yb = !0;
    this.lb = !1;
    this.Yb = !0;
    this.kb = !1;
    Fd(this)
});
R([145], 0);
R([152], 0);
R([153], 0);
R([160], 0);
R([168], 0);
R(Cd(176), 3, function() {
    if (!(this.jb & 8)) {
        var a = this.ya.shift();
        this.Xb = 2;
        this.gb = this.Rc;
        this.yb = !!(this.jb & 4);
        this.lb = !!(a & 16);
        this.Sc = !!(a & 32);
        this.kb = !0;
        Ed(this);
        Fd(this)
    }
});
R(Cd(192), 3, function() {
    if (!(this.jb & 8)) {
        var a = this.ya.shift();
        this.Xb = 1;
        this.gb = this.Ab;
        this.yb = !!(this.jb & 4);
        this.lb = !!(a & 16);
        this.Sc = !!(a & 32);
        this.kb = !1;
        Ed(this);
        Fd(this)
    }
});
R([208], 0, function() {
    this.Bb = !0;
    this.v.send("dac-disable")
});
R([209], 0, function() {
    this.Dd = !0
});
R([211], 0, function() {
    this.Dd = !1
});
R([212], 0, function() {
    this.Bb = !1;
    this.v.send("dac-enable")
});
R([213], 0, function() {
    this.Bb = !0;
    this.v.send("dac-disable")
});
R([214], 0, function() {
    this.Bb = !1;
    this.v.send("dac-enable")
});
R([216], 0, function() {
    this.aa.clear();
    this.aa.push(255 * this.Dd)
});
R([217, 218], 0, function() {
    this.yb = !1
});
R([224], 1, function() {
    this.aa.clear();
    this.aa.push(~this.ya.shift())
});
R([225], 0, function() {
    this.aa.clear();
    this.aa.push(4);
    this.aa.push(5)
});
R([226], 1);
R([227], 0, function() {
    this.aa.clear();
    for (var a = 0; 44 > a; a++)
        this.aa.push("COPYRIGHT (C) CREATIVE TECHNOLOGY LTD, 1992.".charCodeAt(a));
    this.aa.push(0)
});
R([228], 1, function() {
    this.re = this.ya.shift()
});
R([232], 0, function() {
    this.aa.clear();
    this.aa.push(this.re)
});
R([242, 243], 0, function() {
    this.Ba()
});
var Hd = new Uint8Array(256);
Hd[14] = 255;
Hd[15] = 7;
Hd[55] = 56;
R([249], 1, function() {
    var a = this.ya.shift();
    this.aa.clear();
    this.aa.push(Hd[a])
});
function Bd(a, b, c) {
    (b = rd[b]) && b.call(a, c)
}
ud.prototype.Pa = function() {
    return this.K[this.i]
}
;
ud.prototype.bb = function(a) {
    this.K[this.i] = a
}
;
function vd(a) {
    a.K[4] = 204;
    a.K[34] = 204;
    a.K[38] = 204;
    a.K[40] = 0;
    a.K[46] = 0;
    a.K[10] = 0;
    a.K[48] = 192;
    a.K[49] = 192;
    a.K[50] = 192;
    a.K[51] = 192;
    a.K[52] = 192;
    a.K[53] = 192;
    a.K[54] = 0;
    a.K[55] = 0;
    a.K[56] = 0;
    a.K[57] = 0;
    a.K[59] = 0;
    a.K[60] = 31;
    a.K[61] = 21;
    a.K[62] = 11;
    a.K[63] = 0;
    a.K[64] = 0;
    a.K[65] = 0;
    a.K[66] = 0;
    a.K[67] = 0;
    a.K[68] = 128;
    a.K[69] = 128;
    a.K[70] = 128;
    a.K[71] = 128;
    Ad(a)
}
function Ad(a) {
    for (var b = 1; b < a.K.length; b++)
        sd[b] || Bd(a, b, a.K[b])
}
function Id(a, b) {
    b || (b = ud.prototype.Pa);
    qd[a] = b
}
function Jd(a, b) {
    b || (b = ud.prototype.bb);
    rd[a] = b
}
function Kd(a, b, c) {
    sd[a] = 1;
    qd[a] = function() {
        return this.K[b] & 240 | this.K[c] >>> 4
    }
    ;
    rd[a] = function(d) {
        this.K[a] = d;
        var e = d << 4 & 240 | this.K[c] & 15;
        Bd(this, b, d & 240 | this.K[b] & 15);
        Bd(this, c, e)
    }
}
function Ld(a, b, c) {
    qd[a] = ud.prototype.Pa;
    rd[a] = function(d) {
        this.K[a] = d;
        this.v.send("mixer-volume", [b, c, (d >>> 2) - 62])
    }
}
Id(0, function() {
    vd(this);
    return 0
});
Jd(0);
Kd(4, 50, 51);
Kd(34, 48, 49);
Kd(38, 52, 53);
Kd(40, 54, 55);
Kd(46, 56, 57);
Ld(48, 0, 0);
Ld(49, 0, 1);
Ld(50, 2, 0);
Ld(51, 2, 1);
Id(59);
Jd(59, function(a) {
    this.K[59] = a;
    this.v.send("mixer-volume", [1, 2, 6 * (a >>> 6) - 18])
});
Id(65);
Jd(65, function(a) {
    this.K[65] = a;
    this.v.send("mixer-gain-left", 6 * (a >>> 6))
});
Id(66);
Jd(66, function(a) {
    this.K[66] = a;
    this.v.send("mixer-gain-right", 6 * (a >>> 6))
});
Id(68);
Jd(68, function(a) {
    this.K[68] = a;
    a >>>= 3;
    this.v.send("mixer-treble-left", a - (16 > a ? 14 : 16))
});
Id(69);
Jd(69, function(a) {
    this.K[69] = a;
    a >>>= 3;
    this.v.send("mixer-treble-right", a - (16 > a ? 14 : 16))
});
Id(70);
Jd(70, function(a) {
    this.K[70] = a;
    a >>>= 3;
    this.v.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Id(71);
Jd(71, function(a) {
    this.K[71] = a;
    a >>>= 3;
    this.v.send("mixer-bass-right", a - (16 > a ? 14 : 16))
});
Id(128, function() {
    switch (this.Z) {
    case 2:
        return 1;
    case 5:
        return 2;
    case 7:
        return 4;
    case 10:
        return 8;
    default:
        return 0
    }
});
Jd(128, function(a) {
    a & 1 && (this.Z = 2);
    a & 2 && (this.Z = 5);
    a & 4 && (this.Z = 7);
    a & 8 && (this.Z = 10)
});
Id(129, function() {
    var a = 0;
    switch (this.Ab) {
    case 0:
        a |= 1;
        break;
    case 1:
        a |= 2;
        break;
    case 3:
        a |= 8
    }
    switch (this.Rc) {
    case 5:
        a |= 32;
        break;
    case 6:
        a |= 64;
        break;
    case 7:
        a |= 128
    }
    return a
});
Jd(129, function(a) {
    a & 1 && (this.Ab = 0);
    a & 2 && (this.Ab = 1);
    a & 8 && (this.Ab = 3);
    a & 32 && (this.Rc = 5);
    a & 64 && (this.Rc = 6);
    a & 128 && (this.Rc = 7)
});
Id(130, function() {
    for (var a = 32, b = 0; 16 > b; b++)
        a |= b * this.Wc[b];
    return a
});
ud.prototype.W = function() {}
;
function Md(a, b) {
    b || (b = ud.prototype.W);
    for (var c = 0; c < a.length; c++)
        td[a[c]] = b
}
function Nd(a, b) {
    for (var c = []; a <= b; a++)
        c.push(a);
    return c
}
var S = new Uint8Array(32);
S[0] = 0;
S[1] = 1;
S[2] = 2;
S[3] = 3;
S[4] = 4;
S[5] = 5;
S[8] = 6;
S[9] = 7;
S[10] = 8;
S[11] = 9;
S[12] = 10;
S[13] = 11;
S[16] = 12;
S[17] = 13;
S[18] = 14;
S[19] = 15;
S[20] = 16;
S[21] = 17;
Md([1], function(a, b) {
    this.bh[b] = a & 1
});
Md([2]);
Md([3]);
Md([4], function() {});
Md([5], function() {});
Md([8], function() {});
Md(Nd(32, 53), function() {});
Md(Nd(64, 85), function() {});
Md(Nd(96, 117), function() {});
Md(Nd(128, 149), function() {});
Md(Nd(160, 168), function() {});
Md(Nd(176, 184), function() {});
Md([189], function() {});
Md(Nd(192, 200), function() {});
Md(Nd(224, 245), function() {});
function Gd(a, b) {
    a.Za = b;
    a.v.send("dac-tell-sampling-rate", b)
}
function Ed(a) {
    a.D = 1 + (a.ya.shift() << 0) + (a.ya.shift() << 8)
}
function Fd(a) {
    a.h = 1;
    a.kb && (a.h *= 2);
    a.l = a.D * a.h;
    a.j = 1024 * a.h;
    a.j = Math.min(Math.max(a.l >> 2 & -4, 32), a.j);
    a.C = !0;
    a.fb.Tb[a.gb] || a.ka(a.gb)
}
ud.prototype.ka = function(a) {
    a === this.gb && this.C && (this.C = !1,
    this.zb = this.l,
    this.Bb = !1,
    this.v.send("dac-enable"))
}
;
function xd(a) {
    var b = Math.min(a.zb, a.j)
      , c = Math.floor(b / a.h);
    a.fb.Zd(a.Oa, 0, b, a.gb, d=>{
        if (!d) {
            d = a.kb ? 32767.5 : 127.5;
            var e = a.lb ? 0 : -1, f = a.Sc ? 1 : 2, k;
            a.kb ? k = a.lb ? a.Y : a.ca : k = a.lb ? a.ba : a.B;
            for (var g = 0, h = 0; h < c; h++)
                for (var l = Dd(k[h] / d + e), m = 0; m < f; m++)
                    a.wb[g].push(l),
                    g ^= 1;
            wd(a);
            a.zb -= b;
            a.zb || (a.Ba(a.Xb),
            a.yb && (a.zb = a.l))
        }
    }
    )
}
function wd(a) {
    if (a.wb[0].length) {
        var b = Ab(a.wb[0], a.wb[0].length)
          , c = Ab(a.wb[1], a.wb[1].length);
        a.v.send("dac-send-data", [b, c], [b.buffer, c.buffer])
    }
}
ud.prototype.Ba = function(a) {
    this.Wc[a] = 1;
    this.s.Ja(this.Z)
}
;
function zd(a, b) {
    a.Wc[b] = 0;
    O(a.s, a.Z)
}
function Dd(a) {
    return -1 * (-1 > a) + 1 * (1 < a) + (-1 <= a && 1 >= a) * a
}
;function ca(a, b) {
    this.s = a;
    this.Fa = a.u.Fa;
    this.Be = b.Be;
    this.I = [244, 26, b.Be & 255, b.Be >> 8, 7, 5, 16, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 168, 0, 0, 0, 16, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 26, b.Ag & 255, b.Ag >> 8, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    this.I = this.I.concat(Array(256 - this.I.length).fill(0));
    this.Ga = b.Ga;
    this.ib = [];
    this.name = b.name;
    this.i = this.C = 0;
    this.l = new Uint32Array(4);
    this.h = new Uint32Array(4);
    for (var c of b.Ae.Nf)
        this.l[c >>> 5] |= 1 << (c & 31),
        this.h[c >>> 5] |= 1 << (c & 31);
    b.Ae.Nf.includes(32);
    this.B = !0;
    this.j = 0;
    this.F = !1;
    this.D = 0;
    this.Ya = [];
    for (const d of b.Ae.Ya)
        this.Ya.push(new Od(a,this,d));
    this.o = 0;
    this.g = this.Ya[0];
    this.$b = 0;
    c = [];
    c.push(Pd(this, b.Ae));
    c.push(Qd(b.notification));
    c.push(Rd(this, b.$b));
    b.If && (b = b.If,
    c.push.call(c, {
        type: 4,
        ud: 3,
        port: b.Uc,
        ve: !1,
        offset: 0,
        ae: new Uint8Array(0),
        od: b.od
    }));
    Sd(this, c);
    Nb(a.u.Fa, this);
    this.reset()
}
function Pd(a, b) {
    return {
        type: 1,
        ud: 0,
        port: b.Uc,
        ve: !1,
        offset: 0,
        ae: new Uint8Array(0),
        od: [{
            bytes: 4,
            name: "device_feature_select",
            read: ()=>a.C,
            write: c=>{
                a.C = c
            }
        }, {
            bytes: 4,
            name: "device_feature",
            read: ()=>a.l[a.C] || 0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "driver_feature_select",
            read: ()=>a.i,
            write: c=>{
                a.i = c
            }
        }, {
            bytes: 4,
            name: "driver_feature",
            read: ()=>a.h[a.i] || 0,
            write: c=>{
                const d = a.l[a.i];
                a.i < a.h.length && (a.h[a.i] = c & d);
                a.B = a.B && !(c & ~d)
            }
        }, {
            bytes: 2,
            name: "msix_config",
            read: ()=>65535,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "num_queues",
            read: ()=>a.Ya.length,
            write: ()=>{}
        }, {
            bytes: 1,
            name: "device_status",
            read: ()=>a.j,
            write: c=>{
                0 === c && a.reset();
                c & ~a.j & 4 && a.j & 64 && (a.F = !0,
                a.j & 4 && a.Ba(2));
                a.B || (c &= -9);
                a.j = c
            }
        }, {
            bytes: 1,
            name: "config_generation",
            read: ()=>a.D,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "queue_select",
            read: ()=>a.o,
            write: c=>{
                a.o = c;
                a.o < a.Ya.length || (a.g = null)
            }
        }, {
            bytes: 2,
            name: "queue_size",
            read: ()=>a.g ? a.g.size : 0,
            write: c=>{
                if (a.g) {
                    c & c - 1 && (c = 1 << nb(c - 1) + 1);
                    c > a.g.Jc && (c = a.g.Jc);
                    var d = a.g;
                    d.size = c;
                    d.o = c - 1
                }
            }
        }, {
            bytes: 2,
            name: "queue_msix_vector",
            read: ()=>65535,
            write: ()=>{}
        }, {
            bytes: 2,
            name: "queue_enable",
            read: ()=>a.g ? a.g.enabled | 0 : 0,
            write: c=>{
                a.g && 1 === c && (c = a.g,
                c.l && c.h && c.g && (a.g.enabled = !0))
            }
        }, {
            bytes: 2,
            name: "queue_notify_off",
            read: ()=>a.g ? a.g.ge : 0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_desc (low dword)",
            read: ()=>a.g ? a.g.l : 0,
            write: c=>{
                a.g && (a.g.l = c)
            }
        }, {
            bytes: 4,
            name: "queue_desc (high dword)",
            read: ()=>0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_avail (low dword)",
            read: ()=>a.g ? a.g.h : 0,
            write: c=>{
                a.g && (a.g.h = c)
            }
        }, {
            bytes: 4,
            name: "queue_avail (high dword)",
            read: ()=>0,
            write: ()=>{}
        }, {
            bytes: 4,
            name: "queue_used (low dword)",
            read: ()=>a.g ? a.g.g : 0,
            write: c=>{
                a.g && (a.g.g = c)
            }
        }, {
            bytes: 4,
            name: "queue_used (high dword)",
            read: ()=>0,
            write: ()=>{}
        }]
    }
}
function Qd(a) {
    const b = [];
    let c;
    c = a.ej ? 0 : 2;
    for (const [d,e] of a.hh.entries())
        b.push({
            bytes: 2,
            name: "notify" + d,
            read: ()=>65535,
            write: e || (()=>{}
            )
        });
    return {
        type: 2,
        ud: 1,
        port: a.Uc,
        ve: !1,
        offset: 0,
        ae: new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >> 24]),
        od: b
    }
}
function Rd(a, b) {
    return {
        type: 3,
        ud: 2,
        port: b.Uc,
        ve: !1,
        offset: 0,
        ae: new Uint8Array(0),
        od: [{
            bytes: 1,
            name: "isr_status",
            read: ()=>{
                const c = a.$b;
                a.$b = 0;
                fc(a.Fa, a.Ga);
                return c
            }
            ,
            write: ()=>{}
        }]
    }
}
function Sd(a, b) {
    let c = a.I[52] = 64;
    var d = c;
    for (const f of b) {
        b = 16 + f.ae.length;
        d = c;
        c = d + b;
        var e = f.od.reduce((k,g)=>k + g.bytes, 0);
        e += f.offset;
        e = 16 > e ? 16 : 1 << nb(e - 1) + 1;
        a.ib[f.ud] = {
            size: e
        };
        a.I[d] = 9;
        a.I[d + 1] = c;
        a.I[d + 2] = b;
        a.I[d + 3] = f.type;
        a.I[d + 4] = f.ud;
        a.I[d + 5] = 0;
        a.I[d + 6] = 0;
        a.I[d + 7] = 0;
        a.I[d + 8] = f.offset & 255;
        a.I[d + 9] = f.offset >>> 8 & 255;
        a.I[d + 10] = f.offset >>> 16 & 255;
        a.I[d + 11] = f.offset >>> 24;
        a.I[d + 12] = e & 255;
        a.I[d + 13] = e >>> 8 & 255;
        a.I[d + 14] = e >>> 16 & 255;
        a.I[d + 15] = e >>> 24;
        for (const [k,g] of f.ae.entries())
            a.I[d + 16 + k] = g;
        d = 16 + 4 * f.ud;
        a.I[d] = f.port & 254 | !f.ve;
        a.I[d + 1] = f.port >>> 8 & 255;
        a.I[d + 2] = f.port >>> 16 & 255;
        a.I[d + 3] = f.port >>> 24 & 255;
        d = f.port + f.offset;
        for (const k of f.od) {
            let g = k.read;
            b = k.write;
            if (!f.ve) {
                e = function(l) {
                    return g(l & -2) >> ((l & 1) << 3) & 255
                }
                ;
                const h = function(l) {
                    return g(l & -4) >> ((l & 3) << 3) & 255
                };
                switch (k.bytes) {
                case 4:
                    J(a.s.A, d, a, h, void 0, g);
                    K(a.s.A, d, a, void 0, void 0, b);
                    break;
                case 2:
                    J(a.s.A, d, a, e, g);
                    K(a.s.A, d, a, void 0, b);
                    break;
                case 1:
                    J(a.s.A, d, a, g),
                    K(a.s.A, d, a, b)
                }
            }
            d += k.bytes
        }
    }
    a.I[c] = 9;
    a.I[c + 1] = 0;
    a.I[c + 2] = 20;
    a.I[c + 3] = 5;
    a.I[c + 4] = 0;
    a.I[c + 5] = 0;
    a.I[c + 6] = 0;
    a.I[c + 7] = 0;
    a.I[c + 8] = 0;
    a.I[c + 9] = 0;
    a.I[c + 10] = 0;
    a.I[c + 11] = 0;
    a.I[c + 12] = 0;
    a.I[c + 13] = 0;
    a.I[c + 14] = 0;
    a.I[c + 15] = 0;
    a.I[c + 16] = 0;
    a.I[c + 17] = 0;
    a.I[c + 18] = 0;
    a.I[c + 19] = 0
}
ca.prototype.X = function() {
    let a = [];
    a[0] = this.C;
    a[1] = this.i;
    a[2] = this.l;
    a[3] = this.h;
    a[4] = this.B;
    a[5] = this.j;
    a[6] = this.F;
    a[7] = this.D;
    a[8] = this.$b;
    a[9] = this.o;
    return a = a.concat(this.Ya)
}
;
ca.prototype.G = function(a) {
    this.C = a[0];
    this.i = a[1];
    this.l = a[2];
    this.h = a[3];
    this.B = a[4];
    this.j = a[5];
    this.F = a[6];
    this.D = a[7];
    this.$b = a[8];
    this.o = a[9];
    let b = 0;
    for (let c of a.slice(10))
        this.Ya[b].G(c),
        b++;
    this.g = this.Ya[this.o] || null
}
;
ca.prototype.reset = function() {
    this.i = this.C = 0;
    this.h.set(this.l);
    this.B = !0;
    this.o = this.j = 0;
    this.g = this.Ya[0];
    for (const a of this.Ya)
        a.reset();
    this.F = !1;
    this.$b = this.D = 0;
    fc(this.Fa, this.Ga)
}
;
ca.prototype.Ba = function(a) {
    this.$b |= a;
    this.Fa.Ba(this.Ga)
}
;
function Od(a, b, c) {
    this.s = a;
    this.ab = b;
    this.Jc = this.size = c.Jc;
    this.o = this.size - 1;
    this.enabled = !1;
    this.ge = c.ge;
    this.i = this.g = this.j = this.h = this.l = 0;
    this.reset()
}
Od.prototype.X = function() {
    const a = [];
    a[0] = this.size;
    a[1] = this.Jc;
    a[2] = this.enabled;
    a[3] = this.ge;
    a[4] = this.l;
    a[5] = this.h;
    a[6] = this.j;
    a[7] = this.g;
    a[8] = this.i;
    return a
}
;
Od.prototype.G = function(a) {
    this.size = a[0];
    this.Jc = a[1];
    this.enabled = a[2];
    this.ge = a[3];
    this.l = a[4];
    this.h = a[5];
    this.j = a[6];
    this.g = a[7];
    this.i = a[8];
    this.o = this.size - 1
}
;
Od.prototype.reset = function() {
    this.enabled = !1;
    this.i = this.g = this.j = this.h = this.l = 0;
    var a = this.Jc;
    this.size = a;
    this.o = a - 1
}
;
function ea(a) {
    return (a.s.La(a.h + 2) & a.o) !== a.j
}
function fa(a, b) {
    this.s = a.s;
    this.ab = a.ab;
    this.ih = b;
    this.i = [];
    this.ef = this.g = this.h = 0;
    this.Af = [];
    this.ff = this.xe = this.zf = 0;
    let c = a.l;
    var d = b;
    b = 0;
    let e = a.size
      , f = !1;
    const k = 0 < (this.ab.h[0] & 268435456);
    do {
        var g = a
          , h = c;
        g = {
            Ye: g.s.i(h + 16 * d),
            Bj: g.s.i(h + 16 * d + 4),
            He: g.s.i(h + 16 * d + 8),
            flags: g.s.La(h + 16 * d + 12),
            next: g.s.La(h + 16 * d + 14)
        };
        if (k && g.flags & 4)
            c = g.Ye,
            b = d = 0,
            e = g.He / 16;
        else {
            if (g.flags & 2)
                f = !0,
                this.Af.push(g);
            else {
                if (f)
                    break;
                this.i.push(g);
                this.ef += g.He
            }
            b++;
            if (b > e)
                break;
            if (g.flags & 1)
                d = g.next;
            else
                break
        }
    } while (1)
}
function la(a, b) {
    let c = 0
      , d = b.length;
    for (; d && a.h !== a.i.length; ) {
        var e = a.i[a.h]
          , f = e.Ye + a.g;
        let l = e.He - a.g;
        l > d ? (l = d,
        a.g += d) : (a.h++,
        a.g = 0);
        e = b;
        var k = e.set
          , g = a.s
          , h = l;
        h && (g.Ge(f),
        g.Ge(f + h - 1));
        k.call(e, g.Ka.subarray(f, f + h), c);
        c += l;
        d -= l
    }
}
;function Td() {
    this.fe = {};
    this.g = void 0
}
Td.prototype.register = function(a, b, c) {
    var d = this.fe[a];
    void 0 === d && (d = this.fe[a] = []);
    d.push({
        De: b,
        tf: c
    })
}
;
Td.prototype.unregister = function(a, b) {
    var c = this.fe[a];
    void 0 !== c && (this.fe[a] = c.filter(function(d) {
        return d.De !== b
    }))
}
;
Td.prototype.send = function(a, b) {
    if (this.g && (a = this.g.fe[a],
    void 0 !== a))
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.De.call(d.tf, b)
        }
}
;
function Ud() {
    var a = new Td
      , b = new Td;
    a.g = b;
    b.g = a;
    return [a, b]
}
;function Vd() {}
;function cb(a, b) {
    this.va = b;
    Wd(this);
    b = Object.create(null);
    b.m = this.va.exports.memory;
    for (var c of Object.keys(this.va.exports))
        c.startsWith("_") || c.startsWith("ZSTD") || c.startsWith("zstd") || c.endsWith("_js") || (b[c] = this.va.exports[c]);
    this.sj = b;
    this.ic = c = this.va.exports.memory;
    this.L = L(Uint32Array, c, 812, 1);
    this.Ka = new Uint8Array(0);
    this.qc = new Int32Array(this.Ka.buffer);
    this.bb = L(Uint8Array, c, 724, 8);
    this.tb = L(Int32Array, c, 736, 8);
    this.cb = L(Uint32Array, c, 768, 8);
    this.Pa = L(Int32Array, c, 800, 1);
    this.Sb = L(Int32Array, c, 564, 1);
    this.Rb = L(Int32Array, c, 568, 1);
    this.Jb = L(Int32Array, c, 572, 1);
    this.Pb = L(Int32Array, c, 576, 1);
    this.ag = L(Int32Array, c, 1128, 1);
    this.rc = L(Uint32Array, c, 540, 8);
    this.Ua = L(Int32Array, c, 580, 8);
    this.Kb = L(Uint8Array, c, 612, 1);
    this.ka = L(Int32Array, c, 804, 1);
    this.ub = L(Int32Array, c, 808, 1);
    this.h = L(Uint8Array, c, 616, 1);
    this.pc = L(Int32Array, c, 620, 1);
    this.Mb = L(Int32Array, c, 624, 1);
    this.zc = L(Int32Array, c, 636, 1);
    this.he = L(Int32Array, c, 640, 1);
    this.ad = L(Int32Array, c, 644, 1);
    this.sc = L(Int32Array, c, 648, 1);
    this.flags = L(Int32Array, c, 120, 1);
    this.Nb = L(Int32Array, c, 116, 1);
    this.Ub = L(Int32Array, c, 96, 1);
    this.nc = L(Int32Array, c, 104, 1);
    L(Int32Array, c, 112, 1);
    this.aj = L(Uint32Array, c, 960, 2);
    this.u = {};
    this.D = L(Int32Array, c, 556, 1);
    this.vc = L(Int32Array, c, 560, 1);
    L(Uint8Array, c, 548, 1);
    this.H = L(Uint8Array, c, 552, 1);
    this.l = [];
    this.C = [];
    this.Oa = [];
    this.o = [];
    this.vd = {
        Zf: null,
        Qd: null
    };
    this.kh = L(Uint32Array, c, 664, 1);
    this.j = L(Int32Array, c, 64, 8);
    this.Ob = L(Int32Array, c, 1152, 32);
    this.ba = L(Uint8Array, c, 816, 1);
    this.ba[0] = 255;
    this.ca = L(Uint8Array, c, 1032, 1);
    this.ca[0] = 0;
    this.J = L(Uint16Array, c, 1036, 1);
    this.J[0] = 895;
    this.ij = L(Uint16Array, c, 1040, 1);
    this.ij[0] = 0;
    this.T = L(Int32Array, c, 1048, 1);
    this.T[0] = 0;
    this.W = L(Int32Array, c, 1052, 1);
    this.W[0] = 0;
    this.Y = L(Int32Array, c, 1044, 1);
    this.Y[0] = 0;
    this.M = L(Int32Array, c, 1056, 1);
    this.M[0] = 0;
    this.N = L(Int32Array, c, 1060, 1);
    this.N[0] = 0;
    this.wc = L(Int32Array, c, 832, 32);
    L(Int32Array, c, 824, 1);
    this.g = L(Uint16Array, c, 668, 8);
    this.Lb = L(Int32Array, c, 684, 8);
    this.Va = [];
    this.cf = 0;
    this.bd = [];
    this.A = void 0;
    this.v = a;
    this.xc(0, 0);
    Xd(this)
}
function Wd(a) {
    const b = c=>{
        const d = a.va.exports[c];
        console.assert(d, "Missing import: " + c);
        return d
    }
    ;
    a.Qa = b("reset_cpu");
    b("getiopl");
    b("get_eflags");
    a.B = b("get_eflags_no_arith");
    a.F = b("pic_call_irq");
    a.hj = b("do_many_cycles_native");
    b("cycle_internal");
    a.Kd = b("read8");
    a.La = b("read16");
    a.i = b("read32s");
    a.we = b("write16");
    a.Kc = b("write32");
    a.Ge = b("in_mapped_range");
    b("fpu_load_tag_word");
    b("fpu_load_status_word");
    b("fpu_get_sti_f64");
    b("translate_address_system_read_js");
    a.Qb = b("get_seg_cs");
    b("get_real_eip");
    b("clear_tlb");
    a.mj = b("full_clear_tlb");
    a.xc = b("set_tsc");
    a.tj = b("store_current_tsc");
    a.qj = b("jit_clear_cache_js");
    a.lh = b("jit_dirty_cache");
    a.Wi = b("codegen_finalize_finished");
    a.Vi = b("allocate_memory");
    a.Dg = b("zero_memory");
    a.vj = b("zstd_create_ctx");
    a.xj = b("zstd_get_src_ptr");
    a.wj = b("zstd_free_ctx");
    a.ye = b("zstd_read");
    a.ze = b("zstd_read_free")
}
cb.prototype.X = function() {
    var a = [];
    a[0] = this.L[0];
    a[1] = this.bb;
    a[2] = this.tb;
    a[3] = this.cb;
    a[4] = this.Pa[0];
    a[5] = this.Rb[0];
    a[6] = this.Sb[0];
    a[7] = this.Pb[0];
    a[8] = this.Jb[0];
    a[9] = this.rc[0];
    a[10] = this.Ua;
    a[11] = this.Kb[0];
    a[13] = this.ka[0];
    a[16] = this.ub[0];
    a[17] = this.h[0];
    a[18] = this.pc[0];
    a[19] = this.Mb[0];
    a[22] = this.zc[0];
    a[23] = this.ad[0];
    a[24] = this.he[0];
    a[25] = this.sc[0];
    a[26] = this.flags[0];
    a[27] = this.Nb[0];
    a[28] = this.Ub[0];
    a[30] = this.nc[0];
    a[37] = this.D[0];
    a[38] = this.vc[0];
    a[39] = this.j;
    a[40] = this.g;
    a[41] = this.Lb;
    this.tj();
    a[43] = this.aj;
    a[45] = this.u.yf;
    a[46] = this.u.Lc;
    a[47] = this.u.Hc;
    a[48] = this.u.Fa;
    a[49] = this.u.fb;
    a[50] = this.u.eb;
    a[51] = this.u.Vf;
    a[52] = this.u.Qd;
    a[53] = this.u.lf;
    a[54] = this.u.wf;
    a[55] = this.u.af;
    a[56] = this.u.ra;
    a[57] = this.u.U;
    a[58] = this.u.Ne;
    a[59] = this.u.hf;
    a[60] = this.u.cc;
    a[61] = this.u.qf;
    a[62] = this.Va;
    a[63] = this.u.uc;
    a[64] = this.ag[0];
    a[66] = this.wc;
    a[67] = this.Ob;
    a[68] = this.ba[0];
    a[69] = this.ca[0];
    a[70] = this.J[0];
    a[71] = this.T[0];
    a[72] = this.W[0];
    a[73] = this.M[0];
    a[74] = this.N[0];
    a[75] = this.Y[0];
    var b = this.Ka.length >> 12;
    var c = [];
    for (var d = 0; d < b; d++) {
        var e = d << 12;
        e = this.qc.subarray(e >> 2, e + 4096 >> 2);
        let g = !0;
        for (let h = 0; h < e.length; h++)
            if (0 !== e[h]) {
                g = !1;
                break
            }
        g || c.push(d)
    }
    b = new Bb(b);
    d = new Uint8Array(c.length << 12);
    for (let[g,h] of c.entries())
        b.set(h, 1),
        c = h << 12,
        d.set(this.Ka.subarray(c, c + 4096), g << 12);
    c = {
        Fg: b,
        uh: d
    };
    const {uh: f, Fg: k} = c;
    a[77] = f;
    a[78] = new Uint8Array(k.Db());
    a[79] = this.u.se;
    a[80] = this.u.te;
    a[81] = this.u.ue;
    return a
}
;
cb.prototype.G = function(a) {
    this.L[0] = a[0];
    this.Ka.length !== this.L[0] && console.warn("Note: Memory size mismatch. we=" + this.Ka.length + " state=" + this.L[0]);
    this.bb.set(a[1]);
    this.tb.set(a[2]);
    this.cb.set(a[3]);
    this.Pa[0] = a[4];
    this.Rb[0] = a[5];
    this.Sb[0] = a[6];
    this.Pb[0] = a[7];
    this.Jb[0] = a[8];
    this.rc[0] = a[9];
    this.Ua.set(a[10]);
    this.Kb[0] = a[11];
    this.ka[0] = a[13];
    this.ub[0] = a[16];
    this.h[0] = a[17];
    this.pc[0] = a[18];
    this.Mb[0] = a[19];
    this.zc[0] = a[22];
    this.ad[0] = a[23];
    this.he[0] = a[24];
    this.sc[0] = a[25];
    this.flags[0] = a[26];
    this.Nb[0] = a[27];
    this.Ub[0] = a[28];
    this.nc[0] = a[30];
    this.D[0] = a[37];
    this.vc[0] = a[38];
    this.j.set(a[39]);
    this.g.set(a[40]);
    this.Lb.set(a[41]);
    this.xc(a[43][0], a[43][1]);
    this.u.yf && this.u.yf.G(a[45]);
    this.u.Lc && this.u.Lc.G(a[46]);
    this.u.Hc && this.u.Hc.G(a[47]);
    this.u.Fa && this.u.Fa.G(a[48]);
    this.u.fb && this.u.fb.G(a[49]);
    this.u.eb && this.u.eb.G(a[50]);
    this.u.Vf && this.u.Vf.G(a[51]);
    this.u.Qd && this.u.Qd.G(a[52]);
    this.u.lf && this.u.lf.G(a[53]);
    this.u.wf && this.u.wf.G(a[54]);
    this.u.af && this.u.af.G(a[55]);
    this.u.ra && this.u.ra.G(a[56]);
    this.u.U && this.u.U.G(a[57]);
    this.u.Ne && this.u.Ne.G(a[58]);
    this.u.hf && this.u.hf.G(a[59]);
    this.u.cc && this.u.cc.G(a[60]);
    this.u.qf && this.u.qf.G(a[61]);
    this.u.se && this.u.se.G(a[79]);
    this.u.te && this.u.te.G(a[80]);
    this.u.ue && this.u.ue.G(a[81]);
    this.Va = a[62];
    this.u.uc && this.u.uc.G(a[63]);
    this.ag[0] = a[64];
    this.wc.set(a[66]);
    this.Ob.set(a[67]);
    this.ba[0] = a[68];
    this.ca[0] = a[69];
    this.J[0] = a[70];
    this.T[0] = a[71];
    this.W[0] = a[72];
    this.M[0] = a[73];
    this.N[0] = a[74];
    this.Y[0] = a[75];
    {
        var b = new Bb(a[78].buffer);
        a = a[77];
        this.Dg(this.L[0]);
        const c = this.L[0] >> 12;
        let d = 0;
        for (let e = 0; e < c; e++)
            if (b.get(e)) {
                let f = d << 12;
                this.Ka.set(a.subarray(f, f + 4096), e << 12);
                d++
            }
    }
    this.mj();
    this.qj()
}
;
function ec(a) {
    a.Qa();
    a.Va = [];
    a.u.ab && a.u.ab.reset();
    ib(a)
}
function Yd(a, b) {
    1048576 > b ? b = 1048576 : 0 > (b | 0) && (b = Math.pow(2, 31) - 131072);
    b = (b - 1 | 131071) + 1 | 0;
    console.assert(0 === a.L[0], "Expected uninitialised memory");
    a.L[0] = b;
    const c = a.Vi(b);
    a.Ka = L(Uint8Array, a.ic, c, b);
    a.qc = L(Uint32Array, a.ic, c, b >> 2)
}
cb.prototype.hb = function(a, b) {
    Yd(this, "number" === typeof a.L ? a.L : 67108864);
    this.H[0] = +a.eb;
    this.Qa();
    var c = new Za(this);
    this.A = c;
    this.vd.Zf = a.vd;
    this.vd.Qd = a.pj;
    ib(this);
    if (a.lc) {
        const {th: e} = Zd(this.Ka, a.lc, a.Fd, a.Vd || "");
        e && this.bd.push(e)
    }
    J(c, 179, this, function() {
        return 0
    });
    var d = 0;
    J(c, 146, this, function() {
        return d
    });
    K(c, 146, this, function(e) {
        d = e
    });
    J(c, 1297, this, function() {
        return this.cf < this.Va.length ? this.Va[this.cf++] : 0
    });
    K(c, 1296, this, void 0, function(e) {
        function f(h) {
            return new Uint8Array((new Int32Array([h])).buffer)
        }
        function k(h) {
            return h >> 8 | h << 8 & 65280
        }
        function g(h) {
            return h << 24 | h << 8 & 16711680 | h >> 8 & 65280 | h >>> 24
        }
        this.cf = 0;
        if (0 === e)
            this.Va = f(1431127377);
        else if (1 === e)
            this.Va = f(0);
        else if (3 === e)
            this.Va = f(this.L[0]);
        else if (5 === e)
            this.Va = f(1);
        else if (15 === e)
            this.Va = f(1);
        else if (13 === e)
            this.Va = new Uint8Array(16);
        else if (25 === e) {
            e = new Int32Array(4 + 64 * this.bd.length);
            const h = new Uint8Array(e.buffer);
            e[0] = g(this.bd.length);
            for (let l = 0; l < this.bd.length; l++) {
                const {name: m, data: r} = this.bd[l]
                  , t = 4 + 64 * l;
                e[t >> 2] = g(r.length);
                e[t + 4 >> 2] = k(49152 + l);
                for (let p = 0; p < m.length; p++)
                    h[t + 8 + p] = m.charCodeAt(p)
            }
            this.Va = h
        } else
            this.Va = 32768 <= e && 49152 > e ? f(0) : 49152 <= e && e - 49152 < this.bd.length ? this.bd[e - 49152].data : f(0)
    });
    this.u = {};
    a.mh && (this.u.cc = new Oc(this),
    this.u.Fa = new ac(this),
    this.H[0] && (this.u.uc = new dd(this),
    this.u.Lc = new Xc(this),
    this.u.eb = new Vc(this)),
    this.u.Hc = new Pc(this),
    $d(this, this.u.Hc, a),
    this.u.fb = new jc(this),
    this.u.Qd = new vc(this,b,a.na || 8388608),
    this.u.lf = new Kc(this,b),
    this.u.wf = new Sc(this,1016,b),
    a.se && (this.u.se = new Sc(this,760,b)),
    a.te && (this.u.te = new Sc(this,1E3,b)),
    a.ue && (this.u.ue = new Sc(this,1E3,b)),
    this.u.af = new gc(this,a.pa),
    c = 0,
    a.U && (this.u.U = new Cb(this,a.U,a.Ee,!1,c++,b)),
    a.ra && (this.u.ra = new Cb(this,a.ra,void 0,!0,c++,b)),
    this.u.Ne = new oc(this,b),
    a.Yg && (this.u.hf = new jd(this,b,a.ec)),
    a.Cb && (this.u.yf = new ba(a.Cb,this,b)),
    this.u.qf = new ud(this,b));
    a.Hd && ae(this, a.Hd)
}
;
function ae(a, b) {
    if (8192 > b.byteLength) {
        var c = new Int32Array(2048);
        (new Uint8Array(c.buffer)).set(new Uint8Array(b))
    } else
        c = new Int32Array(b,0,2048);
    for (var d = 0; 8192 > d; d += 4)
        if (464367618 === c[d >> 2]) {
            var e = c[d + 4 >> 2];
            if (!(464367618 + e + c[d + 8 >> 2] | 0)) {
                a.j[0] = 732803074;
                a.j[3] = 31744;
                a.Kc(31744, 0);
                a.Ua[0] = 1;
                a.Pa[0] = 1;
                a.flags[0] = 2;
                a.ka[0] = 1;
                a.ub[0] = 1;
                for (var f = 0; 6 > f; f++)
                    a.bb[f] = 0,
                    a.tb[f] = 0,
                    a.cb[f] = 4294967295,
                    a.g[f] = 45058;
                if (e & 65536) {
                    var k = c[d + 16 >> 2];
                    f = c[d + 20 >> 2];
                    e = c[d + 28 >> 2];
                    b = new Uint8Array(b,d - (c[d + 12 >> 2] - k),0 === f ? void 0 : f - k);
                    ka(a, b, k);
                    a.D[0] = a.Qb() + e | 0
                } else if (1179403647 === c[0]) {
                    c = be(b);
                    a.D[0] = a.Qb() + c.jh.Zg | 0;
                    for (k of c.Ui)
                        0 !== k.type && 1 === k.type && k.bg + k.qh < a.L[0] && k.Of && (c = new Uint8Array(b,k.offset,k.Of),
                        ka(a, c, k.bg))
                }
                a.A.Ib(244, a, function(g) {
                    console.log("Test exited with code " + ub(g, 2));
                    throw "HALT";
                }, function() {}, function() {}, function() {});
                for (let g = 14; 15 >= g; g++)
                    K(a.A, 8192 + g, a, function(h) {
                        h ? this.Ja(g) : O(this, g)
                    });
                break
            }
        }
}
function $d(a, b, c) {
    var d = c.Oc || 531;
    b.R[56] = 1 | d >> 4 & 240;
    b.R[61] = d & 255;
    b.R[21] = 128;
    b.R[22] = 2;
    d = 0;
    1048576 <= a.L[0] && (d = a.L[0] - 1048576 >> 10,
    d = Math.min(d, 65535));
    b.R[23] = d & 255;
    b.R[24] = d >> 8 & 255;
    b.R[48] = d & 255;
    b.R[49] = d >> 8 & 255;
    d = 0;
    16777216 <= a.L[0] && (d = a.L[0] - 16777216 >> 16,
    d = Math.min(d, 65535));
    b.R[52] = d & 255;
    b.R[53] = d >> 8 & 255;
    b.R[91] = 0;
    b.R[92] = 0;
    b.R[93] = 0;
    b.R[20] = 47;
    b.R[95] = 0;
    c.$g && (b.R[63] = 1)
}
function ib(a) {
    var b = a.vd.Zf
      , c = a.vd.Qd;
    if (b) {
        var d = new Uint8Array(b);
        ka(a, d, 1048576 - b.byteLength);
        if (c) {
            var e = new Uint8Array(c);
            ka(a, e, 786432);
            ab(a.A, 4272947200, 1048576, function(f) {
                f = f - 4272947200 | 0;
                return f < e.length ? e[f] : 0
            }, function() {})
        }
        ab(a.A, 4293918720, 1048576, function(f) {
            return this.Ka[f & 1048575]
        }
        .bind(a), function(f, k) {
            this.Ka[f & 1048575] = k
        }
        .bind(a))
    }
}
function ce(a, b, c, d, e, f) {
    const k = new Uint8Array(a.ic.buffer,e >>> 0,f >>> 0);
    WebAssembly.instantiate(k, {
        e: a.sj
    }).then(g=>{
        g = g.instance.exports.f;
        a.Wi(b, c, d);
        a.va.Xe.set(b + 1024, g);
        a.uj && a.uj(k)
    }
    )
}
function eb(a) {
    return a.B() & 512 ? (gb(a, fb()),
    hb(a),
    0) : 100
}
function gb(a, b) {
    a.u.Ne.rb(b, !1);
    a.u.Hc.rb(b, !1);
    a.H[0] && (a.u.eb.rb(b),
    a.u.Lc.rb(b))
}
function hb(a) {
    a.B() & 512 && de(a)
}
function de(a) {
    a.B();
    a.u.cc && a.u.cc.Rd();
    a.u.Lc && a.u.Lc.Rd()
}
cb.prototype.Ja = function(a) {
    this.u.cc && this.u.cc.Pd(a);
    this.u.uc && this.u.uc.Pd(a)
}
;
function O(a, b) {
    a.u.cc && a.u.cc.Ud(b);
    a.u.uc && a.u.uc.Ud(b)
}
"undefined" !== typeof window ? window.CPU = cb : "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports.CPU = cb : "function" === typeof importScripts && (self.CPU = cb);
function Xd(a) {
    var b = {};
    a.debug = b;
    b.jk = !1;
    b.bk = void 0;
    b.Ej = [];
    b.kk = !1;
    b.show = function(f) {
        if ("undefined" !== typeof document) {
            var k = document.getElementById("log");
            if (k) {
                k.textContent += f + "\n";
                k.style.display = "block";
                k.scrollTop = 1E9;
                return
            }
        }
        console.log(f)
    }
    ;
    b.hb = function() {}
    ;
    b.Vj = function() {
        for (var f = {
            eax: 0,
            ecx: 1,
            edx: 2,
            ebx: 3,
            esp: 4,
            ebp: 5,
            esi: 6,
            edi: 7
        }, k = "eax ecx edx ebx esp ebp esi edi".split(" "), g = "", h = "", l = 0; 4 > l; l++)
            g += k[l] + "=" + ub(a.j[f[k[l]]] >>> 0, 8) + " ",
            h += k[l + 4] + "=" + ub(a.j[f[k[l + 4]]] >>> 0, 8) + " ";
        g += "  ds=" + ub(a.g[3], 4) + " es=" + ub(a.g[0], 4) + " fs=" + ub(a.g[4], 4);
        h += "  gs=" + ub(a.g[5], 4) + " cs=" + ub(a.g[1], 4) + " ss=" + ub(a.g[2], 4);
        return [g, h]
    }
    ;
    b.Nj = function() {}
    ;
    b.Lj = function() {}
    ;
    b.Tj = function() {}
    ;
    b.X = function() {}
    ;
    b.Pj = function() {}
    ;
    b.Oj = function() {}
    ;
    b.Mj = function() {}
    ;
    b.Jj = function() {}
    ;
    b.Kj = function() {}
    ;
    b.Uj = function() {}
    ;
    b.$j = function() {}
    ;
    b.lk = function() {}
    ;
    b.step = function() {}
    ;
    b.gk = function() {}
    ;
    b.nh = function() {}
    ;
    b.Fj = function() {}
    ;
    let c, d;
    b.Ij = function(f, k, g) {
        if (!d) {
            if (void 0 === c && (c = "function" === typeof require ? require("./capstone-x86.min.js") : window.cs,
            void 0 === c))
                return;
            d = [new c.Capstone(c.ARCH_X86,c.MODE_16), new c.Capstone(c.ARCH_X86,c.MODE_32)]
        }
        try {
            d[f].disasm(k, g).forEach(function(h) {
                Vd(ub(h.Dj >>> 0) + ": " + tb(h.bytes.map(l=>ub(l, 2).slice(-2)).join(" "), 20) + " " + h.mnemonic + " " + h.op_str)
            })
        } catch (h) {
            Vd("Could not disassemble: " + Array.from(k).map(l=>ub(l, 2)).join(" "))
        }
    }
    ;
    let e;
    b.Qj = function(f) {
        if (void 0 === e && (e = "function" === typeof require ? require("./libwabt.js") : new window.WabtModule,
        void 0 === e))
            return;
        f = f.slice();
        try {
            var k = e.readWasm(f, {
                fk: !1
            });
            k.generateNames();
            k.applyNames();
            k.toText({
                Sj: !0,
                Xj: !0
            })
        } catch (l) {
            var g = new Blob([f])
              , h = document.createElement("a");
            h.download = "failed.wasm";
            h.href = window.URL.createObjectURL(g);
            h.dataset.downloadurl = ["application/octet-stream", h.download, h.href].join(":");
            h.click();
            window.URL.revokeObjectURL(h.src);
            console.log(l.toString())
        } finally {
            k && k.za()
        }
    }
}
;let ee = DataView.prototype
  , fe = {
    size: 1,
    get: ee.getUint8,
    set: ee.setUint8
}
  , ge = {
    size: 2,
    get: ee.getUint16,
    set: ee.setUint16
}
  , V = {
    size: 4,
    get: ee.getUint32,
    set: ee.setUint32
}
  , ie = he([{
    oh: V
}, {
    Ig: fe
}, {
    data: fe
}, {
    nj: fe
}, {
    ck: fe
}, {
    zj: fe
}, {
    dk: function(a) {
        return {
            size: a,
            get: ()=>-1
        }
    }(7)
}, {
    type: ge
}, {
    Zj: ge
}, {
    oj: V
}, {
    Zg: V
}, {
    wh: V
}, {
    bj: V
}, {
    flags: V
}, {
    Ug: ge
}, {
    fg: ge
}, {
    gg: ge
}, {
    yg: ge
}, {
    zg: ge
}, {
    ik: ge
}]);
console.assert(52 === ie.reduce((a,b)=>a + b.size, 0));
let je = he([{
    type: V
}, {
    offset: V
}, {
    mk: V
}, {
    bg: V
}, {
    Of: V
}, {
    qh: V
}, {
    flags: V
}, {
    align: V
}]);
console.assert(32 === je.reduce((a,b)=>a + b.size, 0));
let ke = he([{
    name: V
}, {
    type: V
}, {
    flags: V
}, {
    Aj: V
}, {
    offset: V
}, {
    size: V
}, {
    link: V
}, {
    info: V
}, {
    Cj: V
}, {
    Rj: V
}]);
console.assert(40 === ke.reduce((a,b)=>a + b.size, 0));
function he(a) {
    return a.map(function(b) {
        var c = Object.keys(b);
        console.assert(1 === c.length);
        c = c[0];
        b = b[c];
        console.assert(0 < b.size);
        return {
            name: c,
            type: b,
            size: b.size,
            get: b.get,
            set: b.set
        }
    })
}
function be(a) {
    var b = new DataView(a);
    let[c,d] = le(b, ie);
    console.assert(52 === d);
    console.assert(1179403647 === c.oh, "Bad magic");
    console.assert(1 === c.Ig, "Unimplemented: 64 bit elf");
    console.assert(1 === c.data, "Unimplemented: big endian");
    console.assert(1 === c.nj, "Bad version0");
    console.assert(2 === c.type, "Unimplemented type");
    console.assert(1 === c.oj, "Bad version1");
    console.assert(52 === c.Ug, "Bad header size");
    console.assert(32 === c.fg, "Bad program header size");
    console.assert(40 === c.yg, "Bad section header size");
    [a] = me(new DataView(b.buffer,b.byteOffset + c.wh,c.fg * c.gg), je, c.gg);
    [b] = me(new DataView(b.buffer,b.byteOffset + c.bj,c.yg * c.zg), ke, c.zg);
    return {
        jh: c,
        Ui: a,
        hk: b
    }
}
function le(a, b) {
    let c = {}
      , d = 0;
    for (let e of b)
        b = e.get.call(a, d, !0),
        console.assert(void 0 === c[e.name]),
        c[e.name] = b,
        d += e.size;
    return [c, d]
}
function me(a, b, c) {
    let d = []
      , e = 0;
    for (var f = 0; f < c; f++) {
        let[k,g] = le(new DataView(a.buffer,a.byteOffset + e,void 0), b);
        d.push(k);
        e += g
    }
    return [d, e]
}
;function Zd(a, b, c, d) {
    var e = new Uint8Array(b);
    const f = new Uint16Array(b);
    var k = new Uint32Array(b)
      , g = e[497] || 4;
    if (43605 === f[255] && 1400005704 === (f[257] | f[258] << 16)) {
        var h = e[529];
        e[528] = 255;
        e[529] = h & -97 | 128;
        f[274] = 56832;
        f[253] = 65535;
        d += "\x00";
        k[138] = 581632;
        for (e = 0; e < d.length; e++)
            a[581632 + e] = d.charCodeAt(e);
        g = 512 * (g + 1);
        d = new Uint8Array(b,0,g);
        b = new Uint8Array(b,g);
        e = g = 0;
        c && (g = 67108864,
        e = c.byteLength,
        a.set(new Uint8Array(c), g));
        k[134] = g;
        k[135] = e;
        a.set(d, 524288);
        a.set(b, 1048576);
        a = new Uint8Array(256);
        (new Uint16Array(a.buffer))[0] = 43605;
        a[2] = 1;
        c = 3;
        a[c++] = 250;
        a[c++] = 184;
        a[c++] = 32768;
        a[c++] = 128;
        a[c++] = 142;
        a[c++] = 192;
        a[c++] = 142;
        a[c++] = 216;
        a[c++] = 142;
        a[c++] = 224;
        a[c++] = 142;
        a[c++] = 232;
        a[c++] = 142;
        a[c++] = 208;
        a[c++] = 188;
        a[c++] = 57344;
        a[c++] = 224;
        a[c++] = 234;
        a[c++] = 0;
        a[c++] = 0;
        a[c++] = 32800;
        a[c++] = 128;
        k = a[c] = 0;
        for (b = 0; b < a.length; b++)
            k += a[b];
        a[c] = -k;
        return {
            th: {
                name: "genroms/kernel.bin",
                data: a
            }
        }
    }
}
;var xa = 16384
  , Da = 4;
function ne(a) {
    this.g = [];
    this.B = [];
    this.j = a;
    this.C = {
        df: 0
    };
    this.h = {};
    this.l = 274877906944;
    this.o = 0;
    this.i = [];
    wa(this, "", -1)
}
ne.prototype.X = function() {
    let a = [];
    a[0] = this.g;
    a[1] = this.C.df;
    a[2] = [];
    for (const [b,c] of Object.entries(this.h))
        0 === (this.g[b].mode & xa) && a[2].push([b, c]);
    a[3] = this.l;
    a[4] = this.o;
    return a = a.concat(this.i)
}
;
ne.prototype.G = function(a) {
    this.g = a[0].map(b=>{
        const c = new oe(0);
        c.G(b);
        return c
    }
    );
    this.C.df = a[1];
    this.h = {};
    for (let[b,c] of a[2])
        c.buffer.byteLength !== c.byteLength && (c = c.slice()),
        this.h[b] = c;
    this.l = a[3];
    this.o = a[4];
    this.i = a.slice(5)
}
;
function sa(a, b, c) {
    var d = a.g[b];
    0 == d.status || 2 == d.status ? c() : 5 === d.status ? sa(X(a, d), d.g, c) : a.B.push({
        id: b,
        yj: c
    })
}
function pe(a, b) {
    if (3 !== b.version)
        throw "The filesystem JSON format has changed. Please update your fs2json (https://github.com/copy/fs2json) and recreate the filesystem JSON.";
    var c = b.fsroot;
    a.o = b.size;
    for (b = 0; b < c.length; b++)
        qe(a, c[b], 0)
}
function qe(a, b, c) {
    var d = re(a);
    const e = b[0];
    d.size = b[1];
    d.bc = b[2];
    d.zd = d.bc;
    d.Nc = d.bc;
    d.mode = b[3];
    d.uid = b[4];
    d.Ea = b[5];
    var f = d.mode & 61440;
    if (f === xa)
        for (se(a, d, c, e),
        c = a.g.length - 1,
        b = b[6],
        d = 0; d < b.length; d++)
            qe(a, b[d], c);
    else
        32768 === f ? (d.status = 2,
        d.nd = b[6],
        se(a, d, c, e)) : 40960 === f && (d.qe = b[6],
        se(a, d, c, e))
}
function te(a, b, c, d) {
    const e = a.g[c]
      , f = a.g[b];
    Y(a, b);
    f.da.has(d);
    f.da.set(d, c);
    e.Sa++;
    Y(a, c) && (e.da.has(".."),
    e.da.has(".") || e.Sa++,
    e.da.set(".", c),
    e.da.set("..", b),
    f.Sa++)
}
function ue(a, b, c) {
    const d = Ja(a, b, c)
      , e = a.g[d]
      , f = a.g[b];
    Y(a, b);
    f.da.delete(c) && (e.Sa--,
    Y(a, d) && (e.da.get(".."),
    e.da.delete(".."),
    f.Sa--))
}
function se(a, b, c, d) {
    -1 != c ? (a.g.push(b),
    b.Zb = a.g.length - 1,
    te(a, c, b.Zb, d)) : 0 == a.g.length && (a.g.push(b),
    b.da.set(".", 0),
    b.da.set("..", 0),
    b.Sa = 2)
}
function oe(a) {
    this.da = new Map;
    this.Je = this.Ie = this.bc = this.Nc = this.zd = this.Zb = this.Ea = this.uid = this.size = this.status = 0;
    this.qe = "";
    this.mode = 493;
    this.wa = {
        type: 0,
        version: 0,
        path: a
    };
    this.Sa = 0;
    this.nd = "";
    this.h = [];
    this.g = this.i = -1
}
oe.prototype.X = function() {
    const a = [];
    a[0] = this.mode;
    a[1] = (this.mode & 61440) === xa ? [...this.da] : 32768 === (this.mode & 61440) ? this.nd : 40960 === (this.mode & 61440) ? this.qe : 49152 === (this.mode & 61440) ? [this.Je, this.Ie] : null;
    a[2] = this.h;
    a[3] = this.status;
    a[4] = this.size;
    a[5] = this.uid;
    a[6] = this.Ea;
    a[7] = this.Zb;
    a[8] = this.zd;
    a[9] = this.Nc;
    a[10] = this.bc;
    a[11] = this.wa.version;
    a[12] = this.wa.path;
    a[13] = this.Sa;
    return a
}
;
oe.prototype.G = function(a) {
    this.mode = a[0];
    if ((this.mode & 61440) === xa) {
        this.da = new Map;
        for (const [b,c] of a[1])
            this.da.set(b, c)
    } else
        32768 === (this.mode & 61440) ? this.nd = a[1] : 40960 === (this.mode & 61440) ? this.qe = a[1] : 49152 === (this.mode & 61440) && ([this.Je,this.Ie] = a[1]);
    this.h = [];
    for (const b of a[2]) {
        const c = new ve;
        c.G(b);
        this.h.push(c)
    }
    this.status = a[3];
    this.size = a[4];
    this.uid = a[5];
    this.Ea = a[6];
    this.Zb = a[7];
    this.zd = a[8];
    this.Nc = a[9];
    this.bc = a[10];
    this.wa.type = (this.mode & 61440) >> 8;
    this.wa.version = a[11];
    this.wa.path = a[12];
    this.Sa = a[13]
}
;
function we(a, b) {
    Object.assign(b, a, {
        Zb: b.Zb,
        da: b.da,
        Sa: b.Sa
    })
}
function re(a) {
    const b = Math.round(Date.now() / 1E3);
    a = new oe(++a.C.df);
    a.Nc = a.zd = a.bc = b;
    return a
}
function wa(a, b, c) {
    var d = a.g[c];
    if (0 <= c && 5 === d.status)
        return c = d.g,
        b = wa(X(a, d), b, c),
        xe(a, d.i, b);
    d = re(a);
    d.mode = 511 | xa;
    0 <= c && (d.uid = a.g[c].uid,
    d.Ea = a.g[c].Ea,
    d.mode = a.g[c].mode & 511 | xa);
    d.wa.type = xa >> 8;
    se(a, d, c, b);
    return a.g.length - 1
}
function ya(a, b, c) {
    var d = a.g[c];
    if (5 === d.status)
        return c = d.g,
        b = ya(X(a, d), b, c),
        xe(a, d.i, b);
    d = re(a);
    d.uid = a.g[c].uid;
    d.Ea = a.g[c].Ea;
    d.wa.type = 128;
    d.mode = a.g[c].mode & 438 | 32768;
    se(a, d, c, b);
    return a.g.length - 1
}
function va(a, b, c, d, e) {
    var f = a.g[c];
    if (5 === f.status)
        return c = f.g,
        b = va(X(a, f), b, c, d, e),
        xe(a, f.i, b);
    f = re(a);
    f.Ie = d;
    f.Je = e;
    f.uid = a.g[c].uid;
    f.Ea = a.g[c].Ea;
    f.wa.type = 192;
    f.mode = a.g[c].mode & 438;
    se(a, f, c, b);
    return a.g.length - 1
}
function ua(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status)
        return c = e.g,
        b = ua(X(a, e), b, c, d),
        xe(a, e.i, b);
    e = re(a);
    e.uid = a.g[c].uid;
    e.Ea = a.g[c].Ea;
    e.wa.type = 160;
    e.qe = d;
    e.mode = 40960;
    se(a, e, c, b);
    return a.g.length - 1
}
async function ye(a, b, c, d) {
    var e = a.g[c];
    if (5 === e.status)
        return c = e.g,
        d = await ye(X(a, e), b, c, d),
        xe(a, e.i, d);
    e = ya(a, b, c);
    b = a.g[e];
    c = new Uint8Array(d.length);
    c.set(d);
    await ze(a, e, c);
    b.size = d.length;
    return e
}
function ra(a, b, c) {
    var d = a.g[b];
    if (5 === d.status)
        return ra(X(a, d), d.g, c);
    (d.mode & 61440) == xa && Ae(a, b);
    return !0
}
async function Ma(a, b) {
    var c = a.g[b];
    if (5 === c.status)
        return await Ma(X(a, c), c.g);
    2 === c.status && a.j.g(c.nd);
    c.status == Da && (c.status = -1,
    await Be(a, b))
}
async function Ia(a, b, c, d, e) {
    if (b == d && c == e)
        return 0;
    var f = Ja(a, b, c);
    if (-1 === f)
        return -2;
    var k = b;
    Y(a, k);
    for (var g = ""; 0 != k; )
        g = "/" + Ce(a, k) + g,
        k = De(a, k);
    if (-1 != Ja(a, d, e) && (k = Ka(a, d, e),
    0 > k))
        return k;
    g = a.g[f];
    var h = a.g[b];
    k = a.g[d];
    if (5 === h.status || 5 === k.status)
        if (5 === h.status && h.i === k.i) {
            if (a = await Ia(X(a, h), h.g, c, k.g, e),
            0 > a)
                return a
        } else {
            if (0 === G(a, f).Zb || !Y(a, f) && 1 < G(a, f).Sa)
                return -1;
            {
                h = Ja(a, b, c);
                var l = a.g[h]
                  , m = new oe(-1);
                Y(a, h);
                Object.assign(m, l);
                const r = a.g.length;
                a.g.push(m);
                m.Zb = r;
                5 === l.status && a.i[l.i].g.set(l.g, r);
                if (5 !== l.status || 0 === l.g)
                    ue(a, b, c),
                    te(a, b, r, c);
                if (Y(a, h) && 5 !== l.status)
                    for (const [t,p] of m.da)
                        "." !== t && ".." !== t && Y(a, p) && a.g[p].da.set("..", r);
                a.h[r] = a.h[h];
                delete a.h[h];
                l.da = new Map;
                l.Sa = 0;
                h = r
            }
            l = G(a, f);
            m = await Ga(a, h, 0, l.size);
            5 === k.status ? (d = X(a, k),
            e = Y(a, h) ? wa(d, e, k.g) : ya(d, e, k.g),
            d = G(d, e),
            we(l, d),
            Ee(a, f, k.i, e)) : (g.status = -1,
            a.i[g.i].g.delete(g.g),
            we(l, g),
            te(a, d, f, e));
            await Ea(a, f, l.size);
            m && m.length && await Ha(a, f, 0, m.length, m);
            if (Y(a, f))
                for (const r of Fe(a, h))
                    if (e = await Ia(a, h, r, f, r),
                    0 > e)
                        return e;
            await Be(a, h);
            a = Ka(a, b, c);
            if (0 > a)
                return a
        }
    else
        ue(a, b, c),
        te(a, d, f, e),
        g.wa.version++;
    return 0
}
async function Ha(a, b, c, d, e) {
    var f = a.g[b];
    if (5 === f.status)
        b = f.g,
        await Ha(X(a, f), b, c, d, e);
    else {
        var k = await a.Db(b);
        !k || k.length < c + d ? (await Ea(a, b, Math.floor(3 * (c + d) / 2)),
        f.size = c + d,
        k = await a.Db(b)) : f.size < c + d && (f.size = c + d);
        e && k.set(e.subarray(0, d), c);
        await ze(a, b, k)
    }
}
async function Ga(a, b, c, d) {
    const e = a.g[b];
    return 5 === e.status ? (b = e.g,
    await Ga(X(a, e), b, c, d)) : await Ge(a, b, c, d)
}
function Ja(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        const d = b.g;
        c = Ja(X(a, b), d, c);
        return -1 === c ? -1 : He(a, b.i, c)
    }
    a = b.da.get(c);
    return void 0 === a ? -1 : a
}
function pa(a) {
    let b = a.g.length;
    for (const {h: c, g: d} of a.i)
        b += pa(c),
        b -= d.size;
    return b
}
function qa(a) {
    let b = 1048576;
    for (const {h: c} of a.i)
        b += qa(c);
    return b
}
function ma(a) {
    let b = a.o;
    for (const {h: c} of a.i)
        b += ma(c);
    return b
}
function na(a) {
    let b = a.l;
    for (const {h: c} of a.i)
        b += na(c);
    return a.l
}
function Ce(a, b) {
    const c = a.g[De(a, b)];
    if (5 === c.status)
        return Ce(X(a, c), a.g[b].g);
    if (!c)
        return "";
    for (const [d,e] of c.da)
        if (e === b)
            return d;
    return ""
}
function ta(a, b, c, d) {
    if (Y(a, c))
        return -1;
    const e = a.g[b]
      , f = a.g[c];
    if (5 === e.status)
        return 5 !== f.status || f.i !== e.i ? -1 : ta(X(a, e), e.g, f.g, d);
    if (5 === f.status)
        return -1;
    te(a, b, c, d);
    return 0
}
function Ka(a, b, c) {
    if ("." === c || ".." === c)
        return -1;
    var d = Ja(a, b, c);
    const e = a.g[d];
    var f = a.g[b];
    if (5 === f.status)
        return b = f.g,
        Ka(X(a, f), b, c);
    if (f = Y(a, d)) {
        a: if (d = a.g[d],
        5 === d.status)
            var k = Y(X(a, d), d.g);
        else {
            for (k of d.da.keys())
                if ("." !== k && ".." !== k) {
                    k = !1;
                    break a
                }
            k = !0
        }
        f = !k
    }
    if (f)
        return -39;
    ue(a, b, c);
    0 === e.Sa && (e.status = Da);
    return 0
}
async function Be(a, b) {
    const c = a.g[b];
    5 === c.status ? await Be(X(a, c), c.g) : (c.size = 0,
    delete a.h[b])
}
ne.prototype.Db = async function(a) {
    const b = this.g[a];
    return this.h[a] ? this.h[a] : 2 === b.status ? await this.j.read(b.nd, 0, b.size) : null
}
;
async function Ge(a, b, c, d) {
    const e = a.g[b];
    return a.h[b] ? a.h[b].subarray(c, c + d) : 2 === e.status ? await a.j.read(e.nd, c, d) : null
}
async function ze(a, b, c) {
    a.h[b] = c;
    2 === a.g[b].status && (a.g[b].status = 0,
    a.j.g(a.g[b].nd))
}
function G(a, b) {
    b = a.g[b];
    return 5 === b.status ? G(X(a, b), b.g) : b
}
async function Ea(a, b, c) {
    var d = G(a, b)
      , e = await Ge(a, b, 0, d.size);
    if (c != d.size) {
        var f = new Uint8Array(c);
        d.size = c;
        e && f.set(e.subarray(0, Math.min(e.length, d.size)), 0);
        await ze(a, b, f)
    }
}
function Ie(a, b) {
    b = b.replace("//", "/");
    b = b.split("/");
    0 < b.length && 0 === b[b.length - 1].length && b.pop();
    0 < b.length && 0 === b[0].length && b.shift();
    const c = b.length;
    var d = -1
      , e = 0;
    let f = null;
    for (var k = 0; k < c; k++)
        if (d = e,
        e = Ja(a, d, b[k]),
        !f && 5 === a.g[d].status && (f = "/" + b.slice(k).join("/")),
        -1 == e)
            return k < c - 1 ? {
                id: -1,
                kf: -1,
                name: b[k],
                Qf: f
            } : {
                id: -1,
                kf: d,
                name: b[k],
                Qf: f
            };
    return {
        id: e,
        kf: d,
        name: b[k],
        Qf: f
    }
}
function Ae(a, b) {
    var c = a.g[b];
    if (5 === c.status)
        Ae(X(a, c), c.g);
    else {
        var d = 0;
        for (const e of c.da.keys())
            d += 24 + Je(e);
        b = a.h[b] = new Uint8Array(d);
        c.size = d;
        d = 0;
        for (const [e,f] of c.da)
            c = G(a, f),
            d += v(["Q", "d", "b", "s"], [c.wa, d + 13 + 8 + 1 + 2 + Je(e), c.mode >> 12, e], b, d)
    }
}
function Fa(a, b, c) {
    a = a.h[b];
    if (c >= a.length)
        return a.length;
    for (b = 0; ; ) {
        const d = C(["Q", "d"], a, {
            offset: b
        })[1];
        if (d > c)
            break;
        b = d
    }
    return b
}
function Y(a, b) {
    b = a.g[b];
    return 5 === b.status ? Y(X(a, b), b.g) : (b.mode & 61440) === xa
}
function Fe(a, b) {
    Y(a, b);
    b = a.g[b];
    if (5 === b.status)
        return Fe(X(a, b), b.g);
    a = [];
    for (const c of b.da.keys())
        "." !== c && ".." !== c && a.push(c);
    return a
}
function De(a, b) {
    Y(a, b);
    b = a.g[b];
    if (5 !== b.status || 0 === b.g)
        return b.da.get("..");
    {
        const c = De(X(a, b), b.g);
        return He(a, b.i, c)
    }
}
function Ee(a, b, c, d) {
    const e = a.g[b];
    5 === e.status && a.i[e.i].g.delete(e.g);
    e.status = 5;
    e.i = c;
    e.g = d;
    a.i[c].g.set(d, b)
}
function xe(a, b, c) {
    const d = re(a)
      , e = a.g.length;
    a.g.push(d);
    d.Zb = e;
    Ee(a, e, b, c);
    return e
}
function He(a, b, c) {
    const d = a.i[b].g.get(c);
    return void 0 === d ? xe(a, b, c) : d
}
function X(a, b) {
    return a.i[b.i].h
}
function ve() {
    this.type = 2;
    this.start = 0;
    this.length = Infinity;
    this.h = -1;
    this.g = ""
}
ve.prototype.X = function() {
    const a = [];
    a[0] = this.type;
    a[1] = this.start;
    a[2] = Infinity === this.length ? 0 : this.length;
    a[3] = this.h;
    a[4] = this.g;
    return a
}
;
ve.prototype.G = function(a) {
    this.type = a[0];
    this.start = a[1];
    this.length = 0 === a[2] ? Infinity : a[2];
    this.h = a[3];
    this.g = a[4]
}
;
function Ke(a) {
    const b = new ve;
    b.G(a.X());
    return b
}
function Le(a, b) {
    return b.h === a.h && b.g === a.g && b.type === a.type
}
function Me(a, b) {
    return Le(a, b) && b.start + b.length === a.start
}
function za(a, b, c, d, e) {
    const f = new ve;
    f.type = a;
    f.start = b;
    f.length = c;
    f.h = d;
    f.g = e;
    return f
}
function Ba(a, b, c) {
    b = a.g[b];
    if (5 === b.status) {
        var d = b.g;
        return Ba(X(a, b), d, c)
    }
    for (d of b.h)
        if (!(c.h === d.h && c.g === d.g || 2 === c.type || 2 === d.type || 1 !== c.type && 1 !== d.type || c.start + c.length <= d.start || d.start + d.length <= c.start))
            return Ke(d);
    return null
}
function Aa(a, b, c, d) {
    const e = a.g[b];
    if (5 === e.status)
        return b = e.g,
        Aa(X(a, e), b, c, d);
    c = Ke(c);
    if (2 !== c.type && Ba(a, b, c))
        return 1;
    for (a = 0; a < e.h.length; a++) {
        d = e.h[a];
        if (d.start + d.length <= c.start)
            continue;
        if (c.start + c.length <= d.start)
            break;
        if (d.h !== c.h || d.g !== c.g)
            continue;
        b = c.start + c.length;
        const f = c.start - d.start
          , k = d.start + d.length - b;
        if (0 < f && 0 < k && d.type === c.type)
            return 0;
        0 < f && (d.length = f);
        if (0 >= f && 0 < k)
            d.start = b,
            d.length = k;
        else if (0 < k) {
            for (; a < e.h.length && e.h[a].start < b; )
                a++;
            e.h.splice(a, 0, za(d.type, b, k, d.h, d.g))
        } else
            0 >= f && (e.h.splice(a, 1),
            a--)
    }
    if (2 !== c.type) {
        a = c;
        d = !1;
        for (b = 0; b < e.h.length && !(Me(a, e.h[b]) && (e.h[b].length += c.length,
        a = e.h[b],
        d = !0),
        c.start <= e.h[b].start); b++)
            ;
        d || (e.h.splice(b, 0, a),
        b++);
        for (; b < e.h.length; b++)
            if (Le(e.h[b], a)) {
                Me(e.h[b], a) && (a.length += e.h[b].length,
                e.h.splice(b, 1));
                break
            }
    }
    return 0
}
function Ne(a, b) {
    b = Ie(a, b);
    if (-1 !== b.id)
        return a = G(a, b.id),
        Array.from(a.da.keys()).filter(c=>"." !== c && ".." !== c)
}
ne.prototype.me = function(a) {
    a = Ie(this, a);
    if (-1 === a.id)
        return Promise.resolve(null);
    const b = G(this, a.id);
    return Ga(this, a.id, 0, b.size)
}
;
function v(a, b, c, d) {
    for (var e, f = 0, k = 0; k < a.length; k++)
        switch (e = b[k],
        a[k]) {
        case "w":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            f += 4;
            break;
        case "d":
            c[d++] = e & 255;
            c[d++] = e >> 8 & 255;
            c[d++] = e >> 16 & 255;
            c[d++] = e >> 24 & 255;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            f += 8;
            break;
        case "h":
            c[d++] = e & 255;
            c[d++] = e >> 8;
            f += 2;
            break;
        case "b":
            c[d++] = e;
            f += 1;
            break;
        case "s":
            var g = d
              , h = 0;
            c[d++] = 0;
            c[d++] = 0;
            f += 2;
            for (var l of e)
                Oe(l.charCodeAt(0)).forEach(function(m) {
                    c[d++] = m;
                    f += 1;
                    h++
                });
            c[g + 0] = h & 255;
            c[g + 1] = h >> 8 & 255;
            break;
        case "Q":
            v(["b", "w", "d"], [e.type, e.version, e.path], c, d),
            d += 13,
            f += 13
        }
    return f
}
function C(a, b, c) {
    let d = c.offset;
    for (var e = [], f = 0; f < a.length; f++)
        switch (a[f]) {
        case "w":
            var k = b[d++];
            k += b[d++] << 8;
            k += b[d++] << 16;
            k += b[d++] << 24 >>> 0;
            e.push(k);
            break;
        case "d":
            k = b[d++];
            k += b[d++] << 8;
            k += b[d++] << 16;
            k += b[d++] << 24 >>> 0;
            d += 4;
            e.push(k);
            break;
        case "h":
            k = b[d++];
            e.push(k + (b[d++] << 8));
            break;
        case "b":
            e.push(b[d++]);
            break;
        case "s":
            k = b[d++];
            k += b[d++] << 8;
            for (var g = "", h = new Pe, l = 0; l < k; l++) {
                var m = h.i(b[d++]);
                -1 != m && (g += String.fromCharCode(m))
            }
            e.push(g);
            break;
        case "Q":
            c.offset = d,
            k = C(["b", "w", "d"], b, c),
            d = c.offset,
            e.push({
                type: k[0],
                version: k[1],
                path: k[2]
            })
        }
    c.offset = d;
    return e
}
;function Pe() {
    this.g = new Uint8Array(5);
    this.h = 0;
    this.i = function(a) {
        this.g[this.h] = a;
        this.h++;
        switch (this.h) {
        case 1:
            if (128 > this.g[0])
                return this.h = 0,
                this.g[0];
            break;
        case 2:
            if (192 == (this.g[0] & 224) && 128 == (this.g[1] & 192))
                return this.h = 0,
                (this.g[0] & 31) << 6 | this.g[1] & 63
        }
        return -1
    }
}
function Oe(a) {
    if (128 > a)
        return [a];
    if (2048 > a)
        return [192 | a >> 6 & 31, 128 | a & 63]
}
function Je(a) {
    for (var b = 0, c = 0; c < a.length; c++)
        b += 128 > a.charCodeAt(c) ? 1 : 2;
    return b
}
;function Qe(a) {
    function b(p) {
        !p.altKey && g[56] && f(56, !1);
        return e(p, !1)
    }
    function c(p) {
        !p.altKey && g[56] && f(56, !1);
        return e(p, !0)
    }
    function d() {
        for (var p = Object.keys(g), q, w = 0; w < p.length; w++)
            q = +p[w],
            g[q] && f(q, !1);
        g = {}
    }
    function e(p, q) {
        if (h.v && (p.shiftKey && p.ctrlKey && (73 === p.keyCode || 74 === p.keyCode || 75 === p.keyCode) || !h.Ce ? 0 : p.target ? p.target.classList.contains("phone_keyboard") || "INPUT" !== p.target.nodeName && "TEXTAREA" !== p.target.nodeName : 1)) {
            a: {
                if (void 0 !== p.code) {
                    var w = t[p.code];
                    if (void 0 !== w)
                        break a
                }
                w = l[p.keyCode]
            }
            if (w)
                return f(w, q, p.repeat),
                p.preventDefault && p.preventDefault(),
                !1;
            console.log("Missing char in map: keyCode=" + (p.keyCode || -1).toString(16) + " code=" + p.code)
        }
    }
    function f(p, q, w) {
        if (q)
            g[p] && !w && f(p, !1);
        else if (!g[p])
            return;
        (g[p] = q) || (p |= 128);
        255 < p ? (k(p >> 8),
        k(p & 255)) : k(p)
    }
    function k(p) {
        h.v.send("keyboard-code", p)
    }
    var g = {}
      , h = this;
    this.Ce = !0;
    var l = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 0, 0, 0, 28, 0, 0, 42, 29, 56, 0, 58, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 57, 57417, 57425, 57423, 57415, 57419, 57416, 57421, 80, 0, 0, 0, 0, 82, 83, 0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 39, 0, 13, 0, 0, 0, 30, 48, 46, 32, 18, 33, 34, 35, 23, 36, 37, 38, 50, 49, 24, 25, 16, 19, 31, 20, 22, 47, 17, 45, 21, 44, 57435, 57436, 57437, 0, 0, 82, 79, 80, 81, 75, 76, 77, 71, 72, 73, 0, 0, 0, 0, 0, 0, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 13, 51, 12, 52, 53, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 43, 27, 40, 0, 57435, 57400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      , m = {
        8: 8,
        10: 13,
        32: 32,
        39: 222,
        44: 188,
        45: 189,
        46: 190,
        47: 191,
        48: 48,
        49: 49,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        56: 56,
        57: 57,
        59: 186,
        61: 187,
        91: 219,
        92: 220,
        93: 221,
        96: 192,
        97: 65,
        98: 66,
        99: 67,
        100: 68,
        101: 69,
        102: 70,
        103: 71,
        104: 72,
        105: 73,
        106: 74,
        107: 75,
        108: 76,
        109: 77,
        110: 78,
        111: 79,
        112: 80,
        113: 81,
        114: 82,
        115: 83,
        116: 84,
        117: 85,
        118: 86,
        119: 87,
        120: 88,
        121: 89,
        122: 90
    }
      , r = {
        33: 49,
        34: 222,
        35: 51,
        36: 52,
        37: 53,
        38: 55,
        40: 57,
        41: 48,
        42: 56,
        43: 187,
        58: 186,
        60: 188,
        62: 190,
        63: 191,
        64: 50,
        65: 65,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        79: 79,
        80: 80,
        81: 81,
        82: 82,
        83: 83,
        84: 84,
        85: 85,
        86: 86,
        87: 87,
        88: 88,
        89: 89,
        90: 90,
        94: 54,
        95: 189,
        123: 219,
        124: 220,
        125: 221,
        126: 192
    }
      , t = {
        Escape: 1,
        Digit1: 2,
        Digit2: 3,
        Digit3: 4,
        Digit4: 5,
        Digit5: 6,
        Digit6: 7,
        Digit7: 8,
        Digit8: 9,
        Digit9: 10,
        Digit0: 11,
        Minus: 12,
        Equal: 13,
        Backspace: 14,
        Tab: 15,
        KeyQ: 16,
        KeyW: 17,
        KeyE: 18,
        KeyR: 19,
        KeyT: 20,
        KeyY: 21,
        KeyU: 22,
        KeyI: 23,
        KeyO: 24,
        KeyP: 25,
        BracketLeft: 26,
        BracketRight: 27,
        Enter: 28,
        ControlLeft: 29,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        Semicolon: 39,
        Quote: 40,
        Backquote: 41,
        ShiftLeft: 42,
        Backslash: 43,
        KeyZ: 44,
        KeyX: 45,
        KeyC: 46,
        KeyV: 47,
        KeyB: 48,
        KeyN: 49,
        KeyM: 50,
        Comma: 51,
        Period: 52,
        Slash: 53,
        ShiftRight: 54,
        NumpadMultiply: 55,
        AltLeft: 56,
        Space: 57,
        CapsLock: 58,
        F1: 59,
        F2: 60,
        F3: 61,
        F4: 62,
        F5: 63,
        F6: 64,
        F7: 65,
        F8: 66,
        F9: 67,
        F10: 68,
        NumLock: 69,
        ScrollLock: 70,
        Numpad7: 71,
        Numpad8: 72,
        Numpad9: 73,
        NumpadSubtract: 74,
        Numpad4: 75,
        Numpad5: 76,
        Numpad6: 77,
        NumpadAdd: 78,
        Numpad1: 79,
        Numpad2: 80,
        Numpad3: 81,
        Numpad0: 82,
        NumpadDecimal: 83,
        IntlBackslash: 86,
        F11: 87,
        F12: 88,
        NumpadEnter: 57372,
        ControlRight: 57373,
        NumpadDivide: 57397,
        AltRight: 57400,
        Home: 57415,
        ArrowUp: 57416,
        PageUp: 57417,
        ArrowLeft: 57419,
        ArrowRight: 57421,
        End: 57423,
        ArrowDown: 57424,
        PageDown: 57425,
        Insert: 57426,
        Delete: 57427,
        OSLeft: 57435,
        OSRight: 57436,
        ContextMenu: 57437
    };
    this.v = a;
    this.za = function() {
        "undefined" !== typeof window && (window.removeEventListener("keyup", b, !1),
        window.removeEventListener("keydown", c, !1),
        window.removeEventListener("blur", d, !1))
    }
    ;
    this.hb = function() {
        "undefined" !== typeof window && (this.za(),
        window.addEventListener("keyup", b, !1),
        window.addEventListener("keydown", c, !1),
        window.addEventListener("blur", d, !1))
    }
    ;
    this.hb();
    this.g = function(p) {
        p = {
            keyCode: p
        };
        e(p, !0);
        e(p, !1)
    }
    ;
    this.dj = function(p) {
        var q = p.charCodeAt(0);
        q in m ? this.g(m[q]) : q in r ? (k(42),
        this.g(r[q]),
        k(170)) : console.log("ascii -> keyCode not found: ", q, p)
    }
}
;function Re(a, b) {
    function c(x) {
        if (!w.enabled || !w.Ce)
            return !1;
        var E = b || document.body, F;
        if (!(F = document.pointerLockElement))
            a: {
                for (x = x.target; x.parentNode; ) {
                    if (x === E) {
                        F = !0;
                        break a
                    }
                    x = x.parentNode
                }
                F = !1
            }
        return F
    }
    function d(x) {
        c(x) && (x = x.changedTouches) && x.length && (x = x[x.length - 1],
        p = x.clientX,
        q = x.clientY)
    }
    function e() {
        if (m || t || r)
            w.v.send("mouse-click", [!1, !1, !1]),
            m = t = r = !1
    }
    function f(x) {
        if (w.v && c(x)) {
            var E = 0
              , F = 0
              , I = x.changedTouches;
            I ? I.length && (I = I[I.length - 1],
            E = I.clientX - p,
            F = I.clientY - q,
            p = I.clientX,
            q = I.clientY,
            x.preventDefault()) : "number" === typeof x.movementX ? (E = x.movementX,
            F = x.movementY) : "number" === typeof x.webkitMovementX ? (E = x.webkitMovementX,
            F = x.webkitMovementY) : "number" === typeof x.mozMovementX ? (E = x.mozMovementX,
            F = x.mozMovementY) : (E = x.clientX - p,
            F = x.clientY - q,
            p = x.clientX,
            q = x.clientY);
            w.v.send("mouse-delta", [.15 * E, -(.15 * F)]);
            b && w.v.send("mouse-absolute", [x.pageX - b.offsetLeft, x.pageY - b.offsetTop, b.offsetWidth, b.offsetHeight])
        }
    }
    function k(x) {
        c(x) && h(x, !0)
    }
    function g(x) {
        c(x) && h(x, !1)
    }
    function h(x, E) {
        w.v && (1 === x.which ? m = E : 2 === x.which ? t = E : 3 === x.which && (r = E),
        w.v.send("mouse-click", [m, t, r]))
    }
    function l(x) {
        if (c(x)) {
            var E = x.wheelDelta || -x.detail;
            0 > E ? E = -1 : 0 < E && (E = 1);
            w.v.send("mouse-wheel", [E, 0]);
            x.preventDefault()
        }
    }
    var m = !1
      , r = !1
      , t = !1
      , p = 0
      , q = 0
      , w = this;
    this.enabled = !1;
    this.Ce = !0;
    this.v = a;
    this.v.register("mouse-enable", function(x) {
        this.enabled = x
    }, this);
    this.za = function() {
        "undefined" !== typeof window && (window.removeEventListener("touchstart", d, !1),
        window.removeEventListener("touchend", e, !1),
        window.removeEventListener("touchmove", f, !1),
        window.removeEventListener("mousemove", f, !1),
        window.removeEventListener("mousedown", k, !1),
        window.removeEventListener("mouseup", g, !1),
        window.removeEventListener("DOMMouseScroll", l, !1),
        window.removeEventListener("mousewheel", l, {
            passive: !1
        }))
    }
    ;
    this.hb = function() {
        "undefined" !== typeof window && (this.za(),
        window.addEventListener("touchstart", d, !1),
        window.addEventListener("touchend", e, !1),
        window.addEventListener("touchmove", f, !1),
        window.addEventListener("mousemove", f, !1),
        window.addEventListener("mousedown", k, !1),
        window.addEventListener("mouseup", g, !1),
        window.addEventListener("DOMMouseScroll", l, !1),
        window.addEventListener("mousewheel", l, {
            passive: !1
        }))
    }
    ;
    this.hb()
}
;function Se(a) {
    if ("undefined" !== typeof window)
        if (window.AudioContext || window.webkitAudioContext) {
            var b = window.AudioWorklet ? Te : Ue;
            this.v = a;
            this.S = window.AudioContext ? new AudioContext : new webkitAudioContext;
            this.g = new Ve(a,this.S);
            this.h = new We(a,this.S,this.g);
            new b(a,this.S,this.g);
            this.h.start();
            a.register("emulator-stopped", function() {
                this.S.suspend()
            }, this);
            a.register("emulator-started", function() {
                this.S.resume()
            }, this);
            a.register("speaker-confirm-initialized", function() {
                a.send("speaker-has-initialized")
            }, this);
            a.send("speaker-has-initialized")
        } else
            console.warn("Web browser doesn't support Web Audio API")
}
function Ve(a, b) {
    function c(d) {
        return function(e) {
            d.gain.setValueAtTime(e, this.S.currentTime)
        }
    }
    this.S = b;
    this.sources = new Map;
    this.Tf = this.Sf = this.F = this.D = this.C = 1;
    this.i = this.S.createBiquadFilter();
    this.j = this.S.createBiquadFilter();
    this.i.type = "highshelf";
    this.j.type = "highshelf";
    this.i.frequency.setValueAtTime(2E3, this.S.currentTime);
    this.j.frequency.setValueAtTime(2E3, this.S.currentTime);
    this.g = this.S.createBiquadFilter();
    this.h = this.S.createBiquadFilter();
    this.g.type = "lowshelf";
    this.h.type = "lowshelf";
    this.g.frequency.setValueAtTime(200, this.S.currentTime);
    this.h.frequency.setValueAtTime(200, this.S.currentTime);
    this.l = this.S.createGain();
    this.o = this.S.createGain();
    this.B = this.S.createChannelMerger(2);
    this.H = this.i;
    this.J = this.j;
    this.i.connect(this.g);
    this.g.connect(this.l);
    this.l.connect(this.B, 0, 0);
    this.j.connect(this.h);
    this.h.connect(this.o);
    this.o.connect(this.B, 0, 1);
    this.B.connect(this.S.destination);
    a.register("mixer-connect", function(d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.connect(e)
    }, this);
    a.register("mixer-disconnect", function(d) {
        var e = d[1];
        d = this.sources.get(d[0]);
        void 0 === d || d.disconnect(e)
    }, this);
    a.register("mixer-volume", function(d) {
        var e = d[0]
          , f = d[1];
        d = Math.pow(10, d[2] / 20);
        e = 0 === e ? this : this.sources.get(e);
        void 0 === e || e.xg(d, f)
    }, this);
    a.register("mixer-gain-left", function(d) {
        this.Sf = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-gain-right", function(d) {
        this.Tf = Math.pow(10, d / 20);
        this.update()
    }, this);
    a.register("mixer-treble-left", c(this.i), this);
    a.register("mixer-treble-right", c(this.j), this);
    a.register("mixer-bass-left", c(this.g), this);
    a.register("mixer-bass-right", c(this.h), this)
}
function Xe(a, b, c) {
    b = new Ye(a.S,b,a.H,a.J);
    a.sources.has(c);
    a.sources.set(c, b);
    return b
}
Ve.prototype.xg = function(a, b) {
    void 0 === b && (b = 2);
    switch (b) {
    case 0:
        this.D = a;
        break;
    case 1:
        this.F = a;
        break;
    case 2:
        this.C = a;
        break;
    default:
        return
    }
    this.update()
}
;
Ve.prototype.update = function() {
    var a = this.C * this.F * this.Tf;
    this.l.gain.setValueAtTime(this.C * this.D * this.Sf, this.S.currentTime);
    this.o.gain.setValueAtTime(a, this.S.currentTime)
}
;
function Ye(a, b, c, d) {
    this.S = a;
    this.o = this.l = !0;
    this.D = this.B = this.j = this.g = 1;
    this.C = a.createChannelSplitter(2);
    this.h = a.createGain();
    this.i = a.createGain();
    b.connect(this.C);
    this.C.connect(this.h, 0);
    this.h.connect(c);
    this.C.connect(this.i, 1);
    this.i.connect(d)
}
Ye.prototype.update = function() {
    var a = this.o * this.g * this.j * this.D;
    this.h.gain.setValueAtTime(this.l * this.g * this.j * this.B, this.S.currentTime);
    this.i.gain.setValueAtTime(a, this.S.currentTime)
}
;
Ye.prototype.connect = function(a) {
    var b = !a || 2 === a;
    if (b || 0 === a)
        this.l = !0;
    if (b || 1 === a)
        this.o = !0;
    this.update()
}
;
Ye.prototype.disconnect = function(a) {
    var b = !a || 2 === a;
    if (b || 0 === a)
        this.l = !1;
    if (b || 1 === a)
        this.o = !1;
    this.update()
}
;
Ye.prototype.xg = function(a, b) {
    void 0 === b && (b = 2);
    switch (b) {
    case 0:
        this.B = a;
        break;
    case 1:
        this.D = a;
        break;
    case 2:
        this.j = a;
        break;
    default:
        return
    }
    this.update()
}
;
function We(a, b, c) {
    this.Id = b.createOscillator();
    this.Id.type = "square";
    this.Id.frequency.setValueAtTime(440, b.currentTime);
    this.g = Xe(c, this.Id, 1);
    this.g.disconnect();
    a.register("pcspeaker-enable", function() {
        var d = c.sources.get(1);
        void 0 === d || d.connect(void 0)
    }, this);
    a.register("pcspeaker-disable", function() {
        var d = c.sources.get(1);
        void 0 === d || d.disconnect(void 0)
    }, this);
    a.register("pcspeaker-update", function(d) {
        var e = d[1]
          , f = 0;
        3 === d[0] && (f = Math.min(1193181.6665999999 / e, this.Id.frequency.maxValue),
        f = Math.max(f, 0));
        this.Id.frequency.setValueAtTime(f, b.currentTime)
    }, this)
}
We.prototype.start = function() {
    this.Id.start()
}
;
function Te(a, b, c) {
    this.v = a;
    this.S = b;
    this.enabled = !1;
    this.Za = 48E3;
    b = function() {
        function e(g) {
            if (0 === g)
                return 1;
            g *= Math.PI;
            return Math.sin(g) / g
        }
        function f() {
            var g = Reflect.construct(AudioWorkletProcessor, [], f);
            g.D = 3;
            g.l = Array(1024);
            g.C = 0;
            g.H = 0;
            g.o = 0;
            g.F = g.l.length;
            g.B = 0;
            g.J = k;
            g.g = k;
            g.M = 1;
            g.j = 0;
            g.i = 0;
            g.h = 0;
            g.port.onmessage = h=>{
                switch (h.data.type) {
                case "queue":
                    g.ca(h.data.value);
                    break;
                case "sampling-rate":
                    g.M = h.data.value / sampleRate
                }
            }
            ;
            return g
        }
        var k = [new Float32Array(256), new Float32Array(256)];
        Reflect.setPrototypeOf(f.prototype, AudioWorkletProcessor.prototype);
        Reflect.setPrototypeOf(f, AudioWorkletProcessor);
        f.prototype.process = f.prototype.process = function(g, h) {
            for (g = 0; g < h[0][0].length; g++) {
                for (var l = 0, m = 0, r = this.h + this.D, t = this.h - this.D + 1; t <= r; t++) {
                    var p = this.j + t;
                    l += this.N(p, 0) * this.T(this.i - t);
                    m += this.N(p, 1) * this.T(this.i - t)
                }
                if (isNaN(l) || isNaN(m))
                    l = m = 0;
                h[0][0][g] = l;
                h[0][1][g] = m;
                this.i += this.M;
                this.h = Math.floor(this.i)
            }
            h = this.h;
            h += this.D + 2;
            this.i -= this.h;
            this.j += this.h;
            this.h = 0;
            this.Y(h);
            return !0
        }
        ;
        f.prototype.T = function(g) {
            return e(g) * e(g / this.D)
        }
        ;
        f.prototype.N = function(g, h) {
            return 0 > g ? (g += this.J[0].length,
            this.J[h][g]) : this.g[h][g]
        }
        ;
        f.prototype.Y = function(g) {
            var h = this.g[0].length;
            h - this.j < g && (this.ba(),
            this.j -= h)
        }
        ;
        f.prototype.ba = function() {
            this.J = this.g;
            this.g = this.W();
            var g = this.g[0].length;
            if (256 > g) {
                for (var h = this.C, l = 0; 256 > g && l < this.o; )
                    g += this.l[h][0].length,
                    h = h + 1 & this.F - 1,
                    l++;
                g = Math.max(g, 256);
                g = [new Float32Array(g), new Float32Array(g)];
                g[0].set(this.g[0]);
                g[1].set(this.g[1]);
                h = this.g[0].length;
                for (var m = 0; m < l; m++) {
                    var r = this.W();
                    g[0].set(r[0], h);
                    g[1].set(r[1], h);
                    h += r[0].length
                }
                this.g = g
            }
            this.fc()
        }
        ;
        f.prototype.fc = function() {
            1024 > this.B / this.M && this.port.postMessage({
                type: "pump"
            })
        }
        ;
        f.prototype.ca = function(g) {
            this.o < this.F && (this.l[this.H] = g,
            this.H = this.H + 1 & this.F - 1,
            this.o++,
            this.B += g[0].length,
            this.fc())
        }
        ;
        f.prototype.W = function() {
            if (!this.o)
                return k;
            var g = this.l[this.C];
            this.l[this.C] = null;
            this.C = this.C + 1 & this.F - 1;
            this.o--;
            this.B -= g[0].length;
            return g
        }
        ;
        registerProcessor("dac-processor", f)
    }
    .toString();
    var d = URL.createObjectURL(new Blob([b.substring(b.indexOf("{") + 1, b.lastIndexOf("}"))],{
        type: "application/javascript"
    }));
    this.Ac = null;
    this.g = this.S.createGain();
    this.S.audioWorklet.addModule(d).then(()=>{
        URL.revokeObjectURL(d);
        this.Ac = new AudioWorkletNode(this.S,"dac-processor",{
            numberOfInputs: 0,
            numberOfOutputs: 1,
            outputChannelCount: [2],
            parameterData: {},
            processorOptions: {}
        });
        this.Ac.port.postMessage({
            type: "sampling-rate",
            value: this.Za
        });
        this.Ac.port.onmessage = e=>{
            switch (e.data.type) {
            case "pump":
                this.fc()
            }
        }
        ;
        this.Ac.connect(this.g)
    }
    );
    this.h = Xe(c, this.g, 2);
    this.h.g = 3;
    a.register("dac-send-data", function(e) {
        this.nf(e)
    }, this);
    a.register("dac-enable", function() {
        this.enabled = !0
    }, this);
    a.register("dac-disable", function() {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function(e) {
        this.Za = e;
        this.Ac && this.Ac.port.postMessage({
            type: "sampling-rate",
            value: e
        })
    }, this)
}
Te.prototype.nf = function(a) {
    this.Ac && this.Ac.port.postMessage({
        type: "queue",
        value: a
    }, [a[0].buffer, a[1].buffer])
}
;
Te.prototype.fc = function() {
    this.enabled && this.v.send("dac-request-data")
}
;
function Ue(a, b, c) {
    this.v = a;
    this.S = b;
    this.enabled = !1;
    this.Za = 22050;
    this.g = 0;
    this.ke = 1;
    this.Le = this.S.createBiquadFilter();
    this.Le.type = "lowpass";
    this.i = this.Le;
    this.h = Xe(c, this.i, 2);
    this.h.g = 3;
    a.register("dac-send-data", function(d) {
        this.nf(d)
    }, this);
    a.register("dac-enable", function() {
        this.enabled = !0;
        this.fc()
    }, this);
    a.register("dac-disable", function() {
        this.enabled = !1
    }, this);
    a.register("dac-tell-sampling-rate", function(d) {
        this.Za = d;
        this.ke = Math.ceil(8E3 / d);
        this.Le.frequency.setValueAtTime(d / 2, this.S.currentTime)
    }, this)
}
Ue.prototype.nf = function(a) {
    var b = a[0].length
      , c = b / this.Za;
    if (1 < this.ke) {
        var d = this.S.createBuffer(2, b * this.ke, this.Za * this.ke);
        for (var e = d.getChannelData(0), f = d.getChannelData(1), k = 0, g = 0; g < b; g++)
            for (var h = 0; h < this.ke; h++,
            k++)
                e[k] = a[0][g],
                f[k] = a[1][g]
    } else
        d = this.S.createBuffer(2, b, this.Za),
        d.copyToChannel ? (d.copyToChannel(a[0], 0),
        d.copyToChannel(a[1], 1)) : (d.getChannelData(0).set(a[0]),
        d.getChannelData(1).set(a[1]));
    a = this.S.createBufferSource();
    a.buffer = d;
    a.connect(this.Le);
    a.addEventListener("ended", this.fc.bind(this));
    d = this.S.currentTime;
    if (this.g < d)
        for (this.g = d,
        d = .2 - c,
        b = 0; b <= d; )
            b += c,
            this.g += c,
            setTimeout(()=>this.fc(), 1E3 * b);
    a.start(this.g);
    this.g += c;
    setTimeout(()=>this.fc(), 0)
}
;
Ue.prototype.fc = function() {
    this.enabled && (.2 < this.g - this.S.currentTime || this.v.send("dac-request-data"))
}
;
function Ze(a, b) {
    function c(g) {
        k.v && k.enabled && (k.h(g.which),
        g.preventDefault())
    }
    function d(g) {
        var h = g.which;
        8 === h ? (k.h(127),
        g.preventDefault()) : 9 === h && (k.h(9),
        g.preventDefault())
    }
    function e(g) {
        if (k.enabled) {
            for (var h = g.clipboardData.getData("text/plain"), l = 0; l < h.length; l++)
                k.h(h.charCodeAt(l));
            g.preventDefault()
        }
    }
    function f(g) {
        g.target !== a && a.blur()
    }
    var k = this;
    this.enabled = !0;
    this.v = b;
    this.text = "";
    this.j = !1;
    this.i = 0;
    this.v.register("serial0-output-char", function(g) {
        this.cj(g)
    }, this);
    this.za = function() {
        a.removeEventListener("keypress", c, !1);
        a.removeEventListener("keydown", d, !1);
        a.removeEventListener("paste", e, !1);
        window.removeEventListener("mousedown", f, !1)
    }
    ;
    this.hb = function() {
        this.za();
        a.style.display = "block";
        a.addEventListener("keypress", c, !1);
        a.addEventListener("keydown", d, !1);
        a.addEventListener("paste", e, !1);
        window.addEventListener("mousedown", f, !1)
    }
    ;
    this.hb();
    this.cj = function(g) {
        "\b" === g ? (this.text = this.text.slice(0, -1),
        this.update()) : "\r" !== g && (this.text += g,
        "\n" === g && (this.j = !0),
        this.update())
    }
    ;
    this.update = function() {
        var g = Date.now()
          , h = g - this.i;
        16 > h ? void 0 === this.g && (this.g = setTimeout(()=>{
            this.g = void 0;
            this.i = Date.now();
            this.l()
        }
        , 16 - h)) : (void 0 !== this.g && (clearTimeout(this.g),
        this.g = void 0),
        this.i = g,
        this.l())
    }
    ;
    this.l = function() {
        a.value = this.text;
        this.j && (this.j = !1,
        a.scrollTop = 1E9)
    }
    ;
    this.h = function(g) {
        k.v && k.v.send("serial0-input", g)
    }
}
function $e(a, b) {
    this.element = a;
    if (window.Terminal) {
        var c = this.g = new window.Terminal;
        c.setOption("logLevel", "off");
        c.write("This is the serial console. Whatever you type or paste here will be sent to COM1");
        c.onData(function(d) {
            for (let e = 0; e < d.length; e++)
                b.send("serial0-input", d.charCodeAt(e))
        });
        b.register("serial0-output-char", function(d) {
            c.write(d)
        }, this)
    }
}
$e.prototype.show = function() {
    this.g && this.g.open(this.element)
}
;
function af(a, b) {
    this.v = b;
    this.g = void 0;
    this.h = [];
    this.url = a;
    this.i = Date.now() - 1E4;
    this.v.register("net0-send", function(c) {
        this.send(c)
    }, this)
}
n = af.prototype;
n.fh = function(a) {
    this.v && this.v.send("net0-receive", new Uint8Array(a.data))
}
;
n.dh = function() {
    this.connect();
    setTimeout(this.connect.bind(this), 1E4)
}
;
n.gh = function() {
    for (var a = 0; a < this.h.length; a++)
        this.send(this.h[a]);
    this.h = []
}
;
n.eh = function() {}
;
n.za = function() {
    this.g && this.g.close()
}
;
n.connect = function() {
    if ("undefined" !== typeof WebSocket) {
        if (this.g) {
            var a = this.g.readyState;
            if (0 === a || 1 === a)
                return
        }
        this.i + 1E4 > Date.now() || (this.i = Date.now(),
        this.g = new WebSocket(this.url),
        this.g.binaryType = "arraybuffer",
        this.g.onopen = this.gh.bind(this),
        this.g.onmessage = this.fh.bind(this),
        this.g.onclose = this.dh.bind(this),
        this.g.onerror = this.eh.bind(this))
    }
}
;
n.send = function(a) {
    this.g && 1 === this.g.readyState ? this.g.send(a) : (this.h.push(a),
    128 < this.h.length && (this.h = this.h.slice(-64)),
    this.connect())
}
;
(function() {
    function a(g, h) {
        var l = new XMLHttpRequest;
        l.open(h.method || "get", g, !0);
        l.responseType = h.td ? "json" : "arraybuffer";
        if (h.headers)
            for (var m = Object.keys(h.headers), r = 0; r < m.length; r++) {
                var t = m[r];
                l.setRequestHeader(t, h.headers[t])
            }
        h.Jd && (m = h.Jd.start,
        l.setRequestHeader("Range", "bytes=" + m + "-" + (m + h.Jd.length - 1)),
        l.onreadystatechange = function() {
            200 === l.status && l.abort()
        }
        );
        l.onload = function() {
            4 === l.readyState && (200 !== l.status && 206 !== l.status ? console.error("Loading the image `" + g + "` failed (status %d)", l.status) : l.response && h.done && h.done(l.response, l))
        }
        ;
        h.progress && (l.onprogress = function(p) {
            h.progress(p)
        }
        );
        l.send(null)
    }
    function b(g, h) {
        let l = require("fs");
        h.Jd ? l.open(g, "r", (m,r)=>{
            if (m)
                throw m;
            m = h.Jd.length;
            var t = Buffer.allocUnsafe(m);
            l.read(r, t, 0, m, h.Jd.start, p=>{
                if (p)
                    throw p;
                h.done && h.done(new Uint8Array(t));
                l.close(r, q=>{
                    if (q)
                        throw q;
                }
                )
            }
            )
        }
        ) : l.readFile(g, {
            encoding: h.td ? "utf-8" : null
        }, function(m, r) {
            m ? console.log("Could not read file:", g, m) : (m = r,
            h.td ? m = JSON.parse(m) : m = (new Uint8Array(m)).buffer,
            h.done(m))
        })
    }
    function c(g, h) {
        this.filename = g;
        this.g = 256;
        this.byteLength = h;
        this.h = Object.create(null);
        this.onload = void 0
    }
    function d(g, h) {
        const l = g.match(/(.*)(\..*)/);
        l ? (this.i = l[1],
        this.j = l[2]) : (this.i = g,
        this.j = "");
        this.g = 256;
        this.byteLength = h;
        this.h = Object.create(null);
        this.onload = void 0
    }
    function e(g) {
        this.g = g;
        this.byteLength = g.size;
        1073741824 < g.size && console.warn("SyncFileBuffer: Allocating buffer of " + (g.size >> 20) + " MB ...");
        this.buffer = new ArrayBuffer(g.size);
        this.onload = void 0
    }
    function f(g) {
        this.i = g;
        this.byteLength = g.size;
        this.g = 256;
        this.h = Object.create(null);
        this.onload = void 0
    }
    "undefined" === typeof XMLHttpRequest ? ob = b : ob = a;
    pb = c;
    qb = d;
    rb = f;
    Xa = e;
    sb = function(g, h, l) {
        return String.fromCharCode(...new Uint8Array(g.buffer,h >>> 0,l >>> 0))
    }
    ;
    var k = "undefined" === typeof XMLHttpRequest ? function(g, h) {
        require("fs").stat(g, (l,m)=>{
            l ? h(l) : h(null, m.size)
        }
        )
    }
    : function(g, h) {
        ob(g, {
            done: (l,m)=>{
                l = m.getResponseHeader("Content-Range") || "";
                (m = l.match(/\/(\d+)\s*$/)) ? h(null, +m[1]) : h("`Range: bytes=...` header not supported (Got `" + l + "`)")
            }
            ,
            headers: {
                Range: "bytes=0-0"
            }
        })
    }
    ;
    c.prototype.load = function() {
        void 0 !== this.byteLength ? this.onload && this.onload(Object.create(null)) : k(this.filename, (g,h)=>{
            if (g)
                throw Error("Cannot use: " + this.filename + ". " + g);
            this.byteLength = h;
            this.onload && this.onload(Object.create(null))
        }
        )
    }
    ;
    c.prototype.i = function(g, h) {
        var l = h / this.g;
        g /= this.g;
        for (var m = 0; m < l; m++)
            if (!this.h[g + m])
                return;
        if (1 === l)
            return this.h[g];
        h = new Uint8Array(h);
        for (m = 0; m < l; m++)
            h.set(this.h[g + m], m * this.g);
        return h
    }
    ;
    c.prototype.get = function(g, h, l) {
        console.assert(g + h <= this.byteLength);
        console.assert(0 === g % this.g);
        console.assert(0 === h % this.g);
        console.assert(h);
        var m = this.i(g, h, l);
        m ? l(m) : ob(this.filename, {
            done: function(r) {
                r = new Uint8Array(r);
                this.j(g, h, r);
                l(r)
            }
            .bind(this),
            Jd: {
                start: g,
                length: h
            }
        })
    }
    ;
    c.prototype.set = function(g, h, l) {
        console.assert(g + h.byteLength <= this.byteLength);
        var m = h.length;
        console.assert(0 === g % this.g);
        console.assert(0 === m % this.g);
        console.assert(m);
        g /= this.g;
        m /= this.g;
        for (var r = 0; r < m; r++) {
            var t = this.h[g + r];
            void 0 === t && (t = this.h[g + r] = new Uint8Array(this.g));
            var p = h.subarray(r * this.g, (r + 1) * this.g);
            t.set(p);
            console.assert(t.byteLength === p.length)
        }
        l()
    }
    ;
    c.prototype.j = function(g, h, l) {
        g /= this.g;
        h /= this.g;
        for (var m = 0; m < h; m++) {
            var r = this.h[g + m];
            r && l.set(r, m * this.g)
        }
    }
    ;
    c.prototype.Db = function(g) {
        g()
    }
    ;
    c.prototype.X = function() {
        const g = []
          , h = [];
        for (let[l,m] of Object.entries(this.h))
            h.push([+l, m]);
        g[0] = h;
        return g
    }
    ;
    c.prototype.G = function(g) {
        g = g[0];
        this.h = Object.create(null);
        for (let[h,l] of Object.values(g))
            this.h[h] = l
    }
    ;
    d.prototype.load = function() {
        this.onload && this.onload(Object.create(null))
    }
    ;
    d.prototype.l = c.prototype.i;
    d.prototype.get = function(g, h, l) {
        console.assert(g + h <= this.byteLength);
        console.assert(0 === g % this.g);
        console.assert(0 === h % this.g);
        console.assert(h);
        var m = this.l(g, h, l);
        m ? l(m) : ob(this.i + "-" + g + "-" + (g + h) + this.j, {
            done: function(r) {
                r = new Uint8Array(r);
                this.o(g, h, r);
                l(r)
            }
            .bind(this)
        })
    }
    ;
    d.prototype.set = c.prototype.set;
    d.prototype.o = c.prototype.j;
    d.prototype.X = c.prototype.X;
    d.prototype.G = c.prototype.G;
    e.prototype.load = function() {
        this.h(0)
    }
    ;
    e.prototype.h = function(g) {
        var h = new FileReader;
        h.onload = function(l) {
            l = new Uint8Array(l.target.result);
            (new Uint8Array(this.buffer,g)).set(l);
            this.h(g + 4194304)
        }
        .bind(this);
        g < this.byteLength ? h.readAsArrayBuffer(this.g.slice(g, Math.min(g + 4194304, this.byteLength))) : (this.g = void 0,
        this.onload && this.onload({
            buffer: this.buffer
        }))
    }
    ;
    e.prototype.get = function(g, h, l) {
        console.assert(g + h <= this.byteLength);
        l(new Uint8Array(this.buffer,g,h))
    }
    ;
    e.prototype.set = function(g, h, l) {
        console.assert(g + h.byteLength <= this.byteLength);
        (new Uint8Array(this.buffer,g,h.byteLength)).set(h);
        l()
    }
    ;
    e.prototype.Db = function(g) {
        g(this.buffer)
    }
    ;
    e.prototype.X = function() {
        const g = [];
        g[0] = this.byteLength;
        g[1] = new Uint8Array(this.buffer);
        return g
    }
    ;
    e.prototype.G = function(g) {
        this.byteLength = g[0];
        this.buffer = g[1].slice().buffer
    }
    ;
    f.prototype.load = function() {
        this.onload && this.onload(Object.create(null))
    }
    ;
    f.prototype.get = function(g, h, l) {
        console.assert(0 === g % this.g);
        console.assert(0 === h % this.g);
        console.assert(h);
        var m = this.j(g, h, l);
        m ? l(m) : (m = new FileReader,
        m.onload = function(r) {
            r = new Uint8Array(r.target.result);
            this.l(g, h, r);
            l(r)
        }
        .bind(this),
        m.readAsArrayBuffer(this.i.slice(g, g + h)))
    }
    ;
    f.prototype.j = c.prototype.i;
    f.prototype.set = c.prototype.set;
    f.prototype.l = c.prototype.j;
    f.prototype.X = c.prototype.X;
    f.prototype.Db = function(g) {
        g()
    }
    ;
    f.prototype.Uf = function(g) {
        for (var h = [], l = Object.keys(this.h).map(Number).sort(function(q, w) {
            return q - w
        }), m = 0, r = 0; r < l.length; r++) {
            var t = l[r]
              , p = this.h[t];
            t *= this.g;
            console.assert(t >= m);
            t !== m && (h.push(this.i.slice(m, t)),
            m = t);
            h.push(p);
            m += p.length
        }
        m !== this.i.size && h.push(this.i.slice(m));
        g = new File(h,g);
        console.assert(g.size === this.i.size);
        return g
    }
}
)();
function Pa(a) {
    this.Wd = !1;
    const b = Ud();
    this.v = b[0];
    this.Ed = b[1];
    var c, d;
    const e = new WebAssembly.Table({
        element: "anyfunc",
        initial: 1924
    })
      , f = {
        cpu_exception_hook: h=>this.cpu_exception_hook && this.cpu_exception_hook(h),
        hlt_op: function() {
            var h = c;
            0 === (h.B() & 512) && h.v.send("cpu-event-halt");
            h.h[0] = 1;
            eb(h)
        },
        abort: function() {},
        logop: function() {
            return c.debug.nh()
        },
        microtick: fb,
        get_rand_int: function() {
            return vb()
        },
        pic_acknowledge: function() {
            de(c)
        },
        io_port_read8: function(h) {
            h = c.A.ports[h];
            return h.Kd.call(h.ja)
        },
        io_port_read16: function(h) {
            h = c.A.ports[h];
            return h.La.call(h.ja)
        },
        io_port_read32: function(h) {
            h = c.A.ports[h];
            return h.le.call(h.ja)
        },
        io_port_write8: function(h, l) {
            h = c.A.ports[h];
            h.Cg.call(h.ja, l)
        },
        io_port_write16: function(h, l) {
            h = c.A.ports[h];
            h.we.call(h.ja, l)
        },
        io_port_write32: function(h, l) {
            h = c.A.ports[h];
            h.Kc.call(h.ja, l)
        },
        mmap_read8: function(h) {
            return c.l[h >>> 17](h)
        },
        mmap_read16: function(h) {
            var l = c.l[h >>> 17];
            return l(h) | l(h + 1 | 0) << 8
        },
        mmap_read32: function(h) {
            return c.Oa[h >>> 17](h)
        },
        mmap_write8: function(h, l) {
            c.C[h >>> 17](h, l)
        },
        mmap_write16: function(h, l) {
            var m = c.C[h >>> 17];
            m(h, l & 255);
            m(h + 1 | 0, l >> 8)
        },
        mmap_write32: function(h, l) {
            c.o[h >>> 17](h, l)
        },
        mmap_write64: function(h, l, m) {
            var r = c.o[h >>> 17];
            r(h, l);
            r(h + 4, m)
        },
        mmap_write128: function(h, l, m, r, t) {
            var p = c.o[h >>> 17];
            p(h, l);
            p(h + 4, m);
            p(h + 8, r);
            p(h + 12, t)
        },
        log_from_wasm: function(h, l) {
            sb(d, h, l)
        },
        console_log_from_wasm: function(h, l) {
            h = sb(d, h, l);
            console.error(h)
        },
        dbg_trace_from_wasm: function() {},
        codegen_finalize: (h,l,m,r,t)=>{
            ce(c, h, l, m, r, t)
        }
        ,
        jit_clear_func: h=>{
            c.va.Xe.set(h + 1024, null)
        }
        ,
        jit_clear_all_funcs: ()=>{
            {
                const h = c.va.Xe;
                for (let l = 0; 900 > l; l++)
                    h.set(1024 + l, null)
            }
        }
        ,
        __indirect_function_table: e
    };
    let k = "v86.wasm"
      , g = "v86-fallback.wasm";
    a.wasm_path ? k = a.wasm_path : "undefined" === typeof window && "string" === typeof __dirname ? (k = __dirname + "/" + k,
    g = __dirname + "/" + g) : (k = "build/" + k,
    g = "build/" + g);
    ob(k, {
        done: h=>{
            WebAssembly.instantiate(h, {
                env: f
            }).then(({instance: l})=>{
                l = l.exports;
                d = l.memory;
                l.rust_init();
                l = this.g = new bb(this.Ed,{
                    exports: l,
                    Xe: e
                });
                c = l.s;
                bf(this, l, a)
            }
            , ()=>{
                ob(g, {
                    done: l=>{
                        WebAssembly.instantiate(l, {
                            env: f
                        }).then(({instance: m})=>{
                            m = m.exports;
                            d = m.memory;
                            m.rust_init();
                            m = this.g = new bb(this.Ed,{
                                exports: m,
                                Xe: e
                            });
                            c = m.s;
                            bf(this, m, a)
                        }
                        )
                    }
                })
            }
            )
        }
        ,
        progress: h=>{
            this.Ed.send("download-progress", {
                ce: 0,
                be: 1,
                de: k,
                lengthComputable: h.lengthComputable,
                total: h.total,
                loaded: h.loaded
            })
        }
    })
}
async function bf(a, b, c) {
    function d(p, q) {
        switch (p) {
        case "hda":
            k.U = this.Wb.hda = q;
            break;
        case "hdb":
            k.Ee = this.Wb.hdb = q;
            break;
        case "cdrom":
            k.ra = this.Wb.cdrom = q;
            break;
        case "fda":
            k.pa = this.Wb.fda = q;
            break;
        case "fdb":
            k.Mf = this.Wb.fdb = q;
            break;
        case "multiboot":
            k.Hd = this.Wb.multiboot = q.buffer;
            break;
        case "bzimage":
            k.lc = this.Wb.bzimage = q.buffer;
            break;
        case "initrd":
            k.Fd = this.Wb.initrd = q.buffer;
            break;
        case "bios":
            k.vd = q.buffer;
            break;
        case "vga_bios":
            k.pj = q.buffer;
            break;
        case "initial_state":
            k.Vc = q.buffer;
            break;
        case "fs9p_json":
            k.Rf = q
        }
    }
    function e(p, q) {
        if (q)
            if (q.get && q.set && q.load)
                g.push({
                    name: p,
                    Yc: q
                });
            else {
                q = {
                    buffer: q.buffer,
                    async: q.async,
                    url: q.url,
                    size: q.size,
                    ta: q.ta
                };
                if ("bios" === p || "vga_bios" === p || "initial_state" === p || "multiboot" === p || "bzimage" === p || "initrd" === p)
                    q.async = !1;
                q.buffer instanceof ArrayBuffer ? (q = new xb(q.buffer),
                g.push({
                    name: p,
                    Yc: q
                })) : "undefined" !== typeof File && q.buffer instanceof File ? (void 0 === q.async && (q.async = 268435456 <= q.buffer.size),
                q = q.async ? new rb(q.buffer) : new Xa(q.buffer),
                g.push({
                    name: p,
                    Yc: q
                })) : q.url && (q.async ? (q = q.ta ? new qb(q.url,q.size) : new pb(q.url,q.size),
                g.push({
                    name: p,
                    Yc: q
                })) : g.push({
                    name: p,
                    url: q.url,
                    size: q.size
                }))
            }
    }
    function f() {
        function p() {
            this.Od && this.Od.show && this.Od.show();
            this.v.send("cpu-init", k);
            k.Vc && (b.Md(k.Vc),
            k.Vc = void 0);
            c.autostart && this.v.send("cpu-run");
            this.Ed.send("emulator-loaded")
        }
        if (k.Cb && k.Rf)
            if (k.Vc || pe(k.Cb, k.Rf),
            c.bzimage_initrd_from_filesystem) {
                const {lc: q, Fd: w} = cf(k.Cb);
                Promise.all([k.Cb.me(w), k.Cb.me(q)]).then(([x,E])=>{
                    d.call(this, "initrd", new xb(x.buffer));
                    d.call(this, "bzimage", new xb(E.buffer));
                    p.call(this)
                }
                )
            } else
                p.call(this);
        else
            console.assert(!c.bzimage_initrd_from_filesystem, "bzimage_initrd_from_filesystem: Requires a filesystem"),
            p.call(this)
    }
    a.v.register("emulator-stopped", function() {
        this.Wd = !1
    }, a);
    a.v.register("emulator-started", function() {
        this.Wd = !0
    }, a);
    var k = {};
    a.Wb = {
        fda: void 0,
        fdb: void 0,
        hda: void 0,
        hdb: void 0,
        cdrom: void 0
    };
    k.eb = c.acpi;
    k.mh = !0;
    k.Yj = c.log_level;
    k.L = c.memory_size || 67108864;
    k.na = c.vga_memory_size || 8388608;
    k.Oc = c.boot_order || 531;
    k.$g = c.fastboot || !1;
    k.pa = void 0;
    k.Mf = void 0;
    k.se = c.uart1;
    k.te = c.uart2;
    k.ue = c.uart3;
    k.Vd = c.cmdline;
    k.ec = c.preserve_mac_from_state_image;
    c.network_adapter ? a.l = c.network_adapter(a.v) : c.network_relay_url && (a.l = new af(c.network_relay_url,a.v));
    k.Yg = !0;
    c.disable_keyboard || (a.j = new Qe(a.v));
    c.disable_mouse || (a.i = new Re(a.v,c.screen_container));
    c.screen_container ? a.h = new Na(c.screen_container,a.v) : c.screen_dummy && (a.h = new df(a.v));
    c.serial_container && (a.Od = new Ze(c.serial_container,a.v));
    c.serial_container_xtermjs && (a.Od = new $e(c.serial_container_xtermjs,a.v));
    c.disable_speaker || new Se(a.v);
    var g = [];
    c.state && console.warn("Warning: Unknown option 'state'. Did you mean 'initial_state'?");
    for (var h = "bios vga_bios cdrom hda hdb fda fdb initial_state multiboot bzimage initrd".split(" "), l = 0; l < h.length; l++)
        e(h[l], c[h[l]]);
    if (c.filesystem) {
        h = c.filesystem.basefs;
        l = c.filesystem.baseurl;
        let p = new ef;
        l && (p = new ff(p,l));
        k.Cb = a.Cb = new ne(p);
        if (h) {
            console.assert(l, "Filesystem: baseurl must be specified");
            if ("object" === typeof h) {
                var m = h.size;
                h = h.url
            }
            g.push({
                name: "fs9p_json",
                url: h,
                size: m,
                td: !0
            })
        }
    }
    var r = g.length
      , t = function(p) {
        if (p === r)
            setTimeout(f.bind(this), 0);
        else {
            var q = g[p];
            q.Yc ? (q.Yc.onload = function() {
                d.call(this, q.name, q.Yc);
                t(p + 1)
            }
            .bind(this),
            q.Yc.load()) : ob(q.url, {
                done: function(w) {
                    d.call(this, q.name, q.td ? w : new xb(w));
                    t(p + 1)
                }
                .bind(this),
                progress: function(w) {
                    200 === w.target.status ? a.Ed.send("download-progress", {
                        ce: p,
                        be: r,
                        de: q.url,
                        lengthComputable: w.lengthComputable,
                        total: w.total || q.size,
                        loaded: w.loaded
                    }) : a.Ed.send("download-error", {
                        ce: p,
                        be: r,
                        de: q.url,
                        request: w.target
                    })
                },
                td: q.td
            })
        }
    }
    .bind(a);
    t(0)
}
function cf(a) {
    const b = (Ne(a, "/") || []).map(e=>"/" + e);
    a = (Ne(a, "/boot/") || []).map(e=>"/boot/" + e);
    let c, d;
    for (let e of [].concat(b, a)) {
        const f = /old/i.test(e) || /fallback/i.test(e)
          , k = /initrd/i.test(e) || /initramfs/i.test(e);
        !/vmlinuz/i.test(e) && !/bzimage/i.test(e) || d && f || (d = e);
        !k || c && f || (c = e)
    }
    c && d || (console.log("Failed to find bzimage or initrd in filesystem. Files:"),
    console.log(b.join(" ")),
    console.log(a.join(" ")));
    return {
        Fd: c,
        lc: d
    }
}
n = Pa.prototype;
n.Te = function() {
    this.v.send("cpu-run")
}
;
n.stop = function() {
    this.v.send("cpu-stop")
}
;
n.za = function() {
    this.stop();
    this.g.za();
    this.j && this.j.za();
    this.l && this.l.za();
    this.i && this.i.za();
    this.h && this.h.za();
    this.Od && this.Od.za()
}
;
n.pf = function() {
    this.v.send("cpu-restart")
}
;
n.add_listener = function(a, b) {
    this.v.register(a, b, this)
}
;
n.serial0_send = function(a) {
    for (var b = 0; b < a.length; b++)
        this.v.send("serial0-input", a.charCodeAt(b))
}
;

n.restore_state = function(a) {
    this.g.Md(a)
}
;

function Qa(a, b, c) {
    a.v.register(b, c, a)
}
n.Md = function(a) {
    this.g.Md(a)
}
;
n.ne = function(a) {
    setTimeout(function() {
        try {
            a(null, this.g.ne())
        } catch (b) {
            a(b, null)
        }
    }
    .bind(this), 0)
}
;
function Sa(a, b) {
    for (var c = 0; c < b.length; c++)
        a.v.send("keyboard-code", b[c])
}
function Oa(a, b) {
    for (var c = 0; c < b.length; c++)
        a.j.dj(b[c])
}
function Wa() {
    var a = document.body
      , b = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock;
    b && b.call(a)
}
function Ya(a, b, c) {
    var d = d || function() {}
    ;
    if (a = a.Cb) {
        var e = b.split("/");
        e = e[e.length - 1];
        b = Ie(a, b).kf;
        "" !== e && -1 !== b ? ye(a, e, b, c).then(()=>d(null)) : setTimeout(function() {
            d(new gf)
        }, 0)
    }
}
n.me = function(a, b) {
    var c = this.Cb;
    c && c.me(a).then(d=>{
        d ? b(null, d) : b(new gf, null)
    }
    )
}
;
function gf() {
    this.message = "File not found"
}
gf.prototype = Error.prototype;
"undefined" !== typeof window ? (window.V86Starter = Pa,
window.V86 = Pa) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.V86Starter = Pa,
module.exports.V86 = Pa) : "function" === typeof importScripts && (self.V86Starter = Pa,
self.V86 = Pa);
function df(a) {
    var b, c, d, e, f, k, g;
    this.v = a;
    a.register("screen-set-mode", function(h) {
        this.rf(h)
    }, this);
    a.register("screen-fill-buffer-end", function(h) {
        this.xf(h[0])
    }, this);
    a.register("screen-put-char", function(h) {
        this.mf(h[0], h[1], h[2], h[3], h[4])
    }, this);
    a.register("screen-text-scroll", function(h) {
        console.log("scroll", h)
    }, this);
    a.register("screen-update-cursor", function(h) {
        this.qd(h[0], h[1])
    }, this);
    a.register("screen-update-cursor-scanline", function(h) {
        this.rd(h[0], h[1])
    }, this);
    a.register("screen-set-size-text", function(h) {
        this.md(h[0], h[1])
    }, this);
    a.register("screen-set-size-graphical", function(h) {
        this.ld(h[0], h[1])
    }, this);
    this.mf = function(h, l, m, r, t) {
        h < g && l < k && (h = 3 * (h * k + l),
        f[h] = m,
        f[h + 1] = r,
        f[h + 2] = t)
    }
    ;
    this.za = function() {}
    ;
    this.rf = function() {}
    ;
    this.Ff = function() {}
    ;
    this.md = function(h, l) {
        if (h !== k || l !== g)
            f = new Int32Array(h * l * 3),
            k = h,
            g = l
    }
    ;
    this.ld = function(h, l) {
        b = new Uint8Array(4 * h * l);
        c = new Int32Array(b.buffer);
        this.v.send("screen-tell-buffer", [c], [c.buffer])
    }
    ;
    this.sf = function() {}
    ;
    this.rd = function() {}
    ;
    this.qd = function(h, l) {
        if (h !== d || l !== e)
            d = h,
            e = l
    }
    ;
    this.xf = function() {}
}
;const Ra = {
    fj: function(a) {
        return Ra.Ti(a) + Ra.Si(a)
    },
    Ti: function(a) {
        let b = "";
        var c = "COMPILE COMPILE_SKIPPED_NO_NEW_ENTRY_POINTS COMPILE_SUCCESS COMPILE_WRONG_ADDRESS_SPACE COMPILE_CUT_OFF_AT_END_OF_PAGE COMPILE_WITH_LOOP_SAFETY COMPILE_PAGE COMPILE_PAGE/COMPILE_SUCCESS COMPILE_PAGE_SKIPPED_NO_NEW_ENTRY_POINTS COMPILE_BASIC_BLOCK COMPILE_DUPLICATED_BASIC_BLOCK COMPILE_WASM_BLOCK COMPILE_WASM_LOOP COMPILE_DISPATCHER COMPILE_ENTRY_POINT COMPILE_WASM_TOTAL_BYTES COMPILE_WASM_TOTAL_BYTES/COMPILE_PAGE JIT_CACHE_OVERRIDE JIT_CACHE_OVERRIDE_DIFFERENT_STATE_FLAGS RUN_INTERPRETED RUN_INTERPRETED_PENDING RUN_INTERPRETED_NEAR_END_OF_PAGE RUN_INTERPRETED_DIFFERENT_STATE RUN_INTERPRETED_MISSED_COMPILED_ENTRY_RUN_INTERPRETED RUN_INTERPRETED_MISSED_COMPILED_ENTRY_LOOKUP RUN_INTERPRETED_STEPS RUN_FROM_CACHE RUN_FROM_CACHE_STEPS RUN_FROM_CACHE_STEPS/RUN_FROM_CACHE RUN_FROM_CACHE_STEPS/RUN_INTERPRETED_STEPS DIRECT_EXIT INDIRECT_JUMP INDIRECT_JUMP_NO_ENTRY NORMAL_PAGE_CHANGE NORMAL_FALLTHRU NORMAL_FALLTHRU_WITH_TARGET_BLOCK NORMAL_BRANCH NORMAL_BRANCH_WITH_TARGET_BLOCK CONDITIONAL_JUMP CONDITIONAL_JUMP_PAGE_CHANGE CONDITIONAL_JUMP_EXIT CONDITIONAL_JUMP_FALLTHRU CONDITIONAL_JUMP_FALLTHRU_WITH_TARGET_BLOCK CONDITIONAL_JUMP_BRANCH CONDITIONAL_JUMP_BRANCH_WITH_TARGET_BLOCK DISPATCHER_SMALL DISPATCHER_LARGE LOOP LOOP_SAFETY CONDITION_OPTIMISED CONDITION_UNOPTIMISED FAILED_PAGE_CHANGE SAFE_READ_FAST SAFE_READ_SLOW_PAGE_CROSSED SAFE_READ_SLOW_NOT_VALID SAFE_READ_SLOW_NOT_USER SAFE_READ_SLOW_IN_MAPPED_RANGE SAFE_WRITE_FAST SAFE_WRITE_SLOW_PAGE_CROSSED SAFE_WRITE_SLOW_NOT_VALID SAFE_WRITE_SLOW_NOT_USER SAFE_WRITE_SLOW_IN_MAPPED_RANGE SAFE_WRITE_SLOW_READ_ONLY SAFE_WRITE_SLOW_HAS_CODE SAFE_READ_WRITE_FAST SAFE_READ_WRITE_SLOW_PAGE_CROSSED SAFE_READ_WRITE_SLOW_NOT_VALID SAFE_READ_WRITE_SLOW_NOT_USER SAFE_READ_WRITE_SLOW_IN_MAPPED_RANGE SAFE_READ_WRITE_SLOW_READ_ONLY SAFE_READ_WRITE_SLOW_HAS_CODE PAGE_FAULT TLB_MISS DO_RUN DO_MANY_CYCLES CYCLE_INTERNAL INVALIDATE_ALL_MODULES_NO_FREE_WASM_INDICES INVALIDATE_MODULE_WRITTEN_WHILE_COMPILED INVALIDATE_MODULE_UNUSED_AFTER_OVERWRITE INVALIDATE_MODULE_DIRTY_PAGE INVALIDATE_PAGE_HAD_CODE INVALIDATE_PAGE_HAD_ENTRY_POINTS DIRTY_PAGE_DID_NOT_HAVE_CODE RUN_FROM_CACHE_EXIT_SAME_PAGE RUN_FROM_CACHE_EXIT_NEAR_END_OF_PAGE RUN_FROM_CACHE_EXIT_DIFFERENT_PAGE CLEAR_TLB FULL_CLEAR_TLB TLB_FULL TLB_GLOBAL_FULL MODRM_SIMPLE_REG MODRM_SIMPLE_REG_WITH_OFFSET MODRM_SIMPLE_CONST_OFFSET MODRM_COMPLEX SEG_OFFSET_OPTIMISED SEG_OFFSET_NOT_OPTIMISED".split(" ")
          , d = 0;
        const e = {};
        for (let k = 0; k < c.length; k++) {
            const g = c[k];
            var f = void 0;
            if (g.includes("/")) {
                d++;
                const [h,l] = g.split("/");
                f = e[h] / e[l]
            } else
                f = e[g] = a.va.exports.profiler_stat_get(k - d),
                f = 1E8 <= f ? Math.round(f / 1E6) + "m" : 1E5 <= f ? Math.round(f / 1E3) + "k" : f;
            b += g + "=" + f + "\n"
        }
        b += "\n";
        c = a.va.exports.get_valid_tlb_entries_count();
        d = a.va.exports.get_valid_global_tlb_entries_count();
        b = b + ("TLB_ENTRIES=" + c + " (" + d + " global, " + (c - d) + " non-global)\nWASM_TABLE_FREE=") + (a.va.exports.jit_get_wasm_table_index_free_list_count() + "\n");
        b += "JIT_CACHE_SIZE=" + a.va.exports.jit_get_cache_size() + "\n";
        b += "FLAT_SEGMENTS=" + a.va.exports.has_flat_segmentation() + "\n";
        b += "do_many_cycles avg: " + (a.Hj / a.Gj || 0) + "\n";
        b += "wasm memory size: " + (a.ic.buffer.byteLength >> 20) + "m\n";
        b = b + "Config:\nMAX_PAGES=" + (a.va.exports.get_config(0) + "\n");
        b += "JIT_USE_LOOP_SAFETY=" + a.va.exports.get_config(1) + "\n";
        return b += "MAX_EXTRA_BASIC_BLOCKS=" + a.va.exports.get_config(2) + "\n"
    },
    Si: function(a) {
        return [Ra.je(a, !1, !1, !1, !1), Ra.je(a, !0, !1, !1, !1), Ra.je(a, !1, !0, !1, !1), Ra.je(a, !1, !1, !0, !1), Ra.je(a, !1, !1, !1, !0)].join("\n\n")
    },
    je: function(a, b, c, d, e) {
        let f = "";
        var k = []
          , g = b ? "compiled" : c ? "jit exit" : d ? "unguarded register" : e ? "wasm size" : "executed";
        for (let m = 0; 256 > m; m++)
            for (let r = 0; 8 > r; r++)
                for (let t of [!1, !0]) {
                    var h = a.va.exports.get_opstats_buffer(b, c, d, e, m, !1, t, r);
                    k.push({
                        Me: m,
                        count: h,
                        Xf: t,
                        Pf: r
                    });
                    h = a.va.exports.get_opstats_buffer(b, c, d, e, m, !0, t, r);
                    k.push({
                        Me: 3840 | m,
                        count: h,
                        Xf: t,
                        Pf: r
                    })
                }
        a = 0;
        b = new Set([38, 46, 54, 62, 100, 101, 102, 103, 240, 242, 243]);
        for (let {count: m, Me: r} of k)
            b.has(r) || (a += m);
        if (0 === a)
            return "";
        c = new Uint32Array(256);
        b = new Uint32Array(256);
        for (let {Me: m, count: r} of k)
            3840 == (m & 65280) ? b[m & 255] += r : c[m & 255] += r;
        f = f + "------------------\nTotal: " + (a + "\n");
        const l = 1E7 < a ? 1E3 : 1;
        d = Math.max.apply(Math, k.map(({count: m})=>Math.round(m / l)));
        d = String(d).length;
        f += `Instruction counts ${g} (in ${l}):\n`;
        for (e = 0; 256 > e; e++)
            f += ub(e, 2).slice(2) + ":" + tb(Math.round(c[e] / l), d),
            f = 15 == e % 16 ? f + "\n" : f + " ";
        f = f + "\n" + `Instruction counts ${g} (0f, in ${l}):\n`;
        for (g = 0; 256 > g; g++)
            f += ub(g & 255, 2).slice(2) + ":" + tb(Math.round(b[g] / l), d),
            f = 15 == g % 16 ? f + "\n" : f + " ";
        f += "\n";
        k = k.filter(({count: m})=>m).sort(({count: m},{count: r})=>r - m);
        for (let {Me: m, Xf: r, Pf: t, count: p} of k.slice(0, 200))
            f += m.toString(16) + "_" + t + (r ? "_m" : "_r") + ":" + (p / a * 100).toFixed(2) + " ";
        return f + "\n"
    }
};
"undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports.print_stats = Ra);
function ef() {
    this.h = new Map
}
ef.prototype.read = async function(a, b, c) {
    return (a = this.h.get(a)) ? a.subarray(b, b + c) : null
}
;
ef.prototype.cache = async function(a, b) {
    this.h.set(a, b)
}
;
ef.prototype.g = function(a) {
    this.h.delete(a)
}
;
function ff(a, b) {
    this.h = a;
    this.i = b
}
function hf(a, b) {
    return new Promise(c=>{
        ob(a.i + b, {
            done: d=>{
                const e = new Uint8Array(d);
                a.cache(b, e).then(()=>c(e))
            }
        })
    }
    )
}
ff.prototype.read = async function(a, b, c) {
    const d = await this.h.read(a, b, c);
    return d ? d : (await hf(this, a)).subarray(b, b + c)
}
;
ff.prototype.cache = async function(a, b) {
    return await this.h.cache(a, b)
}
;
ff.prototype.g = function(a) {
    this.h.g(a)
}
;
"undefined" !== typeof window ? (window.MemoryFileStorage = ef,
window.ServerFileStorageWrapper = ff) : "undefined" !== typeof module && "undefined" !== typeof module.exports ? (module.exports.MemoryFileStorage = ef,
module.exports.ServerFileStorageWrapper = ff) : "function" === typeof importScripts && (self.MemoryFileStorage = ef,
self.ServerFileStorageWrapper = ff);

