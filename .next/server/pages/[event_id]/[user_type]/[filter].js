(() => {
var exports = {};
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 6095:
/***/ ((module) => {

// Exports
module.exports = {
	"attendace_page": "AttendancePage_attendace_page__7EYWY"
};


/***/ }),

/***/ 2460:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BtnAction_btn__zf33i"
};


/***/ }),

/***/ 3450:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card___6p4O",
	"card_container": "Card_card_container__P3BSL",
	"image_user": "Card_image_user__MCU7V",
	"initial_user": "Card_initial_user__i6qZr",
	"content": "Card_content__HZRzO",
	"basic_info": "Card_basic_info__BIGey",
	"date": "Card_date__3c_TN",
	"address": "Card_address__FIqZZ",
	"address_detail": "Card_address_detail__40e2w",
	"inv": "Card_inv__ou0Ow",
	"action": "Card_action__OYQ0P",
	"action_mobile": "Card_action_mobile__xjE5N",
	"mobile_btn": "Card_mobile_btn__WYh4P"
};


/***/ }),

/***/ 9258:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "Detail_detail__g6OVi",
	"detail_active": "Detail_detail_active__9sFrH",
	"slidein": "Detail_slidein__yhi6W",
	"close": "Detail_close__04O5m",
	"name": "Detail_name__jXQrm",
	"image_user": "Detail_image_user__3NUd_",
	"initial_user": "Detail_initial_user__f_81Y",
	"detail_content": "Detail_detail_content__MnYEc",
	"desc": "Detail_desc__qWr2_"
};


/***/ }),

/***/ 2776:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "HeaderFilter_header__irigX",
	"header_label": "HeaderFilter_header_label__L4tIM",
	"icon": "HeaderFilter_icon__xoraL",
	"filter_form": "HeaderFilter_filter_form__u2Hnk",
	"filter_select": "HeaderFilter_filter_select__8gISf",
	"filter_input": "HeaderFilter_filter_input__6xhS5",
	"btn_search": "HeaderFilter_btn_search__XrKcC",
	"type_filter": "HeaderFilter_type_filter__tS9tk",
	"search_filter": "HeaderFilter_search_filter__6B_A6",
	"allEvent": "HeaderFilter_allEvent__1IdMY",
	"styledCheckbox": "HeaderFilter_styledCheckbox__EuAIA"
};


/***/ }),

/***/ 2482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _filter_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
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
// EXTERNAL MODULE: ./components/attendance-page/BtnAction.module.css
var BtnAction_module = __webpack_require__(2460);
var BtnAction_module_default = /*#__PURE__*/__webpack_require__.n(BtnAction_module);
;// CONCATENATED MODULE: ./components/attendance-page/BtnAction.js




const BtnAction = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (BtnAction_module_default()).btn,
        style: {
            background: `${props.bg}`
        },
        children: props.children
    });
};
/* harmony default export */ const attendance_page_BtnAction = (BtnAction);

// EXTERNAL MODULE: ./components/attendance-page/Card.module.css
var Card_module = __webpack_require__(3450);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./components/attendance-page/Card.js




// import { useState } from "react";


