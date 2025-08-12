import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconBubblesMessages: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.5 14.5H19.0022C20.3829 14.5 21.5022 13.3807 21.5022 12V6C21.5022 4.61929 20.3829 3.5 19.0022 3.5H9.2522C7.87149 3.5 6.7522 4.61929 6.7522 6V7.5M15.0022 7.5H5.0022C3.62149 7.5 2.5022 8.61929 2.5022 10V16C2.5022 17.3807 3.62149 18.5 5.0022 18.5H6.0022V21L10.5022 18.5H15.0022C16.3829 18.5 17.5022 17.3807 17.5022 16V10C17.5022 8.61929 16.3829 7.5 15.0022 7.5Z"/>
  </svg>
);
