/* ==============================================
	Menu
=============================================== */
function toggleHandler(e) {
    e.addEventListener("click", function (e) {
        e.preventDefault(),
            this.classList.contains("active") === !0 ? this.classList.remove("active") : this.classList.add("active");
    });
}
$("a.open_close").on("click", function () {
    $(".main-menu").toggleClass("show"), $(".layer").toggleClass("layer-is-visible");
}),
    $("a.show-submenu").on("click", function () {
        $(this).next().toggleClass("show_normal");
    }),
    $("a.show-submenu-mega").on("click", function () {
        $(this).next().toggleClass("show_mega");
    }),
    $(window).width() <= 600 &&
        $("a.open_close").on("click", function () {
            $(".cmn-toggle-switch").removeClass("active");
        });
for (var toggles = document.querySelectorAll(".cmn-toggle-switch"), i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
}

/*!
 * Bootstrap v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery"], e)
        : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }
    function o() {
        return (o =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    function r(t) {
        var n = this,
            i = !1;
        return (
            e(this).one(s.TRANSITION_END, function () {
                i = !0;
            }),
            setTimeout(function () {
                i || s.triggerTransitionEnd(n);
            }, t),
            this
        );
    }
    var s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            e(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend");
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        a =
                            r && s.isElement(r)
                                ? "element"
                                : null === (l = r) || "undefined" == typeof l
                                ? "" + l
                                : {}.toString
                                      .call(l)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(
                            t.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                a +
                                '" but expected type "' +
                                o +
                                '".'
                        );
                }
            var l;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null;
        },
        jQueryDetection: function () {
            if ("undefined" == typeof e)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var t = e.fn.jquery.split(" ")[0].split(".");
            if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        },
    };
    s.jQueryDetection(),
        (e.fn.emulateTransitionEnd = r),
        (e.event.special[s.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            },
        });
    var a = "alert",
        l = e.fn[a],
        c = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.alert"), (this._element = null);
                }),
                (n._getRootElement = function (t) {
                    var n = s.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
                }),
                (n._triggerCloseEvent = function (t) {
                    var n = e.Event("close.bs.alert");
                    return e(t).trigger(n), n;
                }),
                (n._removeElement = function (t) {
                    var n = this;
                    if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                        var i = s.getTransitionDurationFromElement(t);
                        e(t)
                            .one(s.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e);
                            })
                            .emulateTransitionEnd(i);
                    } else this._destroyElement(t);
                }),
                (n._destroyElement = function (t) {
                    e(t).detach().trigger("closed.bs.alert").remove();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.alert");
                        o || ((o = new t(this)), i.data("bs.alert", o)), "close" === n && o[n](this);
                    });
                }),
                (t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c())),
        (e.fn[a] = c._jQueryInterface),
        (e.fn[a].Constructor = c),
        (e.fn[a].noConflict = function () {
            return (e.fn[a] = l), c._jQueryInterface;
        });
    var h = e.fn.button,
        u = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var o = this._element.querySelector('input:not([type="hidden"])');
                        if (o) {
                            if ("radio" === o.type)
                                if (o.checked && this._element.classList.contains("active")) t = !1;
                                else {
                                    var r = i.querySelector(".active");
                                    r && e(r).removeClass("active");
                                }
                            t &&
                                (("checkbox" !== o.type && "radio" !== o.type) ||
                                    (o.checked = !this._element.classList.contains("active")),
                                e(o).trigger("change")),
                                o.focus(),
                                (n = !1);
                        }
                    }
                    this._element.hasAttribute("disabled") ||
                        this._element.classList.contains("disabled") ||
                        (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
                        t && e(this._element).toggleClass("active"));
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.button"), (this._element = null);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.button");
                        i || ((i = new t(this)), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = t.target,
                i = n;
            if (
                (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
                !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
            )
                t.preventDefault();
            else {
                var o = n.querySelector('input:not([type="hidden"])');
                if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
                ("LABEL" !== i.tagName || (o && "checkbox" !== o.type)) && u._jQueryInterface.call(e(n), "toggle");
            }
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
            var n = e(t.target).closest(".btn")[0];
            e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
        }),
        e(window).on("load.bs.button.data-api", function () {
            for (
                var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length;
                e < n;
                e++
            ) {
                var i = t[e],
                    o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
            }
            for (
                var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;
                r < s;
                r++
            ) {
                var a = t[r];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
            }
        }),
        (e.fn.button = u._jQueryInterface),
        (e.fn.button.Constructor = u),
        (e.fn.button.noConflict = function () {
            return (e.fn.button = h), u._jQueryInterface;
        });
    var f = "carousel",
        d = ".bs.carousel",
        p = e.fn[f],
        m = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        g = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        _ = { TOUCH: "touch", PEN: "pen" },
        v = (function () {
            function t(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                    this._addEventListeners();
            }
            var n = t.prototype;
            return (
                (n.next = function () {
                    this._isSliding || this._slide("next");
                }),
                (n.nextWhenVisible = function () {
                    !document.hidden &&
                        e(this._element).is(":visible") &&
                        "hidden" !== e(this._element).css("visibility") &&
                        this.next();
                }),
                (n.prev = function () {
                    this._isSliding || this._slide("prev");
                }),
                (n.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(".carousel-item-next, .carousel-item-prev") &&
                            (s.triggerTransitionEnd(this._element), this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (n.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval &&
                            !this._isPaused &&
                            (this._interval = setInterval(
                                (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                                this._config.interval
                            ));
                }),
                (n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            e(this._element).one("slid.bs.carousel", function () {
                                return n.to(t);
                            });
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var o = t > i ? "next" : "prev";
                            this._slide(o, this._items[t]);
                        }
                }),
                (n.dispose = function () {
                    e(this._element).off(d),
                        e.removeData(this._element, "bs.carousel"),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, m, t)), s.typeCheckConfig(f, t, g), t;
                }),
                (n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
                    }
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard &&
                        e(this._element).on("keydown.bs.carousel", function (e) {
                            return t._keydown(e);
                        }),
                        "hover" === this._config.pause &&
                            e(this._element)
                                .on("mouseenter.bs.carousel", function (e) {
                                    return t.pause(e);
                                })
                                .on("mouseleave.bs.carousel", function (e) {
                                    return t.cycle(e);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                                t._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()]
                                    ? (t.touchStartX = e.originalEvent.clientX)
                                    : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                            },
                            i = function (e) {
                                t._pointerEvent &&
                                    _[e.originalEvent.pointerType.toUpperCase()] &&
                                    (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause &&
                                        (t.pause(),
                                        t.touchTimeout && clearTimeout(t.touchTimeout),
                                        (t.touchTimeout = setTimeout(function (e) {
                                            return t.cycle(e);
                                        }, 500 + t._config.interval)));
                            };
                        e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                            return t.preventDefault();
                        }),
                            this._pointerEvent
                                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("pointerup.bs.carousel", function (t) {
                                      return i(t);
                                  }),
                                  this._element.classList.add("pointer-event"))
                                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                                      return n(t);
                                  }),
                                  e(this._element).on("touchmove.bs.carousel", function (e) {
                                      return (function (e) {
                                          e.originalEvent.touches && e.originalEvent.touches.length > 1
                                              ? (t.touchDeltaX = 0)
                                              : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                                      })(e);
                                  }),
                                  e(this._element).on("touchend.bs.carousel", function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (n._getItemIndex = function (t) {
                    return (
                        (this._items =
                            t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []),
                        this._items.indexOf(t)
                    );
                }),
                (n._getItemByDirection = function (t, e) {
                    var n = "next" === t,
                        i = "prev" === t,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                    var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }),
                (n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t),
                        o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        r = e.Event("slide.bs.carousel", { relatedTarget: t, direction: n, from: o, to: i });
                    return e(this._element).trigger(r), r;
                }),
                (n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        e(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass("active");
                    }
                }),
                (n._slide = function (t, n) {
                    var i,
                        o,
                        r,
                        a = this,
                        l = this._element.querySelector(".active.carousel-item"),
                        c = this._getItemIndex(l),
                        h = n || (l && this._getItemByDirection(t, l)),
                        u = this._getItemIndex(h),
                        f = Boolean(this._interval);
                    if (
                        ("next" === t
                            ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (r = "left"))
                            : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (r = "right")),
                        h && e(h).hasClass("active"))
                    )
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
                        (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(h);
                        var d = e.Event("slid.bs.carousel", { relatedTarget: h, direction: r, from: c, to: u });
                        if (e(this._element).hasClass("slide")) {
                            e(h).addClass(o), s.reflow(h), e(l).addClass(i), e(h).addClass(i);
                            var p = parseInt(h.getAttribute("data-interval"), 10);
                            p
                                ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
                                  (this._config.interval = p))
                                : (this._config.interval = this._config.defaultInterval || this._config.interval);
                            var m = s.getTransitionDurationFromElement(l);
                            e(l)
                                .one(s.TRANSITION_END, function () {
                                    e(h)
                                        .removeClass(i + " " + o)
                                        .addClass("active"),
                                        e(l).removeClass("active " + o + " " + i),
                                        (a._isSliding = !1),
                                        setTimeout(function () {
                                            return e(a._element).trigger(d);
                                        }, 0);
                                })
                                .emulateTransitionEnd(m);
                        } else
                            e(l).removeClass("active"),
                                e(h).addClass("active"),
                                (this._isSliding = !1),
                                e(this._element).trigger(d);
                        f && this.cycle();
                    }
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.carousel"),
                            r = o({}, m, e(this).data());
                        "object" == typeof n && (r = o({}, r, n));
                        var s = "string" == typeof n ? n : r.slide;
                        if ((i || ((i = new t(this, r)), e(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                        else if ("string" == typeof s) {
                            if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                            i[s]();
                        } else r.interval && r.ride && (i.pause(), i.cycle());
                    });
                }),
                (t._dataApiClickHandler = function (n) {
                    var i = s.getSelectorFromElement(this);
                    if (i) {
                        var r = e(i)[0];
                        if (r && e(r).hasClass("carousel")) {
                            var a = o({}, e(r).data(), e(this).data()),
                                l = this.getAttribute("data-slide-to");
                            l && (a.interval = !1),
                                t._jQueryInterface.call(e(r), a),
                                l && e(r).data("bs.carousel").to(l),
                                n.preventDefault();
                        }
                    }
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return m;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler),
        e(window).on("load.bs.carousel.data-api", function () {
            for (
                var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length;
                n < i;
                n++
            ) {
                var o = e(t[n]);
                v._jQueryInterface.call(o, o.data());
            }
        }),
        (e.fn[f] = v._jQueryInterface),
        (e.fn[f].Constructor = v),
        (e.fn[f].noConflict = function () {
            return (e.fn[f] = p), v._jQueryInterface;
        });
    var b = "collapse",
        y = e.fn[b],
        w = { toggle: !0, parent: "" },
        E = { toggle: "boolean", parent: "(string|element)" },
        T = (function () {
            function t(t, e) {
                (this._isTransitioning = !1),
                    (this._element = t),
                    (this._config = this._getConfig(e)),
                    (this._triggerArray = [].slice.call(
                        document.querySelectorAll(
                            '[data-toggle="collapse"][href="#' +
                                t.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                t.id +
                                '"]'
                        )
                    ));
                for (
                    var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length;
                    i < o;
                    i++
                ) {
                    var r = n[i],
                        a = s.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
                            return e === t;
                        });
                    null !== a && l.length > 0 && ((this._selector = a), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle();
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    e(this._element).hasClass("show") ? this.hide() : this.show();
                }),
                (n.show = function () {
                    var n,
                        i,
                        o = this;
                    if (
                        !this._isTransitioning &&
                        !e(this._element).hasClass("show") &&
                        (this._parent &&
                            0 ===
                                (n = [].slice
                                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                                    .filter(function (t) {
                                        return "string" == typeof o._config.parent
                                            ? t.getAttribute("data-parent") === o._config.parent
                                            : t.classList.contains("collapse");
                                    })).length &&
                            (n = null),
                        !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))
                    ) {
                        var r = e.Event("show.bs.collapse");
                        if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                            n &&
                                (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                                i || e(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            e(this._element).removeClass("collapse").addClass("collapsing"),
                                (this._element.style[a] = 0),
                                this._triggerArray.length &&
                                    e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                c = s.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    e(o._element).removeClass("collapsing").addClass("collapse show"),
                                        (o._element.style[a] = ""),
                                        o.setTransitioning(!1),
                                        e(o._element).trigger("shown.bs.collapse");
                                })
                                .emulateTransitionEnd(c),
                                (this._element.style[a] = this._element[l] + "px");
                        }
                    }
                }),
                (n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass("show")) {
                        var n = e.Event("hide.bs.collapse");
                        if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                            var i = this._getDimension();
                            (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"),
                                s.reflow(this._element),
                                e(this._element).addClass("collapsing").removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var r = 0; r < o; r++) {
                                    var a = this._triggerArray[r],
                                        l = s.getSelectorFromElement(a);
                                    if (null !== l)
                                        e([].slice.call(document.querySelectorAll(l))).hasClass("show") ||
                                            e(a).addClass("collapsed").attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var c = s.getTransitionDurationFromElement(this._element);
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    t.setTransitioning(!1),
                                        e(t._element)
                                            .removeClass("collapsing")
                                            .addClass("collapse")
                                            .trigger("hidden.bs.collapse");
                                })
                                .emulateTransitionEnd(c);
                        }
                    }
                }),
                (n.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (n._getConfig = function (t) {
                    return ((t = o({}, w, t)).toggle = Boolean(t.toggle)), s.typeCheckConfig(b, t, E), t;
                }),
                (n._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height";
                }),
                (n._getParent = function () {
                    var n,
                        i = this;
                    s.isElement(this._config.parent)
                        ? ((n = this._config.parent),
                          "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0]))
                        : (n = document.querySelector(this._config.parent));
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(n.querySelectorAll(o));
                    return (
                        e(r).each(function (e, n) {
                            i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                        }),
                        n
                    );
                }),
                (n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass("show");
                    n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
                }),
                (t._getTargetFromElement = function (t) {
                    var e = s.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            r = i.data("bs.collapse"),
                            s = o({}, w, i.data(), "object" == typeof n && n ? n : {});
                        if (
                            (!r && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1),
                            r || ((r = new t(this, s)), i.data("bs.collapse", r)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return w;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
            i = s.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        e(o).each(function () {
            var t = e(this),
                i = t.data("bs.collapse") ? "toggle" : n.data();
            T._jQueryInterface.call(t, i);
        });
    }),
        (e.fn[b] = T._jQueryInterface),
        (e.fn[b].Constructor = T),
        (e.fn[b].noConflict = function () {
            return (e.fn[b] = y), T._jQueryInterface;
        });
    var C = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        S = (function () {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (C && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0;
        })();
    var D =
        C && window.Promise
            ? function (t) {
                  var e = !1;
                  return function () {
                      e ||
                          ((e = !0),
                          window.Promise.resolve().then(function () {
                              (e = !1), t();
                          }));
                  };
              }
            : function (t) {
                  var e = !1;
                  return function () {
                      e ||
                          ((e = !0),
                          setTimeout(function () {
                              (e = !1), t();
                          }, S));
                  };
              };
    function N(t) {
        return t && "[object Function]" === {}.toString.call(t);
    }
    function k(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
    }
    function A(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }
    function I(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body;
        }
        var e = k(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : I(A(t));
    }
    function O(t) {
        return t && t.referenceNode ? t.referenceNode : t;
    }
    var x = C && !(!window.MSInputMethodContext || !document.documentMode),
        j = C && /MSIE 10/.test(navigator.userAgent);
    function L(t) {
        return 11 === t ? x : 10 === t ? j : x || j;
    }
    function P(t) {
        if (!t) return document.documentElement;
        for (var e = L(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === k(n, "position")
                ? P(n)
                : n
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
    }
    function F(t) {
        return null !== t.parentNode ? F(t.parentNode) : t;
    }
    function R(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s,
            a,
            l = r.commonAncestorContainer;
        if ((t !== l && e !== l) || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || ("HTML" !== a && P(s.firstElementChild) !== s) ? P(l) : l;
        var c = F(t);
        return c.host ? R(c.host, e) : R(t, F(e).host);
    }
    function H(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement,
                r = t.ownerDocument.scrollingElement || o;
            return r[n];
        }
        return t[n];
    }
    function M(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = H(e, "top"),
            o = H(e, "left"),
            r = n ? -1 : 1;
        return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
    }
    function B(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
    }
    function q(t, e, n, i) {
        return Math.max(
            e["offset" + t],
            e["scroll" + t],
            n["client" + t],
            n["offset" + t],
            n["scroll" + t],
            L(10)
                ? parseInt(n["offset" + t]) +
                      parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
                      parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
                : 0
        );
    }
    function Q(t) {
        var e = t.body,
            n = t.documentElement,
            i = L(10) && getComputedStyle(n);
        return { height: q("Height", e, n, i), width: q("Width", e, n, i) };
    }
    var W = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        },
        U = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            };
        })(),
        V = function (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                    : (t[e] = n),
                t
            );
        },
        Y =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            };
    function z(t) {
        return Y({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }
    function X(t) {
        var e = {};
        try {
            if (L(10)) {
                e = t.getBoundingClientRect();
                var n = H(t, "top"),
                    i = H(t, "left");
                (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } else e = t.getBoundingClientRect();
        } catch (t) {}
        var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? Q(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.width,
            a = r.height || t.clientHeight || o.height,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var h = k(t);
            (l -= B(h, "x")), (c -= B(h, "y")), (o.width -= l), (o.height -= c);
        }
        return z(o);
    }
    function K(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = L(10),
            o = "HTML" === e.nodeName,
            r = X(t),
            s = X(e),
            a = I(t),
            l = k(e),
            c = parseFloat(l.borderTopWidth),
            h = parseFloat(l.borderLeftWidth);
        n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
        var u = z({ top: r.top - s.top - c, left: r.left - s.left - h, width: r.width, height: r.height });
        if (((u.marginTop = 0), (u.marginLeft = 0), !i && o)) {
            var f = parseFloat(l.marginTop),
                d = parseFloat(l.marginLeft);
            (u.top -= c - f),
                (u.bottom -= c - f),
                (u.left -= h - d),
                (u.right -= h - d),
                (u.marginTop = f),
                (u.marginLeft = d);
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = M(u, e)), u;
    }
    function G(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = K(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : H(n),
            a = e ? 0 : H(n, "left"),
            l = { top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r };
        return z(l);
    }
    function $(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === k(t, "position")) return !0;
        var n = A(t);
        return !!n && $(n);
    }
    function J(t) {
        if (!t || !t.parentElement || L()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === k(e, "transform"); ) e = e.parentElement;
        return e || document.documentElement;
    }
    function Z(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? J(t) : R(t, O(e));
        if ("viewport" === i) r = G(s, o);
        else {
            var a = void 0;
            "scrollParent" === i
                ? "BODY" === (a = I(A(e))).nodeName && (a = t.ownerDocument.documentElement)
                : (a = "window" === i ? t.ownerDocument.documentElement : i);
            var l = K(a, s, o);
            if ("HTML" !== a.nodeName || $(s)) r = l;
            else {
                var c = Q(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                (r.top += l.top - l.marginTop),
                    (r.bottom = h + l.top),
                    (r.left += l.left - l.marginLeft),
                    (r.right = u + l.left);
            }
        }
        var f = "number" == typeof (n = n || 0);
        return (
            (r.left += f ? n : n.left || 0),
            (r.top += f ? n : n.top || 0),
            (r.right -= f ? n : n.right || 0),
            (r.bottom -= f ? n : n.bottom || 0),
            r
        );
    }
    function tt(t) {
        return t.width * t.height;
    }
    function et(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = Z(n, i, r, o),
            a = {
                top: { width: s.width, height: e.top - s.top },
                right: { width: s.right - e.right, height: s.height },
                bottom: { width: s.width, height: s.bottom - e.bottom },
                left: { width: e.left - s.left, height: s.height },
            },
            l = Object.keys(a)
                .map(function (t) {
                    return Y({ key: t }, a[t], { area: tt(a[t]) });
                })
                .sort(function (t, e) {
                    return e.area - t.area;
                }),
            c = l.filter(function (t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight;
            }),
            h = c.length > 0 ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return h + (u ? "-" + u : "");
    }
    function nt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? J(e) : R(e, O(n));
        return K(n, o, i);
    }
    function it(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }
    function ot(t) {
        var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
        });
    }
    function rt(t, e, n) {
        n = n.split("-")[0];
        var i = it(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return (o[s] = e[s] + e[l] / 2 - i[l] / 2), (o[a] = n === a ? e[a] - i[c] : e[ot(a)]), o;
    }
    function st(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }
    function at(t, e, n) {
        return (
            (void 0 === n
                ? t
                : t.slice(
                      0,
                      (function (t, e, n) {
                          if (Array.prototype.findIndex)
                              return t.findIndex(function (t) {
                                  return t[e] === n;
                              });
                          var i = st(t, function (t) {
                              return t[e] === n;
                          });
                          return t.indexOf(i);
                      })(t, "name", n)
                  )
            ).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t.function || t.fn;
                t.enabled &&
                    N(n) &&
                    ((e.offsets.popper = z(e.offsets.popper)),
                    (e.offsets.reference = z(e.offsets.reference)),
                    (e = n(e, t)));
            }),
            e
        );
    }
    function lt() {
        if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            (t.offsets.reference = nt(this.state, this.popper, this.reference, this.options.positionFixed)),
                (t.placement = et(
                    this.options.placement,
                    t.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (t.originalPlacement = t.placement),
                (t.positionFixed = this.options.positionFixed),
                (t.offsets.popper = rt(this.popper, t.offsets.reference, t.placement)),
                (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                (t = at(this.modifiers, t)),
                this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
        }
    }
    function ct(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e;
        });
    }
    function ht(t) {
        for (
            var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0;
            i < e.length;
            i++
        ) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function ut() {
        return (
            (this.state.isDestroyed = !0),
            ct(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[ht("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function ft(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
    }
    function dt(t, e, n, i) {
        (n.updateBound = i), ft(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = I(t);
        return (
            (function t(e, n, i, o) {
                var r = "BODY" === e.nodeName,
                    s = r ? e.ownerDocument.defaultView : e;
                s.addEventListener(n, i, { passive: !0 }), r || t(I(s.parentNode), n, i, o), o.push(s);
            })(o, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = o),
            (n.eventsEnabled = !0),
            n
        );
    }
    function pt() {
        this.state.eventsEnabled || (this.state = dt(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function mt() {
        var t, e;
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
                ((t = this.reference),
                (e = this.state),
                ft(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach(function (t) {
                    t.removeEventListener("scroll", e.updateBound);
                }),
                (e.updateBound = null),
                (e.scrollParents = []),
                (e.scrollElement = null),
                (e.eventsEnabled = !1),
                e)));
    }
    function gt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }
    function _t(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && gt(e[n]) && (i = "px"),
                (t.style[n] = e[n] + i);
        });
    }
    var vt = C && /Firefox/i.test(navigator.userAgent);
    function bt(t, e, n) {
        var i = st(t, function (t) {
                return t.name === e;
            }),
            o =
                !!i &&
                t.some(function (t) {
                    return t.name === n && t.enabled && t.order < i.order;
                });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(
                s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!"
            );
        }
        return o;
    }
    var yt = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
        ],
        wt = yt.slice(3);
    function Et(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = wt.indexOf(t),
            i = wt.slice(n + 1).concat(wt.slice(0, n));
        return e ? i.reverse() : i;
    }
    var Tt = "flip",
        Ct = "clockwise",
        St = "counterclockwise";
    function Dt(t, e, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function (t) {
                return t.trim();
            }),
            a = s.indexOf(
                st(s, function (t) {
                    return -1 !== t.search(/,|\s/);
                })
            );
        s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (
            (c = c.map(function (t, i) {
                var o = (1 === i ? !r : r) ? "height" : "width",
                    s = !1;
                return t
                    .reduce(function (t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                            ? ((t[t.length - 1] = e), (s = !0), t)
                            : s
                            ? ((t[t.length - 1] += e), (s = !1), t)
                            : t.concat(e);
                    }, [])
                    .map(function (t) {
                        return (function (t, e, n, i) {
                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return t;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i;
                                }
                                return (z(a)[e] / 100) * r;
                            }
                            if ("vh" === s || "vw" === s) {
                                return (
                                    (("vh" === s
                                        ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                                        : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
                                        100) *
                                    r
                                );
                            }
                            return r;
                        })(t, o, e, n);
                    });
            })).forEach(function (t, e) {
                t.forEach(function (n, i) {
                    gt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                });
            }),
            o
        );
    }
    var Nt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = { start: V({}, l, r[l]), end: V({}, l, r[l] + r[c] - s[c]) };
                            t.offsets.popper = Y({}, s, h[i]);
                        }
                        return t;
                    },
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return (
                            (l = gt(+n) ? [+n, 0] : Dt(n, r, s, a)),
                            "left" === a
                                ? ((r.top += l[0]), (r.left -= l[1]))
                                : "right" === a
                                ? ((r.top += l[0]), (r.left += l[1]))
                                : "top" === a
                                ? ((r.left += l[0]), (r.top -= l[1]))
                                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                            (t.popper = r),
                            t
                        );
                    },
                    offset: 0,
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.boundariesElement || P(t.instance.popper);
                        t.instance.reference === n && (n = P(n));
                        var i = ht("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[i];
                        (o.top = ""), (o.left = ""), (o[i] = "");
                        var l = Z(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
                        var c = e.priority,
                            h = t.offsets.popper,
                            u = {
                                primary: function (t) {
                                    var n = h[t];
                                    return h[t] < l[t] && !e.escapeWithReference && (n = Math.max(h[t], l[t])), V({}, t, n);
                                },
                                secondary: function (t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = h[n];
                                    return (
                                        h[t] > l[t] &&
                                            !e.escapeWithReference &&
                                            (i = Math.min(h[n], l[t] - ("right" === t ? h.width : h.height))),
                                        V({}, n, i)
                                    );
                                },
                            };
                        return (
                            c.forEach(function (t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                h = Y({}, h, u[e](t));
                            }),
                            (t.offsets.popper = h),
                            t
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return (
                            n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                            n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                            t
                        );
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (t, e) {
                        var n;
                        if (!bt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t;
                        } else if (!t.instance.popper.contains(i))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = it(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
                            a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
                            (t.offsets.popper = z(t.offsets.popper));
                        var m = a[u] + a[c] / 2 - p / 2,
                            g = k(t.instance.popper),
                            _ = parseFloat(g["margin" + h]),
                            v = parseFloat(g["border" + h + "Width"]),
                            b = m - t.offsets.popper[u] - _ - v;
                        return (
                            (b = Math.max(Math.min(s[c] - p, b), 0)),
                            (t.arrowElement = i),
                            (t.offsets.arrow = (V((n = {}), u, Math.round(b)), V(n, f, ""), n)),
                            t
                        );
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (t, e) {
                        if (ct(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = Z(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            o = ot(i),
                            r = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case Tt:
                                s = [i, o];
                                break;
                            case Ct:
                                s = Et(i);
                                break;
                            case St:
                                s = Et(i, !0);
                                break;
                            default:
                                s = e.behavior;
                        }
                        return (
                            s.forEach(function (a, l) {
                                if (i !== a || s.length === l + 1) return t;
                                (i = t.placement.split("-")[0]), (o = ot(i));
                                var c = t.offsets.popper,
                                    h = t.offsets.reference,
                                    u = Math.floor,
                                    f =
                                        ("left" === i && u(c.right) > u(h.left)) ||
                                        ("right" === i && u(c.left) < u(h.right)) ||
                                        ("top" === i && u(c.bottom) > u(h.top)) ||
                                        ("bottom" === i && u(c.top) < u(h.bottom)),
                                    d = u(c.left) < u(n.left),
                                    p = u(c.right) > u(n.right),
                                    m = u(c.top) < u(n.top),
                                    g = u(c.bottom) > u(n.bottom),
                                    _ =
                                        ("left" === i && d) ||
                                        ("right" === i && p) ||
                                        ("top" === i && m) ||
                                        ("bottom" === i && g),
                                    v = -1 !== ["top", "bottom"].indexOf(i),
                                    b =
                                        !!e.flipVariations &&
                                        ((v && "start" === r && d) ||
                                            (v && "end" === r && p) ||
                                            (!v && "start" === r && m) ||
                                            (!v && "end" === r && g)),
                                    y =
                                        !!e.flipVariationsByContent &&
                                        ((v && "start" === r && p) ||
                                            (v && "end" === r && d) ||
                                            (!v && "start" === r && g) ||
                                            (!v && "end" === r && m)),
                                    w = b || y;
                                (f || _ || w) &&
                                    ((t.flipped = !0),
                                    (f || _) && (i = s[l + 1]),
                                    w &&
                                        (r = (function (t) {
                                            return "end" === t ? "start" : "start" === t ? "end" : t;
                                        })(r)),
                                    (t.placement = i + (r ? "-" + r : "")),
                                    (t.offsets.popper = Y(
                                        {},
                                        t.offsets.popper,
                                        rt(t.instance.popper, t.offsets.reference, t.placement)
                                    )),
                                    (t = at(t.instance.modifiers, t, "flip")));
                            }),
                            t
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return (
                            (o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0)),
                            (t.placement = ot(e)),
                            (t.offsets.popper = z(o)),
                            t
                        );
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (t) {
                        if (!bt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = st(t.instance.modifiers, function (t) {
                                return "preventOverflow" === t.name;
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === t.hide) return t;
                            (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                        }
                        return t;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = st(t.instance.modifiers, function (t) {
                                return "applyStyle" === t.name;
                            }).gpuAcceleration;
                        void 0 !== r &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s = void 0 !== r ? r : e.gpuAcceleration,
                            a = P(t.instance.popper),
                            l = X(a),
                            c = { position: o.position },
                            h = (function (t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    s = Math.floor,
                                    a = function (t) {
                                        return t;
                                    },
                                    l = r(o.width),
                                    c = r(i.width),
                                    h = -1 !== ["left", "right"].indexOf(t.placement),
                                    u = -1 !== t.placement.indexOf("-"),
                                    f = e ? (h || u || l % 2 == c % 2 ? r : s) : a,
                                    d = e ? r : a;
                                return {
                                    left: f(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left),
                                    top: d(i.top),
                                    bottom: d(i.bottom),
                                    right: f(i.right),
                                };
                            })(t, window.devicePixelRatio < 2 || !vt),
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            d = ht("transform"),
                            p = void 0,
                            m = void 0;
                        if (
                            ((m =
                                "bottom" === u
                                    ? "HTML" === a.nodeName
                                        ? -a.clientHeight + h.bottom
                                        : -l.height + h.bottom
                                    : h.top),
                            (p =
                                "right" === f
                                    ? "HTML" === a.nodeName
                                        ? -a.clientWidth + h.right
                                        : -l.width + h.right
                                    : h.left),
                            s && d)
                        )
                            (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"),
                                (c[u] = 0),
                                (c[f] = 0),
                                (c.willChange = "transform");
                        else {
                            var g = "bottom" === u ? -1 : 1,
                                _ = "right" === f ? -1 : 1;
                            (c[u] = m * g), (c[f] = p * _), (c.willChange = u + ", " + f);
                        }
                        var v = { "x-placement": t.placement };
                        return (
                            (t.attributes = Y({}, v, t.attributes)),
                            (t.styles = Y({}, c, t.styles)),
                            (t.arrowStyles = Y({}, t.offsets.arrow, t.arrowStyles)),
                            t
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (t) {
                        var e, n;
                        return (
                            _t(t.instance.popper, t.styles),
                            (e = t.instance.popper),
                            (n = t.attributes),
                            Object.keys(n).forEach(function (t) {
                                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                            }),
                            t.arrowElement && Object.keys(t.arrowStyles).length && _t(t.arrowElement, t.arrowStyles),
                            t
                        );
                    },
                    onLoad: function (t, e, n, i, o) {
                        var r = nt(o, e, t, n.positionFixed),
                            s = et(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return (
                            e.setAttribute("x-placement", s), _t(e, { position: n.positionFixed ? "fixed" : "absolute" }), n
                        );
                    },
                    gpuAcceleration: void 0,
                },
            },
        },
        kt = (function () {
            function t(e, n) {
                var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                W(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = D(this.update.bind(this))),
                    (this.options = Y({}, t.Defaults, o)),
                    (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                    (this.reference = e && e.jquery ? e[0] : e),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(Y({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                        i.options.modifiers[e] = Y({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (t) {
                            return Y({ name: t }, i.options.modifiers[t]);
                        })
                        .sort(function (t, e) {
                            return t.order - e.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && N(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                    }),
                    this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), (this.state.eventsEnabled = r);
            }
            return (
                U(t, [
                    {
                        key: "update",
                        value: function () {
                            return lt.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return ut.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return pt.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return mt.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    (kt.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (kt.placements = yt), (kt.Defaults = Nt);
    var At = "dropdown",
        It = e.fn[At],
        Ot = new RegExp("38|40|27"),
        xt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        jt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)",
        },
        Lt = (function () {
            function t(t, e) {
                (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            var n = t.prototype;
            return (
                (n.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                        var n = e(this._menu).hasClass("show");
                        t._clearMenus(), n || this.show(!0);
                    }
                }),
                (n.show = function (n) {
                    if (
                        (void 0 === n && (n = !1),
                        !(
                            this._element.disabled ||
                            e(this._element).hasClass("disabled") ||
                            e(this._menu).hasClass("show")
                        ))
                    ) {
                        var i = { relatedTarget: this._element },
                            o = e.Event("show.bs.dropdown", i),
                            r = t._getParentFromElement(this._element);
                        if ((e(r).trigger(o), !o.isDefaultPrevented())) {
                            if (!this._inNavbar && n) {
                                if ("undefined" == typeof kt)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference
                                    ? (a = r)
                                    : s.isElement(this._config.reference) &&
                                      ((a = this._config.reference),
                                      "undefined" != typeof this._config.reference.jquery &&
                                          (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && e(r).addClass("position-static"),
                                    (this._popper = new kt(a, this._menu, this._getPopperConfig()));
                            }
                            "ontouchstart" in document.documentElement &&
                                0 === e(r).closest(".navbar-nav").length &&
                                e(document.body).children().on("mouseover", null, e.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                e(this._menu).toggleClass("show"),
                                e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", i));
                        }
                    }
                }),
                (n.hide = function () {
                    if (
                        !this._element.disabled &&
                        !e(this._element).hasClass("disabled") &&
                        e(this._menu).hasClass("show")
                    ) {
                        var n = { relatedTarget: this._element },
                            i = e.Event("hide.bs.dropdown", n),
                            o = t._getParentFromElement(this._element);
                        e(o).trigger(i),
                            i.isDefaultPrevented() ||
                                (this._popper && this._popper.destroy(),
                                e(this._menu).toggleClass("show"),
                                e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
                    }
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"),
                        e(this._element).off(".bs.dropdown"),
                        (this._element = null),
                        (this._menu = null),
                        null !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (n.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (n._addEventListeners = function () {
                    var t = this;
                    e(this._element).on("click.bs.dropdown", function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (n._getConfig = function (t) {
                    return (
                        (t = o({}, this.constructor.Default, e(this._element).data(), t)),
                        s.typeCheckConfig(At, t, this.constructor.DefaultType),
                        t
                    );
                }),
                (n._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"));
                    }
                    return this._menu;
                }),
                (n._getPlacement = function () {
                    var t = e(this._element.parentNode),
                        n = "bottom-start";
                    return (
                        t.hasClass("dropup")
                            ? (n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                            : t.hasClass("dropright")
                            ? (n = "right-start")
                            : t.hasClass("dropleft")
                            ? (n = "left-start")
                            : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                        n
                    );
                }),
                (n._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0;
                }),
                (n._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {})), e;
                              })
                            : (e.offset = this._config.offset),
                        e
                    );
                }),
                (n._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: { boundariesElement: this._config.boundary },
                        },
                    };
                    return (
                        "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }),
                        o({}, t, this._config.popperConfig)
                    );
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.dropdown");
                        if (
                            (i || ((i = new t(this, "object" == typeof n ? n : null)), e(this).data("bs.dropdown", i)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                (t._clearMenus = function (n) {
                    if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                        for (
                            var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),
                                o = 0,
                                r = i.length;
                            o < r;
                            o++
                        ) {
                            var s = t._getParentFromElement(i[o]),
                                a = e(i[o]).data("bs.dropdown"),
                                l = { relatedTarget: i[o] };
                            if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                var c = a._menu;
                                if (
                                    e(s).hasClass("show") &&
                                    !(
                                        n &&
                                        (("click" === n.type && /input|textarea/i.test(n.target.tagName)) ||
                                            ("keyup" === n.type && 9 === n.which)) &&
                                        e.contains(s, n.target)
                                    )
                                ) {
                                    var h = e.Event("hide.bs.dropdown", l);
                                    e(s).trigger(h),
                                        h.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement &&
                                                e(document.body).children().off("mouseover", null, e.noop),
                                            i[o].setAttribute("aria-expanded", "false"),
                                            a._popper && a._popper.destroy(),
                                            e(c).removeClass("show"),
                                            e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
                                }
                            }
                        }
                }),
                (t._getParentFromElement = function (t) {
                    var e,
                        n = s.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (t._dataApiKeydownHandler = function (n) {
                    if (
                        !(/input|textarea/i.test(n.target.tagName)
                            ? 32 === n.which ||
                              (27 !== n.which &&
                                  ((40 !== n.which && 38 !== n.which) || e(n.target).closest(".dropdown-menu").length))
                            : !Ot.test(n.which)) &&
                        !this.disabled &&
                        !e(this).hasClass("disabled")
                    ) {
                        var i = t._getParentFromElement(this),
                            o = e(i).hasClass("show");
                        if (o || 27 !== n.which) {
                            if ((n.preventDefault(), n.stopPropagation(), !o || (o && (27 === n.which || 32 === n.which))))
                                return (
                                    27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),
                                    void e(this).trigger("click")
                                );
                            var r = [].slice
                                .call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"))
                                .filter(function (t) {
                                    return e(t).is(":visible");
                                });
                            if (0 !== r.length) {
                                var s = r.indexOf(n.target);
                                38 === n.which && s > 0 && s--,
                                    40 === n.which && s < r.length - 1 && s++,
                                    s < 0 && (s = 0),
                                    r[s].focus();
                            }
                        }
                    }
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return xt;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return jt;
                        },
                    },
                ]),
                t
            );
        })();
    e(document)
        .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Lt._dataApiKeydownHandler)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", Lt._dataApiKeydownHandler)
        .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Lt._clearMenus)
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
            t.preventDefault(), t.stopPropagation(), Lt._jQueryInterface.call(e(this), "toggle");
        })
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
        }),
        (e.fn[At] = Lt._jQueryInterface),
        (e.fn[At].Constructor = Lt),
        (e.fn[At].noConflict = function () {
            return (e.fn[At] = It), Lt._jQueryInterface;
        });
    var Pt = e.fn.modal,
        Ft = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Rt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        Ht = (function () {
            function t(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(".modal-dialog")),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var n = t.prototype;
            return (
                (n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = e.Event("show.bs.modal", { relatedTarget: t });
                        e(this._element).trigger(i),
                            this._isShown ||
                                i.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
                                    return n.hide(t);
                                }),
                                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                    e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return n._showElement(t);
                                }));
                    }
                }),
                (n.hide = function (t) {
                    var n = this;
                    if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var i = e.Event("hide.bs.modal");
                        if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass("fade");
                            if (
                                (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(document).off("focusin.bs.modal"),
                                e(this._element).removeClass("show"),
                                e(this._element).off("click.dismiss.bs.modal"),
                                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                                o)
                            ) {
                                var r = s.getTransitionDurationFromElement(this._element);
                                e(this._element)
                                    .one(s.TRANSITION_END, function (t) {
                                        return n._hideModal(t);
                                    })
                                    .emulateTransitionEnd(r);
                            } else this._hideModal();
                        }
                    }
                }),
                (n.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return e(t).off(".bs.modal");
                    }),
                        e(document).off("focusin.bs.modal"),
                        e.removeData(this._element, "bs.modal"),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (n.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (n._getConfig = function (t) {
                    return (t = o({}, Ft, t)), s.typeCheckConfig("modal", t, Rt), t;
                }),
                (n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event("hidePrevented.bs.modal");
                        if ((e(this._element).trigger(n), n.defaultPrevented)) return;
                        var i = this._element.scrollHeight > document.documentElement.clientHeight;
                        i || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                        var o = s.getTransitionDurationFromElement(this._dialog);
                        e(this._element).off(s.TRANSITION_END),
                            e(this._element)
                                .one(s.TRANSITION_END, function () {
                                    t._element.classList.remove("modal-static"),
                                        i ||
                                            e(t._element)
                                                .one(s.TRANSITION_END, function () {
                                                    t._element.style.overflowY = "";
                                                })
                                                .emulateTransitionEnd(t._element, o);
                                })
                                .emulateTransitionEnd(o),
                            this._element.focus();
                    } else this.hide();
                }),
                (n._showElement = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade"),
                        o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        e(this._dialog).hasClass("modal-dialog-scrollable") && o
                            ? (o.scrollTop = 0)
                            : (this._element.scrollTop = 0),
                        i && s.reflow(this._element),
                        e(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = e.Event("shown.bs.modal", { relatedTarget: t }),
                        a = function () {
                            n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(r);
                        };
                    if (i) {
                        var l = s.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l);
                    } else a();
                }),
                (n._enforceFocus = function () {
                    var t = this;
                    e(document)
                        .off("focusin.bs.modal")
                        .on("focusin.bs.modal", function (n) {
                            document !== n.target &&
                                t._element !== n.target &&
                                0 === e(t._element).has(n.target).length &&
                                t._element.focus();
                        });
                }),
                (n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                              t._config.keyboard && 27 === e.which
                                  ? (e.preventDefault(), t.hide())
                                  : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                          })
                        : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
                }),
                (n._setResizeEvent = function () {
                    var t = this;
                    this._isShown
                        ? e(window).on("resize.bs.modal", function (e) {
                              return t.handleUpdate(e);
                          })
                        : e(window).off("resize.bs.modal");
                }),
                (n._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            e(document.body).removeClass("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                e(t._element).trigger("hidden.bs.modal");
                        });
                }),
                (n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (n._showBackdrop = function (t) {
                    var n = this,
                        i = e(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = "modal-backdrop"),
                            i && this._backdrop.classList.add(i),
                            e(this._backdrop).appendTo(document.body),
                            e(this._element).on("click.dismiss.bs.modal", function (t) {
                                n._ignoreBackdropClick
                                    ? (n._ignoreBackdropClick = !1)
                                    : t.target === t.currentTarget && n._triggerBackdropTransition();
                            }),
                            i && s.reflow(this._backdrop),
                            e(this._backdrop).addClass("show"),
                            !t)
                        )
                            return;
                        if (!i) return void t();
                        var o = s.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(o);
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass("show");
                        var r = function () {
                            n._removeBackdrop(), t && t();
                        };
                        if (e(this._element).hasClass("fade")) {
                            var a = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                    } else t && t();
                }),
                (n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (n._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth),
                        (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(
                                document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")
                            ),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        e(n).each(function (n, i) {
                            var o = i.style.paddingRight,
                                r = e(i).css("padding-right");
                            e(i)
                                .data("padding-right", o)
                                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                        }),
                            e(i).each(function (n, i) {
                                var o = i.style.marginRight,
                                    r = e(i).css("margin-right");
                                e(i)
                                    .data("margin-right", o)
                                    .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                            });
                        var o = document.body.style.paddingRight,
                            r = e(document.body).css("padding-right");
                        e(document.body)
                            .data("padding-right", o)
                            .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                    }
                    e(document.body).addClass("modal-open");
                }),
                (n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    e(t).each(function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                    });
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each(function (t, n) {
                        var i = e(n).data("margin-right");
                        "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right");
                    });
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                }),
                (n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (t._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var r = e(this).data("bs.modal"),
                            s = o({}, Ft, e(this).data(), "object" == typeof n && n ? n : {});
                        if ((r || ((r = new t(this, s)), e(this).data("bs.modal", r)), "string" == typeof n)) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i);
                        } else s.show && r.show(i);
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Ft;
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n,
            i = this,
            r = s.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var a = e(n).data("bs.modal") ? "toggle" : o({}, e(n).data(), e(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var l = e(n).one("show.bs.modal", function (t) {
            t.isDefaultPrevented() ||
                l.one("hidden.bs.modal", function () {
                    e(i).is(":visible") && i.focus();
                });
        });
        Ht._jQueryInterface.call(e(n), a, this);
    }),
        (e.fn.modal = Ht._jQueryInterface),
        (e.fn.modal.Constructor = Ht),
        (e.fn.modal.noConflict = function () {
            return (e.fn.modal = Pt), Ht._jQueryInterface;
        });
    var Mt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Bt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Qt =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Wt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
            var i = new window.DOMParser().parseFromString(t, "text/html"),
                o = Object.keys(e),
                r = [].slice.call(i.body.querySelectorAll("*")),
                s = function (t, n) {
                    var i = r[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[s] || []);
                    a.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n))
                                return -1 === Mt.indexOf(n) || Boolean(t.nodeValue.match(qt) || t.nodeValue.match(Qt));
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, l) || i.removeAttribute(t.nodeName);
                    });
                },
                a = 0,
                l = r.length;
            a < l;
            a++
        )
            s(a);
        return i.body.innerHTML;
    }
    var Ut = "tooltip",
        Vt = e.fn[Ut],
        Yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        zt = ["sanitize", "whiteList", "sanitizeFn"],
        Xt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)",
        },
        Kt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Gt = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Bt,
            popperConfig: null,
        },
        $t = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        Jt = (function () {
            function t(t, e) {
                if ("undefined" == typeof kt)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
            }
            var n = t.prototype;
            return (
                (n.enable = function () {
                    this._isEnabled = !0;
                }),
                (n.disable = function () {
                    this._isEnabled = !1;
                }),
                (n.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (n.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i ||
                                ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                                e(t.currentTarget).data(n, i)),
                                (i._activeTrigger.click = !i._activeTrigger.click),
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                        } else {
                            if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (n.dispose = function () {
                    clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && e(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null),
                        this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (n.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);
                        var i = s.findShadowRoot(this.element),
                            o = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !o) return;
                        var r = this.getTipElement(),
                            a = s.getUID(this.constructor.NAME);
                        r.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation && e(r).addClass("fade");
                        var l =
                                "function" == typeof this.config.placement
                                    ? this.config.placement.call(this, r, this.element)
                                    : this.config.placement,
                            c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var h = this._getContainer();
                        e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new kt(this.element, r, this._getPopperConfig(c))),
                            e(r).addClass("show"),
                            "ontouchstart" in document.documentElement &&
                                e(document.body).children().on("mouseover", null, e.noop);
                        var u = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            (t._hoverState = null),
                                e(t.element).trigger(t.constructor.Event.SHOWN),
                                "out" === n && t._leave(null, t);
                        };
                        if (e(this.tip).hasClass("fade")) {
                            var f = s.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(f);
                        } else u();
                    }
                }),
                (n.hide = function (t) {
                    var n = this,
                        i = this.getTipElement(),
                        o = e.Event(this.constructor.Event.HIDE),
                        r = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                n._cleanTipClass(),
                                n.element.removeAttribute("aria-describedby"),
                                e(n.element).trigger(n.constructor.Event.HIDDEN),
                                null !== n._popper && n._popper.destroy(),
                                t && t();
                        };
                    if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
                        if (
                            (e(i).removeClass("show"),
                            "ontouchstart" in document.documentElement &&
                                e(document.body).children().off("mouseover", null, e.noop),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            e(this.tip).hasClass("fade"))
                        ) {
                            var a = s.getTransitionDurationFromElement(i);
                            e(i).one(s.TRANSITION_END, r).emulateTransitionEnd(a);
                        } else r();
                        this._hoverState = "";
                    }
                }),
                (n.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (n.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (n.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (n.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (n.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
                        e(t).removeClass("fade show");
                }),
                (n.setElementContent = function (t, n) {
                    "object" != typeof n || (!n.nodeType && !n.jquery)
                        ? this.config.html
                            ? (this.config.sanitize && (n = Wt(n, this.config.whiteList, this.config.sanitizeFn)),
                              t.html(n))
                            : t.text(n)
                        : this.config.html
                        ? e(n).parent().is(t) || t.empty().append(n)
                        : t.text(e(n).text());
                }),
                (n.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                        t ||
                            (t =
                                "function" == typeof this.config.title
                                    ? this.config.title.call(this.element)
                                    : this.config.title),
                        t
                    );
                }),
                (n._getPopperConfig = function (t) {
                    var e = this;
                    return o(
                        {},
                        {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: { behavior: this.config.fallbackPlacement },
                                arrow: { element: ".arrow" },
                                preventOverflow: { boundariesElement: this.config.boundary },
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t);
                            },
                        },
                        this.config.popperConfig
                    );
                }),
                (n._getOffset = function () {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (e.fn = function (e) {
                                  return (e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {})), e;
                              })
                            : (e.offset = this.config.offset),
                        e
                    );
                }),
                (n._getContainer = function () {
                    return !1 === this.config.container
                        ? document.body
                        : s.isElement(this.config.container)
                        ? e(this.config.container)
                        : e(document).find(this.config.container);
                }),
                (n._getAttachment = function (t) {
                    return Kt[t.toUpperCase()];
                }),
                (n._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                        if ("click" === n)
                            e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e);
                            });
                        else if ("manual" !== n) {
                            var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element)
                                .on(i, t.config.selector, function (e) {
                                    return t._enter(e);
                                })
                                .on(o, t.config.selector, function (e) {
                                    return t._leave(e);
                                });
                        }
                    }),
                        (this._hideModalHandler = function () {
                            t.element && t.hide();
                        }),
                        e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector
                            ? (this.config = o({}, this.config, { trigger: "manual", selector: "" }))
                            : this._fixTitle();
                }),
                (n._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) &&
                        (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""));
                }),
                (n._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) ||
                        ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                        e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                            ? (n._hoverState = "show")
                            : (clearTimeout(n._timeout),
                              (n._hoverState = "show"),
                              n.config.delay && n.config.delay.show
                                  ? (n._timeout = setTimeout(function () {
                                        "show" === n._hoverState && n.show();
                                    }, n.config.delay.show))
                                  : n.show());
                }),
                (n._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) ||
                        ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
                        n._isWithActiveTrigger() ||
                            (clearTimeout(n._timeout),
                            (n._hoverState = "out"),
                            n.config.delay && n.config.delay.hide
                                ? (n._timeout = setTimeout(function () {
                                      "out" === n._hoverState && n.hide();
                                  }, n.config.delay.hide))
                                : n.hide());
                }),
                (n._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (n._getConfig = function (t) {
                    var n = e(this.element).data();
                    return (
                        Object.keys(n).forEach(function (t) {
                            -1 !== zt.indexOf(t) && delete n[t];
                        }),
                        "number" ==
                            typeof (t = o({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay &&
                            (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        s.typeCheckConfig(Ut, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Wt(t.template, t.whiteList, t.sanitizeFn)),
                        t
                    );
                }),
                (n._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (n._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(Yt);
                    null !== n && n.length && t.removeClass(n.join(""));
                }),
                (n._handlePopperPlacementChange = function (t) {
                    (this.tip = t.instance.popper),
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (n._fixTransition = function () {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") &&
                        (e(t).removeClass("fade"),
                        (this.config.animation = !1),
                        this.hide(),
                        this.show(),
                        (this.config.animation = n));
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.tooltip"),
                            o = "object" == typeof n && n;
                        if (
                            (i || !/dispose|hide/.test(n)) &&
                            (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)), "string" == typeof n)
                        ) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Gt;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Ut;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.tooltip";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return $t;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.tooltip";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Xt;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn[Ut] = Jt._jQueryInterface),
        (e.fn[Ut].Constructor = Jt),
        (e.fn[Ut].noConflict = function () {
            return (e.fn[Ut] = Vt), Jt._jQueryInterface;
        });
    var Zt = "popover",
        te = e.fn[Zt],
        ee = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        ne = o({}, Jt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        ie = o({}, Jt.DefaultType, { content: "(string|element|function)" }),
        oe = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        },
        re = (function (t) {
            var n, o;
            function r() {
                return t.apply(this, arguments) || this;
            }
            (o = t), ((n = r).prototype = Object.create(o.prototype)), (n.prototype.constructor = n), (n.__proto__ = o);
            var s = r.prototype;
            return (
                (s.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (s.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (s.getTipElement = function () {
                    return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                }),
                (s.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), n),
                        t.removeClass("fade show");
                }),
                (s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (s._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(ee);
                    null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (r._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if (
                            (n || !/dispose|hide/.test(t)) &&
                            (n || ((n = new r(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)
                        ) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]();
                        }
                    });
                }),
                i(r, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ne;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Zt;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return "bs.popover";
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return oe;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ".bs.popover";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ie;
                        },
                    },
                ]),
                r
            );
        })(Jt);
    (e.fn[Zt] = re._jQueryInterface),
        (e.fn[Zt].Constructor = re),
        (e.fn[Zt].noConflict = function () {
            return (e.fn[Zt] = te), re._jQueryInterface;
        });
    var se = "scrollspy",
        ae = e.fn[se],
        le = { offset: 10, method: "auto", target: "" },
        ce = { offset: "number", method: "string", target: "(string|element)" },
        he = (function () {
            function t(t, n) {
                var i = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(n)),
                    (this._selector =
                        this._config.target +
                        " .nav-link," +
                        this._config.target +
                        " .list-group-item," +
                        this._config.target +
                        " .dropdown-item"),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                        return i._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var n = t.prototype;
            return (
                (n.refresh = function () {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = "position" === i ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var n,
                                    r = s.getSelectorFromElement(t);
                                if ((r && (n = document.querySelector(r)), n)) {
                                    var a = n.getBoundingClientRect();
                                    if (a.width || a.height) return [e(n)[i]().top + o, r];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (n._getConfig = function (t) {
                    if (
                        "string" != typeof (t = o({}, le, "object" == typeof t && t ? t : {})).target &&
                        s.isElement(t.target)
                    ) {
                        var n = e(t.target).attr("id");
                        n || ((n = s.getUID(se)), e(t.target).attr("id", n)), (t.target = "#" + n);
                    }
                    return s.typeCheckConfig(se, t, ce), t;
                }),
                (n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (n._getScrollHeight = function () {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    );
                }),
                (n._getOffsetHeight = function () {
                    return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                }),
                (n._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                            return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] &&
                                t >= this._offsets[o] &&
                                ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                                this._activate(this._targets[o]);
                        }
                    }
                }),
                (n._activate = function (t) {
                    (this._activeTarget = t), this._clear();
                    var n = this._selector.split(",").map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                        }),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item")
                        ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active"))
                        : (i.addClass("active"),
                          i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
                          i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        e(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
                }),
                (n._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains("active");
                        })
                        .forEach(function (t) {
                            return t.classList.remove("active");
                        });
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this).data("bs.scrollspy");
                        if (
                            (i || ((i = new t(this, "object" == typeof n && n)), e(this).data("bs.scrollspy", i)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return le;
                        },
                    },
                ]),
                t
            );
        })();
    e(window).on("load.bs.scrollspy.data-api", function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
            var i = e(t[n]);
            he._jQueryInterface.call(i, i.data());
        }
    }),
        (e.fn[se] = he._jQueryInterface),
        (e.fn[se].Constructor = he),
        (e.fn[se].noConflict = function () {
            return (e.fn[se] = ae), he._jQueryInterface;
        });
    var ue = e.fn.tab,
        fe = (function () {
            function t(t) {
                this._element = t;
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this;
                    if (
                        !(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                                e(this._element).hasClass("active")) ||
                            e(this._element).hasClass("disabled")
                        )
                    ) {
                        var n,
                            i,
                            o = e(this._element).closest(".nav, .list-group")[0],
                            r = s.getSelectorFromElement(this._element);
                        if (o) {
                            var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                            i = (i = e.makeArray(e(o).find(a)))[i.length - 1];
                        }
                        var l = e.Event("hide.bs.tab", { relatedTarget: this._element }),
                            c = e.Event("show.bs.tab", { relatedTarget: i });
                        if (
                            (i && e(i).trigger(l),
                            e(this._element).trigger(c),
                            !c.isDefaultPrevented() && !l.isDefaultPrevented())
                        ) {
                            r && (n = document.querySelector(r)), this._activate(this._element, o);
                            var h = function () {
                                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                    o = e.Event("shown.bs.tab", { relatedTarget: i });
                                e(i).trigger(n), e(t._element).trigger(o);
                            };
                            n ? this._activate(n, n.parentNode, h) : h();
                        }
                    }
                }),
                (n.dispose = function () {
                    e.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (n._activate = function (t, n, i) {
                    var o = this,
                        r = (
                            !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                                ? e(n).children(".active")
                                : e(n).find("> li > .active")
                        )[0],
                        a = i && r && e(r).hasClass("fade"),
                        l = function () {
                            return o._transitionComplete(t, r, i);
                        };
                    if (r && a) {
                        var c = s.getTransitionDurationFromElement(r);
                        e(r).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(c);
                    } else l();
                }),
                (n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass("active");
                        var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                        o && e(o).removeClass("active"),
                            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                    }
                    if (
                        (e(t).addClass("active"),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        s.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var r = e(t).closest(".dropdown")[0];
                        if (r) {
                            var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                            e(a).addClass("active");
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.tab");
                        if ((o || ((o = new t(this)), i.data("bs.tab", o)), "string" == typeof n)) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]();
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                ]),
                t
            );
        })();
    e(document).on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (t) {
            t.preventDefault(), fe._jQueryInterface.call(e(this), "show");
        }
    ),
        (e.fn.tab = fe._jQueryInterface),
        (e.fn.tab.Constructor = fe),
        (e.fn.tab.noConflict = function () {
            return (e.fn.tab = ue), fe._jQueryInterface;
        });
    var de = e.fn.toast,
        pe = { animation: "boolean", autohide: "boolean", delay: "number" },
        me = { animation: !0, autohide: !0, delay: 500 },
        ge = (function () {
            function t(t, e) {
                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
            }
            var n = t.prototype;
            return (
                (n.show = function () {
                    var t = this,
                        n = e.Event("show.bs.toast");
                    if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            t._element.classList.remove("showing"),
                                t._element.classList.add("show"),
                                e(t._element).trigger("shown.bs.toast"),
                                t._config.autohide &&
                                    (t._timeout = setTimeout(function () {
                                        t.hide();
                                    }, t._config.delay));
                        };
                        if (
                            (this._element.classList.remove("hide"),
                            s.reflow(this._element),
                            this._element.classList.add("showing"),
                            this._config.animation)
                        ) {
                            var o = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, i).emulateTransitionEnd(o);
                        } else i();
                    }
                }),
                (n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = e.Event("hide.bs.toast");
                        e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                    }
                }),
                (n.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        e(this._element).off("click.dismiss.bs.toast"),
                        e.removeData(this._element, "bs.toast"),
                        (this._element = null),
                        (this._config = null);
                }),
                (n._getConfig = function (t) {
                    return (
                        (t = o({}, me, e(this._element).data(), "object" == typeof t && t ? t : {})),
                        s.typeCheckConfig("toast", t, this.constructor.DefaultType),
                        t
                    );
                }),
                (n._setListeners = function () {
                    var t = this;
                    e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                        return t.hide();
                    });
                }),
                (n._close = function () {
                    var t = this,
                        n = function () {
                            t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
                        };
                    if ((this._element.classList.remove("show"), this._config.animation)) {
                        var i = s.getTransitionDurationFromElement(this._element);
                        e(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i);
                    } else n();
                }),
                (n._clearTimeout = function () {
                    clearTimeout(this._timeout), (this._timeout = null);
                }),
                (t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = e(this),
                            o = i.data("bs.toast");
                        if (
                            (o || ((o = new t(this, "object" == typeof n && n)), i.data("bs.toast", o)),
                            "string" == typeof n)
                        ) {
                            if ("undefined" == typeof o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](this);
                        }
                    });
                }),
                i(t, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.5.2";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return pe;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return me;
                        },
                    },
                ]),
                t
            );
        })();
    (e.fn.toast = ge._jQueryInterface),
        (e.fn.toast.Constructor = ge),
        (e.fn.toast.noConflict = function () {
            return (e.fn.toast = de), ge._jQueryInterface;
        }),
        (t.Alert = c),
        (t.Button = u),
        (t.Carousel = v),
        (t.Collapse = T),
        (t.Dropdown = Lt),
        (t.Modal = Ht),
        (t.Popover = re),
        (t.Scrollspy = he),
        (t.Tab = fe),
        (t.Toast = ge),
        (t.Tooltip = Jt),
        (t.Util = s),
        Object.defineProperty(t, "__esModule", { value: !0 });
});

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!(function (t, i, e, s) {
    function o(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)),
            (this.$element = t(i)),
            !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (
            (r.length < 1 && r.push("center"),
            1 == r.length && r.push(r[0]),
            ("top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1]) || (r = [r[1], r[0]]),
            this.positionX !== s && (r[0] = this.positionX.toLowerCase()),
            this.positionY !== s && (r[1] = this.positionY.toLowerCase()),
            (h.positionX = r[0]),
            (h.positionY = r[1]),
            "left" != this.positionX &&
                "right" != this.positionX &&
                (isNaN(parseInt(this.positionX))
                    ? (this.positionX = "center")
                    : (this.positionX = parseInt(this.positionX))),
            "top" != this.positionY &&
                "bottom" != this.positionY &&
                (isNaN(parseInt(this.positionY))
                    ? (this.positionY = "center")
                    : (this.positionY = parseInt(this.positionY))),
            (this.position =
                this.positionX +
                (isNaN(this.positionX) ? "" : "px") +
                " " +
                this.positionY +
                (isNaN(this.positionY) ? "" : "px")),
            navigator.userAgent.match(/(iPod|iPhone|iPad)/))
        )
            return (
                this.imageSrc &&
                    this.iosFix &&
                    !this.$element.is("img") &&
                    this.$element.css({
                        backgroundImage: "url(" + this.imageSrc + ")",
                        backgroundSize: "cover",
                        backgroundPosition: this.position,
                    }),
                this
            );
        if (navigator.userAgent.match(/(Android)/))
            return (
                this.imageSrc &&
                    this.androidFix &&
                    !this.$element.is("img") &&
                    this.$element.css({
                        backgroundImage: "url(" + this.imageSrc + ")",
                        backgroundSize: "cover",
                        backgroundPosition: this.position,
                    }),
                this
            );
        this.$mirror = t("<div />").prependTo(this.mirrorContainer);
        var a = this.$element.find(">.parallax-slider"),
            n = !1;
        0 == a.length
            ? (this.$slider = t("<img />").prependTo(this.$mirror))
            : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
            this.$mirror
                .addClass("parallax-mirror")
                .css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }),
            this.$slider.addClass("parallax-slider").one("load", function () {
                (h.naturalHeight && h.naturalWidth) ||
                    ((h.naturalHeight = this.naturalHeight || this.height || 1),
                    (h.naturalWidth = this.naturalWidth || this.width || 1)),
                    (h.aspectRatio = h.naturalWidth / h.naturalHeight),
                    o.isSetup || o.setup(),
                    o.sliders.push(h),
                    (o.isFresh = !1),
                    o.requestRender();
            }),
            n || (this.$slider[0].src = this.imageSrc),
            ((this.naturalHeight && this.naturalWidth) || this.$slider[0].complete || a.length > 0) &&
                this.$slider.trigger("load");
    }
    !(function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s)
            (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
                (i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"]);
        i.requestAnimationFrame ||
            (i.requestAnimationFrame = function (e) {
                var s = new Date().getTime(),
                    o = Math.max(0, 16 - (s - t)),
                    h = i.setTimeout(function () {
                        e(s + o);
                    }, o);
                return (t = s + o), h;
            }),
            i.cancelAnimationFrame ||
                (i.cancelAnimationFrame = function (t) {
                    clearTimeout(t);
                });
    })(),
        t.extend(o.prototype, {
            speed: 0.2,
            bleed: 0,
            zIndex: -100,
            iosFix: !0,
            androidFix: !0,
            position: "center",
            overScrollFix: !1,
            mirrorContainer: "body",
            refresh: function () {
                (this.boxWidth = this.$element.outerWidth()),
                    (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
                    (this.boxOffsetTop = this.$element.offset().top - this.bleed),
                    (this.boxOffsetLeft = this.$element.offset().left),
                    (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
                var t,
                    i = o.winHeight,
                    e = o.docHeight,
                    s = Math.min(this.boxOffsetTop, e - i),
                    h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
                    r = (this.boxHeight + (s - h) * (1 - this.speed)) | 0,
                    a = ((this.boxOffsetTop - s) * (1 - this.speed)) | 0;
                r * this.aspectRatio >= this.boxWidth
                    ? ((this.imageWidth = (r * this.aspectRatio) | 0),
                      (this.imageHeight = r),
                      (this.offsetBaseTop = a),
                      (t = this.imageWidth - this.boxWidth),
                      "left" == this.positionX
                          ? (this.offsetLeft = 0)
                          : "right" == this.positionX
                          ? (this.offsetLeft = -t)
                          : isNaN(this.positionX)
                          ? (this.offsetLeft = (-t / 2) | 0)
                          : (this.offsetLeft = Math.max(this.positionX, -t)))
                    : ((this.imageWidth = this.boxWidth),
                      (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
                      (this.offsetLeft = 0),
                      (t = this.imageHeight - r),
                      "top" == this.positionY
                          ? (this.offsetBaseTop = a)
                          : "bottom" == this.positionY
                          ? (this.offsetBaseTop = a - t)
                          : isNaN(this.positionY)
                          ? (this.offsetBaseTop = (a - t / 2) | 0)
                          : (this.offsetBaseTop = a + Math.max(this.positionY, -t)));
            },
            render: function () {
                var t = o.scrollTop,
                    i = o.scrollLeft,
                    e = this.overScrollFix ? o.overScroll : 0,
                    s = t + o.winHeight;
                this.boxOffsetBottom > t && this.boxOffsetTop <= s
                    ? ((this.visibility = "visible"),
                      (this.mirrorTop = this.boxOffsetTop - t),
                      (this.mirrorLeft = this.boxOffsetLeft - i),
                      (this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
                    : (this.visibility = "hidden"),
                    this.$mirror.css({
                        transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
                        visibility: this.visibility,
                        height: this.boxHeight,
                        width: this.boxWidth,
                    }),
                    this.$slider.css({
                        transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                        position: "absolute",
                        height: this.imageHeight,
                        width: this.imageWidth,
                        maxWidth: "none",
                    });
            },
        }),
        t.extend(o, {
            scrollTop: 0,
            scrollLeft: 0,
            winHeight: 0,
            winWidth: 0,
            docHeight: 1 << 30,
            docWidth: 1 << 30,
            sliders: [],
            isReady: !1,
            isFresh: !1,
            isBusy: !1,
            setup: function () {
                function s() {
                    if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
                    (p = i.pageYOffset), h.render(), i.requestAnimationFrame(s);
                }
                if (!this.isReady) {
                    var h = this,
                        r = t(e),
                        a = t(i),
                        n = function () {
                            (o.winHeight = a.height()),
                                (o.winWidth = a.width()),
                                (o.docHeight = r.height()),
                                (o.docWidth = r.width());
                        },
                        l = function () {
                            var t = a.scrollTop(),
                                i = o.docHeight - o.winHeight,
                                e = o.docWidth - o.winWidth;
                            (o.scrollTop = Math.max(0, Math.min(i, t))),
                                (o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft()))),
                                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
                        };
                    a
                        .on("resize.px.parallax load.px.parallax", function () {
                            n(), h.refresh(), (o.isFresh = !1), o.requestRender();
                        })
                        .on("scroll.px.parallax load.px.parallax", function () {
                            l(), o.requestRender();
                        }),
                        n(),
                        l(),
                        (this.isReady = !0);
                    var p = -1;
                    s();
                }
            },
            configure: function (i) {
                "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
            },
            refresh: function () {
                t.each(this.sliders, function () {
                    this.refresh();
                }),
                    (this.isFresh = !0);
            },
            render: function () {
                this.isFresh || this.refresh(),
                    t.each(this.sliders, function () {
                        this.render();
                    });
            },
            requestRender: function () {
                var t = this;
                t.render(), (t.isBusy = !1);
            },
            destroy: function (e) {
                var s,
                    h = t(e).data("px.parallax");
                for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
                    this.sliders[s] == h && this.sliders.splice(s, 1);
                t(e).data("px.parallax", !1),
                    0 === this.sliders.length &&
                        (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
                        (this.isReady = !1),
                        (o.isSetup = !1));
            },
        });
    var h = t.fn.parallax;
    (t.fn.parallax = function (s) {
        return this.each(function () {
            var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body")
                ? o.configure(r)
                : h.data("px.parallax")
                ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
                : ((r = t.extend({}, h.data(), r)), h.data("px.parallax", new o(this, r))),
                "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
        });
    }),
        (t.fn.parallax.Constructor = o),
        (t.fn.parallax.noConflict = function () {
            return (t.fn.parallax = h), this;
        }),
        t(function () {
            t('[data-parallax="scroll"]').parallax();
        });
})(jQuery, window, document);

/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (
                (f.className = "mfp-" + b),
                d && (f.innerHTML = d),
                e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
                f
            );
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d),
                b.st.callbacks &&
                    ((c = c.charAt(0).toLowerCase() + c.slice(1)),
                    b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (
                (c === g && b.currTemplate.closeBtn) ||
                    ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)),
                b.currTemplate.closeBtn
            );
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isIE7 = -1 !== c.indexOf("MSIE 7.")),
                (b.isIE8 = -1 !== c.indexOf("MSIE 8.")),
                (b.isLowIE = b.isIE7 || b.isIE8),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile =
                    b.isAndroid ||
                    b.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                    )),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                (b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d),
                c.key
                    ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key]))
                    : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal &&
                    ((b.st.closeOnContentClick = !1),
                    (b.st.closeOnBgClick = !1),
                    (b.st.showCloseBtn = !1),
                    (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.wrap.css(
                    b.fixedContentPos
                        ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }
                        : { top: v.scrollTop(), position: "absolute" }
                ),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
                    b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q),
                        d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (
                (b.bgOverlay.detach(),
                b.wrap.detach(),
                b.container.empty(),
                b.st.mainClass && (c += b.st.mainClass + " "),
                b._removeClassFromMFP(c),
                b.fixedContentPos)
            ) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn ||
                    (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
                    (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), (b.currTemplate[d] = f ? a(f) : !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
                (c.preloaded = !0),
                y(n, c),
                (e = c.type),
                b.container.prepend(b.contentContainer),
                y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a
                    ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
                        ? b.content.find(".mfp-close").length || b.content.append(z())
                        : (b.content = a)
                    : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (
                (e.type = d || b.st.type || "inline"),
                (e.index = c),
                (e.parsed = !0),
                (b.items[c] = e),
                y("ElementParse", e),
                b.items[c]
            );
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a),
                c.items
                    ? ((c.isObj = !0), a.off(e).on(e, d))
                    : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || (2 !== c.which && !c.ctrlKey && !c.metaKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
                    (e.el = a(c.mfpEl)),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (a, c) {
                    if (void 0 === c || c === !1) return !0;
                    if (((e = a.split("_")), e.length > 1)) {
                        var d = b.find(p + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            "replaceWith" === f
                                ? d[0] !== c[0] && d.replaceWith(c)
                                : "img" === f
                                ? d.is("img")
                                    ? d.attr("src", c)
                                    : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />')
                                : d.attr(e[1], c);
                        }
                    } else b.find(p + "-" + a).html(c);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(a),
                    (b.scrollbarSize = a.offsetWidth - a.clientWidth),
                    document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
                        b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g &&
                            g.tagName &&
                            (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
                            (E = f.after(D).detach().removeClass(C))),
                            b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(),
                                (c.finished = c.loadError = !0),
                                b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img &&
                    ((a.hasSize = !0),
                    L && clearInterval(L),
                    (a.isCheckingImgSize = !1),
                    y("ImageHasSize", a),
                    a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0
                                    ? void b._onImageHasSize(a)
                                    : (c > 200 && clearInterval(L),
                                      c++,
                                      void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"),
                                  c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")),
                                  (c.hasSize = !0),
                                  (c.loaded = !0),
                                  y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c &&
                            (c.img.off(".mfploader"),
                            c === b.currItem &&
                                (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))),
                            (c.hasSize = !0),
                            (c.loaded = !0),
                            (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L),
                          c.loadError
                              ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src)))
                              : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
                          d)
                        : (b.updateStatus("loading"),
                          (c.loading = !0),
                          c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)),
                          d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden",
                                },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a))
                                return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return (
                    O()
                        ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)")
                        : ((h.left = e.left), (h.top = e.top)),
                    h
                );
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1
                        ? (this.id &&
                              (e =
                                  "string" == typeof this.id
                                      ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length)
                                      : this.id.call(this, e)),
                          (e = this.src.replace("%id%", e)),
                          !1)
                        : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(
                                          d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                                      ).addClass(s)),
                                      f = (b.arrowRight = a(
                                          d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")
                                      ).addClass(s)),
                                      h = g ? "mfpFastClick" : "click";
                                  e[h](function () {
                                      b.prev();
                                  }),
                                      f[h](function () {
                                          b.next();
                                      }),
                                      b.isIE7 &&
                                          (x("b", e[0], !1, !0),
                                          x("a", e[0], !1, !0),
                                          x("b", f[0], !1, !0),
                                          x("a", f[0], !1, !0)),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e),
                                  b.wrap.off("click" + e),
                                  b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),
                                  (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        (function () {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function () {
                    v.off("touchmove" + f + " touchend" + f);
                },
                e = "mfpFastClick",
                f = "." + e;
            (a.fn.mfpFastClick = function (e) {
                return a(this).each(function () {
                    var g,
                        h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function (a) {
                            (l = !1),
                                (n = 1),
                                (m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0]),
                                (j = m.clientX),
                                (k = m.clientY),
                                v
                                    .on("touchmove" + f, function (a) {
                                        (m = a.originalEvent ? a.originalEvent.touches : a.touches),
                                            (n = m.length),
                                            (m = m[0]),
                                            (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) &&
                                                ((l = !0), d());
                                    })
                                    .on("touchend" + f, function (a) {
                                        d(),
                                            l ||
                                                n > 1 ||
                                                ((g = !0),
                                                a.preventDefault(),
                                                clearTimeout(i),
                                                (i = setTimeout(function () {
                                                    g = !1;
                                                }, b)),
                                                e());
                                    });
                        });
                    }
                    h.on("click" + f, function () {
                        g || e();
                    });
                });
            }),
                (a.fn.destroyMfpFastClick = function () {
                    a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f);
                });
        })(),
        A();
});

/*! WOW - v1.0.3 - 2015-01-14
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function () {
    var a,
        b,
        c,
        d,
        e,
        f = function (a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        },
        g =
            [].indexOf ||
            function (a) {
                for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
                return -1;
            };
    (b = (function () {
        function a() {}
        return (
            (a.prototype.extend = function (a, b) {
                var c, d;
                for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
                return a;
            }),
            (a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
            }),
            (a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener
                    ? a.addEventListener(b, c, !1)
                    : null != a.attachEvent
                    ? a.attachEvent("on" + b, c)
                    : (a[b] = c);
            }),
            (a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener
                    ? a.removeEventListener(b, c, !1)
                    : null != a.detachEvent
                    ? a.detachEvent("on" + b, c)
                    : delete a[b];
            }),
            (a.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
            }),
            a
        );
    })()),
        (c =
            this.WeakMap ||
            this.MozWeakMap ||
            (c = (function () {
                function a() {
                    (this.keys = []), (this.values = []);
                }
                return (
                    (a.prototype.get = function (a) {
                        var b, c, d, e, f;
                        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                            if (((c = f[b]), c === a)) return this.values[b];
                    }),
                    (a.prototype.set = function (a, b) {
                        var c, d, e, f, g;
                        for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                            if (((d = g[c]), d === a)) return void (this.values[c] = b);
                        return this.keys.push(a), this.values.push(b);
                    }),
                    a
                );
            })())),
        (a =
            this.MutationObserver ||
            this.WebkitMutationObserver ||
            this.MozMutationObserver ||
            (a = (function () {
                function a() {
                    "undefined" != typeof console &&
                        null !== console &&
                        console.warn("MutationObserver is not supported by your browser."),
                        "undefined" != typeof console &&
                            null !== console &&
                            console.warn(
                                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                            );
                }
                return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
            })())),
        (d =
            this.getComputedStyle ||
            function (a) {
                return (
                    (this.getPropertyValue = function (b) {
                        var c;
                        return (
                            "float" === b && (b = "styleFloat"),
                            e.test(b) &&
                                b.replace(e, function (a, b) {
                                    return b.toUpperCase();
                                }),
                            (null != (c = a.currentStyle) ? c[b] : void 0) || null
                        );
                    }),
                    this
                );
            }),
        (e = /(\-([a-z]){1})/g),
        (this.WOW = (function () {
            function e(a) {
                null == a && (a = {}),
                    (this.scrollCallback = f(this.scrollCallback, this)),
                    (this.scrollHandler = f(this.scrollHandler, this)),
                    (this.start = f(this.start, this)),
                    (this.scrolled = !0),
                    (this.config = this.util().extend(a, this.defaults)),
                    (this.animationNameCache = new c());
            }
            return (
                (e.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                }),
                (e.prototype.init = function () {
                    var a;
                    return (
                        (this.element = window.document.documentElement),
                        "interactive" === (a = document.readyState) || "complete" === a
                            ? this.start()
                            : this.util().addEvent(document, "DOMContentLoaded", this.start),
                        (this.finished = [])
                    );
                }),
                (e.prototype.start = function () {
                    var b, c, d, e;
                    if (
                        ((this.stopped = !1),
                        (this.boxes = function () {
                            var a, c, d, e;
                            for (
                                d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length;
                                c > a;
                                a++
                            )
                                (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        (this.all = function () {
                            var a, c, d, e;
                            for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        this.boxes.length)
                    )
                        if (this.disabled()) this.resetStyle();
                        else for (e = this.boxes, c = 0, d = e.length; d > c; c++) (b = e[c]), this.applyStyle(b, !0);
                    return (
                        this.disabled() ||
                            (this.util().addEvent(window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            (this.interval = setInterval(this.scrollCallback, 50))),
                        this.config.live
                            ? new a(
                                  (function (a) {
                                      return function (b) {
                                          var c, d, e, f, g;
                                          for (g = [], e = 0, f = b.length; f > e; e++)
                                              (d = b[e]),
                                                  g.push(
                                                      function () {
                                                          var a, b, e, f;
                                                          for (
                                                              e = d.addedNodes || [], f = [], a = 0, b = e.length;
                                                              b > a;
                                                              a++
                                                          )
                                                              (c = e[a]), f.push(this.doSync(c));
                                                          return f;
                                                      }.call(a)
                                                  );
                                          return g;
                                      };
                                  })(this)
                              ).observe(document.body, { childList: !0, subtree: !0 })
                            : void 0
                    );
                }),
                (e.prototype.stop = function () {
                    return (
                        (this.stopped = !0),
                        this.util().removeEvent(window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                    );
                }),
                (e.prototype.sync = function () {
                    return a.notSupported ? this.doSync(this.element) : void 0;
                }),
                (e.prototype.doSync = function (a) {
                    var b, c, d, e, f;
                    if ((null == a && (a = this.element), 1 === a.nodeType)) {
                        for (
                            a = a.parentNode || a,
                                e = a.querySelectorAll("." + this.config.boxClass),
                                f = [],
                                c = 0,
                                d = e.length;
                            d > c;
                            c++
                        )
                            (b = e[c]),
                                g.call(this.all, b) < 0
                                    ? (this.boxes.push(b),
                                      this.all.push(b),
                                      this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                                      f.push((this.scrolled = !0)))
                                    : f.push(void 0);
                        return f;
                    }
                }),
                (e.prototype.show = function (a) {
                    return (
                        this.applyStyle(a),
                        (a.className = "" + a.className + " " + this.config.animateClass),
                        null != this.config.callback ? this.config.callback(a) : void 0
                    );
                }),
                (e.prototype.applyStyle = function (a, b) {
                    var c, d, e;
                    return (
                        (d = a.getAttribute("data-wow-duration")),
                        (c = a.getAttribute("data-wow-delay")),
                        (e = a.getAttribute("data-wow-iteration")),
                        this.animate(
                            (function (f) {
                                return function () {
                                    return f.customStyle(a, b, d, c, e);
                                };
                            })(this)
                        )
                    );
                }),
                (e.prototype.animate = (function () {
                    return "requestAnimationFrame" in window
                        ? function (a) {
                              return window.requestAnimationFrame(a);
                          }
                        : function (a) {
                              return a();
                          };
                })()),
                (e.prototype.resetStyle = function () {
                    var a, b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                        (a = d[b]), e.push((a.style.visibility = "visible"));
                    return e;
                }),
                (e.prototype.customStyle = function (a, b, c, d, e) {
                    return (
                        b && this.cacheAnimationName(a),
                        (a.style.visibility = b ? "hidden" : "visible"),
                        c && this.vendorSet(a.style, { animationDuration: c }),
                        d && this.vendorSet(a.style, { animationDelay: d }),
                        e && this.vendorSet(a.style, { animationIterationCount: e }),
                        this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                        a
                    );
                }),
                (e.prototype.vendors = ["moz", "webkit"]),
                (e.prototype.vendorSet = function (a, b) {
                    var c, d, e, f;
                    f = [];
                    for (c in b)
                        (d = b[c]),
                            (a["" + c] = d),
                            f.push(
                                function () {
                                    var b, f, g, h;
                                    for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++)
                                        (e = g[b]), h.push((a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d));
                                    return h;
                                }.call(this)
                            );
                    return f;
                }),
                (e.prototype.vendorCSS = function (a, b) {
                    var c, e, f, g, h, i;
                    for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++)
                        (f = i[g]), (c = c || e.getPropertyCSSValue("-" + f + "-" + b));
                    return c;
                }),
                (e.prototype.animationName = function (a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText;
                    } catch (c) {
                        b = d(a).getPropertyValue("animation-name");
                    }
                    return "none" === b ? "" : b;
                }),
                (e.prototype.cacheAnimationName = function (a) {
                    return this.animationNameCache.set(a, this.animationName(a));
                }),
                (e.prototype.cachedAnimationName = function (a) {
                    return this.animationNameCache.get(a);
                }),
                (e.prototype.scrollHandler = function () {
                    return (this.scrolled = !0);
                }),
                (e.prototype.scrollCallback = function () {
                    var a;
                    return !this.scrolled ||
                        ((this.scrolled = !1),
                        (this.boxes = function () {
                            var b, c, d, e;
                            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                            return e;
                        }.call(this)),
                        this.boxes.length || this.config.live)
                        ? void 0
                        : this.stop();
                }),
                (e.prototype.offsetTop = function (a) {
                    for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
                    for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
                    return b;
                }),
                (e.prototype.isVisible = function (a) {
                    var b, c, d, e, f;
                    return (
                        (c = a.getAttribute("data-wow-offset") || this.config.offset),
                        (f = window.pageYOffset),
                        (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
                        (d = this.offsetTop(a)),
                        (b = d + a.clientHeight),
                        e >= d && b >= f
                    );
                }),
                (e.prototype.util = function () {
                    return null != this._util ? this._util : (this._util = new b());
                }),
                (e.prototype.disabled = function () {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                }),
                e
            );
        })());
}.call(this));

/* Password strenght */
$(document).ready(function () {
    var password1 = $("#password1");
    var password2 = $("#password2");
    var passwordsInfo = $("#pass-info");
    passwordStrengthCheck(password1, password2, passwordsInfo);
});
function passwordStrengthCheck(password1, password2, passwordsInfo) {
    var WeakPass = /(?=.{5,}).*/;
    var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
    var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
    var VryStrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{5,}$/;
    $(password1).on("keyup", function (e) {
        if (VryStrongPass.test(password1.val())) {
            passwordsInfo
                .removeClass()
                .addClass("vrystrongpass")
                .html("Very Strong! (Awesome, please don't forget your pass now!)");
        } else if (StrongPass.test(password1.val())) {
            passwordsInfo.removeClass().addClass("strongpass").html("Strong! (Enter special chars to make even stronger");
        } else if (MediumPass.test(password1.val())) {
            passwordsInfo.removeClass().addClass("goodpass").html("Good! (Enter uppercase letter to make strong)");
        } else if (WeakPass.test(password1.val())) {
            passwordsInfo.removeClass().addClass("stillweakpass").html("Still Weak! (Enter digits to make good password)");
        } else {
            passwordsInfo.removeClass().addClass("weakpass").html("Very Weak! (Must be 5 or more chars)");
        }
    });
    $(password2).on("keyup", function (e) {
        if (password1.val() !== password2.val()) {
            passwordsInfo.removeClass().addClass("weakpass").html("Passwords do not match!");
        } else {
            passwordsInfo.removeClass().addClass("goodpass").html("Passwords match!");
        }
    });
}

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
    function A(a, b, d) {
        var c = a[0],
            g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
            e =
                d == _update
                    ? {
                          checked: c[k],
                          disabled: c[n],
                          indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate),
                      }
                    : c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g);
        else if (/^(un|en|de)/.test(d) && e) q(a, g);
        else if (d == _update) for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g);
        }
    }
    function x(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            u = b == _indeterminate,
            v = b == n,
            s = u ? _determinate : e ? y : "enabled",
            F = l(a, s + t(c[_type])),
            B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                    p = 'input[name="' + c.name + '"]',
                    p = w.length ? w.find(p) : f(p);
                p.each(function () {
                    this !== c && f(this).data(m) && q(f(this), b);
                });
            }
            u
                ? ((c[b] = !0), c[k] && q(a, k, "force"))
                : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d);
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "");
    }
    function q(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            f = b == _indeterminate,
            m = b == n,
            s = f ? _determinate : e ? y : "enabled",
            q = l(a, s + t(c[_type])),
            r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d);
        }
        !c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "");
    }
    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]')
                .add(a.closest(_label))
                .off(".i");
        }
    }
    function l(a, b, f) {
        if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")];
    }
    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f));
        }
    }
    var m = "iCheck",
        C = m + "-helper",
        r = "radio",
        k = "checked",
        y = "un" + k,
        n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function (a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
            c = f(),
            g = function (a) {
                a.each(function () {
                    var a = f(this);
                    c = a.is(d) ? c.add(a) : c.add(a.find(d));
                });
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))
            return (
                (a = a.toLowerCase()),
                g(this),
                c.each(function () {
                    var c = f(this);
                    "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
                    f.isFunction(b) && b();
                })
            );
        if ("object" != typeof a && a) return this;
        var e = f.extend({ checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0 }, a),
            l = e.handle,
            v = e.hoverClass || "hover",
            s = e.focusClass || "focus",
            t = e.activeClass || "active",
            B = !!e.labelHover,
            w = e.labelHoverClass || "hover",
            p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]';
        -50 > p && (p = -50);
        g(this);
        return c.each(function () {
            var a = f(this);
            E(a);
            var c = this,
                b = c.id,
                g = -p + "%",
                d = 100 + 2 * p + "%",
                d = {
                    position: "absolute",
                    top: g,
                    left: g,
                    display: "block",
                    width: d,
                    height: d,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0,
                },
                g = _mobile ? { position: "absolute", visibility: "hidden" } : p ? d : { position: "absolute", opacity: 0 },
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
                u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u &&
                z.each(function () {
                    h += 'aria-labelledby="';
                    this.id ? (h += this.id) : ((this.id = y), (h += y));
                    h += '"';
                });
            h = a
                .wrap(h + "/>")
                [_callback]("ifCreated")
                .parent()
                .append(e.insert);
            d = f('<ins class="' + C + '"/>')
                .css(d)
                .appendTo(h);
            a.data(m, { o: e, s: a.attr("style") }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length)
                z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
                    var d = b[_type],
                        e = f(this);
                    if (!c[n]) {
                        if (d == _click) {
                            if (f(b.target).is("a")) return;
                            A(a, !1, !0);
                        } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                        b.stopPropagation();
                    }
                });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return !1;
                if ("keydown" == d && 32 == b) return (c[_type] == r && c[k]) || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);
                else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s);
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
                var d = b[_type],
                    e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d)) h[_add](e);
                        else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w);
                    }
                    b.stopPropagation();
                }
            });
        });
    };
})(window.jQuery || window.Zepto);

/* Search modal */
$(".search-overlay-menu-btn").on("click", function (a) {
    $(".search-overlay-menu").addClass("open"), $('.search-overlay-menu > form > input[type="search"]').focus();
}),
    $(".search-overlay-close").on("click", function (a) {
        $(".search-overlay-menu").removeClass("open");
    }),
    $(".search-overlay-menu, .search-overlay-menu .search-overlay-close").on("click keyup", function (a) {
        (a.target == this || "search-overlay-close" == a.target.className || 27 == a.keyCode) &&
            $(this).removeClass("open");
    });