// import Failed from "./popup/Failed";
// import Popup from "./popup/Layout";
// import Success from "./popup/Succes";
function Card(props) {
    const { popupSuccess , setPopupSuccess , popupFailed , setPopupFailed , detailActive , setDetailActive , data , leadId , setLeadId , event_id , allEvent , popLoading , setPopupLoading , user_type , setPopupUnattendance ,  } = props;
    // const [popupSuccess, setPopupSuccess] = useState(false);
    // const [popupFailed, setPopupFailed] = useState(false);
    const handleDetail = (lead_id)=>{
        setLeadId(lead_id);
        setDetailActive(true);
    };
    const handleUnattendance = (lead_id)=>{
        setLeadId(lead_id);
        setPopupUnattendance(true);
    };
    const postAttendance = async (lead_id)=>{
        setPopupLoading(true);
        const data = {
            type: "attendance",
            is_attend: true
        };
        try {
            const res = await external_axios_default().post(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/${lead_id}/attend`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            console.log(res);
            setPopupLoading(false);
            setPopupSuccess(true);
        } catch (error) {
            console.error(error);
            setPopupLoading(false);
            setPopupFailed(true);
        }
    };
    // const postUnattendance = async (lead_id) => {
    //   setPopupLoading(true);
    //   const data = {
    //     type: "attendance",
    //     is_attend: false,
    //   };
    //   try {
    //     const res = await axios.post(
    //       `https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/${lead_id}/attend`,
    //       data,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Access-Control-Allow-Origin": "*",
    //         },
    //       }
    //     );
    //     console.log(res);
    //     setPopupLoading(false);
    //     setPopupAttendance(true);
    //   } catch (error) {
    //     console.error(error);
    //     setPopupLoading(false);
    //     setPopupFailed(true);
    //   }
    // };
    const postRegister = async (lead_id)=>{
        setPopupLoading(true);
        const data = {
            type: "register",
            is_attend: true
        };
        try {
            const res = await external_axios_default().post(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/${lead_id}/attend`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            console.log(res);
            setPopupLoading(false);
            setPopupSuccess(true);
        } catch (error) {
            console.error(error);
            setPopupLoading(false);
            setPopupFailed(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).card,
        "data-aos": "fade-right",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).card_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).image_user,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Card_module_default()).initial_user,
                            children: "SC"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Card_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Card_module_default()).basic_info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: data?.full_name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Email ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                        children: data?.email
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "-"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " Mobile Phone ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                                                        children: [
                                                            "+62 ",
                                                            data?.mobile
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Card_module_default()).date,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "6 Jul 2022 03:29 PM"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Card_module_default()).address,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Card_module_default()).address_detail,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Live at ",
                                                    data?.address,
                                                    ", ",
                                                    data?.zip_code,
                                                    ", ",
                                                    data?.kelurahan,
                                                    ",",
                                                    " ",
                                                    data?.kecamatan,
                                                    ", ",
                                                    data?.dt2,
                                                    " ",
                                                    data?.kabupaten,
                                                    ",",
                                                    " ",
                                                    data?.provinsi,
                                                    ". Interested in studying abroad in",
                                                    " ",
                                                    data?.program_interested,
                                                    " - ",
                                                    data?.major_interested,
                                                    " in",
                                                    " ",
                                                    data?.destination_of_study,
                                                    ", plain in ",
                                                    data?.planning_year,
                                                    ". Previous/ Current School at ",
                                                    data?.precur_school
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Card_module_default()).inv,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: data?.register_id
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Card_module_default()).action,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                onClick: ()=>handleDetail(data?.leads_id),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                                                    bg: "#F3B44A",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/icon/bxs_user.png",
                                                            width: 28,
                                                            height: 28,
                                                            layout: "fixed",
                                                            alt: "user"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Detail"
                                                        })
                                                    ]
                                                })
                                            }),
                                            !allEvent ? data?.attended_event === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                onClick: ()=>postAttendance(data?.leads_id),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                                                    bg: "#16BD98",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/icon/check.png",
                                                            width: 28,
                                                            height: 28,
                                                            layout: "fixed",
                                                            style: {
                                                                marginTop: "3px"
                                                            },
                                                            alt: "check"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Attendance"
                                                        })
                                                    ]
                                                })
                                            }) : user_type === "admin" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                onClick: ()=>handleUnattendance(data?.leads_id),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                                                    bg: "#E71332",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/icon/check.png",
                                                            width: 28,
                                                            height: 28,
                                                            layout: "fixed",
                                                            style: {
                                                                marginTop: "3px"
                                                            },
                                                            alt: "check"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Unattendance"
                                                        })
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                onClick: ()=>postRegister(data?.leads_id),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                                                    bg: "#5BBED9",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/icon/check.png",
                                                            width: 28,
                                                            height: 28,
                                                            layout: "fixed",
                                                            style: {
                                                                marginTop: "3px"
                                                            },
                                                            alt: "check"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Register"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Card_module_default()).action_mobile,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).mobile_btn,
                        onClick: ()=>handleDetail(data?.leads_id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                            bg: "#F3B44A",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/bxs_user.png",
                                    width: 28,
                                    height: 28,
                                    layout: "fixed",
                                    alt: "user"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Detail"
                                })
                            ]
                        })
                    }),
                    !allEvent ? data?.attended_event === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).mobile_btn,
                        onClick: ()=>postAttendance(data?.leads_id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                            bg: "#16BD98",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/check.png",
                                    width: 28,
                                    height: 28,
                                    layout: "fixed",
                                    style: {
                                        marginTop: "3px"
                                    },
                                    alt: "check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Attended"
                                })
                            ]
                        })
                    }) : user_type === "admin" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).mobile_btn,
                        onClick: ()=>postUnattendance(data?.leads_id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                            bg: "#E71332",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/check.png",
                                    width: 28,
                                    height: 28,
                                    layout: "fixed",
                                    style: {
                                        marginTop: "3px"
                                    },
                                    alt: "check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Unattendance"
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Card_module_default()).mobile_btn,
                        onClick: ()=>postRegister(data?.leads_id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                            bg: "#5BBED9",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/check.png",
                                    width: 28,
                                    height: 28,
                                    layout: "fixed",
                                    style: {
                                        marginTop: "3px"
                                    },
                                    alt: "check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Register"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const attendance_page_Card = (Card);

// EXTERNAL MODULE: ./components/attendance-page/HeaderFilter.module.css
var HeaderFilter_module = __webpack_require__(2776);
var HeaderFilter_module_default = /*#__PURE__*/__webpack_require__.n(HeaderFilter_module);
;// CONCATENATED MODULE: ./components/attendance-page/HeaderFilter.js




function HeaderFilter(props) {
    const router = (0,router_.useRouter)();
    const { filter , searchColumn , setSearchColumn , searchBy , setSearchBy , searchValue , setSearchValue , allEvent , setAllEvent , user_type , eventName ,  } = props;
    console.log(filter);
    return filter && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HeaderFilter_module_default()).header,
        "data-aos": "fade-down",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeaderFilter_module_default()).header_label,
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
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HeaderFilter_module_default()).icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/icon/calender.png",
                            alt: "mainpage img",
                            width: 25,
                            height: 25,
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: eventName
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeaderFilter_module_default()).filter_form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HeaderFilter_module_default()).type_filter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/bi_filter.png",
                                    alt: "mainpage img",
                                    width: 40,
                                    height: 50,
                                    objectFit: "contain",
                                    layout: "fixed"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: (HeaderFilter_module_default()).filter_select,
                                defaultValue: filter,
                                onChange: (e)=>setSearchColumn(e.target.value),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "mobile",
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "email",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "register_id",
                                        children: "Registration Id"
                                    }),
                                    user_type === "admin" && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "full_name",
                                        children: "Full Name"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HeaderFilter_module_default()).search_filter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                className: (HeaderFilter_module_default()).filter_input,
                                placeholder: "Search email/nomor telepon",
                                onChange: (e)=>setSearchValue(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (HeaderFilter_module_default()).btn_search,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/icon/fa-solid_search.png",
                                        alt: "search",
                                        width: 15,
                                        height: 15,
                                        objectFit: "contain",
                                        layout: "fixed"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            user_type === "admin" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeaderFilter_module_default()).allEvent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (HeaderFilter_module_default()).styledCheckbox,
                        id: "styled-checkbox-1",
                        type: "checkbox",
                        onChange: ()=>setAllEvent(!allEvent)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "styled-checkbox-1",
                        children: "All Events"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const attendance_page_HeaderFilter = (HeaderFilter); // attendance , register

