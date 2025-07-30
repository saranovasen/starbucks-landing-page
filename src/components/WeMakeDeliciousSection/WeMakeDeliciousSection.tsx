import clsx from 'clsx';

import { Container } from '../Container';
import { DescText } from '../DescText';
import { HeadingSecondary } from '../HeadingSecondary';
import { PhotoDecor } from '../PhotoDecor';

export const WeMakeDeliciousSection = () => {
  return (
    <section className={clsx('mb-18 md:mb-30')}>
      <Container
        className={clsx(
          'flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-0'
        )}
      >
        <PhotoDecor
          decorSrc="/assets/svg/ui-elements/reactangle-photo-decor.svg"
          decorAlt="Photo decor"
          photoSrc="/assets/png/photos/branch-interior.png"
          photoAlt="Photo of a branch interior"
          decorClassName={clsx('w-40 md:w-80 lg:w-116')}
          photoClassName={clsx(
            'w-40 md:w-80 lg:w-116',
            'bottom-3 left-4',
            'md:left-6 md:bottom-6',
            'lg:left-9 lg:bottom-9',
            'drop-shadow-[-8px_8px_10px_rgba(0,0,0,0.50)]'
          )}
        />
        <div className={clsx('flex flex-col gap-9 md:gap-16')}>
          <HeadingSecondary highlightedText="delicious">
            We make <br />
          </HeadingSecondary>
          <DescText>
            Only in 2021 we have made more than 100,000
            <br /> orders for you, your loved ones, all of you, and in
            <br /> 2022 we are ready to destroy the market
          </DescText>
          <iframe
            src="https://www.youtube.com/embed/watch?v=CMmFG-GXNZ0"
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={clsx('h-41 w-64 shadow-lg md:h-69 md:w-112')}
          />
        </div>
      </Container>
    </section>
  );
};
