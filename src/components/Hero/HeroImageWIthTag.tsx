import clsx from 'clsx';
import Image from 'next/image';

export const HeroImageWithTag = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('relative mx-auto mb-8', className)}>
      <div className=""></div>
      <Image
        width={256}
        height={344}
        className={clsx('relative z-10 h-auto', 'w-64 lg:w-90 xl:w-100')}
        src="/assets/png/ui-elements/coffee-cup.png"
        alt="Cup of Coffee"
      />
      {/* <Image
        width={910}
        height={676}
        src="/assets/svg/ui-elements/wave-lines-hero.svg"
        alt="Wave lines decoration"
        className={clsx(
          'absolute z-[-5]',
          'translate-x-5 -translate-y-50',
          'scale-160 md:scale-200'
        )}
      /> */}
      <div
        className={clsx(
          'absolute z-20',
          '-top-2 -right-0 -translate-x-3',
          'lg:-top-10 lg:-translate-x-8',
          'drop-shadow-[-8px_8px_10px_rgba(0,0,0,0.50)]'
        )}
      >
        <Image
          width={187}
          height={187}
          src="assets/svg/ui-elements/tag.svg"
          alt="Tag"
          className={clsx('w-25 lg:w-37')}
        />
        <span
          className={clsx(
            'absolute inset-0 flex items-center justify-center',
            'rotate-340',
            'text-2xl lg:text-5xl',
            'font-medium text-[var(--color-main-text)]'
          )}
        >
          45%
        </span>
      </div>
    </div>
  );
};
