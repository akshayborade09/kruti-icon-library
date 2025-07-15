import React from 'react';
import { IconProps } from '../types';

const IconMagnifyingGlass220: React.FC<IconProps> = ({ 
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
      <path d="M16.6667 16.6667L13.375 13.375M15 9.16666C15 12.3883 12.3883 15 9.16667 15C5.945 15 3.33333 12.3883 3.33333 9.16666C3.33333 5.945 5.945 3.33333 9.16667 3.33333C12.3883 3.33333 15 5.945 15 9.16666Z"   />
    </svg>
  );
};

IconMagnifyingGlass220.displayName = 'IconMagnifyingGlass220';

export default IconMagnifyingGlass220;
