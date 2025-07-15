import React from 'react';
import { IconProps } from '../types';

const IconChevronTop16: React.FC<IconProps> = ({ 
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
      <path d="M2.66675 9.99999L6.58586 6.08087C7.3669 5.29983 8.63323 5.29982 9.41428 6.08087L13.3334 9.99999"    />
    </svg>
  );
};

IconChevronTop16.displayName = 'IconChevronTop16';

export default IconChevronTop16;
