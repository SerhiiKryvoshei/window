import { calcScroll } from "../helpers/calcScroll";

const closeModals = (windows) => {
	windows.forEach((item) => {
		item.style.display = "none";
	});
};

function bindModal(
	triggerSelector,
	modalSelector,
	closeSelector,
	closeClickOverlay = true
) {
	const trigger = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);
	const close = document.querySelector(closeSelector);
	const windows = document.querySelectorAll("[data-modal]");

	const scroll = calcScroll();

	trigger.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target) {
				e.preventDefault();
			}
			closeModals(windows);
			modal.style.display = "block";
			document.body.classList.add("modal-open"); // bootstrap document.body.style.overflow = "hidden"
			document.body.style.marginRight = `${scroll}px`;
		});
	});

	close.addEventListener("click", () => {
		closeModals(windows);
		modal.style.display = "none";
		document.body.classList.remove("modal-open"); // bootstrap
		document.body.style.marginRight = "0px";
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal && closeClickOverlay) {
			closeModals(windows);
			modal.style.display = "none";
			document.body.classList.remove("modal-open"); // bootstrap
			document.body.style.marginRight = "0px";
		}
	});
}

function showModalByTime(selector, time) {
	setTimeout(() => {
		document.querySelector(selector).style.display = "block";
		document.body.classList.add("modal-open"); // bootstrap
	}, time);
}

export const modals = () => {
	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);

	bindModal(".phone_link", ".popup", ".popup .popup_close");

	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");

	bindModal(
		".popup_calc_button",
		".popup_calc_profile",
		".popup_calc_profile_close",
		false
	);

	bindModal(
		".popup_calc_profile_button",
		".popup_calc_end",
		".popup_calc_end_close",
		false
	);

	showModalByTime(".popup[data-modal]", 60000);
};
