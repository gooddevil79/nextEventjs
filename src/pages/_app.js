import Layout from "@src/components/layout/Layout";
import "@src/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Next Events</title>
				<meta name="description" content="Next Events" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
