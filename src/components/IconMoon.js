import * as React from 'react';

const IconMoon = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M21.5 11.9943C20.3396 12.9358 18.8607 13.5 17.25 13.5C13.5221 13.5 10.5 10.4779 10.5 6.75C10.5 5.13929 11.0642 3.66035 12.0057 2.5L12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12L21.5 11.9943Z" })]);
};

export default IconMoon;
