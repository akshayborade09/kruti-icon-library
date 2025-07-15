import React from 'react';
import { IconProps } from '../types';

const IconThunder20: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_47_494)">
<path d="M15.8364 8.32238H10.8287L12.8884 1.93756C13.1682 1.07019 12.0719 0.438115 11.4776 1.12414L3.54061 10.2858C3.07092 10.8279 3.45127 11.6776 4.16366 11.6776H9.17137L7.11172 18.0624C6.83192 18.9298 7.92818 19.5619 8.5225 18.8758L16.4595 9.71423C16.9292 9.17207 16.5488 8.32238 15.8364 8.32238Z"   />
</g>
<defs>
<clipPath id="clip0_47_494">
<rect width="20" height="20" />
</clipPath>
</defs>
    </svg>
  );
};

IconThunder20.displayName = 'IconThunder20';

export default IconThunder20;
