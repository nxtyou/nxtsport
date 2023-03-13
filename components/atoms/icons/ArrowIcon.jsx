const ArrowIcon = ({ className, animated }) => {
  return (
    <svg
      className={`${className} ${
        animated
          ? 'transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
          : ''
      }`}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.4553 1.47041C14.4553 0.999849 14.0739 0.618383 13.6033 0.618383L5.93508 0.618384C5.46452 0.618384 5.08306 0.999849 5.08306 1.47041C5.08306 1.94097 5.46452 2.32244 5.93508 2.32244L12.7513 2.32244L12.7513 9.13865C12.7513 9.60921 13.1328 9.99067 13.6033 9.99067C14.0739 9.99067 14.4553 9.60921 14.4553 9.13865L14.4553 1.47041ZM1.70941 14.5693L14.2058 2.07288L13.0008 0.867937L0.50446 13.3643L1.70941 14.5693Z"
        fill="#040617"
      />
    </svg>
  );
};

export default ArrowIcon;
