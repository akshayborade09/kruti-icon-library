import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowOutOfBox: React.FC<IconProps> = ({
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
    <path d="M12 3.5v11m0-11L16.5 8M12 3.5 7.5 8m13 4.5v5a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
