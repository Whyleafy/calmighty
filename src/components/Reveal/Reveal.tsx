"use client";

import { useEffect, useRef } from "react";
import classes from "./Reveal.module.css";

export function Reveal({
  children,
  delay = 0,
  appereanceFrom = "top",
}: {
  children: React.ReactNode;
  className?: string;
  appereanceFrom?: "left" | "top" | "right" | "bottom";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(classes[appereanceFrom]);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              el.classList.add(classes.in);
            }, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.75 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, appereanceFrom]);

  return (
    <div ref={ref} className={classes.reveal}>
      {children}
    </div>
  );
}
