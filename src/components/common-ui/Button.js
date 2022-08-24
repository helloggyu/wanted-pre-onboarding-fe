import React from 'react';
import '../../styles/common.scss';

const Button = ({ text, type, styleType, handleClick }) => {
  return (
    <button type={type} className={styleType} onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
