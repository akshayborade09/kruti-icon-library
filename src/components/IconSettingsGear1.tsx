import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconSettingsGear1: React.FC<IconProps> = ({
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
    <path d="M10.5293 3.82729C11.4425 3.31361 12.5576 3.31361 13.4708 3.82729L18.4708 6.63977C19.4155 7.17112 20.0001 8.17067 20.0001 9.2545L20.0001 14.7454C20.0001 15.8292 19.4155 16.8288 18.4708 17.3601L13.4707 20.1726C12.5575 20.6863 11.4425 20.6863 10.5293 20.1726L5.52935 17.3604C4.58466 16.8291 4.00004 15.8295 4.00004 14.7456L4.00004 9.25448C4.00004 8.17065 4.58463 7.17109 5.52927 6.63974L10.5293 3.82729Z" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M10.5292 3.82728C11.4425 3.3136 12.5575 3.3136 13.4708 3.82728L18.4708 6.63975C19.4154 7.17111 20 8.17066 20 9.25449V14.7454C20 15.8292 19.4154 16.8288 18.4708 17.3601L13.4707 20.1726C12.5575 20.6863 11.4425 20.6863 10.5293 20.1726L5.52931 17.3604C4.58463 16.8291 4 15.8295 4 14.7456L4 9.25447C4 8.17064 4.58459 7.17108 5.52924 6.63973L10.5292 3.82728Z" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M15 12C15 13.6568 13.6569 15 12 15C10.3432 15 9.00003 13.6568 9.00003 12C9.00003 10.3431 10.3432 8.99999 12 8.99999C13.6569 8.99999 15 10.3431 15 12Z" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);
