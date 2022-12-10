import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
