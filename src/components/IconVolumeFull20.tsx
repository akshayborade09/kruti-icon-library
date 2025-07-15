import React from 'react';
import { IconProps } from '../types';

const IconVolumeFull20: React.FC<IconProps> = ({ 
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
      <path d="M15.8926 4.10807C17.4006 5.61611 18.3333 7.69944 18.3333 10.0006C18.3333 12.3018 17.4006 14.3852 15.8926 15.8932M13.2409 6.75944C14.0704 7.58886 14.5834 8.73469 14.5834 10.0003C14.5834 11.266 14.0704 12.4118 13.2409 13.2413M3.33335 6.66667H4.3966C4.7865 6.66667 5.16405 6.52997 5.46358 6.28037L8.6332 3.63902C9.17597 3.18671 10 3.57267 10 4.2792V15.7208C10 16.4273 9.17597 16.8133 8.6332 16.361L5.46358 13.7196C5.16405 13.47 4.7865 13.3333 4.3966 13.3333H3.33335C2.41288 13.3333 1.66669 12.5871 1.66669 11.6667V8.33333C1.66669 7.41286 2.41288 6.66667 3.33335 6.66667Z"    />
    </svg>
  );
};

IconVolumeFull20.displayName = 'IconVolumeFull20';

export default IconVolumeFull20;
