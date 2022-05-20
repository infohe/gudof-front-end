import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* <Head>
        <title>Gudof</title>
        <meta
          name="description"
          content="Find a lot of great tools that allow you to evolve...{add descriptions about gudof]"
        />
      </Head> */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