// EXTERNAL MODULE: ./components/attendance-page/AttendancePage.module.css
var AttendancePage_module = __webpack_require__(6095);
var AttendancePage_module_default = /*#__PURE__*/__webpack_require__.n(AttendancePage_module);
// EXTERNAL MODULE: ./components/attendance-page/popup/Layout.js
var Layout = __webpack_require__(7248);
// EXTERNAL MODULE: ./components/attendance-page/popup/Succes.js
var Succes = __webpack_require__(5582);
// EXTERNAL MODULE: ./components/attendance-page/popup/Failed.js
var Failed = __webpack_require__(4485);
// EXTERNAL MODULE: ./components/loading/loading.js
var loading = __webpack_require__(3366);
;// CONCATENATED MODULE: ./components/attendance-page/DescItem.js

function Desc(props) {
    const { label , value  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    value
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
}
/* harmony default export */ const DescItem = (Desc);

// EXTERNAL MODULE: ./components/attendance-page/Detail.module.css
var Detail_module = __webpack_require__(9258);
var Detail_module_default = /*#__PURE__*/__webpack_require__.n(Detail_module);
;// CONCATENATED MODULE: ./components/attendance-page/Detail.js







function Detail(props) {
    const { detailActive , setDetailActive , leadId  } = props;
    const { 0: leadData , 1: setLeadData  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const getLeadDetail = async ()=>{
            setIsLoading(true);
            try {
                const res = await external_axios_default().get(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/EVENT.0322.5/leads/${leadId}/detail`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                });
                // console.log(res.data);
                setLeadData(res.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        leadId && getLeadDetail();
    }, [
        leadId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(Detail_module_default()).detail} ${detailActive ? (Detail_module_default()).detail_active : (Detail_module_default()).detail_off}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Detail_module_default()).close,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/icon/times.png",
                    width: 15,
                    height: 15,
                    alt: "close",
                    onClick: ()=>setDetailActive(false)
                })
            }),
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {}) : leadData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Detail_module_default()).detail_content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Detail_module_default()).name,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Detail_module_default()).image_user,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Detail_module_default()).initial_user,
                                    children: "SC"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: leadData?.full_name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Detail_module_default()).desc,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Mobile Phone Number",
                                value: leadData?.mobile
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Email",
                                value: leadData?.email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Date of Birth",
                                value: leadData?.birth
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Parents Name",
                                value: leadData?.parents_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Parents Mobile Phone",
                                value: leadData?.parents_mobile
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Full Address",
                                value: `${leadData?.address}, ${leadData?.kelurahan}, ${leadData?.kecamatan}, ${leadData?.dt2}, ${leadData?.kabupaten}, ${leadData?.provinsi}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Post Code/City Area",
                                value: leadData?.zip_code
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Home Address Phone",
                                value: leadData?.phone
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Current Education Greade",
                                value: leadData?.highest_edu
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Previous / Current School",
                                value: leadData?.precur_school
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Major Interested",
                                value: leadData?.major_interested
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Destination of Study",
                                value: leadData?.destination_of_study
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Program Interested",
                                value: leadData?.program_interested
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Planning Year",
                                value: leadData?.planning_year
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Marketing Source",
                                value: leadData?.marketing_source
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Ever Contact SUN Office?",
                                value: leadData?.has_contact_sun
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DescItem, {
                                label: "Today's IELTS participant",
                                value: leadData?.is_ielts_participant
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const attendance_page_Detail = (Detail);

;// CONCATENATED MODULE: ./lib/hooks/use-debounce.js

const useDebounce = (val, delay)=>{
    const { 0: debounceVal , 1: setDebounceVal  } = (0,external_react_.useState)(val);
    (0,external_react_.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebounceVal(val);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        val,
        delay
    ]);
    return debounceVal;
};
/* harmony default export */ const use_debounce = (useDebounce);

// EXTERNAL MODULE: ./components/loading/loading.module.css
var loading_module = __webpack_require__(5922);
var loading_module_default = /*#__PURE__*/__webpack_require__.n(loading_module);
;// CONCATENATED MODULE: ./components/loading/EnterId.js



function EnterId(props) {
    const { searchColumn , filter  } = props;
    console.log(filter);
    let typeName = filter;
    if (searchColumn === "mobile") {
        typeName = "Phone";
    } else if (searchColumn === "register_id") {
        typeName = "Registration Id";
    } else if (searchColumn === "email") {
        typeName = "Email";
    } else if (searchColumn === "full_name") {
        typeName = "Full Name";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (loading_module_default()).enter_id,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/images/enter_id.png",
                width: 350,
                height: 350,
                objectFit: "contain",
                alt: "enter"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Enter ",
                    typeName,
                    " To Do A Search"
                ]
            })
        ]
    });
}
/* harmony default export */ const loading_EnterId = (EnterId);

;// CONCATENATED MODULE: ./components/loading/NotFoundData.js



function NotFound(props) {
    const { searchColumn , filter  } = props;
    console.log(filter);
    let typeName;
    if (searchColumn === "mobile" || filter === "mobile") {
        typeName = "Phone";
    } else if (searchColumn === "register_id" || filter === "register_id") {
        typeName = "Registration Id";
    } else if (searchColumn === "email" || filter === "email") {
        typeName = "Email";
    } else if (searchColumn === "full_name" || filter === "full_name") {
        typeName = "Full Name";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (loading_module_default()).not_found,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/images/not-found.png",
                width: 350,
                height: 350,
                objectFit: "contain",
                alt: "not-found"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Your ",
                    typeName,
                    " Was Not Found"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Do Registration First"
            })
        ]
    });
}
/* harmony default export */ const NotFoundData = (NotFound);

