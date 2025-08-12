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
    <path fill="#000" fill-rule="evenodd" d="M11 2a1 1 0 0 0-.894.553L6.382 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13.381a4 4 0 0 0 3.964-3.46l.681-5A4 4 0 0 0 18.063 8h-3.879l.396-2.538A3 3 0 0 0 11.616 2zM6 19v-7H4v7z" clip-rule="evenodd"/>
  </svg>
);
