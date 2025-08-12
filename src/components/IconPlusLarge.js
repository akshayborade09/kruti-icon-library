import * as React from 'react';

const IconPlusLarge = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "linecap": "round", "linejoin": "round", "d": "M12 3.5V12M12 12V20.5M12 12H3.5M12 12H20.5" })]);
};

export default IconPlusLarge;
