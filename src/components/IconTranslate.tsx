import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconTranslate: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14.344 17.125H19.656M21.25 19.25 17.936 10.476C17.61 9.614 16.39 9.614 16.064 10.476L12.75 19.25M12 3.6 12 12M7.8 7.2H11.4M9.6 3.6H14.4M3.6 3.6H5.4C6.394 3.6 7.2 4.406 7.2 5.4V5.4C7.2 6.394 6.394 7.2 5.4 7.2H4.8M4.8 7.2H5.918C7.289 7.2 8.4 8.311 8.4 9.683V9.683C8.4 10.987 7.387 12.105 6.084 12.031 5.95 12.023 5.821 12.013 5.7 12 4.652 11.886 3 10.8 3 10.8"/>
  </svg>
);
