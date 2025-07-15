import React from 'react';
import { IconProps } from '../types';

const IconShieldCheck316: React.FC<IconProps> = ({ 
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
      <path d="M5.83333 8L7.27778 9.5L10.1667 6.5M2.5 8.66667V5.81942C2.5 4.61534 3.2199 3.52792 4.32835 3.05767L6.82835 1.99706C7.57715 1.67939 8.42285 1.67939 9.17165 1.99706L11.6716 3.05767C12.7801 3.52792 13.5 4.61534 13.5 5.81942V8.66667C13.5 11.7042 11.0376 14.1667 8 14.1667C4.96243 14.1667 2.5 11.7042 2.5 8.66667Z"    />
    </svg>
  );
};

IconShieldCheck316.displayName = 'IconShieldCheck316';

export default IconShieldCheck316;
