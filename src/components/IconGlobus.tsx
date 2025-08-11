import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconGlobus: React.FC<IconProps> = ({
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
    <path d="M12 21.5a9.5 9.5 0 0 0 0-19m0 19a9.5 9.5 0 0 1 0-19m0 19c-2.21 0-4-4.253-4-9.5s1.79-9.5 4-9.5m0 19c2.21 0 4-4.253 4-9.5s-1.79-9.5-4-9.5m9 9.5H3" strokeLinecap="square" />
  </svg>
);
