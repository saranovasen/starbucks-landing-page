export const HeroActions = () => {
  return (
    <div className="flex justify-between gap-3 md:w-100">
      <button className="bg-ui-gradient flex-2 rounded-4xl py-3 text-center text-base font-medium text-[var(--color-main-text)]">
        Select a coffee
      </button>
      <button className="border-gradient-dark flex-1 rounded-4xl py-3 text-base text-[var(--color-main-text)]">
        More
      </button>
    </div>
  );
};
