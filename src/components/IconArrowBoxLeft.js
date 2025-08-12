import * as React from 'react';

const IconArrowBoxLeft = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M20.5 12L9.5 12M20.5 12L16 16.5M20.5 12L16 7.5M11.5 20.5H6.5C4.84315 20.5 3.5 19.1569 3.5 17.5L3.5 6.5C3.5 4.84315 4.84315 3.5 6.5 3.5L11.5 3.5" })]);
};

export default IconArrowBoxLeft;
