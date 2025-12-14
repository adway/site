import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Adway Wadekar',
  description: 'Academic Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* - font-sans: Forces the font to be Sans-Serif (Helvetica/Arial/Inter)
        - text-zinc-900: A sharp, nearly-black color (sharper than Slate)
        - antialiased: Makes the text look thinner and crisper
      */}
      <body className="font-sans antialiased text-zinc-900">
        <Navbar />
        <main className="mx-auto px-6">
          {children}
        </main>
      </body>
    </html>
  );
}