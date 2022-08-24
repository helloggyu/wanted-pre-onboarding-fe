import React from 'react';
import styled from 'styled-components';
const CheckBox = ({ checked, handleChange, label, id }) => {
  console.log('checkbox component');
  return (
    <CheckboxContainer>
      <Label htmlFor={id} checked={checked}>
        <Checkbox
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          defaultValue={checked}
        />
      </Label>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input`
  border: 1px solid #42b883;
  border-radius: 5px;
  height: 16px;
  margin-right: 10px;
  width: 16px;
`;
const Label = styled.label`
  color: #42b883;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  margin-top: 1px;
`;

export default CheckBox;
