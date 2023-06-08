export const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);
	numInputs.forEach((item) => {
		item.addEventListener("input", () => {
			const regExp = /\D/;
			item.value = item.value.replace(regExp, "");
		});
	});
};
