import clsx from 'clsx';
import Image from 'next/image';

import { DescText } from '../DescText';
import { PrimaryButton } from '../PrimaryButton';
import { Subheading } from '../Subheading';

interface SwiperCardProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  price: string;
  size: string;
}

export const SwiperCard = ({
  img,
  title,
  description,
  price,
  size,
}: SwiperCardProps) => {
  return (
    <div
      className={clsx(
        'border-gradient-dark-corner-fade inline-block w-46 flex-shrink-0 cursor-pointer rounded-3xl lg:w-60'
      )}
    >
      <div className="flex flex-col items-center gap-5 p-8 pt-13">
        <div
          className={clsx(
            'bg-ui-gradient relative rounded-full p-8',
            'flex items-center justify-center',
            'h-21.5 w-21.5 xl:h-37 xl:w-37'
          )}
        >
          <Image
            width={180}
            height={240}
            src={img.src}
            alt={img.alt}
            className={clsx(
              'absolute h-auto -translate-y-1 object-cover transition-transform duration-300 hover:scale-105',
              'w-30 lg:w-45'
            )}
          />
        </div>
        <Subheading>{title}</Subheading>
        <DescText align="center">{description}</DescText>
        <div className="flex w-full items-baseline justify-between">
          <p className="text-lg font-medium text-[var(--color-text)] lg:text-3xl">
            {price}
          </p>
          <DescText>{size}</DescText>
        </div>
        <PrimaryButton text="Buy Product" />
      </div>
    </div>
  );
};
