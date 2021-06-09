import '@styles/globals.css';
import Header from '@/Header';
import Footer from '@/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
