import React from 'react';

const IconChevronBottom = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M20 9L14.1213 14.8787C12.9498 16.0503 11.0503 16.0503 9.8787 14.8787L4 9" />
  </svg>
);

export default IconChevronBottom;
