import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSearchMenu: React.FC<IconProps> = ({
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
    <path d="M3.00391 12H5.00391M3.00391 7H6.00391M3.00391 17H6.00391M19.5 16.5L22 19M21.0039 12C21.0039 15.3137 18.3176 18 15.0039 18C11.6902 18 9.00391 15.3137 9.00391 12C9.00391 8.68629 11.6902 6 15.0039 6C18.3176 6 21.0039 8.68629 21.0039 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
