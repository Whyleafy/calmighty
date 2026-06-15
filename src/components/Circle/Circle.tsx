"use client";

import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import classes from "./Circle.module.css";

interface CircleProps {
  text: string;
  phase: "inhale" | "hold" | "exhale";
  duration: number;
}

export const Circle = ({ text, phase, duration }: CircleProps) => {
  const prevPhaseRef = useRef<"inhale" | "hold" | "exhale">(phase);
  const [holdScaleRings, setHoldScaleRings] = useState<number>(0.7);
  const [holdOpacityRings, setHoldOpacityRings] = useState<number>(0.3);
  const [holdScaleText, setHoldScaleText] = useState<number>(0.7);

  useEffect(() => {
    if (phase === "hold") {
      const prev = prevPhaseRef.current;
      if (prev === "inhale") {
        setHoldScaleRings(1.05);
        setHoldOpacityRings(1);
        setHoldScaleText(1.1);
      } else if (prev === "exhale") {
        setHoldScaleRings(0.7);
        setHoldOpacityRings(0.3);
        setHoldScaleText(0.7);
      }
    }
    prevPhaseRef.current = phase;
  }, [phase]);

  const dynamicStyles = {
    "--duration": `${duration}s`,
  } as React.CSSProperties;

  const ringsHoldStyle: React.CSSProperties = {
    transform: `scale(${holdScaleRings})`,
    opacity: holdOpacityRings,
  };

  const textHoldStyle: React.CSSProperties = {
    transform: `scale(${holdScaleText})`,
  };

  return (
    <div className={classes.circle} style={dynamicStyles}>
      <img
        src="/rings.svg"
        alt=""
        className={clsx(classes.rings, {
          [classes.ringsInhale]: phase === "inhale",
          [classes.ringsHold]: phase === "hold",
          [classes.ringsExhale]: phase === "exhale",
        })}
        style={phase === "hold" ? ringsHoldStyle : undefined}
      />

      <h2
        className={clsx(classes.h2, {
          [classes.textInhale]: phase === "inhale",
          [classes.textHold]: phase === "hold",
          [classes.textExhale]: phase === "exhale",
        })}
        style={phase === "hold" ? textHoldStyle : undefined}
      >
        {text}
      </h2>
    </div>
  );
};
