import React from 'react';
import styled from 'styled-components';
const Textfield = ({ value, placeholder }) => {
  return (
    <>
      <Container>
        <Input type="text" name="value" value={value} placeholder={placeholder} />
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 80%;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  padding: 12px;
  margin: 16px;
  border-radius: 5px;
`;

export default Textfield;
