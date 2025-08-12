import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconPhoneIphoneMobile: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.5 20.5H14.5M8.5 22.5H15.5C17.1569 22.5 18.5 21.1569 18.5 19.5V4.5C18.5 2.84315 17.1569 1.5 15.5 1.5H8.5C6.84315 1.5 5.5 2.84315 5.5 4.5V19.5C5.5 21.1569 6.84315 22.5 8.5 22.5Z"/>
  </svg>
);
