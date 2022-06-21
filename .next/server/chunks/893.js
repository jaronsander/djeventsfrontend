"use strict";
exports.id = 893;
exports.ids = [893];
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
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: ./components/Layout.js + 4 modules
var Layout = __webpack_require__(6490);
// EXTERNAL MODULE: ./components/Eventitem.js
var Eventitem = __webpack_require__(3662);
;// CONCATENATED MODULE: ./components/Pagination.js


function Pagination({ page , total  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            page > 1 && /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                href: `/events?page=${page - 1}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "btn-secondary",
                    children: "Prev"
                })
            }),
            page < total && /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
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


/***/ })

};
;