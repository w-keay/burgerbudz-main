'use client';

// Import motion components, styles, and motion utility functions
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

// Feedback component representing the feedback section of the website
const Feedback = () => (
  // Section container with specified paddings
  <section className={`${styles.paddings}`}>
    {/* Motion container with staggered animations and specified styles */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      {/* Feedback content container with fadeIn animation, specified styles, and gradient background */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        {/* Gradient background element with specified styles */}
        <div className="feedback-gradient" />

        {/* Content for feedback, including name, role, and feedback text */}
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Will
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder BurgerBudz
          </p>
        </div>

        {/* Feedback text with specified styles */}
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “BurgerBudz emerged from a desire to offer a quick, convenient, and homemade alternative to fast food. In a world filled with time constraints, we saw the need for a solution that delivers flavorful burgers without compromising quality.”
        </p>
      </motion.div>

      {/* Image container with fadeIn and zoomIn animations, specified styles, and image */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        {/* Image with specified styles and alt text */}
        <img
          src="/RedBurger.png"
          alt="RedBurger"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        {/* Absolute positioned stamp image with zoomIn animation, specified styles, and alt text */}
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

// Export the Feedback component as the default export of this module
export default Feedback;
