import ChoiceButton from 'components/atoms/ChoiceButton';
import ArrowRight from 'components/atoms/icons/ArrowRight';
import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

function Form({ currentStep, className }) {
  const [selectedChoices, setSelectedChoices] = useState([]);

  function addChoice(choice) {
    setSelectedChoices([...selectedChoices, choice]);
  }

  function removeChoice(choiceToRemove) {
    setSelectedChoices(selectedChoices.filter((choice) => choice !== choiceToRemove));
  }

  const CHOICES = [
    'Content Creation',
    'Digital Community Building',
    'Digital Sports Products',
    'Digital Strategy Analysis',
    'Social Media Marketing'
  ];

  useEffect(() => {
    console.log(selectedChoices);
  }, [selectedChoices]);

  return (
    <div className={`mx-auto max-w-4xl ${className || ''}`}>
      <ProgressBar currentStep={currentStep} />
      <ul className="mt-14 flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:flex-row">
        {CHOICES.map((choice, index) => (
          <li key={index}>
            <ChoiceButton addChoice={addChoice} removeChoice={removeChoice}>
              {choice}
            </ChoiceButton>
          </li>
        ))}
      </ul>
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
