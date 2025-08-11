import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconMapPin: React.FC<IconProps> = ({
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
    <path d="M14.4978 10C14.4978 11.3807 13.3785 12.5 11.9978 12.5C10.6171 12.5 9.4978 11.3807 9.4978 10C9.4978 8.61929 10.6171 7.5 11.9978 7.5C13.3785 7.5 14.4978 8.61929 14.4978 10Z" strokeWidth="2" strokeLinejoin="round" />
    <path d="M19 10C19 13.9981 15.7482 17.6561 13.6773 19.5804C12.7179 20.4718 11.2821 20.4718 10.3227 19.5804C8.25176 17.6561 5 13.9981 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
