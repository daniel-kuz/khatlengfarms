'use client';

import { useRef, useState, useEffect } from 'react';

const VIDEOS = [
  '/videos/hero.mp4',
  '/videos/hero2.mp4',
  '/videos/hero3.mp4',
];

export default function HeroVideoLoop() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState<number | null>(null);
  const [fading, setFading]   = useState(false);

  // One ref per video slot
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  // When a video ends, start crossfade to the next one
  function handleEnded(index: number) {
    if (fading) return;
    const nextIndex = (index + 1) % VIDEOS.length;
    setNext(nextIndex);
    setFading(true);

    // Start playing the incoming video immediately
    const incoming = refs.current[nextIndex];
    if (incoming) {
      incoming.currentTime = 0;
      incoming.play().catch(() => {});
    }
  }

  // Once fading state is set, wait for CSS transition then swap current
  useEffect(() => {
    if (!fading || next === null) return;
    const t = setTimeout(() => {
      setCurrent(next);
      setNext(null);
      setFading(false);
    }, 800); // must match the CSS transition duration below
    return () => clearTimeout(t);
  }, [fading, next]);

  // Autoplay the first video on mount
  useEffect(() => {
    refs.current[0]?.play().catch(() => {});
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
    >
      {VIDEOS.map((src, i) => {
        const isActive  = i === current;
        const isIncoming = i === next;
        const visible   = isActive || isIncoming;

        return (
          <video
            key={src}
            ref={el => { refs.current[i] = el; }}
            src={src}
            muted
            playsInline
            preload={i === 0 ? 'auto' : 'none'}
            onEnded={() => handleEnded(i)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isIncoming ? 1 : isActive ? (fading ? 0 : 1) : 0,
              transition: visible ? 'opacity 0.8s ease-in-out' : 'none',
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </div>
  );
}
