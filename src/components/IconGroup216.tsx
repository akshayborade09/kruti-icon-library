import React from 'react';
import { IconProps } from '../types';

const IconGroup216: React.FC<IconProps> = ({ 
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
      <path d="M9.33335 8.95361C11.2603 8.1533 13.618 9.02708 14.6041 11.575C15.0228 12.6567 14.064 13.6667 12.9041 13.6667H10.5M7.00002 4.66667C7.00002 5.86328 6.02997 6.83333 4.83335 6.83333C3.63673 6.83333 2.66668 5.86328 2.66668 4.66667C2.66668 3.47005 3.63673 2.5 4.83335 2.5C6.02997 2.5 7.00002 3.47005 7.00002 4.66667ZM7.09217 13.6667H2.81263C1.65268 13.6667 0.694238 12.6548 1.11327 11.5732C2.61464 7.69781 7.29015 7.69781 8.79153 11.5732C9.21056 12.6548 8.25211 13.6667 7.09217 13.6667ZM13.1667 4.66667C13.1667 5.86328 12.1966 6.83333 11 6.83333C9.8034 6.83333 8.83335 5.86328 8.83335 4.66667C8.83335 3.47005 9.8034 2.5 11 2.5C12.1966 2.5 13.1667 3.47005 13.1667 4.66667Z"    />
    </svg>
  );
};

IconGroup216.displayName = 'IconGroup216';

export default IconGroup216;
