import clsx from 'clsx';

interface SectionHeaderProps {
  children: React.ReactNode;
  highlightedText?: string;
  highlightClassName?: string;
}

export const SectionHeader = ({
  children,
  highlightedText,
  highlightClassName = 'text-gradient-green',
}: SectionHeaderProps) => {
  return (
    <h1
      className={clsx(
        'lg:text-hero text-5xl font-extrabold',
        'text-[var(--color-text)]'
      )}
    >
      {children}
      {highlightedText && (
        <>
          {' '}
          <span className={highlightClassName}>{highlightedText}</span>
        </>
      )}
    </h1>
  );
};
