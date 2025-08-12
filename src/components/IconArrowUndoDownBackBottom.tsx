import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconArrowUndoDownBackBottom: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.00002 19L3.06068 16.0607C2.47489 15.4749 2.47489 14.5251 3.06068 13.9393L6.00002 11M3.00002 15H16.75C19.3734 15 21.5 12.8734 21.5 10.25C21.5 7.62665 19.3734 5.5 16.75 5.5H12"/>
  </svg>
);
