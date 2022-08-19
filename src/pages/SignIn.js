import React from 'react';
import UserInfoForm from '../components/auth/UserInfoForm';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <>
      <Container>
        <UserInfoForm />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 500px;
  padding: 5px;
`;

export default SignIn;
