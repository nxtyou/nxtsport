function ProgressBarStep({ stepNumber, isActive, children }) {
  return (
    <div
      className={`relative mx-auto flex h-8 w-8 cursor-default items-center justify-center rounded-full text-sm font-bold transition-all duration-100 ${
        isActive ? 'bg-[rgba(75,85,99,0.4)]' : 'bg-[rgba(17,24,39,0.7)]'
      }`}>
      <span className={`${isActive ? '' : 'opacity-30'}`}>{stepNumber}</span>
      <p
        className={`absolute -bottom-7 mx-auto min-w-fit whitespace-nowrap ${
          isActive ? '' : 'opacity-30'
        }`}>
        {children}
      </p>
    </div>
  );
}
export default ProgressBarStep;
