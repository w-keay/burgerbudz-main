// Import components and sections from specified paths
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// Import components and sections from specified paths
const Home = () => (
  // Container with a background color and overflow set to hidden
  <div className="bg-primary-black overflow-hidden">
    {/* Render the Navbar component */}
    <Navbar />

    {/* Render the Hero component */}
    <Hero />

    {/* Container with relative positioning for the About section */}
    <div className="relative">
      {/* Render the About section */}
      <About />

      {/* Gradient background element with specified styles */}
      <div className="gradient-03 z-0" />

      {/* Render the Explore section */}
      <Explore />
    </div>

    {/* Container with relative positioning for the GetStarted section */}
    <div className="relative">
      {/* Render the GetStarted section */}
      <GetStarted />

      {/* Gradient background element with specified styles */}
      <div className="gradient-04 z-0" />

      {/* Render the WhatsNew section */}
      <WhatsNew />
    </div>

    {/* Render the World section */}
    <World />

    {/* Container with relative positioning for the Insights section */}
    <div className="relative">
      {/* Render the Insights section */}
      <Insights />

      {/* Gradient background element with specified styles */}
      <div className="gradient-04 z-0" />

      {/* Render the Feedback section */}
      <Feedback />
    </div>

    {/* Render the Footer component */}
    <Footer />
  </div>
);

// Export the Home component as the default export of this module
export default Home;
