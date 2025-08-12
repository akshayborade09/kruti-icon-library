import React from 'react';

const IconArrowInbox = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M20.5 14.5V17.5C20.5 19.1569 19.1569 20.5 17.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5V14.5M12 15.5V3.5M12 15.5L8.5 12M12 15.5L15.5 12" />
  </svg>
);

export default IconArrowInbox;
