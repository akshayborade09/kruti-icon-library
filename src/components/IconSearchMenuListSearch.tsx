import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSearchMenuListSearch: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.5 12H5.5M2.5 6.5H6.5M2.5 17.5H6.5M19.75 16.75L22.5 19.5M21.5 12C21.5 15.5899 18.5899 18.5 15 18.5C11.4101 18.5 8.5 15.5899 8.5 12C8.5 8.41015 11.4101 5.5 15 5.5C18.5899 5.5 21.5 8.41015 21.5 12Z"/>
  </svg>
);
