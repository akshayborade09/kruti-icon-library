import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconThumbsDown: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M18.05 4v9h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm-.21 10h2.71a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5H6.583a3.5 3.5 0 0 0-3.45 2.913l-.98 5.75a3.5 3.5 0 0 0 3.45 4.087h4.846l-.53 3.361A2.5 2.5 0 0 0 12.39 22h.03a1.5 1.5 0 0 0 1.305-.759z" clip-rule="evenodd"/>
  </svg>
);
