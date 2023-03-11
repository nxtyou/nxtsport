import Link from 'next/link';

const ButtonLink = ({
  children,
  href,
  className,
  rightIcon,
  leftIcon,
  big,
  black,
  'aria-label': ariaLabel
}) => {
  return (
    <Link
      href={href}
      className={`flex w-fit items-center rounded-full px-5 py-3 font-poppins font-medium transition-all sm:px-7 sm:py-4 ${
        black ? 'bg-black text-white hover:text-iron' : 'bg-white text-black hover:bg-iron'
      } ${big ? 'md:text-lg' : ''} ${className || ''}`}>
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span className="leading-none">{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Link>
  );
};

export default ButtonLink;
