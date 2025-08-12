import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconVolumeFull: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15.8892 8.11133C16.8845 9.10663 17.5001 10.4816 17.5001 12.0004C17.5001 13.5192 16.8845 14.8942 15.8892 15.8895M19.4246 4.57544C21.3247 6.47557 22.4999 9.10057 22.4999 12.0001C22.4999 14.8996 21.3247 17.5246 19.4246 19.4247M3.5 7.5H5.31976C5.76084 7.5 6.18956 7.35418 6.53918 7.08525L10.8903 3.73824C11.5479 3.23238 12.5 3.70119 12.5 4.53086V19.4691C12.5 20.2988 11.5479 20.7676 10.8903 20.2618L6.53918 16.9148C6.18956 16.6458 5.76084 16.5 5.31976 16.5H3.5C2.39543 16.5 1.5 15.6046 1.5 14.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5Z"/>
  </svg>
);
