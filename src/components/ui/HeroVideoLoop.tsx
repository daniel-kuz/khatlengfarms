'use client';

import { useRef, useState, useEffect } from 'react';

const VIDEOS = [
  '/videos/hero.mp4',
  '/videos/hero2.mp4',
  '/videos/hero3.mp4',
  '/videos/Cattle.mp4',
  '/videos/Sheep.mp4',
  '/videos/Sunflower Field.mp4',
  '/videos/Maize Field.mp4',
];

const FADE_DURATION = 1200; // ms — increase for a slower crossfade

export default function HeroVideoLoop() {
  const [current, setCurrent] = useState(0);
  const [next, setNext]       = useState<number | null>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  function handleEnded(index: number) {
    // Ignore if a transition is already in progress
    if (next !== null) return;

    const nextIndex = (index + 1) % VIDEOS.length;

    // Pre-load and start the incoming video before the fade begins
    const incoming = refs.current[nextIndex];
    if (incoming) {
      incoming.currentTime = 0;
      incoming.play().catch(() => {});
    }

    setNext(nextIndex);

    // After the crossfade completes, make the incoming video the new current
    // and pause/reset the old one so it's ready for next time
    setTimeout(() => {
      setCurrent(nextIndex);
      setNext(null);

      const old = refs.current[index];
      if (old) {
        old.pause();
        old.currentTime = 0;
      }
    }, FADE_DURATION);
  }

  // Kick off the first video on mount
  useEffect(() => {
    refs.current[0]?.play().catch(() => {});
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
    >
      {VIDEOS.map((src, i) => {
        /*
         * Layer logic — no grey gap:
         *   current  → always opacity 1, sits underneath
         *   next     → fades IN on top of current (0 → 1)
         *   others   → hidden (opacity 0, no transition)
         */
        const isCurrent  = i === current;
        const isNext     = i === next;

        let opacity: number;
        let transition: string;

        if (isNext) {
          opacity    = 1;
          transition = `opacity ${FADE_DURATION}ms ease-in-out`;
        } else if (isCurrent) {
          opacity    = 1;
          transition = 'none';
        } else {
          opacity    = 0;
          transition = 'none';
        }

        return (
          <video
            key={src}
            ref={el => { refs.current[i] = el; }}
            src={src}
            muted
            playsInline
            preload={i === 0 ? 'auto' : 'metadata'}
            onEnded={() => handleEnded(i)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity,
              transition,
              // incoming video sits on top so it fades in over the current
              zIndex: isNext ? 1 : 0,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </div>
  );
}
