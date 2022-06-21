(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 2584:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Form_form__mh4_m",
	"file": "Form_file__ZNyJL",
	"grid": "Form_grid___DuXT"
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

/***/ 6915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6490);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1645);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2584);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4642);












var slugify = __webpack_require__(3673);
function AddEventPage({ token  }) {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    const id = user ? user.id : "";
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        slug: "",
        performers: "",
        venue: "",
        address: "",
        date: "",
        time: "",
        description: "",
        user: id
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        values.slug = slugify(values.name.toLowerCase());
        //Validation
        const hasEmptyFields = Object.values(values).some((element)=>element === ""
        );
        if (hasEmptyFields) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Please fill in all fields");
        }
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_8__/* .API_URL */ .T}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                data: values
            })
        });
        if (!res.ok) {
            if (res.status === 403 || res.status === 401) {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("No token included");
                return;
            }
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Something went wrong");
        } else {
            const evt = await res.json();
            router.push(`/events/${evt.data.attributes.slug}`);
        }
    };
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: "Add New Event",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "/events",
                children: "Go Back"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Add Event"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_10___default().form),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "name",
                                        children: "Event Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: values.name,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "performers",
                                        children: "Performers"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "performers",
                                        id: "performers",
                                        value: values.performers,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "venue",
                                        children: "Venue"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "venue",
                                        id: "venue",
                                        value: values.venue,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "address",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "address",
                                        id: "address",
                                        value: values.address,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "date",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "date",
                                        name: "date",
                                        id: "date",
                                        value: values.date,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "time",
                                        children: "Time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "time",
                                        id: "time",
                                        value: values.time,
                                        onChange: handleInputChange
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "description",
                                children: "Event Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                type: "text",
                                name: "description",
                                id: "description",
                                value: values.description,
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        value: "Add Event",
                        className: "btn"
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps({ req  }) {
    const { token  } = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__/* .parseCookies */ .j)(req);
    return {
        props: {
            token
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddEventPage);


/***/ }),

/***/ 8819:
/***/ (() => {



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

/***/ }),

/***/ 3673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,642,490], () => (__webpack_exec__(6915)));
module.exports = __webpack_exports__;

})();