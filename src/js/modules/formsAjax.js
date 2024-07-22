const formsAjax = () => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input"),
		upload = document.querySelectorAll("[name='upload']");
    
	const message = {   
		success: "Отправлено",
		failure: "Ошибка",
		pending: "Идет отправка",
		spinner: "assets/img/spinner.gif",
		ok: "assets/img/ok.png",
		fail: "assets/img/fail.png"
	};
    
	const path = {
		designer: "assets/server.php",
		question: "assets/question.php"
	};
    
	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = "";
		});

		upload.forEach(item => {
			item.previousElementSibling.textContent = "Файл не выбран";
		});
	};

	upload.forEach(item => {
		item.addEventListener("input", () => {
			let dots;
			const arr = item.files[0].name.split(".");

			arr[0].length > 6 ? dots = "..." : dots = ".";
			const name = arr[0].substring(0, 6) + dots + arr[1];
			item.previousElementSibling.textContent = name;
		});
	});
    
	async function getResources(url, data, statusImg, textMessage, block) {
		statusImg.setAttribute("src", message.spinner);
		block.appendChild(statusImg);
		textMessage.textContent = message.loading;
		block.appendChild(textMessage);

		const res = await fetch(`${url}`, {
			method: "POST",
			body: data
		});
        
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
        
		return await res.text();
	}
    
	forms.forEach(item => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();
            
			const block = document.createElement("div");
			block.style.display = "block";
			block.style.color = "green";
			block.style.textAlign = "center";
			item.parentNode.appendChild(block);
            
			item.classList.add("animated", "fadeOutUp");
			setTimeout(() => {
				item.style.display = "none";
			}, 400);
            
			const statusImg = document.createElement("img");
			statusImg.style.marginBottom = "20px";
			statusImg.classList.add("animated", "fadeInUp");

			const textMessage = document.createElement("div");
            
			const formData = new FormData(item);
			let api;
			item.closest(".popup-design") || item.classList.contains("calc_form") ? api = path.designer : api = path.question; // Этот метод попробует найти определенный селектор у элемента где-то выше по иерархии. Если такого блока нет, то даст null.

			getResources(api, formData, statusImg, textMessage, block)
				.then((data) => {
					console.log(data);
					statusImg.setAttribute("src", message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute("src", message.fail);
					block.style.color = "red";
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						block.remove();
						item.style.display = "block",
						item.classList.remove("fadeOutUp");
						item.classList.add("fadeInUp");
					}, 5000);
				});
		});
	});
};

export default formsAjax;


