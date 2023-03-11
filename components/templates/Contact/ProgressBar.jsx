import ProgressBarStep from 'components/atoms/ProgressBarStep';

function ProgressBar({ currentStep }) {
  return (
    <div className="mx-auto flex w-fit items-center gap-4">
      <ProgressBarStep stepNumber={1} isActive={currentStep === 1}>
        Service wählen
      </ProgressBarStep>
      <div
        className="relative h-[1px] w-32 bg-[#747474] sm:w-[400px] md:h-[2px] lg:w-[560px]"
        key="progress-bar">
        <div
          className={`absolute h-[1px] bg-white opacity-70 transition-all md:h-[2px] ${
            currentStep === 2 ? 'w-full' : 'w-0'
          }`}></div>
      </div>
      <ProgressBarStep stepNumber={2} isActive={currentStep === 2}>
        Kontakt aufnehmen
      </ProgressBarStep>
    </div>
  );
}
export default ProgressBar;
