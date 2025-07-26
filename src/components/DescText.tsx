type DescTextProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export const DescText = ({ children, variant = 'primary' }: DescTextProps) => {
  const textColor =
    variant === 'primary'
      ? 'text-[var(--color-text)]'
      : 'text-[var(--text-dark)]';

  return (
    <p className={`text-xs whitespace-pre-line md:text-lg ${textColor}`}>
      {children}
    </p>
  );
};
