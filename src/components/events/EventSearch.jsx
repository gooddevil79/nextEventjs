import { useRef } from "react";
import Button from "../ui/Button";
import classes from "@src/styles/EventSearch.module.css";

const EventSearch = function ({ onSearch }) {
	const yearInputRef = useRef(null);
	const monthInputRef = useRef(null);

	const handleSubmit = function (e) {
		e.preventDefault();
		const year = yearInputRef.current.value;
		const month = monthInputRef.current.value;

		onSearch(year, month);
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year:</label>
					<select name="year" id="year" ref={yearInputRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month:</label>
					<select name="month" id="month" ref={monthInputRef}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>
			<Button>Find Events</Button>
		</form>
	);
};

export default EventSearch;
