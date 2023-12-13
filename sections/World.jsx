'use client';

// Importing necessary dependencies from external libraries and files
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

// Defining the World component as a functional component
const World = () => (
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
      <TypingText title="| Worldwide Budz" textStyles="text-center" />
      {/* TitleText component to display a title with specific styling */}
      <TitleText
        title={(
          <>Track Taste-Tingling Burger Recipes Around The
            World
          </>
        )}
        textStyles="text-center"
      />

      {/* Animation container for motion effects */}
      <motion.div
        // Variants for fadeIn motion effect
        variants={fadeIn('up', 'tween', 0.3, 1)}
        // Container with specific styling for content alignment
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        {/* Image representing a map of the virtual world */}
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* Absolute positioned elements representing people on the map */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

// Exporting the World component for use in other parts of the application
export default World;
