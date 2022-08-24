import React from 'react';
import '../../styles/common.scss';
import styled from 'styled-components';

const TextField = ({ type, value, placeholder, handleChange, useErrorMsg }) => {
  return (
    <>
      <div>
        <Textfield type={type} value={value} placeholder={placeholder} onChange={handleChange} />
        {useErrorMsg ? <ErrorMsg>{useErrorMsg}</ErrorMsg> : null}
      </div>
    </>
  );
};

const Textfield = styled.input`
  border: 1px solid #dbdde0;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const ErrorMsg = styled.p`
  size: 10;
  weight: 500;
  color: #fd616d;
  padding: 4px;
`;

export default TextField;
