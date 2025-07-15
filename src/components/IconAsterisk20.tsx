import React from 'react';
import { IconProps } from '../types';

const IconAsterisk20: React.FC<IconProps> = ({ 
  size = 20, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M9.99833 2.5V17.5M3.50314 6.25L16.4935 13.75M3.50256 13.75L16.4929 6.25"   />
    </svg>
  );
};

IconAsterisk20.displayName = 'IconAsterisk20';

export default IconAsterisk20;
