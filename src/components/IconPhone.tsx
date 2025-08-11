import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconPhone: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 4.5A3.5 3.5 0 0 1 8.5 1h7A3.5 3.5 0 0 1 19 4.5v15a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 19.5zM9.5 20a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
  </svg>
);
