import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrow: React.FC<IconProps> = ({
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
    <path d="M9.5 14.5v6h-6m5.5-.545a8.5 8.5 0 1 1 6.5-15.704" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.75 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m3.89-1.98a.75.75 0 1 1-1.298.75.75.75 0 0 1 1.299-.75m2.379-3.66a.75.75 0 1 1-.75 1.298.75.75 0 0 1 .75-1.299m-.999-6.951a.75.75 0 1 1-.75-1.299.75.75 0 0 1 .75 1.3M21 11a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
  </svg>
);
