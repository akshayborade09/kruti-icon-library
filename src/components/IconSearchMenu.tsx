import React from 'react';
import { IconProps } from '../types';

const IconSearchMenu: React.FC<IconProps> = ({ 
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
      <path d="M3.00391 12H5.00391M3.00391 7H6.00391M3.00391 17H6.00391M19.5 16.5L22 19M21.0039 12C21.0039 15.3137 18.3176 18 15.0039 18C11.6902 18 9.00391 15.3137 9.00391 12C9.00391 8.68629 11.6902 6 15.0039 6C18.3176 6 21.0039 8.68629 21.0039 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconSearchMenu.displayName = 'IconSearchMenu';

export default IconSearchMenu;
