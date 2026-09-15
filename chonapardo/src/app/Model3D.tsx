'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Model3DProps {
  src: string;
  poster?: string;
  posterSmall?: string;
  alt: string;
  exposure?: number;
  shadowIntensity?: number;
  environmentImage?: string;
  rotationPerSecond?: string;
  cameraOrbit?: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  fieldOfView?: string;
}

/** Touch-first devices (phones, tablets — iPadOS keeps matching with a trackpad attached). */
const COARSE = '(hover: none) and (pointer: coarse)';

/**
 * Lazy, interactive 3D model stripe content built on <model-viewer>.
 *
 * The poster is a plain <img> so the stripe paints instantly. On desktop the
 * library (~1 MB) and the .glb are fetched once the stripe nears the viewport.
 * On touch devices nothing is fetched until the user taps: three.js parsing
 * mid-flick and a 560px WebGL canvas were the main causes of iOS scroll jank,
 * and camera-controls would otherwise swallow vertical swipes over the stripe.
 */
export const Model3D = ({
  src,
  poster,
  posterSmall,
  alt,
  exposure = 1,
  shadowIntensity = 0.55,
  environmentImage = 'neutral',
  rotationPerSecond = '22deg',
  cameraOrbit,
  minCameraOrbit,
  maxCameraOrbit,
  fieldOfView,
}: Model3DProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const mvRef = useRef<any>(null);
  const coarseRef = useRef(false);
  const triggeredRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const load = useCallback(() => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setNeedsTap(false);
    import('@google/model-viewer')
      .then(() => setReady(true))
      .catch(() => {
        triggeredRef.current = false;
        setNeedsTap(coarseRef.current);
      });
  }, []);

  // Desktop: load near the viewport. Touch: wait for a tap.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    coarseRef.current = window.matchMedia(COARSE).matches;
    if (coarseRef.current) {
      setNeedsTap(true);
      return;
    }
    if (!('IntersectionObserver' in window)) {
      load();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  // Configure the custom element imperatively.
  useEffect(() => {
    const mv = mvRef.current;
    if (!ready || !mv) return;
    const attrs: Record<string, string> = {
      src,
      alt,
      exposure: String(exposure),
      'shadow-intensity': String(shadowIntensity),
      'environment-image': environmentImage,
      'rotation-per-second': rotationPerSecond,
      'auto-rotate-delay': '0',
      'interaction-prompt': 'none',
      // Never trap vertical scrolling over the stripe.
      'touch-action': 'pan-y',
      loading: 'eager',
      reveal: 'auto',
    };
    if (cameraOrbit) attrs['camera-orbit'] = cameraOrbit;
    if (minCameraOrbit) attrs['min-camera-orbit'] = minCameraOrbit;
    if (maxCameraOrbit) attrs['max-camera-orbit'] = maxCameraOrbit;
    if (fieldOfView) attrs['field-of-view'] = fieldOfView;
    Object.entries(attrs).forEach(([k, v]) => mv.setAttribute(k, v));
    // Orbit by drag on desktop only; on touch the model just auto-rotates so
    // the page keeps scrolling (model-viewer's controls set touch-action:none).
    mv.toggleAttribute('camera-controls', !coarseRef.current);
    mv.toggleAttribute('auto-rotate', true);
    mv.toggleAttribute('disable-zoom', true);
    mv.toggleAttribute('disable-pan', true);
    const onLoad = () => setModelLoaded(true);
    mv.addEventListener('load', onLoad);
    return () => mv.removeEventListener('load', onLoad);
  }, [
    ready,
    src,
    alt,
    exposure,
    shadowIntensity,
    environmentImage,
    rotationPerSecond,
    cameraOrbit,
    minCameraOrbit,
    maxCameraOrbit,
    fieldOfView,
  ]);

  return (
    <div ref={hostRef} className="model3d">
      {poster && !modelLoaded && (
        // Plain <img> on purpose: paints before any JS, no optimizer dependency.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="model3d_poster"
          src={poster}
          srcSet={posterSmall ? `${posterSmall} 900w, ${poster} 1600w` : undefined}
          sizes="100vw"
          alt=""
          decoding="async"
          loading="lazy"
        />
      )}
      {ready && (
        // eslint-disable-next-line react/no-unknown-property
        <model-viewer ref={mvRef} class="model3d_mv" />
      )}
      {needsTap && (
        <button type="button" className="tap-to-load" onClick={load} aria-label={`Load ${alt}`}>
          Tap to explore in 3D
        </button>
      )}
    </div>
  );
};
