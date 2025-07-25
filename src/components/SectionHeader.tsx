import clsx from 'clsx';

export const SectionHeader = () => {
  return (
    <h1
      className={clsx(
        'lg:text-hero text-5xl font-extrabold',
        'text-[var(--color-text)]'
      )}
    >
      New Cafe <br />
      by <span className="text-gradient-green">Starbucks</span>
    </h1>
  );
};
