'use client';

// Import the 'motion' component from the 'framer-motion' library
import { motion } from 'framer-motion';

// Import styles and motion utility functions from specified paths
import styles from '../styles';
import { navVariants } from '../utils/motion';

// Custom component for rendering the website navbar
const Navbar = () => (
  // Use the motion.nav component with specified motion variants, initial state, and additional styles
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* Gradient background element covering the entire nav section */}
    <div className="absolute w-[50%] inset-0 gradient-01" />

    {/* Container with inner padding and flex layout */}
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      {/* Search icon */}
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      {/* Website title */}
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        BurgerBudz
      </h2>

      {/* Menu icon */}
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

// Export the Navbar component as the default export of this module
export default Navbar;
