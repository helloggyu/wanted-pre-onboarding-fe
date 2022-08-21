import React from 'react';
import TextField from '../components/common-ui/TextField';
import Button from '../components/common-ui/Button';
import styles from '../styles/auth/auth.module.scss';

const SignUp = () => {
  return (
    <>
      <div className={styles.auth__wrapper}>
        <h2 className={styles.auth__title}>회원가입</h2>
        <div className={styles.auth__inner_wrapper}>
          <div>
            <p className={styles.auth__sub_title}>이메일</p>
            <TextField type="text" placeholder="이메일을 입력해주세요" />
          </div>
          <div className={styles.auth__mt_3}>
            <p className={styles.auth__sub_title}>비밀번호</p>
            <TextField type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
        </div>
        <Button text="회원가입" type="button" styleType="btn-line-primary" />
      </div>
    </>
  );
};

export default SignUp;
