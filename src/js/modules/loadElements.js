import { getRequest } from "../services/requests";

const loadElements = (button, styles) => {
	const wrapper = document.querySelector(styles),
		btn = document.querySelector(button);
	
	// items.forEach(item => {
	// 	item.classList.add("animated", "fadeInUp");
	// });

	// btn.addEventListener("click", () => {
	// 	items.forEach(item => {
	// 		item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
	// 		item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
	// 	});
		
	// 	btn.style.display = "none";
	// });

	const obj = {
		fail: "assets/img/fail.png"
	};

	btn.addEventListener("click", function() {
		getRequest("http://localhost:3000/styles")
			.then(res => loadServerElements(res))
			.catch(() => {
				const block = document.createElement("div"),
					img = document.createElement("img"),
					text = document.createElement("div");

				block.style.textAlign = "center";
				block.style.marginBottom = "30px";
				img.classList.add("animated", "slideInDown");
				img.setAttribute("src", obj.fail);
				text.textContent = "Не удалось подгрузить элементы";
				
				block.appendChild(img);
				block.appendChild(text);

				wrapper.appendChild(block);
			});
		
		this.remove();
	});

	function loadServerElements(object) {
		object.forEach(item => {
			const block = document.createElement("div");

			block.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");

			block.innerHTML = `		
								<div class="styles-block">
									<img src=${item.src} alt>
									<h4>${item.title}</h4>
									<a href="${item.link}">Подробнее</a>
								</div>
							`;
			
			wrapper.appendChild(block);
		});
	}
};

export default loadElements;