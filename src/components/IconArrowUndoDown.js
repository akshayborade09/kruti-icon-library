import * as React from 'react';

const IconArrowUndoDown = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M6.00002 19L3.06068 16.0607C2.47489 15.4749 2.47489 14.5251 3.06068 13.9393L6.00002 11M3.00002 15H16.75C19.3734 15 21.5 12.8734 21.5 10.25C21.5 7.62665 19.3734 5.5 16.75 5.5H12" })]);
};

export default IconArrowUndoDown;
