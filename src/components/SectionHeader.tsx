import clsx from 'clsx';

interface SectionHeaderProps {
  children: React.ReactNode;
  highlightedText?: string;
  highlightClassName?: string;
  className?: string;
}

export const SectionHeader = ({
  children,
  highlightedText,
  highlightClassName = 'text-gradient-green',
  className = '',
}: SectionHeaderProps) => {
  return (
    <h1
      className={clsx(
        'lg:text-hero text-5xl font-extrabold',
        'text-[var(--color-text)]',
        className
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
