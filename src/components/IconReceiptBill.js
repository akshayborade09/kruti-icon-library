import * as React from 'react';

const IconReceiptBill = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M8.5 7.5H15.5M8.5 11.5H11.5M19.5 21.5V5.5C19.5 3.84315 18.1569 2.5 16.5 2.5H7.5C5.84315 2.5 4.5 3.84315 4.5 5.5V21.5L7 19L9.5 21.5L12 19L14.5 21.5L17 19L19.5 21.5Z" })]);
};

export default IconReceiptBill;
