import Document, { Head, Main, Html, NextScript } from "next/document";

class AppDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<div id="modals"></div>
					<div id="overlays"></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
