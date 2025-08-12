import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconCamera1: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1,
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
    <path stroke="#000" stroke-linecap="square" stroke-linejoin="round" d="M5.5 6.5h.394a3 3 0 0 0 2.497-1.336l.218-.328A3 3 0 0 1 11.106 3.5h1.788a3 3 0 0 1 2.497 1.336l.218.328A3 3 0 0 0 18.106 6.5h.394a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Z"/><path stroke="#000" stroke-linecap="square" stroke-linejoin="round" d="M15.5 13a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
  </svg>
);
