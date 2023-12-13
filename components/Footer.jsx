'use client';

// Import the 'motion' component from the 'framer-motion' library
import { motion } from 'framer-motion';

// Import 'socials' constant from specified path
import { socials } from '../constants';

// Import styles and motion utility functions from specified paths
import styles from '../styles';
import { footerVariants } from '../utils/motion';

// Custom component for rendering the website footer
const Footer = () => (
  // Use the motion.footer component with specified motion variants, initial state, and additional styles
  <motion.footer
    variants={footerVariants} // Apply motion animation variants
    initial="hidden" // Set the initial animation state to 'hidden'
    whileInView="show" // Enable animation when the component is in view
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* Gradient background element */}
    <div className="footer-gradient" />

    {/* Container with inner padding and flex layout */}
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* Header section with flex layout and gap between elements */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        {/* Website title */}
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Order Your BurgerBud
        </h4>

        {/* Button to enter BurgerBudz */}
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          {/* Image icon */}
          <img
            src="/burger.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          {/* Text label */}
          <span className="font-normal text-[16px] text-white">
            Order Your BurgerBud
          </span>
        </button>
      </div>

      {/* Divider line */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        {/* Footer content with flex layout and gap between elements */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Footer title */}
          <h4 className="font-extrabold text-[24px] text-white">
            BurgerBudz
          </h4>

          {/* Copyright text */}
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 BurgerBudz. All rights reserved.
          </p>

          {/* Social media icons */}
          <div className="flex gap-4">
            {/* Map through socials array and render social media icons */}
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

// Export the Footer component as the default export of this module
export default Footer;
