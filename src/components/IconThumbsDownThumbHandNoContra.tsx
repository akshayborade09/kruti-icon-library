import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconThumbsDownThumbHandNoContra: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M17.55 13.5H20.55C21.1023 13.5 21.55 13.0523 21.55 12.5V4.5C21.55 3.94772 21.1023 3.5 20.55 3.5H17.55M17.55 13.5L13.2892 20.9943C13.1114 21.3069 12.7795 21.5 12.4198 21.5H12.3895C11.1609 21.5 10.2228 20.4026 10.4138 19.189L11.0339 15.25H5.6038C3.74579 15.25 2.33456 13.5783 2.64633 11.7466L3.62506 5.9966C3.87048 4.55473 5.11991 3.5 6.58252 3.5H17.55M17.55 13.5V3.5"/>
  </svg>
);
