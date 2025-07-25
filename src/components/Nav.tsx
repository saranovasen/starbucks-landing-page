import clsx from 'clsx';

import { navItems, type NavItem } from '../data/navigation';

interface NavProps {
  className?: string;
  listClassName?: string;
  items?: NavItem[];
}

export const Nav = ({
  className,
  listClassName,
  items = navItems,
}: NavProps) => {
  return (
    <nav className={clsx(className)}>
      <ul
        className={clsx('text-l flex text-[var(--color-text)]', listClassName)}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={clsx(
                'transition-all duration-300',
                'hover:scale-105 hover:bg-gradient-to-r hover:from-[#35c66b] hover:to-[#237249]',
                'hover:bg-clip-text hover:text-transparent hover:drop-shadow-sm'
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
