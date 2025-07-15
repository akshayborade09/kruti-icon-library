import React from 'react';
import { IconProps } from '../types';

const IconSettingsGear116: React.FC<IconProps> = ({ 
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
      <path d="M7.00208 2.40788C7.61983 2.05221 8.38017 2.05221 8.99792 2.40788L12.4979 4.42301C13.1179 4.77996 13.5 5.44087 13.5 6.15626V9.84365C13.5 10.559 13.1179 11.22 12.4979 11.5769L8.99788 13.592C8.38015 13.9477 7.61983 13.9477 7.0021 13.5921L3.50213 11.5771C2.88213 11.2201 2.5 10.5592 2.5 9.84381L2.5 6.15625C2.5 5.44086 2.88211 4.77994 3.50208 4.42299L7.00208 2.40788Z"   />
<path d="M10.1667 7.99999C10.1667 9.19661 9.19663 10.1667 8.00002 10.1667C6.8034 10.1667 5.83335 9.19661 5.83335 7.99999C5.83335 6.80338 6.8034 5.83333 8.00002 5.83333C9.19663 5.83333 10.1667 6.80338 10.1667 7.99999Z"   />
    </svg>
  );
};

IconSettingsGear116.displayName = 'IconSettingsGear116';

export default IconSettingsGear116;
