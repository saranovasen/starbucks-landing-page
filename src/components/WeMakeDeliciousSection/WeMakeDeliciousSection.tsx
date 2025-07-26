import { Container } from '../Container';
import { DescText } from '../DescText';
import { HeadingSecondary } from '../HeadingSecondary';
import { PhotoDecor } from '../PhotoDecor';

export const WeMakeDeliciousSection = () => {
  return (
    <section className="mb-18 md:mb-40">
      <Container className="flex flex-col gap-12 md:flex-row md:justify-between">
        <PhotoDecor
          decorSrc="/assets/svg/ui-elements/reactangle-photo-decor.svg"
          decorAlt="Photo decor"
          photoSrc="/assets/png/photos/branch-interior.png"
          photoAlt="Photo of a branch interior"
        />
        <div className="flex flex-col gap-9 md:gap-16">
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
            className="h-41 w-64 shadow-lg lg:h-69 lg:w-112"
          />
        </div>
      </Container>
    </section>
  );
};
