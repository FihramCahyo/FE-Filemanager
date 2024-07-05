import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});
export const getFolder = async () => {
    try {
        const response = await api.get('/folder');
        return response.data;
    } catch (error) {
        console.error('Error fetching example data', error);
        throw error;
    }
};