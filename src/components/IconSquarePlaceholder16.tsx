import React from 'react';
import { IconProps } from '../types';

const IconSquarePlaceholder16: React.FC<IconProps> = ({ 
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
      <path d="M13.5 8.7V7.3C13.5 5.61984 13.5 4.77976 13.173 4.13803C12.8854 3.57354 12.4265 3.1146 11.862 2.82698C11.2202 2.5 10.3802 2.5 8.7 2.5H7.3C5.61984 2.5 4.77976 2.5 4.13803 2.82698C3.57354 3.1146 3.1146 3.57354 2.82698 4.13803C2.5 4.77976 2.5 5.61984 2.5 7.3V8.7C2.5 10.3802 2.5 11.2202 2.82698 11.862C3.1146 12.4265 3.57354 12.8854 4.13803 13.173C4.77976 13.5 5.61984 13.5 7.3 13.5H8.7C10.3802 13.5 11.2202 13.5 11.862 13.173C12.4265 12.8854 12.8854 12.4265 13.173 11.862C13.5 11.2202 13.5 10.3802 13.5 8.7Z"    />
    </svg>
  );
};

IconSquarePlaceholder16.displayName = 'IconSquarePlaceholder16';

export default IconSquarePlaceholder16;
