export const HeroStats = () => {
  return (
    <div className="flex gap-9">
      <p className="text-sm text-[var(--color-text)]">
        <span className="text-big">
          9k<span className="text-gradient-green">+</span>
          <br />
        </span>
        Premium
        <br />
        Users
      </p>
      <p className="text-sm text-[var(--color-text)]">
        <span className="text-big text-normal">
          2k<span className="text-gradient-green">+</span>
          <br />
        </span>
        Happy
        <br />
        Customers
      </p>
      <p className="text-sm text-[var(--color-text)]">
        <span className="text-big">
          28k<span className="text-gradient-green">+</span>
          <br />
        </span>
        Awards
        <br />
        Winning
      </p>
    </div>
  );
};
