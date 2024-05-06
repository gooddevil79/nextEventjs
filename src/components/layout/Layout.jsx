import MainHeader from "../MainHeader";

const Layout = function ({ children }) {
	return (
		<div className="wrapper">
			<MainHeader />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
