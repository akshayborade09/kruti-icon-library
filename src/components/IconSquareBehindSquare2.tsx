import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSquareBehindSquare2: React.FC<IconProps> = ({
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
    <path d="M9 15V18.75C9 19.9926 10.0074 21 11.25 21H18.75C19.9926 21 21 19.9926 21 18.75V11.25C21 10.0074 19.9926 9 18.75 9H15M12.75 15H5.25C4.00736 15 3 13.9926 3 12.75V5.25C3 4.00736 4.00736 3 5.25 3H12.75C13.9926 3 15 4.00736 15 5.25V12.75C15 13.9926 13.9926 15 12.75 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
