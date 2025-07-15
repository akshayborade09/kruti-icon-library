import React from 'react';
import { IconProps } from '../types';

const IconSquareBehindSquare220: React.FC<IconProps> = ({ 
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
      <path d="M7.5 12.5V15.625C7.5 16.6605 8.33947 17.5 9.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625V9.375C17.5 8.33947 16.6605 7.5 15.625 7.5H12.5M10.625 12.5H4.375C3.33947 12.5 2.5 11.6605 2.5 10.625V4.375C2.5 3.33947 3.33947 2.5 4.375 2.5H10.625C11.6605 2.5 12.5 3.33947 12.5 4.375V10.625C12.5 11.6605 11.6605 12.5 10.625 12.5Z"    />
    </svg>
  );
};

IconSquareBehindSquare220.displayName = 'IconSquareBehindSquare220';

export default IconSquareBehindSquare220;
