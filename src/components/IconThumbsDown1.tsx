import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconThumbsDown1: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M17.55 13.5h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-3m0 10-4.26 7.494a1 1 0 0 1-.87.506h-.03a2 2 0 0 1-1.976-2.311l.62-3.939h-5.43a3 3 0 0 1-2.958-3.503l.98-5.75A3 3 0 0 1 6.582 3.5H17.55m0 10v-10"/>
  </svg>
);
