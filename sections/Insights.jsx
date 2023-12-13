'use client';

// Importing necessary dependencies from external libraries and files
import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

// Defining the Insights component as a functional component
const Insights = () => (
  // Section container with specific styling and z-index for layering
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animation container for motion effects */}
    <motion.div
      // Variants for staggered motion effect
      variants={staggerContainer}
      // Initial animation state
      initial="hidden"
      // Animation state when the component is in view
      whileInView="show"
      // Viewport settings for animation trigger
      viewport={{ once: false, amount: 0.25 }}
      // Container for inner content with specific styling
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* TypingText component to display a typing animation */}
      <TypingText title="| Recipes" textStyles="text-center" />
      {/* TitleText component to display a title with specific styling */}
      <TitleText title={<>Read Our New Favourite Recipes</>} textStyles="text-center" />
      {/* Container for displaying multiple InsightCard components */}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {/* Mapping through the insights array to render individual InsightCard components */}
        {insights.map((item, index) => (
          // InsightCard component representing an individual insight
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

// Exporting the Insights component for use in other parts of the application
export default Insights;
