'use client';
interface StripeProps {
  className: string;
  id: string;
  alt: string;
  src: string;
  url: string;
}
export const Stripe = ({ className, id, alt, src, url }: StripeProps) => (
  <div className={`stripe parallax ${className}`} id={id}>
    <img
      className={`center_logo ${className}_logo`}
      alt={alt}
      src={`/images/${src}.svg`}
      onClick={() => window.open(url)} />
  </div>
);
