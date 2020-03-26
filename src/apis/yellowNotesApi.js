import axios from 'axios';

let url = 'https://api.yellownotes.c1rcle.pl/';
if (process.env.NODE_ENV === 'development') {
  url = 'https://localhost:5001/';
}

export default axios.create({
  baseURL: url,
  timeout: 10000,
  headers: localStorage.getItem('token')
    ? { Authorization: 'Bearer ' + localStorage.getItem('token') }
    : {}
});
