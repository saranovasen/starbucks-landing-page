import clsx from 'clsx';

export const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-[5vw] xl:px-[7vw] 2xl:px-[10vw]',
        className
      )}
    >
      {children}
    </div>
  );
};
