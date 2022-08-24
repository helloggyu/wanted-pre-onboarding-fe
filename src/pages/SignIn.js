import React, { useState } from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/auth/auth.module.scss';
import aptc from '../utils';
import { SIGN_IN } from '../api/auth-api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const emailVaildate = (email) => {
    return /^([a-zA-Z0-9_\-/.]+)@([a-zA-Z0-9_\-/.]+)\.([a-zA-Z]{2,5})$/.test(email);
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(e);
    const result = await aptc(SIGN_IN({ email, password }));
    console.log(result);
  };

  return (
    <div className={styles.auth}>
      <form className={styles.auth__wrapper} onSubmit={login}>
        <h2 className={styles.auth__title}>로그인</h2>
        <div className={styles.auth__inner_wrapper}>
          <div>
            <p className={styles.auth__sub_title}>이메일</p>
            <TextField
              type={'text'}
              value={email}
              placeholder={'이메일을 입력해주세요.'}
              handleChange={(e) => handleEmailChange(e.target.value)}
              useErrorMsg={
                emailVaildate(email) || email.length <= 0 ? null : '이메일을 다시 확인해주세요'
              }
            />
          </div>
          <div className={styles.auth__mt_3}>
            <p className={styles.auth__sub_title}>비밀번호</p>
            <TextField
              type={'password'}
              value={password}
              placeholder={'비밀번호를 입력해주세요.'}
              handleChange={(e) => handlePasswordChange(e.target.value)}
              useErrorMsg={
                password.length < 8 && password.length > 0
                  ? '비밀번호는 8자이상 입력해주세요'
                  : null
              }
            />
          </div>
        </div>
        <Button text={'로그인'} type={'button'} styleType={'btn-line-secondary'} />
      </form>
    </div>
  );
};

export default SignIn;
