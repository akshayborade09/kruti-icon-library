import React from 'react';
import { IconProps } from '../types';

const IconShieldCheck320: React.FC<IconProps> = ({ 
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
      <path d="M7.50004 10L9.16671 11.6667L12.5 8.33333M8.99799 2.52173L4.83133 4.34464C3.92136 4.74275 3.33337 5.64179 3.33337 6.63504V10.8333C3.33337 14.5152 6.31814 17.5 10 17.5C13.6819 17.5 16.6667 14.5152 16.6667 10.8333V6.63504C16.6667 5.64179 16.0787 4.74275 15.1688 4.34464L11.0021 2.52173C10.3633 2.24225 9.63679 2.24225 8.99799 2.52173Z"    />
    </svg>
  );
};

IconShieldCheck320.displayName = 'IconShieldCheck320';

export default IconShieldCheck320;
