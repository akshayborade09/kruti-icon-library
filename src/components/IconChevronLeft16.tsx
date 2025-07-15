import React from 'react';
import { IconProps } from '../types';

const IconChevronLeft16: React.FC<IconProps> = ({ 
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
      <path d="M10 13.3333L6.08091 9.41423C5.29986 8.63318 5.29985 7.36685 6.0809 6.5858L10 2.66667"    />
    </svg>
  );
};

IconChevronLeft16.displayName = 'IconChevronLeft16';

export default IconChevronLeft16;
