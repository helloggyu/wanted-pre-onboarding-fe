import React, { useState } from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/auth/auth.module.scss';
import aptc from '../utils/index.js';
import { SIGN_UP } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigater = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //이메일
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const emailVaildate = (email) => {
    return /^([a-zA-Z0-9_\-/.]+)@([a-zA-Z0-9_\-/.]+)\.([a-zA-Z]{2,5})$/.test(email);
  };

  //패스워드
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  //회원가입
  const signUp = async (e) => {
    e.preventDefault();
    const { result, isError } = await aptc(SIGN_UP, { email, password });
    if (isError) return alert('api error');
    const getToken = result.access_token;
    if (getToken) navigater('/');
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__wrapper}>
        <form onSubmit={signUp} className={styles.auth__mb_24}>
          <h2 className={styles.auth__title}>회원가입</h2>
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
          <Button text={'회원가입'} type={'submit'} styleType={'btn-line-primary'} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
