import BackgroundBlur from 'components/atoms/BackgroundBlur';
import Footer from 'components/shared/Footer';
import NavBar from 'components/shared/NavBar';
import SocialLinks from 'components/shared/SocialLinks';
import Form from 'components/templates/Contact/Form';
import { useState } from 'react';

function Contact() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <NavBar ctaText="Anfrage senden" ctaTarget="/" />
      <main className="h-screen overflow-hidden">
        <BackgroundBlur />
        <section className="">
          <div className="mx-auto mt-36 max-w-4xl px-2 text-center sm:mt-48 sm:px-0">
            <h1 className="mt-8 cursor-default font-eurostar-black-extended text-4xl tracking-[-0.08em] sm:text-5xl sm:leading-[90.5%]">
              WIE KÖNNEN WIR DIR HELFEN?
            </h1>
            <p className="mt-4 cursor-default text-base text-iron sm:text-lg">
              Wir können dir oder deinem Team unfamgreich in vielen Bereichen weiterhelfen, wähle
              hier einen oder mehrere Services um dann mit uns in Kontakt zu treten!
            </p>
          </div>
          <Form currentStep={currentStep} className="mt-10 sm:mt-20" />
          <SocialLinks className="mt-16 xl:mt-32" />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Contact;
