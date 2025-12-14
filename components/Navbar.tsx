'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Teaching', path: '/teaching' }
  ];

  return (
    <nav className="mt-8 px-6">
      {/* Aligned with main content (max-w-3xl).
        Added border-b for a classic "header" separation feel.
      */}
      <div className="max-w-3xl mx-auto flex justify-between items-baseline ">
        
        {/* Name: Serif, Dark Neutral (Matches the body text) */}
        <Link href="/" className="text-xl text-neutral-900 hover:text-neutral-600 transition-colors no-underline">
          Adway Wadekar
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-base">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-all no-underline ${
                  isActive 
                    ? 'text-neutral-900 font-semibold border-neutral-900' // Active: Dark + Underline
                    : 'text-neutral-500 hover:text-blue-800' // Inactive: Grey -> Blue on hover (classic link style)
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}