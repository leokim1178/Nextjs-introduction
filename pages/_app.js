import "../styles/globals.css";
import NavBar from "./NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
