exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 756:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__DjQft",
	"primary": "button_primary__JpcLt"
};


/***/ }),

/***/ 3952:
/***/ ((module) => {

// Exports
module.exports = {
	"mainpage": "MainPage_mainpage__2Mcw6",
	"attandanceImg": "MainPage_attandanceImg__kYerM",
	"mainContent": "MainPage_mainContent__DYF5S",
	"action": "MainPage_action__IKAPu"
};


/***/ }),

/***/ 1529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_page_MainPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/button/button.module.css
var button_module = __webpack_require__(756);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
;// CONCATENATED MODULE: ./components/button/button.js




function Btn(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: props.link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: (button_module_default()).btn,
            style: {
                background: `${props.bg}`
            },
            children: props.children
        })
    });
}
;
function BtnWithRefresh(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: props.link,
        className: (button_module_default()).btn,
        style: {
            background: `${props.bg}`
        },
        children: props.children
    });
}

// EXTERNAL MODULE: ./components/loading/loading.module.css
var loading_module = __webpack_require__(5922);
var loading_module_default = /*#__PURE__*/__webpack_require__.n(loading_module);
;// CONCATENATED MODULE: ./components/loading/loading-page.js




const LoadingPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (loading_module_default()).loading_page,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/images/icon/Loading.svg",
            width: 100,
            height: 100,
            objectFit: "contain",
            alt: "loading"
        })
    });
};
/* harmony default export */ const loading_page = (LoadingPage);

// EXTERNAL MODULE: ./components/main-page/MainPage.module.css
var MainPage_module = __webpack_require__(3952);
var MainPage_module_default = /*#__PURE__*/__webpack_require__.n(MainPage_module);
;// CONCATENATED MODULE: ./components/main-page/MainPage.js







function MainPage(props) {
    const { event_id  } = props;
    const { 0: eventData , 1: setEventData  } = (0,external_react_.useState)(null);
    const { 0: eventName , 1: setEventName  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        };
        const getEvent = async ()=>{
            try {
                const res = await external_axios_default().get(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/detail`, config);
                console.log(res);
                setEventData(res.data);
                setEventName(res.data.data.event_name);
            } catch (error) {
                console.error(error);
            }
        };
        event_id && getEvent();
    }, [
        event_id
    ]);
    return !event_id ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (MainPage_module_default()).mainpage,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "You need input event_id!"
        })
    }) : !eventData ? /*#__PURE__*/ jsx_runtime_.jsx(loading_page, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MainPage_module_default()).mainpage,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MainPage_module_default()).attandanceImg,
                "data-aos": "fade-right",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/Expo 1.png",
                    alt: "mainpage img",
                    width: 420,
                    height: 420,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MainPage_module_default()).mainContent,
                "data-aos": "zoom-in",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Welcome To Sunnies Event"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: eventName && eventName.split("-").map((name, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                children: [
                                    name,
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }, idx);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Please select attendance method"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (MainPage_module_default()).action,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Btn, {
                                bg: "#16BD98",
                                link: `/${event_id}/user/email`,
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BtnWithRefresh, {
                                bg: "#5BBED9",
                                link: `/${event_id}/user/qr/front`,
                                children: "QR Code (front)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BtnWithRefresh, {
                                bg: "#5BBED9",
                                link: `/${event_id}/user/qr/back`,
                                children: "QR Code (back)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Btn, {
                                bg: "#6C5DDE",
                                link: `/${event_id}/user/register_id`,
                                children: "Registration ID"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Btn, {
                                bg: "#F3B44A",
                                link: `/${event_id}/user/mobile`,
                                children: "Phone"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const main_page_MainPage = (MainPage);


/***/ })

};
;