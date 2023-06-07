const hideTabContent = (tabs, contents, activeClass) => {
	tabs.forEach((element) => {
		element.classList.remove(activeClass);
	});

	contents.forEach((element) => {
		element.style.display = "none";
	});
};

const showTabContent = (
	tabs,
	contents,
	activeClass,
	valueDisplay,
	index = 0
) => {
	tabs[index].classList.add(activeClass);
	contents[index].style.display = valueDisplay;
};

export function tabs(
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
	valueDisplay = "block"
) {
	const header = document.querySelector(headerSelector);
	const tabs = document.querySelectorAll(tabSelector);
	const contents = document.querySelectorAll(contentSelector);

	hideTabContent(tabs, contents, activeClass);
	showTabContent(tabs, contents, activeClass, valueDisplay);

	header.addEventListener("click", (e) => {
		const target = e.target;
		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, "")) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
		) {
			tabs.forEach((item, i) => {
				if (target === item || target.parentNode === item) {
					hideTabContent(tabs, contents, activeClass);
					showTabContent(tabs, contents, activeClass, valueDisplay, i);
				}
			});
		}
	});
}
