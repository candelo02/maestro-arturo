import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export function useAnimation(ref, animation = 'fade-up', delay = 0) {
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
        setHasAnimated(true);
      }, delay);
    }
  }, [isIntersecting, hasAnimated, delay, ref]);

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: '0',
      transition: 'all 0.6s ease-out',
    };

    const animations = {
      'fade-up': {
        transform: 'translateY(20px)',
      },
      'fade-down': {
        transform: 'translateY(-20px)',
      },
      'fade-left': {
        transform: 'translateX(20px)',
      },
      'fade-right': {
        transform: 'translateX(-20px)',
      },
      'zoom-in': {
        transform: 'scale(0.95)',
      },
    };

    return {
      ...baseStyles,
      ...animations[animation],
    };
  };

  return { hasAnimated, getAnimationStyles };
}