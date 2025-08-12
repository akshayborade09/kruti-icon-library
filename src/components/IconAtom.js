import * as React from 'react';

const IconAtom = (props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 2, ...restProps } = props;
  
  return React.createElement('svg', {
    width: size,
    height: size,
    stroke: color,
    strokeWidth: strokeWidth,
    fill: 'none',
    viewBox: '0 0 24 24',
    ...restProps
  }, [React.createElement('path', { "d": "M19.941 4.059C21.6117 5.72974 19.4108 10.6395 15.0251 15.0251C10.6395 19.4108 5.72974 21.6117 4.059 19.941C2.38826 18.2703 4.58917 13.3606 8.97486 8.97486C13.3606 4.58917 18.2703 2.38826 19.941 4.059Z" }), React.createElement('path', { "d": "M19.941 19.941C18.2703 21.6117 13.3605 19.4108 8.97486 15.0251C4.58916 10.6394 2.38826 5.72974 4.059 4.059C5.72974 2.38826 10.6394 4.58916 15.0251 8.97486C19.4108 13.3605 21.6117 18.2703 19.941 19.941Z" })]);
};

export default IconAtom;
