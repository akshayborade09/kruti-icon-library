import React from 'react';

const IconArrowRotateCounterClockwise = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M3.99805 14.8333C5.16492 18.1347 8.31343 20.5 12.0144 20.5C16.7088 20.5 20.5144 16.6944 20.5144 12C20.5144 7.30558 16.7088 3.5 12.0144 3.5C8.95923 3.5 6.97053 4.87481 5.00022 7.1988M4.50022 3.75V6.75C4.50022 7.30228 4.94794 7.75 5.50022 7.75H8.50022" />
  </svg>
);

export default IconArrowRotateCounterClockwise;
