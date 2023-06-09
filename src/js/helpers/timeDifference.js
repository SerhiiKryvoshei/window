export const timeDifference = (endPeriod, startPeriod = new Date()) => {
	return Date.parse(endPeriod) - Date.parse(startPeriod);
};
