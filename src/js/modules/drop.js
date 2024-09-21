const drop = () => {
	// drag *
	// dragend *
	// dragenter - объект над dropArea
	// dragexit *
	// dragleave - объект за пределами dropArea
	// dragover - объект зависает над dropArea
	// dragstart *
	// drop - объект отправлен в dropArea
	
	const fileUpload = document.querySelectorAll("[name='upload']");

	["dragenter", "dragleave", "dragover", "drop"].forEach(event => {
		fileUpload.forEach(item => {
			item.addEventListener(event, preventDefault, false);
		});
	});

	function preventDefault(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	["dragenter", "dragover"].forEach(event => {
		fileUpload.forEach(item => {
			item.addEventListener(event, () => addHighlight(item), false);
		});
	});

	function addHighlight(item) {
		item.closest(".file_upload").style.borderRadius = "52px";
		item.closest(".file_upload").style.background = " linear-gradient(135deg, #e0ffe0, #b0e0b0)";
	}

	["dragleave", "drop"].forEach(event => {
		fileUpload.forEach(item => {
			item.addEventListener(event, () => clearHighlight(item), false);
		});
	});

	function clearHighlight(item) {
		if (item.closest(".calc_form")) {
			item.closest(".file_upload").style.background = "white";
			item.closest(".file_upload").style.borderRadius = "none";
		} else if (item.closest(".popup-content")) {
			item.closest(".file_upload").style.background = "#ededed";
			item.closest(".file_upload").style.borderRadius = "none";
		} else {
			item.closest(".file_upload").style.background = "#f7e7e6";
			item.closest(".file_upload").style.borderRadius = "none";
		}
	}

	["drop"].forEach(event => {
		fileUpload.forEach(item => {
			item.addEventListener(event, (e) => {
				item.files = e.dataTransfer.files;
				let dots;
				const arr = item.files[0].name.split(".");

				arr[0].length > 6 ? dots = "..." : dots = ".";
				const name = arr[0].substring(0, 6) + dots + arr[1];
				item.previousElementSibling.textContent = name;

				
			}, false);
		});
	});
};

export default drop;