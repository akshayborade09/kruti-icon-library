import React from 'react';
import { IconProps } from '../types';

const IconBubbles20: React.FC<IconProps> = ({ 
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
      <path d="M14.1667 11.6667H15.4185C16.5691 11.6667 17.5018 10.7339 17.5018 9.58333V5.41666C17.5018 4.26607 16.5691 3.33333 15.4185 3.33333H7.9185C6.7679 3.33333 5.83516 4.26607 5.83516 5.41666V6.66666M12.0852 6.66666H4.58516C3.43457 6.66666 2.50183 7.5994 2.50183 8.75V12.9167C2.50183 14.0673 3.43457 15 4.58516 15H5.00183V17.0833L8.75183 15H12.0852C13.2358 15 14.1685 14.0673 14.1685 12.9167V8.75C14.1685 7.5994 13.2358 6.66666 12.0852 6.66666Z"    />
    </svg>
  );
};

IconBubbles20.displayName = 'IconBubbles20';

export default IconBubbles20;
