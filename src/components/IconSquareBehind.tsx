import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSquareBehind: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.5 15.5V19.25C8.5 20.4926 9.50736 21.5 10.75 21.5H19.25C20.4926 21.5 21.5 20.4926 21.5 19.25V10.75C21.5 9.50736 20.4926 8.5 19.25 8.5H15.5M13.25 15.5H4.75C3.50736 15.5 2.5 14.4926 2.5 13.25V4.75C2.5 3.50736 3.50736 2.5 4.75 2.5H13.25C14.4926 2.5 15.5 3.50736 15.5 4.75V13.25C15.5 14.4926 14.4926 15.5 13.25 15.5Z"/>
  </svg>
);
