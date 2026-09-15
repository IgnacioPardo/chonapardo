'use client';
import Image from 'next/image';
import type { KeyboardEvent, MouseEvent } from 'react';

interface StripeProps {
  className: string;
  id: string;
  url: string;
  alt: string | undefined;
  src: string | undefined;
}
export const Stripe = ({ className, id, url, alt, src }: StripeProps) => {
  const open = () => window.open(url);
  const clickable = Boolean(url);

  return (
    <div
      className={`stripe parallax ${className}${clickable ? ' clickable' : ''}`}
      id={id}
      {...(clickable
        ? {
            role: 'link',
            tabIndex: 0,
            'aria-label': alt || id,
            onClick: open,
            onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
              }
            },
          }
        : {})}
    >
      {src && (
        <Image
          width={400}
          height={100}
          className={`center_logo ${className}_logo`}
          alt={alt || id}
          src={`/images/${src}.svg`}
          onClick={(e: MouseEvent<HTMLImageElement>) => {
            e.stopPropagation();
            open();
          }}
        />
      )}
    </div>
  );
};
