import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import Navbar from '../components/Navbar';
import { hasPublishedPosts } from '@/lib/notes';

export const metadata: Metadata = {
  title: 'Adway Wadekar',
  description: 'Personal website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showNotes = hasPublishedPosts();

  return (
    <html lang="en">
      <body className="font-sans text-[color:var(--ink)]">
        <Navbar showNotes={showNotes} />
        <main className="mx-auto px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
