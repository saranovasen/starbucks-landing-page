import Image from 'next/image';

interface ContactProps {
  contactSrc: string;
  contactAlt: string;
  contact: string;
}

export const Contact = ({ contactSrc, contactAlt, contact }: ContactProps) => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Image src={contactSrc} alt={contactAlt} width={57} height={57} />
      <p className="text-xl font-medium text-[var(--color-text)] md:text-3xl">
        {contact}
      </p>
    </div>
  );
};
