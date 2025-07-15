import React from 'react';
import { IconProps } from '../types';

const IconThumbsDown161: React.FC<IconProps> = ({ 
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
      <path d="M11.5014 8.83333H13.1667C13.719 8.83333 14.1667 8.38562 14.1667 7.83333V3.5C14.1667 2.94772 13.719 2.5 13.1667 2.5H11.5014M11.5014 2.5V8.66667L8.8573 13.802C8.74199 14.0259 8.51121 14.1667 8.25932 14.1667V14.1667C7.44147 14.1667 6.81659 13.4364 6.94258 12.6279L7.32613 10.1667H3.83273C2.60891 10.1667 1.6724 9.0763 1.85651 7.86578L2.4142 4.19912C2.56281 3.22198 3.40254 2.5 4.39041 2.5H11.5014Z"   />
    </svg>
  );
};

IconThumbsDown161.displayName = 'IconThumbsDown161';

export default IconThumbsDown161;
