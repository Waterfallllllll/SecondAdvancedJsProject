const modals = () => {
	function bindModal(openSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const open = document.querySelectorAll(openSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modal]"),
			scroll = calcScroll();
		
		const handleClick = () => {
			closeAllModals();
			modal.style.display = "block";
			document.body.classList.add("modal-open");
			document.body.style.marginRight = `${scroll}px`;
		};

		open.forEach(item => {
			item.addEventListener("click", () => handleClick());
		});

		modal.addEventListener("click", (e) => {
			if (e.target == modal && closeClickOverlay == true) {
				closeAllModals();
				document.body.classList.remove("modal-open");
				document.body.style.marginRight = "0px";
			}
		});
		
		close.addEventListener("click", () => {
			closeAllModals();
			document.body.classList.remove("modal-open");
			document.body.style.marginRight = "0px";
		});

		function closeAllModals() {
			windows.forEach(item => {
				item.style.display = "none";
			});
		}
	}
    
	bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
	bindModal(".button-consultation", ".popup-consultation", ".popup-close");

	function showModalByTime(time, selector) {
		const modal = document.querySelector(selector);
		setTimeout(() => {
			modal.style.display = "block";
			document.body.classList.add("modal-open");
		}, time);
	}

	function calcScroll() {
		const div = document.createElement("div");

		div.style.height = "50px";
		div.style.width = "50px";
		div.style.overflowY = "scroll";
		div.style.visibility = "hidden";

		document.body.appendChild(div);
		const scrollWidth = div.offsetWidth - div.clientWidth;
		// Тут фишка в том, что мы берём всю ширину элемента включая саму прокрутку, и затем вычитаем ширину элемента без прокрутки. Таким образом, мы получаем ширину прокрутки. А нам имеено она и нужна.
		div.remove();

		// Урок 10

		return scrollWidth;
	}
					    
	// showModalByTime(60000, ".popup");
};

export default modals;