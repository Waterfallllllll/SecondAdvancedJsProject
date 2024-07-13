import modals from "./modules/modals";
import slider from "./modules/slider";
import formsAjax from "./modules/formsAjax";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	modals();
	slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
	slider(".main-slider-item", "vertical");
	formsAjax();
});