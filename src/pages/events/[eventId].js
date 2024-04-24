import { useRouter } from "next/router";

import EventContent from "@src/components/event-detail/eventContent";
import EventLogistics from "@src/components/event-detail/eventLogistics";
import EventSummary from "@src/components/event-detail/eventSummary";

import { getEventById } from "../../../public/data";

const EventDetailsPage = function () {
	const router = useRouter();
	const event = getEventById(router?.query?.eventId);

	return event ? (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	) : (
		<p>Not found event</p>
	);
};

export default EventDetailsPage;
