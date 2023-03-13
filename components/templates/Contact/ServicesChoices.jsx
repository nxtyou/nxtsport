import ChoiceButton from 'components/atoms/ChoiceButton';

function ServicesChoices({ selectedChoices, choiceOnClick, className }) {
  const CHOICES = [
    'Content Creation',
    'Digital Community Building',
    'Digital Sports Products',
    'Digital Strategy Analysis',
    'Social Media Marketing'
  ];

  return (
    <ul
      className={`flex flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:flex-row ${
        className || ''
      }`}>
      {CHOICES.map((choice, index) => (
        <li key={index}>
          <ChoiceButton
            toggled={selectedChoices.indexOf(choice) >= 0}
            onClick={() => choiceOnClick(choice)}>
            {choice}
          </ChoiceButton>
        </li>
      ))}
    </ul>
  );
}
export default ServicesChoices;
