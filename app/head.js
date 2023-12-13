// Define a functional component named 'Head'
const Head = () => (
  // JSX fragment to group multiple elements without introducing an additional parent element
  <>
  {/* Set the title of the document to 'BurgerBudz' */}
    <title>BurgerBudz</title>

    {/* Set the viewport meta tag to control the layout on different devices */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Link to the favicon.ico file for the website's icon */}
    <link rel="icon" href="/favicon.ico" />
  </>
);

// Export the Head component as the default export of this module
export default Head;
