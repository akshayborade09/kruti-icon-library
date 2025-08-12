import React from 'react';

const IconMinusLarge = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" d="M3.5 12H20.5" />
  </svg>
);

export default IconMinusLarge;
