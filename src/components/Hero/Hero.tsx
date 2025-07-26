import clsx from 'clsx';

import { Container } from '../Container';
import { DescText } from '../DescText';
import { SectionHeader } from '../SectionHeader';
import { HeroActions } from './HeroActions';
import { HeroImageWithTag } from './HeroImageWIthTag';
import { HeroStats } from './HeroStats';

export const Hero = () => {
  return (
    <section className={clsx('mb-16')}>
      <Container>
        <div
          className={clsx(
            'flex flex-col md:flex md:flex-row',
            'lg:items-center lg:justify-between'
          )}
        >
          <HeroImageWithTag className={clsx('md:order-2')} />
          <div className={clsx('flex flex-col gap-9 lg:w-[60%]')}>
            <SectionHeader highlightedText="Starbucks">
              New Cafe <br />
              by
            </SectionHeader>
            <DescText>
              Have time to buy the most harmonious drinks in the
              <br /> new Starbucks coffee and don&apos;t forget about the
              discount!
            </DescText>
            <HeroActions />
            <HeroStats />
          </div>
        </div>
      </Container>
    </section>
  );
};
