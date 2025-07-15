import React from 'react';
import { IconProps } from '../types';

const IconCar20: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_4_1449)">
<path d="M1.66659 8.75L4.25114 5.19624C4.72158 4.54938 5.47314 4.16667 6.27298 4.16667H13.702C14.5157 4.16667 15.2785 4.56268 15.7467 5.22819L18.3333 8.90477M1.66659 8.75H0.833252M1.66659 8.75V14.1667C1.66659 15.0871 2.41278 15.8333 3.33325 15.8333C4.25373 15.8333 4.99992 15.0871 4.99992 14.1667H14.9999C14.9999 15.0871 15.7461 15.8333 16.6666 15.8333C17.5871 15.8333 18.3333 15.0871 18.3333 14.1667V8.90477M18.3333 8.90477H19.1666M4.99992 10.8333H6.66658M13.3333 10.8333H14.9999"    />
</g>
<defs>
<clipPath id="clip0_4_1449">
<rect width="20" height="20" />
</clipPath>
</defs>
    </svg>
  );
};

IconCar20.displayName = 'IconCar20';

export default IconCar20;
