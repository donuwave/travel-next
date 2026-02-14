import React, { FC, useId } from 'react';

interface IButterflyIcon {
  colors: string[];
  imageUrl?: string;
}

export const ButterflyIcon: FC<IButterflyIcon> = ({ imageUrl = '', colors }) => {
  const uniqueId = useId();
  const fillId = `fill-${uniqueId}`;

  return (
    <svg
      width="256"
      height="230"
      viewBox="0 0 256 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {imageUrl ? (
          <pattern id={fillId} patternUnits="userSpaceOnUse" width="256" height="256">
            <image href={imageUrl} width="256" height="256" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        ) : (
          <linearGradient
            id={fillId}
            x1="128"
            y1="0"
            x2="128"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colors[0]} />
            <stop offset="1" stopColor={colors[1]} />
          </linearGradient>
        )}
      </defs>

      <path
        d="M78 0C105.614 0 128 22.386 128 50C128 22.386 150.386 0 178 0H256V78C256 105.614 233.614 128 206 128C233.614 128 256 150.386 256 178V256H178C150.386 256 128 233.614 128 206C128 233.614 105.614 256 78 256H0V178C0 150.386 22.386 128 50 128C22.386 128 0 105.614 0 78V0H78Z"
        fill={`url(#${fillId})`}
      />
    </svg>
  );
};
