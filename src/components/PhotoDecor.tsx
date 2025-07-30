import Image from 'next/image';

interface PhotoDecorProps {
  decorSrc: string;
  decorAlt: string;
  photoSrc: string;
  photoAlt: string;
  width?: number;
  height?: number;
  decorClassName?: string;
  photoClassName?: string;
  className?: string;
}

export const PhotoDecor = ({
  decorSrc,
  decorAlt,
  photoSrc,
  photoAlt,
  width = 465,
  height = 684,
  decorClassName,
  photoClassName,
  className,
}: PhotoDecorProps) => {
  return (
    <div className={`${className} relative mt-7`}>
      <Image
        src={decorSrc}
        alt={decorAlt}
        width={width}
        height={height}
        className={`${decorClassName} relative h-auto`}
      />
      <Image
        src={photoSrc}
        alt={photoAlt}
        width={width}
        height={height}
        className={`${photoClassName} absolute z-10 h-auto`}
      />
    </div>
  );
};
