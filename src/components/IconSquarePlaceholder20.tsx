import React from 'react';
import { IconProps } from '../types';

const IconSquarePlaceholder20: React.FC<IconProps> = ({ 
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
      <path d="M16.6667 11.8667V8.13333C16.6667 6.45317 16.6667 5.61309 16.3397 4.97136C16.0521 4.40687 15.5931 3.94793 15.0286 3.66031C14.3869 3.33333 13.5468 3.33333 11.8667 3.33333H8.13333C6.45317 3.33333 5.61309 3.33333 4.97136 3.66031C4.40687 3.94793 3.94793 4.40687 3.66031 4.97136C3.33333 5.61309 3.33333 6.45317 3.33333 8.13332V11.8667C3.33333 13.5468 3.33333 14.3869 3.66031 15.0286C3.94793 15.5931 4.40687 16.0521 4.97136 16.3397C5.61309 16.6667 6.45317 16.6667 8.13332 16.6667H11.8667C13.5468 16.6667 14.3869 16.6667 15.0286 16.3397C15.5931 16.0521 16.0521 15.5931 16.3397 15.0286C16.6667 14.3869 16.6667 13.5468 16.6667 11.8667Z"    />
    </svg>
  );
};

IconSquarePlaceholder20.displayName = 'IconSquarePlaceholder20';

export default IconSquarePlaceholder20;
