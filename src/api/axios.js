import axios from 'axios';
import { readToken } from '../utils';

const { API_BASE_URL } = '../constants';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { httpClient };
