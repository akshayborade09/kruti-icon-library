import React from 'react';
import { IconProps } from '../types';

const IconDotGrid1x3Horizontal20: React.FC<IconProps> = ({ 
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
      <path d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53977 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53977 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z"    />
<path d="M16.6667 10.8333C17.1269 10.8333 17.5 10.4602 17.5 10C17.5 9.53977 17.1269 9.16667 16.6667 9.16667C16.2064 9.16667 15.8333 9.53977 15.8333 10C15.8333 10.4602 16.2064 10.8333 16.6667 10.8333Z"    />
<path d="M3.33333 10.8333C3.79357 10.8333 4.16667 10.4602 4.16667 10C4.16667 9.53977 3.79357 9.16667 3.33333 9.16667C2.8731 9.16667 2.5 9.53977 2.5 10C2.5 10.4602 2.8731 10.8333 3.33333 10.8333Z"    />
    </svg>
  );
};

IconDotGrid1x3Horizontal20.displayName = 'IconDotGrid1x3Horizontal20';

export default IconDotGrid1x3Horizontal20;
