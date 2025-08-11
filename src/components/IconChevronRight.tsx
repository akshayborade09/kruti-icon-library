import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconChevronRight: React.FC<IconProps> = ({
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
    <path d="M9 4L14.8787 9.87866C16.0503 11.0502 16.0503 12.9497 14.8787 14.1213L9 20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
