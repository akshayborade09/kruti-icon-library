import React from 'react';
import { IconProps } from '../types';

const IconPencil201: React.FC<IconProps> = ({ 
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
      <path d="M11.25 5L12.7083 3.54167C13.7439 2.50613 15.4228 2.50613 16.4583 3.54166C17.4939 4.5772 17.4939 6.25613 16.4583 7.29166L15 8.75M11.25 5L2.74408 13.5059C2.5878 13.6622 2.5 13.8742 2.5 14.0952V17.5H5.90482C6.12584 17.5 6.3378 17.4122 6.49408 17.2559L15 8.75M11.25 5L15 8.75"    />
    </svg>
  );
};

IconPencil201.displayName = 'IconPencil201';

export default IconPencil201;
