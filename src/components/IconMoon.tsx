import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconMoon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
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
    <path fill="#000" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10v-.006a.5.5 0 0 0-.815-.388 6.25 6.25 0 0 1-8.791-8.791.5.5 0 0 0-.388-.815z"/>
  </svg>
);
