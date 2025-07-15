import React from 'react';
import { IconProps } from '../types';

const IconCirclePlaceholderOn16: React.FC<IconProps> = ({ 
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
      <path d="M14.1667 8C14.1667 11.4058 11.4058 14.1667 8.00004 14.1667C4.59428 14.1667 1.83337 11.4058 1.83337 8C1.83337 4.59424 4.59428 1.83333 8.00004 1.83333C11.4058 1.83333 14.1667 4.59424 14.1667 8Z"   />
    </svg>
  );
};

IconCirclePlaceholderOn16.displayName = 'IconCirclePlaceholderOn16';

export default IconCirclePlaceholderOn16;
