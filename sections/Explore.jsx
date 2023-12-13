'use client';

// Import React hooks and motion components, styles, constants, and utility functions
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

// Explore component representing the explore section of the website
const Explore = () => {
  // State hook to manage the active world
  const [active, setActive] = useState('world-2');

  // Render the explore section
  return (
    // Section container with specified paddings and ID
    <section className={`${styles.paddings}`} id="explore">
      {/* Motion container with staggered animations and specified styles */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* TypingText component with specified title and text styles */}
        <TypingText title="| The Menu" textStyles="text-center" />

        {/* TitleText component with specified title and text styles */}
        <TitleText
          title={<>Choose The Burger That <br className="md:block hidden" /> Tingles Your Tastebuds</>}
          textStyles="text-center"
        />

        {/* Container with flex layout and specified styles */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {/* Map through exploreWorlds array and render ExploreCard component for each world */}
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Export the Explore component as the default export of this module
export default Explore;
