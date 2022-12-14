var _isp_endpoint = "http://wix.instantsearchplus.com";
"https:" == location.protocol && (_isp_endpoint = "https://acp-mobile.appspot.com");
var _isp_endpoint_cdn = "https://wix-instantsearchplus-ssl.akamaized.net",
    docCookies = {
        getItem: function (b) {
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function (b, c, d, g, f, k) {
            if (!b || /^(?:expires|max\-age|path|domain|secure)$/i.test(b)) return !1;
            var h = "";
            if (d)
                switch (d.constructor) {
                    case Number:
                        h = Infinity === d ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + d;
                        break;
                    case String:
                        h = "; expires=" + d;
                        break;
                    case Date:
                        h = "; expires=" + d.toUTCString();
                }
            document.cookie = encodeURIComponent(b) + "=" + encodeURIComponent(c) + h + (f ? "; domain=" + f : "") + (g ? "; path=" + g : "") + (k ? "; secure" : "");
            return !0;
        },
        removeItem: function (b, c, d) {
            if (!b || !this.hasItem(b)) return !1;
            document.cookie = encodeURIComponent(b) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (d ? "; domain=" + d : "") + (c ? "; path=" + c : "");
            return !0;
        },
        hasItem: function (b) {
            return new RegExp("(?:^|;\\s*)" + encodeURIComponent(b).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
        },
        keys: function () {
            for (var b = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/), c = 0; c < b.length; c++) b[c] = decodeURIComponent(b[c]);
            return b;
        },
    };
function parseUri(b) {
    var c = parseUri.options;
    b = c.parser[c.strictMode ? "strict" : "loose"].exec(b);
    for (var d = {}, g = 14; g--; ) d[c.key[g]] = b[g] || "";
    d[c.q.name] = {};
    d[c.key[12]].replace(c.q.parser, function (f, k, h) {
        k && (d[c.q.name][k] = h);
    });
    return d;
}
parseUri.options = {
    strictMode: !1,
    key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
    q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    },
};
function getJSvars(b, c, d) {
    var g = document.getElementsByTagName("script");
    null == d && (d = "");
    for (a = 0; a < g.length; a++) {
        var f = g[a].src;
        if (0 <= f.indexOf(b))
            if (((c = c.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")), (b = new RegExp("[\\?&]" + c + "=([^&#]*)").exec(f)), null == b)) break;
            else return b[1];
    }
    return d;
}
function getParameterByName(b, c) {
    b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var d = new RegExp("[\\?&]" + b + "=([^&#]*)").exec(location.search);
    return null == d ? c : decodeURIComponent(d[1].replace(/\+/g, " "));
}
var CLIENT_VER = getJSvars("wix_instantsearchplus_widget", "v", "3.0.4"),
    MOBILE_ENDPOINT = getParameterByName("mobile", "0"),
    wix_instance = getParameterByName("instance", ""),
    is_mobile_useragent = /Android|BlackBerry|webOS|iPhone|iPod/i.test(navigator.userAgent),
    is_ipad_useragent = /iPad/i.test(navigator.userAgent),
    ie8_mode = !1;
is_ie8 && (ie8_mode = !0);
if (ie8_mode) {
    var greybox = document.getElementById("grey"),
        inputbox = document.getElementById("acp_magento_search_id_main_page");
    greybox.style.display = "none";
    inputbox.style.backgroundImage = "url(" + _isp_endpoint_cdn + "/wix_widget/images/search_icon2.png)";
    inputbox.style.backgroundRepeat = "no-repeat";
    inputbox.style.backgroundPosition = "5px center";
    is_ie8 && (inputbox.style.height = "26px");
} else document.getElementById("acp_magento_search_id_main_page").style.backgroundColor = "transparent";
if ("mobile" == Wix.Utils.getDeviceType() || is_mobile_useragent) MOBILE_ENDPOINT = "1";
var original_input_box_width;
function disable_inputbox(b) {
    var c = document.getElementById("acp_magento_search_id_main_page"),
        d = document.getElementById("grey");
    b ? ((c.readOnly = !0), (c.value = ""), (d.value = placeholder)) : (c.readOnly = !1);
}
var inputbox_min_width = "120px",
    inputbox_max_width = "317px",
    iframe_min_width = "195",
    iframe_max_width = "394",
    iframe_editor_width = "202",
    iframe_editor_height = "50",
    iframe_height = "50",
    dropdown_width = "379",
    max_site_suggestions = 6,
    global_web_search_min_char = 999;
"1" == MOBILE_ENDPOINT &&
((inputbox_min_width = "0px"), (inputbox_max_width = "218px"), (iframe_min_width = "66"), (iframe_max_width = "303"), (iframe_height = "50"), (dropdown_width = "300"), (max_site_suggestions = 6), (global_web_search_min_char = 999));
var viewMode = Wix.Utils.getViewMode();
"editor" == viewMode && disable_inputbox(!0);
Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function (b) {
    disable_inputbox("editor" == b.editMode);
    Wix.getSiteInfo(function (c) {
        updateSiteInfo(c);
    });
});
Wix.PubSub.subscribe("isp_navigation_out", function (b) {
    document.getElementById("acp_magento_search_id_main_page").value = "";
    document.getElementById("grey").value = placeholder;
});
function publish_wakeup() {
    Wix.PubSub.publish("isp_hidden_page_exist_wakeup", { exist: !0 }, !0);
}
publish_wakeup();
setTimeout(function () {
    publish_wakeup();
}, 11);
setTimeout(function () {
    publish_wakeup();
}, 1111);
setTimeout(function () {
    publish_wakeup();
}, 3333);
setTimeout(function () {
    publish_wakeup();
}, 7777);
var isp_hidden_page_exist = !1;
Wix.PubSub.subscribe(
    "isp_hidden_page_exist",
    function (b) {
        isp_hidden_page_exist = !0;
    },
    !0
);
try {
    Wix.isAppSectionInstalled("search_results_page", function (b) {
        1 == b && (isp_hidden_page_exist = !0);
    });
} catch (b) {}
"undefined" === typeof String.prototype.trim &&
(String.prototype.trim = function () {
    return String(this).replace(/^\s+|\s+$/g, "");
});
function api_do_full_text_search() {
    expand_collapse_search_box(!1);
    var b = document.getElementById("acp_magento_search_id_main_page").value.trim();
    "" != b && openWixModal(b);
}
document.getElementById("acp_magento_search_id_main_page").onkeyup = function (b) {
    isp_get_gray_suggest();
};
var myInput = document.getElementById("acp_magento_search_id_main_page");
myInput.addEventListener ? myInput.addEventListener("keydown", this.keyHandler, !1) : myInput.attachEvent && myInput.attachEvent("onkeydown", this.keyHandler);
function blurFocus() {
    try {
        this.tabIndex = -1;
    } catch (b) {}
    try {
        this.blur();
    } catch (b) {}
    try {
        e.preventDefault();
    } catch (b) {}
    try {
        e.stopPropogation();
    } catch (b) {}
    try {
        e.cancelBubble();
    } catch (b) {}
}
function keyHandler(b) {
    expand_collapse_search_box(!0);
    b || (b = window.event);
    b = b.keyCode || b.which;
    if ("13" == b) return api_do_full_text_search(), blurFocus(), !1;
    if ("39" == b || "9" == b) return isp_get_gray_suggest_to_inputbox(), blurFocus(), !1;
    46 < b && (document.getElementById("grey").value = " ");
}
var editor_locale = Wix.Utils.getLocale();
function expand_collapse_search_box(b) {
    document.getElementById("acp_magento_search_id_main_page");
    "undefined" === typeof $jquery
        ? setTimeout(function () {
            expand_collapse_search_box(b);
        }, 1111)
        : ($jquery("ul.ui-autocomplete").outerHeight(),
            Wix.Utils.getViewMode(),
            b
                ? (Wix.Utils.getViewMode(),
                    (original_inputbox_height = document.getElementById("acp_magento_search_id_main_page").offsetHeight),
                    (document.getElementById("acp_magento_search_id_main_page").style.height = original_inputbox_height + "px"),
                    (original_inputbox_height = document.getElementById("grey").offsetHeight),
                    (document.getElementById("grey").style.height = original_inputbox_height + "px"),
                    Wix.setHeight(600, { overflow: !0 }))
                : (Wix.Utils.getViewMode(), Wix.setHeight(original_widget_height, { overflow: !1 })));
}
var original_inputbox_height = 31,
    original_widget_height = 36;
Wix.getBoundingRectAndOffsets(function (b) {
    original_widget_height = b.rect.height;
});
function search_focus() {
    expand_collapse_search_box(!0);
    var b = document.getElementById("acp_magento_search_id_main_page");
    "" != b.value &&
    setTimeout(function () {
        try {
            $jquery(__acp.input_id_0).autocomplete("search", b.value);
        } catch (c) {}
    }, 400);
}
function search_blur() {
    setTimeout(function () {
        expand_collapse_search_box(!1);
    }, 222);
}
function injectJS(b) {
    var c = document.createElement("script");
    c.type = "text/javascript";
    try {
        c.setAttribute("rel", "nofollow");
    } catch (d) {}
    c.src = b;
    b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(c, b);
}
function injectCSS(b) {
    var c = document.createElement("style");
    c.type = "text/css";
    c.styleSheet ? (c.styleSheet.cssText = b) : c.appendChild(document.createTextNode(b));
    document.getElementsByTagName("head")[0].appendChild(c);
}
function is_RTL(b) {
    for (var c = 0; c < b.length; c++) if (1424 < b.charCodeAt(c) && 1535 > b.charCodeAt(c)) return !0;
    return !1;
}
function isp_get_gray_suggest_to_inputbox() {
    var b = document.getElementById("acp_magento_search_id_main_page").value.toLowerCase(),
        c = document.getElementById("grey").value.toLowerCase();
    return b == c.substr(0, b.length) ? ((document.getElementById("acp_magento_search_id_main_page").value = document.getElementById("grey").value), !0) : !1;
}
function isp_get_gray_suggest() {
    try {
        if (26 > document.getElementById("acp_magento_search_id_main_page").offsetHeight) return;
    } catch (m) {}
    var b = "",
        c = document.getElementById("acp_magento_search_id_main_page").value;
    if ("" == c) b = placeholder;
    else if ("0" == MOBILE_ENDPOINT && 0 == is_RTL(c) && 0 == is_RTL(placeholder)) {
        for (var d = c.toLowerCase(), g = c.length, f = 0; f < isp_pop_cache.length; f++)
            if (d == isp_pop_cache[f].substr(0, g)) {
                b = c + isp_pop_cache[f].substr(g);
                break;
            }
        if ("" == b && ((d = c.lastIndexOf(" ")), 1 < d)) {
            g = c.substr(d + 1);
            var k = g.length;
            if (0 < k)
                for (f = 0; f < isp_pop_cache.length; f++)
                    if (g == isp_pop_cache[f].substr(0, k)) {
                        b = c.substr(0, d + 1) + isp_pop_cache[f];
                        break;
                    }
        }
        try {
            var h = document.getElementById("acp_magento_search_id_main_page").clientWidth;
            12 * c.length > h && (b = "");
        } catch (m) {}
        "" == b && (b = " ");
    }
    inline_predict && (document.getElementById("grey").value = b);
}
var custom_css = null,
    placeholder = "Search Site",
    related_web_searches = !0,
    poweredBy = !0,
    is_premium = !1,
    is_over_usage = !1,
    resultOpenInTab = !1,
    inline_predict = !0,
    dropdown_predict = !0,
    site_base_url = null,
    isp_load_once = null,
    acp_options = { HOSTNAME: "editor.wix.com", search_target: "wix", MAX_INSTANT_SUGGESTIONS: max_site_suggestions, MIN_SUGGEST_WIDTH: dropdown_width, GLOBAL_MIN_CHARS: global_web_search_min_char },
    base_site_url = "";
try {
    base_site_url = document.referrer.split("/")[2];
} catch (b) {
    try {
        base_site_url = encodeURIComponent(document.referrer);
    } catch (c) {}
}
var printed_log = !1,
    isp_obj = { base_url: null, url: null, pages: null },
    instanceId = Wix.Utils.getInstanceId();
function isp_load_callback(b) {
    "premium" in b && (is_premium = b.premium);
    if (is_premium)
        try {
            var c = document.getElementById("acp_magento_search_id_main_page");
            c.addEventListener("focusin", function (f) {
                __load_autocomplete();
            });
            c.addEventListener("mouseenter", function (f) {
                __load_autocomplete();
            });
            c.addEventListener("click", function (f) {
                __load_autocomplete();
            });
        } catch (f) {}
    if ("css" in b) {
        custom_css = b.css;
        injectCSS(custom_css);
        try {
            localStorage.setItem(instanceId + "custom_css", custom_css);
        } catch (f) {}
    }
    "placeholderText" in b &&
    ((placeholder = b.placeholderText.replace("&apos;", "'").replace("&quot;", '"').replace("&amp;", "&") + "   "),
        document.getElementById("isp_icon_id").setAttribute("title", placeholder),
    is_RTL(placeholder) && injectCSS("#grey, #acp_magento_search_id_main_page {text-align:right;}"));
    if ("detected_language" in b)
        try {
            (isp_site_lang = b.detected_language), localStorage.setItem(base_site_url + "detected_language", b.detected_language);
        } catch (f) {}
    try {
        localStorage.setItem(base_site_url + "placeholder", placeholder);
    } catch (f) {}
    "" == document.getElementById("acp_magento_search_id_main_page").value &&
    ((document.getElementById("grey").value = placeholder), ie8_mode && document.getElementById("acp_magento_search_id_main_page").setAttribute("placeholder", placeholder));
    if ("relatedWebSearch" in b && (0 == b.relatedWebSearch || "false" == b.relatedWebSearch)) {
        related_web_searches = !1;
        acp_options.GLOBAL_MIN_CHARS = 9999;
        try {
            __acp.GLOBAL_MIN_CHARS = 9999;
        } catch (f) {}
    }
    if ("editor" == Wix.Utils.getViewMode() && localStorage) {
        0 == localStorage.getItem(base_site_url + "isp_is_premium_" + instanceId) &&
        1 == is_premium &&
        ((function (f, k, h, m, l, n, p) {
            f.GoogleAnalyticsObject = l;
            f[l] =
                f[l] ||
                function () {
                    (f[l].q = f[l].q || []).push(arguments);
                };
            f[l].l = 1 * new Date();
            n = k.createElement(h);
            p = k.getElementsByTagName(h)[0];
            n.src = m;
            p.parentNode.insertBefore(n, p);
        })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
            ga("create", "UA-32957572-9", "instantsearchplus.com"),
            ga("send", "pageview"),
            ga("send", "isp_upsell", "isp_editor_upgrade_detected", instanceId),
            (c = docCookies.getItem("isp_campaign")),
        null != c && "" != c && ((c = _isp_endpoint + "/wix_upgrade_campaign?v=" + CLIENT_VER + "&instance=" + encodeURIComponent(instanceId) + "&isp_campaign=" + encodeURIComponent(c)), injectJS(c)));
        try {
            localStorage.setItem(base_site_url + "isp_is_premium_" + instanceId, is_premium);
        } catch (f) {}
    }
    "over_usage" in b && (is_over_usage = b.over_usage);
    try {
        printed_log || (console.log("Site Search+ (Instance: " + instanceId + " | Premium: " + is_premium + " | Over-usage: " + is_over_usage + ")"), (printed_log = !0));
    } catch (f) {}
    "poweredBy" in b && (poweredBy = b.poweredBy);
    "resultOpenInTab" in b && (resultOpenInTab = b.resultOpenInTab);
    isp_db_set("resultOpenInTab", resultOpenInTab);
    isp_obj.resultOpenInTab = resultOpenInTab;
    "inline_predict" in b && (inline_predict = b.inline_predict);
    "dropdown_predict" in b && (dropdown_predict = b.dropdown_predict);
    if (0 == dropdown_predict || 0 == dropdown_predict || "false" == dropdown_predict)
        setTimeout(function () {
            try {
                $jquery(__acp.input_id_0).autocomplete("destroy");
            } catch (f) {}
        }, 22),
            setTimeout(function () {
                try {
                    $jquery(__acp.input_id_0).autocomplete("destroy");
                } catch (f) {}
            }, 222),
            setTimeout(function () {
                try {
                    $jquery(__acp.input_id_0).autocomplete("destroy");
                } catch (f) {}
            }, 555),
            setTimeout(function () {
                try {
                    $jquery(__acp.input_id_0).autocomplete("destroy");
                } catch (f) {}
            }, 1111);
    c = !1;
    "contact_form" in b && (c = b.contact_form);
    try {
        localStorage.setItem(base_site_url + "contact_form", c);
    } catch (f) {}
    document.getElementById("acp_modal_body").style.display = "";
    if (1 == is_over_usage || 1 == is_over_usage || "true" == is_over_usage) {
        try {
            console.warn("%c Site Search+ for Wix Over Capacity Alert - upgrade now to allow unlimited user searches", "font-weight: bold; background: #ffc; color: #111");
        } catch (f) {}
        c = document.getElementById("acp_magento_search_id_main_page");
        var d = document.getElementById("grey"),
            g = document.getElementById("isp_icon_id");
        "editor" == viewMode
            ? (c.setAttribute("readonly", !0), c.setAttribute("disabled", !0), (d.value = "Upgrade in Settings"), (d.style.backgroundColor = "#ee1111"), (g.style.pointerEvents = "none"))
            : ((c.style.display = "none"), (d.style.display = "none"), (g.style.display = "none"));
    }
    "editor" == viewMode && "retarget_tag" in b && "" != b.retarget_tag && ((c = document.getElementById("ggl_retarget_id")), c.src != b.retarget_tag && (c.src = b.retarget_tag));
}
Wix.getSitePages(function (b) {
    isp_obj.pages = b;
    try {
        localStorage.setItem(base_site_url + "sitePages", JSON.stringify(b));
    } catch (c) {}
});
function _getSiteBaseUrl(b) {
    var c = parseUri(b);
    b = c.protocol + "://" + c.host;
    if (0 < b.indexOf(".wix.com") || 0 < b.indexOf(".wixsite.com")) {
        c = c.path;
        var d = c.indexOf("/", 1);
        0 < d && (c = c.substr(0, d));
        b += c;
    }
    return b;
}
function getSiteBaseUrl(b) {
    return void 0 != b.baseUrl && "" != b.baseUrl ? b.baseUrl : _getSiteBaseUrl(b.url);
}
function __load_autocomplete() {
    if (1 == dropdown_predict || 1 == dropdown_predict || "true" == dropdown_predict)
        var b = 300,
            c = setInterval(function () {
                --b;
                0 > b && clearInterval(c);
                var d = document.getElementById("acp_magento_search_id_main_page");
                d && d.offsetHeight && 0 < d.offsetHeight && (clearInterval(c), injectJS(_isp_endpoint_cdn + "/js/instantsearch-desktop.v.1.01.min.js?v=" + CLIENT_VER));
            }, 20);
}
function updateSiteInfo(b) {
    isp_obj.url = b.url;
    isp_obj.base_url = b.baseUrl;
    b = getSiteBaseUrl(b);
    -1 == b.indexOf("editor.wix") && ((isp_obj.base_url = b), (isp_load_once = !1));
    if (!isp_load_once) {
        b = isp_obj.url;
        0 <= b.indexOf("editor.wix.com") && (b = "editor.wix.com");
        var c = Wix.Utils.getInstanceId();
        b =
            "https://acp-mobile.appspot.com/wix_widget_load?wix_v2=1&v=" +
            CLIENT_VER +
            "&ie8=" +
            (0 + ie8_mode) +
            "&instance=" +
            encodeURIComponent(c) +
            "&locale=" +
            encodeURIComponent(editor_locale) +
            "&url=" +
            encodeURIComponent(b) +
            "&site_base_url=" +
            encodeURIComponent(isp_obj.base_url) +
            "&wix_instance=" +
            encodeURIComponent(wix_instance);
        try {
            localStorage.setItem(base_site_url + "inject_url", b);
        } catch (d) {}
        injectJS(b);
        isp_load_once = !0;
    }
    -1 == isp_obj.base_url.indexOf("editor.wix") ? (acp_options.HOSTNAME = isp_obj.base_url) : (acp_options.HOSTNAME = "editor.wix.com");
    try {
        localStorage.setItem(base_site_url + "CURRENT_URL", isp_obj.url);
    } catch (d) {}
}
var isp_pop_cache = [];
try {
    var inject_url = localStorage.getItem(base_site_url + "inject_url");
    null != inject_url && "" != inject_url && (injectJS(inject_url), (isp_load_once = !0));
} catch (b) {}
Wix.getSiteInfo(function (b) {
    updateSiteInfo(b);
    try {
        localStorage.setItem(base_site_url + "siteInfo", JSON.stringify(b));
    } catch (c) {}
});
Wix.addEventListener(Wix.Events.PAGE_NAVIGATION_CHANGE, function (b) {
    Wix.getSiteInfo(function (c) {
        updateSiteInfo(c);
    });
});
Wix.addEventListener(Wix.Events.SITE_PUBLISHED, function (b) {
    Wix.getSiteInfo(function (c) {
        var d = c.url;
        c = getSiteBaseUrl(c);
        var g = d;
        0 <= g.indexOf("editor.wix.com") && (g = "editor.wix.com");
        isp_load_once ||
        (injectJS(
            _isp_endpoint +
            "/wix_widget_load?wix_v2=1&v=" +
            CLIENT_VER +
            "&ie8=" +
            (0 + ie8_mode) +
            "&instance=" +
            encodeURIComponent(instanceId) +
            "&locale=" +
            encodeURIComponent(editor_locale) +
            "&url=" +
            encodeURIComponent(g) +
            "&site_base_url=" +
            encodeURIComponent(c)
        ) +
        "&wix_instance=" +
        encodeURIComponent(wix_instance),
            (isp_load_once = !0));
        null == d && alert("publish error");
        injectJS(
            _isp_endpoint +
            "/wix_site_published?wix_v2=1&v=" +
            CLIENT_VER +
            "&instance=" +
            encodeURIComponent(instanceId) +
            "&locale=" +
            encodeURIComponent(editor_locale) +
            "&url=" +
            encodeURIComponent(g) +
            "&site_base_url=" +
            encodeURIComponent(c) +
            "&wix_instance=" +
            encodeURIComponent(wix_instance)
        );
    });
});
Wix.addEventListener(Wix.Events.COMPONENT_DELETED, function (b) {
    Wix.getSiteInfo(function (c) {
        var d = c.url;
        c = getSiteBaseUrl(c);
        0 <= d.indexOf("editor.wix.com") && (d = "editor.wix.com");
        injectJS(_isp_endpoint + "/wix_widget_deleted?wix_v2=1&v=" + CLIENT_VER + "&instance=" + encodeURIComponent(instanceId) + "&url=" + encodeURIComponent(d) + "&site_base_url=" + encodeURIComponent(c));
    });
});
var MobileUtils = {
    MOBILE_MAX_WIDTH: 600,
    isMobile: function () {
        if ("boolean" === typeof this._isMobile) return this._isMobile;
        var b = this.getScreenWidth() < this.MOBILE_MAX_WIDTH;
        this.isTouchScreen() || this.isMSMobileDevice() ? (this._isMobile = b && !0) : (this._isMobile = !1);
        return this._isMobile;
    },
    getScreenWidth: function () {
        var b = this._getDeviceParamsByUA();
        return b && b.width ? b.width : !1;
    },
    getScreenHeight: function () {
        var b = this._getDeviceParamsByUA();
        return b && b.height ? b.height : !1;
    },
    isAppleMobileDevice: function () {
        return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
    },
    isMSMobileDevice: function () {
        return /iemobile/i.test(navigator.userAgent.toLowerCase());
    },
    isAndroidMobileDevice: function () {
        return /android/i.test(navigator.userAgent.toLowerCase());
    },
    isNewChromeOnAndroid: function () {
        if (this.isAndroidMobileDevice()) {
            var b = navigator.userAgent.toLowerCase();
            if (/chrome/i.test(b) && ((b = b.split("chrome/")[1].split(" ")[0].split(".")[0]), 27 <= parseInt(b))) return !0;
        }
        return !1;
    },
    isTouchScreen: function () {
        return "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch);
    },
    isViewportOpen: function () {
        return !!document.getElementById("wixMobileViewport");
    },
    _getDevicePixelRatio: function () {
        return this.isMSMobileDevice() ? Math.round(window.screen.availWidth / document.documentElement.clientWidth) : window.devicePixelRatio;
    },
    getInitZoom: function () {
        this._initZoom || (this._initZoom = this.getScreenWidth() / document.body.offsetWidth);
        return this._initZoom;
    },
    getZoom: function () {
        return (90 === Math.abs(window.orientation) ? this.getScreenHeight() : this.getScreenWidth()) / window.innerWidth;
    },
    _getDeviceParamsByUA: function () {
        if (!navigator || !navigator.userAgent) return !1;
        var b = navigator.userAgent.toLowerCase(),
            c = this._paramsForSpecificAndroidDevices(b),
            d = Math.min(screen.width, screen.height),
            g = Math.max(screen.width, screen.height);
        c && ((d = c.width), (g = c.height));
        switch (!0) {
            case /ip(hone|od|ad)/i.test(b):
                break;
            case /android/i.test(b):
                if (!this.isNewChromeOnAndroid() || c) (d /= this._getDevicePixelRatio()), (g /= this._getDevicePixelRatio());
                break;
            case /iemobile/i.test(b):
                (d = document.documentElement.clientWidth), (g = document.documentElement.clientHeight);
        }
        return { width: d, height: g };
    },
    _paramsForSpecificAndroidDevices: function (b) {
        switch (!0) {
            case /(GT-S5300B|GT-S5360|GT-S5367|GT-S5570I|GT-S6102B|LG-E400f|LG-E400g|LG-E405f|LG-L38C|LGL35G)/i.test(b):
                return { width: 240, height: 320 };
            case /(Ls 670|GT-S5830|GT-S5839i|GT-S6500D|GT-S6802B|GT-S7500L|H866C|Huawei-U8665|LG-C800|LG-MS695|LG-VM696|LGL55C|M865|Prism|SCH-R720|SCH-R820|SCH-S720C|SPH-M820-BST|SPH-M930BST|U8667|X501_USA_Cricket|ZTE-Z990G)/i.test(b):
                return { width: 320, height: 480 };
            case /(5860E|ADR6300|ADR6330VW|ADR8995|APA9292KT|C771|GT-I8160|GT-I9070|GT-I9100|HTC-A9192|myTouch4G|N860|PantechP9070|PC36100|pcdadr6350|SAMSUNG-SGH-I727|SAMSUNG-SGH-I777|SAMSUNG-SGH-I997|SC-03D|SCH-I405|SCH-I500|SCH-I510|SCH-R760|SGH-S959G|SGH-T679|SGH-T769|SGH-T959V|SGH-T989|SPH-D700)/i.test(
                b
            ):
                return { width: 480, height: 800 };
            case /(DROIDX|SonyEricssonSO-02C|SonyEricssonST25i)/i.test(b):
                return { width: 480, height: 854 };
            case /(DROID3|MB855)/i.test(b):
                return { width: 540, height: 960 };
            case /F-05D/i.test(b):
                return { width: 720, height: 1280 };
            default:
                return !1;
        }
    },
};
function openWixModal(b) {
    var c = 800,
        d = 670;
    "1" == MOBILE_ENDPOINT && ((c = MobileUtils.getScreenWidth() - 20), (d = MobileUtils.getScreenHeight() - 20));
    is_ipad_useragent && (c = 940);
    isp_db_set("premium", is_premium);
    isp_db_set("mobile", MOBILE_ENDPOINT);
    isp_db_set("v", CLIENT_VER);
    isp_db_set("instanceId", instanceId);
    isp_db_set("poweredBy", poweredBy);
    isp_db_set("related_web_searches", related_web_searches);
    isp_db_set("site_url", acp_options.HOSTNAME);
    isp_hidden_page_exist
        ? Wix.Utils.navigateToSection({ sectionId: "search_results_page", state: encodeURIComponent(b) }, function (g) {})
        : Wix.openModal(
            _isp_endpoint +
            "/wix_widget/wix_instantsearchplus_modal-V2.html?q=" +
            encodeURIComponent(b) +
            "&premium=" +
            is_premium +
            "&mobile=" +
            MOBILE_ENDPOINT +
            "&v=" +
            CLIENT_VER +
            "&instanceId=" +
            encodeURIComponent(instanceId) +
            "&resultOpenInTab=" +
            resultOpenInTab +
            "&poweredBy=" +
            poweredBy +
            "&related_web_searches=" +
            related_web_searches +
            "&site_url=" +
            acp_options.HOSTNAME,
            c,
            d,
            onModalClose
        );
}
var onModalClose = function (b) {
    in_full_text_search_mode = !1;
    expand_collapse_search_box(!1);
    b && b.message && b.message.url && (window.top.location = b.message.url);
};
function isp_db_set(b, c) {
    try {
        localStorage.setItem("isp_" + b, c);
    } catch (d) {
        docCookies.setItem("isp_" + b, c);
    }
}
try {
    document.getElementById("acp_btn").blur();
} catch (b) {}
