'use client';

import { PremiumCard } from '@/components/custom/premium-card';
import { PremiumButton } from '@/components/custom/premium-button';
import { Dumbbell, Clock, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

const workoutPrograms = [
  {
    id: 1,
    name: 'PUSH DAY',
    description: 'Peito, ombros e tríceps. Construa força e massa muscular.',
    exercises: 8,
    duration: '60-75 min',
    difficulty: 'Avançado',
    focus: 'Força',
  },
  {
    id: 2,
    name: 'PULL DAY',
    description: 'Costas e bíceps. Desenvolva largura e espessura.',
    exercises: 7,
    duration: '55-70 min',
    difficulty: 'Avançado',
    focus: 'Hipertrofia',
  },
  {
    id: 3,
    name: 'LEG DAY',
    description: 'Quadríceps, posterior e glúteos. Base de poder.',
    exercises: 9,
    duration: '70-85 min',
    difficulty: 'Avançado',
    focus: 'Força',
  },
  {
    id: 4,
    name: 'UPPER BODY',
    description: 'Treino completo de parte superior do corpo.',
    exercises: 10,
    duration: '75-90 min',
    difficulty: 'Intermediário',
    focus: 'Hipertrofia',
  },
  {
    id: 5,
    name: 'CORE POWER',
    description: 'Abdômen e core. Estabilidade e força funcional.',
    exercises: 6,
    duration: '30-40 min',
    difficulty: 'Intermediário',
    focus: 'Resistência',
  },
  {
    id: 6,
    name: 'FULL BODY',
    description: 'Treino completo para todo o corpo.',
    exercises: 12,
    duration: '80-95 min',
    difficulty: 'Iniciante',
    focus: 'Condicionamento',
  },
];

export default function TreinosPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white uppercase tracking-tight">
                Treinos
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
            </div>
            <Link href="/treino?quick=true">
              <PremiumButton className="text-sm py-3 px-6">
                Quick Start
              </PremiumButton>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-3 gap-4">
            <PremiumCard className="p-4 text-center">
              <Dumbbell className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">24</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Treinos</div>
            </PremiumCard>
            <PremiumCard className="p-4 text-center">
              <Target className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">12</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Completos</div>
            </PremiumCard>
            <PremiumCard className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">85%</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Taxa</div>
            </PremiumCard>
          </div>
        </section>

        {/* Workout Programs */}
        <section>
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Programas Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutPrograms.map((program) => (
              <Link key={program.id} href={`/treino?plan=${program.id}`}>
                <PremiumCard className="p-6 h-full group">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#B8941F] flex items-center justify-center" style={{
                          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                        }}>
                          <Dumbbell className="w-6 h-6 text-[#0A0A0A]" />
                        </div>
                        <span className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-bold uppercase">
                          {program.focus}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white uppercase mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-[#8A8A8A] text-sm">
                        {program.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                        <Dumbbell className="w-4 h-4 text-[#D4AF37]" />
                        <span>{program.exercises} exercícios</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                        <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                        <span>{program.difficulty}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-4 pt-4 border-t border-[#1F1F1F]">
                      <PremiumButton className="w-full text-sm py-3">
                        Iniciar
                      </PremiumButton>
                    </div>
                  </div>
                </PremiumCard>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
