import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconArrowInboxDownloadFileDown: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20.5 14.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V14.5M12 15.5V3.5M12 15.5L8.5 12M12 15.5L15.5 12"/>
  </svg>
);
