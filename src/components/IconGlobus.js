import * as React from 'react';

const IconGlobus = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "square", "d": "M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5M12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5M12 21.5C9.79086 21.5 8 17.2467 8 12C8 6.75329 9.79086 2.5 12 2.5M12 21.5C14.2091 21.5 16 17.2467 16 12C16 6.75329 14.2091 2.5 12 2.5M21 12H3" })]);
};

export default IconGlobus;
