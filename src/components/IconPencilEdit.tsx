import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconPencilEdit: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.00001L15.8787 3.62133C17.0503 2.44975 18.9497 2.44975 20.1213 3.62132L20.3787 3.87868C21.5503 5.05026 21.5503 6.94975 20.3787 8.12132L18 10.5M13.5 6.00001L2.79289 16.7071C2.60536 16.8946 2.5 17.149 2.5 17.4142V21.5H6.58579C6.851 21.5 7.10536 21.3946 7.29289 21.2071L18 10.5M13.5 6.00001L18 10.5"/>
  </svg>
);
