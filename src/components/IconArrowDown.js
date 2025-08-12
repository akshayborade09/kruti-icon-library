import * as React from 'react';

const IconArrowDown = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M18.5 14L12 20.5M12 20.5L5.5 14M12 20.5V3.5" })]);
};

export default IconArrowDown;
