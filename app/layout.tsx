import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NIDAVI - Create. Impress. Stay.',
  description: 'NIDAVI Design und Entwicklung - Wir schaffen, beeindrucken und bleiben bei Ihnen',
  keywords: 'Webdesign, Entwicklung, Programmierung, NIDAVI, Web Design, Branding',
  authors: [{ name: 'NIDAVI Team' }],
  creator: 'NIDAVI',
  publisher: 'NIDAVI',
  
  // Open Graph für soziale Netzwerke
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nidavi.de',
    title: 'NIDAVI - Create. Impress. Stay.',
    description: 'NIDAVI Design und Entwicklung - Wir schaffen, beeindrucken und bleiben bei Ihnen',
    siteName: 'NIDAVI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NIDAVI - Create. Impress. Stay.',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'NIDAVI - Create. Impress. Stay.',
    description: 'NIDAVI Design und Entwicklung - Wir schaffen, beeindrucken und bleiben bei Ihnen',
    images: ['/og-image.png'],
    creator: '@nidavi',
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  // Zusätzliche Informationen
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Website-Verifizierung
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Zusätzliche Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Schema.org für lokale Suche */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NIDAVI",
              "url": "https://nidavi.de",
              "logo": "https://nidavi.de/logo.png",
              "description": "NIDAVI Design und Entwicklung - Wir schaffen, beeindrucken und bleiben bei Ihnen",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Straße in Miesbach",
                "addressLocality": "Miesbach",
                "postalCode": "83714",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Kundenservice",
                "url": "https://nidavi.de"
              },
              "sameAs": [
                "https://twitter.com/nidavi",
                "https://facebook.com/nidavi",
                "https://instagram.com/nidavi",
                "https://youtube.com/nidavi"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}