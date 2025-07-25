import Image from 'next/image';

export const PhotoDecor = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/svg/ui-elements/reactangle-photo-decor.svg"
        alt="Photo decor"
        width={465}
        height={684}
        className="h-auto w-41 lg:w-116"
      />
      <Image
        src="/assets/png/photos/branch-interior.png"
        alt="Photo of a branch interior"
        width={465}
        height={684}
        className="absolute bottom-4 left-4 z-10 h-auto w-41 drop-shadow-[-8px_8px_10px_rgba(0,0,0,0.50)] lg:bottom-9 lg:left-11 lg:w-116"
      />
    </div>
  );
};
