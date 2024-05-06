const DUMMY_EVENTS = [
	{
		id: "e1",
		title: "Programming for everyone",
		description:
			"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
		location: "Somestreet 25, 12345 San Somewhereo",
		date: "2021-05-12",
		image: "images/coding-event.jpg",
		isFeatured: false,
	},
	{
		id: "e2",
		title: "Networking for introverts",
		description:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		location: "New Wall Street 5, 98765 New Work",
		date: "2021-05-30",
		image: "images/introvert-event.jpg",
		isFeatured: false,
	},
	{
		id: "e3",
		title: "Networking for extroverts",
		description:
			"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
		location: "My Street 12, 10115 Broke City",
		date: "2022-04-10",
		image: "images/extrovert-event.jpg",
		isFeatured: true,
	},
	{
		id: "e4",
		title: "React devs meet",
		description:
			"Talking about react, react echosystem, how to become an expert developer in one year",
		location: "Some Street 5, next to the theather, 1515 Vice city",
		date: "2022-04-11",
		image: "images/react-event.jpg",
		isFeatured: true,
	},
	{
		id: "e5",
		title: "Save your life!",
		description:
			"How to change your mindset and become a god, IT'S FREE FOR ALL BROKEN PEOPLE",
		location: "Some Street scond, Valentine city, 1998 number",
		date: "2022-04-11",
		image: "images/rutin.jpg",
		isFeatured: true,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter(event => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id) {
	return DUMMY_EVENTS.find(event => event.id === id);
}
