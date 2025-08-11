import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconChevronBottom: React.FC<IconProps> = ({
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
    <path d="M20 9L14.1213 14.8787C12.9498 16.0503 11.0503 16.0503 9.8787 14.8787L4 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
