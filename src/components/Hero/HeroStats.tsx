const statsData = [
  { key: '1', value: '9k', label: 'Premium\nUsers' },
  { key: '2', value: '2k', label: 'Happy\nCustomers' },
  { key: '3', value: '28k', label: 'Awards\nWinning' },
];

export const HeroStats = () => {
  return (
    <div className="flex gap-9">
      {statsData.map((stat, key) => (
        <p key={key} className="text-sm text-[var(--color-text)] md:text-xl">
          <span className="text-big">
            {stat.value}
            <span className="text-gradient-green">+</span>
            <br />
          </span>
          {stat.label.split('\n').map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < stat.label.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};
