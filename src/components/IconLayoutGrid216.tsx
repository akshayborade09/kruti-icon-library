import React from 'react';
import { IconProps } from '../types';

const IconLayoutGrid216: React.FC<IconProps> = ({ 
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
      <path d="M2.5 5.7C2.5 4.5799 2.5 4.01984 2.71799 3.59202C2.90973 3.21569 3.21569 2.90973 3.59202 2.71799C4.01984 2.5 4.5799 2.5 5.7 2.5H6.83333V6.83333H2.5V5.7Z"    />
<path d="M9.16667 2.5H10.3C11.4201 2.5 11.9802 2.5 12.408 2.71799C12.7843 2.90973 13.0903 3.21569 13.282 3.59202C13.5 4.01984 13.5 4.5799 13.5 5.7V6.83333H9.16667V2.5Z"    />
<path d="M2.5 9.16667H6.83333V13.5H5.7C4.5799 13.5 4.01984 13.5 3.59202 13.282C3.21569 13.0903 2.90973 12.7843 2.71799 12.408C2.5 11.9802 2.5 11.4201 2.5 10.3V9.16667Z"    />
<path d="M9.16667 9.16667H13.5V10.3C13.5 11.4201 13.5 11.9802 13.282 12.408C13.0903 12.7843 12.7843 13.0903 12.408 13.282C11.9802 13.5 11.4201 13.5 10.3 13.5H9.16667V9.16667Z"    />
    </svg>
  );
};

IconLayoutGrid216.displayName = 'IconLayoutGrid216';

export default IconLayoutGrid216;
