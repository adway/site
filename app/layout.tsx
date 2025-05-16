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
    <html lang="en">
      <head><script dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}/></head>
      <body>{children}</body>
    </html>
  )
}
