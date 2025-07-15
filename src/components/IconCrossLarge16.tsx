import React from 'react';
import { IconProps } from '../types';

const IconCrossLarge16: React.FC<IconProps> = ({ 
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
      <path d="M3.16666 3.16667L12.8333 12.8333M12.8333 3.16667L3.16666 12.8333"   />
    </svg>
  );
};

IconCrossLarge16.displayName = 'IconCrossLarge16';

export default IconCrossLarge16;
