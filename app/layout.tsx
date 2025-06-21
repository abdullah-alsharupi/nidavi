import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from './components/cookies'

export const metadata: Metadata = {
  title: 'Digitale Lösungen - Premium Webentwicklung',
  description: 'Professionelle Webentwicklung und digitale Lösungen für Ihr Unternehmen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
      <CookieConsent/>
    </html>
  )
}