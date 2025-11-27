import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
