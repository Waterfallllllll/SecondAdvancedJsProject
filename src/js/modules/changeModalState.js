const changeModalState = (state) => {
	const windowType = document.querySelectorAll(".balcon_icons_img"),
		widthType = document.querySelectorAll("#width"),
		heightType = document.querySelectorAll("#height"),
		valueType = document.querySelectorAll("#view_type"),
		checkboxType = document.querySelectorAll(".checkbox"),
		window = document.querySelector(".popup_calc_content");
	

	function bindActionToElems(elem, event, name) {	
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
				case "INPUT":
					state[name] = item.value;
					break;
				case "SELECT":
					state[name] = item.value;
						
					const clearObject = () => {
						const data = document.querySelectorAll(".popup_calc_btn");

						data.forEach(item => {
							item.addEventListener("click", () => {
								document.querySelector("#view_type").value = "tree";
							});
						});
					};

					clearObject();
					break;
				}
				console.log(state);

			});
		});
	}

	bindActionToElems(windowType, "click", "window");
	bindActionToElems(widthType, "input", "width");
	bindActionToElems(heightType, "input", "height");
	bindActionToElems(valueType, "change", "value");
	bindActionToElems(checkboxType, "change", "checkbox");
};

export default changeModalState;