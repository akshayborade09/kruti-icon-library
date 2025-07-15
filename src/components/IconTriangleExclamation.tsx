import React from 'react';
import { IconProps } from '../types';

const IconTriangleExclamation: React.FC<IconProps> = ({ 
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
      <path d="M12 8.8846V11.9192M12 15H12.01M9.48223 4.43254L3.45153 14.3633C2.22395 16.3848 3.64405 19 5.9693 19H18.0307C20.3559 19 21.7761 16.3848 20.5485 14.3633L14.5178 4.43254C13.3578 2.52249 10.6422 2.52249 9.48223 4.43254ZM12.25 15C12.25 15.1381 12.1381 15.25 12 15.25C11.8619 15.25 11.75 15.1381 11.75 15C11.75 14.8619 11.8619 14.75 12 14.75C12.1381 14.75 12.25 14.8619 12.25 15Z"   />
    </svg>
  );
};

IconTriangleExclamation.displayName = 'IconTriangleExclamation';

export default IconTriangleExclamation;
