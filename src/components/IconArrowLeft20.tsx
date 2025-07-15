import React from 'react';
import { IconProps } from '../types';

const IconArrowLeft20: React.FC<IconProps> = ({ 
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
      <path d="M8.33333 5L3.33333 9.99998L8.33333 15M4.16667 9.99998H16.6667"    />
    </svg>
  );
};

IconArrowLeft20.displayName = 'IconArrowLeft20';

export default IconArrowLeft20;
