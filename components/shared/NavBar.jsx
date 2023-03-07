import ButtonLink from 'components/atoms/ButtonLink';
import ArrowIcon from 'components/atoms/icons/ArrowIcon';
import Link from 'next/link';

function NavBar({ ctaText, ctaTarget }) {
  return (
    <header className="absolute top-8 right-0 left-0 z-10">
      <div className="mx-auto flex max-w-[1340px] justify-between px-2 sm:px-4 xl:px-0">
        <Link href="/">
          <img src="/images/logo.png" alt="nxt sport logo" width={73} height={59} />
        </Link>
        <ButtonLink
          href={ctaTarget}
          aria-label={ctaText}
          className="group flex"
          rightIcon={<ArrowIcon animated />}
          big>
          {ctaText}
        </ButtonLink>
      </div>
    </header>
  );
}
export default NavBar;