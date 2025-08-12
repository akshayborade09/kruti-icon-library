import React from 'react';

const IconThumbsUpYesPro = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linejoin="round" d="M6.5 10.5H3.5C2.94772 10.5 2.5 10.9477 2.5 11.5V19.5C2.5 20.0523 2.94772 20.5 3.5 20.5H6.5M6.5 10.5L10.7608 3.00575C10.9386 2.69311 11.2705 2.5 11.6302 2.5H11.6605C12.8891 2.5 13.8273 3.59737 13.6362 4.81101L13.0161 8.75H18.4462C20.3042 8.75 21.7155 10.4217 21.4037 12.2534L20.425 18.0034C20.1795 19.4453 18.9301 20.5 17.4675 20.5H6.5M6.5 10.5V20.5" />
  </svg>
);

export default IconThumbsUpYesPro;
