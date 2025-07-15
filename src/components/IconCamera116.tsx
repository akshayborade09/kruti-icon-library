import React from 'react';
import { IconProps } from '../types';

const IconCamera116: React.FC<IconProps> = ({ 
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
      <path d="M3.83337 4.5H3.92967C4.59838 4.5 5.22284 4.1658 5.59377 3.6094L5.73964 3.3906C6.11057 2.8342 6.73504 2.5 7.40374 2.5H8.59634C9.26505 2.5 9.88951 2.8342 10.2604 3.3906L10.4063 3.6094C10.7772 4.1658 11.4017 4.5 12.0704 4.5H12.1667C13.2713 4.5 14.1667 5.39543 14.1667 6.5V11.5C14.1667 12.6046 13.2713 13.5 12.1667 13.5H3.83337C2.7288 13.5 1.83337 12.6046 1.83337 11.5V6.5C1.83337 5.39543 2.7288 4.5 3.83337 4.5Z"    />
<path d="M10.1667 8.66667C10.1667 9.86328 9.19666 10.8333 8.00004 10.8333C6.80342 10.8333 5.83337 9.86328 5.83337 8.66667C5.83337 7.47005 6.80342 6.5 8.00004 6.5C9.19666 6.5 10.1667 7.47005 10.1667 8.66667Z"    />
    </svg>
  );
};

IconCamera116.displayName = 'IconCamera116';

export default IconCamera116;
