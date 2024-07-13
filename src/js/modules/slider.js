const slider = (slides, dir, leftBtn, rightBtn) => {
	const slide = document.querySelectorAll(slides);
		
    
	let slideIndex = 1;
	let interval = false;
    
	function showSlide(n) {
		if (n < 1) {
			slideIndex = slide.length;
		}
        
		if (n > slide.length) {
			slideIndex = 1;
		}
        
		slide.forEach(item => {
			item.classList.add("animated");
			item.style.display = "none";
		});
        
		slide[slideIndex - 1].style.display = "block";
	}
    
	showSlide(slideIndex);
    
	function changeSlide(n) {
		showSlide(slideIndex += n);
	}
    
	try {
		const left = document.querySelector(leftBtn),
			right = document.querySelector(rightBtn);
        
		left.addEventListener("click", () => {
			changeSlide(-1);
			slide[slideIndex - 1].classList.remove("slideInLeft");
			slide[slideIndex - 1].classList.add("slideInRight");
		});
        
		right.addEventListener("click", () => {
			changeSlide(1);
			slide[slideIndex - 1].classList.remove("slideInRight");
			slide[slideIndex - 1].classList.add("slideInLeft");
		});
	} catch (e) {
		
	}
        
	function turnOnInterval() {
		if (dir == "vertical") {
			interval = setInterval(function () {
				changeSlide(1);
				slide[slideIndex - 1].classList.add("slideInDown");
			}, 3000);
		} else {
			interval = setInterval(function () {
				changeSlide(1);
				slide[slideIndex - 1].classList.remove("slideInRight");
				slide[slideIndex - 1].classList.add("slideInLeft");
			}, 3000);
		}
	}
    
	turnOnInterval();

	slide[0].parentNode.addEventListener("mouseenter", () => {
		clearInterval(interval);
	});

	slide[0].parentNode.addEventListener("mouseleave", () => {
		turnOnInterval();
	});
};

export default slider;