import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSquareGrid: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5C3.5 4.395 4.395 3.5 5.5 3.5H8.5C9.605 3.5 10.5 4.395 10.5 5.5V8.5C10.5 9.605 9.605 10.5 8.5 10.5H5.5C4.395 10.5 3.5 9.605 3.5 8.5V5.5ZM3.5 15.5C3.5 14.395 4.395 13.5 5.5 13.5H8.5C9.605 13.5 10.5 14.395 10.5 15.5V18.5C10.5 19.605 9.605 20.5 8.5 20.5H5.5C4.395 20.5 3.5 19.605 3.5 18.5V15.5ZM13.5 17C13.5 15.067 15.067 13.5 17 13.5 18.933 13.5 20.5 15.067 20.5 17 20.5 18.933 18.933 20.5 17 20.5 15.067 20.5 13.5 18.933 13.5 17ZM13.5 5.5C13.5 4.395 14.395 3.5 15.5 3.5H18.5C19.605 3.5 20.5 4.395 20.5 5.5V8.5C20.5 9.605 19.605 10.5 18.5 10.5H15.5C14.395 10.5 13.5 9.605 13.5 8.5V5.5Z"/>
  </svg>
);
