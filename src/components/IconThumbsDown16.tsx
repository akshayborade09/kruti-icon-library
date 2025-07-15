import React from 'react';
import { IconProps } from '../types';

const IconThumbsDown16: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0014 3V8.33333H13.5C13.5921 8.33333 13.6667 8.25871 13.6667 8.16667V3.16667C13.6667 3.07462 13.5921 3 13.5 3H12.0014ZM11.7205 9.33333H13.5C14.1444 9.33333 14.6667 8.811 14.6667 8.16667V3.16667C14.6667 2.52233 14.1444 2 13.5 2H4.39042C3.15525 2 2.10564 2.90269 1.91989 4.12393L1.36221 7.7906C1.13211 9.30343 2.30252 10.6667 3.83274 10.6667H6.74219L6.44856 12.5509C6.27537 13.6623 7.13435 14.6667 8.25933 14.6667C8.69322 14.6667 9.09879 14.4252 9.30019 14.0341L11.7205 9.33333Z" />
    </svg>
  );
};

IconThumbsDown16.displayName = 'IconThumbsDown16';

export default IconThumbsDown16;
