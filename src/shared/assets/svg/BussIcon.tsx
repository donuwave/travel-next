import React, { FC, useId } from 'react';

interface BussIconProps {
  colors: string[];
  imageUrl?: string;
}

export const BussIcon: FC<BussIconProps> = ({ imageUrl = '', colors }) => {
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
            <stop stop-color={colors[0]} />
            <stop offset="1" stop-color={colors[1]} />
          </linearGradient>
        )}
        <clipPath id={clipId}>
          <rect width="256" height="256" fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path
          d="M28 0C83.228 0 128 44.772 128 100C128 44.772 172.772 0 228 0H256V156C256 211.228 211.228 256 156 256H100C44.772 256 0 211.228 0 156V0H28Z"
          fill={`url(#${fillId})`}
        />
      </g>
    </svg>
  );
};
