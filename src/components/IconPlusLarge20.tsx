import React from 'react';
import { IconProps } from '../types';

const IconPlusLarge20: React.FC<IconProps> = ({ 
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
      <path d="M9.99998 3.33333V9.99999M9.99998 9.99999V16.6667M9.99998 9.99999H3.33331M9.99998 9.99999H16.6666"   />
    </svg>
  );
};

IconPlusLarge20.displayName = 'IconPlusLarge20';

export default IconPlusLarge20;
