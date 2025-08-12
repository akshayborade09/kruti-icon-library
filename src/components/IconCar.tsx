import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconCar: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.5 10.5L5.13178 5.98839C5.66941 5.06673 6.65611 4.5 7.72311 4.5H16.2769C17.3439 4.5 18.3306 5.06673 18.8682 5.98839L21.5 10.5M2.5 10.5H0.5M2.5 10.5V18C2.5 18.8284 3.17157 19.5 4 19.5C4.82843 19.5 5.5 18.8284 5.5 18V17.5H18.5V18C18.5 18.8284 19.1716 19.5 20 19.5C20.8284 19.5 21.5 18.8284 21.5 18V10.5M21.5 10.5H23.5M5.5 12.5H7.5M16.5 12.5H18.5"/>
  </svg>
);
