import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconBubbles: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.5 14.5h1.502a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5h-9.75a2.5 2.5 0 0 0-2.5 2.5v1.5m8.25 0h-10a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h1V21l4.5-2.5h4.5a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5"/>
  </svg>
);
