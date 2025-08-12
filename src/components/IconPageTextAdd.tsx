import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconPageTextAdd: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.5 21.5h-5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v7m-1 3v3m0 0v3m0-3h-3m3 0h3m-14-12h7m-7 4h4"/>
  </svg>
);
