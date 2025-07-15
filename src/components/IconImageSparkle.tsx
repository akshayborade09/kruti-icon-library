import React from 'react';
import { IconProps } from '../types';

const IconImageSparkle: React.FC<IconProps> = ({ 
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
      <path d="M13.5745 8.35093L14.0528 7.39443C14.237 7.0259 14.763 7.0259 14.9472 7.39443L15.4255 8.35093C15.4738 8.44769 15.5523 8.52615 15.6491 8.57454L16.6056 9.05279C16.9741 9.23705 16.9741 9.76295 16.6056 9.94721L15.6491 10.4255C15.5523 10.4738 15.4738 10.5523 15.4255 10.6491L14.9472 11.6056C14.763 11.9741 14.237 11.9741 14.0528 11.6056L13.5745 10.6491C13.5262 10.5523 13.4477 10.4738 13.3509 10.4255L12.3944 9.94721C12.0259 9.76295 12.0259 9.23705 12.3944 9.05279L13.3509 8.57454C13.4477 8.52615 13.5262 8.44769 13.5745 8.35093Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7ZM7 5C5.89543 5 5 5.89543 5 7V13.5858L5.17157 13.4142C6.73367 11.8521 9.26633 11.8521 10.8284 13.4142L16.4142 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7ZM13.5858 19L9.41421 14.8284C8.63316 14.0474 7.36684 14.0474 6.58579 14.8284L5 16.4142V17C5 18.1046 5.89543 19 7 19H13.5858Z" />
    </svg>
  );
};

IconImageSparkle.displayName = 'IconImageSparkle';

export default IconImageSparkle;
