const formsAjax = (state) => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input");
    
	const message = {   
		success: "Success",
		failure: "Something went wrong",
		pending: "Loading"
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
			block.style.color = "red";
            
			const formData = new FormData(item);
            
			getResources("./assets/server.php", formData)
				.then(data => {
					console.log(data);
					block.textContent = message.success;
				})
				.catch(() => {
					block.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						block.remove();
					}, 5000);
				});
		});
	});
};

export default formsAjax;