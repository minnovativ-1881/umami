import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { getBaseUrl } from '@/lib/get-base-url';
import { Providers } from './Providers';
import '@umami/react-zen/styles.full.css';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function ({ children }) {
  if (process.env.DISABLE_UI) {
    return (
      <html>
        <body></body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.className} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#27374F" />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();

  return {
    metadataBase: getBaseUrl(headerStore),
    title: {
      template: '%s | minnovativ Statistik',
      default: 'minnovativ Statistik',
    },
  };
}
