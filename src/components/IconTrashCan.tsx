import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconTrashCan: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m5 5.5.41 13.094A3 3 0 0 0 8.407 21.5h7.184a3 3 0 0 0 2.999-2.906L19 5.5m-14 0h14m-14 0H2.5m16.5 0h2.5m-12 5v6m5-6v6m1.374-11a4.002 4.002 0 0 0-7.748 0"/>
  </svg>
);
