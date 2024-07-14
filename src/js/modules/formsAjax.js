const formsAjax = () => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input");
    
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
	};
    
	async function getResources(url, data) {
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
			item.parentNode.appendChild(block);
            
			item.classList.add("animated", "fadeOutUp");
			setTimeout(() => {
				item.style.display = "none";
			}, 400);
            
			const statusImg = document.createElement("img");
			statusImg.style.marginBottom = "20px";
			statusImg.setAttribute("src", message.spinner);
			statusImg.classList.add("animated", "fadeInUp");
			block.appendChild(statusImg);
            
			const textMessage = document.createElement("div");
			textMessage.textContent = message.loading;
			block.appendChild(textMessage);
            
			const formData = new FormData(item);
			let api;
			item.closest(".popup-design") ? api = path.designer : api = path.question; // Этот метод попробует найти определенный селектор у элемента где-то выше по иерархии. Если такого блока нет, то даст null.
			console.log(api);

			getResources(api, formData)
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
					// setTimeout(() => {
					// 	block.remove();
					// }, 5000);
				});
		});
	});
};

export default formsAjax;