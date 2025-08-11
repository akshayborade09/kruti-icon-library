import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconThumbsUp: React.FC<IconProps> = ({
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
    <path fill="#000" fill-rule="evenodd" d="M11.63 2a1.5 1.5 0 0 0-1.304.759L6.21 10H3.5A1.5 1.5 0 0 0 2 11.5v8A1.5 1.5 0 0 0 3.5 21h13.968a3.5 3.5 0 0 0 3.45-2.913l.979-5.75a3.5 3.5 0 0 0-3.45-4.087H13.6l.53-3.361A2.5 2.5 0 0 0 11.66 2zM6 11v9H3.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"/>
  </svg>
);
