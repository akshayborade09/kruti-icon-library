import React from 'react';
import { IconProps } from '../types';

const IconChevronRight20: React.FC<IconProps> = ({ 
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
      <path d="M7.5 3.33333L12.3989 8.23221C13.3752 9.20852 13.3752 10.7914 12.3989 11.7677L7.5 16.6667"    />
    </svg>
  );
};

IconChevronRight20.displayName = 'IconChevronRight20';

export default IconChevronRight20;
