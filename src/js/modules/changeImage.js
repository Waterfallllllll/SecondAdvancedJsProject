const changeImage = (selector) => {
	const sizeBlock = document.querySelectorAll(selector);

	sizeBlock.forEach((item, i) => {

		function changeEvent(event, disp, postfix) {
			item.addEventListener(event, (e) => {
				if (e.target.nodeName == "IMG") {
					const pElement = item.querySelectorAll("p"),
						imgElement = item.querySelector("img");
				
					pElement.forEach((item, i) => {
						if (i < 3) {
							item.style.display = disp;
						}
					});

					imgElement.classList.add("animated", "fadeIn");
					imgElement.setAttribute("src", `assets/img/sizes-${i+1}${postfix}.png`);
				}
			});
		}

		changeEvent("mouseover", "none", "-1");
		changeEvent("mouseout", "block", "");
	});
};

export default changeImage;