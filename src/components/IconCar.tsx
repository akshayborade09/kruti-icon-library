import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconCar: React.FC<IconProps> = ({
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
    <path d="M2 10.5L5.10147 6.23548C5.666 5.45925 6.56786 5 7.52767 5H16.4425C17.419 5 18.3343 5.47521 18.8962 6.27383L22 10.6857M2 10.5H1M2 10.5V17C2 18.1046 2.89543 19 4 19C5.10457 19 6 18.1046 6 17H18C18 18.1046 18.8954 19 20 19C21.1046 19 22 18.1046 22 17V10.6857M22 10.6857H23M6 13H8M16 13H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
