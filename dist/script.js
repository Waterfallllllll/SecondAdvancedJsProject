/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = (triggersSelector, blockSelector) => {
  const btns = document.querySelectorAll(triggersSelector),
    block = document.querySelectorAll(blockSelector);
  btns.forEach(item => {
    item.addEventListener("click", function (e) {
      // Проверяем, активен ли текущий элемент
      const isActive = this.classList.contains("active-style");

      // Закрываем все блоки и убираем классы у всех кнопок
      block.forEach(item => {
        item.classList.remove("active-content");
        item.style.maxHeight = "0px";
      });
      btns.forEach(item => {
        item.classList.remove("active-style");
      });

      // Если текущий элемент был неактивен, активируем его
      if (!isActive) {
        this.classList.add("active-style");
        this.nextElementSibling.classList.add("active-content");
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      }
    });
  });

  // const text = document.querySelectorAll(data),
  // 	accordionHeader = document.querySelectorAll(header);

  // text.forEach((item, i) => {
  // 	if (i > 0) {
  // 		item.style.display = "none";
  // 	}
  // });

  // accordionHeader.forEach((item, i) => {
  // 	if (i == 0) {
  // 		item.style.color = "#c51abb";
  // 		item.style.borderBottom = "none";
  // 	}

  // 	item.addEventListener("click", () => {
  // 		text.forEach(item => {
  // 			item.style.display = "none";
  // 		});

  // 		text[i].style.display = "block";
  // 		text[i].classList.add("animated", "fadeIn");

  // 		accordionHeader.forEach(item => {
  // 			item.style.color = "black";
  // 			item.style.borderBottom = "2px dotted #333";
  // 		});

  // 		item.style.color = "#c51abb";
  // 		item.style.borderBottom = "none";
  // 	});
  // });

  //   blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => {
  //     block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //     btn.addEventListener('click', function() {
  //         if (!this.classList.contains('active')) {
  //             btns.forEach(btn => {
  //                 btn.classList.remove('active', 'active-style');
  //             });
  //             this.classList.add('active', 'active-style');
  //         }
  //     });
  // });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const calc = (size, material, options, promocode, calcPrice) => {
  const sizeBlock = document.querySelector(size),
    sizeOptions = sizeBlock.querySelectorAll("option"),
    materialBlock = document.querySelector(material),
    materialOptions = materialBlock.querySelectorAll("option"),
    optionsBlock = document.querySelector(options),
    optionsOptions = optionsBlock.querySelectorAll("option"),
    promocodeBlock = document.querySelector(promocode),
    calcPriceBlock = document.querySelector(calcPrice);
  function giveData(link, arr) {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getRequest)(link).then(item => loadServerValue(item, arr)).catch();
  }
  function loadServerValue(object, arr) {
    arr.forEach((item, i) => {
      item.setAttribute("value", object[0][`price${i}`]);
    });
  }
  giveData("http://localhost:3000/size", sizeOptions);
  giveData("http://localhost:3000/material", materialOptions);
  giveData("http://localhost:3000/options", optionsOptions);
  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == "" || materialBlock.value == "") {
      calcPriceBlock.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      calcPriceBlock.textContent = Math.round(sum * 0.7);
    } else {
      calcPriceBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/changeImage.js":
/*!***************************************!*\
  !*** ./src/js/modules/changeImage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeImage = selector => {
  const sizeBlock = document.querySelectorAll(selector);
  sizeBlock.forEach((item, i) => {
    function changeEvent(event, disp, postfix) {
      item.addEventListener(event, e => {
        if (e.target.nodeName == "IMG") {
          const pElement = item.querySelectorAll("p"),
            imgElement = item.querySelector("img");
          pElement.forEach((item, i) => {
            if (i < 3) {
              item.style.display = disp;
            }
          });
          imgElement.classList.add("animated", "fadeIn");
          imgElement.setAttribute("src", `assets/img/sizes-${i + 1}${postfix}.png`);
        }
      });
    }
    changeEvent("mouseover", "none", "-1");
    changeEvent("mouseout", "block", "");
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeImage);

/***/ }),

/***/ "./src/js/modules/changeModalState.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeModalState.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeModalState = state => {
  const sizeBlock = document.querySelector("#size"),
    materialBlock = document.querySelector("#material"),
    optionsBlock = document.querySelector("#options"),
    promocodeBlock = document.querySelector(".promocode");
  function bindActionToElems(elem, event, name) {
    elem.addEventListener(event, () => {
      switch (elem.nodeName) {
        case "INPUT":
          state[name] = elem.value;
          break;
        case "SELECT":
          state[name] = elem.options[elem.options.selectedIndex].textContent;
          const clearObject = () => {
            const data = document.querySelector("[data-submit]");
            data.addEventListener("click", () => {
              elem.options[elem.options.selectedIndex].textContent = elem.options[0].textContent;
            });
          };
          clearObject();
          break;
      }
    });
  }
  bindActionToElems(sizeBlock, "change", "size");
  bindActionToElems(materialBlock, "change", "material");
  bindActionToElems(optionsBlock, "change", "options");
  bindActionToElems(promocodeBlock, "input", "promocode");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeModalState);

