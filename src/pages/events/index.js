import EventList from "@src/components/events/EventList";
import { getAllEvents } from "../../../public/data";
import EventSearch from "@src/components/events/EventSearch";
import { useRouter } from "next/router";

const EventsPage = function () {
	const router = useRouter();
	const events = getAllEvents();

	const handleSearch = function (year, month) {
		router.push(`/events/${year}/${month}`);
	};
	return (
		<>
			<EventSearch onSearch={handleSearch} />
			<EventList items={events} />
		</>
	);
};

export default EventsPage;
