import React from 'react';
import { IconProps } from '../types';

const IconPlusLarge16: React.FC<IconProps> = ({ 
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
      <path d="M8 2.5V8M8 8V13.5M8 8H2.5M8 8H13.5"    />
    </svg>
  );
};

IconPlusLarge16.displayName = 'IconPlusLarge16';

export default IconPlusLarge16;
