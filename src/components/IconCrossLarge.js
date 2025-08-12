import * as React from 'react';

const IconCrossLarge = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "d": "M4.5 4.5L19.5 19.5M19.5 4.5L4.5 19.5" })]);
};

export default IconCrossLarge;
