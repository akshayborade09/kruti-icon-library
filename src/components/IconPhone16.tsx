import React from 'react';
import { IconProps } from '../types';

const IconPhone16: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 3.16667C3.33337 1.78596 4.45266 0.666672 5.83337 0.666672H10.1667C11.5474 0.666672 12.6667 1.78596 12.6667 3.16667V12.8333C12.6667 14.214 11.5474 15.3333 10.1667 15.3333H5.83337C4.45266 15.3333 3.33337 14.214 3.33337 12.8333V3.16667ZM6.50004 12.3333C6.2239 12.3333 6.00004 12.5572 6.00004 12.8333C6.00004 13.1095 6.2239 13.3333 6.50004 13.3333H9.50004C9.77618 13.3333 10 13.1095 10 12.8333C10 12.5572 9.77618 12.3333 9.50004 12.3333H6.50004Z" />
    </svg>
  );
};

IconPhone16.displayName = 'IconPhone16';

export default IconPhone16;
