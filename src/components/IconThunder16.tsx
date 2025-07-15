import React from 'react';
import { IconProps } from '../types';

const IconThunder16: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_47_499)">
<path d="M12.8306 6.80327H9.61069C9.15367 6.80327 8.83159 6.35163 8.97774 5.91569L10.4944 1.39167C10.725 0.703806 9.85907 0.187001 9.37028 0.720776L2.67819 8.02874C2.2836 8.45964 2.5872 9.1571 3.16936 9.1571H6.38935C6.84131 9.1571 7.16283 9.59948 7.02606 10.0331L5.57943 14.6201C5.36227 15.3086 6.22925 15.8105 6.71115 15.2752L13.3257 7.92741C13.7148 7.49515 13.4101 6.80327 12.8306 6.80327Z"   />
</g>
<defs>
<clipPath id="clip0_47_499">
<rect width="16" height="16" />
</clipPath>
</defs>
    </svg>
  );
};

IconThunder16.displayName = 'IconThunder16';

export default IconThunder16;
