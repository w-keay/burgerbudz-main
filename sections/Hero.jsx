'use client';

// Import motion components, styles, and motion utility functions
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

// Hero component representing the hero section of the website
const Hero = () => (
  // Section container with specified vertical paddings and left padding for small screens
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    {/* Motion container with staggered animations and specified styles */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Container for hero content with specified styles and relative positioning */}
      <div className="flex justify-center items-center flex-col relative z-10">
        {/* Motion heading with text animation variants and styles */}
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Burger
        </motion.h1>

        {/* Motion container for additional text animation with styles */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          {/* Heading with specified styles */}
          <h1 className={styles.heroHeading}>Bu</h1>
          {/* Divider line with specified styles */}
          <div className={styles.heroDText} />
          {/* Heading with specified styles */}
          <h1 className={styles.heroHeading}>z</h1>
        </motion.div>
      </div>

      {/* Motion container for image animation with specified variants and styles */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* Absolute gradient container with specified styles */}
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        {/* Image with specified styles, alt text, and object cover properties */}
        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        {/* Link to the explore section with a stamp image and specified styles */}
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

// Export the Hero component as the default export of this module
export default Hero;
