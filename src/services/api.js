import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sejaumheroi.herokuapp.com',
});

export default api;