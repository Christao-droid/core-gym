'use client';

import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function PremiumButton({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}: PremiumButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          relative px-8 py-4 font-bold text-[#0A0A0A] uppercase tracking-wider
          bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#B8941F]
          rounded-xl overflow-hidden
          transition-all duration-300
          hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          ${className}
        `}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-8 py-4 font-bold text-[#D4AF37] uppercase tracking-wider
        bg-transparent border-2 border-[#D4AF37]
        rounded-xl
        transition-all duration-300
        hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}
