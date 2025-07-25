import type { Metadata } from 'next';

import clsx from 'clsx';
import { Montserrat } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
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
    <html lang="en" className={clsx(montserrat.variable, 'h-full')}>
      <body className="flex min-h-screen flex-col">
        <div id="top"></div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
