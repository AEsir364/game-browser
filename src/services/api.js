import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.allorigins.win/raw?url=https://www.freetogame.com/api'
});

export default api;