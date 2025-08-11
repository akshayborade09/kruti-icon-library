import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconChevronTop: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 15L9.87866 9.12133C11.0502 7.94975 12.9497 7.94975 14.1213 9.12132L20 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
