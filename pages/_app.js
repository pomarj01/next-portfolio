import "../styles/globals.css";
import SEO from "./components/SEO";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
