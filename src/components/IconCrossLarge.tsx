import React from 'react';
import { IconProps } from '../types';

const IconCrossLarge: React.FC<IconProps> = ({ 
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
      <path d="M5 5L19 19M19 5L5 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

IconCrossLarge.displayName = 'IconCrossLarge';

export default IconCrossLarge;
