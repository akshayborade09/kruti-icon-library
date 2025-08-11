import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconChevronLeft: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 20L9.12136 14.1213C7.94978 12.9498 7.94978 11.0503 9.12135 9.8787L15 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
