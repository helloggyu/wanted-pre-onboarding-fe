import React from 'react';
import TextField from '../components/common-ui/TextField';
import '../styles/common.scss';
import styles from '../styles/auth/auth.module.scss';
const SignIn = () => {
  return (
    <>
      <div className={styles.auth__wrapper}>
        <h2 className={styles.auth__title}>로그인</h2>
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
        <button className="btn-line-secondary">로그인</button>
      </div>
    </>
  );
};

export default SignIn;
