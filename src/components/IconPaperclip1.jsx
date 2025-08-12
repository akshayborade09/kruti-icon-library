import React from 'react';

const IconPaperclip1 = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" d="M5.5 10.5V15.5C5.5 18.8137 8.18629 21.5 11.5 21.5C14.8137 21.5 17.5 18.8137 17.5 15.5V6.5C17.5 4.29086 15.7091 2.5 13.5 2.5C11.2909 2.5 9.5 4.29086 9.5 6.5V15.5C9.5 16.6046 10.3954 17.5 11.5 17.5C12.6046 17.5 13.5 16.6046 13.5 15.5V7.5" />
  </svg>
);

export default IconPaperclip1;
