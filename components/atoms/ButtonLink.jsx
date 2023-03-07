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
      className={`flex w-fit items-center rounded-full px-7 py-4 font-poppins font-medium transition-all ${
        black ? 'bg-black text-white hover:text-iron' : 'bg-white text-black hover:bg-iron'
      } ${big ? 'md:text-lg' : ''} ${className || ''}`}>
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span className="leading-none">{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Link>
  );
};

export default ButtonLink;
