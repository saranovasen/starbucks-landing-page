import Image from 'next/image';

interface PhotoDecorProps {
  decorSrc: string;
  decorAlt: string;
  photoSrc: string;
  photoAlt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const PhotoDecor = ({
  decorSrc,
  decorAlt,
  photoSrc,
  photoAlt,
  width = 465,
  height = 684,
  className = 'h-auto w-41 lg:w-116',
}: PhotoDecorProps) => {
  return (
    <div className="relative">
      <Image
        src={decorSrc}
        alt={decorAlt}
        width={width}
        height={height}
        className={className}
      />
      <Image
        src={photoSrc}
        alt={photoAlt}
        width={width}
        height={height}
        className={`absolute bottom-4 left-4 z-10 drop-shadow-[-8px_8px_10px_rgba(0,0,0,0.50)] lg:bottom-9 lg:left-11 ${className}`}
      />
    </div>
  );
};
