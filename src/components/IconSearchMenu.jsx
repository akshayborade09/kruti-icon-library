import React from 'react';

const IconSearchMenu = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M2.5 12H5.5M2.5 6.5H6.5M2.5 17.5H6.5M19.75 16.75L22.5 19.5M21.5 12C21.5 15.5899 18.5899 18.5 15 18.5C11.4101 18.5 8.5 15.5899 8.5 12C8.5 8.41015 11.4101 5.5 15 5.5C18.5899 5.5 21.5 8.41015 21.5 12Z" />
  </svg>
);

export default IconSearchMenu;
