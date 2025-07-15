import React from 'react';
import { IconProps } from '../types';

const IconArrowsRepeatCircle16: React.FC<IconProps> = ({ 
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
      <path d="M7.16668 15L9.50001 12.8333L7.16668 10.6667M8.83334 5.33333L6.50001 3.16667L8.83334 1M7.16668 3.16667H9.33334C12.0027 3.16667 14.1667 5.33062 14.1667 8C14.1667 9.45664 13.5223 10.7628 12.5031 11.6489M8.83334 12.8333H6.66668C3.9973 12.8333 1.83334 10.6694 1.83334 8C1.83334 6.54305 2.47798 5.23667 3.49759 4.35052"    />
    </svg>
  );
};

IconArrowsRepeatCircle16.displayName = 'IconArrowsRepeatCircle16';

export default IconArrowsRepeatCircle16;
