import React from 'react';

const IconMagnifyingGlass2 = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M20.5 20.5L16.3 16.3M18.5 11C18.5 15.1421 15.1421 18.5 11 18.5C6.85786 18.5 3.5 15.1421 3.5 11C3.5 6.85786 6.85786 3.5 11 3.5C15.1421 3.5 18.5 6.85786 18.5 11Z" />
  </svg>
);

export default IconMagnifyingGlass2;
