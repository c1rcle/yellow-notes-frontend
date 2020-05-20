import axios from 'axios';

export default () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: localStorage.getItem('token')
      ? { Authorization: 'Bearer ' + localStorage.getItem('token') }
      : {}
  });
