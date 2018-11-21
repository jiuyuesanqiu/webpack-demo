(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
    console.log(text);
};

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "dSPy");



function component() {
    var element = document.createElement('div');
    // lodash 是由当前 script 脚本 import 导入进来的element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, 'Hello webpack!');
    return element;
}

document.body.appendChild(component());

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ0s7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBSztBQUMzQjtBQUNBOztBQUVBLHVDIiwiZmlsZSI6ImluZGV4LmEwYzk4Y2Q3MzU3MzY5ZThkOWZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xufTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByaW50IGZyb20gJy4vcHJpbnQnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBsb2Rhc2gg5piv55Sx5b2T5YmNIHNjcmlwdCDohJrmnKwgaW1wb3J0IOWvvOWFpei/m+adpeeahGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgIGVsZW1lbnQub25jbGljayA9IFByaW50LmJpbmQobnVsbCwgJ0hlbGxvIHdlYnBhY2shJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=