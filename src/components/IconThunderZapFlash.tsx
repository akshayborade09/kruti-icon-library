import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconThunderZapFlash: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M19.454 10.4648H13.5658L16.3804 1.8412C16.7169 0.810306 15.4038 0.0397322 14.6361 0.817543L3.79583 11.8C3.15481 12.4494 3.62419 13.5352 4.54597 13.5352H10.4342L7.61956 22.1588C7.28309 23.1897 8.59617 23.9603 9.36392 23.1825L20.2042 12.2C20.8452 11.5506 20.3758 10.4648 19.454 10.4648Z"/>
  </svg>
);
