import React from 'react';
import { IconProps } from '../types';

const IconArrowOutOfBox16: React.FC<IconProps> = ({ 
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
      <path d="M7.99999 2.5V10M7.99999 2.5L11 5.5M7.99999 2.5L5 5.5M13.5 8.5V11.5C13.5 12.6046 12.6046 13.5 11.5 13.5H4.5C3.39543 13.5 2.5 12.6046 2.5 11.5V8.5"    />
    </svg>
  );
};

IconArrowOutOfBox16.displayName = 'IconArrowOutOfBox16';

export default IconArrowOutOfBox16;
