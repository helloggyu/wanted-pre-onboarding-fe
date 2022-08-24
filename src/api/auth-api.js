import api from './index';

// 회원가입
export const SIGN_UP = ({ email, password }) => {
  const url = 'auth/signup';
  return api.post(url, { email, password });
};

// 로그인
export const SIGN_IN = ({ email, password }) => {
  const url = 'auth/signin';
  return api.post(url, { email, password });
};
