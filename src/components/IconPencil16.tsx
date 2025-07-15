import React from 'react';
import { IconProps } from '../types';

const IconPencil16: React.FC<IconProps> = ({ 
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
      <path d="M8.83334 4.16666L10.1667 2.83333C10.9951 2.0049 12.3382 2.0049 13.1667 2.83333C13.9951 3.66175 13.9951 5.0049 13.1667 5.83333L11.8333 7.16666M8.83334 4.16666L2.22386 10.7761C1.97381 11.0262 1.83334 11.3653 1.83334 11.7189V14.1667H4.28105C4.63467 14.1667 4.97381 14.0262 5.22386 13.7761L11.8333 7.16666M8.83334 4.16666L11.8333 7.16666"    />
    </svg>
  );
};

IconPencil16.displayName = 'IconPencil16';

export default IconPencil16;
