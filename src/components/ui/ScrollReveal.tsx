'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;        // ms delay before animation starts
  direction?: 'up' | 'left' | 'right' | 'none';
  style?: CSSProperties;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  style,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translate = {
      up:    'translateY(32px)',
      left:  'translateX(-32px)',
      right: 'translateX(32px)',
      none:  'translateY(0)',
    }[direction];

    // Set initial hidden state
    el.style.opacity = '0';
    el.style.transform = translate;
    el.style.transition = `opacity 0.7s ease, transform 0.7s ease`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
