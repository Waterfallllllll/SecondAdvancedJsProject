import modals from "./modules/modals";
import slider from "./modules/slider";
import formsAjax from "./modules/formsAjax";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import loadElements from "./modules/loadElements";
import calc from "./modules/calc";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const modalState = {};

	modals();
	slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
	slider(".main-slider-item", "vertical");
	formsAjax();
	mask('[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
	loadElements(".button-styles", "#styles .row");
	calc("#size", "#material", "#options", ".promocode", ".calc-price");
	changeModalState(modalState);
});