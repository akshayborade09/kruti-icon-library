import React from 'react';
import { IconProps } from '../types';

const IconAsterisk16: React.FC<IconProps> = ({ 
  size = 16, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M8.00199 1.83333V14.1667M2.6615 4.91666L13.3425 11.0833M2.66215 11.0833L13.3431 4.91666"   />
    </svg>
  );
};

IconAsterisk16.displayName = 'IconAsterisk16';

export default IconAsterisk16;
