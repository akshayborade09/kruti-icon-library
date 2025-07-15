import React from 'react';
import { IconProps } from '../types';

const IconPaperclip116: React.FC<IconProps> = ({ 
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
      <path d="M3.83331 7.16666V10.1667C3.83331 12.3758 5.62417 14.1667 7.83331 14.1667H8.16665C10.3758 14.1667 12.1666 12.3758 12.1666 10.1667V4.66666C12.1666 3.10185 10.8981 1.83333 9.33331 1.83333C7.76851 1.83333 6.49998 3.10185 6.49998 4.66666V9.91666C6.49998 10.6991 7.13424 11.3333 7.91665 11.3333C8.69905 11.3333 9.33331 10.6991 9.33331 9.91666V5.16666"   />
    </svg>
  );
};

IconPaperclip116.displayName = 'IconPaperclip116';

export default IconPaperclip116;
