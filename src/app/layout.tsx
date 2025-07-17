import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Starbucks New Cafe',
  description:
    "Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <div id="top"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
