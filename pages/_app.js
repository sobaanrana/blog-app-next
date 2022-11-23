import Navbar from "../components/navbar";
import "../styles/globals.css";
// global level css

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
