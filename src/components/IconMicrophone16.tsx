import React from 'react';
import { IconProps } from '../types';

const IconMicrophone16: React.FC<IconProps> = ({ 
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
      <path d="M7.99997 12.6667C10.0503 12.6667 11.8124 11.4326 12.5839 9.66666M7.99997 12.6667C5.94965 12.6667 4.18757 11.4326 3.41602 9.66666M7.99997 12.6667V14.1667M7.99997 10.5C6.43516 10.5 5.16664 9.23147 5.16664 7.66666V4.66666C5.16664 3.10185 6.43516 1.83333 7.99997 1.83333C9.56478 1.83333 10.8333 3.10185 10.8333 4.66666V7.66666C10.8333 9.23147 9.56478 10.5 7.99997 10.5Z"    />
    </svg>
  );
};

IconMicrophone16.displayName = 'IconMicrophone16';

export default IconMicrophone16;
