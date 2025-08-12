import React from 'react';

const IconPause = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linejoin="round" d="M4.5 6C4.5 4.619 5.619 3.5 7 3.5 8.381 3.5 9.5 4.619 9.5 6V18C9.5 19.381 8.381 20.5 7 20.5 5.619 20.5 4.5 19.381 4.5 18V6ZM14.5 6C14.5 4.619 15.619 3.5 17 3.5 18.381 3.5 19.5 4.619 19.5 6V18C19.5 19.381 18.381 20.5 17 20.5 15.619 20.5 14.5 19.381 14.5 18V6Z" />
  </svg>
);

export default IconPause;
