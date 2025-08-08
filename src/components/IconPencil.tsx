import React from 'react';
import { IconProps } from '../types';

const IconPencil: React.FC<IconProps> = ({ 
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
      <path d="M13.5 6L15.25 4.25001C16.4926 3.00736 18.5074 3.00736 19.75 4.25C20.9926 5.49264 20.9926 7.50736 19.75 8.75L18 10.5M13.5 6L3.29289 16.2071C3.10536 16.3946 3 16.649 3 16.9142V21H7.08579C7.351 21 7.60536 20.8946 7.79289 20.7071L18 10.5M13.5 6L18 10.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconPencil.displayName = 'IconPencil';

export default IconPencil;
