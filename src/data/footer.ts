export interface FooterLink {
  href: string;
  label: string;
  isPrimary?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: 'Main',
    links: [
      { href: '#', label: 'Main', isPrimary: true },
      { href: '#', label: 'Buy' },
      { href: '#', label: 'More' },
    ],
  },
  {
    title: 'We make',
    links: [
      { href: '#', label: 'We make', isPrimary: true },
      { href: '#', label: 'Process' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '#', label: 'Products', isPrimary: true },
      { href: '#', label: 'Cappucino' },
      { href: '#', label: 'Find' },
    ],
  },
  {
    title: 'Events',
    links: [
      { href: '#', label: 'Events', isPrimary: true },
      { href: '#', label: 'Buy' },
      { href: '#', label: 'More' },
    ],
  },
  {
    title: 'Contacts',
    links: [
      { href: '#', label: 'Contacts', isPrimary: true },
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'Number' },
    ],
  },
];
