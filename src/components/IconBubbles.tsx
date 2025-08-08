import React from 'react';
import { IconProps } from '../types';

const IconBubbles: React.FC<IconProps> = ({ 
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
      <path d="M17 14H18.5022C19.8829 14 21.0022 12.8807 21.0022 11.5V6.5C21.0022 5.11929 19.8829 4 18.5022 4H9.5022C8.12148 4 7.0022 5.11929 7.0022 6.5V8M14.5022 8H5.5022C4.12148 8 3.0022 9.11929 3.0022 10.5V15.5C3.0022 16.8807 4.12149 18 5.5022 18H6.0022V20.5L10.5022 18H14.5022C15.8829 18 17.0022 16.8807 17.0022 15.5V10.5C17.0022 9.11929 15.8829 8 14.5022 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconBubbles.displayName = 'IconBubbles';

export default IconBubbles;
