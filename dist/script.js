/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  const scroll = calcScroll();
  function showModalByTime(time, selector) {
    const modal = document.querySelector(selector);
    const timerId = setTimeout(() => {
      modal.style.display = "block";
      document.body.classList.add("modal-open");
      document.body.style.marginRight = `${scroll}px`;
    }, time);
    return timerId;
  }
  const timerId = showModalByTime(5000, ".popup-consultation");
  function bindModal(openSelector, modalSelector, closeSelector, destroy = true) {
    const open = document.querySelectorAll(openSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");
    const handleClick = () => {
      closeAllModals();
      modal.style.display = "block";
      document.body.classList.add("modal-open");
      document.body.style.marginRight = `${scroll}px`;
      if (modal.style.display == "block") {
        clearTimeout(timerId);
      }
      if (destroy) {
        open.forEach(item => {
          item.style.display = "none";
        });
      }
    };
    open.forEach(item => {
      item.addEventListener("click", () => handleClick());
    });
    modal.addEventListener("click", e => {
      if (e.target == modal) {
        closeAllModals();
        document.body.classList.remove("modal-open");
        document.body.style.marginRight = "0px";
      }
    });
    close.addEventListener("click", () => {
      closeAllModals();
      document.body.classList.remove("modal-open");
      document.body.style.marginRight = "0px";
    });
    function closeAllModals() {
      windows.forEach(item => {
        item.style.display = "none";
      });
    }
  }
  bindModal(".button-design", ".popup-design", ".popup-design .popup-close", false);
  bindModal(".button-consultation", ".popup-consultation", ".popup-close", false);
  bindModal(".infinite", ".popup-gift", ".popup-gift .popup-close", true);
  function calcScroll() {
    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    // Тут фишка в том, что мы берём всю ширину элемента включая саму прокрутку, и затем вычитаем ширину элемента без прокрутки. Таким образом, мы получаем ширину прокрутки. А нам имеено она и нужна.
    div.remove();

    // Урок 10

    return scrollWidth;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map