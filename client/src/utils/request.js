import axios from 'axios';

const request = async (method, path, data , headers = {}) => {
    try {
        const response = await axios({
            method,
            url: `http://localhost:5000/${path}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        // throw error.response.data || error.message;
        console.log(error.response.data.message)
        return {success:false,message:error.response.data.message};
    }
};

export default request;
