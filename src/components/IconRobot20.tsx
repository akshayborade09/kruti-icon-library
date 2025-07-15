import React from 'react';
import { IconProps } from '../types';

const IconRobot20: React.FC<IconProps> = ({ 
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
      <path d="M7.49998 8.33333C7.49998 8.56345 7.31343 8.75 7.08331 8.75C6.85319 8.75 6.66665 8.56345 6.66665 8.33333M7.49998 8.33333C7.49998 8.10321 7.31343 7.91667 7.08331 7.91667C6.85319 7.91667 6.66665 8.10321 6.66665 8.33333M7.49998 8.33333H6.66665M13.3333 8.33333C13.3333 8.56345 13.1468 8.75 12.9166 8.75C12.6865 8.75 12.5 8.56345 12.5 8.33333M13.3333 8.33333C13.3333 8.10321 13.1468 7.91667 12.9166 7.91667C12.6865 7.91667 12.5 8.10321 12.5 8.33333M13.3333 8.33333H12.5M9.99998 4.16667V2.5M2.91665 7.5C2.45641 7.5 2.08331 7.8731 2.08331 8.33333C2.08331 8.79357 2.45641 9.16667 2.91665 9.16667M17.0833 7.5C17.5435 7.5 17.9166 7.8731 17.9166 8.33333C17.9166 8.79357 17.5435 9.16667 17.0833 9.16667M8.33331 12.0833H11.6666M2.91665 13.3333V6.66667C2.91665 5.28595 4.03593 4.16667 5.41665 4.16667H14.5833C15.964 4.16667 17.0833 5.28595 17.0833 6.66667V13.3333C17.0833 14.714 15.964 15.8333 14.5833 15.8333H5.41665C4.03593 15.8333 2.91665 14.714 2.91665 13.3333Z"    />
    </svg>
  );
};

IconRobot20.displayName = 'IconRobot20';

export default IconRobot20;
