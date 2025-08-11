import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconSun: React.FC<IconProps> = ({
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
    <path d="M12.5 1.5a.5.5 0 1 0-1 0v2a.5.5 0 0 0 1 0zm10 11a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm-2.722 7.278a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707m0-14.849a.5.5 0 0 0-.707-.707l-1.414 1.414a.5.5 0 1 0 .707.707zM12 20a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5m-8.5-7.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm2.843-6.157a.5.5 0 0 1-.707 0L4.22 4.93a.5.5 0 1 1 .708-.707l1.414 1.414a.5.5 0 0 1 0 .707m.001 12.02a.5.5 0 1 0-.707-.707L4.22 19.07a.5.5 0 1 0 .708.707zm9.9-10.607a6 6 0 1 0-8.486 8.486 6 6 0 0 0 8.486-8.486" />
  </svg>
);
