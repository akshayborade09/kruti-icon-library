import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSun: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5v-2M20.5 12h2m-4.49 6.01 1.415 1.415M18.01 5.99l1.415-1.415M12 22.5v-2M1.5 12h2m1.075-7.425L5.989 5.99M4.575 19.425l1.414-1.415m9.9-9.9a5.5 5.5 0 1 1-7.778 7.78 5.5 5.5 0 0 1 7.778-7.78"/>
  </svg>
);
