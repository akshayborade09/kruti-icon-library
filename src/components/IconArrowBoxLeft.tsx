import React from 'react';
import { IconProps } from '../types';

const IconArrowBoxLeft: React.FC<IconProps> = ({ 
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
      <path d="M11.25 20H7C5.34315 20 4 18.6569 4 17L4 7C4 5.34315 5.34315 4 7 4L11.25 4M20 12L8.75 12M20 12L15.5 16.5M20 12L15.5 7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconArrowBoxLeft.displayName = 'IconArrowBoxLeft';

export default IconArrowBoxLeft;
