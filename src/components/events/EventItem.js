import classes from "@src/styles/EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

const EventItem = function ({ event }) {
	const { id, title, description, location, date, image, isFeatured } = event;
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const formattedAddres = location.replace(", ", "\n");
	return (
		<li className={classes.item}>
			<Image src={"/" + image} alt={title} width={300} height={300} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{formattedDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddres}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={"/events/" + id}>
						<span>Explore event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
