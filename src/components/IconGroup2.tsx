import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconGroup2: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.625" d="M14 13.43c2.89-1.2 6.427.11 7.906 3.932.628 1.623-.81 3.138-2.55 3.138H15.75M10.5 7A3.25 3.25 0 1 1 4 7a3.25 3.25 0 0 1 6.5 0m.138 13.5h-6.42c-1.739 0-3.177-1.518-2.548-3.14 2.252-5.813 9.265-5.813 11.517 0 .629 1.622-.809 3.14-2.549 3.14M19.75 7a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"/>
  </svg>
);
