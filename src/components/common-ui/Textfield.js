import React from 'react';
import '../../styles/common.scss';
import styled from 'styled-components';

const TextField = ({ type, value, placeholder }) => {
  return (
    <>
      <div>
        <Input type={type} name="value" value={value} placeholder={placeholder} />
      </div>
    </>
  );
};

const Input = styled.input`
  border: 1px solid #dbdde0;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

export default TextField;
