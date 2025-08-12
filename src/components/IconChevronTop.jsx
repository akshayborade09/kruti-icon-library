import React from 'react';

const IconChevronTop = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" linejoin="round" d="M4 15L9.87866 9.12133C11.0502 7.94975 12.9497 7.94975 14.1213 9.12132L20 15" />
  </svg>
);

export default IconChevronTop;
