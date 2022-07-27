(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 390:
/***/ ((module) => {

// Exports
module.exports = {
	"qr_scanner": "qr-scanner_qr_scanner__upprm",
	"header_qr": "qr-scanner_header_qr__mfhqF",
	"scanner": "qr-scanner_scanner__iiYDK",
	"camera": "qr-scanner_camera__0m4Wj"
};


/***/ }),

/***/ 1964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _camera_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/qr/qr-scanner.module.css
var qr_scanner_module = __webpack_require__(390);
var qr_scanner_module_default = /*#__PURE__*/__webpack_require__.n(qr_scanner_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/attendance-page/popup/Layout.js
var Layout = __webpack_require__(7248);
// EXTERNAL MODULE: ./components/attendance-page/popup/Succes.js
var Succes = __webpack_require__(5582);
// EXTERNAL MODULE: ./components/attendance-page/popup/Failed.js
var Failed = __webpack_require__(4485);
// EXTERNAL MODULE: ./components/attendance-page/popup/LoadingPopup.js
var LoadingPopup = __webpack_require__(9448);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/qr/qr-scanner.js











const QrReader = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\qr\\qr-scanner.js -> " + "react-qr-reader"
        ]
    },
    ssr: false
});
function QrScanner(props) {
    const { event_id , camera  } = props;
    const { 0: popupSuccess , 1: setPopupSuccess  } = (0,external_react_.useState)(false);
    const { 0: popupFailed , 1: setPopupFailed  } = (0,external_react_.useState)(false);
    const { 0: popupLoading , 1: setPopupLoading  } = (0,external_react_.useState)(false);
    const { 0: cameraSide , 1: setCameraSide  } = (0,external_react_.useState)(false);
    const { 0: leadName , 1: setLeadName  } = (0,external_react_.useState)("");
    const { 0: data , 1: setData  } = (0,external_react_.useState)("No result");
    const router = (0,router_.useRouter)();
    const handleScan = async (data)=>{
        if (data) {
            setPopupLoading(true);
            setData(data);
            console.log(data);
            getLead(data);
            try {
                const res = await external_axios_default().post(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/scan/qr-code`, {
                    register_id: data
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                });
                console.log(res);
                setPopupSuccess(true);
                setPopupLoading(false);
                setTimeout(function() {
                    router.replace(`/${event_id}`);
                }, 10000);
            } catch (error) {
                console.error(error);
                setPopupFailed(true);
                setPopupLoading(false);
            }
        }
    };
    const handleError = (err)=>{
        console.error(err);
    };
    const getLead = async (reg_id)=>{
        try {
            const res = await external_axios_default().get(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/search?search_by=admin&search_column=register_id&search_value=${reg_id}&all_event=false&userpage_size=10&page=1`, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            console.log(res.data.data[0].full_name);
            setLeadName(res.data.data[0].full_name);
        } catch (error) {
            console.error(error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        console.log(cameraSide);
    }, [
        cameraSide
    ]);
    return camera && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (qr_scanner_module_default()).qr_scanner,
        children: [
            popupSuccess && /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Succes/* default */.Z, {
                    setPopup: setPopupSuccess,
                    event_id: event_id,
                    leadName: leadName
                })
            }),
            popupFailed && /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Failed/* default */.Z, {
                    setPopup: setPopupFailed
                })
            }),
            popupLoading && /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingPopup/* default */.Z, {
                    setPopup: setPopupFailed
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (qr_scanner_module_default()).header_qr,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginRight: "10px",
                            cursor: "pointer"
                        },
                        onClick: ()=>router.back(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/icon/arrow-left.png",
                            width: 25,
                            height: 20,
                            alt: "back",
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Scan QR"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (qr_scanner_module_default()).scanner,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (qr_scanner_module_default()).camera,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(QrReader, {
                            delay: 500,
                            onError: handleError,
                            onScan: handleScan,
                            style: {
                                width: "100%"
                            },
                            constraints: {
                                facingMode: camera === "front" ? "user" : "environment"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Place the QR Code in the box"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const qr_scanner = (QrScanner);

;// CONCATENATED MODULE: ./pages/[event_id]/[user_type]/qr/[camera].js



function QrPage() {
    const router = (0,router_.useRouter)();
    const { event_id , camera  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx(qr_scanner, {
        event_id: event_id,
        camera: camera
    });
}
/* harmony default export */ const _camera_ = (QrPage);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

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

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,152,922,483], () => (__webpack_exec__(1964)));
module.exports = __webpack_exports__;

})();