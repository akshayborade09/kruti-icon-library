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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.5 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 20c4.01 0 6.733-1.78 8.203-3.101.6-.54.192-1.399-.615-1.399H4.412c-.807 0-1.215.86-.615 1.399C5.267 18.219 7.99 20 12 20m-2.5.5h5m0-14 1.5-3 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5zM5.583 9.583 6.5 7.75l.917 1.833 1.833.917-1.833.917L6.5 13.25l-.917-1.833L3.75 10.5z"/>
  </svg>
);
