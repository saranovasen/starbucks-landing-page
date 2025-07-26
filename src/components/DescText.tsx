type DescTextProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  align?: 'left' | 'center' | 'right';
};

export const DescText = ({
  children,
  variant = 'primary',
  align = 'left',
}: DescTextProps) => {
  const textColor =
    variant === 'primary'
      ? 'text-[var(--color-text)]'
      : 'text-[var(--text-dark)]';

  const alignClass = `text-${align}`;

  return (
    <p
      className={`text-xs whitespace-pre-line md:text-lg ${textColor} ${alignClass}`}
    >
      {children}
    </p>
  );
};
