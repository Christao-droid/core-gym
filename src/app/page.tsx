'use client';

import { PremiumCard } from '@/components/custom/premium-card';
import { PremiumButton } from '@/components/custom/premium-button';
import { Zap, Target, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              #D4AF37 2px,
              #D4AF37 3px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              #D4AF37 2px,
              #D4AF37 3px
            )`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Hexagon Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-20" style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-20" style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="inline-block w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F]" style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight uppercase">
            CORE GYM
          </h1>
          <p className="text-[#D4AF37] text-xl md:text-2xl font-bold uppercase tracking-widest mb-8">
            Elite Fitness Performance
          </p>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto mb-12">
            Força. Disciplina. Resultados. Transforme seu corpo com o aplicativo de treino mais exclusivo do mercado.
          </p>
          <Link href="/treinos">
            <PremiumButton>
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Iniciar Treino
              </span>
            </PremiumButton>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Target, value: '3000+', label: 'EXERCÍCIOS' },
            { icon: TrendingUp, value: 'AI', label: 'PERSONALIZADO' },
            { icon: Award, value: '24/7', label: 'SUPORTE' },
            { icon: Zap, value: 'PRO', label: 'RESULTADOS' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <PremiumCard key={index}>
                <div className="p-6 text-center">
                  <Icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-[#8A8A8A] font-bold tracking-wider">{stat.label}</div>
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </section>

      {/* Featured Workout */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-2">
            Treino de Hoje
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>

        <Link href="/treinos">
          <PremiumCard className="p-8 group">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-4">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    Recomendado
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 uppercase">
                  Push Day - Força
                </h3>
                <p className="text-[#8A8A8A] mb-4">
                  Treino focado em peito, ombros e tríceps. Construa força e massa muscular com exercícios compostos.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1.5 bg-[#1F1F1F] border border-[#2A2A2A] rounded-lg text-[#B0B0B0]">
                    8 exercícios
                  </span>
                  <span className="px-3 py-1.5 bg-[#1F1F1F] border border-[#2A2A2A] rounded-lg text-[#B0B0B0]">
                    Avançado
                  </span>
                  <span className="px-3 py-1.5 bg-[#1F1F1F] border border-[#2A2A2A] rounded-lg text-[#B0B0B0]">
                    60-75 min
                  </span>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <PremiumButton className="w-full md:w-auto">
                  Começar
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </Link>
      </section>

      {/* CTA Premium */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <PremiumCard className="p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8941F]" style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }} />
            <h2 className="text-4xl font-bold text-white mb-4 uppercase">
              Desbloqueie o Elite
            </h2>
            <p className="text-[#8A8A8A] text-lg mb-8 max-w-2xl mx-auto">
              Acesse planos de treino exclusivos, análises avançadas e suporte personalizado 24/7.
            </p>
            <Link href="/premium">
              <PremiumButton>
                Ver Planos Premium
              </PremiumButton>
            </Link>
          </div>
        </PremiumCard>
      </section>
    </div>
  );
}
