import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconMicrophone: React.FC<IconProps> = ({
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
    <path d="M7.5 7a4.5 4.5 0 1 1 9 0v5a4.5 4.5 0 1 1-9 0z" />
    <path d="M12 19.5a7.5 7.5 0 0 0 7.23-5.5M12 19.5A7.5 7.5 0 0 1 4.77 14M12 19.5v2m0-5A4.5 4.5 0 0 1 7.5 12V7a4.5 4.5 0 1 1 9 0v5a4.5 4.5 0 0 1-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
