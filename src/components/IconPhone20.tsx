import React from 'react';
import { IconProps } from '../types';

const IconPhone20: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16663 4.16666C4.16663 2.32571 5.65901 0.833328 7.49996 0.833328H12.5C14.3409 0.833328 15.8333 2.32571 15.8333 4.16666V15.8333C15.8333 17.6743 14.3409 19.1667 12.5 19.1667H7.49996C5.65901 19.1667 4.16663 17.6743 4.16663 15.8333V4.16666ZM8.33329 15C7.87306 15 7.49996 15.3731 7.49996 15.8333C7.49996 16.2936 7.87306 16.6667 8.33329 16.6667H11.6666C12.1269 16.6667 12.5 16.2936 12.5 15.8333C12.5 15.3731 12.1269 15 11.6666 15H8.33329Z" />
    </svg>
  );
};

IconPhone20.displayName = 'IconPhone20';

export default IconPhone20;
