'use client';

// Import motion components, TypingText component, styles, and motion utility functions
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

// About component representing the about section of the website
const About = () => (
  // Section container with relative positioning and z-index
  <section className={`${styles.paddings} relative z-10`}>
    {/* Gradient background element with specified styles and z-index */}
    <div className="gradient-02 z-0" />

    {/* Motion container with staggered animations and specified styles */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* TypingText component with specified title and text styles */}
      <TypingText title="| About BurgerBudz" textStyles="text-center" />

      {/* Motion paragraph with fadeIn animation, specified styles, and text content */}
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Burger Budz,</span> a groundbreaking burger recipe service that redefines 
        your culinary journey. With BurgerBudz, discovering your new favorite burger is a breeze. We provide you with {' '}
        <span className="font-extrabold text-white">
        carefully curated ingredients.
        </span>{' '}
        From{' '}
        <span className="font-extrabold text-white">classic beef to innovative plant-based options,</span> 
        Say goodbye to the hassle of meal planning and hello to the joy of crafting mouthwatering burgers. 
        Join us on this culinary exploration, where every bite is a celebration of homemade goodness.
      </motion.p>

      {/* Motion image with fadeIn animation, specified styles, and alt text */}
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

// Export the About component as the default export of this module
export default About;
