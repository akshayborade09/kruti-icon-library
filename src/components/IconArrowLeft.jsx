import React from 'react';

const IconArrowLeft = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M10 5.5L3.5 12L10 18.5M4 12H20.5" />
  </svg>
);

export default IconArrowLeft;
