import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconTrashCanDeleteRemoveGarbageWaste: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5 5.5L5.40918 18.5937C5.45979 20.2133 6.78734 21.5 8.40771 21.5H15.5923C17.2127 21.5 18.5402 20.2133 18.5908 18.5937L19 5.5M5 5.5H19M5 5.5H2.5M19 5.5H21.5M9.5 10.5V16.5M14.5 10.5V16.5M15.874 5.5C15.43 3.77477 13.8639 2.5 12 2.5C10.1362 2.5 8.57008 3.77477 8.12604 5.5"/>
  </svg>
);
