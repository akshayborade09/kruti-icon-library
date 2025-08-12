import * as React from 'react';

const IconCheckmark2 = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "d": "M2.5 15.5L9.20588 20.5L21.5 3.5" })]);
};

export default IconCheckmark2;
