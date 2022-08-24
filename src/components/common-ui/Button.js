import React from 'react';
import '../../styles/common.scss';

const Button = ({ text, type, styleType }) => {
  console.log('button component');
  return (
    <button type={type} className={styleType}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
