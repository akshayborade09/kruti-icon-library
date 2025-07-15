import React from 'react';
import { IconProps } from '../types';

const IconArrowRotateCounterClockwise: React.FC<IconProps> = ({ 
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
      <path d="M4.4834 14.6667C5.58163 17.7738 8.54493 20 12.0282 20C16.4465 20 20.0282 16.4183 20.0282 12C20.0282 7.58172 16.4465 4 12.0282 4C9.14453 4 7.27034 5.30135 5.41072 7.5M4.99986 4V7C4.99986 7.55228 5.44758 8 5.99986 8H8.99986"    />
    </svg>
  );
};

IconArrowRotateCounterClockwise.displayName = 'IconArrowRotateCounterClockwise';

export default IconArrowRotateCounterClockwise;
