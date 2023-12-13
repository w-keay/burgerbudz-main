// Import necessary components and sections from the specified paths
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// Define a functional component named 'Page'
const Page = () => (
  // Main container with a black background, handling overflow
  <div className="bg-primary-black overflow-hidden">
    {/* Render the Navbar component */}
    <Navbar />

    {/* Render the Hero section */}
    <Hero />

    {/* Container with a gradient background, containing the About and Explore sections */}
    <div className="relative">
      {/* Render the About section */}
      <About />

      {/* Gradient background element */}
      <div className="gradient-03 z-0" />

      {/* Render the Explore section */}
      <Explore />
    </div>

    {/* Container with a gradient background, containing the GetStarted and WhatsNew sections */}
    <div className="relative">
      {/* Render the GetStarted section */}
      <GetStarted />

      {/* Gradient background element */}
      <div className="gradient-04 z-0" />

      {/* Render the WhatsNew section */}
      <WhatsNew />
    </div>

    {/* Render the World section */}
    <World />

    {/* Container with a gradient background, containing the Insights and Feedback sections */}
    <div className="relative">
      {/* Render the Insights section */}
      <Insights />

      {/* Gradient background element */}
      <div className="gradient-04 z-0" />

      {/* Render the Feedback section */}
      <Feedback />
    </div>

    {/* Render the Footer component */}
    <Footer />
  </div>
);

// Export the Page component as the default export of this module
export default Page;
