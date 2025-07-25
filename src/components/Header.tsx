import clsx from 'clsx';
import Image from 'next/image';

import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Container } from './Container';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className={clsx('mb-9 shrink-0 md:mb-10 lg:mb-16')}>
      <Container>
        <div
          className={clsx(
            'flex items-center justify-between pt-9',
            'md:justify-start md:space-x-25'
          )}
        >
          <Image
            width={130}
            height={48}
            src="/assets/svg/logos/logo.svg"
            alt="Starbucks Logo"
            className={clsx('h-auto max-w-full md:w-49')}
          />
          <BurgerMenu />
          <Nav className={clsx('hidden md:block')} listClassName="space-x-25" />
        </div>
      </Container>
    </header>
  );
};
