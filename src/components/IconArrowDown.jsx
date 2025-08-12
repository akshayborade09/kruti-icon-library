import React from 'react';

const IconArrowDown = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M18.5 14L12 20.5M12 20.5L5.5 14M12 20.5V3.5" />
  </svg>
);

export default IconArrowDown;
