import Home from ".";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Home Component {...pageProps} />
      <span>hello</span>
    </Layout>
  );
}
