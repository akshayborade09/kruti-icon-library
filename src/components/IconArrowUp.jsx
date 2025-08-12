import React from 'react';

const IconArrowUp = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M5.5 10L12 3.5M12 3.5L18.5 10M12 3.5V20.5" />
  </svg>
);

export default IconArrowUp;
