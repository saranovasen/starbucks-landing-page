import clsx from 'clsx';

export const HeadingSecondary = () => {
  return (
    <h2
      className={clsx(
        'lg:text-hero text-5xl font-extrabold',
        'text-[var(--color-text)]'
      )}
    >
      We make <br />
      <span className="text-gradient-green">delicious</span>
    </h2>
  );
};
