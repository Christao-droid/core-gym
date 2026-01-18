'use client';

import { WorkoutPlan } from '@/lib/workout-data';
import { Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface WorkoutCardProps {
  plan: WorkoutPlan;
}

export function WorkoutCard({ plan }: WorkoutCardProps) {
  return (
    <Link href={`/treino?plan=${plan.id}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#00BFFF] transition-all duration-300 cursor-pointer">
        {/* Imagem de fundo */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={plan.image}
            alt={plan.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
          
          {/* Badge de dificuldade */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              plan.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              plan.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {plan.difficulty}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors">
            {plan.name}
          </h3>
          <p className="text-[#B0B0B0] text-sm mb-4 line-clamp-2">
            {plan.description}
          </p>

          {/* Metadados */}
          <div className="flex items-center gap-4 text-xs text-[#B0B0B0]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00BFFF]" />
              <span>{plan.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#00BFFF]" />
              <span>{plan.exercises.length} exercícios</span>
            </div>
          </div>
        </div>

        {/* Efeito hover */}
        <div className="absolute inset-0 border-2 border-[#00BFFF] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
      </div>
    </Link>
  );
}
