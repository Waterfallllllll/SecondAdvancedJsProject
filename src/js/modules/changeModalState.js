const changeModalState = (state) => {
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

export default changeModalState;