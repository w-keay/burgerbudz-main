'use client';

// Importing necessary dependencies from external libraries and files
import { motion } from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

// Defining the WhatsNew component as a functional component
const WhatsNew = () => (
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
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Animation container for motion effects */}
      <motion.div
        // Variants for fadeIn motion effect
        variants={fadeIn('right', 'tween', 0.2, 1)}
        // Container with specific styling for content alignment
        className="flex-[0.95] flex justify-center flex-col"
      >
        {/* TypingText component to display a typing animation */}
        <TypingText title="| Whats new?" />
        {/* TitleText component to display a title with specific styling */}
        <TitleText title={<>What's new about BurgerBudz?</>} />
        {/* Container for displaying multiple NewFeatures components */}
        {/* Mapping through the newFeatures array to render individual NewFeatures components */}
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            // NewFeatures component representing an individual new feature
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      {/* Animation container for motion effects */}
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        {/* Image representing the new features */}
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

// Exporting the WhatsNew component for use in other parts of the application
export default WhatsNew;
