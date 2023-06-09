import { addZero, timeDifference } from "../helpers/index";

const getTimeRemaining = (endTime) => {
	const timeDiff = timeDifference(endTime);
	const seconds = Math.floor((timeDiff / 1000) % 60);
	const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
	const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

	return {
		total: timeDiff,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};
};

const setClock = (selector, endTime) => {
	const timer = document.querySelector(selector);
	const days = timer.querySelector("#days");
	const hours = timer.querySelector("#hours");
	const minutes = timer.querySelector("#minutes");
	const seconds = timer.querySelector("#seconds");
	const timeInterval = setInterval(updateClock, 1000);

	updateClock(); //очистим данные

	function updateClock() {
		const t = getTimeRemaining(endTime);

		days.textContent = addZero(t.days % 1000);
		hours.textContent = addZero(t.hours);
		minutes.textContent = addZero(t.minutes);
		seconds.textContent = addZero(t.seconds);

		if (t.total <= 0) {
			days.textContent = "00";
			hours.textContent = "00";
			minutes.textContent = "00";
			seconds.textContent = "00";

			clearInterval(timeInterval);
		}
	}
};

export const timer = (id, deadline) => {
	// console.log(getTimeRemaining("dr"));
	setClock(id, deadline);
};
