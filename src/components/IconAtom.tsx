import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconAtom: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19.4739 4.52612C21.0463 6.09858 18.9749 10.7195 14.8472 14.8472C10.7195 18.9749 6.09858 21.0463 4.52612 19.4739C2.95366 17.9014 5.0251 13.2805 9.15281 9.15281C13.2805 5.0251 17.9014 2.95366 19.4739 4.52612Z" strokeWidth="2" />
    <path d="M19.4739 19.4739C17.9014 21.0463 13.2805 18.9749 9.15281 14.8472C5.0251 10.7195 2.95366 6.09858 4.52612 4.52612C6.09858 2.95366 10.7195 5.0251 14.8472 9.15281C18.9749 13.2805 21.0463 17.9014 19.4739 19.4739Z" strokeWidth="2" />
  </svg>
);
