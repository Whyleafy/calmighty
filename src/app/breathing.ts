export type BreathingPhase = {
  type: "inhale" | "hold" | "exhale";
  duration: number;
};

export type BreathingExercise = {
  id: string;
  name: string;
  description: string;
  phases: BreathingPhase[];
};

export const breathes: BreathingExercise[] = [
  {
    id: "1",
    name: "5 - 5",
    description:
      "Равномерное дыхание с одинаковой длительностью вдоха и выдоха. Помогает успокоиться, снизить напряжение и восстановить концентрацию.",
    phases: [
      { type: "inhale", duration: 5 },
      { type: "exhale", duration: 5 },
    ],
  },
  {
    id: "2",
    name: "Квадратное дыхание (4–4–4–4)",
    description:
      "Техника, используемая для быстрого снижения стресса и улучшения контроля над эмоциями. Каждый этап дыхания длится одинаковое время, создавая ощущение стабильности и баланса.",
    phases: [
      { type: "inhale", duration: 4 },
      { type: "hold", duration: 4 },
      { type: "exhale", duration: 4 },
      { type: "hold", duration: 4 },
    ],
  },
  {
    id: "3",
    name: "4-7-8",
    description:
      "Расслабляющая техника дыхания для снижения тревожности и подготовки ко сну. Длинный выдох способствует активации парасимпатической нервной системы.",
    phases: [
      { type: "inhale", duration: 4 },
      { type: "hold", duration: 7 },
      { type: "exhale", duration: 8 },
    ],
  },
  {
    id: "4",
    name: "Антистресс (4–6)",
    description:
      "Простая техника с удлиненным выдохом. Помогает быстро снизить уровень стресса, замедлить сердечный ритм и вернуть ощущение спокойствия.",
    phases: [
      { type: "inhale", duration: 4 },
      { type: "exhale", duration: 6 },
    ],
  },
];
