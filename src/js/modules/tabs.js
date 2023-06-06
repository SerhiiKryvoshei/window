const hideTabContent = (tabs, contents, activeClass) => {
	tabs.forEach((element) => {
		element.classList.remove(activeClass);
	});

	contents.forEach((element) => {
		element.style.display = "none";
	});
};

const showTabContent = (tabs, contents, activeClass, index = 0) => {
	tabs[index].classList.add(activeClass);
	contents[index].style.display = "block";
};

export function tabs(
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass
) {
	const header = document.querySelector(headerSelector);
	const tabs = document.querySelectorAll(tabSelector);
	const contents = document.querySelectorAll(contentSelector);

	hideTabContent(tabs, contents, activeClass);
	showTabContent(tabs, contents, activeClass);

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
					showTabContent(tabs, contents, activeClass, i);
				}
			});
		}
	});
}
