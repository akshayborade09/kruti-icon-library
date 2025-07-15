import React from 'react';
import { IconProps } from '../types';

const IconArrowUp16: React.FC<IconProps> = ({ 
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
      <path d="M3.83331 6.66667L7.99997 2.5L12.1666 6.66667M7.99997 13.5V3"    />
    </svg>
  );
};

IconArrowUp16.displayName = 'IconArrowUp16';

export default IconArrowUp16;
