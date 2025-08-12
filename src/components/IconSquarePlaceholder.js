import * as React from 'react';

const IconSquarePlaceholder = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M20.5 15.7V8.3C20.5 6.61984 20.5 5.77976 20.173 5.13803C19.8854 4.57354 19.4265 4.1146 18.862 3.82698C18.2202 3.5 17.3802 3.5 15.7 3.5H8.3C6.61984 3.5 5.77976 3.5 5.13803 3.82698C4.57354 4.1146 4.1146 4.57354 3.82698 5.13803C3.5 5.77976 3.5 6.61984 3.5 8.3V15.7C3.5 17.3802 3.5 18.2202 3.82698 18.862C4.1146 19.4265 4.57354 19.8854 5.13803 20.173C5.77976 20.5 6.61984 20.5 8.3 20.5H15.7C17.3802 20.5 18.2202 20.5 18.862 20.173C19.4265 19.8854 19.8854 19.4265 20.173 18.862C20.5 18.2202 20.5 17.3802 20.5 15.7Z" })]);
};

export default IconSquarePlaceholder;
