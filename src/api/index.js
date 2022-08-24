import axios from 'axios';

const headers = {
  'Content-Type': 'applocation/json',
  Accept: 'application/json',
};

//const baseURL = 'http://localhost:8080/"';
const baseURL = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/';

const api = axios.create({
  baseURL,
  headers,
  validateStatus: function (status) {
    return status === 200 || status === 201;
  },
});

export default api;
