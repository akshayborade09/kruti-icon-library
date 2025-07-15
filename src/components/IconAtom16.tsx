import React from 'react';
import { IconProps } from '../types';

const IconAtom16: React.FC<IconProps> = ({ 
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
      <path d="M13.1383 2.86171C14.2194 3.94277 12.7952 7.11964 9.95745 9.95745C7.11965 12.7952 3.94278 14.2194 2.86171 13.1383C1.78064 12.0572 3.20476 8.88036 6.04256 6.04256C8.88036 3.20475 12.0572 1.78064 13.1383 2.86171Z"  />
<path d="M13.1383 13.1383C12.0572 14.2194 8.88035 12.7952 6.04255 9.95744C3.20475 7.11964 1.78064 3.94277 2.86171 2.86171C3.94277 1.78064 7.11964 3.20475 9.95744 6.04255C12.7952 8.88036 14.2194 12.0572 13.1383 13.1383Z"  />
    </svg>
  );
};

IconAtom16.displayName = 'IconAtom16';

export default IconAtom16;
