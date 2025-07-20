import Image from 'next/image';

import { footerSections } from '../data/footer';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="shrink-0 bg-[var(--color-background-secondary)]">
      <Container className="flex flex-col items-center gap-9 py-[5vw] md:flex-row md:items-start md:justify-between md:gap-25">
        <div className="flex w-full items-center justify-between md:block md:w-auto">
          <Image
            src="assets/svg/logos/logo.svg"
            alt="Starbucks Logo"
            className="h-auto max-w-full md:w-49"
          />
          <a href="#top" aria-label="Back to top" className="md:hidden">
            <Image
              src="assets/svg/ui-elements/arrow-up-boxed.svg"
              alt="Back to top"
              className="h-auto max-w-full"
            />
          </a>
        </div>
        <div className="grid w-full [grid-template-columns:repeat(3,min-content)] [justify-content:space-between] md:order-2 md:[grid-template-columns:repeat(5,min-content)]">
          {footerSections.map((section, sectionIndex) => (
            <ul
              key={sectionIndex}
              className="lg:text-l space-y-3 text-sm whitespace-nowrap"
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    className={
                      link.isPrimary
                        ? 'text-[var(--color-text)]'
                        : 'text-[var(--color-text-secondary)]'
                    }
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
          className="hidden md:order-3 md:block"
        >
          <Image
            src="assets/svg/ui-elements/arrow-up-boxed.svg"
            alt="Back to top"
            className="h-auto w-21"
          />
        </a>
      </Container>
    </footer>
  );
};
