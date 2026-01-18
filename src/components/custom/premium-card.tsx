'use client';

import { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  variant?: 'default' | 'hexagon';
  className?: string;
  onClick?: () => void;
}

export function PremiumCard({
  children,
  variant = 'default',
  className = '',
  onClick,
}: PremiumCardProps) {
  const baseClasses = `
    bg-[#141414] border-2 border-[#1F1F1F]
    transition-all duration-300
    hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
  `;

  if (variant === 'hexagon') {
    return (
      <div
        onClick={onClick}
        className={`
          ${baseClasses}
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `}
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`
        ${baseClasses}
        rounded-2xl
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
