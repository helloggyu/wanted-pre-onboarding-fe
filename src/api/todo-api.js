import api from './index';

// const todoHeader = { Authorization: 'Bearer access_token' };

export const createTodo = (formData) => {
  const url = '/todos';
  return api.post(url, formData);
};

export const getTodos = (formData) => {
  const url = '/todos';
  return api.get(url, formData);
};

export const updateTodo = (uid) => {
  const url = `/todos/${uid}`;
  return api.put(url, uid);
};
