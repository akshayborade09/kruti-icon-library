import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconRobot: React.FC<IconProps> = ({
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
    <path d="M9 10C9 10.2761 8.77614 10.5 8.5 10.5C8.22386 10.5 8 10.2761 8 10M9 10C9 9.72386 8.77614 9.5 8.5 9.5C8.22386 9.5 8 9.72386 8 10M9 10H8M16 10C16 10.2761 15.7761 10.5 15.5 10.5C15.2239 10.5 15 10.2761 15 10M16 10C16 9.72386 15.7761 9.5 15.5 9.5C15.2239 9.5 15 9.72386 15 10M16 10H15M12 5V3M3.5 9C2.94772 9 2.5 9.44772 2.5 10C2.5 10.5523 2.94772 11 3.5 11M20.5 9C21.0523 9 21.5 9.44772 21.5 10C21.5 10.5523 21.0523 11 20.5 11M10 14.5H14M3.5 16V8C3.5 6.34315 4.84315 5 6.5 5H17.5C19.1569 5 20.5 6.34315 20.5 8V16C20.5 17.6569 19.1569 19 17.5 19H6.5C4.84315 19 3.5 17.6569 3.5 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
