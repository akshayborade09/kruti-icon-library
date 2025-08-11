import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowInbox: React.FC<IconProps> = ({
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
    <path d="M20.5 14.5v3a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-3m8.5 1v-12m0 12L8.5 12m3.5 3.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
