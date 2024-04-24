import Layout from "@src/components/layout/Layout";
import "@src/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
