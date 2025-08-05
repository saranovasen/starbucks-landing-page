import clsx from 'clsx';
import Image from 'next/image';

import { WeHaveSectionData } from '../../data/weHaveSection';
import { Container } from '../Container';
import { DescText } from '../DescText';
import { Subheading } from '../Subheading';
import { WeHaveSectionIcon } from './WeHaveSectionIcon';

export const WeHaveSection = () => {
  return (
    <section className="mb-16 md:mb-27">
      <Container>
        <div className="bg-ui-light relative mx-auto w-[60%] max-w-screen-lg rounded-[1.75rem] px-10.5 py-5 md:w-[100%] lg:w-[80%] xl:px-25 xl:py-10">
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
          <div
            className={clsx(
              'absolute z-20',
              '-top-10 -left-12 -translate-x-3',
              'lg:-top-15 lg:-left-10 lg:-translate-x-8',
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
      </Container>
    </section>
  );
};
