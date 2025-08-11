import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconShieldCheck3: React.FC<IconProps> = ({
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
    <path d="m8.75 12 2.167 2.25 4.333-4.5M3.5 13V7.51a3 3 0 0 1 1.858-2.775l5.5-2.265a3 3 0 0 1 2.284 0l5.5 2.265A3 3 0 0 1 20.5 7.509V13a8.5 8.5 0 0 1-17 0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
