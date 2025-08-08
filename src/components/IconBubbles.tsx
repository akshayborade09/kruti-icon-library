import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconBubbles: React.FC<IconProps> = ({
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
    <path d="M17 14H18.5022C19.8829 14 21.0022 12.8807 21.0022 11.5V6.5C21.0022 5.11929 19.8829 4 18.5022 4H9.5022C8.12148 4 7.0022 5.11929 7.0022 6.5V8M14.5022 8H5.5022C4.12148 8 3.0022 9.11929 3.0022 10.5V15.5C3.0022 16.8807 4.12149 18 5.5022 18H6.0022V20.5L10.5022 18H14.5022C15.8829 18 17.0022 16.8807 17.0022 15.5V10.5C17.0022 9.11929 15.8829 8 14.5022 8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
