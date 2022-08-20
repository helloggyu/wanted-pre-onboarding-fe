import React from 'react';
import '../../styles/common.scss';
import styled from 'styled-components';

const Textfield = ({ type, value, placeholder }) => {
  return (
    <>
      <div>
        <Input type={type} name="value" value={value} placeholder={placeholder} />
      </div>
    </>
  );
};

const Input = styled.input`
  border: border-active;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
`;

export default Textfield;
