import { useState, useEffect } from 'react';
import { Progress } from './ui/progress';
import { Counter } from './Counter';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface AnimatedProgressProps {
  value: number;
  className?: string;
  showPercentage?: boolean;
}

export function AnimatedProgress({ value, className = '', showPercentage = true }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const duration = 1500; // 1.5 seconds
      const progressValue = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progressValue, 4);
      
      setProgress(value * easeOutQuart);

      if (progressValue < 1) {
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
  }, [isVisible, value]);

  return (
    <div ref={elementRef as any} className={className}>
      {!showPercentage && <Progress value={progress} className="h-2" />}
      {showPercentage && (
        <Counter end={value} suffix="%" duration={1500} />
      )}
    </div>
  );
}