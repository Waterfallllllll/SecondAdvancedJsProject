import { getRequest } from "../services/requests";

const calc = (size, material, options, promocode, calcPrice) => {
	const sizeBlock = document.querySelector(size),
		sizeOptions = sizeBlock.querySelectorAll("option"),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		calcPriceBlock = document.querySelector(calcPrice);
	
	getRequest("http://localhost:3000/size")
		.then(item => loadServerValue(item))
		.catch();
	
	
	
	
	
	function loadServerValue(object) {
		sizeOptions.forEach((item, i) => {
			item.setAttribute("value", )
		});
	}
	
	
	
	let sum = 0;

	const calcFunc = () => {
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

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

export default calc;