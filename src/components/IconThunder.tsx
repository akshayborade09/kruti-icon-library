import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconThunder: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M19.454 10.465h-5.888L16.38 1.84c.337-1.029-.976-1.8-1.744-1.022L3.796 11.8c-.641.65-.172 1.735.75 1.735h5.888L7.62 22.16c-.337 1.03.976 1.801 1.744 1.024L20.204 12.2c.641-.65.172-1.735-.75-1.735Z"/>
  </svg>
);
