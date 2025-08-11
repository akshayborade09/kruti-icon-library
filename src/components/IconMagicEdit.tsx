import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconMagicEdit: React.FC<IconProps> = ({
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
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.5 20.5v-2.757a3 3 0 0 1 .879-2.122L15.75 4.25a2.828 2.828 0 1 1 4 4L8.379 19.621a3 3 0 0 1-2.122.879z"/><path fill="#000" d="M4.755 5.158a.285.285 0 0 0-.51 0l-.653 1.306a.3.3 0 0 1-.128.128l-1.306.653a.285.285 0 0 0 0 .51l1.306.653q.084.044.128.128l.653 1.306c.105.21.405.21.51 0l.653-1.306a.3.3 0 0 1 .128-.128l1.306-.653a.285.285 0 0 0 0-.51l-1.306-.653a.3.3 0 0 1-.128-.128zm4.509-2.995a.296.296 0 0 0-.528 0l-.48.96a.3.3 0 0 1-.133.133l-.96.48a.296.296 0 0 0 0 .528l.96.48a.3.3 0 0 1 .133.133l.48.96c.108.217.42.217.528 0l.48-.96a.3.3 0 0 1 .133-.133l.96-.48a.296.296 0 0 0 0-.528l-.96-.48a.3.3 0 0 1-.133-.133zm9.491 12.995a.285.285 0 0 0-.51 0l-.653 1.306a.3.3 0 0 1-.128.128l-1.306.653a.285.285 0 0 0 0 .51l1.306.653q.084.044.128.128l.653 1.306c.105.21.405.21.51 0l.653-1.306a.3.3 0 0 1 .128-.128l1.306-.653a.285.285 0 0 0 0-.51l-1.306-.653a.3.3 0 0 1-.128-.128z"/>
  </svg>
);
