/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ (() => {

(function () {
    if (!window.location.pathname.includes("index.html")) return

    const categories = [
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sundayreview",
        "technology",
        "theater",
        "t-magazine",
        "travel",
        "upshot",
        "us",
        "world"
    ]

    const CATEGORIES = document.querySelector('.categories')

    categories.forEach(category => {
        const CATEGORY = document.createElement('details')
        CATEGORY.className = 'category'

        CATEGORY.innerHTML = `
    <summary class="category__summary">
    <img class="category__logo" src="./images/LOGO.png">
    <h2>${category}</h2>
    <span class="material-symbols-outlined category__dropdown">chevron_right</span>
    </summary>
    `

        CATEGORY.addEventListener('click', function () {
            if (CATEGORY.querySelector('.category__dropdown').textContent.includes('chevron_right')) {
                CATEGORY.querySelector('.category__dropdown').textContent = 'expand_more'
            } else {
                CATEGORY.querySelector('.category__dropdown').textContent = 'chevron_right'
            }

            if (CATEGORY.querySelector('.category__content')) return

            fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=uZhoGPSEKtSyAp1AGwJYzO8qDAJsjMvc`)
                .then(res => res.json())
                .then(data => {
                    data.results.forEach(element => {
                        CATEGORY.innerHTML += `
                <div class='category__container'>
                <a class='category__container ' href="${element.url}">                
                <img class='category__img' src="${element.multimedia[2].url}" alt="">
                <section class='category__content'>
                <h2 class='category__headline'>${element.title} </h2>
                <p class='category__paragraph'>${element.abstract}</p>
                </section>
                </a>
                </div>
                `
                    })
                })
        })

        CATEGORIES.append(CATEGORY)
    })

})()

/***/ }),

/***/ "./src/scripts/darkmode.js":
/*!*********************************!*\
  !*** ./src/scripts/darkmode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function(){
    if (localStorage.getItem("darkmode") === "true"){
        document.body.classList.add("darkmode__page")
    }
    if (!window.location.pathname.includes("settings.html")) return

    const CTA_BUTTON = document.querySelector(".darkmode__button") //CTA = CALL TO ACTION

    CTA_BUTTON.addEventListener("click", clickHandler)

    function clickHandler(){
        document.body.classList.toggle("darkmode__page")
         // hvis body har classen darkmod -> darkmode localstorget er true
         // hvis body har ikke her classen -> darkmode localstorget er false

        // tenary statement
        localStorage.getItem("darkmode") == "true" 
            ? localStorage.setItem("darkmode", "false") 
            : localStorage.setItem("darkmode", "true")
    }


})());

/***/ }),

/***/ "./src/images/LOGO.png":
/*!*****************************!*\
  !*** ./src/images/LOGO.png ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL0xPR08ucG5nIjs=";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _images_LOGO_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/LOGO.png */ "./src/images/LOGO.png");
/* harmony import */ var _scripts_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/api */ "./src/scripts/api.js");
/* harmony import */ var _scripts_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_darkmode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/darkmode */ "./src/scripts/darkmode.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map