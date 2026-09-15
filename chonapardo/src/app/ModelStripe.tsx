import Image from 'next/image';
import { Model3D } from './Model3D';
import { Parallax } from './Parallax';

interface ModelStripeProps {
  id: string;
  className?: string;
  src: string;
  poster?: string;
  alt: string;
  logo: string; // basename of an SVG wordmark in /images
  url?: string;
  exposure?: number;
  environmentImage?: string;
  cameraOrbit?: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  fieldOfView?: string;
}

/**
 * A stripe whose content is an interactive, auto-rotating 3D model with the
 * project's wordmark centred on top (the wordmark is the link), matching the
 * rest of the exhibition's centred-logo pattern.
 */
export const ModelStripe = ({
  id,
  className = '',
  src,
  poster,
  alt,
  logo,
  url,
  exposure,
  environmentImage,
  cameraOrbit,
  minCameraOrbit,
  maxCameraOrbit,
  fieldOfView,
}: ModelStripeProps) => {
  const mark = (
    <Image
      width={400}
      height={100}
      className={`center_logo ${logo}_logo`}
      alt={alt}
      src={`/images/${logo}.svg`}
      priority={false}
    />
  );
  return (
    <div className={`stripe model-stripe parallax-host ${className}`} id={id}>
      <Parallax strength={22}>
        <Model3D
          src={src}
          poster={poster}
          alt={alt}
          exposure={exposure}
          environmentImage={environmentImage}
          cameraOrbit={cameraOrbit}
          minCameraOrbit={minCameraOrbit}
          maxCameraOrbit={maxCameraOrbit}
          fieldOfView={fieldOfView}
        />
      </Parallax>
      <div className="model-stripe_logo">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer" aria-label={alt}>
            {mark}
          </a>
        ) : (
          mark
        )}
      </div>
    </div>
  );
};
