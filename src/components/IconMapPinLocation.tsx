import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconMapPinLocation: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linejoin="round" d="M14.4978 10C14.4978 11.3807 13.3785 12.5 11.9978 12.5C10.6171 12.5 9.4978 11.3807 9.4978 10C9.4978 8.61929 10.6171 7.5 11.9978 7.5C13.3785 7.5 14.4978 8.61929 14.4978 10Z"/><path stroke="#000" stroke-linejoin="round" d="M19.5 10C19.5 14.3179 15.8529 18.2059 13.6452 20.1639C12.6933 21.0082 11.3067 21.0082 10.3548 20.1639C8.14713 18.2059 4.5 14.3179 4.5 10C4.5 5.75 7.85786 2.5 12 2.5C16.1421 2.5 19.5 5.75 19.5 10Z"/>
  </svg>
);
