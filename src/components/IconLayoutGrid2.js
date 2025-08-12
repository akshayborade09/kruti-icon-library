import * as React from 'react';

const IconLayoutGrid2 = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M3.5 8.3C3.5 6.62 3.5 5.78 3.827 5.138 4.115 4.574 4.574 4.115 5.138 3.827 5.78 3.5 6.62 3.5 8.3 3.5H10.5V10.5H3.5V8.3ZM13.5 3.5H15.7C17.38 3.5 18.22 3.5 18.862 3.827 19.427 4.115 19.885 4.574 20.173 5.138 20.5 5.78 20.5 6.62 20.5 8.3V10.5H13.5V3.5ZM3.5 13.5H10.5V20.5H8.3C6.62 20.5 5.78 20.5 5.138 20.173 4.574 19.885 4.115 19.427 3.827 18.862 3.5 18.22 3.5 17.38 3.5 15.7V13.5ZM13.5 13.5H20.5V15.7C20.5 17.38 20.5 18.22 20.173 18.862 19.885 19.427 19.427 19.885 18.862 20.173 18.22 20.5 17.38 20.5 15.7 20.5H13.5V13.5Z" })]);
};

export default IconLayoutGrid2;
