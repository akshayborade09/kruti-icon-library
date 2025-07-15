import React from 'react';
import { IconProps } from '../types';

const IconThumbsUp1: React.FC<IconProps> = ({ 
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
      <path d="M7 11H4C3.44772 11 3 11.4477 3 12V19C3 19.5523 3.44772 20 4 20H7M7 11V20M7 11L11 3H11.6156C12.843 3 13.7808 4.09535 13.5917 5.3081L13.0161 9H18.0631C19.8811 9 21.2813 10.6041 21.0356 12.4053L20.3538 17.4053C20.1511 18.8918 18.8815 20 17.3813 20H7"   />
    </svg>
  );
};

IconThumbsUp1.displayName = 'IconThumbsUp1';

export default IconThumbsUp1;
