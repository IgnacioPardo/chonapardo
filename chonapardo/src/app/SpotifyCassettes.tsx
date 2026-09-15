'use client';
import { useEffect, useRef, useState } from 'react';

const COARSE = '(hover: none) and (pointer: coarse)';

/**
 * Spotify Cassettes lives in a cross-origin iframe running its own React app
 * and animation loop. On desktop it mounts once the stripe nears the viewport;
 * on touch devices it shows a static poster until tapped, since a foreign
 * 500 KB app animating inside an 800px iframe is expensive on iOS.
 */
export const SpotifyCassettes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'poster' | 'loaded'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia(COARSE).matches) {
      setState('poster');
      return;
    }
    if (!('IntersectionObserver' in window)) {
      setState('loaded');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('loaded');
          io.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="stripe" id="cassettes">
      {state === 'loaded' && (
        <iframe
          className="iframeCassttes"
          id="cassettes_iframe"
          src="https://spotify-cassettes.vercel.app/?display=compact"
          title="Spotify Cassettes"
          loading="lazy"
          allowFullScreen
        />
      )}
      {state === 'poster' && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="cassettes_poster"
            src="/images/cassettes_poster.jpg"
            srcSet="/images/cassettes_poster-m.jpg 900w, /images/cassettes_poster.jpg 1600w"
            sizes="100vw"
            alt="Spotify Cassettes preview"
            decoding="async"
            loading="lazy"
          />
          <button type="button" className="tap-to-load" onClick={() => setState('loaded')} aria-label="Load Spotify Cassettes">
            Tap to load
          </button>
        </>
      )}
    </div>
  );
};
