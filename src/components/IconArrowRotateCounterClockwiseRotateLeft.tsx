import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconArrowRotateCounterClockwiseRotateLeft: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.99805 14.8333C5.16492 18.1347 8.31343 20.5 12.0144 20.5C16.7088 20.5 20.5144 16.6944 20.5144 12C20.5144 7.30558 16.7088 3.5 12.0144 3.5C8.95923 3.5 6.97053 4.87481 5.00022 7.1988M4.50022 3.75V6.75C4.50022 7.30228 4.94794 7.75 5.50022 7.75H8.50022"/>
  </svg>
);
