import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconPageTextAdd: React.FC<IconProps> = ({
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
    <path d="M11 21H8C6.34315 21 5 19.6569 5 18V6C5 4.34315 6.34315 3 8 3H16C17.6569 3 19 4.34315 19 6V11M18 15V18M18 18V21M18 18H15M18 18H21M9 7H15M9 11H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
