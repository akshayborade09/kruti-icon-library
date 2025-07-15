import React from 'react';
import { IconProps } from '../types';

const IconChevronLeft20: React.FC<IconProps> = ({ 
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
      <path d="M12.5 16.6667L7.60113 11.7678C6.62482 10.7915 6.62482 9.20855 7.60113 8.23224L12.5 3.33333"    />
    </svg>
  );
};

IconChevronLeft20.displayName = 'IconChevronLeft20';

export default IconChevronLeft20;
