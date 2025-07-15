import React from 'react';
import { IconProps } from '../types';

const IconPeople220: React.FC<IconProps> = ({ 
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
      <path d="M3.33325 16.6667V15.8333C3.33325 13.9924 4.82564 12.5 6.66659 12.5H13.3333C15.1742 12.5 16.6666 13.9924 16.6666 15.8333V16.6667M13.7499 6.25C13.7499 8.32107 12.071 10 9.99992 10C7.92885 10 6.24992 8.32107 6.24992 6.25C6.24992 4.17893 7.92885 2.5 9.99992 2.5C12.071 2.5 13.7499 4.17893 13.7499 6.25Z"   />
    </svg>
  );
};

IconPeople220.displayName = 'IconPeople220';

export default IconPeople220;
