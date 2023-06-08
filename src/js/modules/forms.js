import { checkNumInputs } from "../helpers/index";

const message = {
	loading: "Загрузка...",
	success: "Спасибо! Скоро мы с вами свяжемся.",
	failure: "Что-то пошло не так.",
};

const postDate = async (url, data) => {
	document.querySelector(".status").textContent = message.loading;
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: data,
	});
	return await response.json();
};

const clearInputs = (inputs) => {
	inputs.forEach((item) => {
		item.value = "";
	});
};

export const forms = () => {
	const forms = document.querySelectorAll("form");
	const inputs = document.querySelectorAll("input");

	checkNumInputs('input[name="user_phone"]');

	forms.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			const statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			const strJSON = JSON.stringify(Object.fromEntries(formData));
			postDate("https://jsonplaceholder.typicode.com/posts", strJSON)
				.then((response) => {
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs(inputs);
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};
