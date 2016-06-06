"use strict"

let Calendar = {}
module.exports = Calendar;

Calendar.getEvents = () => allEvents;

/*
Pricing (text)
Location - map
A photo 
How to register
Location
Details
Start time
End time
Start date
End date
Title
Featured
Link

*/

let makeCalendarItem = (pricing, location, photo, registrationInstructions, detail, startTime, endTime, startDate, endDate title, link, featured) => {
	let newItem = {};
	for (let elem in args) {
		newItem[elem] = args[elem];
	}
	return newItem;
}

let allEvents = [];

allEvents.push(makeCalendarItem('free', 'address1', 'photoUrl', 'register here', 'event detail', '3:00', '6:00', '2016-08-22', '2016-08-22', 'something', 'url', false))
allEvents.push(makeCalendarItem('free', 'address2', 'photoUrl', 'register here', 'event detail', '3:00', '6:00', '2016-06-05', '2016-06-06', 'something2', 'url', false))
allEvents.push(makeCalendarItem('free', 'address1', 'photoUrl', 'register here', 'event detail', '3:00', '6:00', '2016-06-08', '2016-06-08', 'something3', 'url', true))


