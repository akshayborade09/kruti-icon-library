import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconShieldCheck3Check: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.75 12L10.9167 14.25L15.25 9.75M3.5 13V7.50908C3.5 6.29341 4.23365 5.19791 5.35775 4.73504L10.8578 2.47034C11.5894 2.16905 12.4106 2.16905 13.1423 2.47034L18.6422 4.73504C19.7664 5.19791 20.5 6.29341 20.5 7.50908V13C20.5 17.6944 16.6944 21.5 12 21.5C7.30558 21.5 3.5 17.6944 3.5 13Z"/>
  </svg>
);
