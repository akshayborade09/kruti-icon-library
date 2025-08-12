import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconShieldCheck3: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m8.75 12 2.167 2.25 4.333-4.5M3.5 13V7.51a3 3 0 0 1 1.858-2.775l5.5-2.265a3 3 0 0 1 2.284 0l5.5 2.265A3 3 0 0 1 20.5 7.509V13a8.5 8.5 0 0 1-17 0"/>
  </svg>
);
