import EventList from "@src/components/events/EventList";
import EventSearch from "@src/components/events/EventSearch";
import { getAllEvents } from "@src/utils/api";
import Head from "next/head";
import { useRouter } from "next/router";

const EventsPage = function ({ events }) {
	const router = useRouter();
	const handleSearch = function (year, month) {
		router.push(`/events/${year}/${month}`);
	};
	return (
		<>
			<Head>
				<title>All events</title>
				<meta name="description" content="Find a lot of events here...." />
			</Head>
			<EventSearch onSearch={handleSearch} />
			<EventList items={events} />
		</>
	);
};

export async function getStaticProps() {
	const { data } = await getAllEvents();
	return {
		props: {
			events: data,
		},
		revalidate: 60,
	};
}

export default EventsPage;
