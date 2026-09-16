'use client';
import { useEffect, useRef, useState } from 'react';

const CASSETTES_URL = 'https://spotify-cassettes.vercel.app/';

/** Touch-first devices (phones, tablets). */
const COARSE = '(hover: none) and (pointer: coarse)';

/**
 * Spotify Cassettes lives in a cross-origin iframe running its own React app
 * and animation loop. On desktop it mounts once the stripe nears the viewport;
 * a static poster paints underneath until the iframe has loaded.
 *
 * On touch devices we never embed the iframe — a second app running its own
 * animation loop makes phones scroll-janky — and instead show the poster as a
 * link out to the live app.
 */
export const SpotifyCassettes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia(COARSE).matches) {
      setCoarse(true);
      return;
    }
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

  const poster = (
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
  );

  return (
    <div ref={ref} className="stripe" id="cassettes">
      {coarse ? (
        <a
          className="cassettes_poster_link"
          href={CASSETTES_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Spotify Cassettes"
        >
          {poster}
        </a>
      ) : (
        <>
          {!loaded && poster}
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
        </>
      )}
    </div>
  );
};