/***/ }),

/***/ "./src/js/modules/checkTextInput.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkTextInput.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInput = selector => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(item => {
    item.addEventListener("keypress", e => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
    item.addEventListener("input", () => {
      if (item.value.replace(/./g, function (a) {
        if (/[^а-яё 0-9]/.test(a)) {
          return item.value = "";
        }
      })) ;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInput);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const portfolioMenu = document.querySelector(".portfolio-menu"),
    allWorks = portfolioMenu.querySelector(".all"),
    forLovers = portfolioMenu.querySelector(".lovers"),
    forChef = portfolioMenu.querySelector(".chef"),
    forGirl = portfolioMenu.querySelector(".girl"),
    forGuy = portfolioMenu.querySelector(".guy"),
    forGrandmother = portfolioMenu.querySelector(".grandmother"),
    forGranddad = portfolioMenu.querySelector(".granddad"),
    liElements = portfolioMenu.querySelectorAll("li"),
    portfolioWrapper = document.querySelector(".portfolio-wrapper"),
    girl = portfolioWrapper.querySelectorAll(".girl"),
    lovers = portfolioWrapper.querySelectorAll(".lovers"),
    guy = portfolioWrapper.querySelectorAll(".guy"),
    chef = portfolioWrapper.querySelectorAll(".chef"),
    portfolioBlock = portfolioWrapper.querySelectorAll(".portfolio-block"),
    portfolioNo = document.querySelectorAll(".portfolio-no");
  function elementListener(selector, selectorWrappper) {
    selector.addEventListener("click", e => {
      function clearDisplay(selector) {
        selector.forEach(item => {
          item.style.display = "none";
        });
      }
      clearDisplay(portfolioBlock);
      clearDisplay(portfolioNo);
      setTimeout(() => {
        liElements.forEach(item => {
          item.classList.remove("active", "animated", "pulse");
        });
        selector.classList.add("animated", "pulse", "active");
        portfolioBlock.forEach(item => {
          item.classList.remove("animated", "fadeIn");
        });
        if (e.target == selector) {
          selectorWrappper.forEach(item => {
            item.style.display = "block";
          });
          portfolioBlock.forEach(item => {
            item.classList.add("animated", "fadeIn");
          });
        }
      }, 0.5);
    });
  }
  elementListener(allWorks, portfolioBlock);
  elementListener(forLovers, lovers);
  elementListener(forChef, chef);
  elementListener(forGirl, girl);
  elementListener(forGuy, guy);
  elementListener(forGrandmother, portfolioNo);
  elementListener(forGranddad, portfolioNo);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/formsAjax.js":
/*!*************************************!*\
  !*** ./src/js/modules/formsAjax.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formsAjax = state => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload = document.querySelectorAll("[name='upload']");
  const message = {
    success: "Отправлено",
    failure: "Ошибка",
    pending: "Идет отправка",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png"
  };
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php"
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = "";
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };
  upload.forEach(item => {
    item.addEventListener("input", () => {
      let dots;
      const arr = item.files[0].name.split(".");
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  const getResources = async (url, data, statusImg, textMessage, block) => {
    statusImg.setAttribute("src", message.spinner);
    block.appendChild(statusImg);
    textMessage.textContent = message.loading;
    block.appendChild(textMessage);
    const res = await fetch(`${url}`, {
      method: "POST",
      body: data
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.text();
  };
  forms.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      const block = document.createElement("div");
      block.style.display = "block";
      block.style.color = "green";
      block.style.textAlign = "center";
      item.parentNode.appendChild(block);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);
      const statusImg = document.createElement("img");
      statusImg.style.marginBottom = "20px";
      statusImg.classList.add("animated", "fadeInUp");
      const textMessage = document.createElement("div");
      const formData = new FormData(item);
      if (item.classList.contains("calc_form")) {
        const calc = document.querySelector(".calc-price");
        state["calculator"] = calc.textContent;
        for (const key in state) {
          formData.append(key, state[key]);
        }
        calc.textContent = "Для расчета нужно выбрать размер картины и материал картины";
      }
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form") ? api = path.designer : api = path.question; // Этот метод попробует найти определенный селектор у элемента где-то выше по иерархии. Если такого блока нет, то даст null.

      getResources(api, formData, statusImg, textMessage, block).then(data => {
        console.log(data);
        statusImg.setAttribute("src", message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute("src", message.fail);
        block.style.color = "red";
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          block.remove();
          item.style.display = "block", item.classList.remove("fadeOutUp");
          item.classList.add("fadeInUp");
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsAjax);

/***/ }),

