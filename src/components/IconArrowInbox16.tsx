import React from 'react';
import { IconProps } from '../types';

const IconArrowInbox16: React.FC<IconProps> = ({ 
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
      <path d="M13.5 9.83333V11.5C13.5 12.6046 12.6046 13.5 11.5 13.5H4.5C3.39543 13.5 2.5 12.6046 2.5 11.5V9.83333M7.99999 10V2.5M7.99999 10L5.66667 7.66667M7.99999 10L10.3333 7.66667"    />
    </svg>
  );
};

IconArrowInbox16.displayName = 'IconArrowInbox16';

export default IconArrowInbox16;
