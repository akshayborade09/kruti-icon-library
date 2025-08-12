import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconArrowsRepeat: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M11.5 22.5L14.5 19.5L11.5 16.5M12.5 7.5L9.5 4.5L12.5 1.5M10 4.5H14C18.1421 4.5 21.5 7.85786 21.5 12C21.5 14.4534 20.322 16.6317 18.5007 18M14 19.5H10C5.85786 19.5 2.5 16.1421 2.5 12C2.5 9.5466 3.67801 7.36834 5.49927 6"/>
  </svg>
);
