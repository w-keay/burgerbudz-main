'use client';

// Import the 'motion' component from the 'framer-motion' library
import { motion } from 'framer-motion';

// Import fadeIn motion utility function from the specified path
import { fadeIn } from '../utils/motion';

// Custom component for rendering an insight card
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  // Use the motion.div component with specified motion variants and additional styles
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    {/* Image element with specified properties */}
    <img
      src={imgUrl}
      alt="burger01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

    {/* Container with flex layout, justifying between items */}
    <div className="w-full flex justify-between items-center">
      {/* Content container with flex layout, adjusting for margin on larger screens */}
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        {/* Title text with specified styles */}
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>

        {/* Subtitle text with specified styles */}
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      {/* Container for an arrow image, visible only on larger screens */}
      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        {/* Arrow image with specified properties */}
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

// Export the InsightCard component as the default export of this module
export default InsightCard;
