import { getRequest } from "../services/requests";

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
		getRequest(link)
			.then(item => loadServerValue(item, arr))
			.catch();
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



