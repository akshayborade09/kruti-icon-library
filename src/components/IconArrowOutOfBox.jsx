import React from 'react';

const IconArrowOutOfBox = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M12 3.5V14.5M12 3.5L16.5 8M12 3.5L7.5 8M20.5 12.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V12.5" />
  </svg>
);

export default IconArrowOutOfBox;
