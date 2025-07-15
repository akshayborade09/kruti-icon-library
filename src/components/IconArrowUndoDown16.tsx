import React from 'react';
import { IconProps } from '../types';

const IconArrowUndoDown16: React.FC<IconProps> = ({ 
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
      <path d="M4.16664 12.6667L2.20708 10.7071C1.81655 10.3166 1.81655 9.68341 2.20708 9.29289L4.16664 7.33333M2.66664 10H11.0833C12.7862 10 14.1666 8.61954 14.1666 6.91666C14.1666 5.21378 12.7862 3.83333 11.0833 3.83333H7.8333"    />
    </svg>
  );
};

IconArrowUndoDown16.displayName = 'IconArrowUndoDown16';

export default IconArrowUndoDown16;
