import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconPeople2: React.FC<IconProps> = ({
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
    <path d="M3.5 20.5v-2a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v2M17 7.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
