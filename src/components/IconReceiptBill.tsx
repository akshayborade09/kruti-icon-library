import React from 'react';
import { IconProps } from '../types';

const IconReceiptBill: React.FC<IconProps> = ({ 
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
      <path d="M9 8H15M9 12H11M19 21V6C19 4.34315 17.6569 3 16 3H8C6.34315 3 5 4.34315 5 6V21L7.33333 19L9.66667 21L12 19L14.3333 21L16.6667 19L19 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconReceiptBill.displayName = 'IconReceiptBill';

export default IconReceiptBill;