// EXTERNAL MODULE: ./components/attendance-page/popup/LoadingPopup.js
var LoadingPopup = __webpack_require__(9448);
// EXTERNAL MODULE: ./components/attendance-page/popup/Layout.module.css
var Layout_module = __webpack_require__(9365);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/attendance-page/popup/Unattendance.js






const Unattendance = (props)=>{
    const { setPopup , event_id , leadName , setPopupLoading , leadId , setPopupFailed  } = props;
    //   const [eventName, setEventName] = useState("");
    const postUnattendance = async ()=>{
        setPopupLoading(true);
        const data = {
            type: "attendance",
            is_attend: false
        };
        try {
            const res = await external_axios_default().post(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/${leadId}/attend`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            console.log(res);
            setPopupLoading(false);
            setPopup(false);
        } catch (error) {
            console.error(error);
            setPopupLoading(false);
            setPopupFailed(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).unattendance,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).close,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/icon/times.png",
                    width: 15,
                    height: 15,
                    layout: "fixed",
                    alt: "times",
                    onClick: ()=>setPopup(false)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Are you sure you want to cancel your attendance"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>postUnattendance(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(attendance_page_BtnAction, {
                            bg: "#E71332",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/icon/check.png",
                                    width: 28,
                                    height: 28,
                                    layout: "fixed",
                                    style: {
                                        marginTop: "3px"
                                    },
                                    alt: "check"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Unattendance"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const popup_Unattendance = (Unattendance);

;// CONCATENATED MODULE: ./components/attendance-page/AttendancePage.js
















function AttendancePage(props) {
    const { event_id , filter , user_type  } = props;
    const { 0: eventData , 1: setEventData  } = (0,external_react_.useState)(null);
    const { 0: eventName , 1: setEventName  } = (0,external_react_.useState)("");
    const { 0: popupSuccess , 1: setPopupSuccess  } = (0,external_react_.useState)(false);
    const { 0: popupUnattendance , 1: setPopupUnattendance  } = (0,external_react_.useState)(false);
    const { 0: popupFailed , 1: setPopupFailed  } = (0,external_react_.useState)(false);
    const { 0: popupLoading , 1: setPopupLoading  } = (0,external_react_.useState)(false);
    const { 0: detailActive , 1: setDetailActive  } = (0,external_react_.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: searchBy , 1: setSearchBy  } = (0,external_react_.useState)("");
    const { 0: searchColumn , 1: setSearchColumn  } = (0,external_react_.useState)(filter);
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)("");
    const { 0: allEvent , 1: setAllEvent  } = (0,external_react_.useState)(false);
    const { 0: leadsData , 1: setLeadsData  } = (0,external_react_.useState)([]);
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
    // lead id
    const { 0: leadId , 1: setLeadId  } = (0,external_react_.useState)("");
    const search = use_debounce(searchValue, 1000);
    (0,external_react_.useEffect)(()=>{
        setIsLoading(true);
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        };
        const getLeadsData = async ()=>{
            try {
                const res = await external_axios_default().get(`https://sunniescrmrebornv2.suneducationgroup.com/api/public/event-registration/${event_id}/leads/search?search_by=${user_type}&search_column=${searchColumn ? searchColumn : filter}&search_value=${search}&all_event=${user_type === "user" ? "false" : allEvent}&page_size=10&page=1`, config);
                // console.log(res.data.data);
                setLeadsData(res.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setLeadsData([]);
                setIsLoading(false);
            }
        };
        filter && user_type && getLeadsData();
    }, [
        searchBy,
        search,
        allEvent,
        filter,
        user_type,
        searchColumn,
        popupLoading, 
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (AttendancePage_module_default()).attendace_page,
        children: [
            popupSuccess && /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Succes/* default */.Z, {
                    setPopup: setPopupSuccess,
                    event_id: event_id
                })
            }),
            popupUnattendance && /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(popup_Unattendance, {
                    setPopup: setPopupUnattendance,
                    popupLoading: popupLoading,
                    setPopupLoading: setPopupLoading,
                    setPopupFailed: setPopupFailed,
                    leadId: leadId,
                    event_id: event_id
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
            /*#__PURE__*/ jsx_runtime_.jsx(attendance_page_Detail, {
                setDetailActive: setDetailActive,
                detailActive: detailActive,
                leadId: leadId
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(attendance_page_HeaderFilter, {
                        filter: filter,
                        searchColumn: searchColumn,
                        setSearchColumn: setSearchColumn,
                        searchBy: searchBy,
                        setSearchBy: setSearchBy,
                        searchValue: searchValue,
                        setSearchValue: setSearchValue,
                        allEvent: allEvent,
                        setAllEvent: setAllEvent,
                        user_type: user_type,
                        eventName: eventName
                    }),
                    !isLoading ? leadsData && leadsData.length !== 0 ? leadsData.map((data)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(attendance_page_Card, {
                            data: data,
                            popupSuccess: popupSuccess,
                            setPopupSuccess: setPopupSuccess,
                            popupFailed: popupFailed,
                            setPopupFailed: setPopupFailed,
                            setDetailActive: setDetailActive,
                            detailActive: detailActive,
                            leadId: leadId,
                            setLeadId: setLeadId,
                            event_id: event_id,
                            allEvent: allEvent,
                            popupLoading: popupLoading,
                            setPopupLoading: setPopupLoading,
                            user_type: user_type,
                            setPopupUnattendance: setPopupUnattendance
                        }, data.leads_id);
                    }) : !searchValue ? /*#__PURE__*/ jsx_runtime_.jsx(loading_EnterId, {
                        searchColumn: searchColumn,
                        filter: filter
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(NotFoundData, {
                        searchColumn: searchColumn,
                        filter: filter
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const attendance_page_AttendancePage = (AttendancePage);

;// CONCATENATED MODULE: ./pages/[event_id]/[user_type]/[filter].js



function Attendance() {
    const router = (0,router_.useRouter)();
    const { event_id , filter , user_type  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx(attendance_page_AttendancePage, {
        filter: filter,
        event_id: event_id,
        user_type: user_type
    });
}
/* harmony default export */ const _filter_ = (Attendance);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,922,483], () => (__webpack_exec__(2482)));
module.exports = __webpack_exports__;

})();