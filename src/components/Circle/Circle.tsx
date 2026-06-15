"use client";

import clsx from "clsx";
import classes from "./Circle.module.css";

interface CircleProps {
  text: string;
  phase: "inhale" | "hold" | "exhale";
  duration: number;
}

export const Circle = ({ text, phase, duration }: CircleProps) => {
  const dynamicStyles = {
    "--duration": `${duration}s`,
  } as React.CSSProperties;

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
      />

      <h2
        className={clsx(classes.h2, {
          [classes.textInhale]: phase === "inhale",
          [classes.textHold]: phase === "hold",
          [classes.textExhale]: phase === "exhale",
        })}
      >
        {text}
      </h2>
    </div>
  );
};
