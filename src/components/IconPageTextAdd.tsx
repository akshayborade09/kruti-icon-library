import React from 'react';
import { IconProps } from '../types';

const IconPageTextAdd: React.FC<IconProps> = ({ 
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
      <path d="M11 21H8C6.34315 21 5 19.6569 5 18V6C5 4.34315 6.34315 3 8 3H16C17.6569 3 19 4.34315 19 6V11M18 15V18M18 18V21M18 18H15M18 18H21M9 7H15M9 11H11"    />
    </svg>
  );
};

IconPageTextAdd.displayName = 'IconPageTextAdd';

export default IconPageTextAdd;
