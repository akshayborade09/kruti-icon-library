import React from 'react';
import { IconProps } from '../types';

const IconCar16: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_14_192)">
<path d="M1.5 7.16667L3.4125 4.10667C3.77798 3.52191 4.41892 3.16667 5.1085 3.16667H10.8915C11.5811 3.16667 12.222 3.52191 12.5875 4.10667L14.5 7.16667M1.5 7.16667H0.5M1.5 7.16667V11.6667C1.5 12.311 2.02233 12.8333 2.66667 12.8333C3.311 12.8333 3.83333 12.311 3.83333 11.6667V11.4524H12.1667V11.6667C12.1667 12.311 12.689 12.8333 13.3333 12.8333C13.9777 12.8333 14.5 12.311 14.5 11.6667V7.16667M14.5 7.16667H15.5M3.83333 8.69048H5.16667M10.8333 8.69048H12.1667"    />
</g>
<defs>
<clipPath id="clip0_14_192">
<rect width="16" height="16" />
</clipPath>
</defs>
    </svg>
  );
};

IconCar16.displayName = 'IconCar16';

export default IconCar16;
