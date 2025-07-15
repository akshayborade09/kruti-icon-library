import React from 'react';
import { IconProps } from '../types';

const IconSearchMenu20: React.FC<IconProps> = ({ 
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
      <path d="M2.5033 10H4.16996M2.5033 5.83333H5.0033M2.5033 14.1667H5.0033M16.25 13.75L18.3334 15.8333M17.5033 10C17.5033 12.7614 15.2647 15 12.5033 15C9.74187 15 7.5033 12.7614 7.5033 10C7.5033 7.23858 9.74187 5 12.5033 5C15.2647 5 17.5033 7.23858 17.5033 10Z"    />
    </svg>
  );
};

IconSearchMenu20.displayName = 'IconSearchMenu20';

export default IconSearchMenu20;
