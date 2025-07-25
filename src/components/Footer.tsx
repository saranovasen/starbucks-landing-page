import clsx from 'clsx';
import Image from 'next/image';

import { footerSections } from '../data/footer';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className={clsx('shrink-0 bg-[var(--color-background-secondary)]')}>
      <Container
        className={clsx(
          'flex flex-col items-center gap-9 py-[5vw]',
          'md:flex-row md:items-start md:justify-between md:gap-25'
        )}
      >
        <div
          className={clsx(
            'flex w-full items-center justify-between md:block md:w-auto'
          )}
        >
          <Image
            width={256}
            height={344}
            src="/assets/svg/logos/logo.svg"
            alt="Starbucks Logo"
            className={clsx('h-auto w-33 md:w-49')}
          />
          <a href="#top" aria-label="Back to top" className={clsx('md:hidden')}>
            <Image
              width={53}
              height={53}
              src="/assets/svg/ui-elements/arrow-up-boxed.svg"
              alt="Back to top"
              className={clsx('h-auto max-w-full')}
            />
          </a>
        </div>
        <div
          className={clsx(
            'grid w-full gap-y-8',
            '[grid-template-columns:repeat(3,min-content)] [justify-content:space-between]',
            'md:order-2 md:[grid-template-columns:repeat(5,min-content)]'
          )}
        >
          {footerSections.map((section, sectionIndex) => (
            <ul
              key={sectionIndex}
              className={clsx('lg:text-l space-y-3 text-sm whitespace-nowrap')}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    className={clsx(
                      link.isPrimary
                        ? 'text-[var(--color-text)]'
                        : 'text-[var(--color-text-secondary)]'
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <a
          href="#top"
          aria-label="Back to top"
          className={clsx('hidden md:order-3 md:block')}
        >
          <Image
            width={53}
            height={53}
            src="assets/svg/ui-elements/arrow-up-boxed.svg"
            alt="Back to top"
            className={clsx('h-auto w-21')}
          />
        </a>
      </Container>
    </footer>
  );
};
