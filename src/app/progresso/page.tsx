'use client';

import { PremiumCard } from '@/components/custom/premium-card';
import { PremiumButton } from '@/components/custom/premium-button';
import { TrendingUp, Target, Flame, Award, Calendar, Dumbbell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const progressData = [
  { week: 'Sem 1', volume: 12000 },
  { week: 'Sem 2', volume: 14500 },
  { week: 'Sem 3', volume: 16200 },
  { week: 'Sem 4', volume: 18000 },
  { week: 'Sem 5', volume: 19500 },
  { week: 'Sem 6', volume: 21000 },
];

const muscleGroups = [
  { name: 'Peito', percentage: 85, sessions: 12 },
  { name: 'Costas', percentage: 90, sessions: 14 },
  { name: 'Pernas', percentage: 75, sessions: 10 },
  { name: 'Ombros', percentage: 80, sessions: 11 },
  { name: 'Braços', percentage: 88, sessions: 13 },
  { name: 'Core', percentage: 70, sessions: 9 },
];

export default function ProgressoPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">
            Progresso
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PremiumCard className="p-6 text-center">
              <Calendar className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">42</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Dias Ativos</div>
            </PremiumCard>
            <PremiumCard className="p-6 text-center">
              <Dumbbell className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">156</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Treinos</div>
            </PremiumCard>
            <PremiumCard className="p-6 text-center">
              <Flame className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">24.5K</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Calorias</div>
            </PremiumCard>
            <PremiumCard className="p-6 text-center">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-xs text-[#8A8A8A] uppercase tracking-wider">Conquistas</div>
            </PremiumCard>
          </div>
        </section>

        {/* Volume Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Volume de Treino
          </h2>
          <PremiumCard className="p-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" />
                  <XAxis 
                    dataKey="week" 
                    stroke="#8A8A8A"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#8A8A8A"
                    style={{ fontSize: '12px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="#D4AF37" 
                    strokeWidth={3}
                    dot={{ fill: '#D4AF37', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#8A8A8A] text-sm">
                Volume total levantado nas últimas 6 semanas
              </p>
            </div>
          </PremiumCard>
        </section>

        {/* Muscle Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Grupos Musculares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {muscleGroups.map((group) => (
              <PremiumCard key={group.name} className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white uppercase">
                    {group.name}
                  </h3>
                  <span className="text-[#D4AF37] font-bold">
                    {group.percentage}%
                  </span>
                </div>
                <div className="mb-3">
                  <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8941F] transition-all duration-500"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-[#8A8A8A]">
                  {group.sessions} sessões de treino
                </p>
              </PremiumCard>
            ))}
          </div>
        </section>

        {/* Personal Records */}
        <section>
          <h2 className="text-2xl font-bold text-white uppercase mb-6">
            Recordes Pessoais
          </h2>
          <PremiumCard className="p-6">
            <div className="space-y-4">
              {[
                { exercise: 'Supino Reto', weight: '120kg', reps: '5 reps', date: '15/01/2024' },
                { exercise: 'Agachamento', weight: '180kg', reps: '8 reps', date: '12/01/2024' },
                { exercise: 'Levantamento Terra', weight: '200kg', reps: '3 reps', date: '10/01/2024' },
                { exercise: 'Desenvolvimento', weight: '80kg', reps: '6 reps', date: '08/01/2024' },
              ].map((record, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl"
                >
                  <div>
                    <h4 className="text-white font-bold mb-1">{record.exercise}</h4>
                    <p className="text-sm text-[#8A8A8A]">{record.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#D4AF37] font-bold text-xl">{record.weight}</div>
                    <div className="text-sm text-[#8A8A8A]">{record.reps}</div>
                  </div>
                </div>
              ))}
            </div>
          </PremiumCard>
        </section>
      </main>
    </div>
  );
}
