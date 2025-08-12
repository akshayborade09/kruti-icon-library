import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconDotGrid1x3Horizontal: React.FC<IconProps> = ({
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
    <path fill="#000" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-17 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-17 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
);
