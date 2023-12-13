// Import the 'Head' component from the 'next/head' library
import Head from 'next/head';

// Import global styles
import '../styles/globals.css';

// Custom app component with global styles and metadata
const MyApp = ({ Component, pageProps }) => (
  // Fragment shorthand syntax for wrapping multiple elements
  <>
    {/* Head component for setting metadata, title, and links */}
    <Head>
      <title>BurgerBudz</title> {/* Set the title of the web page */}
      <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Set the viewport for responsive design */}
      <link rel="icon" href="/favicon.ico" /> {/* Set the favicon for the website */}
      <link rel="preconnect" href="https://stijndv.com" /> {/* Preconnect to an external domain */}
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" /> {/* Include an external stylesheet */}
    </Head>

    {/* Render the main component with its page props */}
    <Component {...pageProps} />
  </>
);

// Export the MyApp component as the default export of this module
export default MyApp;
