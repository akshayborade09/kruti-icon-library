import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const IconMicrophoneMicSoundPodcast: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1,
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 19.5C15.4496 19.5 18.3552 17.1712 19.2304 14M12 19.5C8.55051 19.5 5.6449 17.1712 4.76965 14M12 19.5V21.5M12 16.5C9.51475 16.5 7.50003 14.4853 7.50003 12V7C7.50003 4.51472 9.51475 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7V12C16.5 14.4853 14.4853 16.5 12 16.5Z"/>
  </svg>
);
