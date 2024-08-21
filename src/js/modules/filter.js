const filter = () => {
	const portfolioMenu = document.querySelector(".portfolio-menu"),
		allWorks = portfolioMenu.querySelector(".all"),
		forLovers = portfolioMenu.querySelector(".lovers"),
		forChef = portfolioMenu.querySelector(".chef"),
		forGirl = portfolioMenu.querySelector(".girl"),
		forGuy = portfolioMenu.querySelector(".guy"),
		forGrandmother = portfolioMenu.querySelector(".grandmother"),
		forGranddad = portfolioMenu.querySelector(".granddad"),
		liElements = portfolioMenu.querySelectorAll("li"), 
		portfolioWrapper = document.querySelector(".portfolio-wrapper"),
		girl = portfolioWrapper.querySelectorAll(".girl"),
		lovers = portfolioWrapper.querySelectorAll(".lovers"),
		guy = portfolioWrapper.querySelectorAll(".guy"),
		chef = portfolioWrapper.querySelectorAll(".chef"),
		portfolioBlock = portfolioWrapper.querySelectorAll(".portfolio-block"),
		portfolioNo = document.querySelectorAll(".portfolio-no");


	function elementListener(selector, selectorWrappper) {
		selector.addEventListener("click", (e) => {

			function clearDisplay(selector) {
				selector.forEach(item => {
					item.style.display = "none";
				});
			}

			clearDisplay(portfolioBlock);
			clearDisplay(portfolioNo);
			setTimeout(() => {
				liElements.forEach(item => {
					item.classList.remove("active", "animated", "pulse");
				});

				selector.classList.add("animated", "pulse", "active");

				portfolioBlock.forEach(item => {
					item.classList.remove("animated", "fadeIn");
				});

				if (e.target == selector) {
				
					selectorWrappper.forEach(item => {
						item.style.display = "block";
					});

					portfolioBlock.forEach(item => {
						item.classList.add("animated", "fadeIn");
					});
	
				} 
			}, 0.5);
		});
	}

	elementListener(allWorks, portfolioBlock);
	elementListener(forLovers, lovers);
	elementListener(forChef, chef);
	elementListener(forGirl, girl);
	elementListener(forGuy, guy);
	elementListener(forGrandmother, portfolioNo);
	elementListener(forGranddad, portfolioNo);
};

export default filter;