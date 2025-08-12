import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconVolumeFull: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15.89 8.111a5.48 5.48 0 0 1 1.61 3.89 5.48 5.48 0 0 1-1.61 3.889m3.535-11.315c1.9 1.9 3.075 4.526 3.075 7.425s-1.175 5.525-3.075 7.425M3.5 7.5h1.82a2 2 0 0 0 1.22-.415l4.35-3.347a1 1 0 0 1 1.61.793v14.938a1 1 0 0 1-1.61.793l-4.35-3.347a2 2 0 0 0-1.22-.415H3.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2"/>
  </svg>
);
