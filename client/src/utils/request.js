import axios from 'axios';

const request = async (method, path, data = null, headers = {}) => {
    try {
        const response = await axios({
            method,
            url: `http://localhost:5000/${path}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

export default request;
