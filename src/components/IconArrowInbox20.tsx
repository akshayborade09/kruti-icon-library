import React from 'react';
import { IconProps } from '../types';

const IconArrowInbox20: React.FC<IconProps> = ({ 
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
      <path d="M16.6666 12.5V14.1667C16.6666 15.5474 15.5474 16.6667 14.1666 16.6667H5.83331C4.4526 16.6667 3.33331 15.5474 3.33331 14.1667V12.5M9.99997 12.0833V3.33333M9.99997 12.0833L7.08331 9.16666M9.99997 12.0833L12.9166 9.16666"    />
    </svg>
  );
};

IconArrowInbox20.displayName = 'IconArrowInbox20';

export default IconArrowInbox20;
