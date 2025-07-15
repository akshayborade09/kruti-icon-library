import React from 'react';
import { IconProps } from '../types';

const IconThumbsUp201: React.FC<IconProps> = ({ 
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
      <path d="M5.83333 9.16667H3.33333C2.8731 9.16667 2.5 9.53976 2.5 10V15.8333C2.5 16.2936 2.8731 16.6667 3.33333 16.6667H5.83333M5.83333 9.16667V16.6667M5.83333 9.16667L9.16667 2.5H9.67968C10.7025 2.5 11.484 3.4128 11.3265 4.42342L10.8468 7.5H15.0526C16.5676 7.5 17.7344 8.83671 17.5297 10.3378L16.9615 14.5044C16.7926 15.7432 15.7346 16.6667 14.4844 16.6667H5.83333"   />
    </svg>
  );
};

IconThumbsUp201.displayName = 'IconThumbsUp201';

export default IconThumbsUp201;
