import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconTranslate: React.FC<IconProps> = ({
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
    <path d="M14.3438 17.1249H19.6563M21.25 19.2499L17.9355 10.4762C17.6098 9.61406 16.3902 9.61406 16.0645 10.4762L12.75 19.2499" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3.60001L12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.80005 7.20001H11.4001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.6001 3.60001H14.4001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.6001 3.60001H5.40011C6.39422 3.60001 7.20011 4.40589 7.20011 5.40001V5.40001C7.20011 6.39412 6.39422 7.20001 5.40011 7.20001H4.8001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.8 7.20001H5.91754C7.28857 7.20001 8.40002 8.31146 8.40002 9.6825V9.6825C8.40002 10.9874 7.38651 12.1048 6.08371 12.0308C5.95008 12.0232 5.82102 12.0131 5.70001 12C4.65173 11.8863 3 10.8 3 10.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
