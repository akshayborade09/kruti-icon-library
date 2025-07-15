import React from 'react';
import { IconProps } from '../types';

const IconChevronBottom16: React.FC<IconProps> = ({ 
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
      <path d="M13.3334 6L9.41431 9.91912C8.63326 10.7002 7.36693 10.7002 6.58588 9.91912L2.66675 6"    />
    </svg>
  );
};

IconChevronBottom16.displayName = 'IconChevronBottom16';

export default IconChevronBottom16;
