import axios from 'axios';

const url = 'http://localhost:8000/todos/';

const sendRequest = async (url, data, method) => {
    const response= await axios({
        method: method,
        url: url,
        data: data,
        withCredentials: true,
        responseType: 'json',
    });
    return response.data;
}

const connector = {
    get: async () => {
        return await sendRequest(url, {}, 'get');
    },
    post: async (data) => {
        return await sendRequest(url, data, 'post');
    },
    put: async (id, data) => {
        return await sendRequest(url+`${id}/`, data, 'put');
    },
    delete: async (id) => {
        return await sendRequest(url+`${id}/`, {}, 'delete')
    }
};

export default connector;
