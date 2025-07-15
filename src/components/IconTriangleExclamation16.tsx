import React from 'react';
import { IconProps } from '../types';

const IconTriangleExclamation16: React.FC<IconProps> = ({ 
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
      <path d="M8.00007 5.83333V8.49999M8.00007 10.3333V10.3267M6.29906 2.91722L2.05412 9.78139C1.23013 11.1138 2.18851 12.8333 3.75512 12.8333H12.245C13.8116 12.8333 14.77 11.1138 13.946 9.78139L9.70107 2.91722C8.91934 1.65314 7.0808 1.65314 6.29906 2.91722ZM8.16673 10.3333C8.16673 10.4254 8.09212 10.5 8.00007 10.5C7.90802 10.5 7.8334 10.4254 7.8334 10.3333C7.8334 10.2413 7.90802 10.1667 8.00007 10.1667C8.09212 10.1667 8.16673 10.2413 8.16673 10.3333Z"   />
    </svg>
  );
};

IconTriangleExclamation16.displayName = 'IconTriangleExclamation16';

export default IconTriangleExclamation16;
