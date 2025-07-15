import React from 'react';
import { IconProps } from '../types';

const IconChevronTop: React.FC<IconProps> = ({ 
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
      <path d="M4 15L9.87866 9.12133C11.0502 7.94975 12.9497 7.94975 14.1213 9.12132L20 15"    />
    </svg>
  );
};

IconChevronTop.displayName = 'IconChevronTop';

export default IconChevronTop;
