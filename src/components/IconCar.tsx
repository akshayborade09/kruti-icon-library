import React from 'react';
import { IconProps } from '../types';

const IconCar: React.FC<IconProps> = ({ 
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
      <path d="M2 10.5L5.10147 6.23548C5.666 5.45925 6.56786 5 7.52767 5H16.4425C17.419 5 18.3343 5.47521 18.8962 6.27383L22 10.6857M2 10.5H1M2 10.5V17C2 18.1046 2.89543 19 4 19C5.10457 19 6 18.1046 6 17H18C18 18.1046 18.8954 19 20 19C21.1046 19 22 18.1046 22 17V10.6857M22 10.6857H23M6 13H8M16 13H18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconCar.displayName = 'IconCar';

export default IconCar;
