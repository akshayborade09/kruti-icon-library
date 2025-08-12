import React from 'react';

const IconTriangleExclamation = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path linecap="round" d="M12.0001 8.99999V13.5M12.0001 16H12.0101M9.46363 4.51606L2.9066 14.898C1.64496 16.8956 3.08041 19.5 5.44307 19.5H18.5571C20.9198 19.5 22.3552 16.8956 21.0936 14.898L14.5366 4.51606C13.3593 2.65203 10.6409 2.65204 9.46363 4.51606ZM12.2501 16C12.2501 16.1381 12.1382 16.25 12.0001 16.25C11.862 16.25 11.7501 16.1381 11.7501 16C11.7501 15.8619 11.862 15.75 12.0001 15.75C12.1382 15.75 12.2501 15.8619 12.2501 16Z" />
  </svg>
);

export default IconTriangleExclamation;
