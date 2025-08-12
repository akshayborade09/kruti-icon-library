import React from 'react';

const IconPhone = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M9.5 20.5H14.5M8.5 22.5H15.5C17.1569 22.5 18.5 21.1569 18.5 19.5V4.5C18.5 2.84315 17.1569 1.5 15.5 1.5H8.5C6.84315 1.5 5.5 2.84315 5.5 4.5V19.5C5.5 21.1569 6.84315 22.5 8.5 22.5Z" />
  </svg>
);

export default IconPhone;
