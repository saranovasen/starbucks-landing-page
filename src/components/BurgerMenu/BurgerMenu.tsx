'use client';
import clsx from 'clsx';
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      className="relative flex h-5 flex-col gap-2 items-center justify-center border-none cursor-pointer"
    >
      <span
        className={clsx(
          'block absolute top-0 h-[2px] w-10 bg-ui-gradient transition-all duration-300 ease-in-out',
          isOpen && 'top-2 w-5 -rotate-45 '
        )}
      />
      <span
        className={clsx(
          'block h-[2px] w-10 bg-ui-gradient transition-transform duration-300 ease-in-out',
          isOpen && 'opacity-0'
        )}
      />
      <span
        className={clsx(
          'block absolute bottom-0 h-[2px] w-10 bg-ui-gradient transition-all duration-300 ease-in-out',
          isOpen && 'top-2 w-2 -rotate-135'
        )}
      />
    </button>
  );
};
