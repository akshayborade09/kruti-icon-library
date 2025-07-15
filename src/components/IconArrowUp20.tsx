import React from 'react';
import { IconProps } from '../types';

const IconArrowUp20: React.FC<IconProps> = ({ 
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
      <path d="M5 8.33333L9.99998 3.33333L15 8.33333M9.99998 4.16666V16.6667"    />
    </svg>
  );
};

IconArrowUp20.displayName = 'IconArrowUp20';

export default IconArrowUp20;
