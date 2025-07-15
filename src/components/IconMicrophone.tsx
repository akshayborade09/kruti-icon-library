import React from 'react';
import { IconProps } from '../types';

const IconMicrophone: React.FC<IconProps> = ({ 
  size = 24, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M12 19V21M12 19C8.32179 19 6.14683 16.7451 5.01434 15M12 19C15.6782 19 17.8532 16.7451 18.9857 15M16 7V11C16 13.2091 14.2092 15 12 15C9.79087 15 8.00001 13.2091 8.00001 11V7C8.00001 4.79086 9.79087 3 12 3C14.2092 3 16 4.79086 16 7Z"    />
    </svg>
  );
};

IconMicrophone.displayName = 'IconMicrophone';

export default IconMicrophone;
