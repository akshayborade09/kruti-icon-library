import React from 'react';
import { IconProps } from '../types';

const IconSquareBehindSquare2: React.FC<IconProps> = ({ 
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
      <path d="M9 15V18.75C9 19.9926 10.0074 21 11.25 21H18.75C19.9926 21 21 19.9926 21 18.75V11.25C21 10.0074 19.9926 9 18.75 9H15M12.75 15H5.25C4.00736 15 3 13.9926 3 12.75V5.25C3 4.00736 4.00736 3 5.25 3H12.75C13.9926 3 15 4.00736 15 5.25V12.75C15 13.9926 13.9926 15 12.75 15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

IconSquareBehindSquare2.displayName = 'IconSquareBehindSquare2';

export default IconSquareBehindSquare2;
