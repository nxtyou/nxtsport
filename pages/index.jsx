import Footer from 'components/shared/Footer';
import NavBar from 'components/shared/NavBar';
import Hero from 'components/templates/ComingSoon/Hero';

export default function Home() {
  return (
    <>
      <NavBar ctaText="Anfrage senden" ctaTarget="/" />
      <main className="">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
