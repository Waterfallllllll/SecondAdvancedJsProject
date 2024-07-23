const loadElements = (button, elements) => {
	const items = document.querySelectorAll(elements),
		btn = document.querySelector(button);
	
	items.forEach(item => {
		item.classList.add("animated", "fadeInUp");
	});

	btn.addEventListener("click", () => {
		items.forEach(item => {
			item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
			item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
		});

		btn.style.display = "none";
	});
};

export default loadElements;