/***/ "./src/js/modules/loadElements.js":
/*!****************************************!*\
  !*** ./src/js/modules/loadElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const loadElements = (button, styles) => {
  const wrapper = document.querySelector(styles),
    btn = document.querySelector(button);

  // items.forEach(item => {
  // 	item.classList.add("animated", "fadeInUp");
  // });

  // btn.addEventListener("click", () => {
  // 	items.forEach(item => {
  // 		item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
  // 		item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
  // 	});

  // 	btn.style.display = "none";
  // });

  const obj = {
    fail: "assets/img/fail.png"
  };
  btn.addEventListener("click", function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getRequest)("http://localhost:3000/styles").then(res => loadServerElements(res)).catch(() => {
      const block = document.createElement("div"),
        img = document.createElement("img"),
        text = document.createElement("div");
      block.style.textAlign = "center";
      block.style.marginBottom = "30px";
      img.classList.add("animated", "slideInDown");
      img.setAttribute("src", obj.fail);
      text.textContent = "Не удалось подгрузить элементы";
      block.appendChild(img);
      block.appendChild(text);
      wrapper.appendChild(block);
    });
    this.remove();
  });
  function loadServerElements(object) {
    object.forEach(item => {
      const block = document.createElement("div");
      block.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
      block.innerHTML = `		
								<div class="styles-block">
									<img src=${item.src} alt>
									<h4>${item.title}</h4>
									<a href="${item.link}">Подробнее</a>
								</div>
							`;
      wrapper.appendChild(block);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadElements);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    const position = this.value.selectionStart;
    if (position < 2) {
      event.preventDefault();
    }
    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else {
        if (i >= val.length) {
          return "";
        } else {
          return a;
        }
      }
    });
    if (event.type == "blur") {
      if (this.value.length == 2) {
        return this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this); //this - текущий элемент
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
    input.addEventListener("keydown", createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

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
  let click = false;
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
      click = true;
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
        item.classList.add("animated", "fadeIn");
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
  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // Это в случае, если хотим адаптировать под старые браузеры.

      if (!click && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  openByScroll(".infinite");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = (slides, dir, leftBtn, rightBtn) => {
  const slide = document.querySelectorAll(slides);
  let slideIndex = 1;
  let interval = false;
  function showSlide(n) {
    if (n < 1) {
      slideIndex = slide.length;
    }
    if (n > slide.length) {
      slideIndex = 1;
    }
    slide.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    slide[slideIndex - 1].style.display = "block";
  }
  showSlide(slideIndex);
  function changeSlide(n) {
    showSlide(slideIndex += n);
  }
  try {
    const left = document.querySelector(leftBtn),
      right = document.querySelector(rightBtn);
    left.addEventListener("click", () => {
      changeSlide(-1);
      slide[slideIndex - 1].classList.remove("slideInLeft");
      slide[slideIndex - 1].classList.add("slideInRight");
    });
    right.addEventListener("click", () => {
      changeSlide(1);
      slide[slideIndex - 1].classList.remove("slideInRight");
      slide[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}
  function turnOnInterval() {
    if (dir == "vertical") {
      interval = setInterval(function () {
        changeSlide(1);
        slide[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      interval = setInterval(function () {
        changeSlide(1);
        slide[slideIndex - 1].classList.remove("slideInRight");
        slide[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }
  turnOnInterval();
  slide[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
  slide[0].parentNode.addEventListener("mouseleave", () => {
    turnOnInterval();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRequest: () => (/* binding */ getRequest)
/* harmony export */ });
async function getRequest(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
}


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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_formsAjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formsAjax */ "./src/js/modules/formsAjax.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInput */ "./src/js/modules/checkTextInput.js");
/* harmony import */ var _modules_loadElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/loadElements */ "./src/js/modules/loadElements.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_changeModalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/changeModalState */ "./src/js/modules/changeModalState.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/changeImage */ "./src/js/modules/changeImage.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");











window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const modalState = {};
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_formsAjax__WEBPACK_IMPORTED_MODULE_2__["default"])(modalState);
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInput__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInput__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_loadElements__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row");
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode", ".calc-price");
  (0,_modules_changeModalState__WEBPACK_IMPORTED_MODULE_7__["default"])(modalState);
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_changeImage__WEBPACK_IMPORTED_MODULE_9__["default"])(".sizes-block");
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_10__["default"])(".accordion-heading", ".accordion-block");
});
/******/ })()
;
//# sourceMappingURL=script.js.map