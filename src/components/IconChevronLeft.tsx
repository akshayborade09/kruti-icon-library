import React from 'react';
import { IconProps } from '../types';

const IconChevronLeft: React.FC<IconProps> = ({ 
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
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M15 20L9.12136 14.1213C7.94978 12.9498 7.94978 11.0503 9.12135 9.8787L15 4"    />
    </svg>
  );
};

IconChevronLeft.displayName = 'IconChevronLeft';

export default IconChevronLeft;
