'use client';
import { useEffect, useRef, useState } from 'react';

interface Model3DProps {
  src: string;
  poster?: string;
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

/**
 * Lazy, interactive 3D model stripe content built on <model-viewer>.
 * The library (~1 MB) and the .glb are only fetched once the stripe nears the
 * viewport; until then the poster paints instantly. Attributes are set
 * imperatively because <model-viewer> is a custom element.
 */
export const Model3D = ({
  src,
  poster,
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
  const [ready, setReady] = useState(false);

  // Load the library + reveal the model once the stripe is near the viewport.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    let triggered = false;
    const load = () => {
      if (triggered) return;
      triggered = true;
      import('@google/model-viewer').then(() => setReady(true)).catch(() => {});
    };
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
      { rootMargin: '700px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
      loading: 'eager',
      reveal: 'auto',
    };
    if (poster) attrs.poster = poster;
    if (cameraOrbit) attrs['camera-orbit'] = cameraOrbit;
    if (minCameraOrbit) attrs['min-camera-orbit'] = minCameraOrbit;
    if (maxCameraOrbit) attrs['max-camera-orbit'] = maxCameraOrbit;
    if (fieldOfView) attrs['field-of-view'] = fieldOfView;
    Object.entries(attrs).forEach(([k, v]) => mv.setAttribute(k, v));
    mv.toggleAttribute('camera-controls', true);
    mv.toggleAttribute('auto-rotate', true);
    // Keep the page scrollable over the stripe: orbit by drag, no wheel-zoom/pan.
    mv.toggleAttribute('disable-zoom', true);
    mv.toggleAttribute('disable-pan', true);
  }, [
    ready,
    src,
    poster,
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
      {ready && (
        // eslint-disable-next-line react/no-unknown-property
        <model-viewer ref={mvRef} class="model3d_mv" />
      )}
    </div>
  );
};
