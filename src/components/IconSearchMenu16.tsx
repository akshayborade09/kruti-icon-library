import React from 'react';
import { IconProps } from '../types';

const IconSearchMenu16: React.FC<IconProps> = ({ 
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
      <path d="M1.83337 8H3.50004M1.83337 4.49999H4.16671M1.83337 11.5H4.16671M13 11L14.8334 12.8333M14.1667 8C14.1667 10.3012 12.3012 12.1667 10 12.1667C7.69885 12.1667 5.83337 10.3012 5.83337 8C5.83337 5.69881 7.69885 3.83333 10 3.83333C12.3012 3.83333 14.1667 5.69881 14.1667 8Z"    />
    </svg>
  );
};

IconSearchMenu16.displayName = 'IconSearchMenu16';

export default IconSearchMenu16;
