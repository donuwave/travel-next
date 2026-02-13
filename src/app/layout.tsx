import type { Metadata } from 'next';
import { Fira_Sans, Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Providers } from './(providers)';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Мечта-тур',
  description: 'Мечта-тур',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-toolpad-color-scheme="light" lang="en">
      <body className={`${firaSans.className} ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
