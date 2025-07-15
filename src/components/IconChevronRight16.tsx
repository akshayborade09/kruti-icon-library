import React from 'react';
import { IconProps } from '../types';

const IconChevronRight16: React.FC<IconProps> = ({ 
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
      <path d="M6 2.66667L9.91912 6.58578C10.7002 7.36683 10.7002 8.63316 9.91912 9.41421L6 13.3333"    />
    </svg>
  );
};

IconChevronRight16.displayName = 'IconChevronRight16';

export default IconChevronRight16;
