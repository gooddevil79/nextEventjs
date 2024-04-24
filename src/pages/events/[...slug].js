import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../public/data";
import EventList from "@src/components/events/EventList";
import ResultsTitle from "@src/components/results-title/ResultsTitle";
import Button from "@src/components/ui/Button";

const FilteredEventsPage = function () {
	const router = useRouter();
	if (!router.query.slug) {
		return <p className="center">Loading...</p>;
	}
	const [filteredYear, filteredMonth] = router?.query?.slug;
	const numYear = +filteredYear;
	const numMonth = +filteredMonth;
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
				<div className="center">
					<h1>Invalid filter, no Event Found...</h1>
					<Button link="/events">Show all events</Button>
				</div>
			</>
		);
	}
	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	return (
		<>
			<ResultsTitle date={`${numYear}-${numMonth}`} />
			{filteredEvents.length ? (
				<EventList items={filteredEvents} />
			) : (
				<h2 className="center">NO EVENT FOUND :(</h2>
			)}
		</>
	);
};

export default FilteredEventsPage;
