import clsx from 'clsx';

export const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <button
      className={clsx(
        'bg-ui-gradient flex-2 cursor-pointer rounded-4xl py-3',
        'text-center text-base font-medium text-[var(--color-main-text)]',
        'transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20'
      )}
    >
      {text}
    </button>
  );
};
