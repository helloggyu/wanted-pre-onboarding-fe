import api from './index';

// 회원가입
export const signUp = (formData) => {
  const url = 'auth/signup';
  return api.post(url, formData);
};

// 로그인
export const signIn = (formData) => {
  const url = 'auth/signin';
  return api.post(url, formData);
};
