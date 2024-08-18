const filter = () => {
	const portfolioMenu = document.querySelector(".portfolio-menu"),
		allWorks = portfolioMenu.querySelector(".all"),
		forLovers = portfolioMenu.querySelector(".lovers"),
		forChef = portfolioMenu.querySelector(".chef"),
		forGirl = portfolioMenu.querySelector(".girl"),
		forGuy = portfolioMenu.querySelector(".guy"),
		forGrandmother = portfolioMenu.querySelector(".grandmother"),
		forGranddad = portfolioMenu.querySelector(".granddad"),
		portfolioWrapper = document.querySelector(".portfolio-wrapper"),
		girl = portfolioWrapper.querySelectorAll(".girl"),
		lovers = portfolioWrapper.querySelectorAll(".lovers"),
		guy = portfolioWrapper.querySelectorAll(".guy"),
		chef = portfolioWrapper.querySelectorAll(".chef"),
		portfolioBlock = portfolioWrapper.querySelectorAll(".portfolio-block"),
		portfolioNo = document.querySelectorAll(".portfolio-no");


	function elementListener(event, selector, selectorWrappper) {
		selector.addEventListener(event, (e) => {

			function clearDisplay(selector) {
				selector.forEach(item => {
					item.style.display = "none";
				});
			}

			clearDisplay(portfolioBlock);
			clearDisplay(portfolioNo);

			if (e.target == selector) {
				selectorWrappper.forEach(item => {
					item.style.display = "block";
				});
			} 
		});
	}

	elementListener("click", allWorks, portfolioBlock);
	elementListener("click", forLovers, lovers);
	elementListener("click", forChef, chef);
	elementListener("click", forGirl, girl);
	elementListener("click", forGuy, guy);
	elementListener("click", forGrandmother, portfolioNo);
	elementListener("click", forGranddad, portfolioNo);
};

export default filter;