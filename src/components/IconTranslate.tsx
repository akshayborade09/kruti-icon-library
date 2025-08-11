import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconTranslate: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14.344 17.125h5.312m1.594 2.125-3.314-8.774c-.326-.862-1.546-.862-1.872 0L12.75 19.25M12 3.6V12M7.8 7.2h3.6M9.6 3.6h4.8m-10.8 0h1.8a1.8 1.8 0 0 1 1.8 1.8v0a1.8 1.8 0 0 1-1.8 1.8h-.6"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4.8 7.2h1.118A2.48 2.48 0 0 1 8.4 9.682v0c0 1.305-1.013 2.423-2.316 2.349A8 8 0 0 1 5.7 12C4.652 11.886 3 10.8 3 10.8"/>
  </svg>
);
