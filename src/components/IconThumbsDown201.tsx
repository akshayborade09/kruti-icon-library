import React from 'react';
import { IconProps } from '../types';

const IconThumbsDown201: React.FC<IconProps> = ({ 
  size = 20, 
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
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M14.1667 10.8333H16.5C17.0523 10.8333 17.5 10.3856 17.5 9.83333V4.33333C17.5 3.78105 17.0523 3.33333 16.5 3.33333H14.1667M14.1667 10.8333L14.1667 3.33333M14.1667 10.8333L11.0842 17.0421C10.9449 17.3226 10.6588 17.5 10.3456 17.5V17.5C9.32639 17.5 8.54764 16.5872 8.70465 15.5766L9.18264 12.5L4.99162 12.5C3.482 12.5 2.3193 11.1633 2.52327 9.66222L3.08946 5.49555C3.25777 4.25684 4.31203 3.33333 5.5578 3.33333L14.1667 3.33333"   />
    </svg>
  );
};

IconThumbsDown201.displayName = 'IconThumbsDown201';

export default IconThumbsDown201;
