import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';

function ChoiceButton({ className, toggled, onClick, children }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-[30px] border-2 border-[#4b5563] px-5 py-[0.375rem] font-eurostar-black-extended text-[0.625rem] uppercase transition-all duration-100 sm:px-7 ${
        toggled ? 'border-white bg-white text-black' : ''
      } ${className || ''}`}
      onClick={onClick}>
      <span className="rounded-full bg-white p-[2px] text-black">
        {toggled ? <MinusIcon className="h-3 w-3" /> : <PlusIcon className="h-3 w-3" />}
      </span>
      <span>{children}</span>
    </button>
  );
}
export default ChoiceButton;
