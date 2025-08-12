import * as React from 'react';

const IconPeople2 = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M3.5 20.5V18.5C3.5 16.2909 5.29086 14.5 7.5 14.5H16.5C18.7091 14.5 20.5 16.2909 20.5 18.5V20.5M17 7.5C17 10.2614 14.7614 12.5 12 12.5C9.23858 12.5 7 10.2614 7 7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5Z" })]);
};

export default IconPeople2;
