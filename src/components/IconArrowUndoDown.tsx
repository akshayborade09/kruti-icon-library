import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowUndoDown: React.FC<IconProps> = ({
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
    <path d="m6 19-2.94-2.94a1.5 1.5 0 0 1 0-2.12L6 11m-3 4h13.75a4.75 4.75 0 1 0 0-9.5H12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
