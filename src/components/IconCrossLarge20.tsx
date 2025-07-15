import React from 'react';
import { IconProps } from '../types';

const IconCrossLarge20: React.FC<IconProps> = ({ 
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
      <path d="M4.16666 4.16667L15.8333 15.8333M15.8333 4.16667L4.16666 15.8333"   />
    </svg>
  );
};

IconCrossLarge20.displayName = 'IconCrossLarge20';

export default IconCrossLarge20;
