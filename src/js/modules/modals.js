function bindModal(trigger, modal, close) {
	trigger.addEventListener("click", (e) => {
		if (e.target) {
			e.preventDefault();
		}
		modal.style.display = "block";
		// document.body.style.overflow = "hidden";
		document.body.classList.add("modal-open"); // bootstrap
	});

	close.addEventListener("click", () => {
		modal.style.display = "none";
		// document.body.style.overflow = "";
		document.body.classList.remove("modal-open"); // bootstrap
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.style.display = "none";
			document.body.classList.remove("modal-open"); // bootstrap
		}
	});
}

export const modals = () => {
	const callEngineerBtn = document.querySelector(".popup_engineer_btn");
	const modalEngineer = document.querySelector(".popup_engineer");
	const modalEngineerClose = document.querySelector(
		".popup_engineer .popup_close"
	);
	bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
};
