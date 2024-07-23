const checkTextInput = (selector) => {
	const inputs = document.querySelectorAll(selector);

	inputs.forEach(item => {
		item.addEventListener("keypress", (e) => {
			if (e.key.match(/[^а-яё 0-9]/ig)) {
				e.preventDefault();
			}
		});

		item.addEventListener("input", () => {
			if (item.value.replace(/./g, function (a) {
				if (/[^а-яё 0-9]/.test(a)) {
					return item.value = "";
				} 
			}));
		});
	});
};

export default checkTextInput;