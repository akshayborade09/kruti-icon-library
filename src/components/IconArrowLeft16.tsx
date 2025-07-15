import React from 'react';
import { IconProps } from '../types';

const IconArrowLeft16: React.FC<IconProps> = ({ 
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
      <path d="M6.66667 3.83333L2.5 7.99998L6.66667 12.1667M3 7.99998H13.5"    />
    </svg>
  );
};

IconArrowLeft16.displayName = 'IconArrowLeft16';

export default IconArrowLeft16;
