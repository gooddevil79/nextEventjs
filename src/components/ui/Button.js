import Link from "next/link";
import classes from "@src/styles/Button.module.css";
const Button = function ({ link, children, onClick }) {
	return link ? (
		<Link className={classes.btn} href={link}>
			{children}
		</Link>
	) : (
		<button onClick={onClick} className={classes.btn}>
			{children}
		</button>
	);
};

export default Button;
