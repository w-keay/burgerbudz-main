'use client';

// Import the 'motion' component from the 'framer-motion' library
import { motion } from 'framer-motion';

// Import styles and motion utility functions from specified paths
import styles from '../styles';
import { fadeIn } from '../utils/motion';

// Custom component for rendering an explore card
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  // Use the motion.div component with specified motion variants and additional styles
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)} // Handle click events by calling the provided 'handleClick' function
  >
    {/* Render an image with specified properties */}
    <img
      src={imgUrl}
      alt="burger"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {/* Conditionally render content based on the 'active' state */}
    {active !== id ? (
      // Display title text when the card is not active
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      // Display additional content when the card is active
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          {/* Render an image with specified properties */}
          <img
            src="/burger.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        {/* Render text content with specified styles */}
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter BurgerBudz
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

// Export the ExploreCard component as the default export of this module
export default ExploreCard;
