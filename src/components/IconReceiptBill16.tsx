import React from 'react';
import { IconProps } from '../types';

const IconReceiptBill16: React.FC<IconProps> = ({ 
  size = 16, 
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
    <svg {...svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      {title && !ariaHidden && <title>{title}</title>}
      <path d="M5.83341 5.16666H10.1667M5.83341 7.83333H7.50008M12.8334 14.1667V4.83333C12.8334 3.17647 11.4903 1.83333 9.83341 1.83333H6.16675C4.50989 1.83333 3.16675 3.17647 3.16675 4.83333V14.1667L4.88897 12.6667L6.44453 14.1667L8.00008 12.6667L9.55564 14.1667L11.1112 12.6667L12.8334 14.1667Z"    />
    </svg>
  );
};

IconReceiptBill16.displayName = 'IconReceiptBill16';

export default IconReceiptBill16;
