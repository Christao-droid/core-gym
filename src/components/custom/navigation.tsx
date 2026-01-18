'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Dumbbell, TrendingUp, User, Crown } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'HOME', href: '/' },
  { icon: Dumbbell, label: 'TREINOS', href: '/treinos' },
  { icon: TrendingUp, label: 'PROGRESSO', href: '/progresso' },
  { icon: User, label: 'PERFIL', href: '/perfil' },
  { icon: Crown, label: 'PREMIUM', href: '/premium' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <button
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-[#8A8A8A] hover:text-[#D4AF37]'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive ? 'drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' : ''
                    }`}
                  />
                  <span className="text-[10px] font-bold tracking-wider">
                    {item.label}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
