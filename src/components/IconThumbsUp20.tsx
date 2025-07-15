import React from 'react';
import { IconProps } from '../types';

const IconThumbsUp20: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16663 1.66667C8.85098 1.66667 8.56243 1.84501 8.42127 2.12733L5.31826 8.33334H3.33329C2.41282 8.33334 1.66663 9.07953 1.66663 10V15.8333C1.66663 16.7538 2.41282 17.5 3.33329 17.5H14.4844C16.1513 17.5 17.5619 16.2687 17.7872 14.617L18.3553 10.4504C18.6283 8.44895 17.0725 6.66667 15.0526 6.66667H11.8201L12.1498 4.5518C12.3862 3.03586 11.2139 1.66667 9.67964 1.66667H9.16663ZM4.99996 15.8333V10H3.33329V15.8333H4.99996Z" />
    </svg>
  );
};

IconThumbsUp20.displayName = 'IconThumbsUp20';

export default IconThumbsUp20;
