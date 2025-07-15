import React from 'react';
import { IconProps } from '../types';

const IconArrowUndoDown: React.FC<IconProps> = ({ 
  size = 24, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M6.50002 19L3.56068 16.0607C2.97489 15.4749 2.97489 14.5251 3.56068 13.9393L6.50002 11M4.00002 15H16.5C18.9853 15 21 12.9853 21 10.5C21 8.01472 18.9853 6 16.5 6H12"    />
    </svg>
  );
};

IconArrowUndoDown.displayName = 'IconArrowUndoDown';

export default IconArrowUndoDown;
