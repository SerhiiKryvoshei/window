import { checkNumInputs } from "../helpers/index";

//#region Attach events

const bindActionsToElements = (elementList, event, prop, state) => {
	elementList.forEach((item, i) => {
		item.addEventListener(event, () => {
			switch (event) {
				case "input":
					state[prop] = item.value;
					break;
				case "change":
					if (prop === "type") state[prop] = item.value;
					else {
						i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
						elementList.forEach((elem, j) => {
							i === j ? (elem.checked = true) : (elem.checked = false);
						});
					}
					break;
				default:
					state[prop] = i;
					break;
			}

			// console.log(state);
		});
	});
};

//#endregion

export const changeModalState = (state) => {
	const balconyShapes = document.querySelectorAll(".balcon_icons_img");
	const balconyWidth = document.querySelectorAll("#width");
	const balconyHeight = document.querySelectorAll("#height");
	const balconyType = document.querySelectorAll("#view_type");
	const balconyProfile = document.querySelectorAll(".checkbox");

	checkNumInputs("#width");
	checkNumInputs("#height");

	bindActionsToElements(balconyShapes, "click", "shape", state);
	bindActionsToElements(balconyWidth, "input", "width", state);
	bindActionsToElements(balconyHeight, "input", "height", state);
	bindActionsToElements(balconyType, "change", "type", state);
	bindActionsToElements(balconyProfile, "change", "profile", state);
};
