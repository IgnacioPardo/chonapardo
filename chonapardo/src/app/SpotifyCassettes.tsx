'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Spotify Cassettes lives in a cross-origin iframe running its own React app
 * and animation loop. It mounts once the stripe nears the viewport; a static
 * poster paints underneath until the iframe has loaded.
 */
export const SpotifyCassettes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setMounted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
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
      {!loaded && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="cassettes_poster"
          src="/images/cassettes_poster.jpg"
          srcSet="/images/cassettes_poster-m.jpg 900w, /images/cassettes_poster.jpg 1600w"
          sizes="100vw"
          alt=""
          decoding="async"
          loading="lazy"
        />
      )}
      {mounted && (
        <iframe
          className="iframeCassttes"
          id="cassettes_iframe"
          src="https://spotify-cassettes.vercel.app/?display=compact"
          title="Spotify Cassettes"
          loading="lazy"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};
