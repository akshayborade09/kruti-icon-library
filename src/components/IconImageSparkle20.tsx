import React from 'react';
import { IconProps } from '../types';

const IconImageSparkle20: React.FC<IconProps> = ({ 
  size = 20, 
  color = "currentColor", 
  ariaHidden = true,
  title,
  ...props 
}) => {
  const svgProps = {
    ...props,
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    'aria-hidden': ariaHidden,
    role: ariaHidden ? undefined : 'img'
  };

  return (
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M11.3121 6.95911L11.7107 6.16202C11.8642 5.85492 12.3025 5.85492 12.456 6.16202L12.8546 6.95911C12.8949 7.03974 12.9603 7.10513 13.0409 7.14545L13.838 7.54399C14.1451 7.69754 14.1451 8.13579 13.838 8.28934L13.0409 8.68789C12.9603 8.72821 12.8949 8.79359 12.8546 8.87423L12.456 9.67131C12.3025 9.97841 11.8642 9.97841 11.7107 9.67131L11.3121 8.87423C11.2718 8.79359 11.2064 8.72821 11.1258 8.68789L10.3287 8.28934C10.0216 8.13579 10.0216 7.69754 10.3287 7.54399L11.1258 7.14545C11.2064 7.10513 11.2718 7.03974 11.3121 6.95911Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H14.1667C16.0076 2.5 17.5 3.99238 17.5 5.83333V14.1667C17.5 16.0076 16.0076 17.5 14.1667 17.5H5.83333C3.99238 17.5 2.5 16.0076 2.5 14.1667V5.83333ZM5.83333 4.16667C4.91286 4.16667 4.16667 4.91286 4.16667 5.83333V11.3215L4.30964 11.1785C5.61139 9.87676 7.72194 9.87676 9.02369 11.1785L13.6785 15.8333H14.1667C15.0871 15.8333 15.8333 15.0871 15.8333 14.1667V5.83333C15.8333 4.91286 15.0871 4.16667 14.1667 4.16667H5.83333ZM11.3215 15.8333L7.84518 12.357C7.1943 11.7061 6.13903 11.7061 5.48816 12.357L4.16667 13.6785V14.1667C4.16667 15.0871 4.91286 15.8333 5.83333 15.8333H11.3215Z" />
    </svg>
  );
};

IconImageSparkle20.displayName = 'IconImageSparkle20';

export default IconImageSparkle20;
