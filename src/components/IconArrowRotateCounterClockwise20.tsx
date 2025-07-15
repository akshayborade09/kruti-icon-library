import React from 'react';
import { IconProps } from '../types';

const IconArrowRotateCounterClockwise20: React.FC<IconProps> = ({ 
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
      <path d="M3.73608 12.2222C4.65128 14.8115 7.1207 16.6667 10.0234 16.6667C13.7053 16.6667 16.6901 13.6819 16.6901 9.99999C16.6901 6.3181 13.7053 3.33333 10.0234 3.33333C7.62036 3.33333 6.05853 4.41778 4.50885 6.24999M4.16647 3.33333V5.83333C4.16647 6.29357 4.53957 6.66666 4.99981 6.66666H7.49981"    />
    </svg>
  );
};

IconArrowRotateCounterClockwise20.displayName = 'IconArrowRotateCounterClockwise20';

export default IconArrowRotateCounterClockwise20;
