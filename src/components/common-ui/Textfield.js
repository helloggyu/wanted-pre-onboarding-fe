import React from 'react';
import styled from 'styled-components';

const Textfield = ({ value, placeholder }) => {
  return (
    <>
      <Input type="text" name="value" value={value} placeholder={placeholder} />
    </>
  );
};

const Input = styled.input`
  border: border-active;
  border-radius: 5px;
  width: w100p;
  padding: 10px;
`;

export default Textfield;
