import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconThumbsDown: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M14.197 20.895A1.99 1.99 0 0 1 12.415 22a2.998 2.998 0 0 1-2.958-3.462L9.852 16H5.99c-2.421 0-4.279-2.142-3.953-4.54l.68-5A3.99 3.99 0 0 1 6.668 3H20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2.38zM18 12h2V5h-2z" clip-rule="evenodd"/>
  </svg>
);
