// Core Gym - Dados de Treinos e Exercícios

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: string;
  restTime: number; // segundos
  videoUrl?: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  exercises: Exercise[];
  image: string;
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'push-pull-legs',
    name: 'Push/Pull/Legs',
    description: 'Divisão clássica para hipertrofia e força',
    difficulty: 'Intermediário',
    duration: '6 semanas',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    exercises: [
      {
        id: 'bench-press',
        name: 'Supino Reto',
        muscleGroup: 'Peito',
        sets: 4,
        reps: '8-12',
        restTime: 90,
      },
      {
        id: 'incline-press',
        name: 'Supino Inclinado',
        muscleGroup: 'Peito Superior',
        sets: 3,
        reps: '10-12',
        restTime: 75,
      },
      {
        id: 'shoulder-press',
        name: 'Desenvolvimento com Halteres',
        muscleGroup: 'Ombros',
        sets: 4,
        reps: '8-10',
        restTime: 90,
      },
      {
        id: 'tricep-pushdown',
        name: 'Tríceps Pulley',
        muscleGroup: 'Tríceps',
        sets: 3,
        reps: '12-15',
        restTime: 60,
      },
    ],
  },
  {
    id: 'full-body',
    name: 'Treino de Corpo Inteiro',
    description: 'Ideal para iniciantes - 3x por semana',
    difficulty: 'Iniciante',
    duration: '4 semanas',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
    exercises: [
      {
        id: 'squat',
        name: 'Agachamento Livre',
        muscleGroup: 'Pernas',
        sets: 4,
        reps: '10-12',
        restTime: 120,
      },
      {
        id: 'deadlift',
        name: 'Levantamento Terra',
        muscleGroup: 'Costas/Pernas',
        sets: 3,
        reps: '6-8',
        restTime: 150,
      },
      {
        id: 'bench-press-fb',
        name: 'Supino Reto',
        muscleGroup: 'Peito',
        sets: 3,
        reps: '10-12',
        restTime: 90,
      },
      {
        id: 'pull-up',
        name: 'Barra Fixa',
        muscleGroup: 'Costas',
        sets: 3,
        reps: 'Máximo',
        restTime: 90,
      },
    ],
  },
  {
    id: 'glute-focus',
    name: 'Foco em Glúteos',
    description: 'Treino especializado para desenvolvimento de glúteos',
    difficulty: 'Intermediário',
    duration: '8 semanas',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
    exercises: [
      {
        id: 'hip-thrust',
        name: 'Hip Thrust',
        muscleGroup: 'Glúteos',
        sets: 4,
        reps: '10-12',
        restTime: 90,
      },
      {
        id: 'bulgarian-split',
        name: 'Búlgaro',
        muscleGroup: 'Glúteos/Pernas',
        sets: 3,
        reps: '12-15',
        restTime: 75,
      },
      {
        id: 'cable-kickback',
        name: 'Coice no Cabo',
        muscleGroup: 'Glúteos',
        sets: 3,
        reps: '15-20',
        restTime: 60,
      },
      {
        id: 'sumo-squat',
        name: 'Agachamento Sumo',
        muscleGroup: 'Glúteos/Interno de Coxa',
        sets: 4,
        reps: '12-15',
        restTime: 90,
      },
    ],
  },
  {
    id: 'chest-builder',
    name: 'Peito de Aço',
    description: 'Hipertrofia máxima para peitoral',
    difficulty: 'Avançado',
    duration: '6 semanas',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop',
    exercises: [
      {
        id: 'flat-bench',
        name: 'Supino Reto Barra',
        muscleGroup: 'Peito',
        sets: 5,
        reps: '6-8',
        restTime: 120,
      },
      {
        id: 'incline-db',
        name: 'Supino Inclinado Halteres',
        muscleGroup: 'Peito Superior',
        sets: 4,
        reps: '8-10',
        restTime: 90,
      },
      {
        id: 'cable-fly',
        name: 'Crucifixo no Cabo',
        muscleGroup: 'Peito',
        sets: 3,
        reps: '12-15',
        restTime: 60,
      },
      {
        id: 'dips',
        name: 'Paralelas',
        muscleGroup: 'Peito Inferior',
        sets: 3,
        reps: 'Máximo',
        restTime: 90,
      },
    ],
  },
];

export const todayWorkout: WorkoutPlan = workoutPlans[0]; // Push/Pull/Legs como treino do dia
