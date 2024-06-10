'use client';
import Image from 'next/image';

interface StripeProps {
  className: string;
  id: string;
  url: string;
  alt: string | undefined;
  src: string | undefined;
}
export const Stripe = ({ className, id, url, alt, src }: StripeProps) => (
  <div className={`stripe parallax ${className}`} id={id}>
    {src &&
    (<Image
      width={400}
      height={100}
      className={`center_logo ${className}_logo`}
      alt={alt || ''}
      src={`/images/${src}.svg`}
      onClick={() => window.open(url)} />)
    }
  </div>
);
