import * as React from 'react';

const IconChevronBottom = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M20 9L14.1213 14.8787C12.9498 16.0503 11.0503 16.0503 9.8787 14.8787L4 9" })]);
};

export default IconChevronBottom;
