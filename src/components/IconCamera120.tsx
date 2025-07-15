import React from 'react';
import { IconProps } from '../types';

const IconCamera120: React.FC<IconProps> = ({ 
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
      <path d="M2.5 14.1667V8.27603C2.5 6.92696 3.59364 5.83333 4.9427 5.83333C5.75943 5.83333 6.52212 5.42515 6.97516 4.74559L7.1745 4.44658C7.63816 3.75108 8.41874 3.33333 9.25463 3.33333H10.7454C11.5813 3.33333 12.3618 3.75108 12.8255 4.44658L13.0248 4.74559C13.4779 5.42515 14.2406 5.83333 15.0573 5.83333C16.4064 5.83333 17.5 6.92696 17.5 8.27603V14.1667C17.5 15.5474 16.3807 16.6667 15 16.6667H5C3.61929 16.6667 2.5 15.5474 2.5 14.1667Z"    />
<path d="M12.5 10.8333C12.5 12.214 11.3807 13.3333 10 13.3333C8.61929 13.3333 7.5 12.214 7.5 10.8333C7.5 9.45262 8.61929 8.33333 10 8.33333C11.3807 8.33333 12.5 9.45262 12.5 10.8333Z"    />
    </svg>
  );
};

IconCamera120.displayName = 'IconCamera120';

export default IconCamera120;
