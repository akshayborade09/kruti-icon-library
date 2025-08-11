import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconReceiptBill: React.FC<IconProps> = ({
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
    <path d="M9 8H15M9 12H11M19 21V6C19 4.34315 17.6569 3 16 3H8C6.34315 3 5 4.34315 5 6V21L7.33333 19L9.66667 21L12 19L14.3333 21L16.6667 19L19 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
