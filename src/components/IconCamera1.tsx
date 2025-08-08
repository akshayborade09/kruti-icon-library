import React from 'react';
import { IconProps } from '../types';

const IconCamera1: React.FC<IconProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ariaHidden = true,
  title,
  ...props 
}) => {
  const svgProps = {
    ...props,
    width: size,
    height: size,
    fill: "none",
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M3 17V9.93125C3 8.31236 4.31236 7 5.93125 7C6.91132 7 7.82654 6.51019 8.37019 5.69472L8.6094 5.3359C9.1658 4.5013 10.1025 4 11.1056 4H12.8944C13.8975 4 14.8342 4.5013 15.3906 5.3359L15.6298 5.69472C16.1735 6.51019 17.0887 7 18.0688 7C19.6876 7 21 8.31236 21 9.93124V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17Z" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
  );
};

IconCamera1.displayName = 'IconCamera1';

export default IconCamera1;
