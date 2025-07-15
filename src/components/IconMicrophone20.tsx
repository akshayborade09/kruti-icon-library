import React from 'react';
import { IconProps } from '../types';

const IconMicrophone20: React.FC<IconProps> = ({ 
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
      <path d="M9.99998 15.8333V17.5M9.99998 15.8333C6.9348 15.8333 5.12233 13.9543 4.17859 12.5M9.99998 15.8333C13.0652 15.8333 14.8776 13.9543 15.8214 12.5M13.3333 5.83333V9.16667C13.3333 11.0076 11.8409 12.5 9.99998 12.5C8.15903 12.5 6.66665 11.0076 6.66665 9.16667V5.83333C6.66665 3.99238 8.15903 2.5 9.99998 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"    />
    </svg>
  );
};

IconMicrophone20.displayName = 'IconMicrophone20';

export default IconMicrophone20;
