import EventContent from "@src/components/event-detail/eventContent";
import EventLogistics from "@src/components/event-detail/eventLogistics";
import EventSummary from "@src/components/event-detail/eventSummary";
import { getEventById, getFeaturedEvents } from "@src/utils/api";
import Head from "next/head";

const EventDetailsPage = function ({ event }) {
	return event ? (
		<>
			<Head>
				<title>NextEvents | {event.title}</title>
				<meta name="description" content="Find a lot of events here...." />
			</Head>
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
		<div className="center">
			<p>Loading...</p>
		</div>
	);
};

export async function getStaticProps(context) {
	let event = null;
	const { params } = context;
	try {
		const res = await getEventById(params.eventId);
		event = res?.data;
	} catch (error) {}
	if (!event) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			event: event[0],
			revalidate: 30,
		},
	};
}

export async function getStaticPaths() {
	const { data } = await getFeaturedEvents();
	const paths = data.map(itm => ({ params: { eventId: toString(itm.id) } }));
	return {
		paths,
		fallback: true,
	};
}

export default EventDetailsPage;
