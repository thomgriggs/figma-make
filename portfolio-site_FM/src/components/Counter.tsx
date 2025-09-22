import { useState, useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ end, duration = 2000, suffix = '', className = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Small delay to ensure the element is rendered
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span 
      ref={elementRef as any}
      className={`${className} ${isVisible ? 'animate-count-up' : ''}`}
    >
      {count}{suffix}
    </span>
  );
}