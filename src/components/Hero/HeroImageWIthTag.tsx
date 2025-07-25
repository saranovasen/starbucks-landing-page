import clsx from 'clsx';
import Image from 'next/image';

export const HeroImageWithTag = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('relative mx-auto mb-8', className)}>
      <div className=""></div>
      <Image
        width={256}
        height={344}
        className="relative z-10 h-auto w-64 lg:w-90 xl:w-100"
        src="/assets/png/ui-elements/coffee-cup.png"
        alt="Cup of Coffee"
      />
      {/* <div className="absolute -top-2 -right-2 z-20 lg:-top-10">
        <Image
          src="assets/svg/ui-elements/tag.svg"
          alt="Tag"
          className="lg:w-50"
        />
        <span className="text-light absolute inset-0 flex translate-x-2 -translate-y-2 rotate-340 items-center justify-center text-2xl font-bold text-[var(--color-main-text)] lg:text-5xl">
          45%
        </span>
      </div> */}
    </div>
  );
};
