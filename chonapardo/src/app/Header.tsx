'use client';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div className="header">
        < Image
          width={400}
          height={70}
          className="center_logo chona_logo"
          alt="Chona Pardo"
          src="/images/chona.svg" />
      </div>
    </header>
  );
};
