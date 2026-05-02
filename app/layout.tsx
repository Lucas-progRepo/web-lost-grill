import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Lost Grill — Parrilla en Madrid | Brasa, carne y producto',
  description:
    'Lost Grill es una parrilla en Madrid centrada en producto honesto, brasa de encina y cortes seleccionados. Sin atajos.',
  keywords: [
    'parrilla madrid',
    'restaurante brasa madrid',
    'asador madrid',
    'carnes maduradas madrid',
    'lost grill'
  ],
  openGraph: {
    title: 'Lost Grill — Parrilla en Madrid',
    description:
      'Carne, fuego y tiempo. Una parrilla en Madrid construida alrededor del producto honesto y la brasa de encina.',
    type: 'website',
    locale: 'es_ES'
  }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Lost Grill',
  servesCuisine: 'Parrilla',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES'
  },
  description:
    'Parrilla en Madrid centrada en producto honesto, brasa de encina y cortes seleccionados.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
