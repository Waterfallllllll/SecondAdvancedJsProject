const modals = () => {

	const scroll = calcScroll();

	function showModalByTime(time, selector) {
		const modal = document.querySelector(selector);

		const timerId = setTimeout(() => {
			modal.style.display = "block";
			document.body.classList.add("modal-open");
			document.body.style.marginRight = `${scroll}px`;
		}, time);

		return timerId;
	}

	const timerId = showModalByTime(5000, ".popup-consultation");
	let click = false;

	function bindModal(openSelector, modalSelector, closeSelector, destroy = true) {
		const open = document.querySelectorAll(openSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modal]");
		
		const handleClick = () => {
			closeAllModals();
			modal.style.display = "block";
			document.body.classList.add("modal-open");
			document.body.style.marginRight = `${scroll}px`;

			if (modal.style.display == "block") {
				clearTimeout(timerId);
			}

			if (destroy) {
				open.forEach(item => {
					item.style.display = "none";
				});
			}

			click = true;
		};

		open.forEach(item => {
			item.addEventListener("click", () => handleClick());
		});

		modal.addEventListener("click", (e) => {
			if (e.target == modal) {
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
				item.classList.add("animated", "fadeIn");
			});
		}
	}
    
	bindModal(".button-design", ".popup-design", ".popup-design .popup-close", false);
	bindModal(".button-consultation", ".popup-consultation", ".popup-close", false);
	bindModal(".infinite", ".popup-gift", ".popup-gift .popup-close", true);

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

	function openByScroll(selector) {
		window.addEventListener("scroll", () => {
			const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // Это в случае, если хотим адаптировать под старые браузеры.

			if (!click && (window.scrollY + document.documentElement.clientHeight >= scrollHeight)) {
				document.querySelector(selector).click();
			}
		});
	}

	openByScroll(".infinite");
};

export default modals;