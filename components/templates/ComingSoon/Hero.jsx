import ButtonLink from 'components/atoms/ButtonLink';
import ArrowIcon from 'components/atoms/icons/ArrowIcon';
import SocialLinks from 'components/shared/SocialLinks';

function Hero() {
  return (
    <section className="flex justify-center">
      <div className="mt-36 max-w-4xl px-2 text-center sm:px-0">
        <img
          src="/images/exploding-head-emoji.svg"
          width={132}
          alt="exploding head emoji"
          className="mx-auto w-20 sm:w-32"
        />
        <h1 className="mt-8 cursor-default font-eurostar-black-extended text-4xl tracking-[-0.08em] sm:text-5xl sm:leading-[90.5%]">
          WE CREATE AWESOME STUFF FOR YOU.
        </h1>
        <p className="mt-4 cursor-default text-base text-iron sm:text-lg">
          We are going to launch our website soon.
        </p>
        <ButtonLink
          href="/contact"
          className="group mx-auto mt-10 flex"
          rightIcon={<ArrowIcon animated className="h-4 w-4" />}
          big>
          Hier zum Kontakt
        </ButtonLink>
        <SocialLinks className="mt-40" />
      </div>
    </section>
  );
}
export default Hero;
