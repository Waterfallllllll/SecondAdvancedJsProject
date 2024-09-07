const accordion = (triggersSelector, blockSelector) => {

	const btns = document.querySelectorAll(triggersSelector),
		block = document.querySelectorAll(blockSelector);

	btns.forEach(item => {
		item.addEventListener("click", function () {
			
			block.forEach(item => {
				item.classList.remove("active-content");
				item.style.maxHeight = "0px";
			});

			btns.forEach(item => {
				item.classList.remove("active-style");
			});

			if (!(item.classList.contains("active-style"))) {
				this.classList.add("active-style");
				this.nextElementSibling.classList.add("active-content");
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
				console.log("aa");
			}



			// if (item.classList.contains("active-style")) {

			// 	block.forEach(item => {
			// 		item.classList.remove("active-content");
			// 		item.style.maxHeight = "0px";
			// 	});

			// 	btns.forEach(item => {
			// 		item.classList.remove("active-style");
			// 	});

			// 	console.log("a");
			// } else {
			// 	this.classList.add("active-style");
			// 	this.nextElementSibling.classList.add("active-content");
			// 	this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
			// 	console.log("aa");
			// }
		});
	});





	// const text = document.querySelectorAll(data),
	// 	accordionHeader = document.querySelectorAll(header);

	// text.forEach((item, i) => {
	// 	if (i > 0) {
	// 		item.style.display = "none";
	// 	}
	// });

	// accordionHeader.forEach((item, i) => {
	// 	if (i == 0) {
	// 		item.style.color = "#c51abb";
	// 		item.style.borderBottom = "none";
	// 	}

	// 	item.addEventListener("click", () => {
	// 		text.forEach(item => {
	// 			item.style.display = "none";
	// 		});

	// 		text[i].style.display = "block";
	// 		text[i].classList.add("animated", "fadeIn");

	// 		accordionHeader.forEach(item => {
	// 			item.style.color = "black";
	// 			item.style.borderBottom = "2px dotted #333";
	// 		});

	// 		item.style.color = "#c51abb";
	// 		item.style.borderBottom = "none";
	// 	});
	// });


	//   blocks = document.querySelectorAll(itemsSelector);

	// blocks.forEach(block => {
	//     block.classList.add('animated', 'fadeInDown');
	// });

	// btns.forEach(btn => {
	//     btn.addEventListener('click', function() {
	//         if (!this.classList.contains('active')) {
	//             btns.forEach(btn => {
	//                 btn.classList.remove('active', 'active-style');
	//             });
	//             this.classList.add('active', 'active-style');
	//         }
	//     });
	// });
};

export default accordion;