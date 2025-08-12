import * as React from 'react';

const IconGroup2 = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "width": "1.625", "d": "M14 13.4304C16.8903 12.23 20.4269 13.5406 21.9061 17.3624C22.5342 18.9851 21.096 20.5 19.3561 20.5H15.75M10.5 7C10.5 8.79493 9.04489 10.25 7.24996 10.25C5.45504 10.25 3.99996 8.79493 3.99996 7C3.99996 5.20507 5.45504 3.75 7.24996 3.75C9.04489 3.75 10.5 5.20507 10.5 7ZM10.6382 20.5H4.21888C2.47897 20.5 1.0413 18.9823 1.66984 17.3598C3.9219 11.5467 10.9352 11.5467 13.1872 17.3598C13.8158 18.9823 12.3781 20.5 10.6382 20.5ZM19.75 7C19.75 8.79493 18.2949 10.25 16.5 10.25C14.705 10.25 13.25 8.79493 13.25 7C13.25 5.20507 14.705 3.75 16.5 3.75C18.2949 3.75 19.75 5.20507 19.75 7Z" })]);
};

export default IconGroup2;
