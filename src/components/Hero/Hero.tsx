import { Container } from '../Container';
import { HeroActions } from './HeroActions';
import { HeroImageWithTag } from './HeroImageWIthTag';
import { HeroStats } from './HeroStats';

export const Hero = () => {
  return (
    <section className="mb-16">
      <Container>
        <div className="flex flex-col md:flex md:flex-row lg:items-center lg:justify-between">
          <HeroImageWithTag className="md:order-2" />
          <div className="flex flex-col gap-9 lg:w-[60%]">
            <h1 className="lg:text-hero text-5xl font-extrabold text-[var(--color-text)]">
              New Cafe <br />
              by <span className="text-gradient-green">Starbucks</span>
            </h1>
            <p className="text-[var(--color-text)] md:w-130">
              Have time to buy the most harmonious drinks in the new <br />
              Starbucks coffee and don&apos;t forget about the discount!
            </p>
            <HeroActions />
            <HeroStats />
          </div>
        </div>
      </Container>
    </section>
  );
};
