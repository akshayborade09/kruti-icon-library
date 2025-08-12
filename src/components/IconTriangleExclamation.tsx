import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconTriangleExclamation: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" d="M12 9v4.5m0 2.5h.01M9.464 4.516 2.907 14.898C1.645 16.896 3.08 19.5 5.443 19.5h13.114c2.363 0 3.798-2.604 2.537-4.602L14.537 4.516c-1.178-1.864-3.896-1.864-5.073 0ZM12.25 16a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"/>
  </svg>
);
