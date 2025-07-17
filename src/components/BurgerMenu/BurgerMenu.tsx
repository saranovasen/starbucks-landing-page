'use client';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { BurgerMenuContent } from './BurgerMenuContent';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div className="relative z-50 md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className={clsx(
          'relative z-50 flex h-5 cursor-pointer',
          'flex-col items-center justify-center gap-2 border-none'
        )}
      >
        <span
          className={clsx(
            'bg-ui-gradient absolute top-0 block h-[2px] w-10',
            'transition-all duration-300 ease-in-out',
            isOpen && 'top-2 w-5 -rotate-45'
          )}
        />
        <span
          className={clsx(
            'bg-ui-gradient block h-[2px] w-10',
            'transition-transform duration-300 ease-in-out',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={clsx(
            'bg-ui-gradient absolute bottom-0 block h-[2px] w-10',
            'transition-all duration-300 ease-in-out',
            isOpen && 'top-2 w-2 -rotate-135'
          )}
        />
      </button>

      <BurgerMenuContent isOpen={isOpen} />
    </div>
  );
};
