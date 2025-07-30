import { Container } from '../Container';
import { DescText } from '../DescText';
import { PhotoDecor } from '../PhotoDecor';
import { SectionHeader } from '../SectionHeader';
import { Contact } from './Contact';

export const ContactsSection = () => {
  return (
    <section className="mb-16 md:mb-27">
      <Container className="flex flex-col md:flex-row md:justify-between">
        <PhotoDecor
          decorSrc="/assets/svg/ui-elements/reactangle-photo-decor.svg"
          decorAlt="Photo decor"
          photoSrc="/assets/png/photos/branch-exterior.png"
          photoAlt="Photo of a branch interior"
          decorClassName="w-40 md:w-60 lg:w-88 -scale-x-100"
          photoClassName="w-40 md:w-60 lg:w-88 bottom-3 right-4 lg:right-9 lg:bottom-9 drop-shadow-[8px_8px_10px_rgba(0,0,0,0.50)]"
          className="mb-9 self-end md:order-2"
        />
        <div className="lg:gap:-13 flex flex-col gap-9">
          <SectionHeader highlightedText="Contacts">
            Our
            <br />
          </SectionHeader>
          <DescText>
            Have time to buy the most harmonious
            <br /> drinks in the new Starbucks coffee and
            <br /> don&apos;t forget about the discount!
          </DescText>
          <div className="flex flex-col gap-5 md:gap-7">
            <Contact
              contactSrc="/assets/svg/icons/instagram-icon.svg"
              contactAlt="Instagram Icon"
              contact="@supercoffee"
            />
            <Contact
              contactSrc="/assets/svg/icons/telephone-icon.svg"
              contactAlt="Telephone Icon"
              contact="+1-999-999-99-99"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
