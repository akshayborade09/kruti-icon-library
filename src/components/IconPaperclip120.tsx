import React from 'react';
import { IconProps } from '../types';

const IconPaperclip120: React.FC<IconProps> = ({ 
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
      <path d="M5 9.16667V12.5C5 15.2614 7.23858 17.5 10 17.5C12.7614 17.5 15 15.2614 15 12.5V5.83333C15 3.99238 13.5076 2.5 11.6667 2.5C9.82572 2.5 8.33333 3.99238 8.33333 5.83333V12.5C8.33333 13.4205 9.07953 14.1667 10 14.1667C10.9205 14.1667 11.6667 13.4205 11.6667 12.5V5.83333"   />
    </svg>
  );
};

IconPaperclip120.displayName = 'IconPaperclip120';

export default IconPaperclip120;
