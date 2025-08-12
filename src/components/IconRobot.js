import * as React from 'react';

const IconRobot = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M9.5 14.5H14.5M12 4.5V2.5M2.5 8.5C1.94772 8.5 1.5 8.94772 1.5 9.5V10.5C1.5 11.0523 1.94772 11.5 2.5 11.5M21.5 8.5C22.0523 8.5 22.5 8.94772 22.5 9.5V10.5C22.5 11.0523 22.0523 11.5 21.5 11.5M9.5 10C9.5 10.5523 9.05228 11 8.5 11C7.94772 11 7.5 10.5523 7.5 10C7.5 9.44772 7.94772 9 8.5 9C9.05228 9 9.5 9.44772 9.5 10ZM16.5 10C16.5 10.5523 16.0523 11 15.5 11C14.9477 11 14.5 10.5523 14.5 10C14.5 9.44772 14.9477 9 15.5 9C16.0523 9 16.5 9.44772 16.5 10ZM21 16.5V7.5C21 5.84315 19.6569 4.5 18 4.5H6C4.34315 4.5 3 5.84315 3 7.5V16.5C3 18.1569 4.34315 19.5 6 19.5H18C19.6569 19.5 21 18.1569 21 16.5Z" })]);
};

export default IconRobot;
