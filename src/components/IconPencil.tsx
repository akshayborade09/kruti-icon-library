import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconPencil: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M13.5 6L15.25 4.25001C16.4926 3.00736 18.5074 3.00736 19.75 4.25C20.9926 5.49264 20.9926 7.50736 19.75 8.75L18 10.5M13.5 6L3.29289 16.2071C3.10536 16.3946 3 16.649 3 16.9142V21H7.08579C7.351 21 7.60536 20.8946 7.79289 20.7071L18 10.5M13.5 6L18 10.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
