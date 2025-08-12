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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m2.5 10.5 2.632-4.512A3 3 0 0 1 7.723 4.5h8.554a3 3 0 0 1 2.591 1.488L21.5 10.5m-19 0h-2m2 0V18a1.5 1.5 0 0 0 3 0v-.5h13v.5a1.5 1.5 0 0 0 3 0v-7.5m0 0h2m-18 2h2m9 0h2"/>
  </svg>
);
