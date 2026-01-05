import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vertical Service Solutions - Aufzüge & Mobilfunk | Industrial & Mobile Tech Experts',
  description: 'Vertical Service Solutions - Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur. Industrial High-Tech Expertise für moderne Unternehmen.',
  keywords: 'Aufzüge, Mobilfunk, Vertical Service Solutions, VSS, Industrie, Technik, Aufzug-Service, Mobilfunk-Infrastruktur',
  authors: [{ name: 'Vertical Service Solutions' }],
  creator: 'Vertical Service Solutions',
  publisher: 'Vertical Service Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vertical-service-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://vertical-service-solutions.com',
    title: 'Vertical Service Solutions - Aufzüge & Mobilfunk | Industrial & Mobile Tech Experts',
    description: 'Vertical Service Solutions - Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur. Industrial High-Tech Expertise für moderne Unternehmen.',
    siteName: 'Vertical Service Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vertical Service Solutions - Aufzüge & Mobilfunk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertical Service Solutions - Aufzüge & Mobilfunk',
    description: 'Vertical Service Solutions - Ihr Partner für professionelle Aufzug-Lösungen und Mobilfunk-Infrastruktur.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}