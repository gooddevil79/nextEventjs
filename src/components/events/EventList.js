import EventItem from "./EventItem";
import classes from "@src/styles/EventList.module.css";
const EventList = function ({ items }) {
	return (
		<div className={classes.list}>
			<ul>
				{items.map(itm => (
					<EventItem key={itm.id} event={itm} />
				))}
			</ul>
		</div>
	);
};

export default EventList;
