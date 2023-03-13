import ArrowIcon from 'components/atoms/icons/ArrowIcon';
import ArrowLeft from 'components/atoms/icons/ArrowLeft';
import ArrowRight from 'components/atoms/icons/ArrowRight';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProgressBar from './ProgressBar';
import ServicesChoices from './ServicesChoices';

function Form({ currentStep, goToNextStep, goToPreviousStep, className }) {
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [choicesError, setChoicesError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  function nextOnClick() {
    if (selectedChoices.length === 0) setChoicesError(true);
    else goToNextStep();
  }

  function choiceOnClick(choice) {
    if (selectedChoices.indexOf(choice) >= 0) removeChoice(choice);
    else addChoice(choice);
  }

  function addChoice(choice) {
    setSelectedChoices([...selectedChoices, choice]);
  }

  function removeChoice(choiceToRemove) {
    setSelectedChoices(selectedChoices.filter((choice) => choice !== choiceToRemove));
  }

  function onSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    if (choicesError) setChoicesError(false);
  }, [selectedChoices]);

  return (
    <div className={`mx-auto max-w-4xl px-4 ${className || ''}`}>
      <ProgressBar currentStep={currentStep} />
      {currentStep === 1 ? (
        <>
          <div className="mt-14">
            {choicesError && (
              <p role="alert" className="error-message text-center sm:text-left">
                Please pick at least one service.
              </p>
            )}
            <ServicesChoices
              className="mt-2"
              choiceOnClick={choiceOnClick}
              selectedChoices={selectedChoices}
            />
          </div>
          <div className="mt-10 flex justify-end lg:mt-20 lg:justify-start">
            <button
              onClick={nextOnClick}
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
          <form id="form" className="contact-form mt-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="relative flex-1">
                {errors.fullName && (
                  <p role="alert" className="error-message absolute -top-5">
                    Please enter a valid full name.
                  </p>
                )}
                <input
                  {...register('fullName', { required: true })}
                  type="text"
                  name="fullName"
                  placeholder="Vollständiger Name*"
                />
              </div>
              <div className="relative flex-1">
                {errors.email && (
                  <p role="alert" className="error-message absolute -top-5">
                    Please enter a valid email.
                  </p>
                )}
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                  })}
                  type="email"
                  name="email"
                  placeholder="E-Mail Adresse*"
                />
              </div>
            </div>
            <div className="mt-9">
              <textarea
                {...register('message', { required: false })}
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
              form="form"
              type="submit"
              className={`group flex w-fit items-center rounded-full bg-white px-5 py-2 font-poppins font-medium text-black transition-all hover:bg-iron`}>
              Anfrage senden
              <span className="ml-2">
                <ArrowIcon animated className="h-4 w-4" />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Form;
