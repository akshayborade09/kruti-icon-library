import React from 'react';
import { IconProps } from '../types';

const IconMapPin16: React.FC<IconProps> = ({ 
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
      <path d="M9.83329 6.66666C9.83329 7.67918 9.01248 8.5 7.99996 8.5C6.98744 8.5 6.16663 7.67918 6.16663 6.66666C6.16663 5.65414 6.98744 4.83333 7.99996 4.83333C9.01248 4.83333 9.83329 5.65414 9.83329 6.66666Z"   />
<path d="M12.8333 6.66666C12.8333 9.45147 10.5485 11.9973 9.12066 13.3164C8.47936 13.9089 7.52056 13.9089 6.87926 13.3164C5.45147 11.9973 3.16663 9.45147 3.16663 6.66666C3.16663 3.99729 5.33058 1.83333 7.99996 1.83333C10.6693 1.83333 12.8333 3.99729 12.8333 6.66666Z"   />
    </svg>
  );
};

IconMapPin16.displayName = 'IconMapPin16';

export default IconMapPin16;
