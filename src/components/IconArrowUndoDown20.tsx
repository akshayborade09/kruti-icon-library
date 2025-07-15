import React from 'react';
import { IconProps } from '../types';

const IconArrowUndoDown20: React.FC<IconProps> = ({ 
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
      <path d="M5.41664 15.8333L2.96719 13.3839C2.47903 12.8957 2.47904 12.1043 2.96719 11.6161L5.41664 9.16667M3.33331 12.5H13.75C15.821 12.5 17.5 10.8211 17.5 8.75C17.5 6.67893 15.821 5 13.75 5H9.99997"    />
    </svg>
  );
};

IconArrowUndoDown20.displayName = 'IconArrowUndoDown20';

export default IconArrowUndoDown20;
