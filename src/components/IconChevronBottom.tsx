import React from 'react';
import { IconProps } from '../types';

const IconChevronBottom: React.FC<IconProps> = ({ 
  size = 24, 
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
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M20 9L14.1213 14.8787C12.9498 16.0503 11.0503 16.0503 9.8787 14.8787L4 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconChevronBottom.displayName = 'IconChevronBottom';

export default IconChevronBottom;
