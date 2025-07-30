import { newEventsData } from '../../data/newEvents';
import { Container } from '../Container';
import { DescText } from '../DescText';
import { SectionHeader } from '../SectionHeader';
import { NewEventCard } from './NewEventCard';

export const NewEventsSection = () => {
  return (
    <section className="mb-16 md:mb-20">
      <Container className="flex flex-col gap-9">
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-end">
          <SectionHeader className="lg:order-2" highlightedText="Events">
            Our New
            <br />
          </SectionHeader>
          <DescText className="align-right lg:py-6">
            Only in 2021 we have made more than 100,000
            <br /> orders for you, your loved ones, all of you, and in
            <br /> 2022 we are ready to destroy the market
          </DescText>
        </div>
        <div className="scrollbar-hide overflow-x-auto lg:overflow-visible">
          <div className="min-w-max lg:min-w-0">
            <div className="grid grid-cols-2 gap-6">
              <NewEventCard
                key={newEventsData[0].id}
                title={newEventsData[0].title}
                backgroundImage={newEventsData[0].backgroundImage}
              />
              <NewEventCard
                key={newEventsData[1].id}
                title={newEventsData[1].title}
                backgroundImage={newEventsData[1].backgroundImage}
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              {newEventsData.slice(2).map((event) => (
                <NewEventCard
                  key={event.id}
                  title={event.title}
                  backgroundImage={event.backgroundImage}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
