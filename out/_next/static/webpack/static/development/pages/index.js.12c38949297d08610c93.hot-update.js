webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ItemQuantity/ItemQuantity.js":
/*!*************************************************!*\
  !*** ./components/ItemQuantity/ItemQuantity.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Grid */ "./styles/Grid.js");
/* harmony import */ var _ItemQuantityStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemQuantityStyle */ "./components/ItemQuantity/ItemQuantityStyle.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
var _this = undefined,
    _jsxFileName = "/Users/felipetrova/projects/felipetrova/app-beertech/components/ItemQuantity/ItemQuantity.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ItemQuantity = function ItemQuantity() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      countItem = _useState[0],
      setCountItem = _useState[1];

  var decreaseItem = function decreaseItem() {
    var value = countItem - 1;
    setCountItem(value);
  };

  var incrementItem = function incrementItem() {
    var value = countItem + 1;
    setCountItem(value);
  };

  var onChange = function onChange(e) {
    var strNumber = e.target.value;
    var value = strNumber ? parseInt(strNumber) : 0;
    setCountItem(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ItemQuantityStyle__WEBPACK_IMPORTED_MODULE_2__["Quantity"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    general: 6,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_ItemQuantityStyle__WEBPACK_IMPORTED_MODULE_2__["Count"], {
    className: "flex align-itcenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "remove",
    onClick: decreaseItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "-"), __jsx("input", {
    type: "text",
    value: countItem,
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "add",
    onClick: incrementItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "+"))), __jsx(_styles_Grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    general: 6,
    className: "no-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: 'ADD',
    className: "fn-s18px bg-blue-outlined tx-blue br-4px 30px w-100 fn-wb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemQuantity);

/***/ })

})
//# sourceMappingURL=index.js.12c38949297d08610c93.hot-update.js.map