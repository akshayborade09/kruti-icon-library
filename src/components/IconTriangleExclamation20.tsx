import React from 'react';
import { IconProps } from '../types';

const IconTriangleExclamation20: React.FC<IconProps> = ({ 
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
      <path d="M10 7.40384V9.93269M10 12.5H10.0083M7.90185 3.69378L2.87627 11.9694C1.85329 13.654 3.03671 15.8333 4.97442 15.8333H15.0256C16.9633 15.8333 18.1467 13.654 17.1237 11.9694L12.0981 3.69378C11.1315 2.10207 8.86846 2.10207 7.90185 3.69378ZM10.2083 12.5C10.2083 12.6151 10.1151 12.7083 10 12.7083C9.88494 12.7083 9.79167 12.6151 9.79167 12.5C9.79167 12.3849 9.88494 12.2917 10 12.2917C10.1151 12.2917 10.2083 12.3849 10.2083 12.5Z"   />
    </svg>
  );
};

IconTriangleExclamation20.displayName = 'IconTriangleExclamation20';

export default IconTriangleExclamation20;
