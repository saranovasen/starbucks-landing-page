import { PrimaryButton } from '../PrimaryButton';
import { Subheading } from '../Subheading';

interface NewEventCardProps {
  title: string;
  backgroundImage: string;
}

export const NewEventCard = ({ title, backgroundImage }: NewEventCardProps) => {
  return (
    <div className="relative flex h-37 flex-col justify-between overflow-hidden rounded-xl px-4 pt-6 pb-4 md:h-65 md:px-7 md:pt-11 md:pb-7">
      <div
        className="absolute inset-0 -z-10 scale-105 bg-cover bg-[center_40%] bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Subheading>
        {title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </Subheading>
      <div className="w-24 md:w-42">
        <PrimaryButton text="More" />
      </div>
    </div>
  );
};
