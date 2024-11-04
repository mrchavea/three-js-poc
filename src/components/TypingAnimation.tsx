"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  coloredWord?: string;
}

export default function TypingAnimation({ text, duration = 200, className, coloredWord }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Identificar los índices de inicio y fin de la palabra coloreada, solo si está presente y se encuentra en el texto
  const startIndex = coloredWord && text.includes(coloredWord) ? text.indexOf(coloredWord) : -1;
  const endIndex = startIndex !== -1 ? startIndex + coloredWord!.length : -1;

  useEffect(() => {
    if (currentIndex <= text.length) {
      const typingEffect = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, duration);

      return () => clearTimeout(typingEffect);
    }
  }, [currentIndex, text, duration]);

  return (
    <h1 className={cn("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm", className)}>
      {displayedText.split("").map((char, index) => (
        <span key={index} className={index >= startIndex && index < endIndex ? "text-purple-700 font-bold" : ""}>
          {char}
        </span>
      ))}
    </h1>
  );
}
