webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./styles/Libraries.js":
/*!*****************************!*\
  !*** ./styles/Libraries.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./styles/Constants.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .over-hidden{\n    overflow: hidden;\n  }\n\n  /* FLEX */\n  .flex {\n    display: flex !important;\n    &.col {\n      flex-direction: column;\n    }\n    &.col-r {\n      flex-direction: column-reverse;\n    }\n    &.row {\n      flex-direction: row;\n    }\n    &.row-r {\n      flex-direction: row-reverse;\n    }\n    &.wrap {\n      flex-wrap: wrap;\n    }\n    &.wrap-r {\n      flex-wrap: wrap-reverse;\n    }\n    &.nwrap {\n      flex-wrap: nowrap;\n    }\n    &.cont-start {\n      justify-content: flex-start;\n    }\n    &.cont-end {\n      justify-content: flex-end;\n    }\n    &.cont-center {\n      justify-content: center;\n    }\n    &.cont-spbet {\n      justify-content: space-between;\n    }\n    &.cont-sparo {\n      justify-content: space-around;\n    }\n    &.cont-speve {\n      justify-content: space-evenly;\n    }\n    &.align-itstart {\n      align-items: flex-start;\n    }\n    &.align-itend {\n      align-items: flex-end;\n    }\n    &.align-itcenter {\n      align-items: center;\n    }\n    &.align-itstretch {\n      align-items: stretch;\n    }\n    &.align-itbase {\n      align-items: baseline;\n    }\n    &.align-ctstart {\n      align-content: flex-start;\n    }\n    &.align-ctend {\n      align-content: flex-end;\n    }\n    &.align-ctcenter {\n      align-content: center;\n    }\n    &.align-ctstretch {\n      align-content: stretch;\n    }\n    &.align-ctspbet {\n      align-content: space-between;\n    }\n    &.align-ctsparo {\n      align-content: space-around;\n    }\n    .grow {\n      flex-grow: 1;\n    }\n    .grow-2 {\n      flex-grow: 2;\n    }\n    .no-grow {\n      flex-grow: 0;\n    }\n    .shrink {\n      flex-shrink: 0;\n    }\n  }\n\n  /*** FONTS SIZES rem\n  /*********************/\n  .fn-s9px{\n    font-size: 0.5625rem;\n  }\n\n  .fn-s10px{\n    font-size: 0.625rem;\n  }\n\n  .fn-s12px{\n    font-size: 0.75rem;\n  }\n\n  .fn-s14px{\n    font-size: 0.875rem;\n  }\n\n  .fn-s16px{\n    font-size: 1rem;\n  }\n\n  .fn-s18px{\n    font-size: 1.125rem;\n  }\n\n  .fn-s20px{\n    font-size: 1.25rem;\n  }\n\n  .fn-s30px{\n    font-size: 1.875rem;\n  }\n\n\n\n  /*** FONTS\n  /*********************/\n  .has-text-centered {\n    text-align: center;\n  }\n  .tx-justify {\n    text-align: justify;\n  }\n  .tx-right{\n    text-align: right;\n  }\n  .tx-up {\n    text-transform: uppercase;\n  }\n  .tx-ca {\n    text-transform: capitalize;\n  }\n  .tx-du {\n    text-decoration: underline;\n  }\n  .tx-dl {\n    text-decoration: line-through;\n  }\n  .tx-dn {\n    text-decoration: none;\n  }\n  .fn-wnb {\n    font-weight: normal;\n  }\n  .fn-wb {\n    font-weight: bold;\n  }\n\n  /* LINE HEIGHT */\n  .ln-h11px{\n    line-height: 11px;\n  }\n\n  .ln-h19px{\n    line-height: 19px;\n  }\n\n  .ln-h21px{\n    line-height: 21px;\n  }\n\n  .ln-h24px{\n    line-height: 24px;\n  }\n\n  .rotat-l-45 {\n    transform-origin: right bottom; /* or 100% 100%, same thing */\n  transform:\n    rotate(90deg)\n    translate(0, -100%) /* go from bottom right to top right */\n    rotate(90deg)\n    translate(0, 100%);\n    color: #CCC;\n  }\n\n  /* BACKGROUND COLORS */\n  .bg-none{\n    background: none;\n  }\n  .bg-blue{\n    background: ", ";\n  }\n  .bg-orange{\n    background: ", ";\n  }\n  .bg-darkgrey{\n    background: ", ";\n  }\n  .bg-black{\n    background: ", ";\n  }\n  .bg-red{\n    background: ", ";\n  }\n  .bg-green{\n    background: ", ";\n  }\n\n  .bg-blue-outlined{\n    background: ", ";\n    border: 1px solid ", ";\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background: ", ";\n      color: ", ";\n    }\n  }\n\n  /* TEXT COLORS */\n  .tx-white{\n    color: ", ";\n  }\n\n  .tx-blue{\n    color: ", ";\n  }\n\n  .tx-orange{\n    color: ", ";\n  }\n\n  .tx-darkgrey{\n    color: ", ";\n  }\n\n  .tx-black{\n    color: ", ";\n  }\n\n  .tx-red{\n    color: red;\n  }\n\n  .tx-green{\n    color: ", ";\n  }\n\n  /* BORDER COLORS */\n  .border-1px-darkgrey{\n    border: 1px solid ", "\n  }\n\n  .border-1px-lightgrey{\n    border: 1px solid ", "\n  }\n\n  .border-bottom-1px-lightgrey{\n    border-bottom: 1px solid ", "\n  }\n\n  .border-error-1px-red{\n    border: 1px solid red;\n  }\n\n  /* BUTTON GLOBAL */\n  .btn-global{\n    width: 100%;\n    height: 34px;\n    text-align: center;\n    border-radius: 5px;\n    background: rgb(245,245,245);\n    background: linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(237,237,237,1) 100%);\n    border: 1px solid #E5E5E5;\n    font-size: 14px;\n    line-height: 16px;\n    color: ", ";\n  }\n\n  /* MARGIN */\n  /* MARGIN TOP */\n  .mtn-6px{\n    margin-top: -6px;\n  }\n  .mt-2px{\n    margin-top: 0.125rem;\n  }\n\n  .mt-6px{\n    margin-top: 0.375rem;\n  }\n\n  .mt-10px{\n    margin-top: 0.625rem;\n  }\n\n  .mt-16px{\n    margin-top: 1rem;\n  }\n\n  .mt-40px {\n    margin-top: 2.5rem;\n  }\n\n  .mt-45px {\n    margin-top: 2.8125rem;\n  }\n\n  .mt-65px {\n    margin-top: 4.063rem;\n  }\n\n  .mt-85px {\n    margin-top: 5.3125rem;\n  }\n\n  .mt-125px {\n    margin-top: 7.813rem;\n  }\n\n  /* MARGIN LEFT */\n  .ml-5px{\n    margin-left: 0.3125rem;\n  }\n  .ml-16px{\n    margin-left: 1rem;\n  }\n\n  /* MARGIN RIGHT */\n  .mr-5px{\n    margin-right: 0.3125rem;\n  }\n\n  /* MARGIN BOTTOM */\n  .mb-4px{\n    margin-bottom: 0.25rem;\n  }\n\n  .mb-5px{\n    margin-bottom: 0.3125rem;\n  }\n\n  .mb-6px{\n    margin-bottom: 0.375rem;\n  }\n  \n  .mb-7px{\n    margin-bottom: 0.4375rem;\n  }\n  \n  .mb-8px{\n    margin-bottom: 0.5rem;\n  }\n\n  .mb-10px{\n    margin-bottom: 0.625rem;\n  }\n\n  .mb-11px{\n    margin-bottom: 0.6875rem;\n  }\n\n  .mb-12px{\n    margin-bottom: 0.75rem;\n  }\n\n  .mb-13px{\n    margin-bottom: 0.8125rem;\n  }\n\n  .mb-14px{\n    margin-bottom: 0.875rem;\n  }\n\n  .mb-15px{\n    margin-bottom: 0.9375rem;\n  }\n\n  .mb-16px{\n    margin-bottom: 1rem;\n  }\n\n  .mb-17px{\n    margin-bottom: 1.0625rem;\n  }\n\n  .mb-18px{\n    margin-bottom: 1.125rem;\n  }\n\n  .mb-20px{\n    margin-bottom: 1.25rem;\n  }\n\n  .mb-21px{\n    margin-bottom: 1.3125rem;\n  }\n\n  /* PADDING */\n  .p-11{\n    padding: 11px;\n  }\n\n  .pt-9px{\n    padding-top: 9px;\n  }\n\n  .pr-0{\n    padding-right: 0;\n  }\n\n  .pr-48px{\n    padding-right: 48px;\n  }\n\n  .pl-0{\n    padding-left: 0;\n  }\n\n  .pl-2-5px{\n    padding-left: 2.5px;\n  }\n  .pr-2-5px{\n    padding-right: 2.5px;\n  }\n\n  .pl-4-5px{\n    padding-left: 4.5px;\n  }\n  .pr-4-5px{\n    padding-right: 4.5px;\n  }\n\n  /* WIDTH */\n  .w-100{\n    width: 100%;\n  }\n\n  /* HEIGHT */\n  .h-30px{\n    height: 30px;\n  }\n\n  .h-50px{\n    height: 50px;\n  }\n\n  .h-52px{\n    height: 52px;\n  }\n\n  .h-54px{\n    height: 54px;\n  }\n\n  .h-61px{\n    height: 61px;\n  }\n\n  .h-70px{\n    height: 70px;\n  }\n\n  .h-75vh{\n    height: 75vh;\n  }\n\n  .h-80vh{\n    height: 80vh;\n  }\n\n  /* BORDER RADIUS */\n  .br-4px{\n    border-radius: 4px;\n  }\n\n  .br-8px{\n    border-radius: 8px;\n  }\n\n  .br-10px{\n    border-radius: 10px;\n  }\n\n  /* POSITION */\n  .p-relative{\n    position: relative;\n  }\n\n  .p-absolute{\n    position: absolute;\n  }\n\n  .top-8px{\n    top: 8px;\n  }\n\n  .left-8px{\n    left: 8px;\n  }\n\n  .z-ind1{\n    z-index: 1;\n  }\n\n  /* OUTLINE */\n  .out-0{\n    outline: none;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LibsStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _Constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["ORANGE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["DARK_GREY"], _Constants__WEBPACK_IMPORTED_MODULE_2__["BLACK"], _Constants__WEBPACK_IMPORTED_MODULE_2__["RED"], _Constants__WEBPACK_IMPORTED_MODULE_2__["GREEN"], _Constants__WEBPACK_IMPORTED_MODULE_2__["WHITE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["RED"], _Constants__WEBPACK_IMPORTED_MODULE_2__["WHITE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["WHITE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["ORANGE"], _Constants__WEBPACK_IMPORTED_MODULE_2__["DARK_GREY"], _Constants__WEBPACK_IMPORTED_MODULE_2__["BLACK"], _Constants__WEBPACK_IMPORTED_MODULE_2__["GREEN"], _Constants__WEBPACK_IMPORTED_MODULE_2__["DARK_GREY"], _Constants__WEBPACK_IMPORTED_MODULE_2__["LIGHT_GREY"], _Constants__WEBPACK_IMPORTED_MODULE_2__["LIGHT_GREY"], _Constants__WEBPACK_IMPORTED_MODULE_2__["DARK_GREY"]);
/* harmony default export */ __webpack_exports__["default"] = (LibsStyle);

/***/ })

})
//# sourceMappingURL=_app.js.4721abdfa9b2be4c9786.hot-update.js.map