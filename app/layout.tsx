import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const suisseIntl = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntl-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseIntl-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-suisse-intl',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jake Nelken',
  description: 'Frontend Imagineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
