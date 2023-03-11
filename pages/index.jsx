import BackgroundBlur from 'components/atoms/BackgroundBlur';
import Footer from 'components/shared/Footer';
import NavBar from 'components/shared/NavBar';
import Hero from 'components/templates/ComingSoon/Hero';

function Home() {
  return (
    <>
      <NavBar ctaText="Anfrage senden" ctaTarget="/contact" />
      <main className="h-screen overflow-hidden">
        <BackgroundBlur />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
export default Home;
