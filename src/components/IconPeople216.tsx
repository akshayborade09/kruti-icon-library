import React from 'react';
import { IconProps } from '../types';

const IconPeople216: React.FC<IconProps> = ({ 
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
      <path d="M2.5 13.5V12.5C2.5 11.0272 3.69391 9.83333 5.16667 9.83333H10.8333C12.3061 9.83333 13.5 11.0272 13.5 12.5V13.5M11.1667 5C11.1667 6.7489 9.7489 8.16666 8 8.16666C6.2511 8.16666 4.83333 6.7489 4.83333 5C4.83333 3.25109 6.2511 1.83333 8 1.83333C9.7489 1.83333 11.1667 3.25109 11.1667 5Z"    />
    </svg>
  );
};

IconPeople216.displayName = 'IconPeople216';

export default IconPeople216;
