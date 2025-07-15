import React from 'react';
import { IconProps } from '../types';

const IconBubbles16: React.FC<IconProps> = ({ 
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
      <path d="M11.5 9.5H12.5015C13.422 9.5 14.1682 8.75381 14.1682 7.83333V4.16667C14.1682 3.24619 13.422 2.5 12.5015 2.5H6.33484C5.41436 2.5 4.66817 3.24619 4.66817 4.16667V5.16667M9.83484 5.16667H3.50151C2.58103 5.16667 1.83484 5.91286 1.83484 6.83333V10.5C1.83484 11.4205 2.58103 12.1667 3.50151 12.1667H4.00151V13.8333L7.00151 12.1667H9.83484C10.7553 12.1667 11.5015 11.4205 11.5015 10.5V6.83333C11.5015 5.91286 10.7553 5.16667 9.83484 5.16667Z"    />
    </svg>
  );
};

IconBubbles16.displayName = 'IconBubbles16';

export default IconBubbles16;
