/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/scroll.js */ \"./src/js/scroll.js\");\n\r\n// import {\r\n//   contact,\r\n//   arrowContact,\r\n//   linksContact,\r\n//   pointerContact,\r\n// } from \"./src/js/constants.js\";\r\n\r\nwindow.addEventListener(\"resize\", _src_js_scroll_js__WEBPACK_IMPORTED_MODULE_0__.handleResize);\r\n(0,_src_js_scroll_js__WEBPACK_IMPORTED_MODULE_0__.handleResize)();\r\n\r\nconst contactHead = document.querySelector(\".main__contact h2\");\r\nconst contact = document.querySelector(\".main__contact\");\r\nconst linksContact = document.querySelector(\".main__contact-links\");\r\nconst pointerContact = document.querySelector(\".main__contact-arrow\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  contactHead.addEventListener(\"click\", () => {\r\n    contact.classList.add(\"clicked\");\r\n    linksContact.style.display = \"flex\";\r\n    pointerContact.style.display = \"flex\";\r\n  });\r\n\r\n  pointerContact.addEventListener(\"click\", () => {\r\n    contact.classList.remove(\"clicked\");\r\n    linksContact.style.display = \"none\";\r\n    pointerContact.style.display = \"none\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://src/./index.js?");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleResize: () => (/* binding */ handleResize),\n/* harmony export */   handleScroll: () => (/* binding */ handleScroll)\n/* harmony export */ });\nconst container = document.querySelector(\".container\");\r\nconst projects = document.getElementById(\"projects\");\r\nconst sliderInnerContainer = document.querySelector(\r\n  \".page3__slider-inner-container\"\r\n);\r\n\r\nconst projectSectionStopScrollPosition = 466;\r\nlet sliderActive = false;\r\n//transformX values of the slider to set the range of motion\r\nconst initialTransformX = 493;\r\nconst minTransform = -467;\r\nconst maxTransform = initialTransformX;\r\n\r\nfunction handleScroll(e){\r\n  if (window.innerWidth > 768) {\r\n    const projectsRect = projects.getBoundingClientRect();\r\n\r\n    if (!sliderActive && projectsRect.left <= projectSectionStopScrollPosition) {\r\n      // Main page stops scrolling, slider starts moving\r\n      sliderActive = true;\r\n      // startScrollLeft = container.scrollLeft;\r\n      e.preventDefault();\r\n    }\r\n\r\n    if (sliderActive) {\r\n      e.preventDefault(); // Prevent the default scroll behavior\r\n      const delta = e.deltaY;\r\n      const currentTransform = getCurrentTransformX(sliderInnerContainer);\r\n      let newTransform = currentTransform - delta;\r\n\r\n      // check if the slider has reached its start or end\r\n      if (newTransform < minTransform) {\r\n        newTransform = minTransform;\r\n      } else if (newTransform > maxTransform) {\r\n        newTransform = maxTransform;\r\n      }\r\n\r\n      sliderInnerContainer.style.transform = `translateX(${newTransform}px)`;\r\n      if (newTransform === minTransform || newTransform === maxTransform) {\r\n        sliderActive = false;\r\n        container.style.overflowX = \"scroll\";\r\n        container.scrollLeft += e.deltaY;\r\n      }\r\n    } else {\r\n      container.scrollLeft += e.deltaY;\r\n    }\r\n  }\r\n};\r\n\r\nconst getCurrentTransformX = (element) => {\r\n  const style = window.getComputedStyle(element);\r\n  const matrix = new WebKitCSSMatrix(style.transform);\r\n  return matrix.m41;\r\n};\r\n\r\ncontainer.addEventListener(\"wheel\", handleScroll);\r\n\r\nfunction handleResize() {\r\n  if (window.innerWidth <= 768) {\r\n    container.style.flexDirection = \"column\";\r\n    container.style.overflowY = \"scroll\";\r\n    container.style.overflowX = \"hidden\";\r\n  } else {\r\n    container.style.flexDirection = \"row\";\r\n    container.style.overflowY = \"hidden\";\r\n    container.style.overflowX = \"scroll\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://src/./src/js/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;