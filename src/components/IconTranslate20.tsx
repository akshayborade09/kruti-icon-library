import React from 'react';
import { IconProps } from '../types';

const IconTranslate20: React.FC<IconProps> = ({ 
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
      <path d="M11.9531 14.2708H16.3802M17.7083 16.0416L14.9462 8.73016C14.6748 8.01172 13.6585 8.01172 13.3871 8.73016L10.625 16.0416"    />
<path d="M10 3L10 10"    />
<path d="M6.5 6H9.5"    />
<path d="M8 3H12"    />
<path d="M3 3H4.50001C5.32844 3 6.00001 3.67157 6.00001 4.5V4.5C6.00001 5.32843 5.32844 6 4.50001 6H4"    />
<path d="M4 6H4.93128C6.07381 6 7.00002 6.9262 7.00002 8.06874V8.06874C7.00002 9.15614 6.15542 10.0873 5.06976 10.0257C4.9584 10.0193 4.85085 10.0109 4.75001 10C3.87645 9.90528 2.5 9 2.5 9"    />
    </svg>
  );
};

IconTranslate20.displayName = 'IconTranslate20';

export default IconTranslate20;
