import React from 'react';
import { IconProps } from '../types';

const IconMapPin20: React.FC<IconProps> = ({ 
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
      <path d="M12.0815 8.33333C12.0815 9.48393 11.1487 10.4167 9.99813 10.4167C8.84753 10.4167 7.91479 9.48393 7.91479 8.33333C7.91479 7.18274 8.84753 6.25 9.99813 6.25C11.1487 6.25 12.0815 7.18274 12.0815 8.33333Z"   />
<path d="M15.8333 8.33333C15.8333 11.6651 13.1235 14.7134 11.3977 16.317C10.5982 17.0599 9.40168 17.0599 8.60219 16.317C6.87642 14.7134 4.16663 11.6651 4.16663 8.33333C4.16663 5.11167 6.7783 2.5 9.99996 2.5C13.2216 2.5 15.8333 5.11167 15.8333 8.33333Z"   />
    </svg>
  );
};

IconMapPin20.displayName = 'IconMapPin20';

export default IconMapPin20;
