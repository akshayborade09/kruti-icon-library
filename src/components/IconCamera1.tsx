import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconCamera1: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5.5 6.5h.394a3 3 0 0 0 2.497-1.336l.218-.328A3 3 0 0 1 11.106 3.5h1.788a3 3 0 0 1 2.497 1.336l.218.328A3 3 0 0 0 18.106 6.5h.394a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Z" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M15.5 13a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);
