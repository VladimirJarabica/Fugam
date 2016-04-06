
export function getDateFromUTC(utcSeconds) {
	let d = new Date(0)
	d.setUTCSeconds(utcSeconds)
	let format = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
	return format
}

export function getTimeFromUTC(utcSeconds) {
	let d = new Date(0)
	d.setUTCSeconds(utcSeconds)
	let format = `${d.getHours()}:${d.getMinutes()}`
	return format
}

export function getIntervalBetweenTimes(time1, time2) {
	let totalSec = time1 - time2
	let hours = parseInt( totalSec / 3600 ) % 24
	let minutes = parseInt( totalSec / 60 ) % 60
	return '' + hours + 'h ' + minutes + 'm'
}