import axios from "axios";

export const api = axios.create({
	baseURL: `https://vyalytrvaqhjllkacumf.supabase.co/rest/v1`,
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YWx5dHJ2YXFoamxsa2FjdW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MzI4MzgsImV4cCI6MjAzMDQwODgzOH0.-gDC8cTOE464vuFr1bFZL0-7aExjihEY8DcGB-Feokg",
		apikey:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YWx5dHJ2YXFoamxsa2FjdW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MzI4MzgsImV4cCI6MjAzMDQwODgzOH0.-gDC8cTOE464vuFr1bFZL0-7aExjihEY8DcGB-Feokg",
	},
});
export async function getFeaturedEvents() {
	const res = await api.get("/events?isFeatured[is]&select=*");
	return res;
}

export async function getAllEvents() {
	const res = await api.get("/events?select=*");
	return res;
}

export async function getFilteredEvents(dateFilter) {
	const res = await api.get("/events?select=*");
	const { year, month } = dateFilter;

	let filteredEvents = res?.data.filter(event => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});
	return filteredEvents;
}

export async function getEventById(id) {
	const res = await api.get(`/events?id=eq.${id}&select=*`);

	return res;
}
