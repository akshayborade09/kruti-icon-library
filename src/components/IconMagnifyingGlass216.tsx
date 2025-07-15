import React from 'react';
import { IconProps } from '../types';

const IconMagnifyingGlass216: React.FC<IconProps> = ({ 
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
      <path d="M13.3333 13.3333L10.751 10.751M10.751 10.751C11.6257 9.87635 12.1667 8.66802 12.1667 7.33333C12.1667 4.66396 10.0027 2.5 7.33333 2.5C4.66396 2.5 2.5 4.66396 2.5 7.33333C2.5 10.0027 4.66396 12.1667 7.33333 12.1667C8.66802 12.1667 9.87635 11.6257 10.751 10.751Z"    />
    </svg>
  );
};

IconMagnifyingGlass216.displayName = 'IconMagnifyingGlass216';

export default IconMagnifyingGlass216;
