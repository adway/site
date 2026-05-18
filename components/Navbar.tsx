'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  showNotes: boolean;
};

export default function Navbar({ showNotes }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Teaching', path: '/teaching' },
    ...(showNotes ? [{ name: 'Notes', path: '/notes' }] : []),
  ];

  return (
    <nav className="mt-6 px-6">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between border-b border-[color:var(--line)] pb-3">
        <Link href="/" className="text-[1.08rem] font-medium text-[color:var(--ink)] transition-colors no-underline hover:text-[color:var(--um-blue)]">
          Adway Wadekar
        </Link>

        <div className="flex gap-4 text-[0.96rem]">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`no-underline transition-colors ${
                  isActive 
                    ? 'font-medium text-[color:var(--ink)]'
                    : 'text-[color:var(--muted)] hover:text-[color:var(--um-blue)]'
                }`}
              >
                {item.name.toLowerCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
