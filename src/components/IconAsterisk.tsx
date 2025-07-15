import React from 'react';
import { IconProps } from '../types';

const IconAsterisk: React.FC<IconProps> = ({ 
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
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M11.998 3V21M4.20382 7.5L19.7923 16.5M4.20312 16.5L19.7916 7.5"   />
    </svg>
  );
};

IconAsterisk.displayName = 'IconAsterisk';

export default IconAsterisk;
