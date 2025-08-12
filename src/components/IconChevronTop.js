import * as React from 'react';

const IconChevronTop = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M4 15L9.87866 9.12133C11.0502 7.94975 12.9497 7.94975 14.1213 9.12132L20 15" })]);
};

export default IconChevronTop;
