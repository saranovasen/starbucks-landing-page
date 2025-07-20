import Image from 'next/image';

import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Container } from './Container';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="mb-9 shrink-0 md:mb-10 lg:mb-16">
      <Container>
        <div className="flex items-center justify-between pt-9 md:justify-start md:space-x-25">
          <Image
            src="assets/svg/logos/logo.svg"
            alt="Starbucks Logo"
            className="h-auto max-w-full md:w-49"
          />
          <BurgerMenu />
          <Nav className="hidden md:block" listClassName="space-x-25" />
        </div>
      </Container>
    </header>
  );
};
