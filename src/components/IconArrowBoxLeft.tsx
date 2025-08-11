import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowBoxLeft: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11.25 20H7C5.34315 20 4 18.6569 4 17L4 7C4 5.34315 5.34315 4 7 4L11.25 4M20 12L8.75 12M20 12L15.5 16.5M20 12L15.5 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
