import EventList from "@src/components/events/EventList";
import ErrorAlert from "@src/components/ui/error-alert";
import { api, getAllEvents, getFeaturedEvents } from "@src/utils/api";
import Head from "next/head";
import { useEffect } from "react";

const HomePage = function ({ events, hasError, error }) {
	if (hasError) {
		return (
			<ErrorAlert>
				<p>Something went wrong!!!</p>
			</ErrorAlert>
		);
	}
	return (
		<div>
			<Head>
				<title>NextEvents</title>
				<meta name="description" content="Find a lot of events here...." />
			</Head>
			<EventList items={events} />
		</div>
	);
};

export async function getStaticProps() {
	try {
		const { data } = await getFeaturedEvents();
		return {
			props: {
				events: data,
			},
			revalidate: 1800,
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				hasError: true,
			},
		};
	}
}
export default HomePage;
