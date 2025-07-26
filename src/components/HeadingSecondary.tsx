import clsx from 'clsx';

interface HeadingSecondaryProps {
  children: React.ReactNode;
  highlightedText?: string;
  highlightClassName?: string;
}

export const HeadingSecondary = ({
  children,
  highlightedText,
  highlightClassName = 'text-gradient-green',
}: HeadingSecondaryProps) => {
  return (
    <h2
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
    </h2>
  );
};
