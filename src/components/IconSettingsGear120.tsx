import React from 'react';
import { IconProps } from '../types';

const IconSettingsGear120: React.FC<IconProps> = ({ 
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
      <path d="M8.52918 3.32729C9.44241 2.81361 10.5575 2.81361 11.4707 3.32729L15.1374 5.38977C16.082 5.92113 16.6666 6.92068 16.6666 8.00451L16.6666 11.9954C16.6666 13.0792 16.082 14.0788 15.1374 14.6101L11.4707 16.6726C10.5574 17.1863 9.44242 17.1863 8.52921 16.6727L4.86259 14.6104C3.91791 14.079 3.33328 13.0794 3.33328 11.9956L3.33328 8.00449C3.33328 6.92066 3.91788 5.92111 4.86252 5.38975L8.52918 3.32729Z"    />
<path d="M8.77428 3.18941C9.53531 2.76134 10.4645 2.76135 11.2256 3.18942L15.3922 5.53314C16.1794 5.97594 16.6666 6.8089 16.6666 7.71209V12.2878C16.6666 13.191 16.1794 14.024 15.3922 14.4668L11.2255 16.8105C10.4645 17.2386 9.53531 17.2386 8.7743 16.8105L4.60768 14.467C3.82044 14.0242 3.33325 13.1912 3.33325 12.288L3.33325 7.71207C3.33325 6.80888 3.82041 5.97591 4.60762 5.53312L8.77428 3.18941Z"    />
<path d="M12.4999 10C12.4999 11.3807 11.3807 12.5 9.99994 12.5C8.61923 12.5 7.49994 11.3807 7.49994 10C7.49994 8.61929 8.61923 7.5 9.99994 7.5C11.3807 7.5 12.4999 8.61929 12.4999 10Z"    />
    </svg>
  );
};

IconSettingsGear120.displayName = 'IconSettingsGear120';

export default IconSettingsGear120;
