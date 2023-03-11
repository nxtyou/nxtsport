import ArrowRight from 'components/atoms/icons/ArrowRight';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import ServicesChoices from './ServicesChoices';

function Form({ currentStep, className }) {
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
    <div className={`mx-auto max-w-4xl ${className || ''}`}>
      <ProgressBar currentStep={currentStep} />
      <ServicesChoices className="mt-14" addChoice={addChoice} removeChoice={removeChoice} />
      <div className="mt-10 flex justify-end lg:mt-20 lg:justify-start">
        <button className="group relative right-16 flex items-center gap-2 font-medium opacity-50 transition-all hover:opacity-100">
          <span>Weiter</span>
          <span>
            <ArrowRight animated className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
export default Form;
