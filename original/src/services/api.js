import axios from 'axios';

const api = axios.create({
    baseURL: 'https://demo8385360.mockable.io/products'
});

export default api;
    