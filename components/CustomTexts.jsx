'use client';

// Import the 'motion' component from the 'framer-motion' library
import { motion } from 'framer-motion';

// Import motion variants and styles from the specified path
import { textContainer, textVariant2 } from '../utils/motion';

// Custom component for rendering typing text
export const TypingText = ({ title, textStyles }) => (
  // Use the motion.p component with specified motion variants and additional styles
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/* Iterate through each letter in the 'title' and apply motion animation */}
    {Array.from(title).map((letter, index) => (
      // Use motion.span for each letter with specified motion variants
      <motion.span variants={textVariant2} key={index}>
        {/* Replace spaces with non-breaking space characters */}
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

// Custom component for rendering title text
export const TitleText = ({ title, textStyles }) => (
  // Use motion.h2 with specified motion variants, initial animation state, and additional styles
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {/* Render the provided 'title' text */}
    {title}
  </motion.h2>
);
