const burger = (burger, burgerMenu) => {
	const catalog = document.querySelector(burger),
		menu = document.querySelector(burgerMenu);
	
	catalog.addEventListener("click", () => {
		if (window.screen.availWidth < 993) {

			if (menu.style.display == "none") {
				menu.style.display = "block";
			} else {
				menu.style.display = "none";
			}
		} else {
			menu.style.display = "none";
		}
	});

	window.addEventListener("resize", () => {
		if (window.screen.availWidth > 992) {
			menu.style.display = "none";
		}
	});
};

export default burger;