import React from 'react';
import { IconProps } from '../types';

const IconFoodExperiences: React.FC<IconProps> = ({ 
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
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M9.4 4.5H9.5H9.6M10 4.5C10 4.77614 9.77614 5 9.5 5C9.22386 5 9 4.77614 9 4.5C9 4.22386 9.22386 4 9.5 4C9.77614 4 10 4.22386 10 4.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19C18 19 20 16 20 16H4C4 16 6 19 12 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20H14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8333 6.83333L16.25 4L17.6667 6.83333L20.5 8.25L17.6667 9.66667L16.25 12.5L14.8333 9.66667L12 8.25L14.8333 6.83333Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.36426 8.96484C6.5094 9.25513 6.74486 9.4906 7.03516 9.63574L7.76367 10L7.03516 10.3643C6.74487 10.5094 6.5094 10.7449 6.36426 11.0352L6 11.7637L5.63574 11.0352L5.57715 10.9287C5.43089 10.6873 5.2188 10.4912 4.96484 10.3643L4.23633 10L4.96484 9.63574C5.25513 9.4906 5.4906 9.25514 5.63574 8.96484L6 8.23633L6.36426 8.96484Z" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
  );
};

IconFoodExperiences.displayName = 'IconFoodExperiences';

export default IconFoodExperiences;
