(function() {
	var h = {},
		mt = {},
		c = {
			id: "e422443978851cab4a6061bd00774795",
			dm: ["moulem.com"],
			js: "tongji.baidu.com/hm-web/js/",
			etrk: [],
			icon: '',
			ctrk: false,
			align: -1,
			nv: -1,
			vdur: 1800000,
			age: 31536000000,
			rec: 0,
			rp: [],
			trust: 0,
			vcard: 0,
			qiao: 0,
			lxb: 0,
			kbtrk: 0,
			pt: 0,
			conv: 0,
			med: 0,
			cvcc: '',
			cvcf: [],
			apps: ''
		};
	var q = void 0,
		r = !0,
		t = null,
		u = !1;
	mt.cookie = {};
	mt.cookie.set = function(a, b, d) {
		var f;
		d.I && (f = new Date, f.setTime(f.getTime() + d.I));
		document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (f ? "; expires=" + f.toGMTString() : "") + (d.ib ? "; secure" : "")
	};
	mt.cookie.get = function(a) {
		return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : t
	};
	mt.h = {};
	mt.h.oa = function(a) {
		return document.getElementById(a)
	};
	mt.h.L = function(a, b) {
		var d = [],
			f = [];
		if (!a) return f;
		for (; a.parentNode != t;) {
			for (var g = 0, n = 0, l = a.parentNode.childNodes.length, p = 0; p < l; p++) {
				var e = a.parentNode.childNodes[p];
				if (e.nodeName === a.nodeName && (g++, e === a && (n = g), 0 < n && 1 < g)) break
			}
			if ((l = "" !== a.id) && b) {
				d.unshift("#" + encodeURIComponent(a.id));
				break
			} else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, f.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < g ? "[" + n + "]" : ""));
			a = a.parentNode
		}
		f.push(d.join(">"));
		return f
	};
	mt.h.bb = function(a) {
		return (a = mt.h.L(a, r)) && a.length ? String(a[0]) : ""
	};
	mt.h.ab = function(a) {
		return mt.h.L(a, u)
	};
	mt.h.Za = function(a, b) {
		for (b = b.toUpperCase();
		(a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
		return t
	};
	mt.h.pa = function(a) {
		return 9 === a.nodeType ? a : a.ownerDocument || a.document
	};
	mt.h.$a = function(a) {
		var b = {
			top: 0,
			left: 0
		};
		if (!a) return b;
		var d = mt.h.pa(a).documentElement;
		"undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
		return {
			top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
			left: b.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
		}
	};
	(mt.h.Ga = function() {
		function a() {
			if (!a.B) {
				a.B = r;
				for (var b = 0, d = f.length; b < d; b++) f[b]()
			}
		}
		function b() {
			try {
				document.documentElement.doScroll("left")
			} catch (d) {
				setTimeout(b, 1);
				return
			}
			a()
		}
		var d = u,
			f = [],
			g;
		document.addEventListener ? g = function() {
			document.removeEventListener("DOMContentLoaded", g, u);
			a()
		} : document.attachEvent && (g = function() {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
		});
		(function() {
			if (!d) if (d = r, "complete" === document.readyState) a.B = r;
			else if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, u), window.addEventListener("load", a, u);
			else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", g);
				window.attachEvent("onload", a);
				var f = u;
				try {
					f = window.frameElement == t
				} catch (l) {}
				document.documentElement.doScroll && f && b()
			}
		})();
		return function(b) {
			a.B ? b() : f.push(b)
		}
	}()).B = u;
	mt.event = {};
	mt.event.c = function(a, b, d) {
		a.attachEvent ? a.attachEvent("on" + b, function(b) {
			d.call(a, b)
		}) : a.addEventListener && a.addEventListener(b, d, u)
	};
	mt.event.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = u
	};
	(function() {
		var a = mt.event;
		mt.f = {};
		mt.f.Da = /msie (\d+\.\d+)/i.test(navigator.userAgent);
		mt.f.Ba = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : q;
		mt.f.cookieEnabled = navigator.cookieEnabled;
		mt.f.javaEnabled = navigator.javaEnabled();
		mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
		mt.f.Ia = (window.screen.width || 0) + "x" + (window.screen.height || 0);
		mt.f.colorDepth = window.screen.colorDepth || 0;
		mt.f.M = function() {
			var a;
			a = a || document;
			return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
		};
		mt.f.N = function() {
			var a = document;
			return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
		};
		mt.f.orientation = 0;
		(function() {
			function b() {
				var a = 0;
				window.orientation !== q && (a = window.orientation);
				screen && (screen.orientation && screen.orientation.angle !== q) && (a = screen.orientation.angle);
				mt.f.orientation = a
			}
			b();
			a.c(window, "orientationchange", b)
		})();
		return mt.f
	})();
	mt.l = {};
	mt.l.parse = function() {
		return (new Function('return (" + source + ")'))()
	};
	mt.l.stringify = function() {
		function a(a) {
			/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
				var b = d[a];
				if (b) return b;
				b = a.charCodeAt();
				return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
			}));
			return '"' + a + '"'
		}
		function b(a) {
			return 10 > a ? "0" + a : a
		}
		var d = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};
		return function(d) {
			switch (typeof d) {
			case "undefined":
				return "undefined";
			case "number":
				return isFinite(d) ? String(d) : "null";
			case "string":
				return a(d);
			case "boolean":
				return String(d);
			default:
				if (d === t) return "null";
				if (d instanceof Array) {
					var g = ["["],
						n = d.length,
						l, p, e;
					for (p = 0; p < n; p++) switch (e = d[p], typeof e) {
					case "undefined":
					case "function":
					case "unknown":
						break;
					default:
						l && g.push(","), g.push(mt.l.stringify(e)), l = 1
					}
					g.push("]");
					return g.join("")
				}
				if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
				l = ["{"];
				p = mt.l.stringify;
				for (n in d) if (Object.prototype.hasOwnProperty.call(d, n)) switch (e = d[n], typeof e) {
				case "undefined":
				case "unknown":
				case "function":
					break;
				default:
					g && l.push(","), g = 1, l.push(p(n) + ":" + p(e))
				}
				l.push("}");
				return l.join("")
			}
		}
	}();
	mt.lang = {};
	mt.lang.d = function(a, b) {
		return "[object " + b + "]" === {}.toString.call(a)
	};
	mt.lang.Ea = function() {
		var a = h.b.a.kb;
		return mt.lang.d(a, "Number") && isFinite(a)
	};
	mt.lang.gb = function(a) {
		return mt.lang.d(a, "String")
	};
	mt.lang.k = function(a) {
		return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
	};
	mt.localStorage = {};
	mt.localStorage.D = function() {
		if (!mt.localStorage.g) try {
			mt.localStorage.g = document.createElement("input"), mt.localStorage.g.type = "hidden", mt.localStorage.g.style.display = "none", mt.localStorage.g.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
		} catch (a) {
			return u
		}
		return r
	};
	mt.localStorage.set = function(a, b, d) {
		var f = new Date;
		f.setTime(f.getTime() + d || 31536E6);
		try {
			window.localStorage ? (b = f.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.D() && (mt.localStorage.g.expires = f.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, b), mt.localStorage.g.save(document.location.hostname))
		} catch (g) {}
	};
	mt.localStorage.get = function(a) {
		if (window.localStorage) {
			if (a = window.localStorage.getItem(a)) {
				var b = a.indexOf("|"),
					d = a.substring(0, b) - 0;
				if (d && d > (new Date).getTime()) return a.substring(b + 1)
			}
		} else if (mt.localStorage.D()) try {
			return mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.getAttribute(a)
		} catch (f) {}
		return t
	};
	mt.localStorage.remove = function(a) {
		if (window.localStorage) window.localStorage.removeItem(a);
		else if (mt.localStorage.D()) try {
			mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.removeAttribute(a), mt.localStorage.g.save(document.location.hostname)
		} catch (b) {}
	};
	mt.sessionStorage = {};
	mt.sessionStorage.set = function(a, b) {
		if (window.sessionStorage) try {
			window.sessionStorage.setItem(a, b)
		} catch (d) {}
	};
	mt.sessionStorage.get = function(a) {
		return window.sessionStorage ? window.sessionStorage.getItem(a) : t
	};
	mt.sessionStorage.remove = function(a) {
		window.sessionStorage && window.sessionStorage.removeItem(a)
	};
	mt.aa = {};
	mt.aa.log = function(a, b) {
		var d = new Image,
			f = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
		window[f] = d;
		d.onload = d.onerror = d.onabort = function() {
			d.onload = d.onerror = d.onabort = t;
			d = window[f] = t;
			b && b(a)
		};
		d.src = a
	};
	mt.U = {};
	mt.U.ua = function() {
		var a = "";
		if (navigator.plugins && navigator.mimeTypes.length) {
			var b = navigator.plugins["Shockwave Flash"];
			b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
		} else if (window.ActiveXObject) try {
			if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
		} catch (d) {}
		return a
	};
	mt.U.Ya = function(a, b, d, f, g) {
		return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + f + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + f + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
	};
	mt.url = {};
	mt.url.i = function(a, b) {
		var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
		return d ? d[3] : t
	};
	mt.url.cb = function(a) {
		return (a = a.match(/^(https?:)\/\//)) ? a[1] : t
	};
	mt.url.ra = function(a) {
		return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : t
	};
	mt.url.K = function(a) {
		return (a = mt.url.ra(a)) ? a.replace(/:\d+$/, "") : a
	};
	mt.url.L = function(a) {
		return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : t
	};
	(function() {
		function a() {
			for (var a = u, d = document.getElementsByTagName("script"), f = d.length, f = 100 < f ? 100 : f, g = 0; g < f; g++) {
				var n = d[g].src;
				if (n && 0 === n.indexOf("https://hm.baidu.com/h")) {
					a = r;
					break
				}
			}
			return a
		}
		return h.na = a
	})();
	var A = h.na;
	h.s = {
		eb: "http://tongji.baidu.com/hm-web/welcome/ico",
		$: "hm.baidu.com/hm.gif",
		ea: "tongji.baidu.com",
		ya: "hmmd",
		za: "hmpl",
		Ra: "utm_medium",
		xa: "hmkw",
		Ta: "utm_term",
		va: "hmci",
		Qa: "utm_content",
		Aa: "hmsr",
		Sa: "utm_source",
		wa: "hmcu",
		Pa: "utm_campaign",
		r: 0,
		m: Math.round(+new Date / 1E3),
		F: Math.round(+new Date / 1E3) % 65535,
		protocol: "https:" === document.location.protocol ? "https:" : "http:",
		Q: A() || "https:" === document.location.protocol ? "https:" : "http:",
		fb: 0,
		Va: 6E5,
		Fa: 6E5,
		hb: 5E3,
		Wa: 5,
		Xa: 1024,
		Ua: 1,
		R: 2147483647,
		ba: "kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")
	};
	(function() {
		var a = {
			p: {},
			c: function(a, d) {
				this.p[a] = this.p[a] || [];
				this.p[a].push(d)
			},
			z: function(a, d) {
				this.p[a] = this.p[a] || [];
				for (var f = this.p[a].length, g = 0; g < f; g++) this.p[a][g](d)
			}
		};
		return h.H = a
	})();
	(function() {
		function a(a, f) {
			var g = document.createElement("script");
			g.charset = "utf-8";
			b.d(f, "Function") && (g.readyState ? g.onreadystatechange = function() {
				if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = t, f()
			} : g.onload = function() {
				f()
			});
			g.src = a;
			var n = document.getElementsByTagName("script")[0];
			n.parentNode.insertBefore(g, n)
		}
		var b = mt.lang;
		return h.load = a
	})();
	(function() {
		function a() {
			return function() {
				h.b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.G.sa() + "," + h.G.qa();
				h.b.j()
			}
		}
		function b() {
			clearTimeout(z);
			var a;
			v && (a = "visible" == document[v]);
			x && (a = !document[x]);
			p = "undefined" == typeof a ? r : a;
			if ((!l || !e) && p && k) y = r, m = +new Date;
			else if (l && e && (!p || !k)) y = u, s += +new Date - m;
			l = p;
			e = k;
			z = setTimeout(b, 100)
		}
		function d(a) {
			var k = document,
				m = "";
			if (a in k) m = a;
			else for (var d = ["webkit", "ms", "moz", "o"], b = 0; b < d.length; b++) {
				var s = d[b] + a.charAt(0).toUpperCase() + a.slice(1);
				if (s in k) {
					m = s;
					break
				}
			}
			return m
		}
		function f(a) {
			if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) k = "focus" == a.type || "focusin" == a.type ? r : u, b()
		}
		var g = mt.event,
			n = h.H,
			l = r,
			p = r,
			e = r,
			k = r,
			w = +new Date,
			m = w,
			s = 0,
			y = r,
			v = d("visibilityState"),
			x = d("hidden"),
			z;
		b();
		(function() {
			var a = v.replace(/[vV]isibilityState/, "visibilitychange");
			g.c(document, a, b);
			g.c(window, "pageshow", b);
			g.c(window, "pagehide", b);
			"object" == typeof document.onfocusin ? (g.c(document, "focusin", f), g.c(document, "focusout", f)) : (g.c(window, "focus", f), g.c(window, "blur", f))
		})();
		h.G = {
			sa: function() {
				return +new Date - w
			},
			qa: function() {
				return y ? +new Date - m + s : s
			}
		};
		n.c("pv-b", function() {
			g.c(window, "unload", a())
		});
		return h.G
	})();
	(function() {
		var a = mt.lang,
			b = h.s,
			d = h.load,
			f = {
				Ca: function(g) {
					if ((window._dxt === q || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
						var f = h.b.J();
						d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(f)].join(""), g)
					}
				},
				Oa: function(d) {
					if (a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
				}
			};
		return h.ha = f
	})();
	(function() {
		function a(a, d, m, b) {
			if (!(a === q || d === q || b === q)) {
				if ("" === a) return [d, m, b].join("*");
				a = String(a).split("!");
				for (var e, v = u, x = 0; x < a.length; x++) if (e = a[x].split("*"), String(d) === e[0]) {
					e[1] = m;
					e[2] = b;
					a[x] = e.join("*");
					v = r;
					break
				}
				v || a.push([d, m, b].join("*"));
				return a.join("!")
			}
		}
		function b(a) {
			for (var e in a) if ({}.hasOwnProperty.call(a, e)) {
				var m = a[e];
				d.d(m, "Object") || d.d(m, "Array") ? b(m) : a[e] = String(m)
			}
		}
		var d = mt.lang,
			f = mt.l,
			g = mt.f,
			n = h.s,
			l = h.H,
			p = h.ha,
			e = {
				w: [],
				C: 0,
				Y: u,
				o: {
					V: "",
					page: ""
				},
				init: function() {
					e.e = 0;
					l.c("pv-b", function() {
						e.ia();
						e.la()
					});
					l.c("pv-d", function() {
						e.ma();
						e.o.page = ""
					});
					l.c("stag-b", function() {
						h.b.a.api = e.e || e.C ? e.e + "_" + e.C : "";
						h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), e.o.V, e.o.page].join("!")
					});
					l.c("stag-d", function() {
						h.b.a.api = 0;
						e.e = 0;
						e.C = 0
					})
				},
				ia: function() {
					var a = window._hmt || [];
					if (!a || d.d(a, "Array")) window._hmt = {
						id: c.id,
						cmd: {},
						push: function() {
							for (var a = window._hmt, k = 0; k < arguments.length; k++) {
								var b = arguments[k];
								d.d(b, "Array") && (a.cmd[a.id].push(b), "_setAccount" === b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
							}
						}
					}, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
				},
				la: function() {
					var a = window._hmt;
					if (a && a.cmd && a.cmd[c.id]) for (var d = a.cmd[c.id], m = /^_track(Event|MobConv|Order|RTEvent)$/, b = 0, f = d.length; b < f; b++) {
						var v = d[b];
						m.test(v[0]) ? e.w.push(v) : e.S(v)
					}
					a.cmd[c.id] = {
						push: e.S
					}
				},
				ma: function() {
					if (0 < e.w.length) for (var a = 0, d = e.w.length; a < d; a++) e.S(e.w[a]);
					e.w = t
				},
				S: function(a) {
					var b = a[0];
					if (e.hasOwnProperty(b) && d.d(e[b], "Function")) e[b](a)
				},
				_setAccount: function(a) {
					1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (e.e |= 1)
				},
				_setAutoPageview: function(a) {
					if (1 < a.length && (a = a[1], u === a || r === a)) e.e |= 2, h.b.X = a
				},
				_trackPageview: function(a) {
					if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
						e.e |= 4;
						h.b.a.et = 0;
						h.b.a.ep = "";
						h.b.a.vl = g.M() + g.N();
						h.b.a.kb = 0;
						h.b.O ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.O = r;
						var b = h.b.a.u,
							d = h.b.a.su;
						h.b.a.u = n.protocol + "//" + document.location.host + a[1];
						e.Y || (h.b.a.su = document.location.href);
						h.b.j();
						h.b.a.u = b;
						h.b.a.su = d
					}
				},
				_trackEvent: function(a) {
					2 < a.length && (e.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = d.k(a[1]) + "*" + d.k(a[2]) + (a[3] ? "*" + d.k(a[3]) : "") + (a[4] ? "*" + d.k(a[4]) : ""), h.b.j())
				},
				_setCustomVar: function(a) {
					if (!(4 > a.length)) {
						var b = a[1],
							m = a[4] || 3;
						if (0 < b && 6 > b && 0 < m && 4 > m) {
							e.C++;
							for (var s = (h.b.a.cv || "*").split("!"), f = s.length; f < b - 1; f++) s.push("*");
							s[b - 1] = m + "*" + d.k(a[2]) + "*" + d.k(a[3]);
							h.b.a.cv = s.join("!");
							a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
							"" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ha("Hm_cv_" + c.id)
						}
					}
				},
				_setUserTag: function(b) {
					if (!(3 > b.length)) {
						var e = d.k(b[1]);
						b = d.k(b[2]);
						if (e !== q && b !== q) {
							var m = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""),
								m = a(m, e, 1, b);
							h.b.setData("Hm_ct_" + c.id, encodeURIComponent(m), c.age)
						}
					}
				},
				_setVisitTag: function(b) {
					if (!(3 > b.length)) {
						var f = d.k(b[1]);
						b = d.k(b[2]);
						if (f !== q && b !== q) {
							var m = e.o.V,
								m = a(m, f, 2, b);
							e.o.V = m
						}
					}
				},
				_setPageTag: function(b) {
					if (!(3 > b.length)) {
						var f = d.k(b[1]);
						b = d.k(b[2]);
						if (f !== q && b !== q) {
							var m = e.o.page,
								m = a(m, f, 3, b);
							e.o.page = m
						}
					}
				},
				_setReferrerOverride: function(a) {
					1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? n.protocol + "//" + window.location.host + a[1] : a[1], e.Y = r)
				},
				_trackOrder: function(a) {
					a = a[1];
					d.d(a, "Object") && (b(a), e.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = f.stringify(a), h.b.j())
				},
				_trackMobConv: function(a) {
					if (a = {
						webim: 1,
						tel: 2,
						map: 3,
						sms: 4,
						callback: 5,
						share: 6
					}[a[1]]) e.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.j()
				},
				_trackRTPageview: function(a) {
					a = a[1];
					d.d(a, "Object") && (b(a), a = f.stringify(a), 512 >= encodeURIComponent(a).length && (e.e |= 64, h.b.a.rt = a))
				},
				_trackRTEvent: function(a) {
					a = a[1];
					if (d.d(a, "Object")) {
						b(a);
						a = encodeURIComponent(f.stringify(a));
						var g = function(a) {
								var b = h.b.a.rt;
								e.e |= 128;
								h.b.a.et = 90;
								h.b.a.rt = a;
								h.b.j();
								h.b.a.rt = b
							},
							m = a.length;
						if (900 >= m) g.call(this, a);
						else for (var m = Math.ceil(m / 900), s = "block|" + Math.round(Math.random() * n.R).toString(16) + "|" + m + "|", l = [], v = 0; v < m; v++) l.push(v), l.push(a.substring(900 * v, 900 * v + 900)), g.call(this, s + l.join("|")), l = []
					}
				},
				_setUserId: function(a) {
					a = a[1];
					p.Ca();
					p.Oa(a)
				}
			};
		e.init();
		h.fa = e;
		return h.fa
	})();
	(function() {
		function a() {
			"undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = r, this.a = {}, this.X = r, this.O = u, this.init())
		}
		var b = mt.url,
			d = mt.aa,
			f = mt.U,
			g = mt.lang,
			n = mt.cookie,
			l = mt.f,
			p = mt.localStorage,
			e = mt.sessionStorage,
			k = h.s,
			w = h.H;
		a.prototype = {
			P: function(a, b) {
				a = "." + a.replace(/:\d+/, "");
				b = "." + b.replace(/:\d+/, "");
				var d = a.indexOf(b);
				return -1 < d && d + b.length === a.length
			},
			Z: function(a, b) {
				a = a.replace(/^https?:\/\//, "");
				return 0 === a.indexOf(b)
			},
			A: function(a) {
				for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
					if (this.Z(a, c.dm[d])) return r
				} else {
					var e = b.K(a);
					if (e && this.P(e, c.dm[d])) return r
				}
				return u
			},
			J: function() {
				for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.P(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
				return a
			},
			W: function() {
				for (var a = 0, b = c.dm.length; a < b; a++) {
					var d = c.dm[a];
					if (-1 < d.indexOf("/") && this.Z(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
				}
				return "/"
			},
			ta: function() {
				if (!document.referrer) return k.m - k.r > c.vdur ? 1 : 4;
				var a = u;
				this.A(document.referrer) && this.A(document.location.href) ? a = r : (a = b.K(document.referrer), a = this.P(a || "", document.location.hostname));
				return a ? k.m - k.r > c.vdur ? 1 : 4 : 3
			},
			getData: function(a) {
				try {
					return n.get(a) || e.get(a) || p.get(a)
				} catch (b) {}
			},
			setData: function(a, b, d) {
				try {
					n.set(a, b, {
						domain: this.J(),
						path: this.W(),
						I: d
					}), d ? p.set(a, b, d) : e.set(a, b)
				} catch (f) {}
			},
			Ha: function(a) {
				try {
					n.set(a, "", {
						domain: this.J(),
						path: this.W(),
						I: -1
					}), e.remove(a), p.remove(a)
				} catch (b) {}
			},
			Ma: function() {
				var a, b, d, e, f;
				k.r = this.getData("Hm_lpvt_" + c.id) || 0;
				13 === k.r.length && (k.r = Math.round(k.r / 1E3));
				b = this.ta();
				a = 4 !== b ? 1 : 0;
				if (d = this.getData("Hm_lvt_" + c.id)) {
					e = d.split(",");
					for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
					for (; 2592E3 < k.m - e[0];) e.shift();
					f = 4 > e.length ? 2 : 3;
					for (1 === a && e.push(k.m); 4 < e.length;) e.shift();
					d = e.join(",");
					e = e[e.length - 1]
				} else d = k.m, e = "", f = 1;
				this.setData("Hm_lvt_" + c.id, d, c.age);
				this.setData("Hm_lpvt_" + c.id, k.m);
				d = k.m === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
				if (0 === c.nv && this.A(document.location.href) && ("" === document.referrer || this.A(document.referrer))) a = 0, b = 4;
				this.a.nv = a;
				this.a.st = b;
				this.a.cc = d;
				this.a.lt = e;
				this.a.lv = f
			},
			La: function() {
				for (var a = [], b = this.a.et, d = 0, e = k.ba.length; d < e; d++) {
					var f = k.ba[d],
						g = this.a[f];
					"undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && (("ct" !== f || "ct" === f && 0 === b) && ("kb" !== f || "kb" === f && 3 === b)) && a.push(f + "=" + encodeURIComponent(g))
				}
				switch (b) {
				case 0:
					a.push("sn=" + k.F);
					this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
					break;
				case 3:
					a.push("sn=" + k.F);
					break;
				case 85:
					a.push("sn=" + k.F);
					break;
				case 90:
					this.a.rt && a.push("rt=" + this.a.rt)
				}
				return a.join("&")
			},
			Na: function() {
				this.Ma();
				this.a.si = c.id;
				this.a.su = document.referrer;
				this.a.ds = l.Ia;
				this.a.cl = l.colorDepth + "-bit";
				this.a.ln = String(l.language).toLowerCase();
				this.a.ja = l.javaEnabled ? 1 : 0;
				this.a.ck = l.cookieEnabled ? 1 : 0;
				this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
				this.a.fl = f.ua();
				this.a.v = "1.2.35";
				this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
				this.a.tt = document.title || "";
				this.a.vl = l.M() + l.N();
				var a = document.location.href;
				this.a.cm = b.i(a, k.ya) || "";
				this.a.cp = b.i(a, k.za) || b.i(a, k.Ra) || "";
				this.a.cw = b.i(a, k.xa) || b.i(a, k.Ta) || "";
				this.a.ci = b.i(a, k.va) || b.i(a, k.Qa) || "";
				this.a.cf = b.i(a, k.Aa) || b.i(a, k.Sa) || "";
				this.a.cu = b.i(a, k.wa) || b.i(a, k.Pa) || ""
			},
			init: function() {
				try {
					this.Na(), 0 === this.a.nv ? this.Ka() : this.T(".*"), h.b = this, this.ga(), w.z("pv-b"), this.Ja()
				} catch (a) {
					var b = [];
					b.push("si=" + c.id);
					b.push("n=" + encodeURIComponent(a.name));
					b.push("m=" + encodeURIComponent(a.message));
					b.push("r=" + encodeURIComponent(document.referrer));
					d.log(k.Q + "//" + k.$ + "?" + b.join("&"))
				}
			},
			Ja: function() {
				function a() {
					w.z("pv-d")
				}
				this.X ? (this.O = r, this.a.et = 0, this.a.ep = "", this.a.vl = l.M() + l.N(), this.j(a)) : a()
			},
			j: function(a) {
				var b = this;
				b.a.rnd = Math.round(Math.random() * k.R);
				w.z("stag-b");
				var e = k.Q + "//" + k.$ + "?" + b.La();
				w.z("stag-d");
				b.da(e);
				d.log(e, function(d) {
					b.T(d);
					g.d(a, "Function") && a.call(b)
				})
			},
			ga: function() {
				var a = document.location.hash.substring(1),
					d = RegExp(c.id),
					e = b.K(document.referrer) === k.ea ? 1 : 0,
					f = b.i(a, "jn"),
					g = /^heatlink$|^select$|^pageclick$/.test(f);
				a && (d.test(a) && e && g) && (this.a.rnd = Math.round(Math.random() * k.R), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
			},
			da: function(a) {
				var b = e.get("Hm_unsent_" + c.id) || "",
					d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
					b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
				e.set("Hm_unsent_" + c.id, b)
			},
			T: function(a) {
				var b = e.get("Hm_unsent_" + c.id) || "";
				b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? e.set("Hm_unsent_" + c.id, b) : e.remove("Hm_unsent_" + c.id))
			},
			Ka: function() {
				var a = this,
					b = e.get("Hm_unsent_" + c.id);
				if (b) for (var b = b.split(","), f = function(b) {
						d.log(k.Q + "//" + decodeURIComponent(b), function(b) {
							a.T(b)
						})
					}, g = 0, l = b.length; g < l; g++) f(b[g])
			}
		};
		return new a
	})();
	(function() {
		var a = mt.event,
			b = mt.lang,
			d = h.s;
		if (c.kbtrk && "undefined" !== typeof h.b) {
			h.b.a.kb = b.Ea() ? h.b.a.kb : 0;
			var f = function() {
					h.b.a.et = 85;
					h.b.a.ep = h.b.a.kb;
					h.b.j()
				};
			a.c(document, "keyup", function() {
				h.b.a.kb++
			});
			a.c(window, "unload", function() {
				f()
			});
			setInterval(f, d.Fa)
		}
	})();
	var B = h.s,
		C = h.load;
	c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
	(function() {
		var a = mt.event,
			b = mt.l;
		try {
			if (window.performance && performance.timing && "undefined" !== typeof h.b) {
				var d = function(a) {
						var b = performance.timing,
							d = b[a + "Start"] ? b[a + "Start"] : 0;
						a = b[a + "End"] ? b[a + "End"] : 0;
						return {
							start: d,
							end: a,
							value: 0 < a - d ? a - d : 0
						}
					},
					f = function() {
						var a;
						a = d("navigation");
						var f = d("request");
						a = {
							netAll: f.start - a.start,
							netDns: d("domainLookup").value,
							netTcp: d("connect").value,
							srv: d("response").start - f.start,
							dom: performance.timing.domInteractive - performance.timing.fetchStart,
							loadEvent: d("loadEvent").end - a.start
						};
						h.b.a.et = 87;
						h.b.a.ep = b.stringify(a);
						h.b.j()
					};
				a.c(window, "load", function() {
					setTimeout(f, 500)
				})
			}
		} catch (g) {}
	})();
	(function() {
		var a = mt.f,
			b = mt.lang,
			d = mt.event,
			f = mt.l;
		if ("undefined" !== typeof h.b && (c.med || (!a.Da || 7 < a.Ba) && c.cvcc)) {
			var g, n, l, p, e = function(a) {
					if (a.item) {
						for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
						return d
					}
					return [].slice.call(a)
				},
				k = function(a, b) {
					for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === u) return u
				},
				w = function(a, d) {
					var e = {};
					e.n = g;
					e.t = "clk";
					e.v = a;
					if (d) {
						var k = d.getAttribute("href"),
							m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : t,
							n = d.getAttribute("id") || "";
						l.test(k) ? (e.sn = "mediate", e.snv = k) : b.d(m, "String") && l.test(m) && (e.sn = "wrap", e.snv = m);
						e.id = n
					}
					h.b.a.et = 86;
					h.b.a.ep = f.stringify(e);
					h.b.j();
					for (e = +new Date; 400 >= +new Date - e;);
				};
			if (c.med) n = "/zoosnet", g = "swt", l = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, p = {
				click: function() {
					for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g = 0, k = b.length; g < k; g++) d = b[g], f = d.getAttribute("onclick"), d = d.getAttribute("href"), (l.test(f) || l.test(d)) && a.push(b[g]);
					return a
				}
			};
			else if (c.cvcc) {
				n = "/other-comm";
				g = "other";
				l = c.cvcc.q || q;
				var m = c.cvcc.id || q;
				p = {
					click: function() {
						for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g, k = 0, n = b.length; k < n; k++) d = b[k], l !== q ? (f = d.getAttribute("onclick"), g = d.getAttribute("href"), m ? (d = d.getAttribute("id"), (l.test(f) || l.test(g) || m.test(d)) && a.push(b[k])) : (l.test(f) || l.test(g)) && a.push(b[k])) : m !== q && (d = d.getAttribute("id"), m.test(d) && a.push(b[k]));
						return a
					}
				}
			}
			if ("undefined" !== typeof p && "undefined" !== typeof l) {
				var s;
				n += /\/$/.test(n) ? "" : "/";
				var y = function(a, d) {
						if (s === d) return w(n + a, d), u;
						if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (s === d[e]) return w(n + a + "/" + (e + 1), d[e]), u
					};
				d.c(document, "mousedown", function(a) {
					a = a || window.event;
					s = a.target || a.srcElement;
					var d = {};
					for (k(p, function(a, e) {
						d[a] = b.d(e, "Function") ? e() : document.getElementById(e)
					}); s && s !== document && k(d, y) !== u;) s = s.parentNode
				})
			}
		}
	})();
	(function() {
		var a = mt.h,
			b = mt.lang,
			d = mt.event,
			f = mt.l;
		if ("undefined" !== typeof h.b && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
			var g = {
				ca: function() {
					for (var b = c.cvcf.length, f, p = 0; p < b; p++)(f = a.oa(decodeURIComponent(c.cvcf[p]))) && d.c(f, "click", g.ka())
				},
				ka: function() {
					return function() {
						h.b.a.et = 86;
						var a = {
							n: "form",
							t: "clk"
						};
						a.id = this.id;
						h.b.a.ep = f.stringify(a);
						h.b.j()
					}
				}
			};
			a.Ga(function() {
				g.ca()
			})
		}
	})();
	(function() {
		var a = mt.event,
			b = mt.l;
		if (c.med && "undefined" !== typeof h.b) {
			var d = +new Date,
				f = {
					n: "anti",
					sb: 0,
					kb: 0,
					clk: 0
				},
				g = function() {
					h.b.a.et = 86;
					h.b.a.ep = b.stringify(f);
					h.b.j()
				};
			a.c(document, "click", function() {
				f.clk++
			});
			a.c(document, "keyup", function() {
				f.kb = 1
			});
			a.c(window, "scroll", function() {
				f.sb++
			});
			a.c(window, "unload", function() {
				f.t = +new Date - d;
				g()
			});
			a.c(window, "load", function() {
				setTimeout(g, 5E3)
			})
		}
	})();
})();
