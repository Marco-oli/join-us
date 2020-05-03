import axios from 'axios';

const api = axios.create({
    baseURL: 'http://demo8385360.mockable.io/products'
});

export default api;
    