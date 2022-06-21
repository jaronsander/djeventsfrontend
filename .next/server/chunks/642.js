"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ NEXT_URL),
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "https://boiling-inlet-63943.herokuapp.com/api" || 0;
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1645);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({ children  })=>{
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function checkUserLoggedIn() {
            const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .G}/api/user`);
            const data = await res.json();
            if (res.ok) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        }
        checkUserLoggedIn();
    }, []);
    // Register User
    const register = async (user)=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .G}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();
        //console.log(data)
        if (res.ok) {
            setUser(data.user);
            router.push("/account/dashboard");
        } else {
            setError(data);
            console.log(data);
            setError(null);
        }
    };
    // Login user
    const login = async ({ email: identifier , password  })=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .G}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            setUser(data.user);
            router.push("/account/dashboard");
        } else {
            setError(data);
            console.log(data);
        //setError(null)
        }
    };
    // Logout User
    const logout = async ()=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .G}/api/logout`, {
            method: "POST"
        });
        if (res.ok) {
            setUser(null);
            router.push("/");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user: user1,
            error,
            register,
            login,
            logout
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;