import clsx from 'clsx';
import Image from 'next/image';

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
        <div className="relative w-fit">
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
          <div
            className={clsx(
              'absolute z-20',
              'top-[30%] -right-45',
              'md:-top-0 md:-right-5',
              'lg:-top-5 lg:-right-10',
              'drop-shadow-[-8px_8px_10px_rgba(0,0,0,0.50)]'
            )}
          >
            <Image
              width={187}
              height={187}
              src="assets/svg/ui-elements/tag.svg"
              alt="Tag"
              className={clsx('w-22 lg:w-38')}
            />
            <span
              className={clsx(
                'absolute inset-0 flex items-center justify-center text-center',
                'text-lg uppercase lg:text-3xl',
                'font-medium text-[var(--color-main-text)]'
              )}
            >
              We <br />
              have
            </span>
          </div>
        </div>
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
