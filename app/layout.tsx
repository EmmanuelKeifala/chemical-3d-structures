import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {Analytics} from '@vercel/analytics/react';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Chemical Structures',
  description: 'Three dimentional strutures of chemical compounds',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen  bg-gradient-to-r from-teal-300 to-pink-100 via-purple-400 font-sans antialiased   background-animate',
          inter,
        )}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
