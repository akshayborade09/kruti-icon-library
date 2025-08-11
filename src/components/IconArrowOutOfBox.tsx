import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconArrowOutOfBox: React.FC<IconProps> = ({
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
    <path d="M20 12.75V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V12.75M12 4V15.25M12 4L16.5 8.5M12 4L7.5 8.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
