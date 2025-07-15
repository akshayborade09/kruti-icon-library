import React from 'react';
import { IconProps } from '../types';

const IconThumbsDown20: React.FC<IconProps> = ({ 
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8306 17.4127C11.5506 17.9766 10.9753 18.3333 10.3457 18.3333C8.81176 18.3333 7.64626 16.961 7.88124 15.4486L8.20988 13.3333L4.99166 13.3333C2.97386 13.3333 1.42608 11.548 1.69757 9.55001L2.26375 5.38334C2.4879 3.73376 3.89296 2.49999 5.55784 2.49999L16.6667 2.49999C17.5872 2.49999 18.3334 3.24619 18.3334 4.16666V9.99999C18.3334 10.9205 17.5872 11.6667 16.6667 11.6667H14.6834L11.8306 17.4127ZM15 9.99999H16.6667V4.16666H15L15 9.99999Z" />
    </svg>
  );
};

IconThumbsDown20.displayName = 'IconThumbsDown20';

export default IconThumbsDown20;
