import React from 'react';
import { IconProps } from '../types';

const IconPhone: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 2.79086 6.79086 1 9 1H15C17.2091 1 19 2.79086 19 5V19C19 21.2091 17.2091 23 15 23H9C6.79086 23 5 21.2091 5 19V5ZM10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19C15 18.4477 14.5523 18 14 18H10Z" fill={color}/>
    </svg>
  );
};

IconPhone.displayName = 'IconPhone';

export default IconPhone;
