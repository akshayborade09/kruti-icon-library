import React from 'react';
import { IconProps } from '../types';

const IconSquareBehindSquare216: React.FC<IconProps> = ({ 
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
      <path d="M5.83334 10.1667V12.6667C5.83334 13.4951 6.50492 14.1667 7.33334 14.1667H12.6667C13.4951 14.1667 14.1667 13.4951 14.1667 12.6667V7.33334C14.1667 6.50491 13.4951 5.83334 12.6667 5.83334H10.1667M8.66668 10.1667H3.33334C2.50492 10.1667 1.83334 9.4951 1.83334 8.66667V3.33334C1.83334 2.50491 2.50492 1.83334 3.33334 1.83334H8.66668C9.4951 1.83334 10.1667 2.50491 10.1667 3.33334V8.66667C10.1667 9.4951 9.4951 10.1667 8.66668 10.1667Z"    />
    </svg>
  );
};

IconSquareBehindSquare216.displayName = 'IconSquareBehindSquare216';

export default IconSquareBehindSquare216;
