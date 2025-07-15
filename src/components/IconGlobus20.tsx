import React from 'react';
import { IconProps } from '../types';

const IconGlobus20: React.FC<IconProps> = ({ 
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
      <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5M17.5 10H2.5M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10M10 17.5C8.15905 17.5 6.66667 14.1421 6.66667 10C6.66667 5.85786 8.15905 2.5 10 2.5M10 17.5C11.8409 17.5 13.3333 14.1421 13.3333 10C13.3333 5.85786 11.8409 2.5 10 2.5M2.5 10C2.5 5.85786 5.85786 2.5 10 2.5"   />
    </svg>
  );
};

IconGlobus20.displayName = 'IconGlobus20';

export default IconGlobus20;
