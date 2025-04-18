import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adway Wadekar',
  description: 'Personal web page for Adway Wadekar.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
