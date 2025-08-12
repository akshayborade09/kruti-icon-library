import * as React from 'react';

const IconArrowUp = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M5.5 10L12 3.5M12 3.5L18.5 10M12 3.5V20.5" })]);
};

export default IconArrowUp;
