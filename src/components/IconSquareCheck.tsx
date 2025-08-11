import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconSquareCheck: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#000" fill-rule="evenodd" d="M8.278 3h7.444c.822 0 1.469 0 1.99.043.53.043.974.133 1.377.338a3.5 3.5 0 0 1 1.53 1.53c.205.403.295.847.338 1.378.043.52.043 1.168.043 1.989v7.444c0 .822 0 1.469-.043 1.99-.043.53-.133.974-.338 1.377a3.5 3.5 0 0 1-1.53 1.53c-.403.205-.847.295-1.378.338-.52.043-1.167.043-1.989.043H8.278c-.821 0-1.468 0-1.99-.043-.53-.043-.974-.133-1.377-.338a3.5 3.5 0 0 1-1.53-1.53c-.205-.403-.295-.847-.338-1.378C3 17.191 3 16.544 3 15.722V8.278c0-.821 0-1.468.043-1.99.043-.53.133-.974.338-1.377a3.5 3.5 0 0 1 1.53-1.53c.403-.205.847-.295 1.378-.338C6.809 3 7.457 3 8.278 3m7.572 7.104a.5.5 0 1 0-.707-.708l-4.146 4.147-1.647-1.646a.5.5 0 1 0-.707.707l2 2a.5.5 0 0 0 .707 0z" clip-rule="evenodd"/>
  </svg>
);
