import clsx from 'clsx';

import { Nav } from '../Nav';

export const BurgerMenuContent = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={clsx(
        'fixed top-0 right-0 z-40 h-screen w-screen max-w-sm',
        'border bg-[var(--color-background)] shadow-lg',
        'transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <Nav listClassName="flex-col space-y-5 pt-20 px-7" />
    </div>
  );
};
