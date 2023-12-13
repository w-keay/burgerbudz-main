// Import the global styles for the entire application
import '../styles/globals.css';

// Define a functional component named 'RootLayout' that takes 'children' as a prop
const RootLayout = ({ children }) => (
  // Root HTML structure for the entire application
  <html lang="en">
    {/* Head section containing metadata and links to external resources */}
    <head>
      {/* Preconnect to the specified domain for better performance */}
      <link rel="preconnect" href="https://stijndv.com" />

      {/* Link to an external stylesheet for custom fonts (Eudoxus-Sans) */}
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>

    {/* Body section containing the main content of the application */}
    <body>
      {/* Render the children components passed to RootLayout */}
      {children}
    </body>
  </html>
);

// Export the RootLayout component as the default export of this module
export default RootLayout;
