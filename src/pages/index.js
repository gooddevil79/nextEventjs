import EventList from "@src/components/events/EventList";
import { getFeaturedEvents } from "../../public/data";

const HomePage = function () {
	const filteredEvents = getFeaturedEvents();
	return (
		<div>
			<EventList items={filteredEvents} />
		</div>
	);
};

export default HomePage;
