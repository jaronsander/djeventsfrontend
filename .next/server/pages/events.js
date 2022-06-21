"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 4893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EventsPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js + 4 modules
var Layout = __webpack_require__(6490);
// EXTERNAL MODULE: ./components/Eventitem.js
var Eventitem = __webpack_require__(3662);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Pagination.js


function Pagination({ page , total  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            page > 1 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/events?page=${page - 1}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "btn-secondary",
                    children: "Prev"
                })
            }),
            page < total && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/events?page=${page + 1}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "btn-secondary",
                    children: "Next"
                })
            })
        ]
    });
}
/* harmony default export */ const components_Pagination = (Pagination);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
;// CONCATENATED MODULE: ./pages/events/index.js

const qs = __webpack_require__(7104);




const PER_PAGE = 5;
function EventsPage({ events , page , total  }) {
    //console.log(events)
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Events"
            }),
            events.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "No events to show"
            }),
            events.map((evt)=>/*#__PURE__*/ jsx_runtime_.jsx(Eventitem/* default */.Z, {
                    evt: evt.attributes
                }, evt.id)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Pagination, {
                page: page,
                total: total
            })
        ]
    });
};
async function getServerSideProps({ query: { page =1  }  }) {
    //Fetch events
    const query = qs.stringify({
        populate: "*",
        sort: [
            "date:asc"
        ],
        pagination: {
            page: page,
            pageSize: PER_PAGE
        }
    });
    const eventRes = await fetch(`${config/* API_URL */.T}/events?${query}`);
    //console.log(await res.json())
    const events = await eventRes.json();
    //console.log(events.meta.pagination.pageCount)
    return {
        props: {
            events: events.data,
            page: +page,
            total: events.meta.pagination.pageCount
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,642,490,662], () => (__webpack_exec__(4893)));
module.exports = __webpack_exports__;

})();