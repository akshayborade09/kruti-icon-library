import React from 'react';
import { IconProps } from '../types';

const IconChevronRight: React.FC<IconProps> = ({ 
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
      <path d="M9 4L14.8787 9.87866C16.0503 11.0502 16.0503 12.9497 14.8787 14.1213L9 20"    />
    </svg>
  );
};

IconChevronRight.displayName = 'IconChevronRight';

export default IconChevronRight;
