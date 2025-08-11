import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconReceiptBill: React.FC<IconProps> = ({
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
    <path d="M8.5 7.5h7m-7 4h3m8 10v-16a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v16L7 19l2.5 2.5L12 19l2.5 2.5L17 19z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
