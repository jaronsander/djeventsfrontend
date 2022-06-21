exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP"
};


/***/ }),

/***/ 5522:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__VYZ3G",
	"logo": "Header_logo__6vBZG"
};


/***/ }),

/***/ 2136:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Layout_container__S4aNf"
};


/***/ }),

/***/ 2046:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Search_search__t4jaQ"
};


/***/ }),

/***/ 7711:
/***/ ((module) => {

// Exports
module.exports = {
	"showcase": "Showcase_showcase__VZOKI"
};


/***/ }),

/***/ 6490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: ./styles/Search.module.css
var Search_module = __webpack_require__(2046);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
;// CONCATENATED MODULE: ./components/Search.js




function Search() {
    const { 0: term , 1: setTerm  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/events/search?term=${term}`);
        setTerm("");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Search_module_default()).search,
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                value: term,
                onChange: (e)=>setTerm(e.target.value)
                ,
                placeholder: "Search Events"
            })
        })
    });
}
/* harmony default export */ const components_Search = (Search);

// EXTERNAL MODULE: ./context/AuthContext.js
var AuthContext = __webpack_require__(4642);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(5522);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js







function Header() {
    const { user , logout  } = (0,external_react_.useContext)(AuthContext/* default */.Z);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "DJ Events"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Search, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: "/events",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Events"
                                })
                            })
                        }),
                        user ? // If logged in
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/events/add",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Add Event"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        href: "/account/dashboard",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Dashboard"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        onClick: ()=>logout()
                                        ,
                                        className: "btn-secondary btn-icon",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSignOutAlt, {}),
                                            " Logout"
                                        ]
                                    })
                                })
                            ]
                        }) : // if logged out
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: "/account/login",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "btn-secondary btn-icon",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSignInAlt, {}),
                                        "Login"
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Copywright \xa9 DJ Events 2022"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                    href: "/about",
                    children: "About This Project"
                })
            })
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Showcase.module.css
var Showcase_module = __webpack_require__(7711);
var Showcase_module_default = /*#__PURE__*/__webpack_require__.n(Showcase_module);
;// CONCATENATED MODULE: ./components/Showcase.js


function Showcase() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Showcase_module_default()).showcase,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Welcome To The Party!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Find the hottest DJ Events"
            })
        ]
    });
}
/* harmony default export */ const components_Showcase = (Showcase);

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.js







function Layout({ title , keywords , description , children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            router.pathname === "/" && /*#__PURE__*/ jsx_runtime_.jsx(components_Showcase, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).container,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
Layout.defaultProps = {
    title: "DJ Events",
    description: "The coolest events around town",
    keywords: "DJ, cool, Events"
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;