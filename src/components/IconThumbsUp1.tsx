import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconThumbsUp1: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#000" stroke-linejoin="round" d="M6.5 10.5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3m0-10 4.26-7.494a1 1 0 0 1 .87-.506h.03a2 2 0 0 1 1.976 2.311l-.62 3.939h5.43a3 3 0 0 1 2.958 3.503l-.979 5.75a3 3 0 0 1-2.957 2.497H6.5m0-10v10"/>
  </svg>
);
