import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconImageSparkle: React.FC<IconProps> = ({
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
    <path d="m16.5 20.5-7.086-7.086a2 2 0 0 0-2.828 0L3.5 16.5m3 4h11a3 3 0 0 0 3-3v-11a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3Zm8-13.5-.833 1.667L12 9.5l1.667.833L14.5 12l.833-1.667L17 9.5l-1.667-.833z" strokeLinejoin="round" />
  </svg>
);
