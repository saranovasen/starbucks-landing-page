import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Container } from './Container';

export const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between pt-9">
          <img
            src="assets/svg/logos/logo.svg"
            alt="Starbucks Logo"
            className="lg:w-49 max-w-full h-auto"
          />
          <BurgerMenu />
        </div>
      </Container>
    </header>
  );
};
