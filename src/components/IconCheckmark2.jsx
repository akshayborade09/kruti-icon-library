import React from 'react';

const IconCheckmark2 = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" d="M2.5 15.5L9.20588 20.5L21.5 3.5" />
  </svg>
);

export default IconCheckmark2;
