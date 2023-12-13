// Import styles from the specified path
import styles from '../styles';

// Custom component for rendering new features
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  // Container with flex layout and specified width constraints
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    {/* Container for the feature icon with specified styles */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      {/* Feature icon with specified properties */}
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>

    {/* Feature title with specified styles */}
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>

    {/* Feature subtitle with specified styles */}
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

// Export the NewFeatures component as the default export of this module
export default NewFeatures;
