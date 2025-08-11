import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconSettingsGear1: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="square" d="M10.537 3.318a3 3 0 0 1 2.926 0l5.5 3.073a3 3 0 0 1 1.537 2.62v5.979a3 3 0 0 1-1.537 2.619l-5.5 3.073a3 3 0 0 1-2.926 0l-5.5-3.073A3 3 0 0 1 3.5 14.99V9.01a3 3 0 0 1 1.537-2.619z"/><path stroke="#000" stroke-linecap="square" d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
  </svg>
);
