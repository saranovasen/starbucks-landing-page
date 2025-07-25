const statsData = [
  { value: '9k', label: 'Premium\nUsers' },
  { value: '2k', label: 'Happy\nCustomers' },
  { value: '28k', label: 'Awards\nWinning' },
];

export const HeroStats = () => {
  return (
    <div className="flex gap-9">
      {statsData.map((stat, index) => (
        <p key={index} className="text-sm text-[var(--color-text)]">
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
