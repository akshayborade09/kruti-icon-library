import React from 'react';

const IconCrossLarge = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" d="M4.5 4.5L19.5 19.5M19.5 4.5L4.5 19.5" />
  </svg>
);

export default IconCrossLarge;
