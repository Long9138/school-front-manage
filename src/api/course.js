import axios from 'axios';

export function getCourese() {
  return axios.get('/api/courses').then(res => res.data)
}