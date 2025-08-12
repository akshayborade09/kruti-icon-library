import React from 'react';

const IconMapPin = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linejoin="round" d="M14.4978 10C14.4978 11.3807 13.3785 12.5 11.9978 12.5C10.6171 12.5 9.4978 11.3807 9.4978 10C9.4978 8.61929 10.6171 7.5 11.9978 7.5C13.3785 7.5 14.4978 8.61929 14.4978 10Z" /><path linejoin="round" d="M19.5 10C19.5 14.3179 15.8529 18.2059 13.6452 20.1639C12.6933 21.0082 11.3067 21.0082 10.3548 20.1639C8.14713 18.2059 4.5 14.3179 4.5 10C4.5 5.75 7.85786 2.5 12 2.5C16.1421 2.5 19.5 5.75 19.5 10Z" />
  </svg>
);

export default IconMapPin;
