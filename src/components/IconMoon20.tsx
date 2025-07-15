import React from 'react';
import { IconProps } from '../types';

const IconMoon20: React.FC<IconProps> = ({ 
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
      <path d="M10.0463 2.99976C10.2292 2.73436 10.2427 2.38727 10.0809 2.10851C9.91903 1.82975 9.61096 1.6693 9.28979 1.69651C5.02109 2.05821 1.66992 5.63644 1.66992 9.99825C1.66992 14.5998 5.40018 18.33 10.0017 18.33C14.3636 18.33 17.9419 14.9787 18.3035 10.7099C18.3307 10.3887 18.1702 10.0806 17.8914 9.91884C17.6127 9.75703 17.2656 9.77049 17.0002 9.95341C16.1951 10.5083 15.2201 10.8331 14.1667 10.8331C11.4052 10.8331 9.16667 8.59457 9.16667 5.83314C9.16667 4.77981 9.49145 3.80485 10.0463 2.99976Z" />
    </svg>
  );
};

IconMoon20.displayName = 'IconMoon20';

export default IconMoon20;
