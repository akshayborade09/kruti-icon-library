import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSunLight: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M11.9999 3.5V1.5M20.5 12H22.5M18.0104 18.0104L19.4246 19.4246M18.0104 5.98959L19.4246 4.57538M11.9999 22.5V20.5M1.5 12H3.5M4.57504 4.57538L5.98926 5.98959M4.57504 19.4246L5.98926 18.0104M15.889 8.11091C18.0369 10.2588 18.0369 13.7412 15.889 15.8891C13.7411 18.037 10.2587 18.037 8.11085 15.8891C5.96297 13.7412 5.96297 10.2588 8.11085 8.11091C10.2587 5.96303 13.7411 5.96303 15.889 8.11091Z"/>
  </svg>
);
