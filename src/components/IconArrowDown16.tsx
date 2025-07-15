import React from 'react';
import { IconProps } from '../types';

const IconArrowDown16: React.FC<IconProps> = ({ 
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
      <path d="M12.1667 9.33333L8.00002 13.5L3.83334 9.33333M8.00002 13V2.5"    />
    </svg>
  );
};

IconArrowDown16.displayName = 'IconArrowDown16';

export default IconArrowDown16;
