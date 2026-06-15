"use client";

import { useEffect, useState } from "react";
import classes from "./page.module.css";
import { Button } from "@/components/Button";
import { Circle } from "@/components/Circle/Circle";
import { breathes, BreathingExercise } from "./breathing";
import { Reveal } from "@/components/Reveal";
import { DescriptionCard } from "@/components/DescriptionCard/DescriptionCard";

export default function Home() {
  const [activeExercise, setActiveExercise] = useState<BreathingExercise>(
    breathes[0]
  );

  const [phaseIndex, setPhaseIndex] = useState(0);

  const currentPhase = activeExercise.phases[phaseIndex];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setPhaseIndex((prev) => (prev + 1) % activeExercise.phases.length);
    }, currentPhase.duration * 1000);

    return () => clearTimeout(timeoutId);
  }, [activeExercise, phaseIndex, currentPhase.duration]);

  const handleSelectExercise = (exercise: BreathingExercise) => {
    setActiveExercise(exercise);
    setPhaseIndex(0);
  };

  const getPhaseText = (type: string) => {
    switch (type) {
      case "inhale":
        return "Вдох";
      case "hold":
        return "Задержка";
      case "exhale":
        return "Выдох";
      default:
        return "Начать";
    }
  };

  return (
    <main className={classes.page}>
      <div className={classes.container}>
        <h1 className={classes.h1}>Спокойное дыхание</h1>

        <p className={classes.note}>
          Выберите дыхательную практику и следуйте за кругом. Размер круга
          подскажет, когда вдыхать, задерживать дыхание и выдыхать. Всего
          несколько минут помогут снизить напряжение, восстановить концентрацию
          и почувствовать больше спокойствия.
        </p>
      </div>

      <div className={classes.buttons}>
        {breathes.map((exercise) => {
          const isActive = activeExercise.id === exercise.id;

          return (
            <Reveal key={exercise.id}>
              <Button
                isActive={isActive}
                onClick={() => handleSelectExercise(exercise)}
              >
                {exercise.name}
              </Button>
            </Reveal>
          );
        })}
      </div>

      <section className={classes.stage}>
        <Circle
          key={activeExercise.id}
          text={getPhaseText(currentPhase.type)}
          phase={currentPhase.type}
          duration={currentPhase.duration}
        />
      </section>
      <DescriptionCard>{activeExercise.description}</DescriptionCard>
    </main>
  );
}
