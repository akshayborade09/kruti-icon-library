import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconDotGrid1x3HorizontalMenuDragGrab: React.FC<IconProps> = ({
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
    <path d="M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM20.5 13C21.052 13 21.5 12.552 21.5 12 21.5 11.448 21.052 11 20.5 11 19.948 11 19.5 11.448 19.5 12 19.5 12.552 19.948 13 20.5 13ZM3.5 13C4.052 13 4.5 12.552 4.5 12 4.5 11.448 4.052 11 3.5 11 2.948 11 2.5 11.448 2.5 12 2.5 12.552 2.948 13 3.5 13Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM20.5 13C21.052 13 21.5 12.552 21.5 12 21.5 11.448 21.052 11 20.5 11 19.948 11 19.5 11.448 19.5 12 19.5 12.552 19.948 13 20.5 13ZM3.5 13C4.052 13 4.5 12.552 4.5 12 4.5 11.448 4.052 11 3.5 11 2.948 11 2.5 11.448 2.5 12 2.5 12.552 2.948 13 3.5 13Z"/>
  </svg>
);
