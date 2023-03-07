import FacebookIcon from 'components/atoms/icons/FacebookIcon';
import InstagramIcon from 'components/atoms/icons/InstagramIcon';
import TwitterIcon from 'components/atoms/icons/TwitterIcon';
import Link from 'next/link';

function SocialLinks({ className }) {
  return (
    <ul className={`mx-auto flex w-fit items-center gap-14 sm:gap-6 ${className || ''}`}>
      <li>
        <Link href="https://www.facebook.com/" target="_blank">
          <FacebookIcon className="transition-all hover:fill-iron" />
        </Link>
      </li>
      <li>
        <Link href="https://www.twitter.com/" target="_blank">
          <TwitterIcon className="transition-all hover:fill-iron" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/" target="_blank">
          <InstagramIcon className="transition-all hover:fill-iron" />
        </Link>
      </li>
    </ul>
  );
}
export default SocialLinks;
