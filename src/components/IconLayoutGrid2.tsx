import React from 'react';
import { IconProps } from '../types';

const IconLayoutGrid2: React.FC<IconProps> = ({ 
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
      <path d="M4 8.8C4 7.11984 4 6.27976 4.32698 5.63803C4.6146 5.07354 5.07354 4.6146 5.63803 4.32698C6.27976 4 7.11984 4 8.8 4H10V10H4V8.8Z"    />
<path d="M14 4H15.2C16.8802 4 17.7202 4 18.362 4.32698C18.9265 4.6146 19.3854 5.07354 19.673 5.63803C20 6.27976 20 7.11984 20 8.8V10H14V4Z"    />
<path d="M4 14H10V20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z"    />
<path d="M14 14H20V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H14V14Z"    />
    </svg>
  );
};

IconLayoutGrid2.displayName = 'IconLayoutGrid2';

export default IconLayoutGrid2;
