'use client';

import { useState, useEffect } from 'react';

interface SequentialTypewriterProps {
  texts: string[];
  speeds?: number[];
  delays?: number[];
  onComplete?: () => void;
}

export default function SequentialTypewriter({ 
  texts, 
  speeds = [80, 50], 
  delays = [500, 1000],
  onComplete 
}: SequentialTypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayTexts, setDisplayTexts] = useState<string[]>(new Array(texts.length).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Warte auf Client-Side Hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || isComplete) return;

    const typeText = (textIndex: number) => {
      if (textIndex >= texts.length) {
        setIsComplete(true);
        onComplete?.();
        return;
      }

      setCurrentTextIndex(textIndex);
      const text = texts[textIndex];
      const speed = speeds[textIndex] || 50;
      const delay = delays[textIndex] || 0;

      setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index <= text.length) {
            setDisplayTexts(prev => {
              const newTexts = [...prev];
              newTexts[textIndex] = text.slice(0, index);
              return newTexts;
            });
            index++;
          } else {
            clearInterval(interval);
            // Nächsten Text nach kurzer Pause (verkürzt)
            setTimeout(() => {
              typeText(textIndex + 1);
            }, 100);
          }
        }, speed);
      }, delay);
    };

    typeText(0);
  }, [isMounted, texts, speeds, delays, isComplete, onComplete]);

  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        {displayTexts[0]}
        {currentTextIndex === 0 && !isComplete && <span className="animate-pulse">|</span>}
      </h1>

      <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
        {displayTexts[1]}
        {currentTextIndex === 1 && !isComplete && <span className="animate-pulse">|</span>}
        {isComplete && <span className="animate-pulse">|</span>}
      </p>
    </>
  );
}
