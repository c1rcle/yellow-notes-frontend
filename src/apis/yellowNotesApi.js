import axios from 'axios';

export default axios.create({
  baseURL: 'https://localhost:53225/',
  timeout: 1000,
  headers: localStorage.getItem('token')
    ? { Authorization: 'Bearer ' + localStorage.getItem('token') }
    : {}
});
