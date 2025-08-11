import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconThunder: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19.0037 9.98686H12.9944L15.466 2.32508C15.8017 1.28423 14.4862 0.525745 13.773 1.34898L4.24869 12.3429C3.68506 12.9935 4.14148 14.0131 4.99634 14.0131H11.0056L8.53401 21.6749C8.19825 22.7158 9.51377 23.4743 10.227 22.651L19.7513 11.6571C20.3149 11.0065 19.8585 9.98686 19.0037 9.98686Z" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
