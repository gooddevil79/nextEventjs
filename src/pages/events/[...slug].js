import { useRouter } from "next/router";
import EventList from "@src/components/events/EventList";
import ResultsTitle from "@src/components/results-title/ResultsTitle";
import Button from "@src/components/ui/Button";
import ErrorAlert from "@src/components/ui/error-alert";
import useSWR from "swr";
import { getFilteredEvents } from "@src/utils/api";
import Head from "next/head";

const FilteredEventsPage = function () {
	const router = useRouter();
	let pageHead = (
		<Head>
			<title>Filtered Events</title>
			<meta name="description" content={`All events  filtered`} />
		</Head>
	);

	const fetcher = async url => {
		const data = await getFilteredEvents({
			year: numYear,
			month: numMonth,
		});

		return data;
	};
	const { data, error, isLoading } = useSWR("/eventsFiltered", fetcher);

	const filterData = router.query.slug;
	if (!filterData) {
		return (
			<>
				{pageHead}
				<div className="center">
					<p className="center">Loading...</p>
				</div>
			</>
		);
	}
	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];
	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	pageHead = (
		<Head>
			<title>Filtered Events</title>
			<meta
				name="description"
				content={`All events  for ${numMonth}/${numYear}`}
			/>
		</Head>
	);

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return (
			<>
				{pageHead}
				<ErrorAlert>
					<p>Invalid filter, no Event Found...</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show all events</Button>
				</div>
			</>
		);
	}

	if (isLoading) {
		return (
			<>
				{pageHead}
				<p className="center">Loading...</p>
			</>
		);
	}
	if (error) {
		return (
			<>
				{pageHead}
				<ErrorAlert>
					<p>Something went wrong!!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show all events</Button>
				</div>
			</>
		);
	}

	return (
		<>
			{pageHead}
			<ResultsTitle date={`${numYear}-${numMonth}`} />
			{data?.length && !isLoading ? (
				<EventList items={data} />
			) : (
				<ErrorAlert>
					<h2 className="center">NO EVENT FOUND :(</h2>
				</ErrorAlert>
			)}
		</>
	);
};

// export async function getServerSideProps({ params }) {
// 	const [filteredYear, filteredMonth] = params?.slug;
// 	const numYear = +filteredYear;
// 	const numMonth = +filteredMonth;
// 	if (
// 		isNaN(numYear) ||
// 		isNaN(numMonth) ||
// 		numYear > 2030 ||
// 		numYear < 2021 ||
// 		numMonth > 12 ||
// 		numMonth < 1
// 	) {
// 		return {
// 			props: {
// 				hasError: true,
// 			},
// 		};
// 	}
// 	const filteredEvents = getFilteredEvents({
// 		year: numYear,
// 		month: numMonth,
// 	});

// 	return {
// 		props: {
// 			events: filteredEvents,
// 			date: {
// 				year: numYear,
// 				month: numMonth,
// 			},
// 		},
// 	};
// }

export default FilteredEventsPage;
