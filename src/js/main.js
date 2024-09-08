import modals from "./modules/modals";
import slider from "./modules/slider";
import formsAjax from "./modules/formsAjax";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import loadElements from "./modules/loadElements";
import calc from "./modules/calc";
import changeModalState from "./modules/changeModalState";
import filter from "./modules/filter";
import changeImage from "./modules/changeImage";
import accordion from "./modules/accordion";
import burger from "./modules/burger";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const modalState = {};

	modals();
	slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
	slider(".main-slider-item", "vertical");
	formsAjax(modalState);
	mask('[name="phone"]');
	checkTextInput('[name="name"]');
	checkTextInput('[name="message"]');
	loadElements(".button-styles", "#styles .row");
	calc("#size", "#material", "#options", ".promocode", ".calc-price");
	changeModalState(modalState);
	filter();
	changeImage(".sizes-block");
	accordion(".accordion-heading", ".accordion-block");
	burger(".burger", ".burger-menu");
});