(() => {
var exports = {};
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 6699:
/***/ ((module) => {

// Exports
module.exports = {
	"dash": "Dashboard_dash__zAbkP"
};


/***/ }),

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"event": "DashboardEvent_event__TF5ng",
	"edit": "DashboardEvent_edit__idiHa",
	"delete": "DashboardEvent_delete__3XuWC"
};


/***/ }),

/***/ 9751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ parseCookies)
});

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./helpers/index.js

function parseCookies(req) {
    return external_cookie_default().parse(req ? req.headers.cookie || "" : "");
}


/***/ }),

/***/ 9962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js + 4 modules
var Layout = __webpack_require__(6490);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./styles/DashboardEvent.module.css
var DashboardEvent_module = __webpack_require__(353);
var DashboardEvent_module_default = /*#__PURE__*/__webpack_require__.n(DashboardEvent_module);
;// CONCATENATED MODULE: ./components/DashboardEvent.js




function DashboardEvent({ evt , handleDelete  }) {
    //console.log(evt)
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DashboardEvent_module_default()).event,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/events/${evt.attributes.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: evt.attributes.name
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/events/edit/${evt.id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: (DashboardEvent_module_default()).edit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPencilAlt, {}),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Edit Event"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: (DashboardEvent_module_default())["delete"],
                onClick: ()=>handleDelete(evt.id)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {}),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Delete"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_DashboardEvent = (DashboardEvent);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
// EXTERNAL MODULE: ./styles/Dashboard.module.css
var Dashboard_module = __webpack_require__(6699);
var Dashboard_module_default = /*#__PURE__*/__webpack_require__.n(Dashboard_module);
// EXTERNAL MODULE: ./helpers/index.js + 1 modules
var helpers = __webpack_require__(9751);
;// CONCATENATED MODULE: ./pages/account/dashboard.js







const qs = __webpack_require__(7104);
function DashboardPage({ events , token  }) {
    const router = (0,router_.useRouter)();
    const deleteEvent = async (id)=>{
        //console.log(id)
        if (confirm("Are you sure")) {
            const res = await fetch(`${config/* API_URL */.T}/events/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message);
            } else {
                router.push("/events");
            }
        }
    };
    //console.log(events)
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: "User Dashboard",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Dashboard_module_default()).dash,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Dashboard"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "My Events"
                }),
                events.map((evt)=>/*#__PURE__*/ jsx_runtime_.jsx(components_DashboardEvent, {
                        evt: evt,
                        handleDelete: deleteEvent
                    }, evt.id)
                )
            ]
        })
    });
}
async function getServerSideProps({ req  }) {
    const data = await fetch(`${config/* NEXT_URL */.G}/api/user`, req);
    const user = await data.json();
    //console.log(user.user.username)
    const query = qs.stringify({
        populate: {
            user: {
                filters: {
                    id: {
                        $eq: user.user.id
                    }
                }
            }
        }
    });
    const { token  } = (0,helpers/* parseCookies */.j)(req);
    // console.log(`${API_URL}/events?${query}`)
    const evts = await fetch(`${config/* API_URL */.T}/events?${query}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const evt = await evts.json();
    // console.log(evt.data)
    const userEvt = evt.data.filter((e)=>e.attributes.user.data !== null
    );
    return {
        props: {
            events: userEvt,
            token
        }
    };
}
/* harmony default export */ const dashboard = (DashboardPage);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,642,490], () => (__webpack_exec__(9962)));
module.exports = __webpack_exports__;

})();