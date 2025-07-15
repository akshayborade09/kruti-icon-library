import React from 'react';
import { IconProps } from '../types';

const IconFoodExperiences16: React.FC<IconProps> = ({ 
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
      <path d="M6.23325 3H6.33325H6.43325M6.83325 3C6.83325 3.27614 6.60939 3.5 6.33325 3.5C6.05711 3.5 5.83325 3.27614 5.83325 3C5.83325 2.72386 6.05711 2.5 6.33325 2.5C6.60939 2.5 6.83325 2.72386 6.83325 3Z"    />
<path d="M8 12.8333C12.125 12.8333 13.5 10.5778 13.5 10.5778V10.5H2.5V10.5778C2.5 10.5778 3.875 12.8333 8 12.8333Z"    />
<path d="M6.5 13.5H9.5"    />
<path d="M9.83325 4.5L10.8333 2.5L11.8333 4.5L13.8333 5.5L11.8333 6.5L10.8333 8.5L9.83325 6.5L7.83325 5.5L9.83325 4.5Z"    />
<path d="M4.19897 5.90852C4.31993 6.15043 4.51664 6.34616 4.75854 6.46712L5.15601 6.66634L4.75854 6.86555C4.54684 6.97141 4.36969 7.13496 4.2478 7.33626L4.19897 7.42513L3.99976 7.82259L3.80054 7.42513L3.75171 7.33626C3.62983 7.13509 3.45354 6.97135 3.24194 6.86555L2.84351 6.66634L3.24194 6.46712C3.48373 6.34618 3.6796 6.15031 3.80054 5.90852L3.99976 5.51009L4.19897 5.90852Z"    />
    </svg>
  );
};

IconFoodExperiences16.displayName = 'IconFoodExperiences16';

export default IconFoodExperiences16;
