import React from 'react';

const IconPageTextAdd = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M12.5 21.5H7.5C5.84315 21.5 4.5 20.1569 4.5 18.5V5.5C4.5 3.84315 5.84315 2.5 7.5 2.5H16.5C18.1569 2.5 19.5 3.84315 19.5 5.5V12.5M18.5 15.5V18.5M18.5 18.5V21.5M18.5 18.5H15.5M18.5 18.5H21.5M7.5 6.5H14.5M7.5 10.5H11.5" />
  </svg>
);

export default IconPageTextAdd;
