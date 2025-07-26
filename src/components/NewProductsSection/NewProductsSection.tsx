import { Container } from '../Container';
import { DescText } from '../DescText';
import { SectionHeader } from '../SectionHeader';
import { Swiper } from '../Swiper/Swiper';

export const NewProductsSection = () => {
  return (
    <section className="mb-16 flex flex-col gap-10 md:mb-20">
      <Container className="flex flex-col gap-9">
        <SectionHeader highlightedText="Products">
          Our New <br />
        </SectionHeader>
        <DescText>
          Have time to buy the most harmonious <br /> drinks in the new
          Starbucks coffee and <br /> don&apos;t forget about the discount!
        </DescText>
      </Container>
      <Swiper />
    </section>
  );
};
