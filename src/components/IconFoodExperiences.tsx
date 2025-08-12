import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconFoodExperiences: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.5 4.5C10.5 5.052 10.052 5.5 9.5 5.5 8.948 5.5 8.5 5.052 8.5 4.5 8.5 3.948 8.948 3.5 9.5 3.5 10.052 3.5 10.5 3.948 10.5 4.5ZM12 20C16.01 20 18.734 18.22 20.203 16.899 20.803 16.359 20.395 15.5 19.588 15.5H4.412C3.605 15.5 3.197 16.359 3.797 16.899 5.267 18.22 7.99 20 12 20ZM9.5 20.5H14.5M14.5 6.5 16 3.5 17.5 6.5 20.5 8 17.5 9.5 16 12.5 14.5 9.5 11.5 8 14.5 6.5ZM5.583 9.583 6.5 7.75 7.417 9.583 9.25 10.5 7.417 11.417 6.5 13.25 5.583 11.417 3.75 10.5 5.583 9.583Z"/>
  </svg>
);
