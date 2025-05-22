
"use client"

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadlineProps {
  baseText: string;
  animatedWords: string[];
  className?: string;
}

export default function AnimatedHeadline({ baseText, animatedWords, className }: AnimatedHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const wordToAnimate = animatedWords[currentIndex % animatedWords.length];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      setTypingSpeed(75); // Faster when deleting
      if (currentWord.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentWord(prev => prev.substring(0, prev.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex(prev => prev + 1);
        setTypingSpeed(150); // Reset to typing speed
      }
    } else {
      if (currentWord.length < wordToAnimate.length) {
        timeoutId = setTimeout(() => {
          setCurrentWord(prev => wordToAnimate.substring(0, prev.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentWord, isDeleting, currentIndex, animatedWords, typingSpeed]);

  return (
    <h1 className={cn("text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter", className)}>
      {baseText}{' '}
      <span className="text-primary relative">
        {currentWord}
        <span className="animate-pulse">_</span>
      </span>
    </h1>
  );
}

    