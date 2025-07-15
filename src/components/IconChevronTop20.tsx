import React from 'react';
import { IconProps } from '../types';

const IconChevronTop20: React.FC<IconProps> = ({ 
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
      <path d="M3.33325 12.5L8.23214 7.6011C9.20845 6.62479 10.7914 6.62479 11.7677 7.6011L16.6666 12.5"    />
    </svg>
  );
};

IconChevronTop20.displayName = 'IconChevronTop20';

export default IconChevronTop20;
