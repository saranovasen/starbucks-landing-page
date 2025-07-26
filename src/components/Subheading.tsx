interface SubheadingProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Subheading = ({
  children,
  variant = 'primary',
}: SubheadingProps) => {
  const textColor =
    variant === 'primary' ? 'text-[var(--color-text)]' : 'text-black';

  return (
    <h3
      className={`text-lg leading-[170%] font-medium md:text-3xl ${textColor}`}
    >
      {children}
    </h3>
  );
};
