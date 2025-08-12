import React from 'react';

const IconSettingsGear1 = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="square" d="M10.5365 3.31781C11.446 2.80959 12.554 2.80959 13.4634 3.31781L18.9635 6.3913C19.9122 6.92148 20.5 7.92331 20.5 9.01014L20.5 14.9898C20.5 16.0766 19.9122 17.0784 18.9635 17.6086L13.4634 20.6821C12.554 21.1903 11.446 21.1903 10.5366 20.6821L5.03663 17.6089C4.08784 17.0787 3.5 16.0769 3.5 14.99L3.5 9.01012C3.5 7.92329 4.08781 6.92145 5.03655 6.39128L10.5365 3.31781Z" /><path linecap="square" d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.50003 13.933 8.50003 12C8.50003 10.067 10.067 8.50001 12 8.50001C13.933 8.50001 15.5 10.067 15.5 12Z" />
  </svg>
);

export default IconSettingsGear1;
