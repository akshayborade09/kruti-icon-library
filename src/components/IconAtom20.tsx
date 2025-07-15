import React from 'react';
import { IconProps } from '../types';

const IconAtom20: React.FC<IconProps> = ({ 
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
      <path d="M16.2282 3.77176C17.5386 5.08215 15.8124 8.9329 12.3726 12.3727C8.93288 15.8124 5.08213 17.5386 3.77175 16.2282C2.46136 14.9178 4.18756 11.0671 7.62732 7.62733C11.0671 4.18758 14.9178 2.46138 16.2282 3.77176Z"  />
<path d="M16.2282 16.2282C14.9178 17.5386 11.0671 15.8124 7.62732 12.3727C4.18756 8.9329 2.46136 5.08214 3.77174 3.77176C5.08213 2.46137 8.93288 4.18757 12.3726 7.62733C15.8124 11.0671 17.5386 14.9178 16.2282 16.2282Z"  />
    </svg>
  );
};

IconAtom20.displayName = 'IconAtom20';

export default IconAtom20;
