export const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full mx-auto px-[5vw] xl:px-[10vw] 2xl:px-[15vw] ${className}`}
    >
      {children}
    </div>
  );
};
