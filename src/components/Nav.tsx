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
    <nav className={`${className}`}>
      <ul className={`flex text-xl text-[var(--color-text)] ${listClassName}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
