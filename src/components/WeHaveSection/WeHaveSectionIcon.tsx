import clsx from 'clsx';
import Image from 'next/image';

interface WeHaveSectionIconProps {
  src: string;
  alt: string;
  width: string;
}

export const WeHaveSectionIcon = ({
  src,
  alt,
  width,
}: WeHaveSectionIconProps) => {
  return (
    <div
      className={clsx(
        'related bg-ui-gradient rounded-full p-8',
        'flex items-center justify-center',
        'h-21.5 w-21.5 xl:h-37 xl:w-37'
      )}
    >
      <Image
        width={200}
        height={200}
        src={src}
        alt={alt}
        className={clsx('absolute h-auto self-center', width)}
      />
    </div>
  );
};
