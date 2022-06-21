(() => {
var exports = {};
exports.id = 503;
exports.ids = [503];
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

/***/ 8099:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "Modal_modal__yDLSi",
	"header": "Modal_header__iLDRm",
	"body": "Modal_body__prdbO",
	"overlay": "Modal_overlay__C7JRk"
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

/***/ 3965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/index.js + 1 modules
var helpers = __webpack_require__(9751);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Layout.js + 4 modules
var Layout = __webpack_require__(6490);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./styles/Modal.module.css
var Modal_module = __webpack_require__(8099);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: ./components/Modal.js





function Modal({ show , onClose , children , title  }) {
    const { 0: isBrowser , 1: setIsBrowser  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>setIsBrowser(true)
    );
    const handleClose = (e)=>{
        e.preventDefault();
        onClose();
    };
    const modalContent = show ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Modal_module_default()).overlay,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Modal_module_default()).modal,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Modal_module_default()).header,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        onClick: handleClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {})
                    })
                }),
                title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Modal_module_default()).body,
                    children: children
                })
            ]
        })
    }) : null;
    if (isBrowser) {
        return /*#__PURE__*/ external_react_dom_default().createPortal(modalContent, document.getElementById("modal-root"));
    } else {
        return null;
    }
}
/* harmony default export */ const components_Modal = (Modal);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(1645);
// EXTERNAL MODULE: ./styles/Form.module.css
var Form_module = __webpack_require__(2584);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
;// CONCATENATED MODULE: ./components/ImageUpload.js




function ImageUpload({ evtId , imageUploaded , token  }) {
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("files", image);
        formData.append("ref", "api::event.event");
        formData.append("refId", evtId);
        formData.append("field", "image");
        formData.append("source", "users-permissions");
        const res = await fetch(`${config/* API_URL */.T}/upload`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });
        if (res.ok) {
            imageUploaded();
        }
    };
    const handleFileChange = (e)=>{
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Form_module_default()).form,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: " Upload event Image "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Form_module_default()).file,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "file",
                            onChange: handleFileChange
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "submit",
                        value: "Upload",
                        className: "btn"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_ImageUpload = (ImageUpload);

;// CONCATENATED MODULE: ./pages/events/edit/[id].js















var slugify = __webpack_require__(3673);
function EditEventPage({ evt: evt1 , token  }) {
    //console.log(evt.attributes)
    const { 0: values , 1: setValues  } = (0,external_react_.useState)({
        name: evt1.attributes.name,
        slug: slugify(evt1.attributes.name).toLowerCase(),
        performers: evt1.attributes.performers,
        venue: evt1.attributes.venue,
        address: evt1.attributes.address,
        date: evt1.attributes.date,
        time: evt1.attributes.time,
        description: evt1.attributes.description
    });
    const { 0: imagePreview , 1: setImagePreview  } = (0,external_react_.useState)(evt1.attributes.image.data ? evt1.attributes.image.data.attributes.url : null);
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        values.slug = slugify(values.name.toLowerCase());
        //Validation
        const hasEmptyFields = Object.values(values).some((element)=>element === ""
        );
        if (hasEmptyFields) {
            external_react_toastify_.toast.error("Please fill in all fields");
        }
        const res = await fetch(`${config/* API_URL */.T}/events/${evt1.id}`, {
            method: "PUT",
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
                external_react_toastify_.toast.error("Unauthorized");
                return;
            }
            external_react_toastify_.toast.error("Something went wrong");
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
    const imageUploaded = async (e)=>{
        const res = await fetch(`${config/* API_URL */.T}/events/${evt1.id}?populate=%2A`);
        const data = await res.json();
        //console.log(await data)
        setImagePreview(data.data.attributes.image.data.attributes.url);
        setShowModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Edit Event",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/events",
                children: "Go Back"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Edit Event"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: (Form_module_default()).form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Form_module_default()).grid,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "name",
                                        children: "Event Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: values.name,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "performers",
                                        children: "Performers"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "performers",
                                        id: "performers",
                                        value: values.performers,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "venue",
                                        children: "Venue"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "venue",
                                        id: "venue",
                                        value: values.venue,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "address",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "address",
                                        id: "address",
                                        value: values.address,
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "date",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "date",
                                        name: "date",
                                        id: "date",
                                        value: external_moment_default()(values.date).format("yyyy-MM-DD"),
                                        onChange: handleInputChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "time",
                                        children: "Time"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "description",
                                children: "Event Description"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                type: "text",
                                name: "description",
                                id: "description",
                                value: values.description,
                                onChange: handleInputChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "submit",
                        value: "Update Event",
                        className: "btn"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Event Image"
            }),
            imagePreview ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: imagePreview,
                height: 100,
                width: 170
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "No image uploaded"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: ()=>setShowModal(true)
                        ,
                        className: "btn-secondary",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaImage, {}),
                            " Set Image"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Modal, {
                        show: showModal,
                        onClose: ()=>setShowModal(false)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ImageUpload, {
                            evtId: evt1.id,
                            imageUploaded: imageUploaded,
                            token: token
                        })
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps({ params: { id  } , req  }) {
    const { token  } = (0,helpers/* parseCookies */.j)(req);
    const res = await fetch(`${config/* API_URL */.T}/events/${id}?populate=%2A`);
    const evt = await res.json();
    //console.log(req.headers.cookie)
    return {
        props: {
            evt: evt.data,
            token
        }
    };
}
/* harmony default export */ const _id_ = (EditEventPage);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,642,490], () => (__webpack_exec__(3965)));
module.exports = __webpack_exports__;

})();