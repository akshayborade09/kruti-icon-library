import React from 'react';

const IconThumbsDownActive = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path rule="evenodd" d="M14.1967 20.8952C13.8607 21.572 13.1703 22 12.4147 22C10.5741 22 9.17547 20.3533 9.45744 18.5384L9.85181 16H5.98994C3.56858 16 1.71124 13.8576 2.03703 11.46L2.71645 6.46001C2.98543 4.48052 4.67151 3 6.66936 3L20 3C21.1046 3 22 3.89543 22 5L22 12C22 13.1046 21.1046 14 20 14H17.62L14.1967 20.8952ZM18 12H20L20 5H18L18 12Z" />
  </svg>
);

export default IconThumbsDownActive;
