import * as React from 'react';

const IconTranslate = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M14.344 17.125H19.656M21.25 19.25 17.936 10.476C17.61 9.614 16.39 9.614 16.064 10.476L12.75 19.25M12 3.6 12 12M7.8 7.2H11.4M9.6 3.6H14.4M3.6 3.6H5.4C6.394 3.6 7.2 4.406 7.2 5.4V5.4C7.2 6.394 6.394 7.2 5.4 7.2H4.8M4.8 7.2H5.918C7.289 7.2 8.4 8.311 8.4 9.683V9.683C8.4 10.987 7.387 12.105 6.084 12.031 5.95 12.023 5.821 12.013 5.7 12 4.652 11.886 3 10.8 3 10.8" })]);
};

export default IconTranslate;
