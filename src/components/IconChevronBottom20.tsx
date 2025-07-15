import React from 'react';
import { IconProps } from '../types';

const IconChevronBottom20: React.FC<IconProps> = ({ 
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
      <path d="M16.6666 7.5L11.7677 12.3989C10.7914 13.3752 9.20848 13.3752 8.23216 12.3989L3.33325 7.5"    />
    </svg>
  );
};

IconChevronBottom20.displayName = 'IconChevronBottom20';

export default IconChevronBottom20;
