import Link from 'next/link';

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-xs md:text-sm">
      <div className="flex justify-center gap-1 pr-3 pb-3 md:justify-end">
        <Link href="/" className="opacity-50 transition-all hover:opacity-80">
          IMPRESSUM
        </Link>
        <span className="cursor-default">|</span>
        <Link href="/" className="opacity-50 transition-all hover:opacity-80">
          DATENSCHUTZ
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
