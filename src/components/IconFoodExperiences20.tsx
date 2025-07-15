import React from 'react';
import { IconProps } from '../types';

const IconFoodExperiences20: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_4_1446)">
<path d="M7.83333 3.74999H7.91667H8M8.33333 3.74999C8.33333 3.98011 8.14679 4.16666 7.91667 4.16666C7.68655 4.16666 7.5 3.98011 7.5 3.74999C7.5 3.51988 7.68655 3.33333 7.91667 3.33333C8.14679 3.33333 8.33333 3.51988 8.33333 3.74999Z"    />
<path d="M12 19C18 19 20 16 20 16H4C4 16 6 19 12 19Z"    />
<path d="M10 20H14"    />
<path d="M12.3611 5.69444L13.5417 3.33333L14.7222 5.69444L17.0833 6.875L14.7222 8.05555L13.5417 10.4167L12.3611 8.05555L10 6.875L12.3611 5.69444Z"    />
<path d="M5.14233 7.52051C5.28749 7.81073 5.52299 8.04629 5.81323 8.19141L6.09741 8.33301L5.81323 8.47559C5.55926 8.60257 5.34718 8.79857 5.20093 9.04004L5.14233 9.14648L4.99976 9.43066L4.85815 9.14648L4.79956 9.04004C4.65333 8.79855 4.44121 8.6026 4.18726 8.47559L3.90308 8.33301L4.18726 8.19141C4.47753 8.04626 4.71301 7.81078 4.85815 7.52051L4.99976 7.23633L5.14233 7.52051Z"    />
</g>
<defs>
<clipPath id="clip0_4_1446">
<rect width="20" height="20" />
</clipPath>
</defs>
    </svg>
  );
};

IconFoodExperiences20.displayName = 'IconFoodExperiences20';

export default IconFoodExperiences20;
