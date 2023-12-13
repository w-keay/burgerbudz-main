// Import styles from the specified path
import styles from '../styles';

// Custom component for rendering start steps
const StartSteps = ({ number, text }) => (
  // Container with flex layout and centering styles
  <div className={`${styles.flexCenter} flex-row`}>
    {/* Container for the step number with specified styles */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      {/* Step number with bold white text */}
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>

    {/* Step text with flex-1 for maximum flexibility and specified styles */}
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

// Export the StartSteps component as the default export of this module
export default StartSteps;
