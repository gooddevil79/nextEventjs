import MainHeader from "../MainHeader";

const Layout = function ({ children }) {
	return (
		<>
			<MainHeader />
			<main>{children}</main>
		</>
	);
};

export default Layout;
