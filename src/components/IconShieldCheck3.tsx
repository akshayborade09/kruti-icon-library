import React from 'react';
import { IconProps } from '../types';

const IconShieldCheck3: React.FC<IconProps> = ({ 
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
      <path d="M9 12L11 14L15 9.99999M10.7975 3.02606L5.79754 5.21356C4.70558 5.6913 4 6.77014 4 7.96204V13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13V7.96204C20 6.77014 19.2944 5.6913 18.2025 5.21356L13.2025 3.02606C12.4359 2.69069 11.5641 2.69069 10.7975 3.02606Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconShieldCheck3.displayName = 'IconShieldCheck3';

export default IconShieldCheck3;
