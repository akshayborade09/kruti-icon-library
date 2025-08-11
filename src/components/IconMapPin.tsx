import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconMapPin: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M14.498 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path stroke="#000" stroke-linejoin="round" d="M19.5 10c0 4.318-3.647 8.206-5.855 10.164a2.454 2.454 0 0 1-3.29 0C8.147 18.206 4.5 14.318 4.5 10c0-4.25 3.358-7.5 7.5-7.5s7.5 3.25 7.5 7.5Z"/>
  </svg>
);
