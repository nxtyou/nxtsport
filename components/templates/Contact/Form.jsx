import ArrowIcon from 'components/atoms/icons/ArrowIcon';
import ArrowLeft from 'components/atoms/icons/ArrowLeft';
import ArrowRight from 'components/atoms/icons/ArrowRight';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import ServicesChoices from './ServicesChoices';

function Form({ currentStep, goToNextStep, goToPreviousStep, className }) {
  const [selectedChoices, setSelectedChoices] = useState([]);

  function addChoice(choice) {
    setSelectedChoices([...selectedChoices, choice]);
  }

  function removeChoice(choiceToRemove) {
    setSelectedChoices(selectedChoices.filter((choice) => choice !== choiceToRemove));
  }

  useEffect(() => {
    console.log(selectedChoices);
  }, [selectedChoices]);

  return (
    <div className={`mx-auto max-w-4xl px-4 ${className || ''}`}>
      <ProgressBar currentStep={currentStep} />
      {currentStep === 1 ? (
        <>
          <ServicesChoices className="mt-14" addChoice={addChoice} removeChoice={removeChoice} />
          <div className="mt-10 flex justify-end lg:mt-20 lg:justify-start">
            <button
              onClick={goToNextStep}
              className="group relative right-16 flex items-center gap-2 font-medium opacity-50 transition-all hover:opacity-100">
              <span>Weiter</span>
              <span>
                <ArrowRight animated className="h-4 w-4" />
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          <form className="contact-form mt-20">
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex-1">
                <input type="text" name="fullName" placeholder="Vollständiger Name" />
              </div>
              <div className="flex-1">
                <input type="email" name="email" placeholder="E-Mail Adresse" />
              </div>
            </div>
            <div className="mt-9">
              <textarea
                name="message"
                placeholder="Deine Nachricht"
                wrap="soft"
                className="resize-none"></textarea>
            </div>
          </form>
          <div className="mx-auto mt-14 flex justify-between md:max-w-2xl">
            <button
              onClick={goToPreviousStep}
              className="group right-16 flex items-center gap-2 font-medium opacity-50 transition-all hover:opacity-100">
              <span>
                <ArrowLeft animated className="h-4 w-4" />
              </span>
              <span>Zurück</span>
            </button>
            <button
              type="submit"
              className={`group flex w-fit items-center rounded-full bg-white px-5 py-2 font-poppins font-medium text-black transition-all hover:bg-iron`}>
              Anfrage senden
              <span className="ml-2">
                <ArrowIcon animated />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Form;
