import * as React from 'react';

const IconChevronLeft = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M15 20L9.12136 14.1213C7.94978 12.9498 7.94978 11.0503 9.12135 9.8787L15 4" })]);
};

export default IconChevronLeft;
