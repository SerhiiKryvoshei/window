import "./slider";
import { changeModalState, modals, tabs, forms, timer } from "./modules/index";

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
	let modalState = {};

	const deadLine = new Date();
	deadLine.setDate(deadLine.getDate() + 3);

	changeModalState(modalState);

	modals();

	tabs(
		".glazing_slider",
		".glazing_block",
		".glazing_content",
		"active",
		"block"
	);
	tabs(
		".decoration_slider",
		".no_click",
		".decoration_content > div > div",
		"after_click",
		"block"
	);
	tabs(
		".balcon_icons",
		".balcon_icons_img",
		".big_img > img",
		"do_image_more",
		"inline-block"
	);

	forms(modalState);

	timer(".container1", deadLine);
}
