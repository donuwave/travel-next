import React, { FC, useId } from 'react';

interface IBussExcursionsIcon {
  colors: string[];
  imageUrl?: string;
}

export const BussExcursionsIcon: FC<IBussExcursionsIcon> = ({ imageUrl = '', colors }) => {
  const uniqueId = useId();
  const fillId = `fill-${uniqueId}`;
  const clipId = `clip-${uniqueId}`;

  return (
    <svg
      width="256"
      height="230"
      viewBox="0 0 256 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {imageUrl && (
          <pattern id={fillId} patternUnits="userSpaceOnUse" width="256" height="256">
            <image href={imageUrl} width="256" height="256" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        )}

        {!imageUrl && (
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

        <clipPath id={clipId}>
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path
          d="M256 0C256 35.346 227.346 64 192 64C227.346 64 256 92.654 256 128C256 163.346 227.346 192 192 192C227.346 192 256 220.654 256 256H0C0 220.654 28.654 192 64 192C28.654 192 0 163.346 0 128C0 92.654 28.654 64 64 64C28.654 64 0 35.346 0 0H256Z"
          fill={`url(#${fillId})`}
        />
      </g>
    </svg>
  );
};
