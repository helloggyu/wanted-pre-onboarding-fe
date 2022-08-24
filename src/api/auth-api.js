import api from './index';

// 회원가입
export const SIGN_UP = (formData) => {
  const url = '/auth/signup';
  console.log(formData);
  return api.post(url, formData);
};

// 로그인
export const SIGN_IN = (formData) => {
  const url = 'auth/signin';
  return api.post(url, formData);
};
