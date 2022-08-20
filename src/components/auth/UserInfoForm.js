import React from 'react';
import TextField from '../common-ui/TextField';
import '../../styles/common.scss';
import styles from '../../styles/auth/auth.module.scss';
const UserInfoForm = ({ title }) => {
  return (
    <>
      <div className={styles.auth__wrapper}>
        {/* 제목 */}
        <h2 className={styles.auth__title}>{title}</h2>
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
      </div>
    </>
  );
};

export default UserInfoForm;
