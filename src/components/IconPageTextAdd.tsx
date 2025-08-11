import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconPageTextAdd: React.FC<IconProps> = ({
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
    <path d="M12.5 21.5h-5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v7m-1 3v3m0 0v3m0-3h-3m3 0h3m-14-12h7m-7 4h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
