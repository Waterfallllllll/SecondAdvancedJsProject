const mask = (selector) => {

	const setCursorPosition = (pos, elem) => {
		elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			const range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	};

	function createMask(event) {
		let matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
                
		if (def.length >= val.length) {
			val = def;
		}

		const position = this.value.selectionStart;

		if (position < 2) {
			event.preventDefault();
		}
        
		this.value = matrix.replace(/./g, function(a) {
			if (/[_\d]/.test(a) && i < val.length) {        
				return val.charAt(i++);
			} else {
				if (i >= val.length) {
					return "";
				} else {
					return a;
				}
			}
		});
        
		if (event.type == "blur") {
			if (this.value.length == 2) {
				return this.value = "";
			}
		} else {
			setCursorPosition(this.value.length, this); //this - текущий элемент
		}
	}

	const inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		input.addEventListener("input", createMask);
		input.addEventListener("focus", createMask);
		input.addEventListener("blur", createMask);
		input.addEventListener("keydown", createMask);
	});
};

export default mask;