import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowRotateCounterClockwise: React.FC<IconProps> = ({
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
    <path d="M3.998 14.833A8.5 8.5 0 1 0 12.014 3.5C8.96 3.5 6.971 4.875 5 7.199M4.5 3.75v3a1 1 0 0 0 1 1h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
