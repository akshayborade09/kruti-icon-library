import React from 'react';

const IconPlusLarge = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M12 3.5V12M12 12V20.5M12 12H3.5M12 12H20.5" />
  </svg>
);

export default IconPlusLarge;
