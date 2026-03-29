"use client";

import { useEffect } from "react";

const SEQUENCE = [
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 1000 },
  { glowing: [true,true,true,true,true,true,true,false,false,false,false], duration: 80 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,true,true,false,true,true,false,false,false,true,true], duration: 80 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 200 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,false,false,false,false,false,true,true,true,true,true], duration: 80 },
  { glowing: [true,true,true,true,true,true,false,false,false,true,true], duration: 80 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,true,true,true,true,true,true,true,true,true,true], duration: 30 },
];

interface FlickerProps {
  onGlowChange?: (isGlowing: boolean) => void;
}

export default function Flicker({ onGlowChange }: FlickerProps) {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runSequence = (index: number) => {
      const glowingArray = SEQUENCE[index].glowing;

   
      const glowingCount = glowingArray.filter(Boolean).length;
      const isGlowing = glowingCount > glowingArray.length * 0.7;

      onGlowChange?.(isGlowing);

      timeout = setTimeout(() => {
        const next = (index + 1) % SEQUENCE.length;
        runSequence(next);
      }, SEQUENCE[index].duration);
    };

    runSequence(0);

    return () => clearTimeout(timeout);
  }, [onGlowChange]);

  return null; 
}
