import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowUndoDown: React.FC<IconProps> = ({
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
    <path d="M6.50002 19L3.56068 16.0607C2.97489 15.4749 2.97489 14.5251 3.56068 13.9393L6.50002 11M4.00002 15H16.5C18.9853 15 21 12.9853 21 10.5C21 8.01472 18.9853 6 16.5 6H12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
