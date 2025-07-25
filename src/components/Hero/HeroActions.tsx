import clsx from 'clsx';

import { PrimaryButton } from '../PrimaryButton';

export const HeroActions = () => {
  return (
    <div className={clsx('flex justify-between gap-3 md:w-100')}>
      <PrimaryButton text="Select a coffee" />
      <button
        className={clsx(
          'border-gradient-dark flex-1 cursor-pointer rounded-4xl py-3',
          'text-base text-[var(--color-main-text)]',
          'transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:shadow-md'
        )}
      >
        More
      </button>
    </div>
  );
};
