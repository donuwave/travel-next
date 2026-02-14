import React, { FC, useId } from 'react';

interface IInfinityShapeIcon {
  colors: string[];
  imageUrl?: string;
}

export const InfinityShapeIcon: FC<IInfinityShapeIcon> = ({ imageUrl = '', colors }) => {
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
          d="M228 0C172.772 0 128 44.772 128 100V0H0V28C0 83.228 44.772 128 100 128H0V256H28C83.228 256 128 211.228 128 156V256H256V228C256 172.772 211.228 128 156 128H256V0H228Z"
          fill={`url(#${fillId})`}
        />
      </g>
    </svg>
  );
};
