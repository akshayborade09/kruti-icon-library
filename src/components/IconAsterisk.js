import * as React from 'react';

const IconAsterisk = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M12.0007 2.5V21.5M3.77344 7.25L20.2279 16.75M3.77412 16.75L20.2286 7.25" })]);
};

export default IconAsterisk;
