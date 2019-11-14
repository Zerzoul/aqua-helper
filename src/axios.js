import axios from 'axios';

export default axios.create({
    baseURL: 'http://zerzoul.com/admin-system/api',
    timeout: 10000,
  });