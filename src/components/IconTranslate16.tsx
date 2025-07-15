import React from 'react';
import { IconProps } from '../types';

const IconTranslate16: React.FC<IconProps> = ({ 
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
      <path d="M6.3999 2.39999H9.59991"    />
<path d="M8 2.39999L8 7.99999"    />
<path d="M5.19995 4.79999H7.59995"    />
<path d="M2.3999 2.39999H3.59991C4.26265 2.39999 4.79991 2.93725 4.79991 3.59999V3.59999C4.79991 4.26274 4.26265 4.79999 3.59991 4.79999H3.1999"    />
<path d="M3.2 4.79999H3.94502C4.85905 4.79999 5.60001 5.54095 5.60001 6.45498V6.45498C5.60001 7.3249 4.92434 8.06984 4.05581 8.02052C3.96672 8.01546 3.88068 8.00874 3.80001 7.99999C3.10116 7.92421 2 7.19999 2 7.19999"    />
<path d="M9.5625 11.4166H13.1042M14.1667 12.8333L11.957 6.98412C11.7399 6.40937 10.9268 6.40937 10.7097 6.98412L8.5 12.8333"    />
    </svg>
  );
};

IconTranslate16.displayName = 'IconTranslate16';

export default IconTranslate16;
