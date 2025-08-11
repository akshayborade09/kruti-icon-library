import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconAtom: React.FC<IconProps> = ({
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
    <path stroke="#000" d="M19.941 4.059c1.67 1.67-.53 6.58-4.916 10.966-4.385 4.386-9.295 6.587-10.966 4.916s.53-6.58 4.916-10.966S18.27 2.388 19.94 4.059Z"/><path stroke="#000" d="M19.941 19.941c-1.67 1.67-6.58-.53-10.966-4.916S2.388 5.73 4.059 4.06s6.58.53 10.966 4.916 6.587 9.295 4.916 10.966Z"/>
  </svg>
);
