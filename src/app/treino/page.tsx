'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { workoutPlans, Exercise } from '@/lib/workout-data';
import { ArrowLeft, Play, Pause, CheckCircle2, Circle, Timer, Dumbbell } from 'lucide-react';
import Link from 'next/link';

function WorkoutPlayer() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan');
  const isQuickStart = searchParams.get('quick') === 'true';

  const [currentPlan, setCurrentPlan] = useState(
    planId ? workoutPlans.find(p => p.id === planId) : workoutPlans[0]
  );
  const [completedSets, setCompletedSets] = useState<Record<string, number>>({});
  const [weights, setWeights] = useState<Record<string, string>>({});
  const [reps, setReps] = useState<Record<string, string>>({});
  const [restTimer, setRestTimer] = useState<number | null>(null);
  const [isResting, setIsResting] = useState(false);

  // Timer de descanso
  useEffect(() => {
    if (restTimer === null || restTimer <= 0) {
      setIsResting(false);
      return;
    }

    const interval = setInterval(() => {
      setRestTimer(prev => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(interval);
  }, [restTimer]);

  const handleSetComplete = (exerciseId: string, restTime: number) => {
    const currentSets = completedSets[exerciseId] || 0;
    setCompletedSets(prev => ({
      ...prev,
      [exerciseId]: currentSets + 1,
    }));

    // Iniciar timer de descanso
    setRestTimer(restTime);
    setIsResting(true);
  };

  const handleSetUndo = (exerciseId: string) => {
    const currentSets = completedSets[exerciseId] || 0;
    if (currentSets > 0) {
      setCompletedSets(prev => ({
        ...prev,
        [exerciseId]: currentSets - 1,
      }));
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentPlan) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plano não encontrado</h2>
          <Link href="/">
            <button className="px-6 py-3 bg-[#00BFFF] text-white rounded-lg">
              Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header Fixo */}
      <header className="sticky top-0 z-50 bg-[#121212]/98 backdrop-blur-sm border-b border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="flex items-center gap-2 text-[#B0B0B0] hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Voltar</span>
              </button>
            </Link>
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold text-white">{currentPlan.name}</h1>
              <p className="text-xs text-[#B0B0B0]">{currentPlan.exercises.length} exercícios</p>
            </div>
            <div className="w-20" /> {/* Spacer para centralizar */}
          </div>
        </div>
      </header>

      {/* Timer de Descanso Flutuante */}
      {isResting && restTimer !== null && restTimer > 0 && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-[#00BFFF] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <Timer className="w-5 h-5 animate-spin" />
            <span className="font-bold text-lg">{formatTime(restTimer)}</span>
            <button
              onClick={() => {
                setRestTimer(null);
                setIsResting(false);
              }}
              className="ml-2 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded"
            >
              Pular
            </button>
          </div>
        </div>
      )}

      {/* Lista de Exercícios */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        <div className="space-y-4">
          {currentPlan.exercises.map((exercise, index) => {
            const completed = completedSets[exercise.id] || 0;
            const isFullyCompleted = completed >= exercise.sets;

            return (
              <div
                key={exercise.id}
                className={`bg-[#1E1E1E] border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isFullyCompleted
                    ? 'border-green-500/50 bg-green-500/5'
                    : 'border-[#2A2A2A] hover:border-[#00BFFF]/50'
                }`}
              >
                {/* Header do Exercício */}
                <div className="p-5 border-b border-[#2A2A2A]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 bg-[#00BFFF]/20 border border-[#00BFFF]/40 rounded-lg flex items-center justify-center text-[#00BFFF] font-bold text-sm">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-white">{exercise.name}</h3>
                      </div>
                      <p className="text-sm text-[#B0B0B0] ml-11">{exercise.muscleGroup}</p>
                    </div>
                    {isFullyCompleted && (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </div>

                {/* Corpo do Exercício */}
                <div className="p-5">
                  {/* Info de Séries */}
                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-[#00BFFF]" />
                      <span className="text-[#B0B0B0]">
                        {exercise.sets} séries × {exercise.reps} reps
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-[#00BFFF]" />
                      <span className="text-[#B0B0B0]">{exercise.restTime}s descanso</span>
                    </div>
                  </div>

                  {/* Inputs de Peso e Reps */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-xs text-[#B0B0B0] mb-1.5">Peso (kg)</label>
                      <input
                        type="number"
                        placeholder="0"
                        value={weights[exercise.id] || ''}
                        onChange={(e) =>
                          setWeights(prev => ({ ...prev, [exercise.id]: e.target.value }))
                        }
                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white focus:border-[#00BFFF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#B0B0B0] mb-1.5">Repetições</label>
                      <input
                        type="number"
                        placeholder={exercise.reps}
                        value={reps[exercise.id] || ''}
                        onChange={(e) =>
                          setReps(prev => ({ ...prev, [exercise.id]: e.target.value }))
                        }
                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white focus:border-[#00BFFF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Checkboxes de Séries */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.from({ length: exercise.sets }).map((_, setIndex) => {
                      const isCompleted = setIndex < completed;
                      return (
                        <button
                          key={setIndex}
                          onClick={() => {
                            if (isCompleted) {
                              handleSetUndo(exercise.id);
                            } else if (setIndex === completed) {
                              handleSetComplete(exercise.id, exercise.restTime);
                            }
                          }}
                          disabled={setIndex > completed}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                            isCompleted
                              ? 'bg-green-500 text-white'
                              : setIndex === completed
                              ? 'bg-[#00BFFF] text-white hover:bg-[#00A5E6]'
                              : 'bg-[#121212] text-[#B0B0B0] border border-[#2A2A2A] cursor-not-allowed'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <Circle className="w-4 h-4" />
                          )}
                          Série {setIndex + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Progresso */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#121212] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00BFFF] to-[#00A5E6] transition-all duration-500"
                        style={{ width: `${(completed / exercise.sets) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white min-w-[60px] text-right">
                      {completed}/{exercise.sets}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão de Finalizar */}
        <div className="mt-8">
          <Link href="/">
            <button className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20">
              Finalizar Treino
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function TreinoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white">Carregando treino...</div>
      </div>
    }>
      <WorkoutPlayer />
    </Suspense>
  );
}
