'use client';

// Import motion components, styles, constants, components, and motion utility functions
import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

// GetStarted component representing the get started section of the website
const GetStarted = () => (
  // Section container with specified paddings and z-index
  <section className={`${styles.paddings} relative z-10`}>
    {/* Motion container with staggered animations and specified styles */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Motion container for planet image with specified variants and styles */}
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        {/* Image of the planet with specified styles and alt text */}
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      {/* Motion container for text content with fadeIn animation and specified styles */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* TypingText component with specified title */}
        <TypingText title="| How BurgerBudz Works" />

        {/* TitleText component with specified title */}
        <TitleText title={<>Get started with just a few clicks</>} />

        {/* Container for starting features with max-width and gap */}
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {/* Map through startingFeatures array and render StartSteps component for each feature */}
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

// Export the GetStarted component as the default export of this module
export default GetStarted;
