import React from 'react';
import { IconProps } from '../types';

const IconThunder: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_47_428)">
<path d="M19.0037 9.98686H12.9944L15.466 2.32508C15.8017 1.28423 14.4862 0.525745 13.773 1.34898L4.24869 12.3429C3.68506 12.9935 4.14148 14.0131 4.99634 14.0131H11.0056L8.53401 21.6749C8.19825 22.7158 9.51377 23.4743 10.227 22.651L19.7513 11.6571C20.3149 11.0065 19.8585 9.98686 19.0037 9.98686Z"   />
</g>
<defs>
<clipPath id="clip0_47_428">
<rect width="24" height="24" />
</clipPath>
</defs>
    </svg>
  );
};

IconThunder.displayName = 'IconThunder';

export default IconThunder;
