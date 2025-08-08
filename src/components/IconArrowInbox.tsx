import React from 'react';
import { IconProps } from '../types';

const IconArrowInbox: React.FC<IconProps> = ({ 
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
      <path d="M20 15V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V15M12 14.5V4M12 14.5L8.5 11M12 14.5L15.5 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconArrowInbox.displayName = 'IconArrowInbox';

export default IconArrowInbox;
