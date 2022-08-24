import React, { useState, useEffect } from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/auth/auth.module.scss';
import aptc from '../utils';
import { SIGN_IN } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigater = useNavigate();
  useEffect(() => {
    if (token) {
      navigater('/todo');
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token = localStorage.getItem('access_token');
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

    const { result } = await aptc(SIGN_IN, { email, password });
    const getToken = result.access_token;
    if (token) {
      navigater('/todo');
    } else {
      localStorage.setItem('access_token', getToken);
    }
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__wrapper}>
        <form onSubmit={login} className={styles.auth__mb_24}>
          <h2 className={styles.auth__title}>로그인</h2>
          <div className={styles.auth__inner_wrapper}>
            <div className={styles.auth__mb_24}>
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
            <div>
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
          <Button text={'로그인'} type={'submit'} styleType={'btn-line-secondary'} />
        </form>
        <Button
          text={'회원가입하러 가기!!'}
          type={'button'}
          styleType={'btn-fill-primary'}
          handleClick={() => navigater('/sign-up')}
        />
      </div>
    </div>
  );
};

export default SignIn;
