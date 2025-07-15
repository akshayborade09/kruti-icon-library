import React from 'react';
import { IconProps } from '../types';

const IconArrowBoxLeft16: React.FC<IconProps> = ({ 
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
      <path d="M13.5 7.99999L6 7.99999M13.5 7.99999L10.5 11M13.5 7.99999L10.5 5M7.5 13.5H4.5C3.39543 13.5 2.5 12.6046 2.5 11.5L2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5L7.5 2.5"    />
    </svg>
  );
};

IconArrowBoxLeft16.displayName = 'IconArrowBoxLeft16';

export default IconArrowBoxLeft16;
