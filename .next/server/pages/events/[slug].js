(() => {
var exports = {};
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 3833:
/***/ ((module) => {

// Exports
module.exports = {
	"event": "Event_event__HYryM",
	"image": "Event_image__ODtSR",
	"controls": "Event_controls__bYBve",
	"delete": "Event_delete__BELBA",
	"back": "Event_back__ck1N_"
};


/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Layout.js + 4 modules
var Layout = __webpack_require__(6490);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
;// CONCATENATED MODULE: external "react-geocode"
const external_react_geocode_namespaceObject = require("react-geocode");
var external_react_geocode_default = /*#__PURE__*/__webpack_require__.n(external_react_geocode_namespaceObject);
;// CONCATENATED MODULE: ./components/EventMap.js





function EventMap({ evt  }) {
    const { 0: lat1 , 1: setLat  } = (0,external_react_.useState)(null);
    const { 0: lng1 , 1: setLng  } = (0,external_react_.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        // Get latitude & longitude from address.
        external_react_geocode_default().fromAddress(evt.attributes.address).then((response)=>{
            const { lat , lng  } = response.results[0].geometry.location;
            setLat(lat);
            setLng(lng);
            setLoading(false);
        }, (error)=>{
            console.error(error);
        });
    }, []);
    external_react_geocode_default().setApiKey("AIzaSyD1yYB-PkeVqkYEJTXdAd7xFB4j0yFEJq8");
    if (loading) return false;
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_map_gl_default()), {
        initialViewState: {
            latitude: lat1,
            longitude: lng1,
            zoom: 14
        },
        style: {
            width: 800,
            height: 600
        },
        mapStyle: "mapbox://styles/mapbox/streets-v9",
        mapboxAccessToken: "pk.eyJ1Ijoic2FrYWx0aG9yIiwiYSI6ImNsNGtmanVpYTBjeTEzYmx4bTFqYzJ1MmMifQ.LGToTYNY43PTvpC5papdCA",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
            longitude: lng1,
            latitude: lat1,
            color: "red"
        })
    });
};

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
// EXTERNAL MODULE: ./styles/Event.module.css
var Event_module = __webpack_require__(3833);
var Event_module_default = /*#__PURE__*/__webpack_require__.n(Event_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/events/[slug].js

const qs = __webpack_require__(7104);









function EventPage({ evt  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Event_module_default()).event,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        new Date(evt.attributes.date).toLocaleDateString("en-US"),
                        " at ",
                        evt.attributes.time
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: evt.attributes.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}),
                evt.attributes.image.data && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Event_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: evt.attributes.image.data.attributes.url,
                        width: 960,
                        height: 600
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Performers:"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: evt.attributes.performers
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Description:"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: evt.attributes.description
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        "Venue: ",
                        evt.attributes.venue
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: evt.attributes.address
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(EventMap, {
                    evt: evt
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/events",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (Event_module_default()).back,
                        children: [
                            "<",
                            "Go Back"
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _slug_ = (EventPage);
async function getServerSideProps({ query: { slug  }  }) {
    const query = qs.stringify({
        populate: "*",
        filters: {
            slug: {
                $eq: slug
            }
        }
    });
    const res = await fetch(`${config/* API_URL */.T}/events?${query}`);
    const events = await res.json();
    return {
        props: {
            evt: events.data[0]
        }
    };
}


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,642,490], () => (__webpack_exec__(4666)));
module.exports = __webpack_exports__;

})();