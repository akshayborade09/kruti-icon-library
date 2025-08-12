import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconArrowBox: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.5 12L9.5 12M20.5 12L16 16.5M20.5 12L16 7.5M11.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5L3.5 6.5C3.5 4.84315 4.84315 3.5 6.5 3.5L11.5 3.5"/>
  </svg>
);
