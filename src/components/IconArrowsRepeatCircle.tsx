import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowsRepeatCircle: React.FC<IconProps> = ({
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
    <path d="m11.5 22.5 3-3-3-3m1-9-3-3 3-3m-2.5 3h4A7.5 7.5 0 0 1 18.5 18M14 19.5h-4A7.5 7.5 0 0 1 5.5 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
