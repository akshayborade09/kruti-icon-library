import React from 'react';
import { IconProps } from '../types';

const IconArrowRotateCounterClockwise16: React.FC<IconProps> = ({ 
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
      <path d="M2.8269 9.83333C3.58194 11.9695 5.61921 13.5 8.01394 13.5C11.0515 13.5 13.5139 11.0376 13.5139 8C13.5139 4.96243 11.0515 2.5 8.01394 2.5C6.13584 2.5 4.88057 3.30292 3.66661 4.6726M3.16661 2.66667V4.66667C3.16661 5.03486 3.46509 5.33333 3.83328 5.33333H5.83328"    />
    </svg>
  );
};

IconArrowRotateCounterClockwise16.displayName = 'IconArrowRotateCounterClockwise16';

export default IconArrowRotateCounterClockwise16;
