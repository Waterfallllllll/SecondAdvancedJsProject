import modals from "./modules/modals";
import slider from "./modules/slider";
import formsAjax from "./modules/formsAjax";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	modals();
	slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
	slider(".main-slider-item", "vertical");
	formsAjax();
	mask('[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
});