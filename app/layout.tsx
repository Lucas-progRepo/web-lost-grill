import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Lost Grill — Parrilla en Madrid | Brasa, carne y producto',
  description: 'Lost Grill es una parrilla en Madrid centrada en producto honesto, brasa de encina y cortes seleccionados. Sin atajos.',
  keywords: ['parrilla madrid', 'restaurante brasa madrid', 'asador madrid', 'carnes maduradas madrid', 'lost grill'],
  openGraph: {
    title: 'Lost Grill — Parrilla en Madrid',
    description: 'Carne, fuego y tiempo. Parrilla en Madrid construida alrededor de producto honesto cocinado sobre brasa de verdad.',
    type: 'website',
    locale: 'es_ES'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Lost Grill',
  description: 'Parrilla en Madrid centrada en producto honesto, brasa de encina y cortes seleccionados.',
  servesCuisine: ['Parrilla', 'Asador', 'Carnes maduradas'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-body bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
