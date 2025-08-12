import React from 'react';

const IconTrashCan = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M5 5.5L5.40918 18.5937C5.45979 20.2133 6.78734 21.5 8.40771 21.5H15.5923C17.2127 21.5 18.5402 20.2133 18.5908 18.5937L19 5.5M5 5.5H19M5 5.5H2.5M19 5.5H21.5M9.5 10.5V16.5M14.5 10.5V16.5M15.874 5.5C15.43 3.77477 13.8639 2.5 12 2.5C10.1362 2.5 8.57008 3.77477 8.12604 5.5" />
  </svg>
);

export default IconTrashCan;
