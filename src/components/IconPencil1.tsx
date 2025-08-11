import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconPencil1: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m13.5 6 2.379-2.379a3 3 0 0 1 4.242 0l.258.258a3 3 0 0 1 0 4.242L18 10.5M13.5 6 2.793 16.707a1 1 0 0 0-.293.707V21.5h4.086a1 1 0 0 0 .707-.293L18 10.5M13.5 6l4.5 4.5"/>
  </svg>
);
