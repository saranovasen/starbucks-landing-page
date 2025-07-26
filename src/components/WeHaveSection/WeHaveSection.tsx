import clsx from 'clsx';

import { WeHaveSectionData } from '../../data/weHaveSection';
import { Container } from '../Container';
import { DescText } from '../DescText';
import { Subheading } from '../Subheading';
import { WeHaveSectionIcon } from './WeHaveSectionIcon';

export const WeHaveSection = () => {
  return (
    <section className="mb-18 md:mb-40">
      <Container>
        <div className="bg-ui-light mx-auto w-[60%] max-w-screen-lg rounded-[1.75rem] px-10.5 py-5 md:w-[80%] xl:px-25 xl:py-10">
          <div
            className={clsx(
              'flex flex-col gap-6 md:flex-row md:justify-between'
            )}
          >
            {WeHaveSectionData.map((item) => (
              <div
                key={item.key}
                className={clsx('flex flex-col items-center text-center')}
              >
                <div className={clsx('mb-4')}>
                  <WeHaveSectionIcon
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                  />
                </div>
                <Subheading variant="secondary">{item.title}</Subheading>
                <DescText variant="secondary">{item.description}</DescText>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
