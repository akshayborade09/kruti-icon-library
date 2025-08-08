import React from 'react';
import { IconProps } from '../types';

const IconGroup2: React.FC<IconProps> = ({ 
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
      <path d="M15.2742 13.1471C17.7475 12.5458 20.5078 13.7876 21.7955 16.8725C22.4657 18.4782 21.0208 20 19.2809 20H17M10.5 7C10.5 8.65685 9.15689 10 7.50003 10C5.84318 10 4.50003 8.65685 4.50003 7C4.50003 5.34315 5.84318 4 7.50003 4C9.15689 4 10.5 5.34315 10.5 7ZM19.5 7C19.5 8.65685 18.1569 10 16.5 10C14.8432 10 13.5 8.65685 13.5 7C13.5 5.34315 14.8432 4 16.5 4C18.1569 4 19.5 5.34315 19.5 7ZM10.2811 20H4.71895C2.97903 20 1.53438 18.4769 2.20487 16.8713C4.36044 11.7096 10.6396 11.7096 12.7952 16.8713C13.4657 18.4769 12.021 20 10.2811 20Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconGroup2.displayName = 'IconGroup2';

export default IconGroup2;
