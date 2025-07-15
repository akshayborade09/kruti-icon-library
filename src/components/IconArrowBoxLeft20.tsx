import React from 'react';
import { IconProps } from '../types';

const IconArrowBoxLeft20: React.FC<IconProps> = ({ 
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
      <path d="M9.37504 16.6667H5.83337C4.45266 16.6667 3.33337 15.5474 3.33337 14.1667L3.33337 5.83333C3.33337 4.45262 4.45266 3.33333 5.83337 3.33333L9.37504 3.33333M16.6667 9.99999L7.29171 9.99999M16.6667 9.99999L12.9167 13.75M16.6667 9.99999L12.9167 6.25"    />
    </svg>
  );
};

IconArrowBoxLeft20.displayName = 'IconArrowBoxLeft20';

export default IconArrowBoxLeft20;
