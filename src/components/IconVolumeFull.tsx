import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const IconVolumeFull: React.FC<IconProps> = ({
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
    <path d="M19.071 4.92968C20.8807 6.73932 22 9.23932 22 12.0007C22 14.7622 20.8807 17.2622 19.071 19.0718M15.8891 8.11132C16.8844 9.10662 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M4 7.99999H5.2759C5.74377 7.99999 6.19684 7.83596 6.55627 7.53643L10.3598 4.36681C11.0111 3.82403 12 4.28719 12 5.13503V18.8649C12 19.7128 11.0111 20.1759 10.3598 19.6332L6.55627 16.4635C6.19684 16.164 5.74377 16 5.2759 16H4C2.89543 16 2 15.1046 2 14V9.99999C2 8.89542 2.89543 7.99999 4 7.99999Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
