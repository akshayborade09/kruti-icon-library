import React from 'react';
import { IconProps } from '../types';

const IconGlobus16: React.FC<IconProps> = ({ 
  size = 16, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M7.99992 14.1667C11.4057 14.1667 14.1666 11.4058 14.1666 8C14.1666 4.59424 11.4057 1.83333 7.99992 1.83333M7.99992 14.1667C4.59416 14.1667 1.83325 11.4058 1.83325 8C1.83325 4.59424 4.59416 1.83333 7.99992 1.83333M7.99992 14.1667C6.43511 14.1667 5.16659 11.4058 5.16659 8C5.16659 4.59424 6.43511 1.83333 7.99992 1.83333M7.99992 14.1667C9.56473 14.1667 10.8333 11.4058 10.8333 8C10.8333 4.59424 9.56473 1.83333 7.99992 1.83333M13.9999 8H1.99992"   />
    </svg>
  );
};

IconGlobus16.displayName = 'IconGlobus16';

export default IconGlobus16;
